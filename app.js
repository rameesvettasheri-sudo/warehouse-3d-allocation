const ui = {
  panelToggleBtn: document.getElementById("panelToggleBtn"),
  mobileCloseMenuBtn: document.getElementById("mobileCloseMenuBtn"),
  rightDrawer: document.getElementById("rightDrawer"),
  groupFilter: document.getElementById("groupFilter"),
  groupMultiFilter: document.getElementById("groupMultiFilter"),
  customGroupInput: document.getElementById("customGroupInput"),
  applyGroupFilterBtn: document.getElementById("applyGroupFilterBtn"),
  locationTypeFilter: document.getElementById("locationTypeFilter"),
  levelFilter: document.getElementById("levelFilter"),
  showEmptyToggle: document.getElementById("showEmptyToggle"),
  highlightPickingToggle: document.getElementById("highlightPickingToggle"),
  showPreallocatedToggle: document.getElementById("showPreallocatedToggle"),
  skuFilterInput: document.getElementById("skuFilterInput"),
  bbdSkuInput: document.getElementById("bbdSkuInput"),
  bbdDaysInput: document.getElementById("bbdDaysInput"),
  applyCustomFilterBtn: document.getElementById("applyCustomFilterBtn"),
  clearCustomFilterBtn: document.getElementById("clearCustomFilterBtn"),
  locationSearchInput: document.getElementById("locationSearchInput"),
  locationSearchBtn: document.getElementById("locationSearchBtn"),
  zoomInBtn: document.getElementById("zoomInBtn"),
  zoomOutBtn: document.getElementById("zoomOutBtn"),
  zoomResetBtn: document.getElementById("zoomResetBtn"),
  rotateLeftBtn: document.getElementById("rotateLeftBtn"),
  rotateRightBtn: document.getElementById("rotateRightBtn"),
  inventoryFile: document.getElementById("inventoryFile"),
  incomingFile: document.getElementById("incomingFile"),
  productMasterFile: document.getElementById("productMasterFile"),
  clearIncomingFilesBtn: document.getElementById("clearIncomingFilesBtn"),
  incomingFilesBody: document.getElementById("incomingFilesBody"),
  fastMovingFile: document.getElementById("fastMovingFile"),
  manualSku: document.getElementById("manualSku"),
  manualPalletType: document.getElementById("manualPalletType"),
  manualHeight: document.getElementById("manualHeight"),
  manualWeight: document.getElementById("manualWeight"),
  manualBbd: document.getElementById("manualBbd"),
  manualTotalPallets: document.getElementById("manualTotalPallets"),
  addManualLineBtn: document.getElementById("addManualLineBtn"),
  manualLinesBody: document.getElementById("manualLinesBody"),
  analyzeTopBtn: document.getElementById("analyzeTopBtn"),
  openDataBtn: document.getElementById("openDataBtn"),
  openBbdOptBtn: document.getElementById("openBbdOptBtn"),
  dataModal: document.getElementById("dataModal"),
  dataModalClose: document.getElementById("dataModalClose"),
  bbdOptModal: document.getElementById("bbdOptModal"),
  bbdOptModalClose: document.getElementById("bbdOptModalClose"),
  bbdRulesFile: document.getElementById("bbdRulesFile"),
  deliveryOrderFile: document.getElementById("deliveryOrderFile"),
  bbdOptOrderNumber: document.getElementById("bbdOptOrderNumber"),
  bbdOptSku: document.getElementById("bbdOptSku"),
  bbdOptMinDays: document.getElementById("bbdOptMinDays"),
  bbdOptQty: document.getElementById("bbdOptQty"),
  bbdOptAddManualBtn: document.getElementById("bbdOptAddManualBtn"),
  bbdOptManualBody: document.getElementById("bbdOptManualBody"),
  bbdOptSearchBtn: document.getElementById("bbdOptSearchBtn"),
  bbdOptDownloadBtn: document.getElementById("bbdOptDownloadBtn"),
  bbdOptStatus: document.getElementById("bbdOptStatus"),
  bbdOptClearDeliveryFilesBtn: document.getElementById("bbdOptClearDeliveryFilesBtn"),
  bbdOptDeliveryFilesBody: document.getElementById("bbdOptDeliveryFilesBody"),
  bbdOptDeliverySelectedText: document.getElementById("bbdOptDeliverySelectedText"),
  openResultBtn: document.getElementById("openResultBtn"),
  resultModal: document.getElementById("resultModal"),
  resultModalClose: document.getElementById("resultModalClose"),
  totalLocations: document.getElementById("totalLocations"),
  allocatedCount: document.getElementById("allocatedCount"),
  unallocatedCount: document.getElementById("unallocatedCount"),
  systemEmpty: document.getElementById("systemEmpty"),
  realEmpty: document.getElementById("realEmpty"),
  ghostEmpty: document.getElementById("ghostEmpty"),
  selectedLocation: document.getElementById("selectedLocation"),
  detailStatus: document.getElementById("detailStatus"),
  detailSource: document.getElementById("detailSource"),
  detailPalletId: document.getElementById("detailPalletId"),
  detailSku: document.getElementById("detailSku"),
  detailType: document.getElementById("detailType"),
  detailHeight: document.getElementById("detailHeight"),
  detailWeight: document.getElementById("detailWeight"),
  detailQuantity: document.getElementById("detailQuantity"),
  detailBbd: document.getElementById("detailBbd"),
  ghostTableBody: document.getElementById("ghostTableBody"),
  fifoRecoBody: document.getElementById("fifoRecoBody"),
  recoTableBody: document.getElementById("recoTableBody"),
  fifoModal: document.getElementById("fifoModal"),
  fifoModalBody: document.getElementById("fifoModalBody"),
  fifoModalClose: document.getElementById("fifoModalClose"),
  validationModal: document.getElementById("validationModal"),
  validationModalBody: document.getElementById("validationModalBody"),
  validationModalClose: document.getElementById("validationModalClose"),
  pickingSuggestionModal: document.getElementById("pickingSuggestionModal"),
  pickingSuggestionModalBody: document.getElementById("pickingSuggestionModalBody"),
  pickingSuggestionModalClose: document.getElementById("pickingSuggestionModalClose"),
  systemSuggestionModal: document.getElementById("systemSuggestionModal"),
  systemSuggestionModalBody: document.getElementById("systemSuggestionModalBody"),
  systemSuggestionModalClose: document.getElementById("systemSuggestionModalClose"),
  preallocationSuggestionModal: document.getElementById("preallocationSuggestionModal"),
  preallocationSuggestionModalBody: document.getElementById("preallocationSuggestionModalBody"),
  preallocationSuggestionModalClose: document.getElementById("preallocationSuggestionModalClose"),
  palletModal: document.getElementById("palletModal"),
  palletModalBody: document.getElementById("palletModalBody"),
  palletModalClose: document.getElementById("palletModalClose"),
  downloadZone: document.getElementById("downloadZone"),
  downloadPlan: document.getElementById("downloadPlan"),
  downloadProjection: document.getElementById("downloadProjection"),
  downloadFifoMovement: document.getElementById("downloadFifoMovement"),
  downloadMissingSku: document.getElementById("downloadMissingSku"),
  downloadIncomingPoMovement: document.getElementById("downloadIncomingPoMovement"),
  downloadProblems: document.getElementById("downloadProblems"),
  downloadAuditLog: document.getElementById("downloadAuditLog"),
  clearAuditLog: document.getElementById("clearAuditLog"),
  auditLogBody: document.getElementById("auditLogBody"),
  auditCard: document.getElementById("auditCard"),
  auditAdminActions: document.getElementById("auditAdminActions"),
  currentUserRole: document.getElementById("currentUserRole"),
  topbarUserLabel: document.getElementById("topbarUserLabel"),
  openAuthBtn: document.getElementById("openAuthBtn"),
  authModal: document.getElementById("authModal"),
  authModalClose: document.getElementById("authModalClose"),
  authUsername: document.getElementById("authUsername"),
  authPassword: document.getElementById("authPassword"),
  authRole: document.getElementById("authRole"),
  permUploadData: document.getElementById("permUploadData"),
  permDownloadReports: document.getElementById("permDownloadReports"),
  permViewLoginActivity: document.getElementById("permViewLoginActivity"),
  authLoginBtn: document.getElementById("authLoginBtn"),
  authCreateBtn: document.getElementById("authCreateBtn"),
  authChangeUserIdBtn: document.getElementById("authChangeUserIdBtn"),
  authChangePasswordBtn: document.getElementById("authChangePasswordBtn"),
  authLogoutBtn: document.getElementById("authLogoutBtn"),
  authStatusText: document.getElementById("authStatusText"),
  usersTableBody: document.getElementById("usersTableBody"),
  filterFieldSelect: document.getElementById("filterFieldSelect"),
  filterOperatorSelect: document.getElementById("filterOperatorSelect"),
  filterValueInput: document.getElementById("filterValueInput"),
  addFilterRuleBtn: document.getElementById("addFilterRuleBtn"),
  clearFilterRulesBtn: document.getElementById("clearFilterRulesBtn"),
  activeFilterBody: document.getElementById("activeFilterBody"),
  quickPickingToggle: document.getElementById("quickPickingToggle"),
  quickStorageToggle: document.getElementById("quickStorageToggle"),
  quickEmptyHighlightToggle: document.getElementById("quickEmptyHighlightToggle"),
  quickGhostToggle: document.getElementById("quickGhostToggle"),
};

const canvas = document.getElementById("warehouseCanvas");
const ctx = canvas.getContext("2d");

const STANDARD_RATIO_NUM = 4;
const STANDARD_RATIO_DEN = 3;
const STANDARD_SPACE_FACTOR = 1.3333;
const HEIGHT_TOLERANCE_CM = 15;
const PICKING_GROUP_WEIGHT_TOLERANCE = 15;

let masterRows = [];
let zones = new Map();
let locationToZone = new Map();
let locationNodes = [];
let locationNodeByCode = new Map();
let rackColumns = [];
let zoneRows = [];
let planRows = [];
let projectionRows = [];
let movementRows = [];
let fifoMovementRows = [];
let incomingPoMovementRows = [];
let problemRows = [];
let missingProductSkuRows = [];
let pickingSuggestionRows = [];
let systemSuggestionRows = [];
let preallocationSuggestionRows = [];
let latestProductBySku = new Map();
let selectedLocationCode = null;
let manualLines = [];
let bbdOptManualLines = [];
let bbdOptResultRows = [];
let bbdOptSelectionsByLocation = new Map();
let bbdOptRuleBySku = new Map();
let bbdOptDeliveryFilesQueue = [];
let incomingFilesQueue = [];
let zoomLevel = 1;
let panX = 0;
let panY = 0;
let isPanning = false;
let isRotating = false;
let panStartX = 0;
let panStartY = 0;
let panOriginX = 0;
let panOriginY = 0;
let rotateStartX = 0;
let rotateOrigin = 0;
let viewRotation = 0;
let worldCenterX = 0;
let worldCenterZ = 0;
let visibleNodes = [];
let filterRules = [];

const USERS_KEY = "warehouse_users_v1";
const CURRENT_USER_KEY = "warehouse_current_user_v1";
const CURRENT_ROLE_KEY = "warehouse_current_role_v1";
const CURRENT_PERMISSIONS_KEY = "warehouse_current_permissions_v1";
const AUTH_TOKEN_KEY = "warehouse_auth_token_v1";
const ACTIVITY_LOG_KEY = "warehouse_activity_log_v1";
const LOCAL_ADMIN_USERNAME = "Ramees";
const LOCAL_ADMIN_PASSWORD = "Ramees@123v";
const API_BASE = `${window.location.origin}/api`;

let serverAuditEnabled = false;
let serverAuditLogsCache = [];
let serverAuditRefreshInProgress = false;
let lastServerAuditRefresh = 0;
let serverUsersCache = [];

function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY) || "";
}

