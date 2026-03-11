const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const HOST = "0.0.0.0";
const PORT = Number(process.env.PORT || 8000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const ACTIVITY_FILE = path.join(DATA_DIR, "activity_log.json");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".zip": "application/zip",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(USERS_FILE)) {
    const seed = [
      {
        username: "admin",
        password: "admin123",
        role: "ADMIN",
        permissions: { can_upload_data: true, can_download_reports: true, can_view_login_activity: true },
      },
    ];
    fs.writeFileSync(USERS_FILE, JSON.stringify(seed, null, 2));
  }
  if (!fs.existsSync(ACTIVITY_FILE)) {
    fs.writeFileSync(ACTIVITY_FILE, JSON.stringify([], null, 2));
  }
}

function readJsonSafe(file, fallback) {
  try {
    const raw = fs.readFileSync(file, "utf8");
    const data = JSON.parse(raw);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJsonSafe(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2));
}

function getUsers() {
  const users = readJsonSafe(USERS_FILE, []);
  if (!users.find((u) => String(u.username).toLowerCase() === "admin")) {
    users.push({
      username: "admin",
      password: "admin123",
      role: "ADMIN",
      permissions: { can_upload_data: true, can_download_reports: true, can_view_login_activity: true },
    });
    writeJsonSafe(USERS_FILE, users);
  }
  for (const u of users) {
    const role = String(u.role || "USER").toUpperCase() === "ADMIN" ? "ADMIN" : "USER";
    if (!u.permissions || typeof u.permissions !== "object") u.permissions = {};
    if (role === "ADMIN") {
      u.permissions = { can_upload_data: true, can_download_reports: true, can_view_login_activity: true };
    } else {
      if (typeof u.permissions.can_upload_data !== "boolean") u.permissions.can_upload_data = true;
      if (typeof u.permissions.can_download_reports !== "boolean") u.permissions.can_download_reports = true;
      if (typeof u.permissions.can_view_login_activity !== "boolean") u.permissions.can_view_login_activity = false;
    }
  }
  writeJsonSafe(USERS_FILE, users);
  return users;
}

function saveUsers(users) {
  writeJsonSafe(USERS_FILE, users);
}

function getLogs() {
  return readJsonSafe(ACTIVITY_FILE, []);
}

