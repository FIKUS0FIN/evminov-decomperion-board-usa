import { AuthEnv, getSessionUser, jsonResponse } from "../../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  const { results } = await env.DB.prepare(
    `SELECT
       id, order_ref, mode, status,
       customer_name, customer_email, customer_phone,
       product_slug, product_name, finish, shipping_method,
       include_stand, include_hsa_doc, total_usd,
       state_or_country, address, customer_notes,
       tracking_number, locale, created_at, updated_at
     FROM orders
     WHERE user_id = ? OR lower(customer_email) = ?
     ORDER BY created_at DESC
     LIMIT 100`
  )
    .bind(user.id, user.email.toLowerCase())
    .all();

  return jsonResponse({ ok: true, orders: results || [] });
};