function setAuthToken(token) {
  const t = String(token || "").trim();
  if (t) {
    localStorage.setItem(AUTH_TOKEN_KEY, t);
  } else {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}

function authHeaders(extra = {}) {
  const headers = { ...extra };
  const token = getAuthToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

function standardFootprint(c) {
  return c * STANDARD_SPACE_FACTOR;
}

function additionalLocationsForNextStandard(c) {
  const before = Math.ceil(standardFootprint(c));
  const after = Math.ceil(standardFootprint(c + 1));
  return Math.max(after - before, 1);
}

function normalizeType(v) {
  const x = String(v || "").trim().toUpperCase();
  return x === "STANDARD" ? "STANDARD" : "EURO";
}

function normalizeHeaderName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function normalizeSkuCode(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  const compact = raw.replace(/\u00a0/g, "").replace(/\s+/g, "");
  const dotZero = compact.match(/^(\d+)\.0+$/);
  const base = dotZero ? dotZero[1] : compact;
  if (/^\d+$/.test(base)) return String(Number(base));
  return base.toUpperCase();
}

function findHeaderKey(keys, aliases) {
  const normalized = keys.map((k) => ({ key: k, n: normalizeHeaderName(k) }));
  const aliasSet = aliases.map((a) => normalizeHeaderName(a));
  for (const a of aliasSet) {
    const exact = normalized.find((k) => k.n === a);
    if (exact) return exact.key;
  }
  for (const a of aliasSet) {
    const includes = normalized.find((k) => k.n.includes(a) || a.includes(k.n));
    if (includes) return includes.key;
  }
  return "";
}

function findHeaderKeyExactFirst(keys, aliases) {
  const normalized = keys.map((k) => ({ key: k, n: normalizeHeaderName(k) }));
  const aliasNorm = aliases.map((a) => normalizeHeaderName(a));
  for (const a of aliasNorm) {
    const exact = normalized.find((k) => k.n === a);
    if (exact) return exact.key;
  }
  return findHeaderKey(keys, aliases);
}

function inferPalletTypeFromBatch(batchValue) {
  const txt = String(batchValue || "").trim().toUpperCase();
  if (txt.endsWith("+S") || txt.includes("+S")) return "STANDARD";
  if (txt.endsWith("+E") || txt.includes("+E")) return "EURO";
  return "EURO";
}

function toNum(v) {
  if (typeof v === "number") return Number.isFinite(v) ? v : NaN;
  if (v === null || v === undefined) return NaN;
  let s = String(v).trim();
  if (!s) return NaN;
  s = s.replace(/\u00a0/g, "").replace(/\s+/g, "");

  const hasComma = s.includes(",");
  const hasDot = s.includes(".");
  if (hasComma && hasDot) {
    const lastComma = s.lastIndexOf(",");
    const lastDot = s.lastIndexOf(".");
    if (lastComma > lastDot) {
      s = s.replace(/\./g, "").replace(",", ".");
    } else {
      s = s.replace(/,/g, "");
    }
  } else if (hasComma) {
    s = s.replace(",", ".");
  }

  s = s.replace(/[^0-9.+-]/g, "");
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

function formatDateYYYYMMDD(d) {
  if (!(d instanceof Date) || Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function excelSerialToDate(serial) {
  if (!Number.isFinite(serial)) return null;
  const utcDays = Math.floor(serial - 25569);
  const utcValue = utcDays * 86400;
  const dateInfo = new Date(utcValue * 1000);
  if (Number.isNaN(dateInfo.getTime())) return null;
  return new Date(Date.UTC(dateInfo.getUTCFullYear(), dateInfo.getUTCMonth(), dateInfo.getUTCDate()));
}

function normalizeBbdValue(value) {
  if (value instanceof Date) return formatDateYYYYMMDD(value);
  if (typeof value === "number" && Number.isFinite(value) && value > 30000 && value < 70000) {
    const d = excelSerialToDate(value);
    return d ? formatDateYYYYMMDD(d) : "";
  }
  const s = String(value || "").trim();
  if (!s) return "";
  const iso = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) return `${iso[1]}-${iso[2].padStart(2, "0")}-${iso[3].padStart(2, "0")}`;
  const dot = s.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/);
  if (dot) {
    const dd = dot[1].padStart(2, "0");
    const mm = dot[2].padStart(2, "0");
    const yy = dot[3].length === 2 ? `20${dot[3]}` : dot[3];
    return `${yy}-${mm}-${dd}`;
  }
  const d = new Date(s);
  if (!Number.isNaN(d.getTime())) return formatDateYYYYMMDD(d);
  return s;
}

function normalizeLocationCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\u00a0/g, "")
    .replace(/\s+/g, "");
}

function parseLocationCode(code) {
  const m = String(code).trim().match(/^([A-Z]+)-(\d+)-(\d+)-([LR])$/i);
  if (!m) return null;
  return { block: m[1].toUpperCase(), bay: Number(m[2]), level: Number(m[3]), side: m[4].toUpperCase() };
}

function normalizeMasterLocationType(value) {
  const x = String(value || "").trim().toUpperCase();
  if (!x) return "";
  if (x.includes("PICK")) return "PICKING";
  if (x.includes("STOR")) return "STORAGE";
  return "";
}

function normalizeMasterPalletType(value) {
  const x = String(value || "").trim().toUpperCase();
  if (!x) return "";
  if (x.includes("STAND")) return "STANDARD";
  if (x.includes("EUR") || x.includes("EURO")) return "EURO";
  return "";
}

function isPickingLocationCode(code) {
  const p = parseLocationCode(code);
  if (!p) return /-01-[LR]$/i.test(String(code || "").trim());

  // Updated business rule by group:
  // K,N -> levels 02-L and 03-L are picking.
  if ((p.block === "K" || p.block === "N") && p.side === "L" && (p.level === 2 || p.level === 3)) return true;

  // H,G,F -> level 02-L and 02-R are picking.
  if ((p.block === "H" || p.block === "G" || p.block === "F") && p.level === 2 && (p.side === "L" || p.side === "R"))
    return true;

  // Default rule for remaining groups.
  return p.level === 1 && (p.side === "L" || p.side === "R");
}

function buildZoneState(rows) {
  const zMap = new Map();
  const l2z = new Map();
  let curGroup = "";
  let curZone = "";

  for (const raw of rows) {
    const g = String(raw.Group || "").trim();
    const z = String(raw.Zone || "").trim();
    if (g) curGroup = g;
    if (z) curZone = z;

    const loc = normalizeLocationCode(raw.Locations || "");
    if (!curGroup || !curZone || !loc) continue;

    const key = `${curGroup}::${curZone}`;
    if (!zMap.has(key)) {
      zMap.set(key, {
        group: curGroup,
        zone: curZone,
        zoneKey: key,
        locations: [],
        storageLocations: [],
        pickingLocations: [],
        locHeight: new Map(),
        locWeight: new Map(),
        locPalletType: new Map(),
        locLocationType: new Map(),
        occupiedEuro: 0,
        occupiedStandard: 0,
        occupiedLocations: new Set(),
        blockedLocations: new Set(),
      });
    }

    const zs = zMap.get(key);
    const masterLocType = normalizeMasterLocationType(raw["Location type"] || raw.location_type || raw.LocationType || "");
    const isPicking = masterLocType ? masterLocType === "PICKING" : isPickingLocationCode(loc);
    const masterPalletType = normalizeMasterPalletType(
      raw["Pallet Type"] || raw.pallet_type || raw.PalletType || raw["Pallet type"] || ""
    );

    zs.locations.push(loc);
    if (isPicking) zs.pickingLocations.push(loc);
    else zs.storageLocations.push(loc);
    zs.locHeight.set(loc, toNum(raw.Height));
    const locWeightRaw = toNum(raw.Weight);
    const locWeightAdjusted = Number(locWeightRaw) === 1000 ? 800 : locWeightRaw;
    zs.locWeight.set(loc, locWeightAdjusted);
    zs.locPalletType.set(loc, masterPalletType);
    zs.locLocationType.set(loc, masterLocType || (isPicking ? "PICKING" : "STORAGE"));
    l2z.set(loc, key);
  }

  for (const z of zMap.values()) z.locations.sort();
  return { zMap, l2z };
}

function buildLocationNodes() {
  const blocks = [...new Set(masterRows.map((r) => String(r.Locations || "").trim().split("-")[0]).filter(Boolean))].sort();
  const blockIdx = new Map(blocks.map((b, i) => [b, i]));

  locationNodes = [];
  locationNodeByCode = new Map();

  let fallback = 0;
  for (const row of masterRows) {
    const code = normalizeLocationCode(row.Locations || "");
    if (!code) continue;
    const p = parseLocationCode(code);

    let x = 0;
    let y = 0;
    let z = 0;

    if (p && blockIdx.has(p.block)) {
      const bx = blockIdx.get(p.block);
      // Increase inter-group and intra-bay spacing for better visual separation.
      x = bx * 6.8 + (p.side === "L" ? -1.3 : 1.3);
      z = p.bay * 1.05;
      y = p.level * 1.1;
    } else {
      x = (fallback % 40) * 0.9;
      z = Math.floor(fallback / 40) * 0.8;
      y = 1.2;
      fallback += 1;
    }

    const node = {
      code,
      zoneKey: locationToZone.get(code) || "",
      isPicking: false,
      locationType: "",
      locationPalletType: "",
      block: p ? p.block : "",
      bay: p ? p.bay : 0,
      level: p ? p.level : 1,
      side: p ? p.side : "",
      x,
      y,
      z,
      status: "EMPTY_REAL",
      pallet: null,
      screenX: 0,
      screenY: 0,
      hitR: 6,
    };
    const zone = zones.get(node.zoneKey);
    if (zone) {
      node.locationType = String(zone.locLocationType.get(code) || "").trim().toUpperCase();
      node.isPicking = node.locationType ? node.locationType === "PICKING" : isPickingLocationCode(code);
      node.locationPalletType = String(zone.locPalletType.get(code) || "").trim().toUpperCase();
    } else {
      node.isPicking = isPickingLocationCode(code);
      node.locationType = node.isPicking ? "PICKING" : "STORAGE";
    }

    locationNodes.push(node);
    locationNodeByCode.set(code, node);
  }

  if (locationNodes.length > 0) {
    const xs = locationNodes.map((n) => n.x);
    const zs = locationNodes.map((n) => n.z);
    worldCenterX = (Math.min(...xs) + Math.max(...xs)) / 2;
    worldCenterZ = (Math.min(...zs) + Math.max(...zs)) / 2;
  }

  const colMap = new Map();
  for (const n of locationNodes) {
    const key = `${n.block}-${n.bay}-${n.side}`;
    if (!n.block || !n.bay || !n.side) continue;
    if (!colMap.has(key)) {
      colMap.set(key, {
        key,
        block: n.block,
        bay: n.bay,
        side: n.side,
        x: n.x,
        z: n.z,
        maxLevel: n.level,
      });
    } else {
      const c = colMap.get(key);
      c.maxLevel = Math.max(c.maxLevel, n.level);
    }
  }
  rackColumns = [...colMap.values()].sort((a, b) => {
    if (a.block !== b.block) return a.block.localeCompare(b.block);
    if (a.bay !== b.bay) return a.bay - b.bay;
    return a.side.localeCompare(b.side);
  });
}

function resetDynamicState() {
  clearBbdOptSelections();
  for (const z of zones.values()) {
    z.occupiedEuro = 0;
    z.occupiedStandard = 0;
    z.occupiedLocations = new Set();
    z.blockedLocations = new Set();
  }

  for (const n of locationNodes) {
    n.status = "EMPTY_REAL";
    n.pallet = null;
  }
}

function freeLocations(zs) {
  return zs.locations.filter((loc) => !zs.occupiedLocations.has(loc) && !zs.blockedLocations.has(loc));
}

function freeStorageLocations(zs) {
  return zs.storageLocations.filter((loc) => !zs.occupiedLocations.has(loc) && !zs.blockedLocations.has(loc));
}

function applyInventory(inventoryRows) {
  const violations = [];
  for (const row of inventoryRows) {
    const loc = normalizeLocationCode(row.LOKACE || row.location || "");
    if (!loc) continue;

    const zKey = locationToZone.get(loc);
    if (!zKey) continue;
    const z = zones.get(zKey);

    z.occupiedLocations.add(loc);
    const t = normalizeType(row.PALLET_TYPE);
    if (t === "STANDARD") z.occupiedStandard += 1;
    else z.occupiedEuro += 1;

    const n = locationNodeByCode.get(loc);
    if (n) {
      let invHeight = toNum(row.height || row.Height);
      let invWeight = toNum(row.weight || row.Weight);
      const itemList = Array.isArray(row.ITEMS) ? row.ITEMS : [];

      if (itemList.length) {
        for (const item of itemList) {
          const needsWeight = !Number.isFinite(toNum(item.weight));
          const needsHeight = !Number.isFinite(toNum(item.height));
          const needsSingle = !Number.isFinite(toNum(item.single_box_weight));
          if (!needsWeight && !needsHeight && !needsSingle) continue;
          const d = deriveMetricsFromProduct(
            item.sku,
            item.qty,
            item.unit,
            item.pallet_type || t,
            latestProductBySku
          );
          if (needsWeight && Number.isFinite(d.weight)) item.weight = d.weight;
          if (needsHeight && Number.isFinite(d.height)) item.height = d.height;
          if (needsSingle && Number.isFinite(d.singleWeight)) item.single_box_weight = d.singleWeight;
        }
        if (!Number.isFinite(invWeight)) {
          const sumW = itemList.reduce((s, x) => s + (Number.isFinite(toNum(x.weight)) ? toNum(x.weight) : 0), 0);
          if (Number.isFinite(sumW) && sumW > 0) invWeight = sumW;
        }
        if (!Number.isFinite(invHeight)) {
          const maxH = itemList.reduce(
            (m, x) => (Number.isFinite(toNum(x.height)) ? Math.max(m, toNum(x.height)) : m),
            -Infinity
          );
          if (Number.isFinite(maxH)) invHeight = maxH;
        }
      }

      if (!Number.isFinite(invWeight) || !Number.isFinite(invHeight)) {
        const d = deriveMetricsFromProduct(
          row.SKU,
          row.TOTAL_QTY || row["MNOŽSTVÍ"] || row["MNOZSTVI"] || row.QTY,
          row.QTY_UNIT || row.JEDNOTKA || row.UNIT,
          t,
          latestProductBySku
        );
        if (!Number.isFinite(invWeight) && Number.isFinite(d.weight)) invWeight = d.weight;
        if (!Number.isFinite(invHeight) && Number.isFinite(d.height)) invHeight = d.height;
      }

      n.status = "OCCUPIED";
      n.pallet = {
        source: "INVENTORY",
        pallet_id: String(row["SSCC PALETY"] || row.SSCC || row.ID || "").trim(),
        sku: String(row.SKU || row["NÁZEV ZBOŽÍ"] || row["ZBOŽÍ"] || "").trim(),
        pallet_type: t,
        height: Number.isNaN(invHeight) ? String(row.height || row.Height || "").trim() : String(invHeight),
        weight: Number.isNaN(invWeight) ? String(row.weight || row.Weight || "").trim() : String(invWeight),
        total_quantity: String(row.TOTAL_QTY || row["MNOŽSTVÍ"] || row["MNOZSTVI"] || row.QTY || "").trim(),
        quantity_unit: String(row.QTY_UNIT || row.JEDNOTKA || row.UNIT || "").trim(),
        bbd: String(row.BBD || row.bbd || row.EXPIRACE || "").trim(),
        items: itemList,
        sku_count: itemList.length || 1,
      };

      const maxHeight = z.locHeight.get(loc);
      const maxWeightEuro = z.locWeight.get(loc);
      const locType = String(z.locLocationType.get(loc) || "").toUpperCase();
      const isPickingLoc = locType === "PICKING";
      const maxWeight = t === "STANDARD" && Number.isFinite(maxWeightEuro) ? maxWeightEuro * STANDARD_SPACE_FACTOR : maxWeightEuro;
      const allowedHeight = Number.isFinite(maxHeight) ? maxHeight + HEIGHT_TOLERANCE_CM : maxHeight;

      const heightViolation = Number.isFinite(invHeight) && Number.isFinite(allowedHeight) && invHeight > allowedHeight;
      const weightViolation =
        isPickingLoc && Number.isFinite(invWeight) && Number.isFinite(maxWeight) && invWeight > maxWeight;
      if (heightViolation || weightViolation) {
        const reasonParts = [];
        if (heightViolation) reasonParts.push("Height exceeds location limit.");
        if (weightViolation) reasonParts.push("Weight exceeds location limit.");
        violations.push({
          location: loc,
          sku: n.pallet.sku,
          pallet_id: n.pallet.pallet_id,
          pallet_type: t,
          actual_height: Number.isFinite(invHeight) ? invHeight : "",
          max_height: Number.isFinite(allowedHeight) ? allowedHeight : "",
          actual_weight: Number.isFinite(invWeight) ? invWeight : "",
          max_weight: Number.isFinite(maxWeight) ? maxWeight : "",
          reason: reasonParts.join(" "),
        });
      }
    }
  }

  for (const z of zones.values()) {
    const hiddenNeeded = Math.max(Math.ceil(standardFootprint(z.occupiedStandard) - z.occupiedStandard), 0);
    const free = freeStorageLocations(z);
    for (const loc of free.slice(0, hiddenNeeded)) {
      z.blockedLocations.add(loc);
      const n = locationNodeByCode.get(loc);
      if (n) {
        n.status = "BLOCKED";
        n.pallet = {
          source: "SYSTEM_BLOCK",
          pallet_id: "",
          sku: "",
          pallet_type: "BLOCKED_BY_STANDARD",
          height: "",
          weight: "",
          bbd: "",
        };
      }
    }
  }
  return violations;
}

function reserveNearest(free, primary, count) {
  if (count <= 1) return [primary];
  const indexed = free.map((loc, i) => ({ loc, i }));
  const base = indexed.find((x) => x.loc === primary);
  if (!base) return [primary];

  indexed.sort((a, b) => {
    const da = Math.abs(a.i - base.i);
    const db = Math.abs(b.i - base.i);
    if (da !== db) return da - db;
    return a.i - b.i;
  });

  return indexed.slice(0, count).map((x) => x.loc);
}

function chooseZone(item) {
  const options = [];

  for (const z of zones.values()) {
    const free = freeStorageLocations(z);
    if (!free.length) continue;

    const eligible = free.filter((loc) => {
      const h = z.locHeight.get(loc);
      const wEuro = z.locWeight.get(loc);
      const locType = String(z.locLocationType.get(loc) || "").toUpperCase();
      const wLimit = item.pallet_type === "STANDARD" && Number.isFinite(wEuro) ? wEuro * STANDARD_SPACE_FACTOR : wEuro;
      const hLimit = Number.isFinite(h) ? h + HEIGHT_TOLERANCE_CM : h;
      const hOk = Number.isNaN(item.height) || Number.isNaN(hLimit) || hLimit >= item.height;
      const wOk = locType === "PICKING" ? Number.isNaN(item.weight) || Number.isNaN(wLimit) || wLimit >= item.weight : true;
      return hOk && wOk;
    });
    if (!eligible.length) continue;

    for (const primary of eligible) {
      const needed =
        item.pallet_type === "STANDARD" ? additionalLocationsForNextStandard(z.occupiedStandard) : 1;

      if (free.length < needed) continue;
      const reserve = reserveNearest(free, primary, needed);
      if (reserve.length !== needed) continue;
      options.push({ z, primary, reserve, needed, waste: free.length - needed });
    }
  }

  if (!options.length) return { ok: false, reason: "No zone has enough free capacity in the same zone (4/3 standard rule)." };
  options.sort((a, b) => a.waste - b.waste);
  const pick = options[0];
  return { ok: true, z: pick.z, primary: pick.primary, blocked: pick.reserve.filter((x) => x !== pick.primary) };
}

function allocateIncoming(incomingRows) {
  const incoming = incomingRows
    .map((r, i) => ({
      incoming_id: String(r.incoming_id || `IN-${String(i + 1).padStart(4, "0")}`).trim(),
      sku: String(r.sku || r.SKU || "").trim(),
      bbd: String(r.bbd || r.BBD || "").trim(),
      height: toNum(r.height || r.Height),
      weight: toNum(r.weight || r.Weight),
      pallet_type: normalizeType(r.pallet_type || r.PALLET_TYPE),
    }))
    .sort((a, b) => {
      const ta = a.pallet_type === "STANDARD" ? 0 : 1;
      const tb = b.pallet_type === "STANDARD" ? 0 : 1;
      if (ta !== tb) return ta - tb;
      const ha = Number.isNaN(a.height) ? -1 : a.height;
      const hb = Number.isNaN(b.height) ? -1 : b.height;
      if (ha !== hb) return hb - ha;
      const wa = Number.isNaN(a.weight) ? -1 : a.weight;
      const wb = Number.isNaN(b.weight) ? -1 : b.weight;
      return wb - wa;
    });

  const plan = [];
  for (const item of incoming) {
    const c = chooseZone(item);
    if (!c.ok) {
      plan.push({ ...item, status: "UNALLOCATED", group: "", zone: "", primary_location: "", blocked_locations: "", reason: c.reason });
      continue;
    }

    c.z.occupiedLocations.add(c.primary);
    const pNode = locationNodeByCode.get(c.primary);
    if (pNode) {
      pNode.status = "OCCUPIED";
      pNode.pallet = {
        source: "INCOMING_PO",
        pallet_id: item.incoming_id,
        sku: item.sku,
        pallet_type: item.pallet_type,
        height: Number.isNaN(item.height) ? "" : String(item.height),
        weight: Number.isNaN(item.weight) ? "" : String(item.weight),
        bbd: item.bbd,
      };
    }

    if (item.pallet_type === "STANDARD") {
      c.z.occupiedStandard += 1;
      for (const b of c.blocked) {
        c.z.blockedLocations.add(b);
        const bNode = locationNodeByCode.get(b);
        if (bNode) {
          bNode.status = "BLOCKED";
          bNode.pallet = {
            source: "SYSTEM_BLOCK",
            pallet_id: item.incoming_id,
            sku: item.sku,
            pallet_type: "BLOCKED_BY_STANDARD",
            height: "",
            weight: "",
            bbd: item.bbd,
          };
        }
      }
    } else {
      c.z.occupiedEuro += 1;
    }

    plan.push({
      ...item,
      status: "ALLOCATED",
      group: c.z.group,
      zone: c.z.zone,
      primary_location: c.primary,
      blocked_locations: c.blocked.join("|"),
      reason: "",
    });
  }

  return plan;
}

function zoneMetrics(zs) {
  const total = zs.locations.length;
  const systemUsed = zs.occupiedEuro + zs.occupiedStandard;
  const realUsed = zs.occupiedEuro + standardFootprint(zs.occupiedStandard);
  const systemEmpty = Math.max(total - systemUsed, 0);
  const realEmpty = Math.max(total - realUsed, 0);
  const ghostEmpty = Math.max(systemEmpty - realEmpty, 0);
  return { total, systemUsed, realUsed, systemEmpty, realEmpty, ghostEmpty };
}

function buildZoneRows() {
  const rows = [];
  for (const z of zones.values()) {
    const m = zoneMetrics(z);
    const blockedLocations = [...z.blockedLocations].sort();
    const emptyLocations = z.locations
      .filter((loc) => !z.occupiedLocations.has(loc) && !z.blockedLocations.has(loc))
      .sort();
    rows.push({
      group: z.group,
      zone: z.zone,
      zone_key: z.zoneKey,
      total_locations: m.total,
      euro_pallets: z.occupiedEuro,
      standard_pallets: z.occupiedStandard,
      blocked_locations: z.blockedLocations.size,
      system_used: m.systemUsed,
      real_used: m.realUsed,
      system_empty: m.systemEmpty,
      real_empty: m.realEmpty,
      ghost_empty: m.ghostEmpty,
      over_capacity: m.realUsed > m.total,
      ghost_locations: blockedLocations.join("|"),
      empty_locations: emptyLocations.join("|"),
    });
  }

  rows.sort((a, b) => (a.group === b.group ? a.zone.localeCompare(b.zone) : a.group.localeCompare(b.group)));
  return rows;
}

function buildProjection(inventoryRows, plan) {
  const projected = [...inventoryRows];
  for (const p of plan) {
    if (p.status !== "ALLOCATED") continue;
    projected.push({
      INCOMING_ID: p.incoming_id,
      LOKACE: p.primary_location,
      SKU: p.sku,
      BBD: p.bbd,
      height: p.height,
      weight: p.weight,
      PALLET_TYPE: p.pallet_type,
      SOURCE: "INCOMING_PO",
    });
  }
  return projected;
}

function toSheetRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return [];
  const cols = [...new Set(rows.flatMap((r) => Object.keys(r || {})))];
  return rows.map((r) => {
    const out = {};
    for (const c of cols) out[c] = r?.[c] ?? "";
    return out;
  });
}

function downloadRowsAsXlsx(rows, fileName, sheetName = "Sheet1") {
  if (!window.XLSX) throw new Error("XLSX library not loaded.");
  const safeSheet = String(sheetName || "Sheet1").slice(0, 31);
  const wb = XLSX.utils.book_new();
  const wsRows = toSheetRows(rows);
  const ws = XLSX.utils.json_to_sheet(wsRows);
  XLSX.utils.book_append_sheet(wb, ws, safeSheet);
  XLSX.writeFile(wb, fileName, { compression: true });
}

function enableDownload(button, name, rows, actionLabel = "", sheetName = "Sheet1") {
  if (!button) return;
  button.disabled = !rows.length;
  button.onclick = null;
  if (!rows.length) return;
  button.onclick = () => {
    if (!isAuthenticated()) {
      enforceLoginModal();
      return;
    }
    if (!hasPermission("can_download_reports")) {
      alert("You do not have permission to download reports.");
      logActivity("ACCESS_DENIED", `download blocked: ${actionLabel || name}`);
      return;
    }
    downloadRowsAsXlsx(rows, name, sheetName);
    logActivity("DOWNLOAD", `${actionLabel || name} | ${rows.length} rows`);
  };
}

function renderSummary() {
  const systemEmpty = zoneRows.reduce((s, r) => s + Number(r.system_empty || 0), 0);
  const realEmpty = zoneRows.reduce((s, r) => s + Number(r.real_empty || 0), 0);
  const ghostEmpty = zoneRows.reduce((s, r) => s + Number(r.ghost_empty || 0), 0);
  const allocatedFromPlan = planRows.filter((r) => r.status === "ALLOCATED").length;
  const unallocatedFromPlan = planRows.length - allocatedFromPlan;
  const occupiedFromInventory = locationNodes.filter((n) => n.status === "OCCUPIED").length;

  const allocated = planRows.length > 0 ? allocatedFromPlan : occupiedFromInventory;
  const unallocated = planRows.length > 0 ? unallocatedFromPlan : 0;

  ui.totalLocations.textContent = String(masterRows.length);
  ui.allocatedCount.textContent = String(allocated);
  ui.unallocatedCount.textContent = String(Math.max(unallocated, 0));
  ui.systemEmpty.textContent = String(systemEmpty);
  ui.realEmpty.textContent = String(realEmpty);
  ui.ghostEmpty.textContent = String(ghostEmpty);
}

function renderGhostTable() {
  ui.ghostTableBody.innerHTML = "";
  const top = [...zoneRows]
    .filter((r) => Number(r.ghost_empty) > 0 || Number(r.real_empty) > 0 || Number(r.system_empty) > 0)
    .sort((a, b) => {
      const g = Number(b.ghost_empty) - Number(a.ghost_empty);
      if (g !== 0) return g;
      const re = Number(b.real_empty) - Number(a.real_empty);
      if (re !== 0) return re;
      return Number(b.system_empty) - Number(a.system_empty);
    })
    .slice(0, 25);

  if (!top.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4">No ghost/empty zones found.</td>`;
    ui.ghostTableBody.appendChild(tr);
    return;
  }

  for (const r of top) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.group} ${r.zone}</td><td>${r.system_empty}</td><td>${r.real_empty}</td><td>${r.ghost_empty}</td>`;
    ui.ghostTableBody.appendChild(tr);
  }
}

function renderFifoRecommendations(rows) {
  if (!ui.fifoRecoBody) return;
  ui.fifoRecoBody.innerHTML = "";
  const fifoRows = rows
    .filter((r) => String(r.move_type || "").startsWith("FIFO"))
    .sort((a, b) => String(a.sku || "").localeCompare(String(b.sku || "")))
    .slice(0, 60);

  for (const r of fifoRows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(r.move_type)}</td><td>${safeText(r.sku)}</td><td>${safeText(r.action)}</td>`;
    ui.fifoRecoBody.appendChild(tr);
  }
}

function colorByStatus(status, selected) {
  if (selected && status !== "EMPTY_REAL") return "#3267c8";
  if (status === "OCCUPIED") return "#bd7e28";
  if (status === "BLOCKED") return "#bf4040";
  return "#2f9655";
}

function shade(hex, factor) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const nr = Math.min(255, Math.max(0, Math.round(r * factor)));
  const ng = Math.min(255, Math.max(0, Math.round(g * factor)));
  const nb = Math.min(255, Math.max(0, Math.round(b * factor)));
  return `rgb(${nr}, ${ng}, ${nb})`;
}

function drawIsoCube(cx, cy, w, h, d, color) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - h);
  ctx.lineTo(cx + w, cy - h + d * 0.5);
  ctx.lineTo(cx, cy - h + d);
  ctx.lineTo(cx - w, cy - h + d * 0.5);
  ctx.closePath();
  ctx.fillStyle = shade(color, 1.15);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cx - w, cy - h + d * 0.5);
  ctx.lineTo(cx, cy - h + d);
  ctx.lineTo(cx, cy + d);
  ctx.lineTo(cx - w, cy + d * 0.5);
  ctx.closePath();
  ctx.fillStyle = shade(color, 0.92);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cx + w, cy - h + d * 0.5);
  ctx.lineTo(cx, cy - h + d);
  ctx.lineTo(cx, cy + d);
  ctx.lineTo(cx + w, cy + d * 0.5);
  ctx.closePath();
  ctx.fillStyle = shade(color, 0.78);
  ctx.fill();
}

function drawIsoPrism(cx, cy, w, h, d, top, left, right, stroke = "") {
  ctx.beginPath();
  ctx.moveTo(cx, cy - h);
  ctx.lineTo(cx + w, cy - h + d * 0.5);
  ctx.lineTo(cx, cy - h + d);
  ctx.lineTo(cx - w, cy - h + d * 0.5);
  ctx.closePath();
  ctx.fillStyle = top;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = Math.max(1, zoomLevel * 0.8);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(cx - w, cy - h + d * 0.5);
  ctx.lineTo(cx, cy - h + d);
  ctx.lineTo(cx, cy + d);
  ctx.lineTo(cx - w, cy + d * 0.5);
  ctx.closePath();
  ctx.fillStyle = left;
  ctx.fill();
  if (stroke) ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx + w, cy - h + d * 0.5);
  ctx.lineTo(cx, cy - h + d);
  ctx.lineTo(cx, cy + d);
  ctx.lineTo(cx + w, cy + d * 0.5);
  ctx.closePath();
  ctx.fillStyle = right;
  ctx.fill();
  if (stroke) ctx.stroke();
}

function drawMiniBarcode(x, y, w, h) {
  ctx.fillStyle = "#f7f7f7";
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "#222";
  const bars = 14;
  for (let i = 0; i < bars; i += 1) {
    const bw = (i % 3 === 0 ? 2 : 1) * (w / 28);
    const bx = x + (i * w) / bars;
    ctx.fillRect(bx, y + h * 0.1, bw, h * 0.8);
  }
}

function drawFrontLabel(text, x, y, w, h) {
  ctx.fillStyle = "#111";
  ctx.font = `${Math.max(8, 7 * zoomLevel)}px sans-serif`;
  const t = String(text || "").slice(0, 12);
  ctx.fillText(t, x, y);
  drawMiniBarcode(x, y + 3, w, h);
}

function drawRackAndPallet(node, p) {
  const slotW = 4.7 * zoomLevel;
  const slotH = 10.2 * zoomLevel;
  const slotD = 5.8 * zoomLevel;
  const selected = node.code === selectedLocationCode;
  const isBbdOpt = bbdOptSelectionsByLocation.has(node.code);
  const isPreallocated = node.pallet && node.pallet.source === "INCOMING_PO";

  if (node.status === "OCCUPIED") {
    const top = isBbdOpt ? "#d69aff" : isPreallocated ? "#7ac9ff" : "#d8c6a2";
    const left = isBbdOpt ? "#b972ef" : isPreallocated ? "#5aaee4" : "#c5b18a";
    const right = isBbdOpt ? "#9b54d4" : isPreallocated ? "#4a97cf" : "#b49e79";
    const stroke = isBbdOpt ? "#6f2c9c" : isPreallocated ? "#2b6fa3" : "#7d6f56";
    drawIsoPrism(p.x, p.y + slotD * 0.26, slotW * 0.74, slotH * 0.72, slotD * 0.7, top, left, right, stroke);
    drawMiniBarcode(p.x - slotW * 0.18, p.y - slotH * 0.1, slotW * 0.22, slotH * 0.12);
    if (isBbdOpt) {
      ctx.fillStyle = "#5f1a8a";
      ctx.font = `${Math.max(8, 8 * zoomLevel)}px sans-serif`;
      ctx.fillText("RE", p.x - 6 * zoomLevel, p.y - slotH * 0.22);
    } else if (isPreallocated) {
      ctx.fillStyle = "#0d4a74";
      ctx.font = `${Math.max(8, 8 * zoomLevel)}px sans-serif`;
      ctx.fillText("PRE", p.x - 7 * zoomLevel, p.y - slotH * 0.22);
    }
  } else if (node.status === "BLOCKED") {
    drawIsoPrism(
      p.x,
      p.y + slotD * 0.28,
      slotW * 0.66,
      slotH * 0.22,
      slotD * 0.6,
      "#dd6b6b",
      "#c45757",
      "#ac4949",
      "#7f3232"
    );
  } else {
    // Empty location marker: simpler and larger for easier click targeting.
    const emptyHighlight = Boolean(ui.quickEmptyHighlightToggle?.checked);
    drawIsoPrism(
      p.x,
      p.y + slotD * 0.32,
      slotW * 0.52,
      slotH * 0.12,
      slotD * 0.48,
      emptyHighlight ? "#f3de67" : "#dceadf",
      emptyHighlight ? "#dfc748" : "#c9d7cc",
      emptyHighlight ? "#d0b93e" : "#b7c5ba",
      emptyHighlight ? "#a38826" : "#7f8d83"
    );
  }

  if (selected && node.status !== "EMPTY_REAL") {
    ctx.strokeStyle = "#8440a0";
    ctx.lineWidth = Math.max(2, zoomLevel * 1.4);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y - slotH - 2 * zoomLevel);
    ctx.lineTo(p.x + slotW + 2 * zoomLevel, p.y - slotH + slotD * 0.5);
    ctx.lineTo(p.x, p.y - slotH + slotD + 2 * zoomLevel);
    ctx.lineTo(p.x - slotW - 2 * zoomLevel, p.y - slotH + slotD * 0.5);
    ctx.closePath();
    ctx.stroke();
  }

  if (ui.highlightPickingToggle?.checked && node.isPicking) {
    const ringW = slotW * 0.86;
    const ringH = slotH * 0.16;
    const ringD = slotD * 0.78;
    drawIsoPrism(
      p.x,
      p.y + slotD * 0.35,
      ringW,
      ringH,
      ringD,
      "rgba(110, 195, 255, 0.45)",
      "rgba(88, 165, 227, 0.45)",
      "rgba(74, 142, 198, 0.45)",
      "#2b6fa3"
    );
  }
}

