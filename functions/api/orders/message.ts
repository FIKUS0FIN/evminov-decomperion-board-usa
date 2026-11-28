import { AuthEnv, getSessionUser, jsonResponse } from "../../_lib/auth";
import { escapeHtml } from "../submit-order";

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  if (!env.DB) {
    return jsonResponse({ ok: false, error: "Database not configured." }, 503);
  }

  const user = await getSessionUser(request, env);
  if (!user) return jsonResponse({ ok: false, error: "Unauthorized" }, 401);

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const orderId = String(body.orderId || "").trim();
    const message = String(body.message || "").trim().slice(0, 2000);

    if (!orderId || !message) {
      return jsonResponse({ ok: false, error: "Order ID and message are required." }, 400);
    }

    const order = await env.DB.prepare(
      `SELECT id, order_ref, mode, status, customer_name, customer_email, product_name
       FROM orders
       WHERE id = ? AND (user_id = ? OR lower(customer_email) = ?)
       LIMIT 1`
    )
      .bind(orderId, user.id, user.email.toLowerCase())
      .first<Record<string, unknown>>();

    if (!order) {
      return jsonResponse({ ok: false, error: "Order not found." }, 404);
    }

    const eventId = crypto.randomUUID();
    const nowIso = new Date().toISOString();
    const authorName = user.name || user.email;

    await env.DB.prepare(
      `INSERT INTO order_events (id, order_id, event_type, status, message, author_role, author_name, created_at)
       VALUES (?, ?, 'customer_message', ?, ?, 'customer', ?, ?)`
    )
      .bind(eventId, orderId, String(order.status || "new"), message, authorName, nowIso)
      .run();

    await env.DB.prepare("UPDATE orders SET updated_at = ? WHERE id = ?")
      .bind(nowIso, orderId)
      .run();

    // Forward customer message into the same Gmail order thread for operations
    if (env.RESEND_API_KEY) {
      const orderRef = String(order.order_ref || "");
      const mode = String(order.mode || "order_reservation");
      const originalSubject =
        mode === "protocol_lead"
          ? `Your Evminov Custom Spine Angle Plan (${orderRef})`
          : mode === "warranty_registration"
          ? `Evminov 10-Year Structural Warranty Registered (${orderRef})`
          : `Evminov Reservation Confirmed — ${orderRef}`;
      const threadId = `<order-${orderRef.toLowerCase()}@evminovusa.com>`;

      const safeMsg = escapeHtml(message).replace(/\n/g, "<br/>");
      const htmlBody = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0b1f3a;color:#fff;padding:20px 24px;">
            <h1 style="margin:0;font-size:18px;">Customer Message — ${escapeHtml(orderRef)}</h1>
            <p style="margin:4px 0 0;font-size:12px;color:#34d399;">From ${escapeHtml(authorName)} (${escapeHtml(user.email)}) via Patient Portal</p>
          </div>
          <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6;">
            <div style="background:#f8fafc;border-left:4px solid #0f766e;border-radius:6px;padding:14px 16px;">
              ${safeMsg}
            </div>
            <p style="margin-top:16px;">
              <a href="https://evminovusa.com/admin/" style="display:inline-block;background:#0f766e;color:#fff;text-decoration:none;font-weight:700;padding:10px 18px;border-radius:8px;">Reply in Admin Dashboard</a>
            </p>
          </div>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Evminov Patient Portal <orders@evminovusa.com>",
          to: ["orders@evminovusa.com"],
          reply_to: user.email,
          subject: `Re: ${originalSubject}`,
          headers: {
            "In-Reply-To": threadId,
            References: threadId,
          },
          html: htmlBody,
        }),
      }).catch(() => {});
    }

    return jsonResponse({
      ok: true,
      event: {
        id: eventId,
        order_id: orderId,
        event_type: "customer_message",
        status: String(order.status || "new"),
        message,
        author_role: "customer",
        author_name: authorName,
        created_at: nowIso,
      },
    });
  } catch {
    return jsonResponse({ ok: false, error: "Failed to send message." }, 500);
  }
};
