import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG } from "@/lib/site-config";

export const dynamic = "force-static";

function escXml(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/**
 * Static Google Merchant Center, Bing Shopping, Pinterest & Meta Catalog XML Feed.
 * Paste https://evminovusa.com/merchant-feed.xml into Merchant Center for Free Listings.
 */
export async function GET(): Promise<Response> {
  const origin = SITE_CONFIG.canonicalOrigin;

  const itemsXml = PRODUCTS.map((p) => {
    const productUrl = `${origin}/products/${p.slug}/`;
    const primaryImage = `${origin}${p.image}`;
    const additionalImages = p.galleryImages
      .map((img) => `${origin}${img.url}`)
      .filter((url) => url !== primaryImage)
      .slice(0, 8)
      .map(
        (url) =>
          `      <g:additional_image_link>${escXml(url)}</g:additional_image_link>`
      )
      .join("\n");

    return `    <item>
      <g:id>${escXml(p.sku)}</g:id>
      <g:title>${escXml(p.name)}</g:title>
      <g:description>${escXml(`${p.subtitle} ${p.keyFeature} Includes 60-day home trial, 10-year structural warranty, and itemized HSA/FSA receipt.`)}</g:description>
      <g:link>${escXml(productUrl)}</g:link>
      <g:image_link>${escXml(primaryImage)}</g:image_link>
${additionalImages}
      <g:availability>in_stock</g:availability>
      <g:price>${p.directPriceUsd}.00 USD</g:price>
      <g:brand>${escXml(SITE_CONFIG.brandName)}</g:brand>
      <g:mpn>${escXml(p.sku)}</g:mpn>
      <g:identifier_exists>no</g:identifier_exists>
      <g:condition>new</g:condition>
      <g:google_product_category>Sporting Goods &gt; Exercise &amp; Fitness &gt; Exercise Benches</g:google_product_category>
      <g:product_type>Home Spine Conditioning &amp; Inclined Traction Equipment</g:product_type>
      <g:material>${escXml(p.material)}</g:material>
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Direct Workshop Delivery (10-16 business days)</g:service>
        <g:price>0.00 USD</g:price>
      </g:shipping>
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Glendale CA Express Ground (1-4 business days)</g:service>
        <g:price>${Math.max(0, p.expressPriceUsd - p.directPriceUsd)}.00 USD</g:price>
      </g:shipping>
      <g:shipping>
        <g:country>CA</g:country>
        <g:service>Direct Tracked Air Delivery</g:service>
        <g:price>0.00 USD</g:price>
      </g:shipping>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escXml(SITE_CONFIG.brandName)} — Official Product Catalog Feed</title>
    <link>${origin}/</link>
    <description>Patented Carpathian pine and select Ukrainian alder inclined spine decompression boards and no-drill apartment stands shipped across all 50 US states, Canada, and Europe.</description>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
