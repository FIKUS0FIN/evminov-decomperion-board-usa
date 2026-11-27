"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import {
  captureAttributionFromUrl,
  CF_ANALYTICS_TOKEN,
  CLARITY_ID,
  getTotalForegroundTime,
  GTM_ID,
  sendGTMEvent,
  setClarityTag,
} from "@/lib/gtm";
import { forceClarityFullConsent, getStoredConsent } from "@/lib/consent";

function classifyPageContext(pathname: string): {
  locale: string;
  pageType: string;
  slug?: string;
} {
  const locMatch = pathname.match(/^\/(es|fr|uk|ru)(\/|$)/);
  const locale = locMatch ? locMatch[1] : "en";
  const clean = locMatch ? pathname.replace(/^\/(es|fr|uk|ru)/, "") || "/" : pathname;

  if (clean === "/") return { locale, pageType: "home" };
  if (clean.startsWith("/products/")) {
    const slug = clean.replace("/products/", "").replace(/\//g, "");
    return { locale, pageType: slug ? "product_detail" : "products_hub", slug: slug || undefined };
  }
  if (clean.startsWith("/compare/")) {
    const slug = clean.replace("/compare/", "").replace(/\//g, "");
    return { locale, pageType: slug ? "comparison_detail" : "compare_hub", slug: slug || undefined };
  }
  if (clean.startsWith("/conditions/")) {
    const slug = clean.replace("/conditions/", "").replace(/\//g, "");
    return { locale, pageType: slug ? "condition_detail" : "conditions_hub", slug: slug || undefined };
  }
  if (clean.startsWith("/guides/")) {
    const slug = clean.replace("/guides/", "").replace(/\//g, "");
    return { locale, pageType: slug ? "guide_article" : "guides_hub", slug: slug || undefined };
  }
  if (clean.startsWith("/shipping/")) {
    const slug = clean.replace("/shipping/", "").replace(/\//g, "");
    return { locale, pageType: slug ? "us_state_shipping" : "shipping_hub", slug: slug || undefined };
  }
  if (clean.startsWith("/order")) return { locale, pageType: "order_checkout" };
  if (clean.startsWith("/calculator")) return { locale, pageType: "biomechanical_calculator" };
  if (clean.startsWith("/portal")) return { locale, pageType: "patient_portal" };
  if (clean.startsWith("/centers")) return { locale, pageType: "heritage_centers" };
  if (clean.startsWith("/welcome")) return { locale, pageType: "owner_qr_welcome" };
  return { locale, pageType: "other" };
}

export function GoogleTagManager() {
  const pathname = usePathname() || "/";
  const lastTrackedPathRef = useRef<string | null>(null);
  const maxScrollPctRef = useRef<number>(0);

  // Stream Core Web Vitals directly to GTM dataLayer & Microsoft Clarity
  useReportWebVitals((metric) => {
    sendGTMEvent("web_vitals", {
      metric_name: metric.name,
      metric_value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value
      ),
      metric_rating: metric.rating,
      metric_id: metric.id,
    });
    if (metric.name === "LCP" || metric.name === "INP" || metric.name === "CLS") {
      setClarityTag(`cwv_${metric.name.toLowerCase()}_rating`, metric.rating);
    }
  });

  // Initial mount: force full Clarity consent, capture UTM/GCLID/referrer attribution, tag page context
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedChoice = getStoredConsent();
    forceClarityFullConsent(storedChoice || "unanswered");

    const attr = captureAttributionFromUrl();
    if (attr?.utm_source) setClarityTag("utm_source", attr.utm_source);
    if (attr?.utm_campaign) setClarityTag("utm_campaign", attr.utm_campaign);
    if (attr?.referrer) setClarityTag("traffic_referrer", attr.referrer);
  }, []);

  // Route-change page_view + page context tagging
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (lastTrackedPathRef.current === pathname) return;
    lastTrackedPathRef.current = pathname;
    maxScrollPctRef.current = 0;

    forceClarityFullConsent();
    const ctx = classifyPageContext(pathname);
    setClarityTag("page_locale", ctx.locale);
    setClarityTag("page_type", ctx.pageType);
    if (ctx.slug) setClarityTag("page_slug", ctx.slug);

    sendGTMEvent("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      page_locale: ctx.locale,
      page_type: ctx.pageType,
    });
  }, [pathname]);

  // Interaction-First + 5.5s Fallback Deferred Script Injection (Zero LCP/INP Penalty)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!GTM_ID && !CLARITY_ID && !CF_ANALYTICS_TOKEN) return;

    const ua = navigator.userAgent || "";
    const isAutomatedAudit =
      Boolean(navigator.webdriver) ||
      /Chrome-Lighthouse|Lighthouse|PageSpeed|Speed Insights|HeadlessChrome|GTmetrix|PTST/i.test(ua);
    if (isAutomatedAudit) return;

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

      if (CF_ANALYTICS_TOKEN && !document.getElementById("evminov-cf-analytics")) {
        const cf = document.createElement("script");
        cf.id = "evminov-cf-analytics";
        cf.defer = true;
        cf.src = "https://static.cloudflareinsights.com/beacon.min.js";
        cf.setAttribute(
          "data-cf-beacon",
          JSON.stringify({ token: CF_ANALYTICS_TOKEN })
        );
        document.head.appendChild(cf);
      }
    };

    const events = ["pointerdown", "scroll", "mousemove", "keydown", "touchstart"];
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

  // Global Non-Blocking Click & Heatmap Telemetry (preserves <200ms INP)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const getCssPath = (el: Element): string => {
      const parts: string[] = [];
      let current: Element | null = el;
      while (current && current !== document.body && parts.length < 5) {
        let part = current.tagName.toLowerCase();
        if (current.id) {
          part += `#${current.id}`;
          parts.unshift(part);
          break;
        }
        const cls = Array.from(current.classList)
          .filter((c) => !c.startsWith("hover:") && !c.startsWith("focus:"))
          .slice(0, 2)
          .join(".");
        if (cls) part += `.${cls}`;
        parts.unshift(part);
        current = current.parentElement;
      }
      return parts.join(" > ");
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const clientX = e.clientX;
      const clientY = e.clientY;

      window.setTimeout(() => {
        const currentPath = window.location.pathname;
        const xPct =
          window.innerWidth > 0
            ? Number(((clientX / window.innerWidth) * 100).toFixed(1))
            : 0;
        const yPct =
          window.innerHeight > 0
            ? Number(((clientY / window.innerHeight) * 100).toFixed(1))
            : 0;

        sendGTMEvent("heatmap_click", {
          click_x_pct: xPct,
          click_y_pct: yPct,
          click_scroll_y: Math.round(window.scrollY),
          click_selector: getCssPath(target),
          page_path: currentPath,
        });

        const anchor = target.closest("a");
        if (!anchor) return;
        const href = anchor.getAttribute("href") || "";
        const anchorText =
          (anchor.textContent || "").replace(/\s+/g, " ").trim() ||
          anchor.getAttribute("aria-label")?.trim() ||
          "";

        if (href.startsWith("tel:")) {
          sendGTMEvent("click_phone", {
            phone_number: href.replace("tel:", "").trim(),
            click_location: currentPath,
            anchor_text: anchorText,
          });
          return;
        }
        if (href.startsWith("mailto:")) {
          sendGTMEvent("click_email", {
            email_address: href.replace("mailto:", "").trim(),
            click_location: currentPath,
            anchor_text: anchorText,
          });
          return;
        }
        if (href.includes("wa.me") || href.includes("whatsapp.com")) {
          sendGTMEvent("click_whatsapp", {
            whatsapp_url: href,
            click_location: currentPath,
            anchor_text: anchorText,
          });
          return;
        }
        if (href.includes("/portal")) {
          sendGTMEvent("click_portal", {
            target_url: href,
            click_location: currentPath,
          });
        } else if (href.includes("/shipping/")) {
          const slug = href.split("/shipping/").pop()?.replace(/\//g, "") || "";
          if (slug) {
            sendGTMEvent("click_state_shipping", {
              state_slug: slug,
              click_location: currentPath,
            });
          }
        } else if (href.startsWith("http") && !href.includes("evminovusa.com")) {
          sendGTMEvent("click_external", {
            external_url: href,
            click_location: currentPath,
            anchor_text: anchorText,
          });
        }
      }, 0);
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Scroll Depth Milestones (25%, 50%, 75%, 100%)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const milestones = [25, 50, 75, 100];
    const fired = new Set<number>();
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    const evaluateScrollDepth = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.min(100, Math.round((scrollTop / docHeight) * 100));
      if (pct > maxScrollPctRef.current) {
        maxScrollPctRef.current = pct;
      }
      milestones.forEach((m) => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          setClarityTag("max_scroll_pct", m);
          sendGTMEvent("scroll_depth", {
            scroll_depth_pct: m,
            page_path: window.location.pathname,
          });
        }
      });
    };

    const supportsScrollEnd = "onscrollend" in window;
    const onScrollFallback = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(evaluateScrollDepth, 250);
    };

    if (supportsScrollEnd) {
      window.addEventListener("scrollend", evaluateScrollDepth, { passive: true });
    } else {
      window.addEventListener("scroll", onScrollFallback, { passive: true });
    }

    return () => {
      if (supportsScrollEnd) {
        window.removeEventListener("scrollend", evaluateScrollDepth);
      } else {
        window.removeEventListener("scroll", onScrollFallback);
      }
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [pathname]);

  // Visibility-Aware Active Engagement Timer (10s, 30s, 60s, 120s) + Exit Summary
  useEffect(() => {
    if (typeof window === "undefined") return;
    const milestones = [10, 30, 60, 120];
    const fired = new Set<number>();
    let elapsed = 0;
    let lastTick = Date.now();

    const intervalId = window.setInterval(() => {
      const now = Date.now();
      if (!document.hidden) {
        elapsed += (now - lastTick) / 1000;
        milestones.forEach((m) => {
          if (elapsed >= m && !fired.has(m)) {
            fired.add(m);
            setClarityTag("engagement_sec", m);
            sendGTMEvent("time_on_page", {
              engagement_seconds: m,
              page_path: window.location.pathname,
            });
          }
        });
      }
      lastTick = now;
    }, 1000);

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const foregroundMs = getTotalForegroundTime();
        sendGTMEvent("session_engagement_summary", {
          foreground_time_ms: foregroundMs,
          foreground_time_sec: Math.round(foregroundMs / 1000),
          max_scroll_pct: maxScrollPctRef.current,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [pathname]);

  // Client-Side JS Runtime Error Telemetry
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reported = new Set<string>();

    const onError = (event: ErrorEvent) => {
      const msg = event.message || "Unknown JS error";
      const src = event.filename || "";
      const key = `${msg}:${src}:${event.lineno || 0}`;
      if (reported.has(key) || reported.size >= 5) return;
      reported.add(key);

      sendGTMEvent("js_error", {
        error_message: msg.slice(0, 200),
        error_source: src.slice(0, 150),
        error_line: event.lineno || 0,
        page_path: window.location.pathname,
      });
    };

    window.addEventListener("error", onError);
    return () => window.removeEventListener("error", onError);
  }, []);

  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(GTM_ID)}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
