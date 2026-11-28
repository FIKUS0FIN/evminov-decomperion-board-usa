import { PRODUCTS, getProductPrice } from "@/data/products";
import { GUIDES } from "@/data/guides";
import { COMPARISONS } from "@/data/comparisons";
import { IS_CANADA } from "@/lib/region-config";
import { SITE_CONFIG } from "@/lib/site-config";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateRssXml(): string {
  const origin = SITE_CONFIG.canonicalOrigin;
  const currency = SITE_CONFIG.currency;
  const now = new Date().toUTCString();

  const productItems = PRODUCTS.map((p) => {
    const url = `${origin}/products/${p.slug}/`;
    const orderUrl = `${origin}/order/?product=${p.slug}&step=1#order-form`;
    const stdDirect = getProductPrice(p, "standard", "direct");
    const stdExpress = getProductPrice(p, "standard", "express");
    return `    <item>
      <title>${escapeXml(`${p.name} — $${stdDirect} Direct / $${stdExpress} Express ${currency}`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${now}</pubDate>
      <category>Evminov Spine Decompression Boards</category>
      <description>${escapeXml(
        `${p.subtitle} Available in Standard 26 cm (up to 100 kg) and Reinforced Wide 30 cm (>100 kg / up to 330 lbs). Includes free Glisson Cervical Loop, wall mounting hardware, 1-Year Warranty, and itemized HSA/FSA receipt (~2 weeks courier delivery). Order: ${orderUrl} | WhatsApp: ${SITE_CONFIG.phoneDisplay}`
      )}</description>
    </item>`;
  });

  const comparisonItems = COMPARISONS.map((c) => {
    const url = `${origin}/compare/${c.slug}/`;
    return `    <item>
      <title>${escapeXml(c.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${now}</pubDate>
      <category>Comparisons</category>
      <description>${escapeXml(c.summary)}</description>
    </item>`;
  });

  const guideItems = GUIDES.map((g) => {
    const url = `${origin}/guides/${g.slug}/`;
    const pubDate = new Date(g.datePublished).toUTCString();
    return `    <item>
      <title>${escapeXml(g.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(g.category)}</category>
      <description>${escapeXml(g.excerpt)}</description>
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_CONFIG.legalName)} — Products, Comparisons &amp; Spine Guides</title>
    <link>${origin}/</link>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(
      `Official demountable Evminov folding board lineup, biomechanical spine decompression guides, and ${IS_CANADA ? "Canada" : "US & Canada"} delivery updates from ${SITE_CONFIG.legalName} (Patented since 1996).`
    )}</description>
    <language>${IS_CANADA ? "en-ca" : "en-us"}</language>
    <lastBuildDate>${now}</lastBuildDate>
${[...productItems, ...comparisonItems, ...guideItems].join("\n")}
  </channel>
</rss>
`;
}
