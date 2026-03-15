const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const crypto = require("crypto");

const HOST = "0.0.0.0";
const PORT = Number(process.env.PORT || 8000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const ACTIVITY_FILE = path.join(DATA_DIR, "activity_log.json");

const TOKEN_TTL_MS = Number(process.env.TOKEN_TTL_MS || 1000 * 60 * 60 * 12);
const PASSWORD_PBKDF2_ITERATIONS = 120000;
const PASSWORD_KEY_LENGTH = 32;
const PASSWORD_DIGEST = "sha256";
const LOGIN_WINDOW_MS = 1000 * 60 * 15;
const LOGIN_MAX_ATTEMPTS = 8;
const LOGIN_BLOCK_MS = 1000 * 60 * 15;
const ADMIN_DEFAULT_USERNAME = "Ramees";
const ADMIN_DEFAULT_PASSWORD = "Ramees@123v";

const loginAttempts = new Map();

const configuredSecret = String(process.env.AUTH_TOKEN_SECRET || "").trim();
const TOKEN_SECRET = configuredSecret || crypto.randomBytes(32).toString("hex");
if (!configuredSecret) {
  console.warn("[security] AUTH_TOKEN_SECRET is not set. Using temporary secret; all sessions reset on restart.");
}

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
        username: ADMIN_DEFAULT_USERNAME,
        password_hash: hashPassword(ADMIN_DEFAULT_PASSWORD),
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

function normalizePermissions(value, role = "USER") {
  const admin = String(role || "").toUpperCase() === "ADMIN";
  const base = {
    can_upload_data: true,
    can_download_reports: true,
    can_view_login_activity: false,
  };
  if (admin) {
    return {
      can_upload_data: true,
      can_download_reports: true,
      can_view_login_activity: true,
    };
  }
  const src = value && typeof value === "object" ? value : {};
  return {
    can_upload_data: typeof src.can_upload_data === "boolean" ? src.can_upload_data : base.can_upload_data,
    can_download_reports:
      typeof src.can_download_reports === "boolean" ? src.can_download_reports : base.can_download_reports,
    can_view_login_activity:
      typeof src.can_view_login_activity === "boolean" ? src.can_view_login_activity : base.can_view_login_activity,
  };
}

function isHashedPassword(value) {
  return /^pbkdf2\$\d+\$[A-Za-z0-9+/=.-]+\$[A-Za-z0-9+/=.-]+$/.test(String(value || ""));
}

function hashPassword(password, saltInput) {
  const passwordText = String(password || "");
  const salt = saltInput || crypto.randomBytes(16).toString("base64");
  const hash = crypto
    .pbkdf2Sync(passwordText, salt, PASSWORD_PBKDF2_ITERATIONS, PASSWORD_KEY_LENGTH, PASSWORD_DIGEST)
    .toString("base64");
  return `pbkdf2$${PASSWORD_PBKDF2_ITERATIONS}$${salt}$${hash}`;
}

function safeEqual(a, b) {
  const aBuf = Buffer.from(String(a || ""));
  const bBuf = Buffer.from(String(b || ""));
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

function verifyPassword(password, passwordHash) {
  const raw = String(passwordHash || "");
  if (!isHashedPassword(raw)) return false;
  const parts = raw.split("$");
  const iterations = Number(parts[1]);
  const salt = parts[2] || "";
  const expected = parts[3] || "";
  if (!Number.isFinite(iterations) || iterations <= 0 || !salt || !expected) return false;
  const actual = crypto.pbkdf2Sync(String(password || ""), salt, iterations, PASSWORD_KEY_LENGTH, PASSWORD_DIGEST).toString("base64");
  return safeEqual(actual, expected);
}

function normalizeUserRecord(input) {
  const username = String(input.username || "").trim();
  if (!username) return null;
  const role = String(input.role || "USER").trim().toUpperCase() === "ADMIN" ? "ADMIN" : "USER";
  const permissions = normalizePermissions(input.permissions, role);

  let passwordHash = String(input.password_hash || "").trim();
  if (!passwordHash) {
    const plain = String(input.password || "").trim();
    if (!plain) return null;
    passwordHash = isHashedPassword(plain) ? plain : hashPassword(plain);
  } else if (!isHashedPassword(passwordHash)) {
    passwordHash = hashPassword(passwordHash);
  }

  return {
    username,
    password_hash: passwordHash,
    role,
    permissions,
  };
}

function getUsers() {
  const usersRaw = readJsonSafe(USERS_FILE, []);
  const normalized = [];
  for (const raw of usersRaw) {
    const user = normalizeUserRecord(raw || {});
    if (user) normalized.push(user);
  }

  if (!normalized.length) {
    normalized.push({
      username: ADMIN_DEFAULT_USERNAME,
      password_hash: hashPassword(ADMIN_DEFAULT_PASSWORD),
      role: "ADMIN",
      permissions: normalizePermissions({}, "ADMIN"),
    });
  } else {
    const adminExists = normalized.some((u) => String(u.role || "").toUpperCase() === "ADMIN");
    if (!adminExists) {
      normalized[0].role = "ADMIN";
      normalized[0].permissions = normalizePermissions({}, "ADMIN");
    }
  }

  writeJsonSafe(USERS_FILE, normalized);
  return normalized;
}

function saveUsers(users) {
  const normalized = [];
  for (const u of users) {
    const safe = normalizeUserRecord(u || {});
    if (safe) normalized.push(safe);
  }
  writeJsonSafe(USERS_FILE, normalized);
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
  return {
    username: String(u.username || "").trim(),
    role: String(u.role || "USER").trim().toUpperCase() === "ADMIN" ? "ADMIN" : "USER",
    permissions: normalizePermissions(u.permissions, u.role),
  };
}

function toBase64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function fromBase64Url(input) {
  const normalized = String(input || "").replace(/-/g, "+").replace(/_/g, "/");
  const pad = normalized.length % 4;
  const padded = pad ? normalized + "=".repeat(4 - pad) : normalized;
  return Buffer.from(padded, "base64").toString("utf8");
}

function createToken(user) {
  const now = Date.now();
  const payload = {
    sub: user.username,
    role: user.role,
    permissions: normalizePermissions(user.permissions, user.role),
    iat: Math.floor(now / 1000),
    exp: Math.floor((now + TOKEN_TTL_MS) / 1000),
  };
  const header = { alg: "HS256", typ: "JWT" };
  const encodedHeader = toBase64Url(JSON.stringify(header));
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const data = `${encodedHeader}.${encodedPayload}`;
  const signature = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(data)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return `${data}.${signature}`;
}

function verifyToken(token) {
  const parts = String(token || "").split(".");
  if (parts.length !== 3) return null;
  const [encodedHeader, encodedPayload, signature] = parts;
  const data = `${encodedHeader}.${encodedPayload}`;
  const expectedSig = crypto
    .createHmac("sha256", TOKEN_SECRET)
    .update(data)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  if (!safeEqual(signature, expectedSig)) return null;

  try {
    const header = JSON.parse(fromBase64Url(encodedHeader));
    const payload = JSON.parse(fromBase64Url(encodedPayload));
    if (!header || header.alg !== "HS256") return null;
    const nowSec = Math.floor(Date.now() / 1000);
    if (!payload || !payload.sub || !payload.exp || nowSec >= Number(payload.exp)) return null;
    return payload;
  } catch {
    return null;
  }
}

function getBearerToken(req) {
  const auth = String(req.headers.authorization || "").trim();
  if (!auth.toLowerCase().startsWith("bearer ")) return "";
  return auth.slice(7).trim();
}

function getAuthContext(req) {
  const token = getBearerToken(req);
  if (!token) return null;
  const payload = verifyToken(token);
  if (!payload) return null;
  const users = getUsers();
  const user = users.find((u) => u.username === payload.sub);
  if (!user) return null;
  return { user };
}

function requireAuth(req, res, options = {}) {
  const ctx = getAuthContext(req);
  if (!ctx) {
    sendJson(res, 401, { ok: false, error: "Authentication required" });
    return null;
  }
  const user = ctx.user;
  const needsAdmin = Boolean(options.admin);
  const requiredPerm = String(options.permission || "").trim();
  if (needsAdmin && user.role !== "ADMIN") {
    sendJson(res, 403, { ok: false, error: "Admin authorization required" });
    return null;
  }
  if (requiredPerm && !normalizePermissions(user.permissions, user.role)[requiredPerm]) {
    sendJson(res, 403, { ok: false, error: "Permission denied" });
    return null;
  }
  return ctx;
}

function getLoginAttemptKey(req, username) {
  const ip = String(req.socket?.remoteAddress || "unknown");
  return `${ip}:${String(username || "").trim().toLowerCase()}`;
}

function consumeLoginAttempt(req, username, success) {
  const key = getLoginAttemptKey(req, username);
  const now = Date.now();
  const item = loginAttempts.get(key) || { count: 0, first: now, blockedUntil: 0 };

  if (item.blockedUntil > now) {
    return { blocked: true, retryAfterSec: Math.ceil((item.blockedUntil - now) / 1000) };
  }

  if (success) {
    loginAttempts.delete(key);
    return { blocked: false };
  }

  if (now - item.first > LOGIN_WINDOW_MS) {
    item.count = 0;
    item.first = now;
    item.blockedUntil = 0;
  }

  item.count += 1;
  if (item.count >= LOGIN_MAX_ATTEMPTS) {
    item.blockedUntil = now + LOGIN_BLOCK_MS;
  }
  loginAttempts.set(key, item);

  if (item.blockedUntil > now) {
    return { blocked: true, retryAfterSec: Math.ceil((item.blockedUntil - now) / 1000) };
  }
  return { blocked: false };
}

async function handleApi(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/health") {
    return sendJson(res, 200, { ok: true, auth: "token" });
  }

  if (req.method === "POST" && pathname === "/api/login") {
    const body = await readBody(req);
    const username = String(body.username || "").trim();
    const password = String(body.password || "").trim();

    const throttle = consumeLoginAttempt(req, username, false);
    if (throttle.blocked) {
      res.setHeader("Retry-After", String(throttle.retryAfterSec || 60));
      return sendJson(res, 429, { ok: false, error: `Too many login attempts. Try again in ${throttle.retryAfterSec}s.` });
    }

    const users = getUsers();
    const user = users.find((u) => u.username === username);
    if (!user || !verifyPassword(password, user.password_hash)) {
      return sendJson(res, 401, { ok: false, error: "Invalid username or password" });
    }

    consumeLoginAttempt(req, username, true);
    const token = createToken(user);
    return sendJson(res, 200, { ok: true, token, user: normalizeUser(user) });
  }

  if (req.method === "GET" && pathname === "/api/users") {
    const ctx = requireAuth(req, res);
    if (!ctx) return;
    const users = getUsers().map(normalizeUser);
    if (ctx.user.role === "ADMIN") return sendJson(res, 200, { users });
    const self = users.find((u) => u.username === ctx.user.username);
    return sendJson(res, 200, { users: self ? [self] : [] });
  }

  if (req.method === "POST" && pathname === "/api/users") {
    const ctx = requireAuth(req, res, { admin: true });
    if (!ctx) return;

    const body = await readBody(req);
    const username = String(body.username || "").trim();
    const password = String(body.password || "").trim();
    const role = String(body.role || "USER").trim().toUpperCase() === "ADMIN" ? "ADMIN" : "USER";
    const incomingPerms = body.permissions && typeof body.permissions === "object" ? body.permissions : {};
    const permissions = normalizePermissions(incomingPerms, role);

    if (!username || !password) return sendJson(res, 400, { ok: false, error: "Username and password required" });
    if (password.length < 6) return sendJson(res, 400, { ok: false, error: "Password must be at least 6 characters" });

    const users = getUsers();
    if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
      return sendJson(res, 409, { ok: false, error: "Username already exists" });
    }

    users.push({
      username,
      password_hash: hashPassword(password),
      role,
      permissions,
    });
    saveUsers(users);
    return sendJson(res, 200, { ok: true, users: users.map(normalizeUser) });
  }

  if (req.method === "POST" && pathname === "/api/users/delete") {
    const ctx = requireAuth(req, res, { admin: true });
    if (!ctx) return;

    const body = await readBody(req);
    const username = String(body.username || "").trim();

    const users = getUsers();
    const target = users.find((u) => u.username === username);
    if (!target) return sendJson(res, 404, { ok: false, error: "User not found" });
    if (String(target.role || "").toUpperCase() === "ADMIN") {
      const adminCount = users.filter((u) => String(u.role || "").toUpperCase() === "ADMIN").length;
      if (adminCount <= 1) return sendJson(res, 400, { ok: false, error: "Cannot delete last admin user" });
    }
    const filtered = users.filter((u) => u.username !== username);
    saveUsers(filtered);
    return sendJson(res, 200, { ok: true, users: filtered.map(normalizeUser) });
  }

  if (req.method === "POST" && pathname === "/api/users/rename") {
    const ctx = requireAuth(req, res);
    if (!ctx) return;

    const body = await readBody(req);
    const username = String(body.username || "").trim();
    const newUsername = String(body.new_username || "").trim();
    const currentPassword = String(body.current_password || "").trim();
    if (!username || !newUsername) return sendJson(res, 400, { ok: false, error: "Username and new username required" });
    if (newUsername.length < 3) return sendJson(res, 400, { ok: false, error: "New username must be at least 3 characters" });

    const users = getUsers();
    const actor = users.find((u) => u.username === ctx.user.username);
    const target = users.find((u) => u.username === username);
    if (!actor || !target) return sendJson(res, 404, { ok: false, error: "User not found" });
    const isSelf = actor.username === target.username;
    const isAdmin = actor.role === "ADMIN";
    if (!isSelf && !isAdmin) {
      return sendJson(res, 403, { ok: false, error: "Only admin can change other users ID" });
    }
    if (users.some((u) => u.username.toLowerCase() === newUsername.toLowerCase() && u.username !== target.username)) {
      return sendJson(res, 409, { ok: false, error: "Username already exists" });
    }
    if (isSelf && !isAdmin && !verifyPassword(currentPassword, target.password_hash)) {
      return sendJson(res, 401, { ok: false, error: "Current password is incorrect" });
    }
    target.username = newUsername;
    saveUsers(users);
    const token = isSelf ? createToken(target) : "";
    return sendJson(res, 200, { ok: true, token, user: normalizeUser(target), users: users.map(normalizeUser) });
  }

  if (req.method === "POST" && pathname === "/api/users/change-password") {
    const ctx = requireAuth(req, res);
    if (!ctx) return;

    const body = await readBody(req);
    const username = String(body.username || "").trim();
    const oldPassword = String(body.old_password || "").trim();
    const newPassword = String(body.new_password || "").trim();

    if (!username || !newPassword) {
      return sendJson(res, 400, { ok: false, error: "Username and new password required" });
    }
    if (newPassword.length < 6) {
      return sendJson(res, 400, { ok: false, error: "New password must be at least 6 characters" });
    }

    const users = getUsers();
    const actor = users.find((u) => u.username === ctx.user.username);
    const target = users.find((u) => u.username === username);
    if (!actor || !target) return sendJson(res, 404, { ok: false, error: "User not found" });

    const isSelf = actor.username === target.username;
    const isAdmin = actor.role === "ADMIN";
    if (!isSelf && !isAdmin) {
      return sendJson(res, 403, { ok: false, error: "Only admin can change other users password" });
    }

    if (isSelf && !verifyPassword(oldPassword, target.password_hash)) {
      return sendJson(res, 401, { ok: false, error: "Current password is incorrect" });
    }

    target.password_hash = hashPassword(newPassword);
    saveUsers(users);
    return sendJson(res, 200, { ok: true, user: normalizeUser(target) });
  }

  if (req.method === "GET" && pathname === "/api/activity") {
    const ctx = requireAuth(req, res, { permission: "can_view_login_activity" });
    if (!ctx) return;
    return sendJson(res, 200, { logs: getLogs() });
  }

  if (req.method === "POST" && pathname === "/api/activity") {
    const ctx = requireAuth(req, res);
    if (!ctx) return;

    const body = await readBody(req);
    const safeUser = normalizeUser(ctx.user);
    const entry = {
      time: new Date().toISOString(),
      client_time: String(body.client_time || "").trim(),
      user: safeUser.username,
      role: safeUser.role,
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
    const ctx = requireAuth(req, res, { admin: true, permission: "can_view_login_activity" });
    if (!ctx) return;
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
