import { EDGE_PRODUCTS, queryEvminovKnowledge } from "./ask";

const SERVER_INFO = {
  name: "evminov-spine-systems-mcp",
  version: "1.0.0",
};

const TOOLS = [
  {
    name: "get_contact_and_shipping_info",
    description:
      "Get verified Evminov Spine Systems USA contact details, Glendale CA hub address, patents, trial warranty, and 50-state/international shipping timelines.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_evminov_boards",
    description:
      "List all 6 official Evminov spine decompression boards and the no-drill renter stand with exact USD pricing, weight/height ratings, and URLs.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "calculate_traction_and_recommend_board",
    description:
      "Calculate axial spine traction physics (F = W * sin(theta) - friction), safe incline window, recommended Evminov board model, and HSA/FSA net estimate.",
    inputSchema: {
      type: "object",
      properties: {
        weightLbs: { type: "number", description: "Body weight in pounds (65-350)" },
        heightInches: { type: "number", description: "Height in inches (48-84)" },
        angleDegrees: { type: "number", description: "Desired incline angle in degrees (8-35)" },
        goal: {
          type: "string",
          enum: ["hernia", "sciatica", "athlete", "pediatric", "posture"],
        },
        needsPortability: { type: "boolean" },
      },
      required: ["weightLbs", "heightInches"],
    },
  },
  {
    name: "compare_evminov_vs_inversion_table",
    description:
      "Return structured biomechanical and safety differences between the Evminov inclined board (8-35 deg) and 90-degree Teeter/inversion tables.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "search_spine_guides",
    description:
      "Query Evminov Spine Systems knowledge base for product sizing, wall mounting, HSA/FSA, sciatica, or athlete recovery.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        lang: { type: "string", enum: ["en", "es", "fr", "uk", "ru"] },
      },
      required: ["query"],
    },
  },
];

function executeTool(name: string, args: Record<string, unknown> = {}) {
  switch (name) {
    case "get_contact_and_shipping_info":
      return {
        brand: "Evminov Spine Systems USA",
        website: "https://evminovusa.com/",
        phone: "+1 (747) 306-0140",
        email: "support@evminovusa.com",
        hubAddress: "4525 San Fernando Rd, Unit H, Glendale, CA 91204, USA",
        patents: "US 6,869,387 B2 | EP 1 038 512 B1 | WO 1999/043288 | UA 27976",
        shipping: {
          usExpressFromCalifornia: "1-2 days West Coast, 2-3 days Central/South, 3-4 days East Coast, 4-5 days AK/HI",
          directWorkshopGlobal: "10-16 business days to US, Canada, EU, UK, and Ukraine",
        },
        policies: {
          homeTrialDays: 60,
          frameWarrantyYears: 10,
          classification: "General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030)",
        },
      };

    case "list_evminov_boards":
      return { currency: "USD", items: EDGE_PRODUCTS };

    case "calculate_traction_and_recommend_board": {
      const weight = Math.max(40, Math.min(400, Number(args.weightLbs || 175)));
      const height = Math.max(48, Math.min(84, Number(args.heightInches || 70)));
      const angle = Math.max(8, Math.min(35, Number(args.angleDegrees || 15)));
      const portable = Boolean(args.needsPortability);

      const rad = (angle * Math.PI) / 180;
      const netTractionLbs = Math.max(
        0,
        Math.round(weight * Math.sin(rad) - weight * Math.cos(rad) * 0.08)
      );

      const slug =
        weight > 210 || height > 76
          ? "wide-heavy-duty-board"
          : portable
          ? "3-piece-travel-board"
          : "standard-pine-board";
      const product = EDGE_PRODUCTS.find((p) => p.slug === slug) || EDGE_PRODUCTS[0];

      return {
        weightLbs: weight,
        heightInches: height,
        angleDegrees: angle,
        netTractionLbs,
        percentBodyweight: Math.round((netTractionLbs / weight) * 100),
        recommendedBoard: product.name,
        slug: product.slug,
        directPriceUsd: product.directPriceUsd,
        expressPriceUsd: product.expressPriceUsd,
        estimatedHsaNetUsd: Math.round(product.directPriceUsd * 0.7),
        orderUrl: `https://evminovusa.com/order/?product=${product.slug}&angle=${angle}&step=2#order-form`,
      };
    }

    case "compare_evminov_vs_inversion_table":
      return {
        comparisonUrl: "https://evminovusa.com/compare/evminov-vs-inversion-table/",
        summary:
          "Evminov uses supported 8-35 degree head-up inclined planes on flexing Carpathian pine; inversion tables hang users upside down at 60-90 degrees by their ankles.",
        keyAdvantages: [
          "Zero blood rush or intraocular eye pressure spike (head remains upright)",
          "Zero ankle or knee clamping pain",
          "Active deep paraspinal muscle conditioning rather than passive hanging",
          "Folds flat to 2.4 inches against the wall instead of 15+ sq ft floor space",
          "Includes Glisson cervical traction loop free",
        ],
      };

    case "search_spine_guides":
      return queryEvminovKnowledge(
        String(args.query || "evminov board"),
        String(args.lang || "en")
      );

    default:
      return null;
  }
}

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const req = (await request.json()) as {
      jsonrpc?: string;
      id?: string | number | null;
      method?: string;
      params?: Record<string, unknown>;
    };

    const id = req.id ?? null;

    if (req.method === "initialize") {
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: { tools: {} },
            serverInfo: SERVER_INFO,
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    if (req.method === "tools/list") {
      return new Response(
        JSON.stringify({ jsonrpc: "2.0", id, result: { tools: TOOLS } }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    if (req.method === "tools/call") {
      const toolName = String(req.params?.name || "");
      const toolArgs = (req.params?.arguments as Record<string, unknown>) || {};
      const payload = executeTool(toolName, toolArgs);
      if (!payload) {
        return new Response(
          JSON.stringify({
            jsonrpc: "2.0",
            id,
            error: { code: -32601, message: `Unknown tool: ${toolName}` },
          }),
          { status: 404, headers: { "Content-Type": "application/json; charset=utf-8" } }
        );
      }
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: {
            content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: `Unsupported MCP method: ${req.method}` },
      }),
      { status: 400, headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  } catch {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error" },
      }),
      { status: 400, headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  }
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
