import { AuthEnv, jsonResponse, sanitizeReturnTo } from "../../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB || !env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    return jsonResponse(
      {
        ok: false,
        error: "Google Sign-In is not configured yet. Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in Cloudflare Pages Secrets.",
      },
      503
    );
  }

  const reqUrl = new URL(request.url);
  const returnTo = sanitizeReturnTo(reqUrl.searchParams.get("returnTo"));
  const state = crypto.randomUUID().replace(/-/g, "");
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

  await env.DB.prepare(
    "INSERT INTO oauth_states (state, return_to, expires_at) VALUES (?, ?, ?)"
  )
    .bind(state, returnTo, expiresAt)
    .run();

  const redirectUri = `${reqUrl.origin}/api/auth/google/callback`;
  const googleUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  googleUrl.searchParams.set("client_id", env.GOOGLE_CLIENT_ID);
  googleUrl.searchParams.set("redirect_uri", redirectUri);
  googleUrl.searchParams.set("response_type", "code");
  googleUrl.searchParams.set("scope", "openid email profile");
  googleUrl.searchParams.set("state", state);
  googleUrl.searchParams.set("prompt", "select_account");

  return Response.redirect(googleUrl.toString(), 302);
};
