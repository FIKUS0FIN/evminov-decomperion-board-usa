import {
  getRegionalEdgeAccessories,
  getRegionalEdgeConfig,
  getRegionalEdgeProducts,
  queryEvminovKnowledge,
  SUPPORTED_EDGE_LOCALES,
} from "./ask";

const SERVER_INFO = {
  name: "evminov-spine-systems-mcp",
  version: "2.0.0",
};

const TOOLS = [
  {
    name: "get_contact_and_shipping_info",
    description:
      "Get verified Evminov Spine Systems (USA & Canada) contact details, WhatsApp support, patents, 1-year warranty, 60-day trial, HSA/FSA & Canadian Benefits notes, and ~2-week international courier timelines.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_evminov_boards",
    description:
      "List the official North American demountable Evminov folding boards (3-Piece 230-245 cm & 2-Piece Spine Toothbrush) with exact Standard 26 cm & Reinforced Wide 30 cm regional pricing (USD on US / CAD on Canada), finishes, and URLs.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_official_accessories",
    description:
      "List all 6 official Evminov factory accessories (4-Piece Demountable Ladder Stand max 123 cm, Mounting Hooks, 2-Bag & Single Carry Cases, and 26 cm / 30 cm Wall Protection Panels) with prices and compatibility.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "calculate_traction_and_recommend_board",
    description:
      "Calculate axial spine traction physics (F = W * sin(theta) - 0.08 * W * cos(theta)), safe incline window, recommended folding Evminov board & width (26 cm Standard vs 30 cm Reinforced Wide), and ~30% pre-tax HSA/FSA or Canadian benefits net estimate.",
    inputSchema: {
      type: "object",
      properties: {
        weightLbs: { type: "number", description: "Body weight in pounds (65-350)" },
        weightKg: { type: "number", description: "Optional body weight in kg (30-160); overrides weightLbs if supplied" },
        heightInches: { type: "number", description: "Height in inches (48-84)" },
        angleDegrees: { type: "number", description: "Desired incline angle in degrees (8-35)" },
        goal: {
          type: "string",
          enum: ["hernia", "sciatica", "athlete", "pediatric", "posture"],
        },
        needsCompact2Piece: {
          type: "boolean",
          description: "True if user wants the compact 2-piece Spine Toothbrush model for closet storage",
        },
        needsPortability: {
          type: "boolean",
          description: "Legacy alias for full 3-piece demountable travel/trunk board",
        },
        lang: {
          type: "string",
          enum: ["en", "es", "fr", "de", "uk", "ru"],
        },
      },
      required: ["heightInches"],
    },
  },
  {
    name: "compare_evminov_vs_inversion_table",
    description:
      "Return structured biomechanical and safety differences between the Evminov head-up inclined board (8-35 deg) and 90-degree Teeter/inversion tables, plus links to Nubax, Saunders, Chirp, and Dead Hang comparisons.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "search_spine_guides",
    description:
      "Query the 6-language Evminov Spine Systems knowledge base for product sizing, B2B clinic/studio wholesale tiers, wall mounting, HSA/FSA LMN, piriformis vs sciatica, nerve flossing & sleep, spondylolisthesis/facet safety, dead hang vs Evminov, or athlete recovery.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        lang: { type: "string", enum: ["en", "es", "fr", "de", "uk", "ru"] },
      },
      required: ["query"],
    },
  },
];