function saveLogs(logs) {
  writeJsonSafe(ACTIVITY_FILE, logs.slice(-10000));
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8").trim();
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function normalizeUser(u) {
  const role = String(u.role || "USER").trim().toUpperCase() === "ADMIN" ? "ADMIN" : "USER";
  const permissions =
    role === "ADMIN"
      ? { can_upload_data: true, can_download_reports: true, can_view_login_activity: true }
      : {
          can_upload_data: typeof u.permissions?.can_upload_data === "boolean" ? u.permissions.can_upload_data : true,
          can_download_reports:
            typeof u.permissions?.can_download_reports === "boolean" ? u.permissions.can_download_reports : true,
          can_view_login_activity:
            typeof u.permissions?.can_view_login_activity === "boolean" ? u.permissions.can_view_login_activity : false,
        };
  return {
    username: String(u.username || "").trim(),
    role,
    permissions,
  };
}

async function handleApi(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/health") {
    return sendJson(res, 200, { ok: true });
  }

  if (req.method === "GET" && pathname === "/api/users") {
    const users = getUsers().map(normalizeUser);
    return sendJson(res, 200, { users });
  }

  if (req.method === "POST" && pathname === "/api/login") {
    const body = await readBody(req);
    const username = String(body.username || "").trim();
    const password = String(body.password || "").trim();
    const users = getUsers();
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) return sendJson(res, 401, { ok: false, error: "Invalid username or password" });
    return sendJson(res, 200, { ok: true, user: normalizeUser(user) });
  }

  if (req.method === "POST" && pathname === "/api/users") {
    const body = await readBody(req);
    const adminUser = String(body.admin_user || "").trim();
    const adminRole = String(body.admin_role || "").trim().toUpperCase();
    const username = String(body.username || "").trim();
    const password = String(body.password || "").trim();
    const role = String(body.role || "USER").trim().toUpperCase() === "ADMIN" ? "ADMIN" : "USER";
    const incomingPerms = body.permissions && typeof body.permissions === "object" ? body.permissions : {};
    const permissions =
      role === "ADMIN"
        ? { can_upload_data: true, can_download_reports: true, can_view_login_activity: true }
        : {
            can_upload_data: typeof incomingPerms.can_upload_data === "boolean" ? incomingPerms.can_upload_data : true,
            can_download_reports:
              typeof incomingPerms.can_download_reports === "boolean" ? incomingPerms.can_download_reports : true,
            can_view_login_activity:
              typeof incomingPerms.can_view_login_activity === "boolean" ? incomingPerms.can_view_login_activity : false,
          };
    const users = getUsers();
    const admin = users.find((u) => u.username === adminUser && u.role === "ADMIN");
    if (!admin || adminRole !== "ADMIN") return sendJson(res, 403, { ok: false, error: "Admin authorization required" });
    if (!username || !password) return sendJson(res, 400, { ok: false, error: "Username and password required" });
    if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
      return sendJson(res, 409, { ok: false, error: "Username already exists" });
    }
    users.push({ username, password, role, permissions });
    saveUsers(users);
    return sendJson(res, 200, { ok: true, users: users.map(normalizeUser) });
  }

  if (req.method === "POST" && pathname === "/api/users/delete") {
    const body = await readBody(req);
    const adminUser = String(body.admin_user || "").trim();
    const adminRole = String(body.admin_role || "").trim().toUpperCase();
    const username = String(body.username || "").trim();
    const users = getUsers();
    const admin = users.find((u) => u.username === adminUser && u.role === "ADMIN");
    if (!admin || adminRole !== "ADMIN") return sendJson(res, 403, { ok: false, error: "Admin authorization required" });
    if (String(username).toLowerCase() === "admin") return sendJson(res, 400, { ok: false, error: "Cannot delete admin user" });
    const filtered = users.filter((u) => u.username !== username);
    saveUsers(filtered);
    return sendJson(res, 200, { ok: true, users: filtered.map(normalizeUser) });
  }

  if (req.method === "POST" && pathname === "/api/users/change-password") {
    const body = await readBody(req);
    const actorUser = String(body.actor_user || "").trim();
    const actorRole = String(body.actor_role || "").trim().toUpperCase();
    const username = String(body.username || "").trim();
    const oldPassword = String(body.old_password || "").trim();
    const newPassword = String(body.new_password || "").trim();
    if (!username || !newPassword) {
      return sendJson(res, 400, { ok: false, error: "Username and new password required" });
    }
    const users = getUsers();
    const actor = users.find((u) => u.username === actorUser);
    if (!actor || actorRole !== actor.role) {
      return sendJson(res, 403, { ok: false, error: "Authentication required" });
    }
    const target = users.find((u) => u.username === username);
    if (!target) return sendJson(res, 404, { ok: false, error: "User not found" });
    const isSelf = actorUser === username;
    const isAdmin = actor.role === "ADMIN";
    if (!isSelf && !isAdmin) {
      return sendJson(res, 403, { ok: false, error: "Only admin can change other users password" });
    }
    if (isSelf && target.password !== oldPassword) {
      return sendJson(res, 401, { ok: false, error: "Current password is incorrect" });
    }
    target.password = newPassword;
    saveUsers(users);
    return sendJson(res, 200, { ok: true, user: normalizeUser(target) });
  }

  if (req.method === "GET" && pathname === "/api/activity") {
    return sendJson(res, 200, { logs: getLogs() });
  }

  if (req.method === "POST" && pathname === "/api/activity") {
    const body = await readBody(req);
    const entry = {
      time: new Date().toISOString(),
      client_time: String(body.client_time || "").trim(),
      user: String(body.user || "unknown").trim() || "unknown",
      role: String(body.role || "USER").trim().toUpperCase(),
      action: String(body.action || "").trim(),
      details: String(body.details || "").trim(),
      ip: req.socket?.remoteAddress || "",
      user_agent: String(req.headers["user-agent"] || ""),
    };
    const logs = getLogs();
    logs.push(entry);
    saveLogs(logs);
    return sendJson(res, 200, { ok: true });
  }

  if (req.method === "POST" && pathname === "/api/activity/clear") {
    const body = await readBody(req);
    const user = String(body.user || "").trim();
    const role = String(body.role || "").trim().toUpperCase();
    const users = getUsers();
    const actor = users.find((u) => u.username === user && u.role === "ADMIN");
    if (!actor || role !== "ADMIN") return sendJson(res, 403, { ok: false, error: "Admin authorization required" });
    saveLogs([]);
    return sendJson(res, 200, { ok: true });
  }

  return sendJson(res, 404, { ok: false, error: "Not found" });
}

function safeResolvePath(requestPath) {
  let pathname = decodeURIComponent(requestPath || "/");
  if (pathname === "/") pathname = "/index.html";
  const full = path.resolve(ROOT, `.${pathname}`);
  if (!full.startsWith(ROOT)) return null;
  return full;
}

function serveStatic(req, res, pathname) {
  const full = safeResolvePath(pathname);
  if (!full) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.stat(full, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(full).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    fs.createReadStream(full).pipe(res);
  });
}

ensureDataFiles();

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url || "/", true);
  const pathname = parsed.pathname || "/";
  if (pathname.startsWith("/api/")) {
    try {
      await handleApi(req, res, pathname);
    } catch (e) {
      sendJson(res, 500, { ok: false, error: e.message || "Server error" });
    }
    return;
  }
  serveStatic(req, res, pathname);
});

server.listen(PORT, HOST, () => {
  console.log(`Warehouse web server running on http://localhost:${PORT}`);
});
