type ClarityFn = ((command: string, ...args: unknown[]) => void) & {
  q?: IArguments[];
};

type WindowWithAnalytics = Window & {
  dataLayer?: Record<string, unknown>[];
  clarity?: ClarityFn;
};

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "zk40l7z943";
export const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN || "";

const ATTRIBUTION_KEY = "evminov_attribution_v1";

let sessionStartMs = typeof performance !== "undefined" ? performance.now() : 0;

export function resetForegroundClock(): void {
  sessionStartMs = typeof performance !== "undefined" ? performance.now() : 0;
}

export function getTotalForegroundTime(): number {
  if (typeof performance === "undefined") return 0;
  return Math.max(0, Math.round(performance.now() - sessionStartMs));
}

export interface AttributionSnapshot {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  referrer?: string;
  landing_path?: string;
}

export function captureAttributionFromUrl(): AttributionSnapshot | null {
  if (typeof window === "undefined") return null;
  try {
    const existingRaw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    const existing: AttributionSnapshot = existingRaw
      ? (JSON.parse(existingRaw) as AttributionSnapshot)
      : {};

    const params = new URLSearchParams(window.location.search);
    const keys: Array<keyof AttributionSnapshot> = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "fbclid",
      "msclkid",
    ];

    const updated: AttributionSnapshot = { ...existing };
    for (const k of keys) {
      const val = params.get(k);
      if (val) updated[k] = val.slice(0, 120);
    }

    if (!updated.landing_path) {
      updated.landing_path = window.location.pathname;
    }
    if (!updated.referrer && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (!refUrl.hostname.includes("evminovusa.com")) {
          updated.referrer = refUrl.hostname.slice(0, 120);
        }
      } catch {
        // ignore invalid referrer
      }
    }

    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return null;
  }
}

export function getAttributionSummary(): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    if (!raw) return "";
    const data = JSON.parse(raw) as AttributionSnapshot;
    const parts = [
      data.utm_source ? `source=${data.utm_source}` : "",
      data.utm_medium ? `medium=${data.utm_medium}` : "",
      data.utm_campaign ? `campaign=${data.utm_campaign}` : "",
      data.gclid ? "gclid=present" : "",
      data.fbclid ? "fbclid=present" : "",
      data.msclkid ? "msclkid=present" : "",
      data.referrer ? `ref=${data.referrer}` : "",
      data.landing_path ? `landing=${data.landing_path}` : "",
    ].filter(Boolean);
    return parts.join(" | ");
  } catch {
    return "";
  }
}

const CLARITY_BRIDGED_EVENTS = new Set([
  "view_item",
  "calculator_complete",
  "calculator_share",
  "hsa_savings_toggle",
  "begin_checkout",
  "generate_lead",
  "order_reservation_submit",
  "order_reservation_error",
  "email_protocol_lead",
  "warranty_registered",
  "portal_profile_activated",
  "portal_comfort_logged",
  "click_phone",
  "click_email",
  "click_whatsapp",
  "click_order_cta",
  "click_portal",
  "click_state_shipping",
  "click_external",
  "ai_chat_open",
  "video_play",
  "voice_input_complete",
  "review_copy_click",
  "page_not_found",
  "js_error",
]);

const CLARITY_PRIORITY_UPGRADE_EVENTS = new Set([
  "begin_checkout",
  "order_reservation_submit",
  "order_reservation_error",
  "warranty_registered",
  "generate_lead",
  "click_phone",
  "js_error",
]);

export function ensureClarityQueue(): ClarityFn | null {
  if (typeof window === "undefined") return null;
  const win = window as WindowWithAnalytics;
  if (typeof win.clarity !== "function") {
    const clarityFn = function () {
      // eslint-disable-next-line prefer-rest-params
      (clarityFn.q = clarityFn.q || []).push(arguments);
    } as ClarityFn;
    win.clarity = clarityFn;
  }
  return win.clarity;
}

export function setClarityTag(
  key: string,
  value: string | number | boolean
): void {
  if (typeof window === "undefined") return;
  try {
    const clarity = ensureClarityQueue();
    if (clarity) clarity("set", key, String(value));
  } catch {
    // ignore
  }
}

export function sendGTMEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  const win = window as WindowWithAnalytics;
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({
    event: eventName,
    ...eventParams,
  });

  try {
    const clarity = ensureClarityQueue();
    if (clarity && CLARITY_BRIDGED_EVENTS.has(eventName)) {
      clarity("event", eventName);
      if (CLARITY_PRIORITY_UPGRADE_EVENTS.has(eventName)) {
        clarity("upgrade", eventName);
      }
      if (eventParams) {
        if (eventParams.product_slug) {
          clarity("set", "product_slug", String(eventParams.product_slug));
        }
        if (eventParams.state_code) {
          clarity("set", "us_state", String(eventParams.state_code));
        }
        if (eventParams.locale) {
          clarity("set", "page_locale", String(eventParams.locale));
        }
      }
    }
  } catch {
    // ignore
  }
}
