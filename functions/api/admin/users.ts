import { AuthEnv, getSessionUser, jsonResponse } from "../../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  if (user.role !== "admin") return jsonResponse({ ok: false, error: "Forbidden" }, 403);

  const url = new URL(request.url);
  const query = (url.searchParams.get("q") || "").trim().toLowerCase();

  let sql = `
    SELECT
      u.id,
      u.email,
      u.name,
      u.phone,
      u.role,
      u.avatar_url,
      u.locale,
      u.shipping_state,
      u.shipping_city,
      u.shipping_address,
      u.shipping_zip,
      u.delivery_notes,
      CASE WHEN u.google_id IS NOT NULL THEN 1 ELSE 0 END AS has_google,
      CASE WHEN u.password_hash IS NOT NULL THEN 1 ELSE 0 END AS has_password,
      u.created_at,
      u.last_login_at,
      COUNT(o.id) AS order_count,
      COALESCE(SUM(CASE WHEN o.mode = 'order_reservation' AND o.status != 'cancelled' THEN o.total_usd ELSE 0 END), 0) AS total_spent_usd
    FROM users u
    LEFT JOIN orders o ON o.user_id = u.id OR lower(o.customer_email) = lower(u.email)
    WHERE 1=1
  `;
  const binds: unknown[] = [];

  if (query) {
    sql += ` AND (
      lower(u.email) LIKE ? OR
      lower(u.name) LIKE ? OR
      lower(u.phone) LIKE ?
    )`;
    const pattern = `%${query}%`;
    binds.push(pattern, pattern, pattern);
  }

  sql += " GROUP BY u.id ORDER BY u.created_at DESC LIMIT 250";

  const { results } = await env.DB.prepare(sql).bind(...binds).all();

  return jsonResponse({ ok: true, users: results || [] });
};

export const onRequestPatch: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  if (user.role !== "admin") return jsonResponse({ ok: false, error: "Forbidden" }, 403);

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const targetId = String(body.id || "").trim();
    const role = String(body.role || "").trim();

    if (!targetId || (role !== "user" && role !== "admin")) {
      return jsonResponse({ ok: false, error: "Valid user id and role are required." }, 400);
    }
    if (targetId === user.id && role !== "admin") {
      return jsonResponse({ ok: false, error: "You cannot remove your own admin access." }, 400);
    }

    await env.DB.prepare("UPDATE users SET role = ? WHERE id = ?")
      .bind(role, targetId)
      .run();

    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ ok: false, error: "Failed to update user role." }, 500);
  }
};
