import { AuthEnv, getSessionUser, jsonResponse, normalizeEmail } from "../../_lib/auth";
import { escapeHtml } from "../submit-order";

const VALID_STATUSES = new Set([
  "new",
  "operator_review",
  "confirmed",
  "paid",
  "in_production",
  "shipped",
  "delivered",
  "cancelled",
]);

const STATUS_LABELS: Record<string, string> = {
  new: "Order Received",
  operator_review: "In Review by Evminov Spine Med Specialist",
  confirmed: "Order Confirmed by Evminov Spine Med Operator",
  paid: "Payment Verified",
  in_production: "Preparing & Quality Check",
  shipped: "Shipped — In Transit",
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

  const [ordersRes, summaryRes, eventsRes] = await Promise.all([
    env.DB.prepare(sql).bind(...binds).all<Record<string, unknown>>(),
    env.DB.prepare(
      `SELECT
         status,
         COUNT(*) as count,
         COALESCE(SUM(CASE WHEN mode = 'order_reservation' THEN total_usd ELSE 0 END), 0) as revenue
       FROM orders
       GROUP BY status`
    ).all<{ status: string; count: number; revenue: number }>(),
    env.DB.prepare(
      `SELECT id, order_id, event_type, status, message, author_role, author_name, created_at
       FROM order_events
       ORDER BY created_at ASC`
    ).all<Record<string, unknown>>(),
  ]);

  const eventsByOrder: Record<string, Record<string, unknown>[]> = {};
  for (const ev of eventsRes.results || []) {
    const oid = String(ev.order_id || "");
    if (!eventsByOrder[oid]) eventsByOrder[oid] = [];
    eventsByOrder[oid].push(ev);
  }

  const orders = (ordersRes.results || []).map((o) => ({
    ...o,
    events: eventsByOrder[String(o.id)] || [],
  }));

  return jsonResponse({
    ok: true,
    orders,
    summary: summaryRes.results || [],
  });
};

