export interface EdgeProductSummary {
  slug: string;
  sku: string;
  name: string;
  currency: "USD" | "CAD";
  directPrice: number;
  expressPrice: number;
  wideDirectPrice: number;
  wideExpressPrice: number;
  /** Backwards-compatible aliases (equal to regional currency amount) */
  directPriceUsd: number;
  expressPriceUsd: number;
  weightLimitLbs: number;
  wideWeightLimitLbs: number;
  heightLimit: string;
  widths: string[];
  finishes: string[];
  url: string;
  orderUrl: string;
  summary: string;
}

export interface EdgeAccessorySummary {
  id: string;
  sku: string;
  name: string;
  price: number;
  currency: "USD" | "CAD";
  compatibleWith: "all" | "3-piece-travel-board" | "2-piece-folding-board";
  summary: string;
}

export interface RegionalEdgeConfig {
  isCanada: boolean;
  region: "US" | "CA";
  origin: string;
  host: string;
  brand: string;
  currency: "USD" | "CAD";
  phone: string;
  whatsapp: string;
  email: string;
  ordersEmail: string;
  hub: string;
  benefitsNote: string;
}

export const SUPPORTED_EDGE_LOCALES = ["en", "es", "fr", "de", "uk", "ru"] as const;

export function getRegionalEdgeConfig(originOrUrl?: string): RegionalEdgeConfig {
  const lower = (originOrUrl || "").toLowerCase();
  const isCanada = lower.includes("evminovcanada.com");

  if (isCanada) {
    return {
      isCanada: true,
      region: "CA",
      origin: "https://evminovcanada.com",
      host: "evminovcanada.com",
      brand: "Evminov Spine Systems Canada",
      currency: "CAD",
      phone: "+1 (747) 306-0140",
      whatsapp: "https://wa.me/17473060140",
      email: "support@evminovcanada.com",
      ordersEmail: "orders@evminovcanada.com",
      hub: "Canada Nationwide Courier Delivery (All Provinces) • North American Hub: Glendale, CA",
      benefitsNote:
        "Itemized wellness equipment receipt + LMN/prescription guide provided for Canadian Extended Health Benefits & CRA Medical Expense claims (subject to plan approval).",
    };
  }

  return {
    isCanada: false,
    region: "US",
    origin: "https://evminovusa.com",
    host: "evminovusa.com",
    brand: "Evminov Spine Systems USA",
    currency: "USD",
    phone: "+1 (747) 306-0140",
    whatsapp: "https://wa.me/17473060140",
    email: "support@evminovusa.com",
    ordersEmail: "orders@evminovusa.com",
    hub: "4525 San Fernando Rd, Unit H, Glendale, CA 91204, USA",
    benefitsNote:
      "Itemized wellness equipment receipt + Letter of Medical Necessity (LMN) checklist provided for ~25–35% pre-tax HSA/FSA reimbursement (requires healthcare provider LMN and plan approval).",
  };
}

