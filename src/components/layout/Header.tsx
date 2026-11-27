"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Sparkles, Globe, ShieldCheck } from "lucide-react";
import { LOCALES, LOCALE_META, Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { sendGTMEvent } from "@/lib/gtm";

export function Header({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).nav;
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const { applyHsaSavings, toggleHsaSavings } = useHsaSavings();

  // State pages exist in English (/shipping/[state]/); switching locale from a state page routes to localized /shipping/
  const isStateDetailPage = /^\/shipping\/[^/]+\/?$/.test(pathname);
  const switchBasePath = isStateDetailPage ? "/shipping/" : pathname;

  const navItems = [
    { label: t.products, href: getLocalizedHref("/products/", lang) },
    { label: t.calculator, href: getLocalizedHref("/calculator/", lang) },
    { label: t.compare, href: getLocalizedHref("/compare/", lang) },
    { label: t.conditions, href: getLocalizedHref("/conditions/", lang) },
    { label: t.guides, href: getLocalizedHref("/guides/", lang) },
    { label: t.shipping, href: getLocalizedHref("/shipping/", lang) },
    { label: t.centers, href: getLocalizedHref("/centers/", lang) },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      {/* Top Utility Strip: Global HSA/FSA ~30% Toggle + 5-Language Switcher */}
      <div className="border-b border-slate-100 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <button
            type="button"
            onClick={toggleHsaSavings}
            aria-pressed={applyHsaSavings}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-medium text-emerald-300 transition hover:bg-white/20"
          >
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            <span>
              {applyHsaSavings ? t.hsaToggleActive : t.hsaToggleLabel}
            </span>
            <span
              className={`inline-block h-4 w-7 rounded-full p-0.5 transition-colors ${
                applyHsaSavings ? "bg-emerald-500" : "bg-slate-600"
              }`}
            >
              <span
                className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                  applyHsaSavings ? "translate-x-3" : "translate-x-0"
                }`}
              />
            </span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() => sendGTMEvent("click_phone", { location: "topbar" })}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <nav aria-label="Language selector" className="flex items-center gap-1">
              <Globe className="mr-1 h-3.5 w-3.5 text-slate-400" />
              {LOCALES.map((loc) => {
                const active = loc === lang;
                return (
                  <Link
                    key={loc}
                    href={getLocalizedHref(switchBasePath, loc)}
                    hrefLang={LOCALE_META[loc].hreflang}
                    className={`rounded px-1.5 py-0.5 font-semibold transition ${
                      active
                        ? "bg-teal-600 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {LOCALE_META[loc].shortLabel}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href={getLocalizedHref("/", lang)}
          className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-slate-950"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-teal-800 text-sm font-black text-amber-400 shadow-sm">
            EV
          </span>
          <span>
            EVMINOV{" "}
            <span className="text-teal-700 font-bold">SPINE</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("evminov:toggle-ai-chat"));
              sendGTMEvent("ai_chat_open", { source: "header" });
            }}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-bold text-teal-800 transition hover:bg-teal-100"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI</span>
          </button>

          <Link
            href={getLocalizedHref("/order/", lang)}
            onClick={() => sendGTMEvent("click_order_cta", { location: "header" })}
            className="rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800"
          >
            {t.orderNow}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex lg:hidden items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-50"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-900"
            >
              <Phone className="h-4 w-4 text-teal-700" />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
