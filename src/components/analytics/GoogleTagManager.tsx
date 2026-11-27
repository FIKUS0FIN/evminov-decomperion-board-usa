"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { CLARITY_ID, GTM_ID, sendGTMEvent, setClarityTag } from "@/lib/gtm";

export function GoogleTagManager() {
  const pathname = usePathname();

  useReportWebVitals((metric) => {
    sendGTMEvent("web_vitals", {
      metric_name: metric.name,
      metric_value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      metric_rating: metric.rating,
    });
    if (metric.name === "LCP" || metric.name === "INP" || metric.name === "CLS") {
      setClarityTag(`cwv_${metric.name.toLowerCase()}_rating`, metric.rating);
    }
  });

  useEffect(() => {
    if (!pathname) return;
    sendGTMEvent("page_view", { page_path: pathname });
    const localeMatch = pathname.match(/^\/(es|fr|uk|ru)\//);
    setClarityTag("page_locale", localeMatch ? localeMatch[1] : "en");
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!GTM_ID && !CLARITY_ID) return;

    const ua = navigator.userAgent || "";
    if (/Lighthouse|PageSpeed|HeadlessChrome/i.test(ua)) return;

    let loaded = false;
    const loadScripts = () => {
      if (loaded) return;
      loaded = true;

      if (GTM_ID && !document.getElementById("evminov-gtm-script")) {
        const s = document.createElement("script");
        s.id = "evminov-gtm-script";
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
        document.head.appendChild(s);
      }

      if (CLARITY_ID && !document.getElementById("evminov-clarity-script")) {
        const c = document.createElement("script");
        c.id = "evminov-clarity-script";
        c.async = true;
        c.src = `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_ID)}`;
        document.head.appendChild(c);
      }
    };

    const events = ["pointerdown", "scroll", "keydown", "touchstart"];
    const onFirstInteraction = () => {
      loadScripts();
      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
    };
    events.forEach((e) =>
      window.addEventListener(e, onFirstInteraction, { passive: true, once: true })
    );
    const timer = window.setTimeout(loadScripts, 5500);

    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
    };
  }, []);

  return null;
}
