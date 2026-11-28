import { AuthEnv, getSessionUser, normalizeEmail } from "../_lib/auth";

export function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      payload = (await request.json()) as Record<string, unknown>;
    } else if (contentType.includes("form")) {
      const fd = await request.formData();
      fd.forEach((v, k) => {
        if (typeof v === "string") payload[k] = v;
      });
    }

    const mode = String(payload.mode || "order_reservation").slice(0, 40);
    const sessionUser = await getSessionUser(request, env);

    // Mandatory login before placing an order reservation
    if (mode === "order_reservation" && env.DB && !sessionUser) {
      return new Response(
        JSON.stringify({
          ok: false,
          code: "AUTH_REQUIRED",
          error: "Please sign in with Google or Email & Password before placing an order.",
        }),
        { status: 401, headers: { "Content-Type": "application/json; charset=utf-8" } }
      );
    }

    const name = String(payload.name || sessionUser?.name || "").trim().slice(0, 120);
    const email = normalizeEmail(payload.email || sessionUser?.email || "");
    const phone = String(payload.phone || sessionUser?.phone || "").trim().slice(0, 40);
    const product = String(payload.product || "standard-pine-board").slice(0, 80);
    const productName = String(payload.productName || product).slice(0, 140);
    const finish = String(payload.finish || "Light Natural Pine").slice(0, 60);
    const shipping = String(payload.shipping || "express").slice(0, 20);
    const includeStand = Boolean(payload.includeStand);
    const includeHsaDoc = payload.includeHsaDoc !== false;
    const totalUsd = Number(payload.totalUsd || 0);
    const stateOrCountry = String(payload.stateOrCountry || payload.state || "US").slice(0, 80);
    const address = String(payload.address || "").trim().slice(0, 220);
    const notes = String(payload.notes || "").trim().slice(0, 1000);
    const lang = String(payload.lang || "en").slice(0, 10);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Valid email address is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const orderId = crypto.randomUUID();
    const orderRef = `EV-${crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase()}`;
    const nowIso = new Date().toISOString();

    // Persist order in Cloudflare D1
    if (env.DB) {
      await env.DB.prepare(
        `INSERT INTO orders (
          id, order_ref, user_id, mode, status,
          customer_name, customer_email, customer_phone,
          product_slug, product_name, finish, shipping_method,
          include_stand, include_hsa_doc, total_usd,
          state_or_country, address, customer_notes, locale,
          created_at, updated_at
        ) VALUES (?, ?, ?, ?, 'new', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          orderId,
          orderRef,
          sessionUser?.id || null,
          mode,
          name,
          email,
          phone,
          product,
          productName,
          finish,
          shipping,
          includeStand ? 1 : 0,
          includeHsaDoc ? 1 : 0,
          totalUsd,
          stateOrCountry,
          address,
          notes,
          lang,
          nowIso,
          nowIso
        )
        .run();

      // Log initial order received event for timeline
      await env.DB.prepare(
        `INSERT INTO order_events (id, order_id, event_type, status, message, author_role, author_name, created_at)
         VALUES (?, ?, 'status_change', 'new', ?, 'system', 'Evminov Spine Med', ?)`
      )
        .bind(
          crypto.randomUUID(),
          orderId,
          `Order ${orderRef} received (${productName}, ${finish}).`,
          nowIso
        )
        .run();

      // Keep user's phone/name/address enriched on their profile
      if (sessionUser) {
        await env.DB.prepare(
          `UPDATE users
           SET name = COALESCE(NULLIF(?, ''), name),
               phone = COALESCE(NULLIF(?, ''), phone),
               shipping_state = COALESCE(NULLIF(shipping_state, ''), ?),
               shipping_address = COALESCE(NULLIF(shipping_address, ''), ?)
           WHERE id = ?`
        )
          .bind(name, phone, stateOrCountry, address, sessionUser.id)
          .run();
      }
    }

    // Optional live Stripe Checkout Session creation once STRIPE_SECRET_KEY is configured in Cloudflare
    let checkoutUrl: string | undefined;
    if (
      env.STRIPE_SECRET_KEY &&
      mode === "order_reservation" &&
      totalUsd >= 100 &&
      totalUsd <= 5000
    ) {
      const stripeBody = new URLSearchParams({
        mode: "payment",
        customer_email: email,
        success_url: `https://evminovusa.com/welcome/?order=${orderRef}`,
        cancel_url: `https://evminovusa.com/order/?product=${encodeURIComponent(product)}&step=3`,
        "line_items[0][price_data][currency]": "usd",
        "line_items[0][price_data][product_data][name]": `${productName} (${finish}, ${shipping})`,
        "line_items[0][price_data][unit_amount]": String(Math.round(totalUsd * 100)),
        "line_items[0][quantity]": "1",
        "metadata[order_ref]": orderRef,
        "metadata[hsa_receipt]": String(includeHsaDoc),
      });

      const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: stripeBody.toString(),
      });
      if (stripeRes.ok) {
        const stripeJson = (await stripeRes.json()) as { url?: string };
        checkoutUrl = stripeJson.url;
      }
    }

    const tasks: Array<Promise<unknown>> = [];

    // 1. Instant Telegram Operations Alert
    if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      const tgText = [
        mode === "protocol_lead"
          ? `📐 New Evminov Calculator Lead (${orderRef})`
          : mode === "warranty_registration"
          ? `🛡️ New 10-Year Warranty Registration (${orderRef})`
          : `🌲 New Evminov Board Reservation (${orderRef})`,
        `Product: ${productName} (${finish})`,
        `Shipping: ${shipping}${includeStand ? " + Free-Standing Stand" : ""}`,
        totalUsd > 0 ? `Est. Total: $${totalUsd} USD` : "",
        `HSA/FSA Receipt: ${includeHsaDoc ? "Yes" : "No"}`,
        `Name: ${name || "N/A"}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        `Destination: ${stateOrCountry}${address ? ` — ${address}` : ""}`,
        notes ? `Notes: ${notes}` : "",
        `Locale: ${lang}`,
        `Admin: https://evminovusa.com/admin/`,
      ]
        .filter(Boolean)
        .join("\n");

      tasks.push(
        fetch(
          `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: env.TELEGRAM_CHAT_ID,
              text: tgText,
            }),
          }
        )
      );
    }

    // 2. Branded HTML Emails via Resend (Customer confirmation + Operations admin copy)
    if (env.RESEND_API_KEY) {
      const safeName = escapeHtml(name || "Valued Customer");
      const safeEmail = escapeHtml(email);
      const safePhone = escapeHtml(phone || "Not provided");
      const safeProduct = escapeHtml(productName);
      const safeFinish = escapeHtml(finish);
      const safeShipping = escapeHtml(shipping);
      const safeStateOrCountry = escapeHtml(stateOrCountry || "Not provided");
      const safeAddress = escapeHtml(address || "Not provided");
      const safeLang = escapeHtml(lang);

      // Separate customer-typed notes from internal attribution suffix
      const attrSplitIdx = notes.indexOf("Attribution:");
      const rawCustomerNotes =
        attrSplitIdx === -1
          ? notes.trim()
          : notes.slice(0, attrSplitIdx).replace(/\|\s*$/, "").trim();
      const rawAttribution =
        attrSplitIdx === -1 ? "" : notes.slice(attrSplitIdx).trim();

      const safeCustomerNotes = escapeHtml(rawCustomerNotes);
      const safeAttribution = escapeHtml(rawAttribution);

      const subjectBase =
        mode === "protocol_lead"
          ? `Your Evminov Custom Spine Angle Plan (${orderRef})`
          : mode === "warranty_registration"
          ? `Evminov 10-Year Structural Warranty Registered (${orderRef})`
          : `Evminov Reservation Confirmed — ${orderRef}`;

      const detailsRowsHtml = `
        <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:13px;">
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;width:38%;"><strong>Full Name</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeName}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Email</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeEmail}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Phone</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safePhone}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>State / Country</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeStateOrCountry}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Shipping Address</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeAddress}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Model</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeProduct} (${safeFinish})</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Fulfillment</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeShipping}${includeStand ? " + Free-Standing Stand" : ""}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>HSA/FSA Receipt</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${includeHsaDoc ? "Yes (Itemized)" : "No"}</td></tr>
          ${totalUsd > 0 ? `<tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Estimated Total</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f766e;font-weight:700;">$${totalUsd} USD</td></tr>` : ""}
          ${safeCustomerNotes ? `<tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Customer Notes</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeCustomerNotes}</td></tr>` : ""}
        </table>
      `;

      const customerHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0b1f3a;color:#fff;padding:24px;">
            <h1 style="margin:0;font-size:20px;">EVMINOV SPINE SYSTEMS USA</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#34d399;">Reference: ${orderRef}</p>
          </div>
          <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6;">
            <p>Hello ${safeName},</p>
            <p>Thank you for contacting Evminov Spine Systems. Our Glendale, California team has received your request with the following details:</p>
            ${detailsRowsHtml}
            <p>Track your order status anytime in your <a href="https://evminovusa.com/portal/" style="color:#0f766e;font-weight:bold;">Patient Portal</a>. We will follow up within 1 business day with shipping confirmation and your itemized invoice${includeHsaDoc ? " (HSA/FSA ready)" : ""}.</p>
            <p style="font-size:12px;color:#64748b;">Glendale Operations Hub: 4525 San Fernando Rd, Unit H, Glendale, CA 91204 • +1 (747) 306-0140 • support@evminovusa.com</p>
          </div>
        </div>
      `;

      const adminHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0b1f3a;color:#fff;padding:24px;">
            <h1 style="margin:0;font-size:20px;">NEW ORDER / LEAD — ${orderRef}</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#34d399;">Mode: ${escapeHtml(mode)} • Locale: ${safeLang}</p>
          </div>
          <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6;">
            ${detailsRowsHtml}
            ${safeAttribution ? `<p style="font-size:12px;color:#64748b;"><strong>Traffic Source:</strong> ${safeAttribution}</p>` : ""}
            <p style="margin-top:18px;">
              <a href="https://evminovusa.com/admin/" style="display:inline-block;background:#0f766e;color:#fff;text-decoration:none;font-weight:700;padding:10px 18px;border-radius:8px;">Open in Admin Dashboard</a>
            </p>
            <p style="font-size:12px;color:#64748b;">Hit Reply in Gmail to respond directly to ${safeEmail}.</p>
          </div>
        </div>
      `;

      const threadId = `<order-${orderRef.toLowerCase()}@evminovusa.com>`;

      tasks.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Evminov Spine Systems <orders@evminovusa.com>",
            to: [email],
            cc: ["orders@evminovusa.com"],
            reply_to: "orders@evminovusa.com",
            subject: subjectBase,
            headers: {
              References: threadId,
            },
            html: customerHtml,
          }),
        })
      );

      tasks.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Evminov Orders <orders@evminovusa.com>",
            to: ["orders@evminovusa.com"],
            reply_to: email,
            subject: `[Admin] ${subjectBase} — ${name || email}`,
            html: adminHtml,
          }),
        })
      );
    }

    await Promise.allSettled(tasks);

    return new Response(
      JSON.stringify({
        ok: true,
        orderRef,
        checkoutUrl,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Order submission error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
