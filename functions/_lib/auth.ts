export interface AuthEnv {
  DB?: D1Database;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  ADMIN_EMAILS?: string;
  RESEND_API_KEY?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  STRIPE_SECRET_KEY?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: "user" | "admin";
  avatarUrl: string | null;
  hasPassword: boolean;
  hasGoogle: boolean;
  locale: string;
  shippingState: string;
  shippingCity: string;
  shippingAddress: string;
  shippingZip: string;
  deliveryNotes: string;
  createdAt: string;
  lastLoginAt: string;
}

export const SESSION_COOKIE_NAME = "evminov_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

export function jsonResponse(
  data: unknown,
  status = 200,
  extraHeaders?: Record<string, string>
): Response {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store, private",
  });
  if (extraHeaders) {
    for (const [k, v] of Object.entries(extraHeaders)) {
      headers.set(k, v);
    }
  }
  return new Response(JSON.stringify(data), { status, headers });
}

export function normalizeEmail(raw: unknown): string {
  return String(raw || "").trim().toLowerCase().slice(0, 180);
}

export function isValidEmail(email: string): boolean {
  return Boolean(email) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isAdminEmail(email: string, env: AuthEnv): boolean {
  const normalized = normalizeEmail(email);
  if (!normalized || !env.ADMIN_EMAILS) return false;
  const allowlist = env.ADMIN_EMAILS.split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
  return allowlist.includes(normalized);
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string): Uint8Array<ArrayBuffer> {
  const out = new Uint8Array(new ArrayBuffer(hex.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i];
  }
  return diff === 0;
}

export async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input)
  );
  return bytesToHex(new Uint8Array(digest));
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const derived = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );
  return `pbkdf2_sha256:100000:${bytesToHex(salt)}:${bytesToHex(new Uint8Array(derived))}`;
}

export async function verifyPassword(
  password: string,
  stored: string | null
): Promise<boolean> {
  if (!stored) return false;
  const parts = stored.split(":");
  if (parts.length !== 4 || parts[0] !== "pbkdf2_sha256") return false;
  const iterations = Number(parts[1]);
  if (!Number.isFinite(iterations) || iterations < 10000) return false;
  const salt = hexToBytes(parts[2]);
  const expected = hexToBytes(parts[3]);

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const derived = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations,
      hash: "SHA-256",
    },
    keyMaterial,
    expected.length * 8
  );
  return timingSafeEqual(new Uint8Array(derived), expected);
}

export function parseCookie(request: Request, name: string): string | null {
  const header = request.headers.get("cookie") || "";
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    if (k === name) {
      return decodeURIComponent(part.slice(idx + 1).trim());
    }
  }
  return null;
}

export function buildSessionCookie(rawToken: string, request: Request): string {
  const isHttps = new URL(request.url).protocol === "https:";
  const secure = isHttps ? "; Secure" : "";
  return `${SESSION_COOKIE_NAME}=${encodeURIComponent(rawToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}${secure}`;
}

export function buildClearSessionCookie(request: Request): string {
  const isHttps = new URL(request.url).protocol === "https:";
  const secure = isHttps ? "; Secure" : "";
  return `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
}

export async function createSession(
  db: D1Database,
  userId: string,
  request: Request
): Promise<string> {
  const rawToken = bytesToHex(crypto.getRandomValues(new Uint8Array(32)));
  const tokenHash = await sha256Hex(rawToken);
  const expiresAt = new Date(Date.now() + SESSION_TTL_SECONDS * 1000).toISOString();

  await db
    .prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)")
    .bind(tokenHash, userId, expiresAt)
    .run();

  return buildSessionCookie(rawToken, request);
}

interface DbUserRow {
  id: string;
  email: string;
  name: string;
  phone: string;
  password_hash: string | null;
  google_id: string | null;
  avatar_url: string | null;
  role: string;
  locale: string;
  shipping_state?: string | null;
  shipping_city?: string | null;
  shipping_address?: string | null;
  shipping_zip?: string | null;
  delivery_notes?: string | null;
  created_at: string;
  last_login_at: string;
}

export function mapUserRow(row: DbUserRow, env: AuthEnv): AuthUser {
  const effectiveRole: "user" | "admin" =
    row.role === "admin" || isAdminEmail(row.email, env) ? "admin" : "user";
  return {
    id: row.id,
    email: row.email,
    name: row.name || "",
    phone: row.phone || "",
    role: effectiveRole,
    avatarUrl: row.avatar_url || null,
    hasPassword: Boolean(row.password_hash),
    hasGoogle: Boolean(row.google_id),
    locale: row.locale || "en",
    shippingState: row.shipping_state || "",
    shippingCity: row.shipping_city || "",
    shippingAddress: row.shipping_address || "",
    shippingZip: row.shipping_zip || "",
    deliveryNotes: row.delivery_notes || "",
    createdAt: row.created_at,
    lastLoginAt: row.last_login_at,
  };
}

export async function getSessionUser(
  request: Request,
  env: AuthEnv
): Promise<AuthUser | null> {
  if (!env.DB) return null;
  const rawToken = parseCookie(request, SESSION_COOKIE_NAME);
  if (!rawToken) return null;

  const tokenHash = await sha256Hex(rawToken);
  const nowIso = new Date().toISOString();

  const row = await env.DB.prepare(
    `SELECT u.id, u.email, u.name, u.phone, u.password_hash, u.google_id, u.avatar_url, u.role, u.locale,
            u.shipping_state, u.shipping_city, u.shipping_address, u.shipping_zip, u.delivery_notes,
            u.created_at, u.last_login_at
     FROM sessions s
     INNER JOIN users u ON u.id = s.user_id
     WHERE s.id = ? AND s.expires_at > ?
     LIMIT 1`
  )
    .bind(tokenHash, nowIso)
    .first<DbUserRow>();

  if (!row) return null;
  return mapUserRow(row, env);
}

export function sanitizeReturnTo(raw: string | null): string {
  if (!raw) return "/portal/";
  const trimmed = raw.trim();
  if (!trimmed.startsWith("/") || trimmed.startsWith("//")) return "/portal/";
  return trimmed.slice(0, 200);
}