function nodeVisibleByFilters(node) {
  const showPicking = Boolean(ui.quickPickingToggle?.checked);
  const showStorage = Boolean(ui.quickStorageToggle?.checked);
  const showEmpty = Boolean(ui.quickEmptyHighlightToggle?.checked);
  const showGhost = Boolean(ui.quickGhostToggle?.checked ?? true);

  if (node.status === "EMPTY_REAL" && !showEmpty) return false;
  if (node.status === "BLOCKED" && !showGhost) return false;
  if (showPicking || showStorage) {
    if (node.isPicking && !showPicking) return false;
    if (!node.isPicking && !showStorage) return false;
  }

  if (!filterRules.length) return true;
  for (const rule of filterRules) {
    if (!nodeMatchesRule(node, rule)) return false;
  }
  return true;
}

function populateGroupFilter() {
  renderFilterRules();
}

function daysLeftToExpire(bbdValue) {
  const d = parseBbdDate(bbdValue);
  if (!d) return null;
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((d.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
}

function normalizeOpLabel(op) {
  if (op === "EQ") return "=";
  if (op === "IN") return "is in";
  if (op === "GTE") return ">= ";
  if (op === "LTE") return "<= ";
  return op;
}

function normalizeFieldLabel(field) {
  if (field === "LOCATION_TYPE") return "Location Type";
  if (field === "GROUP") return "Group";
  if (field === "RACK_LEVEL") return "Rack Level";
  if (field === "PALLET_TYPE") return "Pallet Type";
  if (field === "LOCATION_SEARCH") return "Location Search";
  if (field === "SKU") return "SKU";
  if (field === "DAYS_LEFT_TO_EXPIRE") return "Number of Days left to expire";
  return field;
}

function nodeFieldValue(node, field) {
  if (field === "LOCATION_TYPE") return node.isPicking ? "PICKING" : "STORAGE";
  if (field === "GROUP") return String(node.block || "");
  if (field === "RACK_LEVEL") return Number(node.level || 0);
  if (field === "PALLET_TYPE") return String(node.pallet?.pallet_type || "");
  if (field === "LOCATION_SEARCH") return String(node.code || "");
  if (field === "SKU") return String(node.pallet?.sku || "");
  if (field === "DAYS_LEFT_TO_EXPIRE") return daysLeftToExpire(node.pallet?.bbd);
  return "";
}

function nodeMatchesRule(node, rule) {
  const fieldVal = nodeFieldValue(node, rule.field);
  const raw = String(rule.value || "").trim();
  if (!raw) return true;

  if (rule.field === "RACK_LEVEL" || rule.field === "DAYS_LEFT_TO_EXPIRE") {
    const left = Number(fieldVal);
    const right = Number(raw);
    if (!Number.isFinite(left) || !Number.isFinite(right)) return false;
    if (rule.op === "EQ") return left === right;
    if (rule.op === "GTE") return left >= right;
    if (rule.op === "LTE") return left <= right;
    if (rule.op === "IN") {
      const values = raw
        .split(/[\n,]+/)
        .map((v) => Number(String(v).trim()))
        .filter((v) => Number.isFinite(v));
      return values.includes(left);
    }
    return true;
  }

  const left = String(fieldVal || "").trim().toUpperCase();
  const right = raw.toUpperCase();
  if (rule.op === "EQ") {
    if (rule.field === "LOCATION_SEARCH" || rule.field === "SKU") return left.includes(right);
    return left === right;
  }
  if (rule.op === "GTE") return left >= right;
  if (rule.op === "LTE") return left <= right;
  if (rule.op === "IN") {
    const values = right
      .split(/[\n,]+/)
      .map((v) => v.trim())
      .filter(Boolean);
    return values.includes(left);
  }
  return true;
}

function renderFilterRules() {
  if (!ui.activeFilterBody) return;
  ui.activeFilterBody.innerHTML = "";
  if (!filterRules.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4">No filters applied.</td>`;
    ui.activeFilterBody.appendChild(tr);
    return;
  }

  filterRules.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${normalizeFieldLabel(r.field)}</td><td>${normalizeOpLabel(r.op)}</td><td>${safeText(
      r.value
    )}</td><td><button type="button" class="secondary" data-remove-filter="${i}">Remove</button></td>`;
    ui.activeFilterBody.appendChild(tr);
  });
}

function addFilterRuleFromUi() {
  const field = String(ui.filterFieldSelect?.value || "").trim();
  const op = String(ui.filterOperatorSelect?.value || "").trim();
  const value = String(ui.filterValueInput?.value || "").trim();
  if (!field || !op || !value) {
    alert("Select field/operator and enter value.");
    return;
  }
  filterRules.push({ field, op, value });
  if (ui.filterValueInput) ui.filterValueInput.value = "";
  renderFilterRules();
  renderCanvas();
}

function clearAllFilterRules() {
  filterRules = [];
  if (ui.filterValueInput) ui.filterValueInput.value = "";
  renderFilterRules();
  renderCanvas();
}

function drawRackColumn(column) {
  const levels = Math.max(1, column.maxLevel);
  const postOffset = 2.6 * zoomLevel;

  ctx.strokeStyle = "#2e4f6f";
  ctx.lineWidth = Math.max(1, zoomLevel * 0.9);

  const topY = levels * 1.1 + 0.3;
  const p1 = projectPoint(column.x - postOffset / 8, topY, column.z);
  const p2 = projectPoint(column.x - postOffset / 8, 0.6, column.z);
  const p3 = projectPoint(column.x + postOffset / 8, topY, column.z);
  const p4 = projectPoint(column.x + postOffset / 8, 0.6, column.z);

  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.moveTo(p3.x, p3.y);
  ctx.lineTo(p4.x, p4.y);
  ctx.stroke();

  ctx.strokeStyle = "#b14949";
  ctx.lineWidth = Math.max(1, zoomLevel * 0.75);
  for (let lv = 1; lv <= levels; lv += 1) {
    const y = lv * 1.1;
    const a = projectPoint(column.x - 0.55, y, column.z);
    const b = projectPoint(column.x + 0.55, y, column.z);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }
}

function drawForkliftAndPointer() {
  const f = projectPoint(worldCenterX, 0.6, worldCenterZ + 2.5);
  drawIsoPrism(f.x, f.y, 8 * zoomLevel, 6 * zoomLevel, 6 * zoomLevel, "#c6a23b", "#a17f22", "#8d6f18", "#444");
  ctx.fillStyle = "#2a2a2a";
  ctx.fillRect(f.x - 2 * zoomLevel, f.y - 9 * zoomLevel, 4 * zoomLevel, 4 * zoomLevel);

  const p = projectPoint(worldCenterX, 4.8, worldCenterZ - 2.5);
  drawIsoPrism(p.x, p.y, 5 * zoomLevel, 7 * zoomLevel, 5 * zoomLevel, "#49b259", "#3e994c", "#2f7d3d", "#2a6c36");
}

function projectPoint(x, y, z) {
  return projectNode({ x, y, z });
}

function projectNode(node) {
  const scale = 12 * zoomLevel;
  const x0 = node.x - worldCenterX;
  const z0 = node.z - worldCenterZ;
  const cosA = Math.cos(viewRotation);
  const sinA = Math.sin(viewRotation);
  const x = x0 * cosA - z0 * sinA;
  const z = x0 * sinA + z0 * cosA;
  const y = node.y;

  const px = (x - z) * scale * 0.8;
  const py = (x + z) * scale * 0.38 - y * 14 * zoomLevel;

  const ox = canvas.width * 0.5 + panX;
  const oy = canvas.height * 0.65 + panY;

  return { x: ox + px, y: oy + py };
}

function renderCanvas() {
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const w = Math.floor(canvas.clientWidth * dpr);
  const h = Math.floor(canvas.clientHeight * dpr);
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f1f2f3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // floor grid
  ctx.strokeStyle = "#b7bcc1";
  ctx.lineWidth = Math.max(1, zoomLevel * 0.28);
  ctx.beginPath();
  for (let i = 0; i < 52; i += 1) {
    ctx.moveTo(0, canvas.height * 0.48 + i * 10);
    ctx.lineTo(canvas.width, canvas.height * 0.19 + i * 10);
  }
  for (let i = 0; i < 62; i += 1) {
    ctx.moveTo(i * 26, canvas.height * 0.38);
    ctx.lineTo(i * 18, canvas.height);
  }
  ctx.stroke();

  // center aisle guide
  ctx.strokeStyle = "#c3a0a0";
  ctx.lineWidth = Math.max(1, zoomLevel * 0.6);
  const guide1 = projectPoint(worldCenterX - 1.4, 0.4, 0.5);
  const guide2 = projectPoint(worldCenterX - 1.4, 0.4, 68);
  const guide3 = projectPoint(worldCenterX + 1.4, 0.4, 0.5);
  const guide4 = projectPoint(worldCenterX + 1.4, 0.4, 68);
  ctx.beginPath();
  ctx.moveTo(guide1.x, guide1.y);
  ctx.lineTo(guide2.x, guide2.y);
  ctx.moveTo(guide3.x, guide3.y);
  ctx.lineTo(guide4.x, guide4.y);
  ctx.stroke();

  // rack columns first (less clutter than per-slot wireframes)
  const columnStep = zoomLevel < 0.9 ? 2 : 1;
  for (let i = 0; i < rackColumns.length; i += columnStep) {
    drawRackColumn(rackColumns[i]);
  }

  const sorted = [...locationNodes]
    .filter(nodeVisibleByFilters)
    .sort((a, b) => (a.x + a.z + a.y) - (b.x + b.z + b.y));
  visibleNodes = sorted;
  for (const n of sorted) {
    const p = projectNode(n);
    n.screenX = p.x;
    n.screenY = p.y;

    drawRackAndPallet(n, p);
  }

  drawForkliftAndPointer();

  // Group labels anchored to the front edge of each block for consistent readability.
  if (zoomLevel >= 0.8) {
    const byBlock = new Map();
    for (const n of visibleNodes) {
      if (!n.block) continue;
      if (!byBlock.has(n.block)) byBlock.set(n.block, []);
      byBlock.get(n.block).push(n);
    }

    const blocks = [...byBlock.keys()].sort();
    ctx.font = `${Math.max(14, 18 * zoomLevel)}px sans-serif`;

    for (const block of blocks) {
      const nodes = byBlock.get(block);
      if (!nodes || !nodes.length) continue;

      // Take the front-most few points in current camera view (largest screenY).
      const front = [...nodes]
        .sort((a, b) => b.screenY - a.screenY)
        .slice(0, Math.min(10, nodes.length));

      const sx = front.reduce((s, n) => s + n.screenX, 0) / front.length;
      const sy = front.reduce((s, n) => Math.max(s, n.screenY), -Infinity);
      const tx = sx - 7 * zoomLevel;
      const ty = sy + 22 * zoomLevel;

      const metrics = ctx.measureText(block);
      const pad = 3 * zoomLevel;
      ctx.fillStyle = "rgba(245, 247, 251, 0.86)";
      ctx.fillRect(tx - pad, ty - 14 * zoomLevel, metrics.width + pad * 2, 16 * zoomLevel);

      ctx.fillStyle = "#8a3a84";
      ctx.fillText(block, tx, ty);
    }
  }

  if (!locationNodes.length) {
    ctx.fillStyle = "#344c63";
    ctx.font = `${16 * dpr}px sans-serif`;
    ctx.fillText("Loading warehouse layout...", 20 * dpr, 35 * dpr);
  }
}

function pickNodeAt(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const dpr = canvas.width / Math.max(1, rect.width);
  const x = (clientX - rect.left) * dpr;
  const y = (clientY - rect.top) * dpr;

  let best = null;
  let bestDist = Infinity;
  for (const n of visibleNodes) {
    const dx = n.screenX - x;
    const dy = n.screenY - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < Math.max(16, 18 * zoomLevel) && dist < bestDist) {
      best = n;
      bestDist = dist;
    }
  }
  return best;
}

function focusLocationByCode(codeRaw) {
  const code = normalizeLocationCode(codeRaw || "");
  if (!code) return;
  const node = locationNodeByCode.get(code);
  if (!node) {
    alert(`Location not found: ${code}`);
    return;
  }

  selectedLocationCode = node.code;
  const p = projectNode(node);
  // pan so selected location goes near center
  panX += canvas.width * 0.5 - p.x;
  panY += canvas.height * 0.58 - p.y;

  const zr = zoneRows.find((r) => r.zone_key === node.zoneKey);
  const zText = zr ? `${zr.group} ${zr.zone}` : "-";
  ui.selectedLocation.textContent = `${node.code} (${node.status}) | ${zText}`;
  renderSelectedPalletDetails(node);
  showPalletPopup(node);
  renderCanvas();
}

function showPalletPopup(node) {
  const zr = zoneRows.find((r) => r.zone_key === node.zoneKey);
  const zoneText = zr ? `${zr.group} ${zr.zone}` : "-";
  const pallet = ensurePalletDerivedMetrics(node.pallet || {});
  ui.palletModalBody.innerHTML = `
    <table>
      <tbody>
        <tr><th>Location</th><td>${safeText(node.code)}</td></tr>
        <tr><th>Zone</th><td>${safeText(zoneText)}</td></tr>
        <tr><th>Status</th><td>${safeText(node.status)}</td></tr>
        <tr><th>Source</th><td>${safeText(pallet.source)}</td></tr>
        <tr><th>Pallet ID</th><td>${safeText(pallet.pallet_id)}</td></tr>
        <tr><th>SKU</th><td>${safeText(pallet.sku)}</td></tr>
        <tr><th>Pallet Type</th><td>${safeText(pallet.pallet_type)}</td></tr>
        <tr><th>Height</th><td>${safeText(pallet.height)}</td></tr>
        <tr><th>Weight</th><td>${safeText(pallet.weight)}</td></tr>
        <tr><th>Total Quantity</th><td>${safeText(formatQuantity(pallet.total_quantity, pallet.quantity_unit))}</td></tr>
        <tr><th>BBD</th><td>${safeText(pallet.bbd)}</td></tr>
      </tbody>
    </table>
  `;
  const bbdOptMatches = bbdOptSelectionsByLocation.get(node.code) || [];
  if (bbdOptMatches.length) {
    const h = document.createElement("h3");
    h.textContent = "BBD OPT Matches (RE)";
    ui.palletModalBody.appendChild(h);
    const t = document.createElement("table");
    t.innerHTML =
      "<thead><tr><th>Order Number</th><th>SKU</th><th>Req UOM</th><th>Min Days</th><th>Required Qty</th><th>Picked Qty</th><th>Pallet BBD</th><th>Qty Available</th><th>Pallet UOM</th><th>Total SKU Qty</th></tr></thead>";
    const tb = document.createElement("tbody");
    for (const m of bbdOptMatches) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${safeText(m.order_number)}</td><td>${safeText(m.sku)}</td><td>${safeText(
        m.required_uom
      )}</td><td>${safeText(m.min_days_required)}</td><td>${safeText(m.required_quantity)}</td><td>${safeText(
        m.picked_quantity
      )}</td><td>${safeText(m.bbd)}</td><td>${safeText(m.quantity_available)}</td><td>${safeText(
        m.quantity_unit
      )}</td><td>${safeText(m.total_available_qty_sku)}</td>`;
      tb.appendChild(tr);
    }
    t.appendChild(tb);
    ui.palletModalBody.appendChild(t);
  }
  if (Array.isArray(pallet.items) && pallet.items.length > 1) {
    const h = document.createElement("h3");
    h.textContent = "Products on this pallet";
    ui.palletModalBody.appendChild(h);
    const t = document.createElement("table");
    t.innerHTML =
      "<thead><tr><th>SKU</th><th>Qty</th><th>Unit</th><th>Box Weight</th><th>Pallet Weight</th><th>Pallet Height</th><th>BBD</th></tr></thead>";
    const tb = document.createElement("tbody");
    for (const item of pallet.items) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${safeText(item.sku)}</td><td>${safeText(item.qty)}</td><td>${safeText(
        item.unit
      )}</td><td>${safeText(item.single_box_weight)}</td><td>${safeText(item.weight)}</td><td>${safeText(
        item.height
      )}</td><td>${safeText(item.bbd)}</td>`;
      tb.appendChild(tr);
    }
    t.appendChild(tb);
    ui.palletModalBody.appendChild(t);
  }
  ui.palletModal.classList.remove("hidden");
}

function safeText(value) {
  const txt = String(value ?? "").trim();
  return txt ? txt : "-";
}

function formatQuantity(qty, unit) {
  const q = String(qty ?? "").trim();
  const u = String(unit ?? "").trim();
  if (!q && !u) return "";
  if (q && u) return `${q} ${u}`;
  return q || u;
}

function ensurePalletDerivedMetrics(pallet) {
  if (!pallet || pallet.source !== "INVENTORY") return pallet;
  const hasHeight = Number.isFinite(toNum(pallet.height));
  const hasWeight = Number.isFinite(toNum(pallet.weight));
  if (hasHeight && hasWeight) return pallet;

  const items = Array.isArray(pallet.items) ? pallet.items : [];
  if (items.length) {
    for (const item of items) {
      const d = deriveMetricsFromProduct(
        item.sku,
        item.qty,
        item.unit,
        item.pallet_type || pallet.pallet_type,
        latestProductBySku
      );
      if (!Number.isFinite(toNum(item.weight)) && Number.isFinite(d.weight)) item.weight = d.weight;
      if (!Number.isFinite(toNum(item.height)) && Number.isFinite(d.height)) item.height = d.height;
      if (!Number.isFinite(toNum(item.single_box_weight)) && Number.isFinite(d.singleWeight)) {
        item.single_box_weight = d.singleWeight;
      }
    }

    if (!hasWeight) {
      const sumW = items.reduce((s, x) => s + (Number.isFinite(toNum(x.weight)) ? toNum(x.weight) : 0), 0);
      if (Number.isFinite(sumW) && sumW > 0) pallet.weight = String(sumW);
    }
    if (!hasHeight) {
      const maxH = items.reduce((m, x) => (Number.isFinite(toNum(x.height)) ? Math.max(m, toNum(x.height)) : m), -Infinity);
      if (Number.isFinite(maxH)) pallet.height = String(maxH);
    }
    return pallet;
  }

  const qtyValue = pallet.total_quantity || "";
  const unitValue = pallet.quantity_unit || "CASE";
  const d = deriveMetricsFromProduct(pallet.sku, qtyValue, unitValue, pallet.pallet_type, latestProductBySku);
  if (!hasWeight && Number.isFinite(d.weight)) pallet.weight = String(d.weight);
  if (!hasHeight && Number.isFinite(d.height)) pallet.height = String(d.height);
  return pallet;
}

function normalizePermissions(value, role = "USER") {
  const isAdmin = String(role || "").toUpperCase() === "ADMIN";
  const base = {
    can_upload_data: true,
    can_download_reports: true,
    can_view_login_activity: false,
  };
  if (isAdmin) {
    return {
      can_upload_data: true,
      can_download_reports: true,
      can_view_login_activity: true,
    };
  }
  const v = value && typeof value === "object" ? value : {};
  return {
    can_upload_data: typeof v.can_upload_data === "boolean" ? v.can_upload_data : base.can_upload_data,
    can_download_reports: typeof v.can_download_reports === "boolean" ? v.can_download_reports : base.can_download_reports,
    can_view_login_activity: typeof v.can_view_login_activity === "boolean" ? v.can_view_login_activity : base.can_view_login_activity,
  };
}

function getCurrentPermissions() {
  try {
    const raw = localStorage.getItem(CURRENT_PERMISSIONS_KEY);
    if (!raw) return normalizePermissions({}, getCurrentRole());
    const parsed = JSON.parse(raw);
    return normalizePermissions(parsed, getCurrentRole());
  } catch {
    return normalizePermissions({}, getCurrentRole());
  }
}

function setCurrentPermissions(perms) {
  localStorage.setItem(CURRENT_PERMISSIONS_KEY, JSON.stringify(normalizePermissions(perms, getCurrentRole())));
}

function hasPermission(permissionKey) {
  if (isAdminUser()) return true;
  const p = getCurrentPermissions();
  return Boolean(p[permissionKey]);
}

function permissionsLabel(perms, role = "USER") {
  const p = normalizePermissions(perms, role);
  const parts = [];
  if (p.can_upload_data) parts.push("Upload");
  if (p.can_download_reports) parts.push("Download");
  if (p.can_view_login_activity) parts.push("Activity");
  return parts.length ? parts.join(", ") : "No access";
}

function loadUsers() {
  if (serverAuditEnabled && serverUsersCache.length) {
    return serverUsersCache.map((u) => ({
      username: u.username,
      password: "",
      role: u.role,
      permissions: normalizePermissions(u.permissions, u.role),
    }));
  }
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw)
      return [
        {
          username: LOCAL_ADMIN_USERNAME,
          password: LOCAL_ADMIN_PASSWORD,
          role: "ADMIN",
          permissions: normalizePermissions({}, "ADMIN"),
        },
      ];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0)
      return [
        {
          username: LOCAL_ADMIN_USERNAME,
          password: LOCAL_ADMIN_PASSWORD,
          role: "ADMIN",
          permissions: normalizePermissions({}, "ADMIN"),
        },
      ];
    const normalized = parsed
      .map((u) => {
        const username = String(u.username || "").trim();
        let role = String(u.role || "").trim().toUpperCase() === "ADMIN" ? "ADMIN" : "USER";
        if (username.toLowerCase() === LOCAL_ADMIN_USERNAME.toLowerCase()) role = "ADMIN";
        return {
          username,
          password: String(u.password || "").trim(),
          role,
          permissions: normalizePermissions(u.permissions, role),
        };
      })
      .filter((u) => u.username && u.password);
    if (!normalized.find((u) => u.username.toLowerCase() === LOCAL_ADMIN_USERNAME.toLowerCase())) {
      normalized.push({
        username: LOCAL_ADMIN_USERNAME,
        password: LOCAL_ADMIN_PASSWORD,
        role: "ADMIN",
        permissions: normalizePermissions({}, "ADMIN"),
      });
    }
    return normalized;
  } catch {
    return [
      {
        username: LOCAL_ADMIN_USERNAME,
        password: LOCAL_ADMIN_PASSWORD,
        role: "ADMIN",
        permissions: normalizePermissions({}, "ADMIN"),
      },
    ];
  }
}

function saveUsers(users) {
  if (serverAuditEnabled) return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadActivityLogs() {
  try {
    const raw = localStorage.getItem(ACTIVITY_LOG_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveActivityLogs(rows) {
  localStorage.setItem(ACTIVITY_LOG_KEY, JSON.stringify(rows.slice(-5000)));
}

async function detectServerAuditApi() {
  try {
    const resp = await fetch(`${API_BASE}/health`, { cache: "no-store" });
    if (!resp.ok) return;
    const body = await resp.json();
    serverAuditEnabled = Boolean(body && body.ok);
  } catch {
    serverAuditEnabled = false;
  }
}

async function refreshServerUsers(force = false) {
  if (!serverAuditEnabled) return;
  if (!force && serverUsersCache.length) return;
  try {
    const resp = await fetch(`${API_BASE}/users`, {
      cache: "no-store",
      headers: authHeaders(),
    });
    if (!resp.ok) return;
    const body = await resp.json();
    if (body && Array.isArray(body.users)) {
      serverUsersCache = body.users.map((u) => ({
        username: String(u.username || "").trim(),
        role: String(u.role || "USER").trim().toUpperCase() === "ADMIN" ? "ADMIN" : "USER",
        permissions: normalizePermissions(u.permissions, u.role),
      }));
    }
  } catch {
    // no-op fallback
  }
}

async function refreshServerAuditLogs(force = false) {
  if (!serverAuditEnabled) return;
  if (serverAuditRefreshInProgress) return;
  const now = Date.now();
  if (!force && now - lastServerAuditRefresh < 4000) return;
  serverAuditRefreshInProgress = true;
  try {
    const resp = await fetch(`${API_BASE}/activity`, {
      cache: "no-store",
      headers: authHeaders(),
    });
    if (!resp.ok) return;
    const body = await resp.json();
    if (body && Array.isArray(body.logs)) {
      serverAuditLogsCache = body.logs.slice(-5000);
      lastServerAuditRefresh = Date.now();
    }
  } catch {
    // no-op fallback to local log only
  } finally {
    serverAuditRefreshInProgress = false;
  }
}

async function pushServerAuditLog(entry) {
  if (!serverAuditEnabled) return;
  try {
    await fetch(`${API_BASE}/activity`, {
      method: "POST",
      headers: authHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        action: entry.action,
        details: entry.details,
        client_time: entry.time,
      }),
    });
  } catch {
    // no-op fallback to local log only
  }
}

function getCurrentUserRecord() {
  const users = loadUsers();
  const current = getCurrentUser();
  return users.find((u) => u.username === current) || null;
}

function isAuthenticated() {
  const user = getCurrentUser();
  return Boolean(user && user !== "guest");
}

function getCurrentRole() {
  const role = String(localStorage.getItem(CURRENT_ROLE_KEY) || "").trim().toUpperCase();
  if (role) return role;
  const user = getCurrentUserRecord();
  if (user && user.role) return user.role;
  return isAuthenticated() ? "USER" : "GUEST";
}

function isAdminUser() {
  return getCurrentRole() === "ADMIN";
}

function logActivity(action, details = "") {
  const entry = {
    time: new Date().toISOString(),
    user: getCurrentUser(),
    role: getCurrentRole(),
    action: String(action || "").trim(),
    details: String(details || "").trim(),
  };
  const logs = loadActivityLogs();
  logs.push(entry);
  saveActivityLogs(logs);
  pushServerAuditLog(entry);
  renderAuditLog();
}

function renderAuditLog() {
  if (!ui.auditLogBody) return;
  const localLogs = loadActivityLogs();
  const merged = [...localLogs, ...serverAuditLogsCache];
  const seen = new Set();
  const deduped = [];
  for (const l of merged) {
    const key = `${l.time}|${l.user}|${l.action}|${l.details}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(l);
  }
  const logs = deduped.slice().reverse().slice(0, 200);
  ui.auditLogBody.innerHTML = "";
  for (const l of logs) {
    const tr = document.createElement("tr");
    const dt = new Date(l.time);
    const when = Number.isNaN(dt.getTime()) ? safeText(l.time) : dt.toLocaleString();
    tr.innerHTML = `<td>${safeText(when)}</td><td>${safeText(l.user)} (${safeText(l.role)})</td><td>${safeText(
      l.action
    )}</td><td>${safeText(l.details)}</td>`;
    ui.auditLogBody.appendChild(tr);
  }
  refreshServerAuditLogs();
}

