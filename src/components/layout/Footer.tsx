"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Youtube } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";
import { PRODUCTS } from "@/data/products";
import { COMPARISONS } from "@/data/comparisons";
import { openCookieSettings } from "@/lib/consent";

export function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const f = dict.footer;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href={getLocalizedHref("/", lang)}
              className="inline-flex items-center gap-2.5 font-display text-lg font-extrabold text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-xs font-black text-amber-300">
                EV
              </span>
              <span>EVMINOV SPINE SYSTEMS</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {f.tagline}
            </p>
            <p className="mt-3 text-xs text-slate-400">
              {SITE_CONFIG.compliance.patentsSummary}
            </p>
            <a
              href={SITE_CONFIG.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
            >
              <Youtube className="h-4 w-4 text-red-400" />
              <span>YouTube {SITE_CONFIG.youtubeHandle}</span>
            </a>
          </div>

          {/* Boards & Tools */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {f.shopHeading}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={getLocalizedHref(`/products/${p.slug}/`, lang)}
                    className="hover:text-white transition-colors"
                  >
                    {p.localizedNames[lang] || p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={getLocalizedHref("/calculator/", lang)}
                  className="text-emerald-400 font-semibold hover:text-emerald-300"
                >
                  {dict.nav.calculator}
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Comparisons */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {f.resourcesHeading}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {COMPARISONS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
                    className="hover:text-white transition-colors"
                  >
                    {c.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={getLocalizedHref("/conditions/", lang)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.conditions}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/guides/", lang)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.guides}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/shipping/", lang)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.shipping}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/welcome/", lang)}
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  {f.welcomeQr}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {f.contactHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span>{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-teal-400" />
                <a href={SITE_CONFIG.phoneHref} className="font-semibold text-white hover:underline">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-teal-400" />
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="hover:text-white hover:underline"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">
              {f.legalHeading}
            </h3>
            <ul className="mt-2.5 space-y-1.5 text-xs">
              <li>
                <Link href={getLocalizedHref("/privacy/", lang)} className="hover:text-white">
                  {f.privacy}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref("/terms/", lang)} className="hover:text-white">
                  {f.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/shipping-returns/", lang)}
                  className="hover:text-white"
                >
                  {f.shippingReturns}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/wellness-disclaimer/", lang)}
                  className="hover:text-white"
                >
                  {f.wellnessDisclaimer}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="underline hover:text-white"
                >
                  {f.cookieSettings}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* General Wellness Classification Notice */}
        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-xs leading-relaxed text-slate-400">
          {f.wellnessNotice}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>
            © {SITE_CONFIG.foundingYear}–2026 {SITE_CONFIG.brandName}. {f.rights}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/llms.txt" className="hover:text-slate-300">
              llms.txt
            </a>
            <a href="/rss.xml" className="hover:text-slate-300">
              RSS
            </a>
            <a href="/sitemap.xml" className="hover:text-slate-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