// Manual Phone / WhatsApp Order Creation from Admin Dashboard
export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  if (user.role !== "admin") return jsonResponse({ ok: false, error: "Forbidden" }, 403);

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const customerName = String(body.customer_name || "").trim().slice(0, 120);
    const customerEmail = normalizeEmail(body.customer_email);
    const customerPhone = String(body.customer_phone || "").trim().slice(0, 40);
    const productSlug = String(body.product_slug || "2-piece-folding-board").slice(0, 80);
    const productName = String(body.product_name || productSlug).slice(0, 140);
    const finish = String(body.finish || "Light Natural Pine").slice(0, 60);
    const shippingMethod = String(body.shipping_method || "express").slice(0, 20);
    const includeStand = Boolean(body.include_stand);
    const includeHsaDoc = body.include_hsa_doc !== false;
    const totalUsd = Number(body.total_usd || 0);
    const stateOrCountry = String(body.state_or_country || "US").slice(0, 80);
    const address = String(body.address || "").trim().slice(0, 220);
    const adminNotes = String(body.admin_notes || "").trim().slice(0, 1000);
    const status = VALID_STATUSES.has(String(body.status || ""))
      ? String(body.status)
      : "confirmed";
    const notifyCustomer = Boolean(body.notifyCustomer);

    if (!customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      return jsonResponse({ ok: false, error: "Valid customer email is required." }, 400);
    }

    const existingUser = await env.DB.prepare(
      "SELECT id FROM users WHERE lower(email) = ? LIMIT 1"
    )
      .bind(customerEmail)
      .first<{ id: string }>();

    const orderId = crypto.randomUUID();
    const orderRef = `EV-${crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase()}`;
    const nowIso = new Date().toISOString();

    await env.DB.prepare(
      `INSERT INTO orders (
        id, order_ref, user_id, mode, status,
        customer_name, customer_email, customer_phone,
        product_slug, product_name, finish, shipping_method,
        include_stand, include_hsa_doc, total_usd,
        state_or_country, address, customer_notes, admin_notes, locale,
        created_at, updated_at
      ) VALUES (?, ?, ?, 'order_reservation', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Created by operator (Phone/WhatsApp)', ?, 'en', ?, ?)`
    )
      .bind(
        orderId,
        orderRef,
        existingUser?.id || null,
        status,
        customerName,
        customerEmail,
        customerPhone,
        productSlug,
        productName,
        finish,
        shippingMethod,
        includeStand ? 1 : 0,
        includeHsaDoc ? 1 : 0,
        totalUsd,
        stateOrCountry,
        address,
        adminNotes,
        nowIso,
        nowIso
      )
      .run();

    await env.DB.prepare(
      `INSERT INTO order_events (id, order_id, event_type, status, message, author_role, author_name, created_at)
       VALUES (?, ?, 'status_change', ?, ?, 'admin', ?, ?)`
    )
      .bind(
        crypto.randomUUID(),
        orderId,
        status,
        `Order ${orderRef} created by Evminov Spine Med operator.`,
        user.name || user.email,
        nowIso
      )
      .run();

    let emailSent = false;
    if (notifyCustomer && env.RESEND_API_KEY) {
      const threadId = `<order-${orderRef.toLowerCase()}@evminovusa.com>`;
      const htmlBody = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0b1f3a;color:#fff;padding:24px;">
            <h1 style="margin:0;font-size:20px;">EVMINOV SPINE SYSTEMS USA</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#34d399;">Reference: ${orderRef}</p>
          </div>
          <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6;">
            <p>Hello ${escapeHtml(customerName || "Valued Customer")},</p>
            <p>Your Evminov Spine Med order <strong>${orderRef}</strong> has been registered by our operator:</p>
            <ul>
              <li><strong>Model:</strong> ${escapeHtml(productName)} (${escapeHtml(finish)})</li>
              <li><strong>Status:</strong> ${escapeHtml(STATUS_LABELS[status] || status)}</li>
              ${totalUsd > 0 ? `<li><strong>Total:</strong> $${totalUsd} USD</li>` : ""}
              <li><strong>Destination:</strong> ${escapeHtml(`${stateOrCountry} ${address}`.trim())}</li>
            </ul>
            <p>Track your order live in your <a href="https://evminovusa.com/portal/" style="color:#0f766e;font-weight:bold;">Patient Portal</a>.</p>
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
          cc: ["orders@evminovusa.com"],
          reply_to: "orders@evminovusa.com",
          subject: `Evminov Reservation Confirmed — ${orderRef}`,
          headers: { References: threadId },
          html: htmlBody,
        }),
      });
      emailSent = resendRes.ok;
    }

    return jsonResponse({ ok: true, orderRef, id: orderId, emailSent }, 201);
  } catch {
    return jsonResponse({ ok: false, error: "Failed to create order." }, 500);
  }
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
    const customerMessage = String(body.customer_message ?? "").trim().slice(0, 2000);
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

    const prevStatus = String(existing.status || "new");
    const nextStatus = status || prevStatus;
    const nextName =
      body.customer_name !== undefined
        ? String(body.customer_name).trim().slice(0, 120)
        : String(existing.customer_name || "");
    const nextPhone =
      body.customer_phone !== undefined
        ? String(body.customer_phone).trim().slice(0, 40)
        : String(existing.customer_phone || "");
    const nextState =
      body.state_or_country !== undefined
        ? String(body.state_or_country).trim().slice(0, 80)
        : String(existing.state_or_country || "");
    const nextAddress =
      body.address !== undefined
        ? String(body.address).trim().slice(0, 220)
        : String(existing.address || "");
    const nextTotal =
      body.total_usd !== undefined && Number.isFinite(Number(body.total_usd))
        ? Number(body.total_usd)
        : Number(existing.total_usd || 0);

    const nowIso = new Date().toISOString();

    await env.DB.prepare(
      `UPDATE orders
       SET status = ?, tracking_number = ?, admin_notes = ?,
           customer_name = ?, customer_phone = ?, state_or_country = ?,
           address = ?, total_usd = ?, updated_at = ?
       WHERE id = ?`
    )
      .bind(
        nextStatus,
        trackingNumber,
        adminNotes,
        nextName,
        nextPhone,
        nextState,
        nextAddress,
        nextTotal,
        nowIso,
        orderId
      )
      .run();

    // Record timeline event when status changed or operator sent a customer message
    if (nextStatus !== prevStatus || customerMessage) {
      const eventMessage =
        customerMessage ||
        `Status updated to: ${STATUS_LABELS[nextStatus] || nextStatus}${
          trackingNumber ? ` (Tracking: ${trackingNumber})` : ""
        }`;

      await env.DB.prepare(
        `INSERT INTO order_events (id, order_id, event_type, status, message, author_role, author_name, created_at)
         VALUES (?, ?, ?, ?, ?, 'admin', ?, ?)`
      )
        .bind(
          crypto.randomUUID(),
          orderId,
          customerMessage ? "operator_message" : "status_change",
          nextStatus,
          eventMessage,
          user.name || "Evminov Spine Med Operator",
          nowIso
        )
        .run();
    }

    let emailSent = false;
    const customerEmail = String(existing.customer_email || "");
    if (notifyCustomer && env.RESEND_API_KEY && customerEmail) {
      const orderRef = String(existing.order_ref || "");
      const mode = String(existing.mode || "order_reservation");
      const customerName = escapeHtml(nextName || "Valued Customer");
      const productName = escapeHtml(String(existing.product_name || "Evminov Board"));
      const statusLabel = escapeHtml(STATUS_LABELS[nextStatus] || nextStatus);
      const safeTracking = escapeHtml(trackingNumber);
      const safeCustomerMessage = escapeHtml(customerMessage).replace(/\n/g, "<br/>");

      const originalSubject =
        mode === "protocol_lead"
          ? `Your Evminov Custom Spine Angle Plan (${orderRef})`
          : mode === "warranty_registration"
          ? `Evminov 10-Year Structural Warranty Registered (${orderRef})`
          : `Evminov Reservation Confirmed — ${orderRef}`;
      const threadId = `<order-${orderRef.toLowerCase()}@evminovusa.com>`;

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
            ${
              safeCustomerMessage
                ? `<div style="background:#f8fafc;border-left:4px solid #0f766e;border-radius:6px;padding:14px 16px;margin:16px 0;">
                    <div style="font-size:12px;text-transform:uppercase;color:#0f766e;font-weight:700;margin-bottom:6px;">Message from Evminov Spine Med Operator</div>
                    <div style="font-size:14px;color:#0f172a;line-height:1.6;">${safeCustomerMessage}</div>
                  </div>`
                : ""
            }
            <p>Track your live order timeline and reply anytime in your <a href="https://evminovusa.com/portal/" style="color:#0f766e;font-weight:bold;">Patient Portal</a>, or simply reply to this email.</p>
            <p style="font-size:12px;color:#64748b;">Evminov Spine Systems USA • 4525 San Fernando Rd, Unit H, Glendale, CA 91204 • +1 (747) 306-0140 • support@evminovusa.com</p>
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
          cc: ["orders@evminovusa.com"],
          reply_to: "orders@evminovusa.com",
          subject: `Re: ${originalSubject}`,
          headers: {
            "In-Reply-To": threadId,
            References: threadId,
          },
          html: htmlBody,
        }),
      });
      emailSent = resendRes.ok;
    }

    const [updated, eventsRes] = await Promise.all([
      env.DB.prepare("SELECT * FROM orders WHERE id = ? LIMIT 1").bind(orderId).first<Record<string, unknown>>(),
      env.DB.prepare(
        "SELECT id, order_id, event_type, status, message, author_role, author_name, created_at FROM order_events WHERE order_id = ? ORDER BY created_at ASC"
      )
        .bind(orderId)
        .all<Record<string, unknown>>(),
    ]);

    return jsonResponse({
      ok: true,
      order: updated ? { ...updated, events: eventsRes.results || [] } : null,
      emailSent,
    });
  } catch {
    return jsonResponse({ ok: false, error: "Failed to update order." }, 500);
  }
};