function renderUsersTable() {
  if (!ui.usersTableBody) return;
  const users = loadUsers().slice().sort((a, b) => a.username.localeCompare(b.username));
  ui.usersTableBody.innerHTML = "";
  const adminMode = isAdminUser();
  for (const u of users) {
    const canDelete = adminMode && u.username.toLowerCase() !== LOCAL_ADMIN_USERNAME.toLowerCase();
    const tr = document.createElement("tr");
    const tdUser = document.createElement("td");
    tdUser.textContent = safeText(u.username);
    const tdRole = document.createElement("td");
    tdRole.textContent = safeText(u.role);
    const tdPerm = document.createElement("td");
    tdPerm.textContent = permissionsLabel(u.permissions, u.role);
    const tdAction = document.createElement("td");
    if (canDelete) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "secondary";
      btn.textContent = "Delete";
      btn.setAttribute("data-delete-user", u.username);
      tdAction.appendChild(btn);
    } else {
      tdAction.textContent = "-";
    }
    tr.appendChild(tdUser);
    tr.appendChild(tdRole);
    tr.appendChild(tdPerm);
    tr.appendChild(tdAction);
    ui.usersTableBody.appendChild(tr);
  }
}

function renderAccessState() {
  const role = getCurrentRole();
  const perms = getCurrentPermissions();
  if (ui.currentUserRole) ui.currentUserRole.textContent = role;
  if (ui.authRole) ui.authRole.disabled = !isAdminUser();
  if (ui.permUploadData) ui.permUploadData.disabled = !isAdminUser();
  if (ui.permDownloadReports) ui.permDownloadReports.disabled = !isAdminUser();
  if (ui.permViewLoginActivity) ui.permViewLoginActivity.disabled = !isAdminUser();
  if (ui.authCreateBtn) ui.authCreateBtn.disabled = !isAdminUser();
  if (ui.auditCard) ui.auditCard.style.display = hasPermission("can_view_login_activity") ? "" : "none";
  if (ui.auditAdminActions) ui.auditAdminActions.style.display = isAdminUser() && perms.can_view_login_activity ? "flex" : "none";
  if (ui.clearAuditLog) ui.clearAuditLog.disabled = !isAdminUser();
  renderUsersTable();
  renderAuditLog();
}

function enforceLoginModal() {
  if (isAuthenticated()) return;
  if (ui.authStatusText) ui.authStatusText.textContent = "Login required to access the system.";
  ui.authModal?.classList.remove("hidden");
}

function updateAppLockState() {
  const layout = document.querySelector("main.layout");
  if (layout) layout.classList.toggle("locked", !isAuthenticated());
  if (ui.openAuthBtn) ui.openAuthBtn.textContent = isAuthenticated() ? "Account" : "Login";
}

function getCurrentUser() {
  return localStorage.getItem(CURRENT_USER_KEY) || "guest";
}

function setCurrentUser(name) {
  localStorage.setItem(CURRENT_USER_KEY, name);
  if (String(name || "").toLowerCase() === "guest") setAuthToken("");
  ui.topbarUserLabel.textContent = name;
  renderAccessState();
  updateAppLockState();
  enforceLoginModal();
}

function setCurrentRole(role) {
  const normalized = String(role || "").trim().toUpperCase() || "USER";
  localStorage.setItem(CURRENT_ROLE_KEY, normalized);
}

function syncPermissionInputsByRole() {
  const role = String(ui.authRole?.value || "USER").toUpperCase();
  const admin = role === "ADMIN";
  if (ui.permUploadData) ui.permUploadData.checked = admin ? true : ui.permUploadData.checked;
  if (ui.permDownloadReports) ui.permDownloadReports.checked = admin ? true : ui.permDownloadReports.checked;
  if (ui.permViewLoginActivity) ui.permViewLoginActivity.checked = admin ? true : ui.permViewLoginActivity.checked;
}

function initAuth() {
  const users = loadUsers();
  saveUsers(users);
  const current = getCurrentUser();
  if (!users.find((u) => u.username === current)) {
    setCurrentRole("GUEST");
    setCurrentPermissions(normalizePermissions({}, "USER"));
    setCurrentUser("guest");
  } else {
    ui.topbarUserLabel.textContent = current;
    const u = users.find((x) => x.username === current);
    setCurrentRole(u?.role || "USER");
    setCurrentPermissions(normalizePermissions(u?.permissions || {}, u?.role || "USER"));
  }
  renderAccessState();
  updateAppLockState();
  enforceLoginModal();
  if (!serverAuditEnabled && ui.authStatusText) {
    ui.authStatusText.textContent = "Local mode: user changes are only on this device. Use Node server deployment for shared users.";
  }
}

function parseBbdDate(value) {
  const s = String(value || "").trim();
  if (!s) return null;
  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return new Date(`${iso[1]}-${iso[2]}-${iso[3]}T00:00:00`);
  const dot = s.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/);
  if (dot) {
    const dd = dot[1].padStart(2, "0");
    const mm = dot[2].padStart(2, "0");
    const yy = dot[3].length === 2 ? `20${dot[3]}` : dot[3];
    return new Date(`${yy}-${mm}-${dd}T00:00:00`);
  }
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}

function isEarlierBbd(a, b) {
  const da = parseBbdDate(a);
  const db = parseBbdDate(b);
  if (!da || !db) return false;
  return da.getTime() < db.getTime();
}

function checkFifoAlerts(incomingRows) {
  const alerts = [];
  const pickingNodes = locationNodes.filter((n) => n.isPicking && n.pallet && n.pallet.sku);

  for (const row of incomingRows) {
    const sku = String(row.sku || "").trim();
    const bbd = String(row.bbd || "").trim();
    if (!sku || !bbd) continue;

    for (const p of pickingNodes) {
      if (String(p.pallet.sku || "").trim() !== sku) continue;
      if (isEarlierBbd(bbd, p.pallet.bbd)) {
        alerts.push({
          sku,
          incoming_bbd: bbd,
          picking_location: p.code,
          picking_bbd: p.pallet.bbd,
        });
      }
    }
  }
  return alerts;
}

function buildIncomingFifoMovements(alerts) {
  const grouped = new Map();
  for (const a of alerts) {
    const key = a.sku;
    if (!grouped.has(key)) {
      grouped.set(key, {
        sku: a.sku,
        incoming_bbd: a.incoming_bbd,
        picking_bbd: a.picking_bbd,
        locations: new Set([a.picking_location]),
      });
      continue;
    }
    const g = grouped.get(key);
    g.locations.add(a.picking_location);
    if (isEarlierBbd(a.incoming_bbd, g.incoming_bbd)) g.incoming_bbd = a.incoming_bbd;
    if (isEarlierBbd(a.picking_bbd, g.picking_bbd)) g.picking_bbd = a.picking_bbd;
  }

  const rows = [];
  for (const g of grouped.values()) {
    rows.push({
      move_type: "FIFO_INCOMING",
      sku: g.sku,
      from_location: "INCOMING_PO",
      to_location: [...g.locations].sort().join(", "),
      from_bbd: g.incoming_bbd,
      to_bbd: g.picking_bbd,
      action: "Move lower BBD pallet to picking first",
      reason: `Incoming BBD ${g.incoming_bbd} is lower than picking BBD ${g.picking_bbd}.`,
    });
  }
  return rows;
}

function buildCurrentStockFifoMovements() {
  const bySku = new Map();

  for (const n of locationNodes) {
    if (!n.pallet || n.pallet.source !== "INVENTORY") continue;
    const sku = String(n.pallet.sku || "").trim();
    if (!sku) continue;
    const bbd = String(n.pallet.bbd || "").trim();
    if (!bbd || !parseBbdDate(bbd)) continue;

    if (!bySku.has(sku)) bySku.set(sku, { picking: [], storage: [] });
    const rec = bySku.get(sku);
    const row = { location: n.code, bbd };
    if (n.isPicking) rec.picking.push(row);
    else rec.storage.push(row);
  }

  const moves = [];
  for (const [sku, rec] of bySku.entries()) {
    if (!rec.picking.length || !rec.storage.length) continue;

    rec.picking.sort((a, b) => parseBbdDate(a.bbd) - parseBbdDate(b.bbd));
    rec.storage.sort((a, b) => parseBbdDate(a.bbd) - parseBbdDate(b.bbd));

    const oldestStorage = rec.storage[0];
    const oldestPicking = rec.picking[0];
    const newestPicking = rec.picking[rec.picking.length - 1];

    if (isEarlierBbd(oldestStorage.bbd, oldestPicking.bbd)) {
      moves.push({
        move_type: "FIFO_CURRENT_STOCK",
        sku,
        from_location: oldestStorage.location,
        to_location: newestPicking.location,
        from_bbd: oldestStorage.bbd,
        to_bbd: newestPicking.bbd,
        action: "Swap storage pallet into picking",
        reason: `Storage has older BBD ${oldestStorage.bbd} than picking ${oldestPicking.bbd}.`,
      });
    }
  }
  return moves;
}

function buildFastMoverMovements(recommendations) {
  const rows = [];
  for (const r of recommendations) {
    if (r.action === "Keep in picking") continue;
    if (r.action === "Swap with slow mover") {
      rows.push({
        move_type: "FAST_MOVER_SWAP_OUT",
        sku: r.swap_out_sku || "",
        from_location: r.swap_out_location || "",
        to_location: "STORAGE_ZONE",
        from_bbd: "",
        to_bbd: "",
        action: `Move slow SKU ${r.swap_out_sku || ""} out of picking`,
        reason: `Free picking slot for faster SKU ${r.sku}.`,
      });
    }
    rows.push({
      move_type: "FAST_MOVER",
      sku: r.sku,
      from_location: r.move_from_location || "",
      to_location: r.move_to_location || "PICKING_ZONE",
      from_bbd: "",
      to_bbd: "",
      action: r.action,
      reason: r.reason,
    });
  }
  return rows;
}

function buildIncomingPoMovements(plan) {
  const rows = [];
  for (const p of plan) {
    rows.push({
      move_type: "INCOMING_PO",
      incoming_id: p.incoming_id || "",
      sku: p.sku || "",
      pallet_type: p.pallet_type || "",
      from_location: "INCOMING_PO",
      to_location: p.primary_location || "",
      status: p.status || "",
      reason: p.reason || "",
      blocked_locations: p.blocked_locations || "",
    });
  }
  return rows;
}

function showFifoPopup(moves) {
  ui.fifoModalBody.innerHTML = "";
  if (!moves.length) {
    ui.fifoModal.classList.add("hidden");
    return;
  }

  const intro = document.createElement("p");
  intro.textContent =
    "Movement suggestions generated from incoming FIFO, current-stock FIFO, and fast-mover analysis.";
  ui.fifoModalBody.appendChild(intro);

  const table = document.createElement("table");
  table.innerHTML =
    "<thead><tr><th>Type</th><th>SKU</th><th>From</th><th>To</th><th>From BBD</th><th>To BBD</th><th>Action</th><th>Reason</th></tr></thead>";
  const body = document.createElement("tbody");

  const rows = [...moves].sort((a, b) => {
    if (a.move_type !== b.move_type) return a.move_type.localeCompare(b.move_type);
    return String(a.sku || "").localeCompare(String(b.sku || ""));
  });
  for (const r of rows.slice(0, 300)) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(r.move_type)}</td><td>${safeText(r.sku)}</td><td>${safeText(
      r.from_location
    )}</td><td>${safeText(r.to_location)}</td><td>${safeText(r.from_bbd)}</td><td>${safeText(
      r.to_bbd
    )}</td><td>${safeText(r.action)}</td><td>${safeText(r.reason)}</td>`;
    body.appendChild(tr);
  }
  table.appendChild(body);
  ui.fifoModalBody.appendChild(table);
  ui.fifoModal.classList.remove("hidden");
}

function findSuggestedLocationForViolation(v) {
  for (const z of zones.values()) {
    const free = freeStorageLocations(z);
    for (const loc of free) {
      const h = z.locHeight.get(loc);
      const wEuro = z.locWeight.get(loc);
      const locType = String(z.locLocationType.get(loc) || "").toUpperCase();
      const wMax = v.pallet_type === "STANDARD" && Number.isFinite(wEuro) ? wEuro * STANDARD_SPACE_FACTOR : wEuro;
      const hOk = !Number.isFinite(v.actual_height) || !Number.isFinite(h) || h >= v.actual_height;
      const wOk =
        locType === "PICKING" ? !Number.isFinite(v.actual_weight) || !Number.isFinite(wMax) || wMax >= v.actual_weight : true;
      if (hOk && wOk) return loc;
    }
  }
  return "";
}

function buildInventoryConsistencyIssues(inventoryRows) {
  const missingLocationRows = [];
  const duplicateLocationRows = [];
  const byLoc = new Map();

  for (const row of inventoryRows || []) {
    const loc = normalizeLocationCode(row.LOKACE || row.location || "");
    if (!loc) continue;
    if (!locationToZone.has(loc)) {
      missingLocationRows.push({
        location: loc,
        sku: String(row.SKU || "").trim(),
        pallet_id: String(row["SSCC PALETY"] || "").trim(),
        qty: row.TOTAL_QTY ?? "",
        unit: row.QTY_UNIT ?? "",
      });
      continue;
    }
    if (!byLoc.has(loc)) byLoc.set(loc, []);
    byLoc.get(loc).push(row);
  }

  for (const [loc, rows] of byLoc.entries()) {
    if (rows.length <= 1) continue;
    const palletIds = [...new Set(rows.map((r) => String(r["SSCC PALETY"] || "").trim()).filter(Boolean))];
    if (palletIds.length <= 1) continue;
    duplicateLocationRows.push({
      location: loc,
      row_count: rows.length,
      skus: [...new Set(rows.map((r) => String(r.SKU || "").trim()).filter(Boolean))].join(", "),
    });
  }

  return { missingLocationRows, duplicateLocationRows };
}

function showValidationPopup(missingSkus, violations, inventoryIssues = {}) {
  if (!ui.validationModalBody || !ui.validationModal) return;
  ui.validationModalBody.innerHTML = "";

  const hasMissing = Array.isArray(missingSkus) && missingSkus.length > 0;
  const hasViolations = Array.isArray(violations) && violations.length > 0;
  const hasMissingLocations = Array.isArray(inventoryIssues.missingLocationRows) && inventoryIssues.missingLocationRows.length > 0;
  const hasDuplicateLocations =
    Array.isArray(inventoryIssues.duplicateLocationRows) && inventoryIssues.duplicateLocationRows.length > 0;

  if (!hasMissing && !hasViolations && !hasMissingLocations && !hasDuplicateLocations) {
    ui.validationModal.classList.add("hidden");
    return;
  }

  if (hasMissing) {
    const h = document.createElement("h3");
    h.textContent = "Missing product measurements";
    ui.validationModalBody.appendChild(h);
    const p = document.createElement("p");
    p.textContent = "Height/weight could not be calculated for these SKUs (check Product Measurements upload):";
    ui.validationModalBody.appendChild(p);
    const ul = document.createElement("ul");
    for (const sku of missingSkus.slice(0, 400)) {
      const li = document.createElement("li");
      li.textContent = sku;
      ul.appendChild(li);
    }
    ui.validationModalBody.appendChild(ul);
  }

  if (hasViolations) {
    const h = document.createElement("h3");
    h.textContent = "Wrong location allocation detected";
    ui.validationModalBody.appendChild(h);

    const table = document.createElement("table");
    table.innerHTML =
      "<thead><tr><th>Location</th><th>SKU</th><th>Pallet</th><th>Reason</th><th>Suggested Move</th></tr></thead>";
    const tb = document.createElement("tbody");
    for (const v of violations.slice(0, 500)) {
      const suggestion = findSuggestedLocationForViolation(v);
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${safeText(v.location)}</td><td>${safeText(v.sku)}</td><td>${safeText(
        v.pallet_id
      )}</td><td>${safeText(v.reason)}</td><td>${safeText(suggestion || "No free suitable location")}</td>`;
      tb.appendChild(tr);
    }
    table.appendChild(tb);
    ui.validationModalBody.appendChild(table);
  }

  if (hasMissingLocations) {
    const h = document.createElement("h3");
    h.textContent = "Inventory locations not found in warehouse master";
    ui.validationModalBody.appendChild(h);
    const table = document.createElement("table");
    table.innerHTML = "<thead><tr><th>Location</th><th>SKU</th><th>Pallet</th><th>Qty</th></tr></thead>";
    const tb = document.createElement("tbody");
    for (const r of inventoryIssues.missingLocationRows.slice(0, 500)) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${safeText(r.location)}</td><td>${safeText(r.sku)}</td><td>${safeText(
        r.pallet_id
      )}</td><td>${safeText(formatQuantity(r.qty, r.unit))}</td>`;
      tb.appendChild(tr);
    }
    table.appendChild(tb);
    ui.validationModalBody.appendChild(table);
  }

  if (hasDuplicateLocations) {
    const h = document.createElement("h3");
    h.textContent = "Duplicate rows for same location in inventory file";
    ui.validationModalBody.appendChild(h);
    const table = document.createElement("table");
    table.innerHTML = "<thead><tr><th>Location</th><th>Rows</th><th>SKUs</th></tr></thead>";
    const tb = document.createElement("tbody");
    for (const r of inventoryIssues.duplicateLocationRows.slice(0, 500)) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${safeText(r.location)}</td><td>${safeText(r.row_count)}</td><td>${safeText(r.skus)}</td>`;
      tb.appendChild(tr);
    }
    table.appendChild(tb);
    ui.validationModalBody.appendChild(table);
  }

  ui.validationModal.classList.remove("hidden");
}

function findBestLocationInPreviousGroup(prevGroup) {
  const candidates = locationNodes
    .filter((n) => n.isPicking && String(n.block || "").toUpperCase() === prevGroup)
    .sort((a, b) => {
      const ea = a.status === "EMPTY_REAL" ? 0 : 1;
      const eb = b.status === "EMPTY_REAL" ? 0 : 1;
      if (ea !== eb) return ea - eb;
      if (a.bay !== b.bay) return a.bay - b.bay;
      return a.code.localeCompare(b.code);
    });
  return candidates[0]?.code || "";
}

function findSaferPickingLocation(currentGroup, currentLocation = "") {
  const blockedPattern = /-(02-[LR]|03-L)$/i;
  const candidates = locationNodes
    .filter((n) => n.isPicking)
    .filter((n) => !blockedPattern.test(n.code))
    .sort((a, b) => {
      const ga = String(a.block || "").localeCompare(String(b.block || ""));
      if (ga !== 0) return ga;
      const ea = a.status === "EMPTY_REAL" ? 0 : 1;
      const eb = b.status === "EMPTY_REAL" ? 0 : 1;
      if (ea !== eb) return ea - eb;
      if (a.bay !== b.bay) return a.bay - b.bay;
      return a.code.localeCompare(b.code);
    });
  if (!candidates.length) return "";

  const currentGroupCode = String(currentGroup || "").toUpperCase();
  const previousGroupChoices = candidates.filter((n) => String(n.block || "").toUpperCase() < currentGroupCode);
  if (previousGroupChoices.length) return previousGroupChoices[0].code;

  const sameGroupChoices = candidates.filter((n) => String(n.block || "").toUpperCase() === currentGroupCode);
  if (sameGroupChoices.length) return sameGroupChoices[0].code;

  const other = candidates.find((n) => n.code !== currentLocation);
  return other?.code || candidates[0].code;
}

function getSingleBoxWeightForItem(item) {
  if (!item) return NaN;
  const direct = toNum(item.single_box_weight);
  if (Number.isFinite(direct)) return direct;
  const sku = normalizeSkuCode(item.sku || "").toUpperCase();
  if (!sku) return NaN;
  const product = latestProductBySku.get(sku);
  if (!product) return NaN;
  return toNum(product.weightPerBox);
}

function extractPickingProductEntries(sourceName = "INVENTORY") {
  const out = [];
  for (const node of locationNodes) {
    if (!node.isPicking || !node.pallet || node.pallet.source !== sourceName) continue;
    const group = String(node.block || "").toUpperCase();
    const items = Array.isArray(node.pallet.items) && node.pallet.items.length ? node.pallet.items : [{ sku: node.pallet.sku }];
    for (const item of items) {
      const sku = normalizeSkuCode(item.sku || "");
      if (!sku) continue;
      const singleWeight = getSingleBoxWeightForItem(item);
      if (!Number.isFinite(singleWeight)) continue;
      out.push({
        group,
        location: node.code,
        sku,
        single_box_weight: singleWeight,
      });
    }
  }
  return out;
}

