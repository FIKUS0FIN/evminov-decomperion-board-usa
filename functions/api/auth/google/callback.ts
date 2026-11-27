import {
  AuthEnv,
  createSession,
  isAdminEmail,
  normalizeEmail,
  sanitizeReturnTo,
} from "../../../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  const reqUrl = new URL(request.url);
  const code = reqUrl.searchParams.get("code");
  const state = reqUrl.searchParams.get("state");
  const errorParam = reqUrl.searchParams.get("error");

  if (errorParam || !code || !state || !env.DB || !env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    return Response.redirect(`${reqUrl.origin}/portal/?auth_error=google_cancelled`, 302);
  }

  const nowIso = new Date().toISOString();
  const stateRow = await env.DB.prepare(
    "SELECT state, return_to FROM oauth_states WHERE state = ? AND expires_at > ? LIMIT 1"
  )
    .bind(state, nowIso)
    .first<{ state: string; return_to: string }>();

  if (!stateRow) {
    return Response.redirect(`${reqUrl.origin}/portal/?auth_error=invalid_state`, 302);
  }

  // Consume state (single-use)
  await env.DB.prepare("DELETE FROM oauth_states WHERE state = ?").bind(state).run();

  const redirectUri = `${reqUrl.origin}/api/auth/google/callback`;

  try {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: env.GOOGLE_CLIENT_ID,
        client_secret: env.GOOGLE_CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }).toString(),
    });

    if (!tokenRes.ok) {
      return Response.redirect(`${reqUrl.origin}/portal/?auth_error=token_exchange`, 302);
    }

    const tokenData = (await tokenRes.json()) as { access_token?: string };
    if (!tokenData.access_token) {
      return Response.redirect(`${reqUrl.origin}/portal/?auth_error=missing_token`, 302);
    }

    const profileRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    if (!profileRes.ok) {
      return Response.redirect(`${reqUrl.origin}/portal/?auth_error=userinfo_failed`, 302);
    }

    const profile = (await profileRes.json()) as {
      sub?: string;
      email?: string;
      name?: string;
      picture?: string;
    };

    const email = normalizeEmail(profile.email);
    const googleId = String(profile.sub || "").trim();
    if (!email || !googleId) {
      return Response.redirect(`${reqUrl.origin}/portal/?auth_error=missing_email`, 302);
    }

    const existing = await env.DB.prepare(
      "SELECT id, role FROM users WHERE google_id = ? OR email = ? LIMIT 1"
    )
      .bind(googleId, email)
      .first<{ id: string; role: string }>();

    const role = isAdminEmail(email, env) ? "admin" : existing?.role || "user";
    let userId: string;

    if (existing) {
      userId = existing.id;
      await env.DB.prepare(
        `UPDATE users
         SET google_id = ?, name = COALESCE(NULLIF(?, ''), name), avatar_url = ?, role = ?, last_login_at = ?
         WHERE id = ?`
      )
        .bind(googleId, profile.name || "", profile.picture || null, role, nowIso, userId)
        .run();
    } else {
      userId = crypto.randomUUID();
      await env.DB.prepare(
        `INSERT INTO users (id, email, name, google_id, avatar_url, role, locale, created_at, last_login_at)
         VALUES (?, ?, ?, ?, ?, ?, 'en', ?, ?)`
      )
        .bind(
          userId,
          email,
          profile.name || email.split("@")[0],
          googleId,
          profile.picture || null,
          role,
          nowIso,
          nowIso
        )
        .run();
    }

    // Link any previous orders placed with this email
    await env.DB.prepare(
      "UPDATE orders SET user_id = ? WHERE lower(customer_email) = ? AND user_id IS NULL"
    )
      .bind(userId, email)
      .run();

    const cookie = await createSession(env.DB, userId, request);
    const returnTo = sanitizeReturnTo(stateRow.return_to);

    return new Response(null, {
      status: 302,
      headers: {
        Location: `${reqUrl.origin}${returnTo}`,
        "Set-Cookie": cookie,
      },
    });
  } catch {
    return Response.redirect(`${reqUrl.origin}/portal/?auth_error=oauth_exception`, 302);
  }
};
