import { SITE_CONFIG } from "@/lib/site-config";
import { CA_ORIGIN, IS_CANADA, US_ORIGIN } from "@/lib/region-config";
import {
  getProductPrice,
  OFFICIAL_ACCESSORIES,
  ProductItem,
  PRODUCTS,
} from "@/data/products";
import { GuideItem, getGuideWordCount } from "@/data/guides";
import { ComparisonPageData } from "@/data/comparisons";
import { ConditionPageData } from "@/data/conditions";
import { Locale, LOCALE_META } from "@/i18n/types";
import {
  getLocalizedComparisonMeta,
  getLocalizedConditionMeta,
  getLocalizedGuideMeta,
} from "@/i18n/content-meta";
import { getCanonicalUrl, getRegionalHreflang } from "@/lib/url";

export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationAndWebsiteSchema({ lang }: { lang: Locale }) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const orgId = `${origin}/#organization`;
  const siteId = `${origin}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Store"],
        "@id": orgId,
        name: SITE_CONFIG.brandName,
        legalName: SITE_CONFIG.legalName,
        url: `${origin}/`,
        logo: `${origin}/images/authentic/evminov-official-logo.png`,
        image: `${origin}/images/social/evminov-decompression-studio-preview.jpg`,
        foundingDate: String(SITE_CONFIG.foundingYear),
        telephone: SITE_CONFIG.phoneDisplay,
        email: SITE_CONFIG.supportEmail,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: SITE_CONFIG.supportEmail,
            telephone: SITE_CONFIG.phoneDisplay,
            availableLanguage: ["English", "Spanish", "French", "German", "Ukrainian", "Russian"],
          },
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: SITE_CONFIG.ordersEmail,
            telephone: SITE_CONFIG.phoneDisplay,
            availableLanguage: ["English", "Spanish", "French", "German", "Ukrainian", "Russian"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.postalCode,
          addressCountry: SITE_CONFIG.address.country,
        },
        areaServed: IS_CANADA
          ? [{ "@type": "Country", name: "Canada" }]
          : [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "Ukraine" },
              { "@type": "Place", name: "European Union" },
            ],
        ...(IS_CANADA
          ? {
              parentOrganization: {
                "@type": "Organization",
                "@id": `${US_ORIGIN}/#organization`,
                name: SITE_CONFIG.brandName,
                url: `${US_ORIGIN}/`,
              },
            }
          : {
              subOrganization: {
                "@type": "OnlineStore",
                "@id": `${CA_ORIGIN}/#organization`,
                name: "Evminov Spine Systems Canada",
                url: `${CA_ORIGIN}/`,
                areaServed: { "@type": "Country", name: "Canada" },
              },
            }),
        sameAs: [SITE_CONFIG.youtubeChannelUrl, `${US_ORIGIN}/`, `${CA_ORIGIN}/`],
        knowsAbout: [
          "Inclined Spine Decompression",
          "Evminov Method",
          "Inversion Table Alternatives",
          "Glisson Cervical Traction Loop",
          "Carpathian Pine Spine Conditioning Boards",
          "16-Inch US Wood Stud Wall Mounting",
          "HSA and FSA Pre-Tax Wellness Receipts",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Evminov Spine Decompression Boards & Accessories",
          itemListElement: [
            ...PRODUCTS.map((p) => ({
              "@type": "Offer",
              name: p.localizedNames[lang] || p.name,
              url: getCanonicalUrl(`/products/${p.slug}/`, lang),
              price: String(p.directPriceUsd),
              priceCurrency: SITE_CONFIG.currency,
              availability: "https://schema.org/InStock",
            })),
            ...OFFICIAL_ACCESSORIES.map((acc) => ({
              "@type": "Offer",
              name: acc.name[lang] || acc.name.en,
              url: `${origin}/order/?accessories=${acc.id}&step=1#order-form`,
              price: String(acc.priceUsd),
              priceCurrency: SITE_CONFIG.currency,
              availability: "https://schema.org/InStock",
            })),
          ],
        },
        potentialAction: [
          {
            "@type": "OrderAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${origin}/order/?product={product_slug}&shipping={shipping_mode}&step=1#order-form`,
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
          },
          {
            "@type": "CommunicateAction",
            target: SITE_CONFIG.whatsappHref,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: `${origin}/`,
        name: SITE_CONFIG.brandName,
        inLanguage: [
          LOCALE_META.en.hreflang,
          LOCALE_META.es.hreflang,
          LOCALE_META.fr.hreflang,
          LOCALE_META.de.hreflang,
          LOCALE_META.uk.hreflang,
          LOCALE_META.ru.hreflang,
        ],
        publisher: { "@id": orgId },
        potentialAction: {
          "@type": "SearchAction",
          target: `${origin}/api/ask?q={search_term_string}&lang=${lang}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return <JsonLdScript data={graph} />;
}

export function ProductJsonLd({
  product,
  lang,
}: {
  product: ProductItem;
  lang: Locale;
}) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const canonical = getCanonicalUrl(`/products/${product.slug}/`, lang);

  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: ["US", "CA"],
    returnPolicyCategory:
      "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: SITE_CONFIG.compliance.trialDays,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/ReturnShippingFees",
    refundType: "https://schema.org/FullRefund",
  };

  const stdDirect = getProductPrice(product, "standard", "direct");
  const stdExpress = getProductPrice(product, "standard", "express");
  const wideDirect = getProductPrice(product, "wide", "direct");
  const wideExpress = getProductPrice(product, "wide", "express");

  const directShipping = {
    "@type": "OfferShippingDetails",
    shippingRate: {
      "@type": "MonetaryAmount",
      value: "0",
      currency: SITE_CONFIG.currency,
    },
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: ["US", "CA"],
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 3,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 16,
        unitCode: "DAY",
      },
    },
  };

  const expressShipping = {
    "@type": "OfferShippingDetails",
    shippingRate: {
      "@type": "MonetaryAmount",
      value: "0",
      currency: SITE_CONFIG.currency,
    },
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: ["US", "CA"],
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 2,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 2,
        maxValue: 5,
        unitCode: "DAY",
      },
    },
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonical}#product`,
    name: product.localizedNames[lang] || product.name,
    description: product.subtitle,
    sku: product.sku,
    mpn: product.sku,
    category: "Sporting Goods > Exercise & Fitness > Spine Conditioning",
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.brandName,
    },
    image: product.galleryImages.map((img) => `${origin}${img.url}`),
    url: canonical,
    material: product.material,
    offers: [
      {
        "@type": "Offer",
        name: "Standard 26 cm — Direct Workshop Delivery (~2 Weeks US & Canada)",
        price: String(stdDirect),
        priceCurrency: SITE_CONFIG.currency,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        url: `${origin}/order/?product=${product.slug}&width=standard&shipping=direct&step=2#order-form`,
        seller: { "@id": `${origin}/#organization` },
        hasMerchantReturnPolicy: returnPolicy,
        shippingDetails: directShipping,
      },
      {
        "@type": "Offer",
        name: "Reinforced Wide 30 cm — Direct Workshop Delivery (~2 Weeks US & Canada)",
        price: String(wideDirect),
        priceCurrency: SITE_CONFIG.currency,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        url: `${origin}/order/?product=${product.slug}&width=wide&shipping=direct&step=2#order-form`,
        seller: { "@id": `${origin}/#organization` },
        hasMerchantReturnPolicy: returnPolicy,
        shippingDetails: directShipping,
      },
      {
        "@type": "Offer",
        name: "Standard 26 cm — Express Fulfillment Option",
        price: String(stdExpress),
        priceCurrency: SITE_CONFIG.currency,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        url: `${origin}/order/?product=${product.slug}&width=standard&shipping=express&step=2#order-form`,
        seller: { "@id": `${origin}/#organization` },
        hasMerchantReturnPolicy: returnPolicy,
        shippingDetails: expressShipping,
      },
      {
        "@type": "Offer",
        name: "Reinforced Wide 30 cm — Express Fulfillment Option",
        price: String(wideExpress),
        priceCurrency: SITE_CONFIG.currency,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        url: `${origin}/order/?product=${product.slug}&width=wide&shipping=express&step=2#order-form`,
        seller: { "@id": `${origin}/#organization` },
        hasMerchantReturnPolicy: returnPolicy,
        shippingDetails: expressShipping,
      },
    ],
  };

  return <JsonLdScript data={schema} />;
}

