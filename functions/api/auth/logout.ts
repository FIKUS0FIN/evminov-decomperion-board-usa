import {
  AuthEnv,
  buildClearSessionCookie,
  jsonResponse,
  parseCookie,
  SESSION_COOKIE_NAME,
  sha256Hex,
} from "../../_lib/auth";

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  try {
    const rawToken = parseCookie(request, SESSION_COOKIE_NAME);
    if (rawToken && env.DB) {
      const tokenHash = await sha256Hex(rawToken);
      await env.DB.prepare("DELETE FROM sessions WHERE id = ?")
        .bind(tokenHash)
        .run();
    }
  } catch {
    // Always clear cookie even if DB delete fails
  }

  return jsonResponse({ ok: true }, 200, {
    "Set-Cookie": buildClearSessionCookie(request),
  });
};
