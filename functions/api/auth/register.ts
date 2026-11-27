import {
  AuthEnv,
  createSession,
  hashPassword,
  isAdminEmail,
  isValidEmail,
  jsonResponse,
  mapUserRow,
  normalizeEmail,
} from "../../_lib/auth";

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database binding is not configured." }, 503);
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    const name = String(body.name || "").trim().slice(0, 120);
    const phone = String(body.phone || "").trim().slice(0, 40);
    const locale = String(body.locale || "en").slice(0, 10);

    if (!isValidEmail(email)) {
      return jsonResponse({ ok: false, error: "Please enter a valid email address." }, 400);
    }
    if (password.length < 8) {
      return jsonResponse(
        { ok: false, error: "Password must be at least 8 characters." },
        400
      );
    }

    const existing = await env.DB.prepare(
      "SELECT id, email, name, phone, password_hash, google_id, avatar_url, role, locale, created_at, last_login_at FROM users WHERE email = ? LIMIT 1"
    )
      .bind(email)
      .first<{
        id: string;
        email: string;
        name: string;
        phone: string;
        password_hash: string | null;
        google_id: string | null;
        avatar_url: string | null;
        role: string;
        locale: string;
        created_at: string;
        last_login_at: string;
      }>();

    const passwordHash = await hashPassword(password);
    const role = isAdminEmail(email, env) ? "admin" : "user";
    const nowIso = new Date().toISOString();

    let userId: string;

    if (existing) {
      if (existing.password_hash) {
        return jsonResponse(
          { ok: false, error: "An account with this email already exists. Please sign in." },
          409
        );
      }
      // Link password to existing Google-only account
      userId = existing.id;
      await env.DB.prepare(
        "UPDATE users SET password_hash = ?, name = COALESCE(NULLIF(?, ''), name), phone = COALESCE(NULLIF(?, ''), phone), role = ?, last_login_at = ? WHERE id = ?"
      )
        .bind(passwordHash, name, phone, role === "admin" ? "admin" : existing.role, nowIso, userId)
        .run();
    } else {
      userId = crypto.randomUUID();
      await env.DB.prepare(
        `INSERT INTO users (id, email, name, phone, password_hash, role, locale, created_at, last_login_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(userId, email, name || email.split("@")[0], phone, passwordHash, role, locale, nowIso, nowIso)
        .run();
    }

    // Link any previous orders placed with this email
    await env.DB.prepare(
      "UPDATE orders SET user_id = ? WHERE lower(customer_email) = ? AND user_id IS NULL"
    )
      .bind(userId, email)
      .run();

    const freshRow = await env.DB.prepare(
      "SELECT id, email, name, phone, password_hash, google_id, avatar_url, role, locale, created_at, last_login_at FROM users WHERE id = ? LIMIT 1"
    )
      .bind(userId)
      .first<Parameters<typeof mapUserRow>[0]>();

    const cookie = await createSession(env.DB, userId, request);

    return jsonResponse(
      { ok: true, user: freshRow ? mapUserRow(freshRow, env) : null },
      201,
      { "Set-Cookie": cookie }
    );
  } catch {
    return jsonResponse({ ok: false, error: "Registration failed." }, 500);
  }
};
