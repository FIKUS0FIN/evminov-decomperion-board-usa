/**
 * Consent Mode v2 & Microsoft Clarity Full-Coverage Telemetry Utilities.
 * Matches Smista production analytics configuration: unconditionally grants
 * analytics & marketing signals so 100% of session and conversion telemetry
 * reaches Google (GA4/Ads/GTM) and Microsoft Clarity regardless of banner choice,
 * while recording the visitor's banner selection for reporting.
 */

export type ConsentChoice = "all" | "necessary" | "analytics" | "marketing";

export const CONSENT_KEY = "evminov-cookie-consent-v1";
export const OPEN_COOKIE_SETTINGS_EVENT = "evminov:open-cookie-settings";

export interface ConsentState {
  ad_storage: "granted" | "denied";
  analytics_storage: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  functionality_storage: "granted" | "denied";
  personalization_storage: "granted" | "denied";
  security_storage: "granted";
}

const GRANTED_STATE: ConsentState = {
  ad_storage: "granted",
  analytics_storage: "granted",
  ad_personalization: "granted",
  ad_user_data: "granted",
  functionality_storage: "granted",
  personalization_storage: "granted",
  security_storage: "granted",
};

export function resolveConsentState(choice: ConsentChoice): ConsentState {
  switch (choice) {
    case "all":
    case "analytics":
    case "marketing":
    case "necessary":
    default:
      return GRANTED_STATE;
  }
}

/**
 * Ensure `window.clarity` queue exists before clarity.js loads and grant full
 * Clarity consent so 100% of sessions, heatmaps, and recordings are captured.
 */
export function forceClarityFullConsent(choiceTag?: string): void {
  if (typeof window === "undefined") return;
  try {
    const win = window as Window & {
      clarity?: ((cmd: string, ...args: unknown[]) => void) & { q?: IArguments[] };
    };
    if (typeof win.clarity !== "function") {
      const clarityFn = function () {
        // eslint-disable-next-line prefer-rest-params
        (clarityFn.q = clarityFn.q || []).push(arguments);
      } as ((cmd: string, ...args: unknown[]) => void) & { q?: IArguments[] };
      win.clarity = clarityFn;
    }
    win.clarity("consent");
    win.clarity("consentv2", {
      ad_Storage: "granted",
      analytics_Storage: "granted",
    });
    if (choiceTag) {
      win.clarity("set", "cookie_banner_choice", choiceTag);
    }
  } catch {
    // Ignore Clarity runtime errors
  }
}

export function updateConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;

  const state = resolveConsentState(choice);
  const win = window as Window & {
    dataLayer?: unknown[];
  };

  win.dataLayer = win.dataLayer || [];
  function gtag(...args: unknown[]) {
    win.dataLayer?.push(args);
  }
  gtag("consent", "update", state);
  win.dataLayer.push({
    event: "consent_update",
    consent_choice: choice,
    analytics_storage: state.analytics_storage,
    ad_storage: state.ad_storage,
  });

  forceClarityFullConsent(choice);

  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Private browsing fallback
  }
}

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const val = localStorage.getItem(CONSENT_KEY);
    if (
      val === "all" ||
      val === "necessary" ||
      val === "analytics" ||
      val === "marketing"
    ) {
      return val;
    }
  } catch {
    // ignore
  }
  return null;
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
