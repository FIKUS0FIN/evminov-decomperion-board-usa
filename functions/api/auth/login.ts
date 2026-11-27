import {
  AuthEnv,
  createSession,
  isAdminEmail,
  isValidEmail,
  jsonResponse,
  mapUserRow,
  normalizeEmail,
  verifyPassword,
} from "../../_lib/auth";

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database binding is not configured." }, 503);
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");

    if (!isValidEmail(email) || !password) {
      return jsonResponse(
        { ok: false, error: "Email and password are required." },
        400
      );
    }

    const row = await env.DB.prepare(
      "SELECT id, email, name, phone, password_hash, google_id, avatar_url, role, locale, created_at, last_login_at FROM users WHERE email = ? LIMIT 1"
    )
      .bind(email)
      .first<Parameters<typeof mapUserRow>[0]>();

    if (!row) {
      return jsonResponse({ ok: false, error: "Invalid email or password." }, 401);
    }

    if (!row.password_hash) {
      return jsonResponse(
        {
          ok: false,
          error: "This account uses Google Sign-In. Please click 'Continue with Google' or register a password.",
        },
        401
      );
    }

    const valid = await verifyPassword(password, row.password_hash);
    if (!valid) {
      return jsonResponse({ ok: false, error: "Invalid email or password." }, 401);
    }

    const nowIso = new Date().toISOString();
    const role = isAdminEmail(email, env) ? "admin" : row.role;
    await env.DB.prepare(
      "UPDATE users SET last_login_at = ?, role = ? WHERE id = ?"
    )
      .bind(nowIso, role, row.id)
      .run();

    const cookie = await createSession(env.DB, row.id, request);
    const user = mapUserRow({ ...row, role, last_login_at: nowIso }, env);

    return jsonResponse({ ok: true, user }, 200, { "Set-Cookie": cookie });
  } catch {
    return jsonResponse({ ok: false, error: "Sign-in failed." }, 500);
  }
};
