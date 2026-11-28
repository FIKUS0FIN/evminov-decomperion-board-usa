"use client";

import Link from "next/link";
import {
  Activity,
  Award,
  CheckCircle2,
  CreditCard,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Shield,
  ShieldCheck,
  Star,
  Truck,
  Youtube,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";
import { PRODUCTS } from "@/data/products";
import { openCookieSettings } from "@/lib/consent";
import { EvminovBrandLockup } from "@/components/brand/EvminovLogo";
import { FOOTER_CONTENT } from "@/i18n/locales/chrome";

export function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const f = dict.footer;
  const fc = FOOTER_CONTENT[lang];

  const trustCardStyles = [
    { href: getLocalizedHref("/centers/", lang), icon: ShieldCheck, iconBg: "bg-emerald-500/15 text-emerald-400", tagColor: "text-emerald-400" },
    { href: getLocalizedHref("/wellness-disclaimer/", lang), icon: CreditCard, iconBg: "bg-sky-400/15 text-sky-400", tagColor: "text-sky-400" },
    { href: getLocalizedHref("/centers/", lang), icon: Award, iconBg: "bg-indigo-400/15 text-indigo-400", tagColor: "text-indigo-400" },
    { href: getLocalizedHref("/conditions/athlete-spine-recovery/", lang), icon: Activity, iconBg: "bg-amber-400/15 text-amber-400", tagColor: "text-amber-400" },
    { href: getLocalizedHref("/terms/", lang), icon: Shield, iconBg: "bg-teal-400/15 text-teal-400", tagColor: "text-teal-400" },
    { href: getLocalizedHref("/shipping-returns/", lang), icon: CheckCircle2, iconBg: "bg-pink-400/15 text-pink-400", tagColor: "text-pink-400" },
  ];
  const trustCards = trustCardStyles.map((style, idx) => ({
    ...style,
    ...fc.trustCards[idx],
  }));

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#0B192C] to-[#060E1A] text-slate-300">
      <div className="mx-auto max-w-[1360px] px-4 pb-10 pt-14">
        {/* 4-Column Classic Evminov Footer Directory */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Origin */}
          <div className="lg:col-span-4">
            <Link href={getLocalizedHref("/", lang)} aria-label={fc.homeAria}>
              <EvminovBrandLockup size={38} dark />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {f.tagline}
            </p>
            <div className="mt-4 space-y-1.5 text-xs leading-relaxed text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span>
                  <strong className="text-slate-200">{fc.usHubLabel}</strong>{" "}
                  {SITE_CONFIG.address.full}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                <span>
                  <strong className="text-slate-200">{fc.euroCraftLabel}</strong>{" "}
                  {fc.euroCraftLocation}
                </span>
              </p>
            </div>
          </div>

          {/* Column 2: Decompression Systems */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xs font-extrabold uppercase tracking-wider text-white">
              {f.shopHeading}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={getLocalizedHref(`/products/${p.slug}/`, lang)}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {p.localizedNames[lang] || p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={getLocalizedHref("/shipping/", lang)}
                  className="font-semibold text-sky-400 transition hover:text-sky-300"
                >
                  {fc.shipping50Link}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Protocols & Heritage */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xs font-extrabold uppercase tracking-wider text-white">
              {f.resourcesHeading}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href={getLocalizedHref("/conditions/scoliosis-posture/", lang)}
                  className="font-bold text-emerald-300 transition hover:text-emerald-200"
                >
                  {fc.kidsPostureLink}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/compare/evminov-vs-inversion-table/", lang)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {fc.vsInversionLink}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/compare/evminov-vs-teeter/", lang)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {fc.vsTeeterLink}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/calculator/", lang)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {fc.calculatorLink}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/centers/", lang)}
                  className="font-bold text-emerald-400 transition hover:text-emerald-300"
                >
                  {fc.centersLink}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/conditions/athlete-spine-recovery/", lang)}
                  className="text-amber-300 transition hover:text-amber-200"
                >
                  {fc.athleteLink}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/guides/", lang)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {fc.guidesLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Patient Portal */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xs font-extrabold uppercase tracking-wider text-white">
              {f.contactHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                  <span className="truncate">{SITE_CONFIG.supportEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.ordersEmail}`}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{SITE_CONFIG.ordersEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 px-2.5 py-1.5 font-extrabold text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-500 hover:text-slate-950"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>WhatsApp {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-red-400 hover:text-red-300"
                >
                  <Youtube className="h-4 w-4 shrink-0" />
                  <span>YouTube {SITE_CONFIG.youtubeHandle}</span>
                </a>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/portal/", lang)}
                  className="font-bold text-emerald-400 hover:text-emerald-300"
                >
                  {fc.patientPortalLink}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/welcome/", lang)}
                  className="text-slate-300 hover:text-white"
                >
                  {f.welcomeQr}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/shipping-returns/", lang)}
                  className="text-slate-300 hover:text-white"
                >
                  {fc.trial60Link}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Full-Width Authority & Trust Cards Grid (Signature Previous Footer Section) */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-200">
            <Star className="h-4 w-4 fill-emerald-400 text-emerald-400" />
            <span>{fc.trustHeading}</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${card.iconBg}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-extrabold text-white">
                      {card.title}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-[11px] text-slate-400">{card.sub}</p>
                    <p className={`mt-0.5 text-[11px] font-bold ${card.tagColor}`}>
                      {card.tag}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Heritage Validation Banner */}
          <Link
            href={getLocalizedHref("/centers/", lang)}
            className="mt-4 flex items-center gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.07] px-4 py-3 text-xs text-slate-200 transition hover:bg-amber-400/[0.12]"
          >
            <Star className="h-5 w-5 shrink-0 fill-amber-400 text-amber-400" />
            <div>
              <strong className="text-white">
                {fc.heritageBannerLead}
              </strong>{" "}
              {fc.heritageBannerBody}
            </div>
          </Link>
        </div>

        {/* Security, Privacy & Payment Trust Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 px-5 py-3.5 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-emerald-400" />
              <span>{fc.securitySsl}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
              <span>{fc.securityPrivacy}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 text-amber-400" />
              <span>{fc.securityShipping}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
            <span>{fc.acceptedLabel}</span>
            {["HSA / FSA", "Visa", "Mastercard", "AMEX", "Apple Pay", "Klarna 4×"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-white/10 bg-white/10 px-2 py-0.5 font-bold text-white"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        {/* General Wellness Equipment Notice */}
        <div className="mt-6 rounded-2xl bg-black/30 p-4 text-xs leading-relaxed text-slate-400">
          {fc.wellnessNotice}
        </div>

        {/* Bottom Copyright & Real Legal Routes */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>
            © {SITE_CONFIG.foundingYear}–2026 {SITE_CONFIG.brandName}. {f.rights}{" "}
            <span className="text-slate-500">{fc.architectureCredit}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href={getLocalizedHref("/privacy/", lang)} className="hover:text-white">
              {f.privacy}
            </Link>
            <Link href={getLocalizedHref("/terms/", lang)} className="hover:text-white">
              {f.terms}
            </Link>
            <Link
              href={getLocalizedHref("/shipping-returns/", lang)}
              className="hover:text-white"
            >
              {f.shippingReturns}
            </Link>
            <Link
              href={getLocalizedHref("/wellness-disclaimer/", lang)}
              className="hover:text-white"
            >
              {f.wellnessDisclaimer}
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="underline hover:text-white"
            >
              {f.cookieSettings}
            </button>
            <a href="/llms.txt" className="text-slate-500 hover:text-slate-300">
              llms.txt
            </a>
            <a href="/rss.xml" className="text-slate-500 hover:text-slate-300">
              RSS
            </a>
            <a href="/sitemap.xml" className="text-slate-500 hover:text-slate-300">
              {fc.sitemapLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