function analyzePickingLocationSuggestions() {
  const groupOrder = "ABCDEFGHIJKLMNOP".split("");
  const byGroup = new Map(groupOrder.map((g) => [g, []]));
  const entries = extractPickingProductEntries("INVENTORY");
  for (const e of entries) {
    if (byGroup.has(e.group)) byGroup.get(e.group).push(e);
  }

  const rows = [];
  for (let i = 1; i < groupOrder.length; i += 1) {
    const prevGroup = groupOrder[i - 1];
    const currGroup = groupOrder[i];
    const prev = byGroup.get(prevGroup) || [];
    const curr = byGroup.get(currGroup) || [];
    if (!prev.length || !curr.length) continue;
    const prevHeaviest = [...prev].sort((a, b) => b.single_box_weight - a.single_box_weight)[0];
    for (const c of curr) {
      if (c.single_box_weight <= prevHeaviest.single_box_weight + 1e-9) continue;
      rows.push({
        category: "PICKING_CROSS_GROUP_WEIGHT",
        previous_group: prevGroup,
        previous_location: prevHeaviest.location,
        previous_sku: prevHeaviest.sku,
        previous_single_box_weight: Number(prevHeaviest.single_box_weight.toFixed(3)),
        current_group: currGroup,
        current_location: c.location,
        current_sku: c.sku,
        current_single_box_weight: Number(c.single_box_weight.toFixed(3)),
        weight_diff: Number((c.single_box_weight - prevHeaviest.single_box_weight).toFixed(3)),
        suggested_location: findBestLocationInPreviousGroup(prevGroup) || "No picking slot in previous group",
        suggestion: `Move SKU ${c.sku} from ${c.location} to previous group ${prevGroup}.`,
      });
    }
  }
  return rows;
}

function buildSystemSuggestionRows(sourceName = "INVENTORY") {
  const rows = [];
  const entries = extractPickingProductEntries(sourceName);
  const locationPattern = /-(02-[LR]|03-L)$/i;
  for (const e of entries) {
    if (!locationPattern.test(e.location)) continue;
    if (e.single_box_weight <= 5) continue;
    const suggestedLocation = findSaferPickingLocation(e.group, e.location) || "No suitable picking location found";
    rows.push({
      category: sourceName === "INCOMING_PO" ? "PREALLOCATION_SYSTEM_SUGGESTION" : "SYSTEM_SUGGESTION",
      source: sourceName,
      location: e.location,
      group: e.group,
      sku: e.sku,
      single_box_weight: Number(e.single_box_weight.toFixed(3)),
      issue: "Picking slot 02-L / 02-R / 03-L has single box weight > 5 kg",
      suggested_location: suggestedLocation,
      suggestion: `Move to safer picking slot: ${suggestedLocation}`,
    });
  }
  return rows;
}

function showPickingSuggestionPopup(rows) {
  if (!ui.pickingSuggestionModal || !ui.pickingSuggestionModalBody) return;
  ui.pickingSuggestionModalBody.innerHTML = "";
  if (!rows.length) {
    ui.pickingSuggestionModal.classList.add("hidden");
    return;
  }

  const p = document.createElement("p");
  p.textContent = "Cross-group picking check (A to P): heavier single-box product in next group than previous group.";
  ui.pickingSuggestionModalBody.appendChild(p);

  const table = document.createElement("table");
  table.innerHTML =
    "<thead><tr><th>Prev Group</th><th>Prev Location</th><th>Prev SKU</th><th>Prev Box Wt</th><th>Current Group</th><th>Current Location</th><th>Current SKU</th><th>Current Box Wt</th><th>Diff</th><th>Suggested Location</th></tr></thead>";
  const tb = document.createElement("tbody");
  for (const r of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(r.previous_group)}</td><td>${safeText(r.previous_location)}</td><td>${safeText(
      r.previous_sku
    )}</td><td>${safeText(r.previous_single_box_weight)}</td><td>${safeText(r.current_group)}</td><td>${safeText(
      r.current_location
    )}</td><td>${safeText(r.current_sku)}</td><td>${safeText(r.current_single_box_weight)}</td><td>${safeText(
      r.weight_diff
    )}</td><td>${safeText(r.suggested_location)}</td>`;
    tb.appendChild(tr);
  }
  table.appendChild(tb);
  ui.pickingSuggestionModalBody.appendChild(table);
  ui.pickingSuggestionModal.classList.remove("hidden");
}

function showSystemSuggestionPopup(rows) {
  if (!ui.systemSuggestionModal || !ui.systemSuggestionModalBody) return;
  ui.systemSuggestionModalBody.innerHTML = "";
  if (!rows.length) {
    ui.systemSuggestionModal.classList.add("hidden");
    return;
  }
  const p = document.createElement("p");
  p.textContent = "Products with single box weight above 5 kg in picking locations ending with 02-L / 02-R / 03-L.";
  ui.systemSuggestionModalBody.appendChild(p);

  const table = document.createElement("table");
  table.innerHTML =
    "<thead><tr><th>Source</th><th>Group</th><th>Location</th><th>SKU</th><th>Single Box Weight</th><th>Suitable Location</th><th>Suggestion</th></tr></thead>";
  const tb = document.createElement("tbody");
  for (const r of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(r.source)}</td><td>${safeText(r.group)}</td><td>${safeText(r.location)}</td><td>${safeText(
      r.sku
    )}</td><td>${safeText(r.single_box_weight)}</td><td>${safeText(r.suggested_location)}</td><td>${safeText(
      r.suggestion
    )}</td>`;
    tb.appendChild(tr);
  }
  table.appendChild(tb);
  ui.systemSuggestionModalBody.appendChild(table);
  ui.systemSuggestionModal.classList.remove("hidden");
}

function showPreallocationSuggestionPopup(rows) {
  if (!ui.preallocationSuggestionModal || !ui.preallocationSuggestionModalBody) return;
  ui.preallocationSuggestionModalBody.innerHTML = "";
  if (!rows.length) {
    ui.preallocationSuggestionModal.classList.add("hidden");
    return;
  }
  const p = document.createElement("p");
  p.textContent = "Pre-allocation suggestion for heavy single-box products in sensitive picking slots.";
  ui.preallocationSuggestionModalBody.appendChild(p);
  const table = document.createElement("table");
  table.innerHTML =
    "<thead><tr><th>Source</th><th>Group</th><th>Location</th><th>SKU</th><th>Single Box Weight</th><th>Suitable Location</th><th>Suggestion</th></tr></thead>";
  const tb = document.createElement("tbody");
  for (const r of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(r.source)}</td><td>${safeText(r.group)}</td><td>${safeText(r.location)}</td><td>${safeText(
      r.sku
    )}</td><td>${safeText(r.single_box_weight)}</td><td>${safeText(r.suggested_location)}</td><td>${safeText(
      r.suggestion
    )}</td>`;
    tb.appendChild(tr);
  }
  table.appendChild(tb);
  ui.preallocationSuggestionModalBody.appendChild(table);
  ui.preallocationSuggestionModal.classList.remove("hidden");
}

function buildProblemRows(
  missingHeaders,
  missingSkus,
  violations,
  pickingSuggestions = [],
  inventoryIssues = {},
  systemSuggestions = [],
  preallocationSuggestions = []
) {
  const rows = [];
  for (const h of missingHeaders || []) {
    rows.push({
      category: "MISSING_HEADER",
      issue: h,
      sku: "",
      location: "",
      pallet_id: "",
      details: "Required header not found in uploaded file.",
    });
  }
  for (const sku of missingSkus || []) {
    rows.push({
      category: "MISSING_MEASUREMENT",
      issue: "Missing height/weight inputs",
      sku,
      location: "",
      pallet_id: "",
      details: "Could not calculate pallet dimensions from product file + inventory quantity/unit. Check if SKU exists in product upload.",
    });
  }
  for (const v of violations || []) {
    const suggestedLocation = findSuggestedLocationForViolation(v) || "No suitable location found";
    rows.push({
      category: "WRONG_LOCATION",
      issue: v.reason || "Height/weight mismatch",
      sku: v.sku || "",
      location: v.location || "",
      pallet_id: v.pallet_id || "",
      suitable_location: suggestedLocation,
      details: `Actual H/W: ${safeText(v.actual_height)}/${safeText(v.actual_weight)}, Max H/W: ${safeText(
        v.max_height
      )}/${safeText(v.max_weight)}, Suggested: ${suggestedLocation}`,
    });
  }
  for (const r of inventoryIssues.missingLocationRows || []) {
    rows.push({
      category: "INVENTORY_LOCATION_MISMATCH",
      issue: "Location not found in warehouse master",
      sku: r.sku || "",
      location: r.location || "",
      pallet_id: r.pallet_id || "",
      details: `Qty: ${safeText(formatQuantity(r.qty, r.unit))}`,
    });
  }
  for (const r of inventoryIssues.duplicateLocationRows || []) {
    rows.push({
      category: "INVENTORY_DUPLICATE_LOCATION",
      issue: "Multiple rows exist for same location",
      sku: r.skus || "",
      location: r.location || "",
      pallet_id: "",
      details: `Rows: ${r.row_count}`,
    });
  }
  for (const s of pickingSuggestions || []) {
    rows.push({
      category: "PICKING_CROSS_GROUP_WEIGHT",
      issue: "Current group has heavier product than previous group",
      sku: s.current_sku || "",
      location: s.current_location || "",
      pallet_id: "",
      suitable_location: s.suggested_location || "",
      details: `Prev ${s.previous_group} (${s.previous_location}, SKU ${s.previous_sku}, wt ${s.previous_single_box_weight}) -> Curr ${s.current_group} (${s.current_location}, SKU ${s.current_sku}, wt ${s.current_single_box_weight}), Diff ${s.weight_diff}, Suggest ${s.suggested_location}`,
    });
  }
  for (const s of systemSuggestions || []) {
    rows.push({
      category: "SYSTEM_SUGGESTION",
      issue: s.issue || "Heavy single-box product in sensitive picking slot",
      sku: s.sku || "",
      location: s.location || "",
      pallet_id: "",
      suitable_location: s.suggested_location || "",
      details: `Source ${s.source}, box wt ${s.single_box_weight}, suitable location: ${s.suggested_location || "-"}, suggestion: ${
        s.suggestion
      }`,
    });
  }
  for (const s of preallocationSuggestions || []) {
    rows.push({
      category: "PREALLOCATION_SUGGESTION",
      issue: s.issue || "Pre-allocation heavy-slot warning",
      sku: s.sku || "",
      location: s.location || "",
      pallet_id: "",
      suitable_location: s.suggested_location || "",
      details: `Source ${s.source}, box wt ${s.single_box_weight}, suitable location: ${s.suggested_location || "-"}, suggestion: ${
        s.suggestion
      }`,
    });
  }
  return rows;
}

function buildMissingProductSkuRows(inventoryRows = []) {
  const bySku = new Map();
  for (const r of inventoryRows) {
    const sku = normalizeSkuCode(r.SKU || "");
    if (!sku) continue;
    if (r._product_found) continue;
    if (!bySku.has(sku)) {
      bySku.set(sku, {
        sku,
        locations: new Set(),
        qty_total: 0,
        units: new Set(),
        rows: 0,
      });
    }
    const rec = bySku.get(sku);
    rec.rows += 1;
    const loc = normalizeLocationCode(r.LOKACE || "");
    if (loc) rec.locations.add(loc);
    const qty = toNum(r.TOTAL_QTY);
    if (Number.isFinite(qty)) rec.qty_total += qty;
    const unit = String(r.QTY_UNIT || "").trim();
    if (unit) rec.units.add(unit);
  }
  return [...bySku.values()]
    .map((r) => ({
      sku: r.sku,
      rows: r.rows,
      qty_total: Number(r.qty_total.toFixed(3)),
      units: [...r.units].sort().join("|"),
      locations: [...r.locations].sort().join("|"),
      issue: "SKU not found in uploaded Product Measurements file",
    }))
    .sort((a, b) => a.sku.localeCompare(b.sku));
}

function buildFastMoverRecommendations(fastRows) {
  if (!fastRows.length) return [];

  const enriched = fastRows
    .map((r) => {
      const sku = String(r.sku || r.SKU || "").trim();
      const score = Number(r.movement || r.qty || r.velocity || r.count || 0);
      return { sku, score: Number.isFinite(score) ? score : 0 };
    })
    .filter((r) => r.sku)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30);

  const scoreBySku = new Map(enriched.map((x) => [x.sku, x.score]));
  const recos = [];
  const pickingBySku = new Map();
  const storageBySku = new Map();
  let emptyPickingCount = 0;

  for (const n of locationNodes) {
    if (!n.pallet || !n.pallet.sku) {
      if (n.isPicking) emptyPickingCount += 1;
      continue;
    }
    const sku = String(n.pallet.sku).trim();
    if (!sku) continue;
    if (n.isPicking) {
      if (!pickingBySku.has(sku)) pickingBySku.set(sku, []);
      pickingBySku.get(sku).push(n.code);
    } else {
      if (!storageBySku.has(sku)) storageBySku.set(sku, []);
      storageBySku.get(sku).push(n.code);
    }
  }

  const availableSlowPicking = [...pickingBySku.entries()].map(([sku, locations]) => ({
    sku,
    score: scoreBySku.get(sku) || 0,
    locations: [...locations],
  }));

  for (const row of enriched) {
    const pickingLocs = pickingBySku.get(row.sku) || [];
    const storageLocs = storageBySku.get(row.sku) || [];
    const inPicking = pickingLocs.length;
    const inStorage = storageLocs.length;

    if (inPicking > 0) {
      recos.push({
        sku: row.sku,
        action: "Keep in picking",
        reason: `Already in picking (${inPicking}) and fast-moving score ${row.score}.`,
        move_from_location: "",
        move_to_location: "",
        swap_out_sku: "",
        swap_out_location: "",
      });
      continue;
    }

    if (inStorage > 0 && emptyPickingCount > 0) {
      recos.push({
        sku: row.sku,
        action: "Move to picking",
        reason: `Fast-moving score ${row.score}; present in storage (${inStorage}) with empty picking slots.`,
        move_from_location: storageLocs[0] || "",
        move_to_location: "PICKING_EMPTY_SLOT",
        swap_out_sku: "",
        swap_out_location: "",
      });
      emptyPickingCount -= 1;
      continue;
    }

    if (inStorage > 0) {
      availableSlowPicking.sort((a, b) => a.score - b.score);
      const slowCandidate = availableSlowPicking.find(
        (x) => x.locations.length > 0 && x.score < row.score && x.sku !== row.sku
      );

      if (slowCandidate) {
        const slowLoc = slowCandidate.locations.shift();
        recos.push({
          sku: row.sku,
          action: "Swap with slow mover",
          reason: `No empty picking slot. Move slow SKU ${slowCandidate.sku} (score ${slowCandidate.score}) from ${slowLoc} to storage; then move fast SKU ${row.sku} (score ${row.score}) from storage to picking.`,
          move_from_location: storageLocs[0] || "",
          move_to_location: slowLoc || "PICKING_SLOT_REQUIRED",
          swap_out_sku: slowCandidate.sku,
          swap_out_location: slowLoc || "",
        });
        continue;
      }

      recos.push({
        sku: row.sku,
        action: "Swap into picking",
        reason: `Fast-moving score ${row.score}; no empty picking slots and no slower picking SKU found from uploaded fast-moving data.`,
        move_from_location: storageLocs[0] || "",
        move_to_location: "PICKING_SLOT_REQUIRED",
        swap_out_sku: "",
        swap_out_location: "",
      });
    }
  }
  return recos;
}

function renderRecommendations(rows) {
  ui.recoTableBody.innerHTML = "";
  for (const r of rows.slice(0, 30)) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(r.sku)}</td><td>${safeText(r.action)}</td><td>${safeText(r.reason)}</td>`;
    ui.recoTableBody.appendChild(tr);
  }
}

function renderSelectedPalletDetails(node) {
  if (!node) {
    ui.detailStatus.textContent = "-";
    ui.detailSource.textContent = "-";
    ui.detailPalletId.textContent = "-";
    ui.detailSku.textContent = "-";
    ui.detailType.textContent = "-";
    ui.detailHeight.textContent = "-";
    ui.detailWeight.textContent = "-";
    ui.detailQuantity.textContent = "-";
    ui.detailBbd.textContent = "-";
    return;
  }

  ui.detailStatus.textContent = safeText(node.status);
  if (!node.pallet) {
    ui.detailSource.textContent = "-";
    ui.detailPalletId.textContent = "-";
    ui.detailSku.textContent = "-";
    ui.detailType.textContent = "-";
    ui.detailHeight.textContent = "-";
    ui.detailWeight.textContent = "-";
    ui.detailQuantity.textContent = "-";
    ui.detailBbd.textContent = "-";
    return;
  }

  const pallet = ensurePalletDerivedMetrics(node.pallet);
  ui.detailSource.textContent = safeText(pallet.source);
  ui.detailPalletId.textContent = safeText(pallet.pallet_id);
  ui.detailSku.textContent = safeText(pallet.sku);
  if (Array.isArray(pallet.items) && pallet.items.length > 1) {
    ui.detailSku.textContent = `${safeText(pallet.sku)} (${pallet.items.length} products)`;
  }
  ui.detailType.textContent = safeText(pallet.pallet_type);
  ui.detailHeight.textContent = safeText(pallet.height);
  ui.detailWeight.textContent = safeText(pallet.weight);
  ui.detailQuantity.textContent = safeText(formatQuantity(pallet.total_quantity, pallet.quantity_unit));
  ui.detailBbd.textContent = safeText(pallet.bbd);
}

canvas.addEventListener("click", (e) => {
  if (isPanning) return;
  const node = pickNodeAt(e.clientX, e.clientY);
  if (!node) return;
  selectedLocationCode = node.code;

  const zr = zoneRows.find((r) => r.zone_key === node.zoneKey);
  const zText = zr ? `${zr.group} ${zr.zone}` : "-";
  ui.selectedLocation.textContent = `${node.code} (${node.status}) | ${zText}`;
  renderSelectedPalletDetails(node);
  showPalletPopup(node);
  renderCanvas();
});

canvas.addEventListener("mousedown", (e) => {
  const modifierRotate = e.shiftKey || e.ctrlKey || e.altKey || e.metaKey;
  if (e.button === 0) {
    if (modifierRotate) {
      isRotating = true;
      rotateStartX = e.clientX;
      rotateOrigin = viewRotation;
      canvas.style.cursor = "grabbing";
      return;
    }
    isPanning = true;
    panStartX = e.clientX;
    panStartY = e.clientY;
    panOriginX = panX;
    panOriginY = panY;
    canvas.style.cursor = "grabbing";
    return;
  }
  if (e.button === 2) {
    isRotating = true;
    rotateStartX = e.clientX;
    rotateOrigin = viewRotation;
    canvas.style.cursor = "grabbing";
  }
});

window.addEventListener("mousemove", (e) => {
  if (!isPanning) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = canvas.width / Math.max(1, rect.width);
  panX = panOriginX + (e.clientX - panStartX) * dpr;
  panY = panOriginY + (e.clientY - panStartY) * dpr;
  renderCanvas();
});

window.addEventListener("mousemove", (e) => {
  if (!isRotating) return;
  const dx = e.clientX - rotateStartX;
  viewRotation = rotateOrigin + dx * 0.02;
  renderCanvas();
});

function endPan() {
  if (!isPanning) return;
  isPanning = false;
  if (!isRotating) canvas.style.cursor = "default";
}

window.addEventListener("mouseup", endPan);
canvas.addEventListener("mouseleave", endPan);

function endRotate() {
  if (!isRotating) return;
  isRotating = false;
  if (!isPanning) canvas.style.cursor = "default";
}

window.addEventListener("mouseup", endRotate);
canvas.addEventListener("mouseleave", endRotate);
canvas.addEventListener("contextmenu", (e) => e.preventDefault());

canvas.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const step = e.deltaY < 0 ? 1.12 : 0.9;
    zoomLevel = Math.max(0.35, Math.min(4, zoomLevel * step));
    renderCanvas();
  },
  { passive: false }
);

function parseCsv(text) {
  const rows = [];
  let i = 0;
  let field = "";
  let row = [];
  let inQuotes = false;

  while (i < text.length) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 2;
        continue;
      }
      inQuotes = !inQuotes;
      i += 1;
      continue;
    }

    if (!inQuotes && ch === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }

    if (!inQuotes && (ch === "\n" || ch === "\r")) {
      if (ch === "\r" && next === "\n") i += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      i += 1;
      continue;
    }

    field += ch;
    i += 1;
  }

  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }

  if (!rows.length) return [];
  const headers = rows[0].map((h) => String(h || "").trim());
  return rows.slice(1).filter((r) => r.some((v) => String(v || "").trim())).map((r) => {
    const o = {};
    headers.forEach((h, idx) => {
      o[h] = r[idx] ?? "";
    });
    return o;
  });
}

async function readTabularFile(file) {
  const ext = file.name.toLowerCase();
  if (ext.endsWith(".csv")) {
    return parseCsv(await file.text());
  }

  if (!window.XLSX) {
    throw new Error("XLSX library not loaded. Please use CSV files.");
  }

  const buffer = await file.arrayBuffer();
  const wb = XLSX.read(buffer, { type: "array", cellDates: true });

  const aliasTokens = [
    "LOKACE",
    "LOCATION",
    "ZBOZI",
    "SKU",
    "MNOZSTVI",
    "JEDNOTKA",
    "SARZE",
    "EXPIRACE",
    "INTERNALREFERENCE",
    "INCOMINGID",
    "PALLETTYPE",
    "INTERNALREFERENCE",
    "WEIGHT",
    "NETWEIGHT",
    "CASELENGTH",
    "CASEWIDTH",
    "CASEHEIGHT",
    "DISPLAYLENGTH",
    "DISPLAYWIDTH",
    "DISPLAYHEIGHT",
    "UNITLENGTH",
    "UNITWIDTH",
    "UNITHEIGHT",
    "STDCASESXLAYER",
    "EURCASESXLAYER",
    "STDCASESXPALLET",
    "EURCASESXPALLET",
  ];

  let chosenMatrix = null;
  let chosenHeaderRowIndex = 0;
  let bestSheetScore = -1;
  let bestHeaderWidth = -1;

  for (const sheetName of wb.SheetNames) {
    const sheet = wb.Sheets[sheetName];
    const matrix = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    if (!Array.isArray(matrix) || matrix.length === 0) continue;

    let headerRowIndex = 0;
    let bestScore = -1;
    let bestWidth = -1;
    const maxScan = Math.min(30, matrix.length);
    for (let i = 0; i < maxScan; i += 1) {
      const row = matrix[i] || [];
      const norm = row.map((c) => normalizeHeaderName(c)).filter(Boolean);
      if (!norm.length) continue;
      const score = aliasTokens.filter((t) => norm.some((v) => v.includes(t))).length;
      if (score > bestScore || (score === bestScore && norm.length > bestWidth)) {
        bestScore = score;
        headerRowIndex = i;
        bestWidth = norm.length;
      }
    }

    if (bestScore > bestSheetScore || (bestScore === bestSheetScore && bestWidth > bestHeaderWidth)) {
      bestSheetScore = bestScore;
      bestHeaderWidth = bestWidth;
      chosenMatrix = matrix;
      chosenHeaderRowIndex = headerRowIndex;
    }
  }

  if (!chosenMatrix) return [];

  const headers = (chosenMatrix[chosenHeaderRowIndex] || []).map((h) => String(h || "").trim());
  const rows = [];
  for (let i = chosenHeaderRowIndex + 1; i < chosenMatrix.length; i += 1) {
    const r = chosenMatrix[i] || [];
    if (!r.some((v) => String(v || "").trim())) continue;
    const obj = {};
    headers.forEach((h, idx) => {
      if (!h) return;
      obj[h] = r[idx] ?? "";
    });
    rows.push(obj);
  }
  return rows;
}

