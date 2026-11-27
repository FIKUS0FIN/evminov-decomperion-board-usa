import type { Metadata } from "next";
import { LOCALES, LOCALE_META, Locale } from "@/i18n/types";
import { SITE_CONFIG } from "@/lib/site-config";
import { getCanonicalUrl, getHreflangAlternates } from "@/lib/url";

export function buildPageMetadata(options: {
  path: string;
  lang: Locale;
  title: string;
  description: string;
  image?: string;
  availableLocales?: readonly Locale[];
}): Metadata {
  const canonical = getCanonicalUrl(options.path, options.lang);
  const ogImage = options.image
    ? `${SITE_CONFIG.canonicalOrigin}${options.image}`
    : `${SITE_CONFIG.canonicalOrigin}/images/social/evminov-decompression-studio-preview.jpg`;

  return {
    title: options.title,
    description: options.description,
    alternates: {
      canonical,
      languages: getHreflangAlternates(
        options.path,
        options.availableLocales || LOCALES
      ),
    },
    openGraph: {
      type: "website",
      locale: LOCALE_META[options.lang].ogLocale,
      url: canonical,
      siteName: SITE_CONFIG.brandName,
      title: options.title,
      description: options.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: options.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images: [ogImage],
    },
  };
}