export function getRegionalEdgeProducts(originOrUrl?: string): EdgeProductSummary[] {
  const cfg = getRegionalEdgeConfig(originOrUrl);
  const c = cfg.currency;
  const o = cfg.origin;

  const p3Direct = cfg.isCanada ? 445 : 495;
  const p3Express = cfg.isCanada ? 545 : 635;
  const p3WideDirect = cfg.isCanada ? 500 : 520;
  const p3WideExpress = cfg.isCanada ? 585 : 660;

  const p2Direct = cfg.isCanada ? 435 : 475;
  const p2Express = cfg.isCanada ? 540 : 615;
  const p2WideDirect = cfg.isCanada ? 495 : 500;
  const p2WideExpress = cfg.isCanada ? 580 : 640;

  return [
    {
      slug: "3-piece-travel-board",
      sku: "EV-FOLD-3P-245",
      name: "3-Piece Folding Evminov Board (230–245 cm • Flagship)",
      currency: c,
      directPrice: p3Direct,
      expressPrice: p3Express,
      wideDirectPrice: p3WideDirect,
      wideExpressPrice: p3WideExpress,
      directPriceUsd: p3Direct,
      expressPriceUsd: p3Express,
      weightLimitLbs: 220,
      wideWeightLimitLbs: 330,
      heightLimit: "Board 230–245 cm (Users up to 6'4\" Standard / 6'9\" Wide)",
      widths: ["Standard 26 cm (up to 100 kg / 220 lbs)", "Reinforced Wide 30 cm (>100 kg / up to 330 lbs)"],
      finishes: ["Natural Warm Amber Alder (Light)", "Dark Walnut Pine (Dark)"],
      url: `${o}/products/3-piece-travel-board/`,
      orderUrl: `${o}/order/?product=3-piece-travel-board&width=standard&step=1#order-form`,
      summary:
        "Full-length 230–245 cm demountable 3-piece Evminov Board (<=120 cm courier packed) with free Glisson Cervical Loop, wall mount kit, product passport & 1-Year Warranty.",
    },
    {
      slug: "2-piece-folding-board",
      sku: "EV-FOLD-2P-ST",
      name: "2-Piece Folding Evminov Board (\"Spine Toothbrush\" • 2 Sections)",
      currency: c,
      directPrice: p2Direct,
      expressPrice: p2Express,
      wideDirectPrice: p2WideDirect,
      wideExpressPrice: p2WideExpress,
      directPriceUsd: p2Direct,
      expressPriceUsd: p2Express,
      weightLimitLbs: 220,
      wideWeightLimitLbs: 330,
      heightLimit: "Compact 2-Piece (Users up to 6'4\" Standard / 6'9\" Wide)",
      widths: ["Standard 26 cm (up to 100 kg / 220 lbs)", "Reinforced Wide 30 cm (>100 kg / up to 330 lbs)"],
      finishes: ["Natural Warm Amber Alder (Light)", "Dark Walnut Pine (Dark)"],
      url: `${o}/products/2-piece-folding-board/`,
      orderUrl: `${o}/order/?product=2-piece-folding-board&width=standard&step=1#order-form`,
      summary:
        "Compact 2-section home spine hygiene board for fast closet or under-bed storage, with free Glisson Cervical Loop, wall mount kit & 1-Year Warranty.",
    },
  ];
}

export function getRegionalEdgeAccessories(originOrUrl?: string): EdgeAccessorySummary[] {
  const cfg = getRegionalEdgeConfig(originOrUrl);
  const c = cfg.currency;
  return [
    {
      id: "ladder-stand-4pc",
      sku: "EV-STAND-4PC-123",
      name: "4-Piece Demountable Ladder Stand (Max 123 cm • No Drilling)",
      price: 275,
      currency: c,
      compatibleWith: "all",
      summary:
        "Apartment-friendly freestanding wooden ladder stand compatible with both Standard 26 cm and Reinforced Wide 30 cm Evminov Boards — zero drywall drilling.",
    },
    {
      id: "mounting-hooks",
      sku: "EV-HOOKS-LADDER",
      name: "Evminov Board Mounting Hooks",
      price: 35,
      currency: c,
      compatibleWith: "all",
      summary: "Heavy-duty steel hooks for securing the Evminov Board to the Ladder Stand or Swedish Wall.",
    },
    {
      id: "carry-case-2bag-3pc",
      sku: "EV-CASE-2BAG-3PC",
      name: "2-Bag Protective Carry Case Set (3-Piece Board)",
      price: 105,
      currency: c,
      compatibleWith: "3-piece-travel-board",
      summary: "Dual fitted heavy-duty storage & transport bags for the 3-Piece (230–245 cm) board & carriage.",
    },
    {
      id: "carry-case-1bag-2pc",
      sku: "EV-CASE-1BAG-2PC",
      name: "Single Protective Carry Case Bag (2-Piece Board)",
      price: 105,
      currency: c,
      compatibleWith: "2-piece-folding-board",
      summary: "Tailored single carry bag with reinforced handles for the 2-Piece \"Spine Toothbrush\" board.",
    },
    {
      id: "wall-panel-standard-2pc",
      sku: "EV-WALL-PANEL-26",
      name: "2-Piece Wall Protection Panel (Standard 26 cm Board)",
      price: 155,
      currency: c,
      compatibleWith: "3-piece-travel-board",
      summary: "Two-part wooden protective wall shield behind Standard 26 cm boards to protect paint & drywall.",
    },
    {
      id: "wall-panel-wide-2pc",
      sku: "EV-WALL-PANEL-30",
      name: "2-Piece Wall Protection Panel (Reinforced Wide 30 cm Board)",
      price: 175,
      currency: c,
      compatibleWith: "3-piece-travel-board",
      summary: "Extra-wide two-part wooden protective wall shield tailored for Reinforced Wide 30 cm boards.",
    },
  ];
}

