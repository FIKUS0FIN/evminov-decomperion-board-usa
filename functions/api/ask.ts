export interface EdgeProductSummary {
  slug: string;
  sku: string;
  name: string;
  directPriceUsd: number;
  expressPriceUsd: number;
  weightLimitLbs: number;
  heightLimit: string;
  url: string;
  orderUrl: string;
  summary: string;
}

export const EDGE_PRODUCTS: EdgeProductSummary[] = [
  {
    slug: "standard-pine-board",
    sku: "EV-STD-PINE-1P",
    name: "Standard Solid Evminov Board (1-Piece)",
    directPriceUsd: 450,
    expressPriceUsd: 595,
    weightLimitLbs: 210,
    heightLimit: "Up to 6'4\"",
    url: "https://evminovusa.com/products/standard-pine-board/",
    orderUrl: "https://evminovusa.com/order/?product=standard-pine-board&step=2#order-form",
    summary: "Classic monolithic Carpathian pine board with Glisson cervical loop and 16\" US stud wall mount.",
  },
  {
    slug: "2-piece-folding-board",
    sku: "EV-FOLD-2P",
    name: "2-Piece Folding Evminov Board (Home Storage)",
    directPriceUsd: 475,
    expressPriceUsd: 615,
    weightLimitLbs: 220,
    heightLimit: "Up to 6'4\"",
    url: "https://evminovusa.com/products/2-piece-folding-board/",
    orderUrl: "https://evminovusa.com/order/?product=2-piece-folding-board&step=2#order-form",
    summary: "Splits into two 45\" halves in 30 seconds for closet or under-bed storage.",
  },
  {
    slug: "3-piece-travel-board",
    sku: "EV-FOLD-3P-TRV",
    name: "3-Piece Folding Evminov Board (Travel & Trunk)",
    directPriceUsd: 495,
    expressPriceUsd: 635,
    weightLimitLbs: 220,
    heightLimit: "Up to 6'4\"",
    url: "https://evminovusa.com/products/3-piece-travel-board/",
    orderUrl: "https://evminovusa.com/order/?product=3-piece-travel-board&step=2#order-form",
    summary: "Ultra-compact 31\" travel sections with carry bag and over-the-door anchor strap.",
  },
  {
    slug: "wide-heavy-duty-board",
    sku: "EV-WIDE-330",
    name: "Wide Panel Evminov Board (Heavy-Duty 330 lbs)",
    directPriceUsd: 500,
    expressPriceUsd: 635,
    weightLimitLbs: 330,
    heightLimit: "Up to 6'9\"",
    url: "https://evminovusa.com/products/wide-heavy-duty-board/",
    orderUrl: "https://evminovusa.com/order/?product=wide-heavy-duty-board&step=2#order-form",
    summary: "30% wider reinforced deck rated up to 330 lbs and 6'9\" for athletes and broad builds.",
  },
  {
    slug: "select-alder-board",
    sku: "EV-ALDER-LTD",
    name: "Select Alder Wood Evminov Board (Lightweight)",
    directPriceUsd: 525,
    expressPriceUsd: 665,
    weightLimitLbs: 220,
    heightLimit: "Up to 6'4\"",
    url: "https://evminovusa.com/products/select-alder-board/",
    orderUrl: "https://evminovusa.com/order/?product=select-alder-board&step=2#order-form",
    summary: "~15% lighter cured Ukrainian alder wood (19–21 lbs) for effortless handling.",
  },
  {
    slug: "free-standing-stand",
    sku: "EV-STAND-RENT",
    name: "Demountable Free-Standing Ladder Stand (No Drilling)",
    directPriceUsd: 275,
    expressPriceUsd: 345,
    weightLimitLbs: 350,
    heightLimit: "Compatible with all boards",
    url: "https://evminovusa.com/products/free-standing-stand/",
    orderUrl: "https://evminovusa.com/order/?product=free-standing-stand&step=2#order-form",
    summary: "Apartment-friendly freestanding ladder stand — zero drywall drilling, under 3.5 sq ft.",
  },
];

