export type Locale = "en" | "es" | "fr" | "de" | "uk" | "ru";

export const LOCALES: readonly Locale[] = ["en", "es", "fr", "de", "uk", "ru"] as const;
export const NON_DEFAULT_LOCALES: readonly Exclude<Locale, "en">[] = [
  "es",
  "fr",
  "de",
  "uk",
  "ru",
] as const;

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  {
    code: Locale;
    hreflang: string;
    ogLocale: string;
    nativeName: string;
    shortLabel: string;
    regionNote: string;
  }
> = {
  en: {
    code: "en",
    hreflang: "en-US",
    ogLocale: "en_US",
    nativeName: "English",
    shortLabel: "EN",
    regionNote: "USA & Global",
  },
  es: {
    code: "es",
    hreflang: "es-US",
    ogLocale: "es_US",
    nativeName: "Español",
    shortLabel: "ES",
    regionNote: "Estados Unidos & LATAM",
  },
  fr: {
    code: "fr",
    hreflang: "fr-CA",
    ogLocale: "fr_CA",
    nativeName: "Français",
    shortLabel: "FR",
    regionNote: "Canada & Europe",
  },
  de: {
    code: "de",
    hreflang: "de-DE",
    ogLocale: "de_DE",
    nativeName: "Deutsch",
    shortLabel: "DE",
    regionNote: "Deutschland, Österreich & Schweiz",
  },
  uk: {
    code: "uk",
    hreflang: "uk-UA",
    ogLocale: "uk_UA",
    nativeName: "Українська",
    shortLabel: "UK",
    regionNote: "Україна & США",
  },
  ru: {
    code: "ru",
    hreflang: "ru",
    ogLocale: "ru_RU",
    nativeName: "Русский",
    shortLabel: "RU",
    regionNote: "США, Канада и Европа",
  },
};

export function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
