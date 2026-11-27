/**
 * Genuine GDPR / CCPA Consent Mode v2 Management.
 * Honors user privacy selections honestly (unlike force-grant antipatterns).
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

export function resolveConsentState(choice: ConsentChoice): ConsentState {
  switch (choice) {
    case "all":
      return {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_personalization: "granted",
        ad_user_data: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      };
    case "analytics":
      return {
        ad_storage: "denied",
        analytics_storage: "granted",
        ad_personalization: "denied",
        ad_user_data: "denied",
        functionality_storage: "granted",
        personalization_storage: "denied",
        security_storage: "granted",
      };
    case "marketing":
      return {
        ad_storage: "granted",
        analytics_storage: "denied",
        ad_personalization: "granted",
        ad_user_data: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      };
    case "necessary":
    default:
      return {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_personalization: "denied",
        ad_user_data: "denied",
        functionality_storage: "granted",
        personalization_storage: "denied",
        security_storage: "granted",
      };
  }
}

export function updateConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;

  const state = resolveConsentState(choice);
  const win = window as Window & {
    dataLayer?: unknown[];
    clarity?: ((cmd: string, ...args: unknown[]) => void) & { q?: unknown[] };
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

  try {
    if (typeof win.clarity === "function") {
      win.clarity("consentv2", {
        ad_Storage: state.ad_storage,
        analytics_Storage: state.analytics_storage,
      });
      win.clarity("set", "cookie_banner_choice", choice);
    }
  } catch {
    // Ignore Clarity runtime errors
  }

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