export const EDGE_PRODUCTS: EdgeProductSummary[] = getRegionalEdgeProducts("https://evminovusa.com");
export const EDGE_ACCESSORIES: EdgeAccessorySummary[] = getRegionalEdgeAccessories("https://evminovusa.com");

function extractWeightLbsFromQuery(q: string): number | null {
  const kgMatch = q.match(/\b(\d{2,3})\s*(?:kg|кг|kilo)\b/i);
  if (kgMatch) {
    return Math.round(Number(kgMatch[1]) * 2.20462);
  }
  const lbMatch = q.match(/\b(\d{2,3})\s*(?:lb|lbs|pound|pounds|фунт)\b/i);
  if (lbMatch) {
    return Number(lbMatch[1]);
  }
  return null;
}

export function queryEvminovKnowledge(rawQuery: string, lang = "en", originOrUrl?: string) {
  const cfg = getRegionalEdgeConfig(originOrUrl);
  const products = getRegionalEdgeProducts(cfg.origin);
  const accessories = getRegionalEdgeAccessories(cfg.origin);

  const normalizedLang = (lang || "en").toLowerCase().slice(0, 2);
  const validLang = (SUPPORTED_EDGE_LOCALES as readonly string[]).includes(normalizedLang)
    ? normalizedLang
    : "en";
  const localePrefix = validLang === "en" ? "" : `/${validLang}`;

  const q = rawQuery.toLowerCase();
  const extractedWeightLbs = extractWeightLbsFromQuery(q);

  let recommended = products[0]; // 3-Piece Folding Flagship (230-245 cm)
  let recommendedWidth: "standard" | "wide" =
    (extractedWeightLbs !== null && extractedWeightLbs > 220) ||
    /\b(wide|heavy|300|280|260|250|245|240|230|tall|6'5|6'6|6'7|6'8|6'9|195\s*cm|200\s*cm|30\s*cm|посилен|усилен|широк)\b/.test(
      q
    )
      ? "wide"
      : "standard";

  let upsell: EdgeAccessorySummary | null = null;
  let guideUrl = `${cfg.origin}${localePrefix}/guides/best-home-spinal-decompression-devices-2026-guide/`;
  let topic = "general_spine_decompression";

  if (
    /wholesale|b2b|bulk|multi[\s-]*station|pilates\s*studio|rehab\s*studio|chiropractic\s*clinic|pt\s*clinic|equip\s*(a\s*)?(clinic|studio)|опто|для\s*клінік|для\s*клиник|студі[їй]|студи[ий]/.test(
      q
    )
  ) {
    topic = "b2b_clinic_studio_wholesale";
    recommended = products[0]; // 3-Piece 230-245 cm + Reinforced Wide 30 cm (330 lbs)
    recommendedWidth = "wide";
    guideUrl = `${cfg.origin}${localePrefix}/clinics/`;
  } else if (/neck\s*hump|dowager|forward\s*head|kyphosis|холка|вдовий|горб/.test(q)) {
    topic = "neck_hump_forward_head_posture";
    recommended = products[1]; // 2-Piece Folding
    guideUrl = `${cfg.origin}${localePrefix}/guides/neck-hump-dowagers-hump-and-forward-head-posture-guide/`;
  } else if (/over[\s-]*the[\s-]*door|water\s*bag|inflatable\s*(neck|collar)|дверн|комірц|воротник/.test(q)) {
    topic = "over_the_door_neck_traction_comparison";
    recommended = products[1]; // 2-Piece Folding
    guideUrl = `${cfg.origin}${localePrefix}/compare/evminov-vs-over-the-door-neck-traction-and-inflatable-collars/`;
  } else if (/l4[\s-]*l5\s*vs|shin\s*vs\s*calf|dermatome/.test(q)) {
    topic = "l4_l5_vs_l5_s1_symptoms";
    guideUrl = `${cfg.origin}${localePrefix}/guides/l4-l5-vs-l5-s1-herniated-disc-symptoms-and-decompression-guide/`;
  } else if (/drx\s*9000|decompression\s*cost|clinic\s*cost|session\s*cost|вартість\s*лікування|стоимость\s*лечения/.test(q)) {
    topic = "drx9000_cost_vs_home_board";
    guideUrl = `${cfg.origin}${localePrefix}/guides/drx9000-spinal-decompression-therapy-cost-vs-home-board-guide/`;
  } else if (/piriformis|deep\s*gluteal|buttock|glute|піріформ|грушоподіб|грушевидн/.test(q)) {
    topic = "piriformis_vs_sciatica";
    guideUrl = `${cfg.origin}${localePrefix}/guides/piriformis-syndrome-vs-sciatica-self-test-and-relief-guide/`;
  } else if (/floss|nerve\s*glid|sleep|pillow|mattress|night\s*pain|спати|спать|сон|нерв/.test(q)) {
    topic = "sciatic_nerve_flossing_and_sleep";
    guideUrl = `${cfg.origin}${localePrefix}/guides/sciatic-nerve-flossing-and-sleeping-positions-guide/`;
  } else if (/spondylolisthesis|facet|arthritis|extension\s*pain|спондилолістез|спондилолистез|фасет/.test(q)) {
    topic = "spondylolisthesis_facet_safe_decompression";
    guideUrl = `${cfg.origin}${localePrefix}/guides/spondylolisthesis-and-facet-joint-safe-decompression-guide/`;
  } else if (/dead\s*hang|pull[\s-]*up|mckenzie|cobra|турнік|турник|маккенз/.test(q)) {
    topic = "dead_hang_and_mckenzie_comparison";
    guideUrl = `${cfg.origin}${localePrefix}/compare/evminov-vs-pull-up-bar-dead-hang-and-mckenzie/`;
  } else if (/nubax|saunders|comfortrac|decompression\s*belt/.test(q)) {
    topic = "non_inverted_traction_comparison";
    guideUrl = `${cfg.origin}${localePrefix}/compare/evminov-vs-nubax-saunders-traction/`;
  } else if (/chirp|posture\s*pump|wheel|foam\s*roller/.test(q)) {
    topic = "chirp_posture_pump_comparison";
    guideUrl = `${cfg.origin}${localePrefix}/compare/evminov-vs-chirp-contour-posture-pump/`;
  } else if (/high\s*blood\s*pressure|hypertension|glaucoma|vertigo|senior|55\+|60\+|elderly|тиск|давлен/.test(q)) {
    topic = "high_blood_pressure_seniors";
    guideUrl = `${cfg.origin}${localePrefix}/guides/inversion-table-alternative-high-blood-pressure-seniors/`;
  } else if (/teeter|inversion|upside\s*down|ankle|інверсійн|инверсион/.test(q)) {
    topic = "inversion_table_alternative";
    guideUrl = `${cfg.origin}${localePrefix}/compare/evminov-vs-inversion-table/`;
  } else if (/stenosis|morning\s*stiff|стеноз/.test(q)) {
    topic = "spinal_stenosis_morning";
    guideUrl = `${cfg.origin}${localePrefix}/guides/spinal-stenosis-and-l5-s1-morning-decompression-guide/`;
  } else if (/hsa|fsa|lmn|tax|reimburse|cra|insurance|extended\s*health|страхов/.test(q)) {
    topic = "hsa_fsa_lmn_reimbursement";
    guideUrl = `${cfg.origin}${localePrefix}/guides/hsa-fsa-spinal-decompression-lmn-guide/`;
  } else if (/canada|shipping|deliver|customs|weeks|доставк/.test(q)) {
    topic = "usa_canada_shipping";
    guideUrl = `${cfg.origin}${localePrefix}/guides/buy-evminov-board-usa-canada-shipping-guide/`;
  } else if (/athlete|deadlift|squat|powerlift|crossfit|sport|спорт|станов/.test(q) || recommendedWidth === "wide") {
    topic = "athlete_heavy_duty";
    recommended = products[0]; // 3-Piece 230-245 cm + Wide 30 cm
    recommendedWidth = "wide";
    guideUrl = `${cfg.origin}${localePrefix}/conditions/athlete-spine-recovery/`;
  } else if (/rent|apartment|no\s*drill|stand|closet|fold|2-piece|desk|office|toothbrush|щітк|щетк|кварт|стійк|стойк/.test(q)) {
    topic = "apartment_renter_desk";
    recommended = products[1]; // 2-Piece Folding
    upsell = accessories[0]; // 4-Piece Demountable Ladder Stand
    guideUrl = `${cfg.origin}${localePrefix}/conditions/desk-worker-posture/`;
  } else if (/neck|glisson|cervical|tech[\s-]*neck|ши[яї]|ше[яи]|гліссон|глиссон/.test(q)) {
    topic = "cervical_glisson_traction";
    recommended = products[1];
    guideUrl = `${cfg.origin}${localePrefix}/guides/glisson-loop-cervical-traction-neck-relief-guide/`;
  } else if (/sciatica|hernia|l4|l5|s1|disc|bulg|гриж|грыж|ішіас|ишиас/.test(q)) {
    topic = "lumbar_disc_sciatica";
    recommended = products[0];
    guideUrl = `${cfg.origin}${localePrefix}/conditions/herniated-disc-l4-l5/`;
  }

  // Also check if renter stand was requested alongside another topic
  if (!upsell && /rent|apartment|no\s*drill|ladder\s*stand|стійк|стойк/.test(q)) {
    upsell = accessories[0];
  }

  const directPrice =
    recommendedWidth === "wide" ? recommended.wideDirectPrice : recommended.directPrice;
  const expressPrice =
    recommendedWidth === "wide" ? recommended.wideExpressPrice : recommended.expressPrice;
  const estimatedBenefitsNet = Math.round(directPrice * 0.7);

  const params = new URLSearchParams({
    product: recommended.slug,
    width: recommendedWidth,
    step: "1",
  });
  if (upsell) {
    params.set("accessories", upsell.id);
  }
  const orderUrl = `${cfg.origin}${localePrefix}/order/?${params.toString()}#order-form`;

  return {
    query: rawQuery,
    lang: validLang,
    region: cfg.region,
    currency: cfg.currency,
    topic,
    recommendedBoard: recommended.name,
    recommendedSlug: recommended.slug,
    recommendedWidth,
    widthLabel:
      recommendedWidth === "wide"
        ? "Reinforced Wide 30 cm (over 100 kg / up to 330 lbs, 6'9\")"
        : "Standard 26 cm (up to 100 kg / 220 lbs, 6'4\")",
    directPrice,
    expressPrice,
    estimatedBenefitsNet,
    /** Backwards-compatible aliases */
    directPriceUsd: directPrice,
    expressPriceUsd: expressPrice,
    estimatedHsaNetUsd: estimatedBenefitsNet,
    recommendedAccessory: upsell ? upsell.name : null,
    recommendedAccessoryId: upsell ? upsell.id : null,
    recommendedAccessoryPrice: upsell ? upsell.price : null,
    guideUrl,
    orderUrl,
    contact: {
      whatsapp: cfg.whatsapp,
      phone: cfg.phone,
      email: cfg.email,
      ordersEmail: cfg.ordersEmail,
      hub: cfg.hub,
    },
    compliance: `General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). ~2 weeks tracked international courier delivery across US & Canada, 60-Day Home Trial & 1-Year Manufacturer Warranty. ${cfg.benefitsNote}`,
  };
}

