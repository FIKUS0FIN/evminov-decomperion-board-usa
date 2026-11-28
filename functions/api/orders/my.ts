import { AuthEnv, getSessionUser, jsonResponse } from "../../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) {
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  const { results: orders } = await env.DB.prepare(
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
    .all<Record<string, unknown>>();

  const orderList = orders || [];
  const eventsByOrder: Record<string, Record<string, unknown>[]> = {};

  if (orderList.length > 0) {
    const { results: events } = await env.DB.prepare(
      `SELECT e.id, e.order_id, e.event_type, e.status, e.message, e.author_role, e.author_name, e.created_at
       FROM order_events e
       INNER JOIN orders o ON o.id = e.order_id
       WHERE o.user_id = ? OR lower(o.customer_email) = ?
       ORDER BY e.created_at ASC`
    )
      .bind(user.id, user.email.toLowerCase())
      .all<Record<string, unknown>>();

    for (const ev of events || []) {
      const oid = String(ev.order_id || "");
      if (!eventsByOrder[oid]) eventsByOrder[oid] = [];
      eventsByOrder[oid].push(ev);
    }
  }

  const enriched = orderList.map((o) => ({
    ...o,
    events: eventsByOrder[String(o.id)] || [],
  }));

  return jsonResponse({ ok: true, orders: enriched });
};