export function FaqJsonLd({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  if (!faqs.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return <JsonLdScript data={schema} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLdScript data={schema} />;
}

export function GuideArticleJsonLd({
  guide,
  lang,
}: {
  guide: GuideItem;
  lang: Locale;
}) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const canonical = getCanonicalUrl(`/guides/${guide.slug}/`, lang);
  const wordCount = getGuideWordCount(guide);
  const meta = getLocalizedGuideMeta(guide.slug, lang, {
    title: guide.metaTitle,
    description: guide.metaDescription,
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: guide.title || meta.title,
    description: meta.description,
    image: `${origin}${guide.heroImage}`,
    datePublished: guide.datePublished.includes("T")
      ? guide.datePublished
      : `${guide.datePublished}T00:00:00Z`,
    dateModified: guide.dateModified.includes("T")
      ? guide.dateModified
      : `${guide.dateModified}T00:00:00Z`,
    inLanguage: getRegionalHreflang(lang),
    wordCount,
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: guide.author.name,
      url: `${origin}/centers/`,
    },
    publisher: { "@id": `${origin}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#guide-geo-summary"],
    },
  };

  return <JsonLdScript data={schema} />;
}

export function VideoObjectJsonLd() {
  const origin = SITE_CONFIG.canonicalOrigin;
  const videos = [SITE_CONFIG.videos.methodDemo, SITE_CONFIG.videos.wallMounting];
  const schema = {
    "@context": "https://schema.org",
    "@graph": videos.map((v) => ({
      "@type": "VideoObject",
      name: v.title,
      description: `${v.title} — Official demonstration by Evminov Spine Systems.`,
      thumbnailUrl: `${origin}${v.thumbnail}`,
      uploadDate: "2025-09-01T12:00:00Z",
      duration: v.duration,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
      publisher: { "@id": `${origin}/#organization` },
    })),
  };
  return <JsonLdScript data={schema} />;
}