function executeTool(name: string, args: Record<string, unknown> = {}, requestOrigin?: string) {
  const cfg = getRegionalEdgeConfig(requestOrigin);
  const products = getRegionalEdgeProducts(cfg.origin);
  const accessories = getRegionalEdgeAccessories(cfg.origin);

  switch (name) {
    case "get_contact_and_shipping_info":
      return {
        brand: cfg.brand,
        region: cfg.region,
        currency: cfg.currency,
        website: `${cfg.origin}/`,
        languages: SUPPORTED_EDGE_LOCALES,
        whatsapp: cfg.whatsapp,
        phone: cfg.phone,
        email: cfg.email,
        ordersEmail: cfg.ordersEmail,
        hubAddress: cfg.hub,
        b2bClinicsUrl: `${cfg.origin}/clinics/`,
        b2bVolumeTiers: "1 station: Standard Direct | 2-3 stations: 5% off | 4-6 stations: 10% off | 7+ stations: 15% off",
        patents: "US 6,869,387 B2 | EP 1 038 512 B1 | WO 1999/043288 | UA 27976 & 28849A",
        shipping: {
          internationalCourier:
            "Approximately 2 weeks via tracked international parcel carriers across all 50 US states and all Canadian provinces (demountable 2-piece & 3-piece panels <=120 cm)",
          upcomingLocalExpress:
            "Local Express warehouse & Stripe/Klarna online card checkout launching in the New Year; zero-risk reservation + WhatsApp/email operator confirmation active now",
        },
        policies: {
          homeTrialDays: 60,
          frameWarrantyYears: 1,
          classification: "General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030)",
          benefitsNote: cfg.benefitsNote,
        },
      };

    case "list_evminov_boards":
      return {
        region: cfg.region,
        currency: cfg.currency,
        items: products,
        accessoriesCount: accessories.length,
        note: "Both models come in Standard 26 cm (up to 100 kg / 220 lbs) or Reinforced Wide 30 cm (>100 kg / up to 330 lbs), in Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine), with free Glisson Cervical Loop & 1-Year Warranty.",
      };

    case "list_official_accessories":
      return {
        region: cfg.region,
        currency: cfg.currency,
        items: accessories,
      };

    case "calculate_traction_and_recommend_board": {
      const weightFromKg = args.weightKg ? Number(args.weightKg) * 2.20462 : null;
      const weight = Math.max(40, Math.min(400, Number(weightFromKg || args.weightLbs || 175)));
      const height = Math.max(48, Math.min(84, Number(args.heightInches || 70)));
      const angle = Math.max(8, Math.min(35, Number(args.angleDegrees || 15)));
      const compact2Piece = Boolean(args.needsCompact2Piece);
      const rawLang = String(args.lang || "en").toLowerCase().slice(0, 2);
      const localePrefix =
        rawLang !== "en" && (SUPPORTED_EDGE_LOCALES as readonly string[]).includes(rawLang)
          ? `/${rawLang}`
          : "";

      const rad = (angle * Math.PI) / 180;
      const netTractionLbs = Math.max(
        0,
        Math.round(weight * Math.sin(rad) - weight * Math.cos(rad) * 0.08)
      );

      const recommendedWidth: "standard" | "wide" =
        weight > 220 || height > 76 ? "wide" : "standard";
      const slug = compact2Piece ? "2-piece-folding-board" : "3-piece-travel-board";
      const product = products.find((p) => p.slug === slug) || products[0];

      const directPrice =
        recommendedWidth === "wide" ? product.wideDirectPrice : product.directPrice;
      const expressPrice =
        recommendedWidth === "wide" ? product.wideExpressPrice : product.expressPrice;
      const estimatedBenefitsNet = Math.round(directPrice * 0.7);

      return {
        region: cfg.region,
        currency: cfg.currency,
        weightLbs: Math.round(weight),
        weightKg: Math.round(weight * 0.453592),
        heightInches: height,
        angleDegrees: angle,
        netTractionLbs,
        percentBodyweight: Math.round((netTractionLbs / weight) * 100),
        recommendedBoard: product.name,
        slug: product.slug,
        recommendedWidth,
        widthLabel:
          recommendedWidth === "wide"
            ? "Reinforced Wide 30 cm (up to 330 lbs / 150 kg, 6'9\")"
            : "Standard 26 cm (up to 220 lbs / 100 kg, 6'4\")",
        directPrice,
        expressPrice,
        estimatedBenefitsNet,
        directPriceUsd: directPrice,
        expressPriceUsd: expressPrice,
        estimatedHsaNetUsd: estimatedBenefitsNet,
        orderUrl: `${cfg.origin}${localePrefix}/order/?product=${product.slug}&width=${recommendedWidth}&angle=${angle}&step=1#order-form`,
      };
    }

    case "compare_evminov_vs_inversion_table":
      return {
        region: cfg.region,
        comparisonUrl: `${cfg.origin}/compare/evminov-vs-inversion-table/`,
        relatedComparisons: [
          `${cfg.origin}/compare/evminov-vs-teeter/`,
          `${cfg.origin}/compare/evminov-vs-nubax-saunders-traction/`,
          `${cfg.origin}/compare/evminov-vs-chirp-contour-posture-pump/`,
          `${cfg.origin}/compare/evminov-vs-pull-up-bar-dead-hang-and-mckenzie/`,
        ],
        summary:
          "Evminov uses supported 8-35 degree head-up inclined planes on resonant flexing wood; inversion tables hang users upside down at 60-90 degrees by their ankles.",
        keyAdvantages: [
          "Zero blood rush or intraocular eye pressure spike (head stays upright — safer for hypertension, glaucoma, vertigo, and seniors 55+)",
          "Zero ankle or knee clamping pain",
          "Active deep paraspinal micro-muscle conditioning during decompression rather than passive hanging",
          "Demountable 2-piece & 3-piece panels fold away cleanly instead of occupying 15+ sq ft of floor space",
          "Includes patented Glisson Cervical Loop free & 1-Year Manufacturer Warranty",
        ],
      };

    case "search_spine_guides":
      return queryEvminovKnowledge(
        String(args.query || "evminov board"),
        String(args.lang || "en"),
        cfg.origin
      );

    default:
      return null;
  }
}

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const requestOrigin = new URL(request.url).origin;
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
      const payload = executeTool(toolName, toolArgs, requestOrigin);
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
