type ClarityFn = ((command: string, ...args: unknown[]) => void) & {
  q?: IArguments[];
};

type WindowWithAnalytics = Window & {
  dataLayer?: Record<string, unknown>[];
  clarity?: ClarityFn;
};

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

const CLARITY_BRIDGED_EVENTS = new Set([
  "view_item",
  "calculator_complete",
  "hsa_savings_toggle",
  "begin_checkout",
  "generate_lead",
  "order_reservation_submit",
  "order_reservation_error",
  "email_protocol_lead",
  "click_phone",
  "click_whatsapp",
  "click_order_cta",
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