function parseProductMasterRows(rawRows) {
  if (!rawRows.length) return { bySku: new Map() };
  const keys = Object.keys(rawRows[0] || {});

  const skuKey = findHeaderKeyExactFirst(keys, ["INTERNAL REFERENCE", "DEFAULT CODE", "SKU", "INTERNALREFERENCE"]);
  const weightPerBoxKey = findHeaderKeyExactFirst(keys, ["WEIGHT OF 1 BOX", "BOX WEIGHT", "WEIGHT"]);
  const netWeightKey = findHeaderKeyExactFirst(keys, ["NET WEIGHT", "NETWEIGHT", "UNIT WEIGHT"]);
  const displayWeightKey = findHeaderKeyExactFirst(keys, ["DISPLAY WEIGHT", "WEIGHT DISPLAY"]);

  const caseLengthKey = findHeaderKeyExactFirst(keys, ["CASE LENGTH", "CASELENGTH"]);
  const caseWidthKey = findHeaderKeyExactFirst(keys, ["CASE WIDTH", "CASEWIDTH"]);
  const caseHeightKey = findHeaderKeyExactFirst(keys, ["CASE HEIGHT", "CASEHEIGHT"]);

  const displayLengthKey = findHeaderKeyExactFirst(keys, ["DISPLAY LENGTH", "DISPLAYLENGTH"]);
  const displayWidthKey = findHeaderKeyExactFirst(keys, ["DISPLAY WIDTH", "DISPLAYWIDTH"]);
  const displayHeightKey = findHeaderKeyExactFirst(keys, ["DISPLAY HEIGHT", "DISPLAYHEIGHT"]);

  const unitLengthKey = findHeaderKeyExactFirst(keys, ["UNIT LENGTH", "UNITLENGTH"]);
  const unitWidthKey = findHeaderKeyExactFirst(keys, ["UNIT WIDTH", "UNITWIDTH"]);
  const unitHeightKey = findHeaderKeyExactFirst(keys, ["UNIT HEIGHT", "UNITHEIGHT"]);

  const stdLayerKey = findHeaderKeyExactFirst(keys, ["STD CASES X LAYER", "STD CASES/LAYER", "STD CASES PER LAYER"]);
  const stdPalletKey = findHeaderKeyExactFirst(keys, ["STD CASES X PALLET", "STD CASES/PALLET", "STD CASES PER PALLET"]);
  const eurLayerKey = findHeaderKeyExactFirst(keys, ["EUR CASES X LAYER", "EUR CASES/LAYER", "EUR CASES PER LAYER"]);
  const eurPalletKey = findHeaderKeyExactFirst(keys, ["EUR CASES X PALLET", "EUR CASES/PALLET", "EUR CASES PER PALLET"]);

  const bySku = new Map();
  for (const row of rawRows) {
    const sku = normalizeSkuCode(row[skuKey]);
    if (!sku) continue;
    bySku.set(sku.toUpperCase(), {
      weightPerBox: toNum(row[weightPerBoxKey]),
      netWeight: toNum(row[netWeightKey]),
      displayWeight: toNum(row[displayWeightKey]),
      caseLength: toNum(row[caseLengthKey]),
      caseWidth: toNum(row[caseWidthKey]),
      caseHeight: toNum(row[caseHeightKey]),
      displayLength: toNum(row[displayLengthKey]),
      displayWidth: toNum(row[displayWidthKey]),
      displayHeight: toNum(row[displayHeightKey]),
      unitLength: toNum(row[unitLengthKey]),
      unitWidth: toNum(row[unitWidthKey]),
      unitHeight: toNum(row[unitHeightKey]),
      stdCasesPerLayer: toNum(row[stdLayerKey]),
      stdCasesPerPallet: toNum(row[stdPalletKey]),
      eurCasesPerLayer: toNum(row[eurLayerKey]),
      eurCasesPerPallet: toNum(row[eurPalletKey]),
    });
  }
  return { bySku };
}

function normalizeQtyUnit(value) {
  const u = String(value || "").trim().toUpperCase();
  if (u.includes("DISP")) return "DISPLAY";
  if (u.includes("UNIT") || u.includes("PCS") || u.includes("KUS") || u === "MJ" || u.includes("KS")) return "UNIT";
  return "CASE";
}

function safeDim(v) {
  const n = toNum(v);
  return Number.isFinite(n) && n > 1 ? n : NaN;
}

function extractPackSizeFromText(...texts) {
  for (const txt of texts) {
    const s = String(txt || "").trim().toUpperCase();
    if (!s) continue;
    // examples: CS/24, CASE/12, CSX24
    let m = s.match(/(?:CS|CASE|CTN|KARTON)\s*[/X]\s*(\d+(?:[.,]\d+)?)/i);
    if (!m) m = s.match(/\/\s*(\d+(?:[.,]\d+)?)/);
    if (!m) continue;
    const n = toNum(m[1]);
    if (Number.isFinite(n) && n > 0) return n;
  }
  return NaN;
}

function getWeightPerInventoryUnit(product, quantityUnit, ...unitTexts) {
  if (!product) return NaN;
  // In uploaded product file, `Weight` is treated as weight for 1 quantity.
  const perQtyWeight = toNum(product.weightPerBox);
  const netWeight = toNum(product.netWeight);
  const displayWeight = toNum(product.displayWeight);
  const pack = extractPackSizeFromText(...unitTexts);

  if (Number.isFinite(perQtyWeight)) return perQtyWeight;

  if (quantityUnit === "CASE") {
    if (Number.isFinite(netWeight)) return netWeight;
    return NaN;
  }

  // UNIT / DISPLAY: use explicit per-unit/display weight first.
  if (quantityUnit === "DISPLAY" && Number.isFinite(displayWeight)) return displayWeight;
  if (Number.isFinite(netWeight)) return netWeight;
  if (Number.isFinite(perQtyWeight) && Number.isFinite(pack) && pack > 0) {
    return perQtyWeight / pack;
  }
  if (quantityUnit === "DISPLAY" && Number.isFinite(perQtyWeight) && Number.isFinite(pack) && pack > 0) {
    return perQtyWeight / pack;
  }
  if (Number.isFinite(perQtyWeight)) return perQtyWeight;
  return NaN;
}

function perLayerByDimensions(palletL, palletW, itemL, itemW) {
  if (![palletL, palletW, itemL, itemW].every((v) => Number.isFinite(v) && v > 0)) return NaN;
  const a = Math.floor(palletL / itemL) * Math.floor(palletW / itemW);
  const b = Math.floor(palletL / itemW) * Math.floor(palletW / itemL);
  const best = Math.max(a, b);
  return best > 0 ? best : NaN;
}

function deriveMetricsFromProduct(skuRaw, qtyRaw, quantityUnitRaw, palletTypeRaw, productBySku) {
  const sku = normalizeSkuCode(skuRaw || "").toUpperCase();
  const qty = toNum(qtyRaw);
  const quantityUnit = normalizeQtyUnit(quantityUnitRaw || "CASE");
  const palletType = normalizeType(palletTypeRaw || "EURO");
  if (!sku || !Number.isFinite(qty)) return { weight: NaN, height: NaN, singleWeight: NaN };
  const product = productBySku?.get(sku);
  if (!product) return { weight: NaN, height: NaN, singleWeight: NaN };

  const weightPerUnit = getWeightPerInventoryUnit(product, quantityUnit, quantityUnitRaw || "");
  const calcWeight = Number.isFinite(weightPerUnit) ? weightPerUnit * qty : NaN;

  const itemLength =
    quantityUnit === "CASE"
      ? safeDim(product.caseLength)
      : quantityUnit === "UNIT"
        ? safeDim(product.unitLength) || safeDim(product.displayLength) || safeDim(product.caseLength)
        : safeDim(product.displayLength) || safeDim(product.unitLength) || safeDim(product.caseLength);
  const itemWidth =
    quantityUnit === "CASE"
      ? safeDim(product.caseWidth)
      : quantityUnit === "UNIT"
        ? safeDim(product.unitWidth) || safeDim(product.displayWidth) || safeDim(product.caseWidth)
        : safeDim(product.displayWidth) || safeDim(product.unitWidth) || safeDim(product.caseWidth);
  const itemHeight =
    quantityUnit === "CASE"
      ? safeDim(product.caseHeight)
      : quantityUnit === "UNIT"
        ? safeDim(product.unitHeight) || safeDim(product.displayHeight) || safeDim(product.caseHeight)
        : safeDim(product.displayHeight) || safeDim(product.unitHeight) || safeDim(product.caseHeight);

  const primaryPerLayerRaw = palletType === "STANDARD" ? toNum(product.stdCasesPerLayer) : toNum(product.eurCasesPerLayer);
  const secondaryPerLayerRaw = palletType === "STANDARD" ? toNum(product.eurCasesPerLayer) : toNum(product.stdCasesPerLayer);
  let perLayer = Number.isFinite(primaryPerLayerRaw) && primaryPerLayerRaw > 0 ? primaryPerLayerRaw : NaN;
  if (!Number.isFinite(perLayer) && Number.isFinite(secondaryPerLayerRaw) && secondaryPerLayerRaw > 0) {
    perLayer = secondaryPerLayerRaw;
  }
  if (!Number.isFinite(perLayer)) {
    perLayer = perLayerByDimensions(palletType === "STANDARD" ? 100 : 80, 120, itemLength, itemWidth);
  }
  let calcHeight = NaN;
  if (Number.isFinite(itemHeight)) {
    if (Number.isFinite(perLayer) && perLayer > 0) calcHeight = Math.ceil(qty / perLayer) * itemHeight + 15;
    else calcHeight = itemHeight + 15;
  }
  return { weight: calcWeight, height: calcHeight, singleWeight: weightPerUnit };
}

function parseInventoryRowsSmart(rawRows, productBySku) {
  if (!rawRows.length) return { rows: [], missingSkus: [], headerInfo: {} };
  const keys = Object.keys(rawRows[0] || {});

  const locKey = findHeaderKey(keys, ["LOKACE", "PALLET LOCATION", "LOCATION"]);
  const skuKey = findHeaderKey(keys, ["ZBOZI", "ZBOŽÍ", "SKU", "ITEM"]);
  const palletCodeKey = findHeaderKey(keys, ["PALLET CODE", "SSCC PALETY", "SSCC", "PALET"]);
  const qtyKey = findHeaderKey(keys, ["MNOZSTVI", "MNOŽSTVÍ", "QTY", "QUANTITY", "CASE QUANTITY", "CASES"]);
  const unitKey = findHeaderKey(keys, ["JEDNOTKA", "MJ", "UNIT", "UNIT TYPE", "UOM"]);
  const batchKey = findHeaderKey(keys, ["SARZE", "ŠARŽE", "BATCH", "LOT"]);
  const bbdKey = findHeaderKeyExactFirst(keys, ["EXPIRACE", "BBD", "EXPIRY"]);
  const palletTypeKey = findHeaderKey(keys, ["PALLET_TYPE", "PALLET TYPE"]);
  const heightKey = findHeaderKey(keys, ["HEIGHT", "PALLET HEIGHT"]);
  const weightKey = findHeaderKey(keys, ["WEIGHT", "PALLET WEIGHT"]);

  const missingSkus = new Set();
  const rows = [];
  const missingHeaders = [];
  if (!locKey) missingHeaders.push("LOKACE / Pallet Location");
  if (!skuKey) missingHeaders.push("ZBOŽÍ / SKU");
  if (missingHeaders.length) {
    return { rows: [], missingSkus: [], missingHeaders, headerInfo: {} };
  }

  for (let i = 0; i < rawRows.length; i += 1) {
    const row = rawRows[i];
    const loc = normalizeLocationCode(row[locKey] || "");
    const sku = normalizeSkuCode(row[skuKey]);
    if (!loc || !sku) continue;
    const skuKeyNorm = sku.toUpperCase();
    const totalQtyRaw = qtyKey ? toNum(row[qtyKey]) : NaN;
    const totalQty = Number.isFinite(totalQtyRaw) ? totalQtyRaw : 1;
    const quantityUnit = normalizeQtyUnit(unitKey ? row[unitKey] : "CASE");
    const product = productBySku.get(skuKeyNorm);

    const directHeight = toNum(row[heightKey]);
    const directWeight = toNum(row[weightKey]);
    const palletTypeRaw = palletTypeKey ? String(row[palletTypeKey] || "").trim() : "";
    const batchVal = batchKey ? String(row[batchKey] || "").trim() : "";
    const hasExplicitType = Boolean(palletTypeRaw);
    const hasBatchType = /(\+S|\+E)/i.test(batchVal);
    let palletType = hasExplicitType ? normalizeType(palletTypeRaw) : inferPalletTypeFromBatch(batchVal);

    const initialPalletLength = palletType === "STANDARD" ? 100 : 80;
    const palletWidth = 120;
    const palletBaseHeight = 15;

    const unitTextPrimary = unitKey ? row[unitKey] : "";
    const unitTextAlt1 = row["ZÁKL. MJ"] || row["ZAKL MJ"] || row["ZAKLMJ"] || "";
    const unitTextAlt2 = row["1. ALT. MJ"] || row["1 ALT MJ"] || row["1ALTMJ"] || "";
    const unitTextAlt3 = row["2. ALT. MJ"] || row["2 ALT MJ"] || row["2ALTMJ"] || "";
    const weightPerInventoryUnit = getWeightPerInventoryUnit(
      product,
      quantityUnit,
      unitTextPrimary,
      unitTextAlt1,
      unitTextAlt2,
      unitTextAlt3
    );

    let calcWeight = directWeight;
    let calcHeight = directHeight;
    if ((Number.isNaN(calcWeight) || Number.isNaN(calcHeight)) && product) {
      const qty = Number.isFinite(totalQty) ? totalQty : NaN;
      const itemLength =
        quantityUnit === "CASE"
          ? safeDim(product.caseLength)
          : quantityUnit === "UNIT"
            ? safeDim(product.unitLength) || safeDim(product.displayLength) || safeDim(product.caseLength)
            : safeDim(product.displayLength) || safeDim(product.unitLength) || safeDim(product.caseLength);
      const itemWidth =
        quantityUnit === "CASE"
          ? safeDim(product.caseWidth)
          : quantityUnit === "UNIT"
            ? safeDim(product.unitWidth) || safeDim(product.displayWidth) || safeDim(product.caseWidth)
            : safeDim(product.displayWidth) || safeDim(product.unitWidth) || safeDim(product.caseWidth);
      const itemHeight =
        quantityUnit === "CASE"
          ? safeDim(product.caseHeight)
          : quantityUnit === "UNIT"
            ? safeDim(product.unitHeight) || safeDim(product.displayHeight) || safeDim(product.caseHeight)
            : safeDim(product.displayHeight) || safeDim(product.unitHeight) || safeDim(product.caseHeight);
      const casesPerLayer =
        palletType === "STANDARD" ? product.stdCasesPerLayer : product.eurCasesPerLayer;

      if (Number.isNaN(calcWeight) && Number.isFinite(weightPerInventoryUnit) && Number.isFinite(qty)) {
        // Weight column is 1-qty weight: pallet weight = unit/case weight * total quantity on pallet.
        calcWeight = weightPerInventoryUnit * qty;
      }

      if (Number.isNaN(calcHeight) && Number.isFinite(itemHeight) && Number.isFinite(qty)) {
        let perLayer = Number.isFinite(casesPerLayer) && casesPerLayer > 0 ? casesPerLayer : NaN;
        if (!Number.isFinite(perLayer)) {
          perLayer = perLayerByDimensions(initialPalletLength, palletWidth, itemLength, itemWidth);
        }
        if (Number.isFinite(perLayer) && perLayer > 0) {
          calcHeight = Math.ceil(qty / perLayer) * itemHeight + palletBaseHeight;
        } else if (Number.isFinite(itemHeight)) {
          calcHeight = itemHeight + palletBaseHeight;
        }
      }

    }

    // If pallet type is missing in file and batch has no +S/+E marker, infer from weight.
    if (!hasExplicitType && !hasBatchType && Number.isFinite(calcWeight)) {
      const inferredType = calcWeight > 800 ? "STANDARD" : "EURO";
        if (inferredType !== palletType) {
        palletType = inferredType;
        if (Number.isNaN(directHeight) && product && Number.isFinite(totalQty)) {
          const itemLength =
            quantityUnit === "CASE"
              ? safeDim(product.caseLength)
              : quantityUnit === "UNIT"
                ? safeDim(product.unitLength) || safeDim(product.displayLength) || safeDim(product.caseLength)
                : safeDim(product.displayLength) || safeDim(product.unitLength) || safeDim(product.caseLength);
          const itemWidth =
            quantityUnit === "CASE"
              ? safeDim(product.caseWidth)
              : quantityUnit === "UNIT"
                ? safeDim(product.unitWidth) || safeDim(product.displayWidth) || safeDim(product.caseWidth)
                : safeDim(product.displayWidth) || safeDim(product.unitWidth) || safeDim(product.caseWidth);
          const itemHeight =
            quantityUnit === "CASE"
              ? safeDim(product.caseHeight)
              : quantityUnit === "UNIT"
                ? safeDim(product.unitHeight) || safeDim(product.displayHeight) || safeDim(product.caseHeight)
                : safeDim(product.displayHeight) || safeDim(product.unitHeight) || safeDim(product.caseHeight);
          let perLayer =
            palletType === "STANDARD" ? product.stdCasesPerLayer : product.eurCasesPerLayer;
          if (!Number.isFinite(perLayer) || perLayer <= 0) {
            perLayer = perLayerByDimensions(palletType === "STANDARD" ? 100 : 80, palletWidth, itemLength, itemWidth);
          }
          if (Number.isFinite(itemHeight) && Number.isFinite(perLayer) && perLayer > 0) {
            calcHeight = Math.ceil(totalQty / perLayer) * itemHeight + palletBaseHeight;
          }
        }
      }
    }

    rows.push({
      LOKACE: loc,
      SKU: sku,
      BBD: bbdKey ? normalizeBbdValue(row[bbdKey]) : "",
      PALLET_TYPE: palletType,
      height: Number.isNaN(calcHeight) ? "" : calcHeight,
      weight: Number.isNaN(calcWeight) ? "" : calcWeight,
      "SSCC PALETY": String(row[palletCodeKey] || "").trim(),
      TOTAL_QTY: Number.isFinite(totalQty) ? totalQty : "",
      QTY_UNIT: quantityUnit,
      SARZE: batchVal,
      SINGLE_BOX_WEIGHT: Number.isFinite(weightPerInventoryUnit) ? weightPerInventoryUnit : "",
      _product_found: Boolean(product),
    });
  }

  // Pass 2: fill missing height/weight using available values from same SKU.
  const skuDerived = new Map();
  for (const r of rows) {
    const sku = normalizeSkuCode(r.SKU || "").toUpperCase();
    if (!sku) continue;
    const w = toNum(r.weight);
    const h = toNum(r.height);
    if (!skuDerived.has(sku)) skuDerived.set(sku, { weight: NaN, height: NaN });
    const rec = skuDerived.get(sku);
    if (!Number.isFinite(rec.weight) && Number.isFinite(w)) rec.weight = w;
    if (!Number.isFinite(rec.height) && Number.isFinite(h)) rec.height = h;
  }

  for (const r of rows) {
    const sku = normalizeSkuCode(r.SKU || "").toUpperCase();
    if (!sku || !skuDerived.has(sku)) continue;
    const rec = skuDerived.get(sku);
    if (!Number.isFinite(toNum(r.weight)) && Number.isFinite(rec.weight)) r.weight = rec.weight;
    if (!Number.isFinite(toNum(r.height)) && Number.isFinite(rec.height)) r.height = rec.height;
  }

  for (const r of rows) {
    if (!Number.isFinite(toNum(r.weight)) || !Number.isFinite(toNum(r.height))) {
      missingSkus.add(String(r.SKU || "").trim());
    }
  }

  return {
    rows,
    missingSkus: [...missingSkus].sort(),
    missingHeaders,
    headerInfo: { locKey, skuKey, palletCodeKey, qtyKey, unitKey, batchKey, bbdKey, palletTypeKey, heightKey, weightKey },
  };
}

function consolidateInventoryByLocation(rows) {
  const byLocation = new Map();
  for (const row of rows || []) {
    const loc = normalizeLocationCode(row.LOKACE || row.location || "");
    if (!loc) continue;
    if (!byLocation.has(loc)) byLocation.set(loc, []);
    byLocation.get(loc).push(row);
  }

  const consolidated = [];
  for (const [loc, locRows] of byLocation.entries()) {
    const items = locRows.map((r) => ({
      sku: normalizeSkuCode(r.SKU || ""),
      qty: r.TOTAL_QTY,
      unit: String(r.QTY_UNIT || "").trim(),
      bbd: String(r.BBD || "").trim(),
      weight: toNum(r.weight),
      height: toNum(r.height),
      single_box_weight: Number.isFinite(toNum(r.SINGLE_BOX_WEIGHT)) ? toNum(r.SINGLE_BOX_WEIGHT) : "",
      pallet_id: String(r["SSCC PALETY"] || "").trim(),
      pallet_type: normalizeType(r.PALLET_TYPE),
    }));

    for (const item of items) {
      const missingWeight = !Number.isFinite(item.weight);
      const missingHeight = !Number.isFinite(item.height);
      const missingSingle = !Number.isFinite(toNum(item.single_box_weight));
      if (!missingWeight && !missingHeight && !missingSingle) continue;
      const d = deriveMetricsFromProduct(item.sku, item.qty, item.unit, item.pallet_type, latestProductBySku);
      if (missingWeight && Number.isFinite(d.weight)) item.weight = d.weight;
      if (missingHeight && Number.isFinite(d.height)) item.height = d.height;
      if (missingSingle && Number.isFinite(d.singleWeight)) item.single_box_weight = d.singleWeight;
    }

    const skuList = [...new Set(items.map((x) => x.sku).filter(Boolean))];
    const bbdList = [...new Set(items.map((x) => x.bbd).filter(Boolean))].sort();
    const ssccList = [...new Set(items.map((x) => x.pallet_id).filter(Boolean))];
    const qtyUnitList = [...new Set(items.map((x) => x.unit).filter(Boolean))];
    const palletTypeList = [...new Set(items.map((x) => x.pallet_type).filter(Boolean))];

    const totalWeight = items.reduce((s, x) => s + (Number.isFinite(x.weight) ? x.weight : 0), 0);
    const maxHeightRaw = items.reduce((m, x) => (Number.isFinite(x.height) ? Math.max(m, x.height) : m), -Infinity);
    const maxHeight = Number.isFinite(maxHeightRaw) ? maxHeightRaw : NaN;
    const totalQty = items.reduce((s, x) => s + (Number.isFinite(toNum(x.qty)) ? toNum(x.qty) : 0), 0);
    const palletType = palletTypeList.length === 1 ? palletTypeList[0] : normalizeType(palletTypeList[0] || "EURO");

    consolidated.push({
      LOKACE: loc,
      SKU: skuList.join(" | "),
      BBD: bbdList[0] || "",
      PALLET_TYPE: palletType,
      height: Number.isFinite(maxHeight) ? maxHeight : "",
      weight: Number.isFinite(totalWeight) && totalWeight > 0 ? totalWeight : "",
      "SSCC PALETY": ssccList.join(" | "),
      TOTAL_QTY: Number.isFinite(totalQty) && totalQty > 0 ? totalQty : "",
      QTY_UNIT: qtyUnitList.length === 1 ? qtyUnitList[0] : "MIXED",
      ITEMS: items,
    });
  }
  return consolidated;
}

