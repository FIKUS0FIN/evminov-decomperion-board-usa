import type { Metadata } from "next";
import { LOCALES, LOCALE_META, Locale } from "@/i18n/types";
import { SITE_CONFIG } from "@/lib/site-config";
import { getCanonicalUrl, getHreflangAlternates } from "@/lib/url";

function cleanPageTitle(rawTitle: string): string {
  return rawTitle
    .replace(/\s*\|\s*Evminov Spine Systems\s*$/i, "")
    .replace(/\s*\|\s*Evminov Board\s*$/i, "")
    .trim();
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
  const title = cleanPageTitle(options.title);
  const ogImage = options.image
    ? `${SITE_CONFIG.canonicalOrigin}${options.image}`
    : `${SITE_CONFIG.canonicalOrigin}/images/social/evminov-decompression-studio-preview.jpg`;

  const other: Record<string, string> = {};
  if (typeof options.productPriceUsd === "number" && options.productPriceUsd > 0) {
    other["product:price:amount"] = String(options.productPriceUsd);
    other["product:price:currency"] = "USD";
    other["product:availability"] = "in stock";
    other["product:brand"] = SITE_CONFIG.brandName;
    other["og:price:amount"] = String(options.productPriceUsd);
    other["og:price:currency"] = "USD";
  }

  return {
    title,
    description: options.description,
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
      locale: LOCALE_META[options.lang].ogLocale,
      url: canonical,
      siteName: SITE_CONFIG.brandName,
      title,
      description: options.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: options.description,
      images: [ogImage],
    },
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}
