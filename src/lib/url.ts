import { DEFAULT_LOCALE, LOCALES, LOCALE_META, Locale } from "@/i18n/types";
import { SITE_CONFIG } from "@/lib/site-config";

/**
 * Normalizes a route path so it always starts and ends with a trailing slash
 * (matching Next.js `trailingSlash: true` and zero-hop canonicalization).
 */
export function normalizePath(rawPath: string): string {
  if (!rawPath || rawPath === "/") return "/";
  const [pathPart, rest] = rawPath.split(/(?=[?#])/);
  const cleaned = `/${pathPart.replace(/^\/+|\/+$/g, "")}/`;
  return rest ? `${cleaned}${rest}` : cleaned;
}

/**
 * Builds a locale-aware internal href.
 * English (`en`) is served at root `/` (no `/en/` prefix).
 * Non-default locales are served at `/es/`, `/fr/`, `/uk/`, `/ru/`.
 */
export function getLocalizedHref(path: string, lang: Locale): string {
  if (!path) return lang === DEFAULT_LOCALE ? "/" : `/${lang}/`;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("tel:") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }

  const [rawPathname, suffix = ""] = path.split(/(?=[?#])/);
  let basePathname = rawPathname || "/";

  // Strip any existing locale prefix
  for (const loc of LOCALES) {
    if (basePathname === `/${loc}` || basePathname === `/${loc}/`) {
      basePathname = "/";
      break;
    }
    if (basePathname.startsWith(`/${loc}/`)) {
      basePathname = basePathname.slice(loc.length + 1);
      break;
    }
  }

  const normalized = normalizePath(basePathname);
  const localized =
    lang === DEFAULT_LOCALE
      ? normalized
      : normalized === "/"
      ? `/${lang}/`
      : `/${lang}${normalized}`;

  return suffix ? `${localized}${suffix}` : localized;
}

/**
 * Full canonical URL with trailing slash.
 */
export function getCanonicalUrl(path: string, lang: Locale = DEFAULT_LOCALE): string {
  const href = getLocalizedHref(path, lang).split(/[?#]/)[0];
  return `${SITE_CONFIG.canonicalOrigin}${href}`;
}

/**
 * Generates Next.js `alternates.languages` map for full 5-language hreflang parity.
 */
export function getHreflangAlternates(
  path: string,
  availableLocales: readonly Locale[] = LOCALES
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of availableLocales) {
    languages[LOCALE_META[loc].hreflang] = getCanonicalUrl(path, loc);
  }
  languages["x-default"] = getCanonicalUrl(path, DEFAULT_LOCALE);
  return languages;
}

/**
 * Builds a pre-filled 1-click Order / Reservation deep link (inspired by Smista's Step-3 wizard links).
 */
export function buildPrefilledOrderUrl(params: {
  lang?: Locale;
  product?: string;
  finish?: string;
  shipping?: "direct" | "express";
  stand?: boolean;
  angle?: number;
  state?: string;
  goal?: string;
  step?: number;
}): string {
  const lang = params.lang || DEFAULT_LOCALE;
  const search = new URLSearchParams();
  if (params.product) search.set("product", params.product);
  if (params.finish) search.set("finish", params.finish);
  if (params.shipping) search.set("shipping", params.shipping);
  if (params.stand) search.set("stand", "1");
  if (params.angle) search.set("angle", String(params.angle));
  if (params.state) search.set("state", params.state);
  if (params.goal) search.set("goal", params.goal);
  if (params.step) search.set("step", String(params.step));
  const qs = search.toString();
  const base = getLocalizedHref("/order/", lang);
  return qs ? `${base}?${qs}#order-form` : `${base}#order-form`;
}