export function HomepageRichSchemas({ lang }: { lang: Locale }) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const homeUrl = getCanonicalUrl("/", lang);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: "Evminov Spine Systems — Patented Inclined Spine Decompression Board",
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${origin}/#organization` },
        inLanguage: getRegionalHreflang(lang),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "section p:first-of-type"],
        },
      },
      {
        "@type": "ItemList",
        "@id": `${homeUrl}#catalog-list`,
        name: "Evminov Spine Decompression Boards & Accessories",
        numberOfItems: PRODUCTS.length,
        itemListElement: PRODUCTS.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: p.localizedNames[lang] || p.name,
          url: getCanonicalUrl(`/products/${p.slug}/`, lang),
          image: `${origin}${p.image}`,
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${homeUrl}#howto-mount`,
        name: "How to Mount and Use the Evminov Spine Board on 16-Inch US Wood Studs",
        description:
          "Install the Evminov inclined decompression board safely on a standard North American 16-inch wood stud wall in ~15 minutes and perform gentle 10-minute spine unloading.",
        totalTime: "PT15M",
        supply: [
          { "@type": "HowToSupply", name: "Included 400+ lb rated steel wall mounting bracket & lag screws" },
          { "@type": "HowToSupply", name: "3-Piece or 2-Piece Demountable Evminov Board (Natural Warm Amber Alder or Dark Walnut Pine) with free Glisson Loop" },
        ],
        tool: [
          { "@type": "HowToTool", name: "Electronic wall stud finder (or optional 4-Piece Demountable Ladder Stand)" },
          { "@type": "HowToTool", name: "Power drill with 3/16-inch pilot bit" },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Locate one solid 16-inch wood stud or assemble the 4-Piece Ladder Stand",
            text: "Use an electronic stud finder to mark the center of a load-bearing 2x4 wood wall stud at 78 to 86 inches high (or choose the optional 4-Piece Demountable Ladder Stand up to 123 cm for zero wall drilling).",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Assemble the demountable panels and anchor the steel wall bracket",
            text: "Join the precision-coupled 2-piece or 3-piece timber sections, pre-drill pilot holes into the wood stud center, and tighten the heavy-duty lag bolts flush to the wall.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Hook the braided anchor cable and set a gentle 10°–15° incline",
            text: "Clip the board anchor cable onto the bracket (or Ladder Stand Mounting Hooks), lock the sliding alloy carriage pin to your height, and test stability by hand.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Perform 10 minutes of calm inclined unloading and store neatly",
            text: "Lie supine gripping the overhead handles for smooth axial traction with zero upside-down head rush, then unhook or store the compact demountable sections in their Carry Case Bag.",
          },
        ],
      },
    ],
  };

  return <JsonLdScript data={graph} />;
}