export const onRequestGet: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "evminov spine decompression board").slice(0, 300);
  const lang = (url.searchParams.get("lang") || "en").toLowerCase();
  const result = queryEvminovKnowledge(q, lang, url.origin);

  if ((request.headers.get("accept") || "").toLowerCase().includes("text/markdown")) {
    const md = [
      `# Evminov Spine Systems (${result.region}) Recommendation`,
      `- **Query**: ${result.query}`,
      `- **Recommended Model**: ${result.recommendedBoard}`,
      `- **Recommended Panel Width**: ${result.widthLabel}`,
      `- **Pricing (${result.currency})**: $${result.directPrice} Direct (~2 weeks courier) / $${result.expressPrice} Local Express`,
      `- **Est. Pre-Tax Net (-30% w/ LMN/Benefits)**: ~$${result.estimatedBenefitsNet} ${result.currency}`,
      result.recommendedAccessory
        ? `- **Suggested Add-On**: ${result.recommendedAccessory} (+$${result.recommendedAccessoryPrice} ${result.currency})`
        : "",
      `- **Clinical Guide**: ${result.guideUrl}`,
      `- **1-Click Pre-Filled Order URL**: ${result.orderUrl}`,
      `- **Support (WhatsApp Primary)**: ${result.contact.phone} (${result.contact.whatsapp}) | ${result.contact.email}`,
    ]
      .filter(Boolean)
      .join("\n");
    return new Response(md, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return new Response(JSON.stringify(result, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const body = (await request.json()) as { q?: string; query?: string; lang?: string };
    const q = String(body.q || body.query || "evminov board").slice(0, 300);
    const lang = String(body.lang || "en").toLowerCase();
    return new Response(JSON.stringify(queryEvminovKnowledge(q, lang, url.origin), null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }
};
