import { PRODUCTS } from "@/data/products";
import { GUIDES } from "@/data/guides";
import { COMPARISONS } from "@/data/comparisons";
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
  const now = new Date().toUTCString();

  const productItems = PRODUCTS.map((p) => {
    const url = `${origin}/products/${p.slug}/`;
    const orderUrl = `${origin}/order/?product=${p.slug}&step=2#order-form`;
    return `    <item>
      <title>${escapeXml(`${p.name} — $${p.directPriceUsd} Direct / $${p.expressPriceUsd} US Express`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${now}</pubDate>
      <category>Evminov Spine Decompression Boards</category>
      <description>${escapeXml(
        `${p.subtitle} Weight capacity: up to ${p.weightLimitLbs} lbs. Includes Glisson cervical loop, 16" US wood-stud bracket, 60-day trial, and HSA/FSA itemized receipt. Order: ${orderUrl} | Phone: ${SITE_CONFIG.phoneDisplay}`
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
    <title>${escapeXml(SITE_CONFIG.brandName)} — Products, Comparisons &amp; Spine Guides</title>
    <link>${origin}/</link>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(
      "Official product lineup, biomechanical spine decompression guides, and US/Canada/EU shipping updates from Evminov Spine Systems (Patented since 1996)."
    )}</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
${[...productItems, ...comparisonItems, ...guideItems].join("\n")}
  </channel>
</rss>
`;
}
