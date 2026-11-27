import { AuthEnv, getSessionUser, jsonResponse } from "../../_lib/auth";
import { escapeHtml } from "../submit-order";

const VALID_STATUSES = new Set([
  "new",
  "confirmed",
  "paid",
  "in_production",
  "shipped",
  "delivered",
  "cancelled",
]);

const STATUS_LABELS: Record<string, string> = {
  new: "New Reservation",
  confirmed: "Confirmed by Glendale Hub",
  paid: "Payment Received",
  in_production: "In Workshop / Preparing Dispatch",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  if (user.role !== "admin") return jsonResponse({ ok: false, error: "Forbidden" }, 403);

  const url = new URL(request.url);
  const statusFilter = (url.searchParams.get("status") || "").trim();
  const query = (url.searchParams.get("q") || "").trim().toLowerCase();

  let sql = `
    SELECT
      o.id, o.order_ref, o.user_id, o.mode, o.status,
      o.customer_name, o.customer_email, o.customer_phone,
      o.product_slug, o.product_name, o.finish, o.shipping_method,
      o.include_stand, o.include_hsa_doc, o.total_usd,
      o.state_or_country, o.address, o.customer_notes,
      o.tracking_number, o.admin_notes, o.locale,
      o.created_at, o.updated_at
    FROM orders o
    WHERE 1=1
  `;
  const binds: unknown[] = [];

  if (statusFilter && VALID_STATUSES.has(statusFilter)) {
    sql += " AND o.status = ?";
    binds.push(statusFilter);
  }
  if (query) {
    sql += ` AND (
      lower(o.order_ref) LIKE ? OR
      lower(o.customer_email) LIKE ? OR
      lower(o.customer_name) LIKE ? OR
      lower(o.customer_phone) LIKE ? OR
      lower(o.product_name) LIKE ? OR
      lower(o.tracking_number) LIKE ?
    )`;
    const pattern = `%${query}%`;
    binds.push(pattern, pattern, pattern, pattern, pattern, pattern);
  }

  sql += " ORDER BY o.created_at DESC LIMIT 250";

  const ordersRes = await env.DB.prepare(sql).bind(...binds).all();

  const summaryRes = await env.DB.prepare(
    `SELECT
       status,
       COUNT(*) as count,
       COALESCE(SUM(CASE WHEN mode = 'order_reservation' THEN total_usd ELSE 0 END), 0) as revenue
     FROM orders
     GROUP BY status`
  ).all<{ status: string; count: number; revenue: number }>();

  return jsonResponse({
    ok: true,
    orders: ordersRes.results || [],
    summary: summaryRes.results || [],
  });
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
    const orderId = String(body.id || "").trim();
    const status = String(body.status || "").trim();
    const trackingNumber = String(body.tracking_number ?? "").trim().slice(0, 120);
    const adminNotes = String(body.admin_notes ?? "").trim().slice(0, 1000);
    const notifyCustomer = Boolean(body.notifyCustomer);

    if (!orderId) {
      return jsonResponse({ ok: false, error: "Order id is required." }, 400);
    }
    if (status && !VALID_STATUSES.has(status)) {
      return jsonResponse({ ok: false, error: "Invalid order status." }, 400);
    }

    const existing = await env.DB.prepare(
      "SELECT * FROM orders WHERE id = ? LIMIT 1"
    )
      .bind(orderId)
      .first<Record<string, unknown>>();

    if (!existing) {
      return jsonResponse({ ok: false, error: "Order not found." }, 404);
    }

    const nextStatus = status || String(existing.status || "new");
    const nowIso = new Date().toISOString();

    await env.DB.prepare(
      `UPDATE orders
       SET status = ?, tracking_number = ?, admin_notes = ?, updated_at = ?
       WHERE id = ?`
    )
      .bind(nextStatus, trackingNumber, adminNotes, nowIso, orderId)
      .run();

    let emailSent = false;
    const customerEmail = String(existing.customer_email || "");
    if (notifyCustomer && env.RESEND_API_KEY && customerEmail) {
      const orderRef = String(existing.order_ref || "");
      const customerName = escapeHtml(String(existing.customer_name || "Valued Customer"));
      const productName = escapeHtml(String(existing.product_name || "Evminov Board"));
      const statusLabel = escapeHtml(STATUS_LABELS[nextStatus] || nextStatus);
      const safeTracking = escapeHtml(trackingNumber);

      const htmlBody = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0b1f3a;color:#fff;padding:24px;">
            <h1 style="margin:0;font-size:20px;">EVMINOV SPINE SYSTEMS USA</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#34d399;">Order Update • ${escapeHtml(orderRef)}</p>
          </div>
          <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6;">
            <p>Hello ${customerName},</p>
            <p>Your order <strong>${escapeHtml(orderRef)}</strong> (${productName}) has been updated:</p>
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px 16px;margin:16px 0;">
              <div style="font-size:12px;text-transform:uppercase;color:#15803d;font-weight:700;">Current Status</div>
              <div style="font-size:18px;font-weight:800;color:#0f172a;margin-top:4px;">${statusLabel}</div>
              ${safeTracking ? `<div style="margin-top:8px;font-size:13px;color:#334155;"><strong>Tracking Number:</strong> ${safeTracking}</div>` : ""}
            </div>
            <p>You can view your full order details and recovery guides anytime in your <a href="https://evminovusa.com/portal/" style="color:#0f766e;font-weight:bold;">Patient Portal</a>.</p>
            <p style="font-size:12px;color:#64748b;">Glendale Operations Hub: 4525 San Fernando Rd, Unit H, Glendale, CA 91204 • +1 (747) 306-0140 • support@evminovusa.com</p>
          </div>
        </div>
      `;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Evminov Spine Systems <orders@evminovusa.com>",
          to: [customerEmail],
          subject: `Order ${orderRef} Update: ${STATUS_LABELS[nextStatus] || nextStatus}`,
          html: htmlBody,
        }),
      });
      emailSent = resendRes.ok;
    }

    const updated = await env.DB.prepare("SELECT * FROM orders WHERE id = ? LIMIT 1")
      .bind(orderId)
      .first();

    return jsonResponse({ ok: true, order: updated, emailSent });
  } catch {
    return jsonResponse({ ok: false, error: "Failed to update order." }, 500);
  }
};
