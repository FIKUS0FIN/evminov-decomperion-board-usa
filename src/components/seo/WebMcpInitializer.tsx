"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  calculateHsaPrice,
  calculateTractionPhysics,
  recommendBoardModel,
  recommendIncline,
  ConditionGoal,
} from "@/lib/physics";
import { PRODUCTS } from "@/data/products";

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
          "Recommend the optimal Evminov Spine Decompression Board model, incline angle, and HSA/FSA net estimate based on user weight, height, and goal.",
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
          const goal = (String(args.goal || "posture") as ConditionGoal);
          const portable = Boolean(args.needsPortability);
          const rec = recommendBoardModel(weight, height, portable);
          const incline = recommendIncline(goal);
          const physics = calculateTractionPhysics(weight, incline.startAngle);
          const product = PRODUCTS.find((p) => p.slug === rec.slug) || PRODUCTS[0];
          return {
            recommendedModel: product.name,
            slug: product.slug,
            directPriceUsd: product.directPriceUsd,
            expressPriceUsd: product.expressPriceUsd,
            estimatedHsaNetUsd: calculateHsaPrice(product.directPriceUsd),
            recommendedStartAngleDeg: incline.startAngle,
            netTractionLbs: physics.netTractionLbs,
            orderUrl: `${SITE_CONFIG.canonicalOrigin}/order/?product=${product.slug}&angle=${incline.startAngle}&step=2#order-form`,
          };
        },
      },
      {
        name: "list_evminov_catalog",
        description:
          "List all 6 official Evminov spine decompression boards and no-drill renter stand with US pricing and specifications.",
        inputSchema: { type: "object", properties: {} },
        execute: () =>
          PRODUCTS.map((p) => ({
            slug: p.slug,
            sku: p.sku,
            name: p.name,
            directPriceUsd: p.directPriceUsd,
            expressPriceUsd: p.expressPriceUsd,
            weightLimitLbs: p.weightLimitLbs,
            url: `${SITE_CONFIG.canonicalOrigin}/products/${p.slug}/`,
          })),
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
          tooldescription:
            "Reserve an Evminov Spine Decompression Board or request an itemized HSA/FSA invoice from Evminov Spine Systems USA.",
        } as Record<string, string>)}
      >
        <input
          name="product"
          defaultValue="standard-pine-board"
          {...({
            toolparamdescription:
              "Product slug: standard-pine-board, 2-piece-folding-board, 3-piece-travel-board, wide-heavy-duty-board, select-alder-board, or free-standing-stand",
          } as Record<string, string>)}
        />
        <input
          name="shipping"
          defaultValue="express"
          {...({
            toolparamdescription:
              "Fulfillment mode: express (1-4 day Glendale CA warehouse) or direct (workshop delivery)",
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
          {...({ toolparamdescription: "Customer phone number" } as Record<string, string>)}
        />
        <input
          name="state"
          {...({ toolparamdescription: "US State or Country" } as Record<string, string>)}
        />
      </form>
    </div>
  );
}