export function ComparisonArticleJsonLd({
  comparison,
  lang,
}: {
  comparison: ComparisonPageData;
  lang: Locale;
}) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const canonical = getCanonicalUrl(`/compare/${comparison.slug}/`, lang);
  const meta = getLocalizedComparisonMeta(comparison.slug, lang, {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: comparison.title || meta.title,
    description: meta.description,
    image: `${origin}${comparison.heroImage}`,
    datePublished: "2026-09-15T00:00:00Z",
    dateModified: "2026-11-28T00:00:00Z",
    inLanguage: getRegionalHreflang(lang),
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: `${origin}/centers/`,
    },
    publisher: { "@id": `${origin}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article p:first-of-type"],
    },
  };

  return <JsonLdScript data={schema} />;
}

export function ConditionArticleJsonLd({
  condition,
  lang,
}: {
  condition: ConditionPageData;
  lang: Locale;
}) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const canonical = getCanonicalUrl(`/conditions/${condition.slug}/`, lang);
  const meta = getLocalizedConditionMeta(condition.slug, lang, {
    title: condition.metaTitle,
    description: condition.metaDescription,
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: condition.title || meta.title,
    description: meta.description,
    image: `${origin}${condition.heroImage}`,
    datePublished: "2026-09-15T00:00:00Z",
    dateModified: "2026-11-28T00:00:00Z",
    inLanguage: getRegionalHreflang(lang),
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: `${origin}/centers/`,
    },
    publisher: { "@id": `${origin}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#condition-geo-summary"],
    },
  };

  return <JsonLdScript data={schema} />;
}

export function CalculatorWebAppJsonLd({ lang }: { lang: Locale }) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const calcUrl = getCanonicalUrl("/calculator/", lang);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${calcUrl}#webapp`,
    name: "Evminov Biomechanical Spine Angle & Board Sizing Calculator",
    url: calcUrl,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any (Web Browser)",
    inLanguage: getRegionalHreflang(lang),
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: SITE_CONFIG.currency,
    },
    description:
      "Free interactive inclined-plane spine physics calculator estimating axial traction force, gentle starting incline angle (8°–35°), and optimal Evminov Carpathian pine board sizing.",
    publisher: { "@id": `${origin}/#organization` },
  };

  return <JsonLdScript data={schema} />;
}

export function ClinicsB2bJsonLd({
  lang,
  title,
  description,
}: {
  lang: Locale;
  title: string;
  description: string;
}) {
  const origin = SITE_CONFIG.canonicalOrigin;
  const clinicsUrl = getCanonicalUrl("/clinics/", lang);
  const flagshipWide = PRODUCTS[0].wideDirectPriceUsd;

  const tiers = [
    { name: "1 Station — Pilot Evaluation (Reinforced Wide 30 cm)", discount: 1 },
    { name: "2–3 Stations — Studio Partner Tier (-5% Volume Discount)", discount: 0.95 },
    { name: "4–6 Stations — Multi-Bay Clinic Tier (-10% Volume Discount)", discount: 0.9 },
    { name: "7+ Stations — Regional Center Tier (-15% Volume Discount)", discount: 0.85 },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${clinicsUrl}#webpage`,
        url: clinicsUrl,
        name: title,
        description,
        inLanguage: getRegionalHreflang(lang),
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${origin}/#organization` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#b2b-geo-summary"],
        },
      },
      {
        "@type": "Service",
        "@id": `${clinicsUrl}#b2b-service`,
        name: "Evminov Multi-Station Clinic, Chiropractic & Pilates Studio Equipment Program",
        provider: { "@id": `${origin}/#organization` },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Reinforced Wide 30 cm B2B Volume Partner Tiers",
          itemListElement: tiers.map((tier) => ({
            "@type": "Offer",
            name: tier.name,
            price: String(Math.round(flagshipWide * tier.discount)),
            priceCurrency: SITE_CONFIG.currency,
            availability: "https://schema.org/InStock",
            url: clinicsUrl,
            seller: { "@id": `${origin}/#organization` },
          })),
        },
      },
    ],
  };

  return <JsonLdScript data={schema} />;
}