function renderManualLines() {
  ui.manualLinesBody.innerHTML = "";
  manualLines.forEach((line, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${line.sku}</td><td>${line.pallet_type}</td><td>${line.height}</td><td>${line.weight}</td><td>${line.bbd}</td><td>${line.total_pallets}</td><td><button type="button" class="secondary" data-remove-manual="${index}">Remove</button></td>`;
    ui.manualLinesBody.appendChild(tr);
  });
}

function addManualLine() {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_upload_data")) {
    alert("You do not have permission to upload or edit incoming data.");
    logActivity("ACCESS_DENIED", "manual line add blocked");
    return;
  }
  const sku = String(ui.manualSku.value || "").trim();
  const palletType = normalizeType(ui.manualPalletType.value);
  const heightRaw = String(ui.manualHeight.value || "").trim();
  const weightRaw = String(ui.manualWeight.value || "").trim();
  const bbdRaw = String(ui.manualBbd.value || "").trim();
  const total = Math.max(1, Number(ui.manualTotalPallets.value) || 0);

  if (!sku) {
    alert("Enter SKU for manual input line.");
    return;
  }

  manualLines.push({
    sku,
    pallet_type: palletType,
    height: heightRaw,
    weight: weightRaw,
    bbd: bbdRaw,
    total_pallets: total,
  });
  renderManualLines();
}

function createManualIncomingRows() {
  const rows = [];
  let index = 1;
  for (const line of manualLines) {
    for (let i = 0; i < line.total_pallets; i += 1) {
      const prefix = line.pallet_type === "STANDARD" ? "MAN-STD" : "MAN-EUR";
      rows.push({
        incoming_id: `${prefix}-${String(index).padStart(4, "0")}`,
        sku: line.sku,
        bbd: line.bbd || "",
        height: line.height,
        weight: line.weight,
        pallet_type: line.pallet_type,
      });
      index += 1;
    }
  }
  return rows;
}

function clearBbdOptSelections() {
  bbdOptSelectionsByLocation = new Map();
  bbdOptResultRows = [];
  if (ui.bbdOptDownloadBtn) ui.bbdOptDownloadBtn.disabled = true;
}

function locationTypeLabel(node) {
  return node?.isPicking ? "Picking" : "Storage";
}

function inventoryQtyForSku(node, sku) {
  const targetSku = normalizeSkuCode(sku || "").toUpperCase();
  if (!node?.pallet || !targetSku) return 0;
  const pallet = node.pallet;
  if (Array.isArray(pallet.items) && pallet.items.length) {
    let sum = 0;
    for (const item of pallet.items) {
      if (normalizeSkuCode(item.sku || "").toUpperCase() !== targetSku) continue;
      const q = toNum(item.qty);
      if (Number.isFinite(q) && q > 0) sum += q;
    }
    return sum;
  }
  if (normalizeSkuCode(pallet.sku || "").toUpperCase() !== targetSku) return 0;
  const q = toNum(pallet.total_quantity);
  return Number.isFinite(q) && q > 0 ? q : 0;
}

function parseBbdRuleRows(rawRows) {
  if (!Array.isArray(rawRows) || !rawRows.length) return [];
  const keys = Object.keys(rawRows[0] || {});
  const skuKey =
    findHeaderKeyExactFirst(keys, [
      "SKU",
      "ZBOZI",
      "ZBOŽÍ",
      "INTERNAL REFERENCE",
      "INTERNALREFERENCE",
      "ITEM",
      "PRODUCT",
    ]) || findHeaderKey(keys, ["SKU", "ZBOZI", "ZBOŽÍ", "INTERNAL REFERENCE", "INTERNALREFERENCE", "ITEM", "PRODUCT"]);
  const daysKey =
    findHeaderKeyExactFirst(keys, [
      "MINIMUM DAYS REQUIRED",
      "MIN DAYS REQUIRED",
      "MINDAYSREQUIRED",
      "MIN DAYS",
      "MINIMUM DAYS",
      "DAYS REQUIRED",
      "MINIMUM BBD DAYS",
      "BBD MIN DAYS",
      "BBD DAYS",
      "DNY",
    ]) ||
    findHeaderKey(keys, [
      "MINIMUM DAYS REQUIRED",
      "MIN DAYS REQUIRED",
      "MINDAYSREQUIRED",
      "MIN DAYS",
      "MINIMUM DAYS",
      "DAYS REQUIRED",
      "MINIMUM BBD DAYS",
      "BBD MIN DAYS",
      "BBD DAYS",
      "DNY",
    ]);
  if (!skuKey || !daysKey) return [];
  const out = [];
  for (const row of rawRows) {
    const sku = normalizeSkuCode(row[skuKey]);
    const minDays = toNum(row[daysKey]);
    if (!sku || !Number.isFinite(minDays)) continue;
    out.push({ sku, min_days_required: Math.max(0, Math.floor(minDays)) });
  }
  return out;
}

function parseDeliveryOrderRows(rawRows) {
  if (!Array.isArray(rawRows) || !rawRows.length) return [];
  const keys = Object.keys(rawRows[0] || {});
  const orderKey =
    findHeaderKeyExactFirst(keys, [
      "Operations without package/Source",
      "ORDER NUMBER",
      "DELIVERY ORDER",
      "SOURCE",
      "ORIGIN",
      "TRANSFER",
      "PICKING",
    ]) ||
    findHeaderKey(keys, ["ORDER NUMBER", "DELIVERY ORDER", "SOURCE", "ORIGIN", "TRANSFER", "PICKING"]);
  const skuKey =
    findHeaderKeyExactFirst(keys, [
      "Operations without package/Product/Internal Reference",
      "SKU",
      "ZBOZI",
      "ZBOŽÍ",
      "INTERNAL REFERENCE",
      "PRODUCT INTERNAL REFERENCE",
    ]) ||
    findHeaderKey(keys, ["SKU", "ZBOZI", "ZBOŽÍ", "INTERNAL REFERENCE", "PRODUCT INTERNAL REFERENCE"]);
  const qtyKey =
    findHeaderKeyExactFirst(keys, [
      "Operations without package/Reserved Quantity",
      "RESERVED QUANTITY",
      "QUANTITY",
      "QTY",
      "MNOZSTVI",
      "MNOŽSTVÍ",
      "DEMAND",
      "NEEDED",
    ]) ||
    findHeaderKey(keys, ["RESERVED QUANTITY", "QUANTITY", "QTY", "MNOZSTVI", "MNOŽSTVÍ", "DEMAND", "NEEDED"]);
  const uomKey =
    findHeaderKeyExactFirst(keys, [
      "Operations without package/Unit of Measure",
      "UNIT OF MEASURE",
      "JEDNOTKA",
      "UNIT",
      "UOM",
      "MJ",
    ]) || findHeaderKey(keys, ["UNIT OF MEASURE", "JEDNOTKA", "UNIT", "UOM", "MJ"]);
  const daysKey = findHeaderKey(keys, [
    "MINIMUM DAYS REQUIRED",
    "MIN DAYS REQUIRED",
    "MIN DAYS",
    "DAYS REQUIRED",
    "MINIMUM BBD DAYS",
    "BBD MIN DAYS",
  ]);
  if (!skuKey || !qtyKey) return [];

  const out = [];
  let fallbackIdx = 1;
  for (const row of rawRows) {
    const sku = normalizeSkuCode(row[skuKey]);
    const qty = toNum(row[qtyKey]);
    if (!sku || !Number.isFinite(qty) || qty <= 0) continue;
    const minDays = toNum(daysKey ? row[daysKey] : "");
    const orderNumberRaw = orderKey ? String(row[orderKey] || "").trim() : "";
    out.push({
      order_number: orderNumberRaw || `ORDER-${String(fallbackIdx).padStart(4, "0")}`,
      sku,
      required_uom: normalizeQtyUnit(uomKey ? row[uomKey] : "CASE"),
      min_days_required: Number.isFinite(minDays) ? Math.max(0, Math.floor(minDays)) : NaN,
      quantity: qty,
    });
    fallbackIdx += 1;
  }
  return out;
}

function buildBbdOptInputRows() {
  const rows = bbdOptManualLines.map((x) => ({ ...x }));
  const sku = normalizeSkuCode(ui.bbdOptSku?.value || "");
  const qty = toNum(ui.bbdOptQty?.value || "");
  if (sku && Number.isFinite(qty) && qty > 0) {
    const minDaysRaw = toNum(ui.bbdOptMinDays?.value || "");
    rows.push({
      order_number: String(ui.bbdOptOrderNumber?.value || "").trim() || `MAN-${String(rows.length + 1).padStart(4, "0")}`,
      sku,
      min_days_required: Number.isFinite(minDaysRaw) ? Math.max(0, Math.floor(minDaysRaw)) : 0,
      quantity: qty,
    });
  }
  return rows;
}

function renderBbdOptManualLines() {
  if (!ui.bbdOptManualBody) return;
  ui.bbdOptManualBody.innerHTML = "";
  for (let i = 0; i < bbdOptManualLines.length; i += 1) {
    const line = bbdOptManualLines[i];
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(line.order_number)}</td><td>${safeText(line.sku)}</td><td>${safeText(
      line.min_days_required
    )}</td><td>${safeText(line.quantity)}</td><td><button type="button" class="secondary" data-remove-bbd-opt-manual="${i}">Remove</button></td>`;
    ui.bbdOptManualBody.appendChild(tr);
  }
}

function addBbdOptManualLine() {
  const sku = normalizeSkuCode(ui.bbdOptSku?.value || "");
  const qty = toNum(ui.bbdOptQty?.value || "");
  const minDaysRaw = toNum(ui.bbdOptMinDays?.value || "");
  const orderNumber = String(ui.bbdOptOrderNumber?.value || "").trim() || `MAN-${String(bbdOptManualLines.length + 1).padStart(4, "0")}`;
  if (!sku || !Number.isFinite(qty) || qty <= 0) {
    alert("Enter Order Number/SKU/Quantity to add manual order line.");
    return;
  }
  bbdOptManualLines.push({
    order_number: orderNumber,
    sku,
    min_days_required: Number.isFinite(minDaysRaw) ? Math.max(0, Math.floor(minDaysRaw)) : 0,
    quantity: qty,
  });
  renderBbdOptManualLines();
}

function formatBbdOptDateThreshold(minDays) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  start.setDate(start.getDate() + minDays);
  return start;
}

function runBbdOptSearch({ orderRows, bbdRuleRows }) {
  clearBbdOptSelections();
  bbdOptRuleBySku = new Map();
  for (const r of bbdRuleRows) bbdOptRuleBySku.set(normalizeSkuCode(r.sku).toUpperCase(), Math.max(0, Number(r.min_days_required) || 0));

  const rows = [];
  const reservedLocations = new Set();
  const orderedRows = [...orderRows].sort((a, b) => {
    const sa = normalizeSkuCode(a.sku || "");
    const sb = normalizeSkuCode(b.sku || "");
    if (sa !== sb) return sa.localeCompare(sb);
    const oa = String(a.order_number || "");
    const ob = String(b.order_number || "");
    return oa.localeCompare(ob);
  });

  for (const src of orderedRows) {
    const sku = normalizeSkuCode(src.sku || "");
    if (!sku) continue;
    const requiredQty = toNum(src.quantity);
    if (!Number.isFinite(requiredQty) || requiredQty <= 0) continue;
    const ruleMin = bbdOptRuleBySku.get(sku.toUpperCase());
    const rowMinDays = Number.isFinite(toNum(src.min_days_required)) ? Math.max(0, Math.floor(toNum(src.min_days_required))) : 0;
    const minDays = Number.isFinite(ruleMin) ? Math.max(ruleMin, rowMinDays) : rowMinDays;
    const minDate = formatBbdOptDateThreshold(minDays);
    const requiredUom = normalizeQtyUnit(src.required_uom || "CASE");

    const allEligible = [];
    for (const node of locationNodes) {
      if (node.status !== "OCCUPIED" || !node.pallet) continue;
      const availQty = inventoryQtyForSku(node, sku);
      if (!(availQty > 0)) continue;
      const bbd = normalizeBbdValue(node.pallet.bbd || "");
      const bbdDate = parseBbdDate(bbd);
      if (!bbdDate) continue;
      if (bbdDate.getTime() < minDate.getTime()) continue;
      allEligible.push({
        node,
        bbd,
        bbdTime: bbdDate.getTime(),
        quantity_available: availQty,
        quantity_unit: normalizeQtyUnit(node.pallet?.quantity_unit || "CASE"),
        location_type: locationTypeLabel(node),
      });
    }

    const totalAvailableQtySku = allEligible.reduce((s, c) => s + c.quantity_available, 0);
    const candidates = allEligible.filter((c) => !reservedLocations.has(c.node.code));

    candidates.sort((a, b) => {
      const uA = a.quantity_unit === requiredUom ? 0 : 1;
      const uB = b.quantity_unit === requiredUom ? 0 : 1;
      if (uA !== uB) return uA - uB;
      if (a.bbdTime !== b.bbdTime) return a.bbdTime - b.bbdTime;
      if (a.location_type !== b.location_type) return a.location_type.localeCompare(b.location_type);
      return a.node.code.localeCompare(b.node.code);
    });

    let remaining = requiredQty;
    const chosen = [];
    const singlePalletMatch = candidates
      .filter((c) => c.quantity_available >= requiredQty)
      .sort((a, b) => {
        if (a.bbdTime !== b.bbdTime) return a.bbdTime - b.bbdTime;
        const sa = a.quantity_available - requiredQty;
        const sb = b.quantity_available - requiredQty;
        if (sa !== sb) return sa - sb;
        return a.node.code.localeCompare(b.node.code);
      })[0];

    if (singlePalletMatch) {
      chosen.push(singlePalletMatch);
      remaining = 0;
    } else {
      for (const c of candidates) {
        if (remaining <= 0) break;
        chosen.push(c);
        remaining -= c.quantity_available;
      }
    }

    let remainingForSelection = requiredQty;
    for (const c of chosen) {
      const key = c.node.code;
      const pickQty = singlePalletMatch ? requiredQty : Math.min(c.quantity_available, remainingForSelection);
      remainingForSelection -= pickQty;
      reservedLocations.add(key);
      if (!bbdOptSelectionsByLocation.has(key)) bbdOptSelectionsByLocation.set(key, []);
      bbdOptSelectionsByLocation.get(key).push({
        order_number: src.order_number,
        sku,
        required_uom: requiredUom,
        min_days_required: minDays,
        required_quantity: requiredQty,
        picked_quantity: pickQty,
        bbd: c.bbd,
        quantity_available: c.quantity_available,
        quantity_unit: c.quantity_unit,
        total_available_qty_sku: totalAvailableQtySku,
      });
    }

    if (!chosen.length) {
      rows.push({
        order_number: src.order_number,
        sku,
        required_uom: requiredUom,
        min_days_required: minDays,
        required_quantity: requiredQty,
        pallet_location: "",
        location_type: "",
        pallet_bbd: "",
        picked_quantity: "",
        quantity_available: "",
        pallet_uom: "",
        status: "NO MATCH",
        total_available_qty_sku: totalAvailableQtySku,
      });
      continue;
    }

    let remainingForRows = requiredQty;
    for (const c of chosen) {
      const pickQty = singlePalletMatch ? requiredQty : Math.min(c.quantity_available, remainingForRows);
      remainingForRows -= pickQty;
      rows.push({
        order_number: src.order_number,
        sku,
        required_uom: requiredUom,
        min_days_required: minDays,
        required_quantity: requiredQty,
        pallet_location: c.node.code,
        location_type: c.location_type,
        pallet_bbd: c.bbd,
        picked_quantity: pickQty,
        quantity_available: c.quantity_available,
        pallet_uom: c.quantity_unit,
        status: remaining <= 0 ? "MATCHED" : "INSUFFICIENT STOCK",
        total_available_qty_sku: totalAvailableQtySku,
      });
    }
  }
  rows.sort((a, b) => {
    const sa = normalizeSkuCode(a.sku || "");
    const sb = normalizeSkuCode(b.sku || "");
    if (sa !== sb) return sa.localeCompare(sb);
    const oa = String(a.order_number || "");
    const ob = String(b.order_number || "");
    if (oa !== ob) return oa.localeCompare(ob);
    return String(a.pallet_location || "").localeCompare(String(b.pallet_location || ""));
  });
  bbdOptResultRows = rows;
  if (ui.bbdOptDownloadBtn) ui.bbdOptDownloadBtn.disabled = !rows.length;
  renderCanvas();
  return rows;
}

function fileKey(file) {
  return `${file.name}__${file.size}__${file.lastModified}`;
}

function renderIncomingFilesQueue() {
  ui.incomingFilesBody.innerHTML = "";
  for (const f of incomingFilesQueue) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(f.name)}</td><td>${(f.size / 1024).toFixed(1)}</td>`;
    ui.incomingFilesBody.appendChild(tr);
  }
}

function appendIncomingFiles(files) {
  const existing = new Set(incomingFilesQueue.map((f) => fileKey(f)));
  for (const file of files) {
    const key = fileKey(file);
    if (!existing.has(key)) {
      incomingFilesQueue.push(file);
      existing.add(key);
    }
  }
  renderIncomingFilesQueue();
}

function appendBbdOptDeliveryFiles(files) {
  const existing = new Set(bbdOptDeliveryFilesQueue.map((f) => fileKey(f)));
  for (const file of files) {
    const key = fileKey(file);
    if (!existing.has(key)) {
      bbdOptDeliveryFilesQueue.push(file);
      existing.add(key);
    }
  }
  renderBbdOptDeliveryFilesQueue();
  if (ui.bbdOptStatus) {
    ui.bbdOptStatus.textContent = `${bbdOptDeliveryFilesQueue.length} delivery order file(s) selected.`;
  }
}

function renderBbdOptDeliveryFilesQueue() {
  if (!ui.bbdOptDeliveryFilesBody) return;
  ui.bbdOptDeliveryFilesBody.innerHTML = "";
  if (!bbdOptDeliveryFilesQueue.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td colspan=\"2\">No delivery files selected.</td>";
    ui.bbdOptDeliveryFilesBody.appendChild(tr);
    if (ui.bbdOptDeliverySelectedText) ui.bbdOptDeliverySelectedText.textContent = "No delivery files selected.";
    return;
  }
  if (ui.bbdOptDeliverySelectedText) {
    const names = bbdOptDeliveryFilesQueue.map((f) => f.name).slice(0, 3);
    const more = bbdOptDeliveryFilesQueue.length > 3 ? ` (+${bbdOptDeliveryFilesQueue.length - 3} more)` : "";
    ui.bbdOptDeliverySelectedText.textContent = `Selected: ${names.join(", ")}${more}`;
  }
  for (const f of bbdOptDeliveryFilesQueue) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${safeText(f.name)}</td><td>${(f.size / 1024).toFixed(1)}</td>`;
    ui.bbdOptDeliveryFilesBody.appendChild(tr);
  }
}

async function searchBbdOpt() {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_upload_data")) {
    alert("You do not have permission to run BBD OPT.");
    logActivity("ACCESS_DENIED", "bbd_opt search blocked");
    return;
  }
  if (!locationNodes.some((n) => n.status === "OCCUPIED")) {
    alert("Upload inventory in Data and click Analyze + Pre-Allocate first.");
    return;
  }

  try {
    const bbdFile = ui.bbdRulesFile?.files?.[0] || null;
    const bbdRaw = bbdFile ? await readTabularFile(bbdFile) : [];
    const bbdRuleRows = parseBbdRuleRows(bbdRaw);

    let deliveryRows = [];
    const fromQueue = bbdOptDeliveryFilesQueue.length ? bbdOptDeliveryFilesQueue : Array.from(ui.deliveryOrderFile?.files || []);
    if (fromQueue.length) {
      const parsed = await Promise.all(fromQueue.map((f) => readTabularFile(f)));
      for (const part of parsed) deliveryRows = deliveryRows.concat(parseDeliveryOrderRows(part));
    }

    const manualRows = buildBbdOptInputRows();
    const allOrders = [...deliveryRows, ...manualRows];
    if (!allOrders.length) {
      alert("Upload delivery order files or add manual order line for BBD OPT.");
      return;
    }

    const result = runBbdOptSearch({ orderRows: allOrders, bbdRuleRows });
    const orderCount = new Set(allOrders.map((r) => `${r.order_number}|${normalizeSkuCode(r.sku || "")}`)).size;
    const matchedOrderCount = new Set(result.filter((r) => r.status === "MATCHED").map((r) => `${r.order_number}|${normalizeSkuCode(r.sku || "")}`)).size;
    const insufficientOrderCount = Math.max(orderCount - matchedOrderCount, 0);
    if (ui.bbdOptStatus) {
      ui.bbdOptStatus.textContent = `Search completed: ${orderCount} order lines, matched ${matchedOrderCount}, insufficient ${insufficientOrderCount}. Output has ${result.length} pallet rows. Violet pallets are marked RE.`;
    }
    logActivity("BBD_OPT_SEARCH", `orders=${orderCount}, matched=${matchedOrderCount}, insufficient=${insufficientOrderCount}, pallet_rows=${result.length}`);
  } catch (err) {
    console.error(err);
    alert(`BBD OPT failed: ${err.message}`);
    if (ui.bbdOptStatus) ui.bbdOptStatus.textContent = `BBD OPT failed: ${err.message}`;
  }
}

function downloadBbdOptResult() {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_download_reports")) {
    alert("You do not have permission to download reports.");
    logActivity("ACCESS_DENIED", "bbd_opt download blocked");
    return;
  }
  if (!bbdOptResultRows.length) {
    alert("No BBD OPT result available. Click SEARCH first.");
    return;
  }
  downloadRowsAsXlsx(bbdOptResultRows, "bbd_opt_result.xlsx", "BBD OPT");
  logActivity("DOWNLOAD", `BBD OPT | ${bbdOptResultRows.length} rows`);
}

