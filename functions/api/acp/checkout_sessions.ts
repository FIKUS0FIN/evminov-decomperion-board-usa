import {
  getRegionalEdgeAccessories,
  getRegionalEdgeConfig,
  getRegionalEdgeProducts,
} from "../ask";

interface LegacyResolution {
  kind: "board" | "accessory";
  id: string;
  forcedWidth?: "standard" | "wide";
}

function resolveItemSlug(rawId: string): LegacyResolution {
  const id = (rawId || "").trim().toLowerCase();
  if (id === "standard-pine-board" || id === "ev-std-pine-1p" || id === "select-alder-board" || id === "ev-alder-ltd") {
    return { kind: "board", id: "2-piece-folding-board", forcedWidth: "standard" };
  }
  if (id === "wide-heavy-duty-board" || id === "ev-wide-330") {
    return { kind: "board", id: "3-piece-travel-board", forcedWidth: "wide" };
  }
  if (id === "free-standing-stand" || id === "ev-stand-rent" || id === "ladder-stand-4pc" || id === "ev-stand-4pc-123") {
    return { kind: "accessory", id: "ladder-stand-4pc" };
  }
  if (
    [
      "mounting-hooks",
      "ev-hooks-ladder",
      "carry-case-2bag-3pc",
      "ev-case-2bag-3pc",
      "carry-case-1bag-2pc",
      "ev-case-1bag-2pc",
      "wall-panel-standard-2pc",
      "ev-wall-panel-26",
      "wall-panel-wide-2pc",
      "ev-wall-panel-30",
    ].includes(id)
  ) {
    return { kind: "accessory", id };
  }
  return { kind: "board", id: rawId };
}

export const onRequestGet: PagesFunction = async ({ request }) => {
  const cfg = getRegionalEdgeConfig(new URL(request.url).origin);
  const products = getRegionalEdgeProducts(cfg.origin);
  const accessories = getRegionalEdgeAccessories(cfg.origin);

  const boardItems = products.flatMap((p) => [
    {
      id: p.slug,
      sku: p.sku,
      variant: "standard-26cm",
      name: `${p.name} — Standard 26 cm`,
      direct_amount_cents: p.directPrice * 100,
      express_amount_cents: p.expressPrice * 100,
      url: p.url,
      checkout_url: `${cfg.origin}/order/?product=${p.slug}&width=standard&step=1#order-form`,
    },
    {
      id: `${p.slug}:wide`,
      sku: `${p.sku}-30CM`,
      variant: "wide-30cm",
      name: `${p.name} — Reinforced Wide 30 cm`,
      direct_amount_cents: p.wideDirectPrice * 100,
      express_amount_cents: p.wideExpressPrice * 100,
      url: p.url,
      checkout_url: `${cfg.origin}/order/?product=${p.slug}&width=wide&step=1#order-form`,
    },
  ]);

  const accessoryItems = accessories.map((a) => ({
    id: a.id,
    sku: a.sku,
    variant: "accessory",
    name: a.name,
    direct_amount_cents: a.price * 100,
    express_amount_cents: a.price * 100,
    url: `${cfg.origin}/order/?accessories=${a.id}&step=1#order-form`,
    checkout_url: `${cfg.origin}/order/?accessories=${a.id}&step=1#order-form`,
  }));

  return new Response(
    JSON.stringify(
      {
        protocol: "acp",
        version: "2026-01-30",
        merchant: cfg.brand,
        region: cfg.region,
        currency: cfg.currency.toLowerCase(),
        items: [...boardItems, ...accessoryItems],
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
    const cfg = getRegionalEdgeConfig(new URL(request.url).origin);
    const products = getRegionalEdgeProducts(cfg.origin);
    const accessories = getRegionalEdgeAccessories(cfg.origin);

    const body = (await request.json()) as {
      items?: Array<{
        id: string;
        width?: "standard" | "wide";
        quantity?: number;
        shipping?: "direct" | "express";
      }>;
      buyer?: { name?: string; email?: string; state?: string; province?: string };
    };

    const requested =
      Array.isArray(body.items) && body.items.length > 0
        ? body.items
        : [{ id: "3-piece-travel-board", width: "standard" as const, quantity: 1, shipping: "direct" as const }];

    let primaryBoardSlug = "3-piece-travel-board";
    let primaryWidth: "standard" | "wide" = "standard";
    let primaryShipping: "direct" | "express" = "direct";
    let boardFound = false;
    const selectedAccessoryIds: string[] = [];

    const lineItems = requested.map((item) => {
      const [rawBaseId, rawVariant] = String(item.id || "").split(":");
      const resolved = resolveItemSlug(rawBaseId);
      const qty = Math.max(1, Math.min(10, Number(item.quantity || 1)));

      if (resolved.kind === "accessory") {
        const acc =
          accessories.find(
            (a) =>
              a.id.toLowerCase() === resolved.id.toLowerCase() ||
              a.sku.toLowerCase() === resolved.id.toLowerCase()
          ) || accessories[0];
        selectedAccessoryIds.push(acc.id);
        return {
          id: acc.id,
          sku: acc.sku,
          name: acc.name,
          quantity: qty,
          shipping: "direct" as const,
          unit_amount_cents: acc.price * 100,
          subtotal_cents: acc.price * qty * 100,
        };
      }

      const width: "standard" | "wide" =
        item.width === "wide" || rawVariant === "wide" || resolved.forcedWidth === "wide"
          ? "wide"
          : "standard";
      const found =
        products.find(
          (p) =>
            p.slug.toLowerCase() === resolved.id.toLowerCase() ||
            p.sku.toLowerCase() === resolved.id.toLowerCase()
        ) || products[0];

      const shipping = item.shipping === "express" ? "express" : "direct";
      const unitPrice =
        width === "wide"
          ? shipping === "express"
            ? found.wideExpressPrice
            : found.wideDirectPrice
          : shipping === "express"
          ? found.expressPrice
          : found.directPrice;

      if (!boardFound) {
        boardFound = true;
        primaryBoardSlug = found.slug;
        primaryWidth = width;
        primaryShipping = shipping;
      }

      return {
        id: found.slug,
        sku: width === "wide" ? `${found.sku}-30CM` : found.sku,
        name: `${found.name} (${width === "wide" ? "Reinforced Wide 30 cm" : "Standard 26 cm"})`,
        width,
        quantity: qty,
        shipping,
        unit_amount_cents: unitPrice * 100,
        subtotal_cents: unitPrice * qty * 100,
      };
    });

    const totalCents = lineItems.reduce((sum, li) => sum + li.subtotal_cents, 0);
    const sessionId = `cs_evminov_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;

    const params = new URLSearchParams({
      product: primaryBoardSlug,
      width: primaryWidth,
      shipping: primaryShipping,
      step: "2",
    });
    if (selectedAccessoryIds.length > 0) {
      params.set("accessories", Array.from(new Set(selectedAccessoryIds)).join(","));
    }
    const regionState = body.buyer?.state || body.buyer?.province;
    if (regionState) params.set("state", regionState);

    return new Response(
      JSON.stringify(
        {
          id: sessionId,
          status: "ready_for_reservation",
          region: cfg.region,
          currency: cfg.currency.toLowerCase(),
          line_items: lineItems,
          totals: {
            subtotal_cents: totalCents,
            estimated_hsa_fsa_net_cents: Math.round(totalCents * 0.7),
          },
          checkout_url: `${cfg.origin}/order/?${params.toString()}#order-form`,
          merchant_support: {
            whatsapp: cfg.whatsapp,
            phone: cfg.phone,
            email: cfg.email,
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
