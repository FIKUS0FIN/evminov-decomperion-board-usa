import type { Metadata } from "next";
import { LOCALES, LOCALE_META, Locale } from "@/i18n/types";
import { IS_CANADA } from "@/lib/region-config";
import { SITE_CONFIG } from "@/lib/site-config";
import { getCanonicalUrl, getHreflangAlternates } from "@/lib/url";

function regionalizeMetaText(raw: string): string {
  if (!IS_CANADA) return raw;
  return raw
    .replace(/\b50 US states\b/gi, "13 Canadian provinces")
    .replace(/\bHSA\/FSA\b/g, "Extended Health / HSA")
    .replace(/\bEvminov USA\b/gi, "Evminov Canada");
}

function cleanPageTitle(rawTitle: string): string {
  return rawTitle
    .replace(/\s*\|\s*Evminov Spine Systems\s*$/i, "")
    .replace(/\s*\|\s*Evminov Board\s*$/i, "")
    .replace(/\s*\|\s*Evminov USA\s*$/i, "")
    .replace(/\s*\|\s*Evminov Canada\s*$/i, "")
    .replace(/\s*\|\s*Evminov\s*$/i, "")
    .trim();
}

function cleanMetaDescription(raw: string): string {
  const normalized = raw.replace(/\s+/g, " ").trim();
  if (normalized.length <= 160) return normalized;
  const sliced = normalized.slice(0, 157);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 110 ? sliced.slice(0, lastSpace) : sliced).replace(/[.,;:\-–—]+$/, "")}…`;
}

export function buildPageMetadata(options: {
  path: string;
  lang: Locale;
  title: string;
  description: string;
  image?: string;
  availableLocales?: readonly Locale[];
  productPriceUsd?: number;
}): Metadata {
  const canonical = getCanonicalUrl(options.path, options.lang);
  const title = cleanPageTitle(regionalizeMetaText(options.title));
  const description = cleanMetaDescription(regionalizeMetaText(options.description));
  const ogLocale = IS_CANADA
    ? `${options.lang}_CA`
    : LOCALE_META[options.lang].ogLocale;
  const ogImage = options.image
    ? `${SITE_CONFIG.canonicalOrigin}${options.image}`
    : `${SITE_CONFIG.canonicalOrigin}/images/social/evminov-decompression-studio-preview.jpg`;

  const other: Record<string, string> = {};
  if (typeof options.productPriceUsd === "number" && options.productPriceUsd > 0) {
    other["product:price:amount"] = String(options.productPriceUsd);
    other["product:price:currency"] = SITE_CONFIG.currency;
    other["product:availability"] = "in stock";
    other["product:brand"] = SITE_CONFIG.brandName;
    other["og:price:amount"] = String(options.productPriceUsd);
    other["og:price:currency"] = SITE_CONFIG.currency;
  }

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getHreflangAlternates(
        options.path,
        options.availableLocales || LOCALES
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: canonical,
      siteName: SITE_CONFIG.legalName,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}
