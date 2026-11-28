import { EDGE_PRODUCTS } from "../ask";

export const onRequestGet: PagesFunction = async () => {
  return new Response(
    JSON.stringify(
      {
        protocol: "acp",
        version: "2026-01-30",
        merchant: "Evminov Spine Systems USA",
        currency: "usd",
        items: EDGE_PRODUCTS.map((p) => ({
          id: p.slug,
          sku: p.sku,
          name: p.name,
          direct_amount_cents: p.directPriceUsd * 100,
          express_amount_cents: p.expressPriceUsd * 100,
          url: p.url,
          checkout_url: p.orderUrl,
        })),
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const body = (await request.json()) as {
      items?: Array<{ id: string; quantity?: number; shipping?: "direct" | "express" }>;
      buyer?: { name?: string; email?: string; state?: string };
    };

    const requested = Array.isArray(body.items) && body.items.length > 0
      ? body.items
      : [{ id: "2-piece-folding-board", quantity: 1, shipping: "express" as const }];

    const lineItems = requested.map((item) => {
      const found =
        EDGE_PRODUCTS.find((p) => p.slug === item.id || p.sku === item.id) ||
        EDGE_PRODUCTS[0];
      const qty = Math.max(1, Math.min(10, Number(item.quantity || 1)));
      const shipping = item.shipping === "direct" ? "direct" : "express";
      const unitUsd = shipping === "express" ? found.expressPriceUsd : found.directPriceUsd;
      return {
        id: found.slug,
        sku: found.sku,
        name: found.name,
        quantity: qty,
        shipping,
        unit_amount_cents: unitUsd * 100,
        subtotal_cents: unitUsd * qty * 100,
      };
    });

    const totalCents = lineItems.reduce((sum, li) => sum + li.subtotal_cents, 0);
    const primarySlug = lineItems[0].id;
    const primaryShipping = lineItems[0].shipping;
    const sessionId = `cs_evminov_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;

    const params = new URLSearchParams({
      product: primarySlug,
      shipping: primaryShipping,
      step: "3",
    });
    if (body.buyer?.state) params.set("state", body.buyer.state);

    return new Response(
      JSON.stringify(
        {
          id: sessionId,
          status: "ready_for_reservation",
          currency: "usd",
          line_items: lineItems,
          totals: {
            subtotal_cents: totalCents,
            estimated_hsa_fsa_net_cents: Math.round(totalCents * 0.7),
          },
          checkout_url: `https://evminovusa.com/order/?${params.toString()}#order-form`,
          merchant_support: {
            phone: "+1 (747) 306-0140",
            email: "support@evminovusa.com",
          },
        },
        null,
        2
      ),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch {
    return new Response(JSON.stringify({ error: "Invalid ACP session payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }
};
