import {
  getProductPrice,
  OFFICIAL_ACCESSORIES,
  PRODUCTS,
} from "@/data/products";
import { IS_CANADA } from "@/lib/region-config";
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
 * Dynamically emits USD (evminovusa.com) or CAD (evminovcanada.com), including both
 * Standard 26 cm & Reinforced Wide 30 cm board variants plus all 6 official accessories.
 */
export async function GET(): Promise<Response> {
  const origin = SITE_CONFIG.canonicalOrigin;
  const currency = SITE_CONFIG.currency;
  const primaryCountry = IS_CANADA ? "CA" : "US";
  const secondaryCountry = IS_CANADA ? "US" : "CA";

  const boardItemsXml = PRODUCTS.flatMap((p) => {
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

    const variants = [
      {
        width: "standard" as const,
        skuSuffix: "26CM",
        titleSuffix: "— Standard 26 cm (Up to 100 kg / 220 lbs)",
        link: `${origin}/products/${p.slug}/`,
        sizeLabel: "26 cm Standard",
      },
      {
        width: "wide" as const,
        skuSuffix: "30CM",
        titleSuffix: "— Reinforced Wide 30 cm (>100 kg / Up to 330 lbs)",
        link: `${origin}/order/?product=${p.slug}&width=wide&step=1#order-form`,
        sizeLabel: "30 cm Reinforced Wide",
      },
    ];

    return variants.map((v) => {
      const directPrice = getProductPrice(p, v.width, "direct");
      const expressPrice = getProductPrice(p, v.width, "express");
      const expressDelta = Math.max(0, expressPrice - directPrice);

      return `    <item>
      <g:id>${escXml(`${p.sku}-${v.skuSuffix}`)}</g:id>
      <g:item_group_id>${escXml(p.sku)}</g:item_group_id>
      <g:title>${escXml(`${p.name} ${v.titleSuffix}`)}</g:title>
      <g:description>${escXml(`${p.subtitle} ${p.keyFeature} Available in Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine). Includes free Glisson Cervical Loop, wall mounting kit, 1-Year Warranty, and ${IS_CANADA ? "itemized Extended Health / HSA receipt" : "itemized HSA/FSA receipt"}. ~2-week tracked international delivery.`)}</g:description>
      <g:link>${escXml(v.link)}</g:link>
      <g:image_link>${escXml(primaryImage)}</g:image_link>
${additionalImages}
      <g:availability>in_stock</g:availability>
      <g:price>${directPrice}.00 ${currency}</g:price>
      <g:brand>${escXml(SITE_CONFIG.brandName)}</g:brand>
      <g:mpn>${escXml(`${p.sku}-${v.skuSuffix}`)}</g:mpn>
      <g:identifier_exists>no</g:identifier_exists>
      <g:condition>new</g:condition>
      <g:size>${escXml(v.sizeLabel)}</g:size>
      <g:shipping_weight>${v.width === "wide" ? "16 kg" : "14 kg"}</g:shipping_weight>
      <g:custom_label_0>${IS_CANADA ? "Extended-Health-HSA-Canada" : "HSA-FSA-Eligible-With-LMN"}</g:custom_label_0>
      <g:google_product_category>Sporting Goods &gt; Exercise &amp; Fitness &gt; Exercise Benches</g:google_product_category>
      <g:product_type>Home Spine Conditioning &amp; Inclined Traction Equipment</g:product_type>
      <g:material>${escXml(p.material)}</g:material>
      <g:shipping>
        <g:country>${primaryCountry}</g:country>
        <g:service>Direct International Courier Delivery (~2 Weeks)</g:service>
        <g:price>0.00 ${currency}</g:price>
      </g:shipping>
      <g:shipping>
        <g:country>${primaryCountry}</g:country>
        <g:service>Priority Express Fulfillment</g:service>
        <g:price>${expressDelta}.00 ${currency}</g:price>
      </g:shipping>
      <g:shipping>
        <g:country>${secondaryCountry}</g:country>
        <g:service>Direct Tracked Air Delivery (~2 Weeks)</g:service>
        <g:price>0.00 ${currency}</g:price>
      </g:shipping>
    </item>`;
    });
  });

  const accessoryItemsXml = OFFICIAL_ACCESSORIES.map((acc) => {
    const accUrl = `${origin}/order/?product=${acc.compatibleWith === "2-piece-folding-board" ? "2-piece-folding-board" : "3-piece-travel-board"}&step=1#order-form`;
    const accImage = `${origin}${acc.image}`;

    return `    <item>
      <g:id>${escXml(acc.sku)}</g:id>
      <g:title>${escXml(`Evminov ${acc.name.en}`)}</g:title>
      <g:description>${escXml(`${acc.desc.en} (${acc.spec.en}). Official Evminov factory accessory compatible with US & Canada folding boards. 1-Year Manufacturer Warranty.`)}</g:description>
      <g:link>${escXml(accUrl)}</g:link>
      <g:image_link>${escXml(accImage)}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>${acc.priceUsd}.00 ${currency}</g:price>
      <g:brand>${escXml(SITE_CONFIG.brandName)}</g:brand>
      <g:mpn>${escXml(acc.sku)}</g:mpn>
      <g:identifier_exists>no</g:identifier_exists>
      <g:condition>new</g:condition>
      <g:google_product_category>Sporting Goods &gt; Exercise &amp; Fitness &gt; Exercise Bench Accessories</g:google_product_category>
      <g:product_type>Evminov Board Official Accessories</g:product_type>
      <g:shipping>
        <g:country>${primaryCountry}</g:country>
        <g:service>Direct International Courier Delivery (~2 Weeks)</g:service>
        <g:price>0.00 ${currency}</g:price>
      </g:shipping>
    </item>`;
  });

  const itemsXml = [...boardItemsXml, ...accessoryItemsXml].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escXml(SITE_CONFIG.legalName)} — Official Product Catalog Feed</title>
    <link>${origin}/</link>
    <description>Official demountable 3-piece and 2-piece Evminov Spine Decompression Boards (26 cm Standard &amp; 30 cm Reinforced Wide) and 6 factory accessories delivered across the USA and Canada in ~2 weeks with a 1-Year Warranty.</description>
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
