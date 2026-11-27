import { MetadataRoute } from "next";
import { LOCALES, LOCALE_META } from "@/i18n/types";
import { SITE_CONFIG } from "@/lib/site-config";
import { getCanonicalUrl } from "@/lib/url";
import { PRODUCTS } from "@/data/products";
import { COMPARISONS } from "@/data/comparisons";
import { CONDITIONS } from "@/data/conditions";
import { GUIDES } from "@/data/guides";
import { US_STATES } from "@/data/us-states";

export const dynamic = "force-static";

interface RouteSpec {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  images?: string[];
  lastModified?: Date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = SITE_CONFIG.canonicalOrigin;
  const now = new Date();

  const multilingualRoutes: RouteSpec[] = [
    {
      path: "/",
      priority: 1.0,
      changeFrequency: "weekly",
      images: [
        `${origin}/images/authentic/hero-full-device-traction.jpg`,
        `${origin}/images/authentic/evminov-board-profile.jpg`,
      ],
    },
    { path: "/products/", priority: 0.95, changeFrequency: "weekly" },
    { path: "/calculator/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/order/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/compare/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/conditions/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/guides/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/shipping/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/centers/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/welcome/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/shipping-returns/", priority: 0.4, changeFrequency: "yearly" },
    { path: "/wellness-disclaimer/", priority: 0.4, changeFrequency: "yearly" },
    ...PRODUCTS.map((p) => ({
      path: `/products/${p.slug}/`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
      images: [`${origin}${p.image}`],
    })),
    ...COMPARISONS.map((c) => ({
      path: `/compare/${c.slug}/`,
      priority: 0.85,
      changeFrequency: "monthly" as const,
      images: [`${origin}${c.heroImage}`],
    })),
    ...CONDITIONS.map((c) => ({
      path: `/conditions/${c.slug}/`,
      priority: 0.85,
      changeFrequency: "monthly" as const,
      images: [`${origin}${c.heroImage}`],
    })),
    ...GUIDES.map((g) => ({
      path: `/guides/${g.slug}/`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: [`${origin}${g.heroImage}`],
      lastModified: new Date(g.dateModified),
    })),
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of multilingualRoutes) {
    const languages: Record<string, string> = {};
    for (const loc of LOCALES) {
      languages[LOCALE_META[loc].hreflang] = getCanonicalUrl(route.path, loc);
    }
    languages["x-default"] = getCanonicalUrl(route.path, "en");

    for (const loc of LOCALES) {
      entries.push({
        url: getCanonicalUrl(route.path, loc),
        lastModified: route.lastModified || now,
        changeFrequency: route.changeFrequency,
        priority: loc === "en" ? route.priority : Number((route.priority * 0.95).toFixed(2)),
        images: route.images,
        alternates: { languages },
      });
    }
  }

  // Programmatic 50 US State Shipping Pages (English US canonical)
  for (const state of US_STATES) {
    const url = getCanonicalUrl(`/shipping/${state.slug}/`, "en");
    entries.push({
      url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          "en-US": url,
          "x-default": url,
        },
      },
    });
  }

  return entries;
}