async function analyze() {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_upload_data")) {
    alert("You do not have permission to upload/analyze data.");
    logActivity("ACCESS_DENIED", "analyze blocked");
    return;
  }
  const inventoryFile = ui.inventoryFile.files[0];
  const productMasterFile = ui.productMasterFile?.files?.[0];
  const incomingFiles = incomingFilesQueue.length > 0 ? [...incomingFilesQueue] : Array.from(ui.incomingFile.files || []);
  const fastMovingFile = ui.fastMovingFile.files[0];
  const manualIncoming = createManualIncomingRows();

  if (!inventoryFile && incomingFiles.length === 0 && manualIncoming.length === 0 && !fastMovingFile) {
    alert("Upload at least one input file (inventory, incoming PO, or fast-moving) or add manual upcoming lines.");
    return;
  }

  if (ui.analyzeTopBtn) ui.analyzeTopBtn.disabled = true;
  logActivity("ANALYZE_START", `incoming_files=${incomingFiles.length}, manual_rows=${manualIncoming.length}`);
  try {
    const inventoryRaw = inventoryFile ? await readTabularFile(inventoryFile) : [];
    const productRaw = productMasterFile ? await readTabularFile(productMasterFile) : [];
    const productParsed = parseProductMasterRows(productRaw);
    latestProductBySku = productParsed.bySku || new Map();
    const inventoryParsed = parseInventoryRowsSmart(inventoryRaw, productParsed.bySku);
    problemRows = [];
    if (inventoryParsed.missingHeaders && inventoryParsed.missingHeaders.length) {
      problemRows = buildProblemRows(inventoryParsed.missingHeaders, [], [], [], {}, [], []);
      enableDownload(ui.downloadProblems, "problem_solving.xlsx", problemRows, "Problem solving", "Problem solving");
      alert(`Inventory file missing required headings: ${inventoryParsed.missingHeaders.join(", ")}`);
      return;
    }
    const inventoryRowsRaw = inventoryParsed.rows;
    missingProductSkuRows = buildMissingProductSkuRows(inventoryRowsRaw);
    const inventoryRows = consolidateInventoryByLocation(inventoryRowsRaw);
    const inventoryIssues = buildInventoryConsistencyIssues(inventoryRowsRaw);
    const fastRows = fastMovingFile ? await readTabularFile(fastMovingFile) : [];
    let incomingRows = [...manualIncoming];
    if (incomingFiles.length > 0) {
      const fileRows = await Promise.all(incomingFiles.map((file) => readTabularFile(file)));
      for (const rows of fileRows) incomingRows = incomingRows.concat(rows);
    }

    resetDynamicState();
    const locationViolations = applyInventory(inventoryRows);
    const fifoAlerts = checkFifoAlerts(incomingRows);
    const incomingFifoMoves = buildIncomingFifoMovements(fifoAlerts);
    planRows = allocateIncoming(incomingRows);
    zoneRows = buildZoneRows();
    projectionRows = buildProjection(inventoryRowsRaw, planRows);
    const recommendations = buildFastMoverRecommendations(fastRows);
    const currentStockFifoMoves = buildCurrentStockFifoMovements();
    fifoMovementRows = [...incomingFifoMoves, ...currentStockFifoMoves];
    incomingPoMovementRows = buildIncomingPoMovements(planRows);
    const fastMoverMoves = buildFastMoverMovements(recommendations);
    movementRows = [...fifoMovementRows, ...incomingPoMovementRows, ...fastMoverMoves];

    renderSummary();
    renderGhostTable();
    renderFifoRecommendations(fifoMovementRows);
    renderRecommendations(recommendations);
    renderCanvas();

    showFifoPopup(fifoMovementRows);
    showValidationPopup(inventoryParsed.missingSkus, locationViolations, inventoryIssues);
    pickingSuggestionRows = analyzePickingLocationSuggestions();
    showPickingSuggestionPopup(pickingSuggestionRows);
    systemSuggestionRows = buildSystemSuggestionRows("INVENTORY");
    preallocationSuggestionRows = buildSystemSuggestionRows("INCOMING_PO");
    showSystemSuggestionPopup(systemSuggestionRows);
    showPreallocationSuggestionPopup(preallocationSuggestionRows);
    problemRows = buildProblemRows(
      [],
      inventoryParsed.missingSkus,
      locationViolations,
      pickingSuggestionRows,
      inventoryIssues,
      systemSuggestionRows,
      preallocationSuggestionRows
    );
    logActivity(
      "ANALYZE_DONE",
      `allocated=${planRows.filter((r) => r.status === "ALLOCATED").length}, unallocated=${planRows.filter(
        (r) => r.status !== "ALLOCATED"
      ).length}`
    );

    enableDownload(ui.downloadZone, "zone_capacity_report.xlsx", zoneRows, "Zone Report", "Zone Report");
    enableDownload(ui.downloadPlan, "pre-allocation.xlsx", planRows, "Pre-allocation", "Pre-allocation");
    enableDownload(
      ui.downloadProjection,
      "updated_inventory_projection.xlsx",
      projectionRows,
      "Inventory Projection",
      "Inventory Projection"
    );
    enableDownload(ui.downloadFifoMovement, "fifo_movement.xlsx", fifoMovementRows, "FIFO Movement", "FIFO Movement");
    enableDownload(
      ui.downloadMissingSku,
      "missing_product_sku.xlsx",
      missingProductSkuRows,
      "Missing Product SKU",
      "Missing Product SKU"
    );
    enableDownload(
      ui.downloadIncomingPoMovement,
      "incoming_po_movement.xlsx",
      incomingPoMovementRows,
      "Incoming PO Movement",
      "Incoming PO Movement"
    );
    enableDownload(ui.downloadProblems, "problem_solving.xlsx", problemRows, "Problem solving", "Problem solving");
  } catch (err) {
    console.error(err);
    logActivity("ANALYZE_ERROR", err.message);
    alert(`Analysis failed: ${err.message}`);
  } finally {
    if (ui.analyzeTopBtn) ui.analyzeTopBtn.disabled = false;
  }
}

function renderInitial() {
  zoneRows = buildZoneRows();
  movementRows = [];
  fifoMovementRows = [];
  incomingPoMovementRows = [];
  missingProductSkuRows = [];
  pickingSuggestionRows = [];
  systemSuggestionRows = [];
  preallocationSuggestionRows = [];
  renderFilterRules();
  renderSummary();
  renderGhostTable();
  renderFifoRecommendations([]);
  renderRecommendations([]);
  renderSelectedPalletDetails(null);
  renderCanvas();
}

function syncMenuButtonText() {
  if (!ui.panelToggleBtn) return;
  const closed = ui.rightDrawer?.classList.contains("closed");
  ui.panelToggleBtn.textContent = closed ? "Menu" : "Close";
}

function applyResponsiveDefaults() {
  if (!ui.rightDrawer) return;
  const isMobile = window.matchMedia("(max-width: 1080px)").matches;
  if (isMobile) {
    ui.rightDrawer.classList.add("closed");
  } else {
    ui.rightDrawer.classList.remove("closed");
  }
  syncMenuButtonText();
}

function init() {
  if (Array.isArray(window.LOCATION_MASTER) && window.LOCATION_MASTER.length) {
    masterRows = window.LOCATION_MASTER;
  } else {
    throw new Error("Fixed location master missing.");
  }

  const built = buildZoneState(masterRows);
  zones = built.zMap;
  locationToZone = built.l2z;
  buildLocationNodes();
  populateGroupFilter();
  applyResponsiveDefaults();
  renderBbdOptDeliveryFilesQueue();
  renderInitial();
}

window.addEventListener("resize", renderCanvas);
window.addEventListener("resize", applyResponsiveDefaults);
ui.zoomInBtn.addEventListener("click", () => {
  zoomLevel = Math.min(4, zoomLevel * 1.18);
  renderCanvas();
});
ui.zoomOutBtn.addEventListener("click", () => {
  zoomLevel = Math.max(0.35, zoomLevel * 0.85);
  renderCanvas();
});
ui.zoomResetBtn.addEventListener("click", () => {
  zoomLevel = 1;
  panX = 0;
  panY = 0;
  viewRotation = 0;
  renderCanvas();
});
ui.rotateLeftBtn.addEventListener("click", () => {
  viewRotation -= Math.PI / 8;
  renderCanvas();
});
ui.rotateRightBtn.addEventListener("click", () => {
  viewRotation += Math.PI / 8;
  renderCanvas();
});
ui.addFilterRuleBtn?.addEventListener("click", addFilterRuleFromUi);
ui.clearFilterRulesBtn?.addEventListener("click", clearAllFilterRules);
ui.quickPickingToggle?.addEventListener("change", renderCanvas);
ui.quickStorageToggle?.addEventListener("change", renderCanvas);
ui.quickEmptyHighlightToggle?.addEventListener("change", renderCanvas);
ui.quickGhostToggle?.addEventListener("change", renderCanvas);
ui.filterValueInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    addFilterRuleFromUi();
  }
});
ui.activeFilterBody?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const idx = target.getAttribute("data-remove-filter");
  if (idx === null) return;
  const i = Number(idx);
  if (!Number.isInteger(i) || i < 0 || i >= filterRules.length) return;
  filterRules.splice(i, 1);
  renderFilterRules();
  renderCanvas();
});
ui.panelToggleBtn.addEventListener("click", () => {
  ui.rightDrawer.classList.toggle("closed");
  syncMenuButtonText();
});
ui.mobileCloseMenuBtn?.addEventListener("click", () => {
  ui.rightDrawer?.classList.add("closed");
  syncMenuButtonText();
});
ui.analyzeTopBtn?.addEventListener("click", analyze);
ui.openDataBtn?.addEventListener("click", () => {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_upload_data")) {
    alert("You do not have permission to upload/edit data.");
    logActivity("ACCESS_DENIED", "open data modal blocked");
    return;
  }
  ui.dataModal?.classList.remove("hidden");
});
ui.dataModalClose?.addEventListener("click", () => ui.dataModal?.classList.add("hidden"));
ui.dataModal?.addEventListener("click", (event) => {
  if (event.target === ui.dataModal) ui.dataModal.classList.add("hidden");
});
ui.openResultBtn?.addEventListener("click", () => {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  ui.resultModal?.classList.remove("hidden");
});
ui.resultModalClose?.addEventListener("click", () => ui.resultModal?.classList.add("hidden"));
ui.resultModal?.addEventListener("click", (event) => {
  if (event.target === ui.resultModal) ui.resultModal.classList.add("hidden");
});
ui.openBbdOptBtn?.addEventListener("click", () => {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_upload_data")) {
    alert("You do not have permission to open BBD OPT.");
    logActivity("ACCESS_DENIED", "open bbd_opt modal blocked");
    return;
  }
  renderBbdOptDeliveryFilesQueue();
  ui.bbdOptModal?.classList.remove("hidden");
});
ui.bbdOptModalClose?.addEventListener("click", () => ui.bbdOptModal?.classList.add("hidden"));
ui.bbdOptModal?.addEventListener("click", (event) => {
  if (event.target === ui.bbdOptModal) ui.bbdOptModal.classList.add("hidden");
});
ui.deliveryOrderFile?.addEventListener("change", () => {
  appendBbdOptDeliveryFiles(Array.from(ui.deliveryOrderFile.files || []));
  ui.deliveryOrderFile.value = "";
});
ui.bbdOptClearDeliveryFilesBtn?.addEventListener("click", () => {
  bbdOptDeliveryFilesQueue = [];
  renderBbdOptDeliveryFilesQueue();
  if (ui.bbdOptStatus) ui.bbdOptStatus.textContent = "Delivery order files cleared.";
});
ui.bbdOptAddManualBtn?.addEventListener("click", addBbdOptManualLine);
ui.bbdOptManualBody?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const idx = target.getAttribute("data-remove-bbd-opt-manual");
  if (idx === null) return;
  const index = Number(idx);
  if (!Number.isInteger(index) || index < 0 || index >= bbdOptManualLines.length) return;
  bbdOptManualLines.splice(index, 1);
  renderBbdOptManualLines();
});
ui.bbdOptSearchBtn?.addEventListener("click", searchBbdOpt);
ui.bbdOptDownloadBtn?.addEventListener("click", downloadBbdOptResult);
ui.addManualLineBtn.addEventListener("click", addManualLine);
ui.incomingFile.addEventListener("change", () => {
  if (!hasPermission("can_upload_data")) {
    ui.incomingFile.value = "";
    alert("You do not have permission to upload files.");
    logActivity("ACCESS_DENIED", "incoming upload blocked");
    return;
  }
  appendIncomingFiles(Array.from(ui.incomingFile.files || []));
  ui.incomingFile.value = "";
});
ui.clearIncomingFilesBtn.addEventListener("click", () => {
  incomingFilesQueue = [];
  renderIncomingFilesQueue();
});
ui.fifoModalClose.addEventListener("click", () => ui.fifoModal.classList.add("hidden"));
ui.fifoModal.addEventListener("click", (event) => {
  if (event.target === ui.fifoModal) ui.fifoModal.classList.add("hidden");
});
ui.validationModalClose?.addEventListener("click", () => ui.validationModal?.classList.add("hidden"));
ui.validationModal?.addEventListener("click", (event) => {
  if (event.target === ui.validationModal) ui.validationModal.classList.add("hidden");
});
ui.pickingSuggestionModalClose?.addEventListener("click", () => ui.pickingSuggestionModal?.classList.add("hidden"));
ui.pickingSuggestionModal?.addEventListener("click", (event) => {
  if (event.target === ui.pickingSuggestionModal) ui.pickingSuggestionModal.classList.add("hidden");
});
ui.systemSuggestionModalClose?.addEventListener("click", () => ui.systemSuggestionModal?.classList.add("hidden"));
ui.systemSuggestionModal?.addEventListener("click", (event) => {
  if (event.target === ui.systemSuggestionModal) ui.systemSuggestionModal.classList.add("hidden");
});
ui.preallocationSuggestionModalClose?.addEventListener("click", () => ui.preallocationSuggestionModal?.classList.add("hidden"));
ui.preallocationSuggestionModal?.addEventListener("click", (event) => {
  if (event.target === ui.preallocationSuggestionModal) ui.preallocationSuggestionModal.classList.add("hidden");
});
ui.palletModalClose.addEventListener("click", () => ui.palletModal.classList.add("hidden"));
ui.palletModal.addEventListener("click", (event) => {
  if (event.target === ui.palletModal) ui.palletModal.classList.add("hidden");
});
ui.openAuthBtn.addEventListener("click", () => {
  renderAccessState();
  ui.authModal.classList.remove("hidden");
});
ui.authModalClose.addEventListener("click", () => {
  if (!isAuthenticated()) {
    ui.authStatusText.textContent = "Login required to access the system.";
    return;
  }
  ui.authModal.classList.add("hidden");
});
ui.authModal.addEventListener("click", (event) => {
  if (event.target !== ui.authModal) return;
  if (!isAuthenticated()) {
    ui.authStatusText.textContent = "Login required to access the system.";
    return;
  }
  ui.authModal.classList.add("hidden");
});
ui.authRole?.addEventListener("change", syncPermissionInputsByRole);
ui.authLoginBtn.addEventListener("click", async () => {
  const username = String(ui.authUsername.value || "").trim();
  const password = String(ui.authPassword.value || "").trim();
  if (!username || !password) {
    ui.authStatusText.textContent = "Enter username and password.";
    return;
  }
  let user = null;
  if (serverAuditEnabled) {
    try {
      const resp = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (resp.ok) {
        const body = await resp.json();
        user = body.user || null;
        setAuthToken(body.token || "");
      }
    } catch {
      user = null;
      setAuthToken("");
    }
  } else {
    const users = loadUsers();
    user = users.find((u) => u.username === username && u.password === password) || null;
  }
  if (!user) {
    setAuthToken("");
    ui.authStatusText.textContent = "Invalid username or password.";
    return;
  }
  setCurrentRole(user.role || "USER");
  setCurrentPermissions(normalizePermissions(user.permissions || {}, user.role || "USER"));
  setCurrentUser(user.username);
  if (serverAuditEnabled) await refreshServerUsers(true);
  logActivity("LOGIN", `user=${user.username}`);
  ui.authStatusText.textContent = `Logged in as ${user.username}.`;
  ui.authModal.classList.add("hidden");
});
ui.authCreateBtn.addEventListener("click", async () => {
  if (!isAdminUser()) {
    ui.authStatusText.textContent = "Only ADMIN can create users.";
    return;
  }
  const username = String(ui.authUsername.value || "").trim();
  const password = String(ui.authPassword.value || "").trim();
  const role = String(ui.authRole?.value || "USER").toUpperCase() === "ADMIN" ? "ADMIN" : "USER";
  const permissions = normalizePermissions(
    {
      can_upload_data: Boolean(ui.permUploadData?.checked),
      can_download_reports: Boolean(ui.permDownloadReports?.checked),
      can_view_login_activity: Boolean(ui.permViewLoginActivity?.checked),
    },
    role
  );
  if (!username || !password) {
    ui.authStatusText.textContent = "Enter username and password to create account.";
    return;
  }
  if (serverAuditEnabled) {
    try {
      const resp = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          username,
          password,
          role,
          permissions,
        }),
      });
      if (!resp.ok) {
        const body = await resp.json().catch(() => ({}));
        ui.authStatusText.textContent = body.error || "Unable to create account.";
        return;
      }
      await refreshServerUsers(true);
      renderUsersTable();
      logActivity("CREATE_USER", `created=${username}, role=${role}, perms=${permissionsLabel(permissions, role)}`);
      ui.authStatusText.textContent = `Account created for ${username} (${role}).`;
      return;
    } catch {
      ui.authStatusText.textContent = "Unable to create account.";
      return;
    }
  }
  const users = loadUsers();
  if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
    ui.authStatusText.textContent = "Username already exists.";
    return;
  }
  users.push({ username, password, role, permissions });
  saveUsers(users);
  renderUsersTable();
  logActivity("CREATE_USER", `created=${username}, role=${role}, perms=${permissionsLabel(permissions, role)}`);
  ui.authStatusText.textContent = `Account created for ${username} (${role}).`;
});
ui.authChangeUserIdBtn?.addEventListener("click", async () => {
  if (!isAuthenticated()) {
    ui.authStatusText.textContent = "Login required to change user ID.";
    enforceLoginModal();
    return;
  }
  const targetUsername = String(ui.authUsername?.value || "").trim() || getCurrentUser();
  const newUsername = window.prompt(`Enter new user ID for ${targetUsername}:`, "") || "";
  if (!newUsername.trim()) {
    ui.authStatusText.textContent = "New user ID is required.";
    return;
  }

  if (serverAuditEnabled) {
    try {
      const currentPassword = targetUsername === getCurrentUser() ? window.prompt("Enter current password:", "") || "" : "";
      const resp = await fetch(`${API_BASE}/users/rename`, {
        method: "POST",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          username: targetUsername,
          new_username: newUsername.trim(),
          current_password: currentPassword,
        }),
      });
      const body = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        ui.authStatusText.textContent = body.error || "Unable to change user ID.";
        return;
      }
      if (targetUsername === getCurrentUser()) {
        if (body.token) setAuthToken(body.token);
        setCurrentRole(body.user?.role || getCurrentRole());
        setCurrentPermissions(normalizePermissions(body.user?.permissions || {}, body.user?.role || getCurrentRole()));
        setCurrentUser(body.user?.username || newUsername.trim());
      }
      await refreshServerUsers(true);
      renderUsersTable();
      logActivity("CHANGE_USER_ID", `from=${targetUsername}, to=${newUsername.trim()}`);
      ui.authStatusText.textContent = `User ID changed: ${targetUsername} -> ${newUsername.trim()}`;
      return;
    } catch {
      ui.authStatusText.textContent = "Unable to change user ID.";
      return;
    }
  }

  const users = loadUsers();
  const actor = users.find((u) => u.username === getCurrentUser());
  const target = users.find((u) => u.username === targetUsername);
  if (!actor || !target) {
    ui.authStatusText.textContent = "User not found.";
    return;
  }
  if (users.some((u) => u.username.toLowerCase() === newUsername.trim().toLowerCase() && u.username !== target.username)) {
    ui.authStatusText.textContent = "Username already exists.";
    return;
  }
  const isSelf = actor.username === target.username;
  const isAdmin = String(actor.role || "").toUpperCase() === "ADMIN";
  if (!isSelf && !isAdmin) {
    ui.authStatusText.textContent = "Only ADMIN can change other users ID.";
    return;
  }
  target.username = newUsername.trim();
  saveUsers(users);
  if (isSelf) setCurrentUser(newUsername.trim());
  renderUsersTable();
  logActivity("CHANGE_USER_ID", `from=${targetUsername}, to=${newUsername.trim()}`);
  ui.authStatusText.textContent = `User ID changed: ${targetUsername} -> ${newUsername.trim()}`;
});
ui.authChangePasswordBtn?.addEventListener("click", async () => {
  if (!isAuthenticated()) {
    ui.authStatusText.textContent = "Login required to change password.";
    enforceLoginModal();
    return;
  }
  const targetUsername = String(ui.authUsername?.value || "").trim() || getCurrentUser();
  const isSelfTarget = targetUsername === getCurrentUser();
  const currentPassword = isSelfTarget ? window.prompt(`Current password for ${targetUsername}:`, "") || "" : "";
  if (isSelfTarget && !currentPassword) {
    ui.authStatusText.textContent = "Password change cancelled.";
    return;
  }
  const newPassword = window.prompt("Enter new password:", "") || "";
  if (!newPassword) {
    ui.authStatusText.textContent = "New password is required.";
    return;
  }
  const confirmPassword = window.prompt("Confirm new password:", "") || "";
  if (newPassword !== confirmPassword) {
    ui.authStatusText.textContent = "New password and confirm password do not match.";
    return;
  }
  if (serverAuditEnabled) {
    try {
      const resp = await fetch(`${API_BASE}/users/change-password`, {
        method: "POST",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          username: targetUsername,
          old_password: currentPassword,
          new_password: newPassword,
        }),
      });
      if (!resp.ok) {
        const body = await resp.json().catch(() => ({}));
        ui.authStatusText.textContent = body.error || "Unable to change password.";
        return;
      }
      if (serverAuditEnabled) await refreshServerUsers(true);
      logActivity("CHANGE_PASSWORD", `username=${targetUsername}`);
      ui.authStatusText.textContent = `Password changed for ${targetUsername}.`;
      return;
    } catch {
      ui.authStatusText.textContent = "Unable to change password.";
      return;
    }
  }
  const users = loadUsers();
  const actor = users.find((u) => u.username === getCurrentUser());
  const target = users.find((u) => u.username === targetUsername);
  if (!actor || !target) {
    ui.authStatusText.textContent = "User not found.";
    return;
  }
  const isSelf = actor.username === targetUsername;
  const isAdmin = String(actor.role || "").toUpperCase() === "ADMIN";
  if (!isSelf && !isAdmin) {
    ui.authStatusText.textContent = "Only ADMIN can change other users password.";
    return;
  }
  if (isSelf && target.password !== currentPassword) {
    ui.authStatusText.textContent = "Current password is incorrect.";
    return;
  }
  target.password = newPassword;
  saveUsers(users);
  logActivity("CHANGE_PASSWORD", `username=${targetUsername}`);
  ui.authStatusText.textContent = `Password changed for ${targetUsername}.`;
});
ui.authLogoutBtn.addEventListener("click", () => {
  logActivity("LOGOUT", `user=${getCurrentUser()}`);
  setAuthToken("");
  setCurrentRole("GUEST");
  setCurrentPermissions(normalizePermissions({}, "USER"));
  setCurrentUser("guest");
  ui.authStatusText.textContent = "Logged out.";
  ui.authModal.classList.add("hidden");
});
ui.usersTableBody?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const username = target.getAttribute("data-delete-user");
  if (!username) return;
  if (!isAdminUser()) return;
  if (serverAuditEnabled) {
    fetch(`${API_BASE}/users/delete`, {
      method: "POST",
      headers: authHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        username,
      }),
    })
      .then(async (resp) => {
        if (!resp.ok) return;
        await refreshServerUsers(true);
        logActivity("DELETE_USER", `deleted=${username}`);
        renderUsersTable();
      })
      .catch(() => {});
    return;
  }
  const users = loadUsers();
  const filtered = users.filter((u) => u.username !== username);
  saveUsers(filtered);
  logActivity("DELETE_USER", `deleted=${username}`);
  renderUsersTable();
});
ui.downloadAuditLog?.addEventListener("click", () => {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_view_login_activity") || !hasPermission("can_download_reports")) {
    alert("You do not have permission to download login activity.");
    logActivity("ACCESS_DENIED", "download audit log blocked");
    return;
  }
  const logs = [...loadActivityLogs(), ...serverAuditLogsCache];
  if (!logs.length) return;
  const rows = logs.map((l) => ({
    time: l.time,
    user: l.user,
    role: l.role,
    action: l.action,
    details: l.details,
  }));
  downloadRowsAsXlsx(rows, "allocation_audit_log.xlsx", "Audit Log");
  logActivity("DOWNLOAD", "Audit Log");
});
ui.clearAuditLog?.addEventListener("click", () => {
  if (!isAdminUser() || !hasPermission("can_view_login_activity")) return;
  saveActivityLogs([]);
  serverAuditLogsCache = [];
  if (serverAuditEnabled) {
    fetch(`${API_BASE}/activity/clear`, {
      method: "POST",
      headers: authHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify({}),
    }).catch(() => {});
  }
  renderAuditLog();
  logActivity("CLEAR_AUDIT_LOG", "Audit log cleared by admin");
});
ui.manualLinesBody.addEventListener("click", (event) => {
  if (!isAuthenticated()) {
    enforceLoginModal();
    return;
  }
  if (!hasPermission("can_upload_data")) {
    alert("You do not have permission to edit manual input.");
    logActivity("ACCESS_DENIED", "manual line remove blocked");
    return;
  }
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const idx = target.getAttribute("data-remove-manual");
  if (idx === null) return;
  const index = Number(idx);
  if (!Number.isInteger(index) || index < 0 || index >= manualLines.length) return;
  manualLines.splice(index, 1);
  renderManualLines();
});

detectServerAuditApi()
  .then(() => Promise.all([refreshServerAuditLogs(true), refreshServerUsers(true)]))
  .finally(() => {
    try {
      initAuth();
      init();
    } catch (e) {
      console.error(e);
      alert(`Startup error: ${e.message}`);
    }
  });
