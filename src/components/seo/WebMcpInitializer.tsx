"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { IS_CANADA } from "@/lib/region-config";
import {
  calculateHsaPrice,
  calculateTractionPhysics,
  recommendBoardModel,
  recommendIncline,
  ConditionGoal,
} from "@/lib/physics";
import { getProductPrice, OFFICIAL_ACCESSORIES, PRODUCTS } from "@/data/products";

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<unknown> | unknown;
}

interface ModelContextApi {
  registerTool?: (tool: WebMcpTool) => void;
  provideContext?: (ctx: { tools: WebMcpTool[] }) => void;
}

declare global {
  interface Navigator {
    modelContext?: ModelContextApi;
  }
  interface Document {
    modelContext?: ModelContextApi;
  }
}

export function WebMcpInitializer() {
  useEffect(() => {
    const tools: WebMcpTool[] = [
      {
        name: "recommend_evminov_board",
        description:
          "Recommend the optimal 2026 demountable Evminov Spine Decompression Board model, panel width (26 cm Standard vs 30 cm Reinforced Wide), incline angle, and pre-tax HSA/FSA or Canadian benefits net estimate based on user weight, height, and goal.",
        inputSchema: {
          type: "object",
          properties: {
            weightLbs: { type: "number", description: "User body weight in lbs" },
            heightInches: { type: "number", description: "User height in inches" },
            goal: {
              type: "string",
              enum: ["hernia", "sciatica", "athlete", "pediatric", "posture"],
            },
            needsPortability: { type: "boolean" },
          },
          required: ["weightLbs", "heightInches"],
        },
        execute: (args) => {
          const weight = Number(args.weightLbs || 175);
          const height = Number(args.heightInches || 70);
          const goal = String(args.goal || "posture") as ConditionGoal;
          const portable = Boolean(args.needsPortability);
          const rec = recommendBoardModel(weight, height, portable);
          const incline = recommendIncline(goal);
          const physics = calculateTractionPhysics(weight, incline.startAngle);
          const product = PRODUCTS.find((p) => p.slug === rec.slug) || PRODUCTS[0];
          const directPrice = getProductPrice(product, rec.width, "direct");
          const expressPrice = getProductPrice(product, rec.width, "express");
          return {
            region: IS_CANADA ? "CA" : "US",
            currency: SITE_CONFIG.currency,
            recommendedModel: product.name,
            slug: product.slug,
            recommendedWidth: rec.width,
            directPrice,
            expressPrice,
            directPriceUsd: directPrice,
            expressPriceUsd: expressPrice,
            estimatedHsaNetUsd: calculateHsaPrice(directPrice),
            recommendedStartAngleDeg: incline.startAngle,
            netTractionLbs: physics.netTractionLbs,
            orderUrl: `${SITE_CONFIG.canonicalOrigin}/order/?product=${product.slug}&width=${rec.width}&angle=${incline.startAngle}&step=1#order-form`,
          };
        },
      },
      {
        name: "list_evminov_catalog",
        description:
          "List the official 2026 demountable Evminov folding boards (3-Piece 230-245 cm & 2-Piece Spine Toothbrush) in Standard 26 cm & Wide 30 cm widths plus all 6 official factory accessories with live regional pricing.",
        inputSchema: { type: "object", properties: {} },
        execute: () => ({
          region: IS_CANADA ? "CA" : "US",
          currency: SITE_CONFIG.currency,
          boards: PRODUCTS.map((p) => ({
            slug: p.slug,
            sku: p.sku,
            name: p.name,
            standardDirectPrice: p.directPriceUsd,
            standardExpressPrice: p.expressPriceUsd,
            wideDirectPrice: p.wideDirectPriceUsd,
            wideExpressPrice: p.wideExpressPriceUsd,
            weightLimitLbs: p.weightLimitLbs,
            wideWeightLimitLbs: p.wideWeightLimitLbs,
            url: `${SITE_CONFIG.canonicalOrigin}/products/${p.slug}/`,
          })),
          accessories: OFFICIAL_ACCESSORIES.map((a) => ({
            id: a.id,
            sku: a.sku,
            name: a.name.en,
            price: a.priceUsd,
            compatibleWith: a.compatibleWith,
          })),
        }),
      },
    ];

    const targets = [navigator.modelContext, document.modelContext].filter(
      Boolean
    ) as ModelContextApi[];

    for (const target of targets) {
      try {
        if (typeof target.registerTool === "function") {
          for (const tool of tools) target.registerTool(tool);
        } else if (typeof target.provideContext === "function") {
          target.provideContext({ tools });
        }
      } catch {
        // Ignore experimental browser WebMCP runtime differences
      }
    }
  }, []);

  // Declarative WebMCP forms discoverable in static HTML (verified by SEO gate)
  return (
    <div className="sr-only" aria-hidden="true">
      <form
        action="/api/submit-order"
        method="POST"
        {...({
          toolname: "reserve_evminov_board",
          tooldescription: `Reserve a demountable Evminov Spine Decompression Board or request an itemized HSA/FSA / Extended Health invoice from ${SITE_CONFIG.brandName}.`,
        } as Record<string, string>)}
      >
        <input
          name="product"
          defaultValue="3-piece-travel-board"
          {...({
            toolparamdescription:
              "Product slug: 3-piece-travel-board (full 230-245 cm 3-piece flagship) or 2-piece-folding-board (compact 2-piece Spine Toothbrush)",
          } as Record<string, string>)}
        />
        <input
          name="width"
          defaultValue="standard"
          {...({
            toolparamdescription:
              "Panel width: standard (26 cm, up to 100 kg / 220 lbs) or wide (30 cm reinforced, over 100 kg / up to 330 lbs)",
          } as Record<string, string>)}
        />
        <input
          name="shipping"
          defaultValue="direct"
          {...({
            toolparamdescription:
              "Fulfillment mode: direct (~2 weeks tracked international courier) or express (upcoming local warehouse priority waitlist)",
          } as Record<string, string>)}
        />
        <input
          name="name"
          {...({ toolparamdescription: "Customer full name" } as Record<string, string>)}
        />
        <input
          name="email"
          type="email"
          {...({ toolparamdescription: "Customer email address" } as Record<string, string>)}
        />
        <input
          name="phone"
          {...({ toolparamdescription: "Customer phone or WhatsApp number" } as Record<string, string>)}
        />
        <input
          name="state"
          {...({ toolparamdescription: "US State, Canadian Province, or Country" } as Record<string, string>)}
        />
      </form>
    </div>
  );
}
