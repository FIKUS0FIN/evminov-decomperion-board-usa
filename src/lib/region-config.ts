export type SiteRegion = "US" | "CA";

export const SITE_REGION: SiteRegion =
  process.env.NEXT_PUBLIC_SITE_REGION?.toUpperCase() === "CA" ? "CA" : "US";

export const IS_CANADA = SITE_REGION === "CA";

export const US_ORIGIN = "https://evminovusa.com";
export const CA_ORIGIN = "https://evminovcanada.com";

export interface RegionConfig {
  region: SiteRegion;
  origin: string;
  hostname: string;
  shortName: string;
  legalName: string;
  currency: "USD" | "CAD";
  currencyLocale: string;
  countryCode: "US" | "CA";
  countryName: string;
  defaultHreflang: "en-US" | "en-CA";
  supportEmail: string;
  ordersEmail: string;
  hsaFsaNote: string;
}

export const REGION_CONFIG: RegionConfig = IS_CANADA
  ? {
      region: "CA",
      origin: CA_ORIGIN,
      hostname: "evminovcanada.com",
      shortName: "Evminov Canada",
      legalName: "Evminov Spine Systems Canada",
      currency: "CAD",
      currencyLocale: "en-CA",
      countryCode: "CA",
      countryName: "Canada",
      defaultHreflang: "en-CA",
      supportEmail: "support@evminovcanada.com",
      ordersEmail: "orders@evminovcanada.com",
      hsaFsaNote:
        "Many Canadian customers claim Evminov boards through Extended Health Benefits, a Health Spending Account (HSA), or the CRA Medical Expense Tax Credit with a doctor's prescription or note. We provide an itemized wellness equipment receipt immediately after purchase.",
    }
  : {
      region: "US",
      origin: US_ORIGIN,
      hostname: "evminovusa.com",
      shortName: "Evminov USA",
      legalName: "Evminov Spine Systems USA",
      currency: "USD",
      currencyLocale: "en-US",
      countryCode: "US",
      countryName: "United States",
      defaultHreflang: "en-US",
      supportEmail: "support@evminovusa.com",
      ordersEmail: "orders@evminovusa.com",
      hsaFsaNote:
        "Many US customers use pre-tax HSA/FSA funds with a Letter of Medical Necessity (LMN) from their healthcare provider. We provide an itemized wellness equipment receipt immediately after purchase.",
    };

/**
 * Exact approved retail CAD price mapping for the Canadian store.
 * Falls back to ~1.40x rounded to nearest $5 CAD for any custom amounts.
 */
const USD_TO_CAD_EXACT: Record<number, number> = {
  475: 665,
  615: 860,
  495: 695,
  635: 885,
  25: 35,
  50: 70,
};

export function toRegionalPrice(usdAmount: number): number {
  if (!IS_CANADA) return usdAmount;
  if (USD_TO_CAD_EXACT[usdAmount] !== undefined) {
    return USD_TO_CAD_EXACT[usdAmount];
  }
  return Math.round((usdAmount * 1.4) / 5) * 5;
}