export function queryEvminovKnowledge(rawQuery: string, lang = "en") {
  const q = rawQuery.toLowerCase();
  let recommended = EDGE_PRODUCTS[0];
  let upsell: EdgeProductSummary | null = null;
  let guideUrl = "https://evminovusa.com/guides/spine-decompression-at-home-complete-clinical-guide/";
  let topic = "general_spine_decompression";

  if (/teeter|inversion|upside\s*down|blood\s*pressure|glaucoma|ankle/.test(q)) {
    topic = "inversion_table_alternative";
    guideUrl = "https://evminovusa.com/compare/evminov-vs-inversion-table/";
  } else if (/wide|heavy|300|250|230|tall|6'5|6'6|athlete|deadlift|squat|powerlift/.test(q)) {
    topic = "athlete_heavy_duty";
    recommended = EDGE_PRODUCTS[3];
    guideUrl = "https://evminovusa.com/conditions/athlete-spine-recovery/";
  } else if (/travel|trunk|car|airline|3-piece|portable/.test(q)) {
    topic = "travel_portable";
    recommended = EDGE_PRODUCTS[2];
  } else if (/rent|apartment|no\s*drill|stand|closet|fold|2-piece|desk|office/.test(q)) {
    topic = "apartment_renter_desk";
    recommended = EDGE_PRODUCTS[1];
    upsell = EDGE_PRODUCTS[5];
    guideUrl = "https://evminovusa.com/conditions/desk-worker-posture/";
  } else if (/alder|lightweight|senior|neck|glisson|cervical/.test(q)) {
    topic = "alder_cervical";
    recommended = EDGE_PRODUCTS[4];
    guideUrl = "https://evminovusa.com/conditions/cervical-neck-traction/";
  } else if (/sciatica|hernia|l4|l5|s1|disc/.test(q)) {
    topic = "lumbar_disc_sciatica";
    guideUrl = "https://evminovusa.com/conditions/herniated-disc-l4-l5/";
  }

  const localePrefix = ["es", "fr", "uk", "ru"].includes(lang) ? `/${lang}` : "";
  const orderUrl = `https://evminovusa.com${localePrefix}/order/?product=${recommended.slug}${
    upsell ? "&stand=1" : ""
  }&step=2#order-form`;

  return {
    query: rawQuery,
    lang,
    topic,
    recommendedBoard: recommended.name,
    recommendedSlug: recommended.slug,
    directPriceUsd: recommended.directPriceUsd,
    expressPriceUsd: recommended.expressPriceUsd,
    estimatedHsaNetUsd: Math.round(recommended.directPriceUsd * 0.7),
    recommendedAccessory: upsell ? upsell.name : null,
    guideUrl,
    orderUrl,
    contact: {
      whatsapp: "https://wa.me/17473060140",
      phone: "+1 (747) 306-0140",
      email: "support@evminovusa.com",
      hub: "4525 San Fernando Rd, Unit H, Glendale, CA 91204, USA",
    },
    compliance:
      "General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). ~2 weeks international courier delivery, 60-Day Home Trial & 1-Year Warranty. Itemized HSA/FSA receipt provided.",
  };
}

export const onRequestGet: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "evminov spine decompression board").slice(0, 300);
  const lang = (url.searchParams.get("lang") || "en").toLowerCase();
  const result = queryEvminovKnowledge(q, lang);

  if ((request.headers.get("accept") || "").toLowerCase().includes("text/markdown")) {
    const md = [
      `# Evminov Spine Systems Recommendation`,
      `- **Query**: ${result.query}`,
      `- **Recommended Model**: ${result.recommendedBoard} ($${result.directPriceUsd} direct / $${result.expressPriceUsd} Glendale CA Express)`,
      `- **Est. HSA/FSA Net (-30%)**: ~$${result.estimatedHsaNetUsd}`,
      result.recommendedAccessory
        ? `- **Suggested Add-On**: ${result.recommendedAccessory}`
        : "",
      `- **Guide**: ${result.guideUrl}`,
      `- **1-Click Order URL**: ${result.orderUrl}`,
      `- **US Support**: ${result.contact.phone} | ${result.contact.email}`,
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
    const body = (await request.json()) as { q?: string; query?: string; lang?: string };
    const q = String(body.q || body.query || "evminov board").slice(0, 300);
    const lang = String(body.lang || "en").toLowerCase();
    return new Response(JSON.stringify(queryEvminovKnowledge(q, lang), null, 2), {
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
