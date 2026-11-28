"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileText,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { CLINICS_B2B_COPY } from "@/i18n/locales/clinics";
import { BREADCRUMB_COPY } from "@/i18n/locales/chrome";
import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG } from "@/lib/site-config";
import { getCanonicalUrl, getLocalizedHref } from "@/lib/url";
import { getAttributionSummary, sendGTMEvent } from "@/lib/gtm";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import {
  BreadcrumbJsonLd,
  ClinicsB2bJsonLd,
  FaqJsonLd,
} from "@/components/seo/JsonLd";

const WALL_PANEL_WIDE_PRICE = 175;
const STAND_PLUS_HOOKS_PRICE = 310; // 4-Piece Ladder Stand ($275) + Mounting Hooks ($35)

function getDiscountRate(stations: number): number {
  if (stations >= 7) return 0.15;
  if (stations >= 4) return 0.1;
  if (stations >= 2) return 0.05;
  return 0;
}

export function ClinicsB2bPage({ lang }: { lang: Locale }) {
  const copy = CLINICS_B2B_COPY[lang];
  const bc = BREADCRUMB_COPY[lang];
  const calc = copy.calculator;

  // Live regional base price for 3-Piece Reinforced Wide 30 cm Direct ($520 USD / $500 CAD)
  const flagshipBoard = PRODUCTS[0];
  const wideUnitPrice = flagshipBoard.wideDirectPriceUsd;
  const currency = SITE_CONFIG.currency;

  const [stations, setStations] = useState<number>(3);
  const [finish, setFinish] = useState<"light" | "dark">("light");
  const [includeWallPanels, setIncludeWallPanels] = useState<boolean>(true);
  const [includeFreestandingStands, setIncludeFreestandingStands] =
    useState<boolean>(false);
  const [weeklySessions, setWeeklySessions] = useState<number>(18);
  const [sessionFee, setSessionFee] = useState<number>(45);

  // Wholesale Quote Request Form state
  const [clinicName, setClinicName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateOrProvince, setStateOrProvince] = useState("");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [orderRef, setOrderRef] = useState<string | null>(null);

  const discountRate = getDiscountRate(stations);
  const discountPercent = Math.round(discountRate * 100);
  const boardsSubtotal = stations * wideUnitPrice;
  const discountAmount = Math.round(boardsSubtotal * discountRate);
  const perStationAddonCost =
    (includeWallPanels ? WALL_PANEL_WIDE_PRICE : 0) +
    (includeFreestandingStands ? STAND_PLUS_HOOKS_PRICE : 0);
  const addonsTotal = stations * perStationAddonCost;
  const netBundleTotal = boardsSubtotal - discountAmount + addonsTotal;
  const perStationNet = Math.round(netBundleTotal / stations);

  const weeklyGross = weeklySessions * sessionFee;
  const paybackWeeks = (netBundleTotal / Math.max(1, weeklyGross)).toFixed(1);

  const finishLabel =
    finish === "light" ? calc.finishLight : calc.finishDark;

  const prefilledWhatsappUrl = `https://wa.me/${
    SITE_CONFIG.whatsappNumber
  }?text=${encodeURIComponent(
    `${copy.hero.whatsappPrefill}\n\n• Bundle: ${stations}x 3-Piece Wide 30 cm\n• Finish: ${finishLabel}\n• Wall Panels (30 cm): ${
      includeWallPanels ? "Yes" : "No"
    }\n• Freestanding Stands + Hooks: ${
      includeFreestandingStands ? "Yes" : "No"
    }\n• Est. Net Total: $${netBundleTotal} ${currency} (-${discountPercent}% B2B Tier)${
      clinicName ? `\n• Clinic/Studio: ${clinicName}` : ""
    }`
  )}`;

  const handleSelectTier = (presetStations: number) => {
    setStations(presetStations);
    sendGTMEvent("calculator_complete", {
      lead_type: "b2b_tier_select",
      stations: presetStations,
      locale: lang,
    });
    const el = document.getElementById("b2b-calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg(calc.errorInvalidEmail);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "protocol_lead",
          name: `${contactName.trim() || "Clinic Partner"}${
            clinicName.trim() ? ` (${clinicName.trim()})` : ""
          }`,
          email: trimmedEmail,
          phone: phone.trim(),
          product: flagshipBoard.slug,
          productName: `B2B Wholesale Quote — ${stations}x Reinforced Wide 30 cm (-${discountPercent}%)`,
          finish: finishLabel,
          shipping: "direct",
          includeStand: includeFreestandingStands,
          includeHsaDoc: true,
          totalUsd: netBundleTotal,
          stateOrCountry: stateOrProvince.trim() || (SITE_CONFIG.currency === "CAD" ? "Canada" : "US"),
          lang,
          website: honeypot,
          notes: [
            "[B2B CLINIC / STUDIO WHOLESALE QUOTE]",
            `Clinic/Studio: ${clinicName.trim() || "Not specified"}`,
            `Contact: ${contactName.trim() || "Not specified"}`,
            `Stations: ${stations}x 3-Piece Reinforced Wide 30 cm`,
            `Finish: ${finishLabel}`,
            `Wide 30 cm Wall Panels (+$${WALL_PANEL_WIDE_PRICE}): ${includeWallPanels ? "Yes" : "No"}`,
            `4-Pc Stands + Hooks (+$${STAND_PLUS_HOOKS_PRICE}): ${includeFreestandingStands ? "Yes" : "No"}`,
            `Discount Tier: ${discountPercent}% (-$${discountAmount} ${currency})`,
            `Est. Net Total: $${netBundleTotal} ${currency} (~$${perStationNet}/station)`,
            notes.trim() ? `Notes: ${notes.trim()}` : "",
            getAttributionSummary() ? `Attribution: ${getAttributionSummary()}` : "",
          ]
            .filter(Boolean)
            .join(" | "),
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        orderRef?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setErrorMsg(data.error || calc.errorSubmitFailed);
        return;
      }

      setOrderRef(data.orderRef || "EV-B2B-QUOTE");
      sendGTMEvent("generate_lead", {
        lead_type: "b2b_clinic_quote",
        stations,
        value: netBundleTotal,
        currency,
        locale: lang,
      });
    } catch {
      setErrorMsg(calc.errorSubmitFailed);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: bc.home, url: getCanonicalUrl("/", lang) },
          { name: copy.breadcrumbCurrent, url: getCanonicalUrl("/clinics/", lang) },
        ]}
      />
      <ClinicsB2bJsonLd
        lang={lang}
        title={copy.metaTitle}
        description={copy.metaDescription}
      />
      <FaqJsonLd faqs={copy.faqs} />

      {/* 1. HERO & ANSWER-FIRST GEO SUMMARY */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1628] via-[#0B1F3A] to-[#0D3B46] text-white">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-6 md:pb-20 md:pt-8">
          <nav
            aria-label={bc.navAria}
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-300"
          >
            <Link href={getLocalizedHref("/", lang)} className="hover:text-white">
              {bc.home}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            <span className="text-emerald-300">{copy.breadcrumbCurrent}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                <Building2 className="h-4 w-4 shrink-0" />
                <span>{copy.hero.badge}</span>
              </span>

              <h1 className="mt-5 font-display text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
                {copy.hero.h1}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {copy.hero.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#b2b-calculator"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-black text-slate-950 shadow-lg transition hover:bg-emerald-400"
                >
                  <Calculator className="h-4 w-4 shrink-0" />
                  <span>{copy.hero.primaryCta}</span>
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    copy.hero.whatsappPrefill
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    sendGTMEvent("click_whatsapp", { location: "clinics_hero" })
                  }
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-emerald-300" />
                  <span>{copy.hero.whatsappCta}</span>
                </a>
              </div>
            </div>

            <div className="space-y-3 lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-lg">
                  <OptimizedImage
                    src="/images/authentic/clinic-rehab-center-1.jpg"
                    alt={copy.hero.photoMainAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-lg">
                  <OptimizedImage
                    src="/images/centers/kyiv-center-room.png"
                    alt={copy.hero.photoRoomAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-xs leading-relaxed text-slate-200">
                {copy.hero.photoCaption}
              </p>
            </div>
          </div>

          {/* 4 KPI Strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.hero.kpis.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
              >
                <p className="font-display text-2xl font-black text-emerald-400">
                  {stat.val}
                </p>
                <p className="mt-0.5 text-sm font-extrabold text-white">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-300">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Answer-First GEO / AEO Summary Box */}
          <aside
            id="b2b-geo-summary"
            className="mt-8 rounded-3xl border border-emerald-400/35 bg-emerald-500/[0.1] p-6 backdrop-blur"
          >
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              {copy.geoSummary.eyebrow}
            </p>
            <h2 className="mt-1.5 font-display text-xl font-black text-white sm:text-2xl">
              {copy.geoSummary.heading}
            </h2>
            <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-100 sm:text-base">
              {copy.geoSummary.body}
            </p>
          </aside>
        </div>
      </section>

      {/* 2. 4 B2B BUYER VERTICALS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            {copy.verticalsHeading}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
            {copy.verticalsSub}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {copy.verticals.map((v) => (
            <article
              key={v.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-teal-600 hover:shadow-md"
            >
              <span className="self-start rounded-full bg-teal-50 px-3 py-1 text-xs font-extrabold text-teal-800">
                {v.badge}
              </span>
              <h3 className="mt-3 font-display text-xl font-black text-slate-950">
                {v.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {v.desc}
              </p>
              <p className="mt-4 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-slate-800">
                {v.spec}
              </p>
              <Link
                href={getLocalizedHref(v.linkPath, lang)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-700 hover:text-teal-900"
              >
                <span>{v.linkLabel}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 3. B2B CAPITAL & THROUGHPUT COMPARISON TABLE */}
      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {copy.comparisonHeading}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {copy.comparisonSub}
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[#0B1F3A] text-white">
                  <th className="px-5 py-4 font-display text-xs font-extrabold uppercase tracking-wider">
                    {copy.comparisonHeaders[0]}
                  </th>
                  <th className="bg-emerald-900/50 px-5 py-4 font-display text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    {copy.comparisonHeaders[1]}
                  </th>
                  <th className="px-5 py-4 font-display text-xs font-extrabold uppercase tracking-wider text-slate-300">
                    {copy.comparisonHeaders[2]}
                  </th>
                  <th className="px-5 py-4 font-display text-xs font-extrabold uppercase tracking-wider text-slate-300">
                    {copy.comparisonHeaders[3]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {copy.comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50/80">
                    <td className="px-5 py-4 font-bold text-slate-950">
                      {row.feature}
                    </td>
                    <td className="bg-emerald-50/45 px-5 py-4 font-semibold text-emerald-950">
                      {row.evminov}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{row.motorized}</td>
                    <td className="px-5 py-4 text-slate-600">{row.basicTraction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. VOLUME PARTNER TIERS */}
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-14 sm:pt-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            {copy.tiersHeading}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">{copy.tiersSub}</p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.volumeTiers.map((tier) => {
            const isActive = discountPercent === tier.discountPercent;
            return (
              <button
                key={tier.stationsLabel}
                type="button"
                onClick={() => handleSelectTier(tier.presetStations)}
                className={`flex min-h-[160px] flex-col rounded-3xl border p-5 text-left transition ${
                  isActive
                    ? "border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/30 shadow-md"
                    : "border-slate-200 bg-white hover:border-teal-600 hover:shadow-sm"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span className="font-display text-lg font-black text-slate-950">
                    {tier.stationsLabel}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-black ${
                      tier.discountPercent > 0
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    {tier.discountBadge}
                  </span>
                </div>
                <p className="mt-2.5 text-sm font-extrabold text-slate-900">
                  {tier.title}
                </p>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-600">
                  {tier.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-teal-700">
                  {copy.applyTierLabel} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE MULTI-STATION BUNDLE & ROI CALCULATOR + B2B QUOTE FORM */}
      <section
        id="b2b-calculator"
        className="mx-auto max-w-7xl px-4 py-12 sm:py-16"
      >
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50/35 p-5 shadow-xl sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold text-teal-900">
              <Layers className="h-3.5 w-3.5" />
              <span>{calc.eyebrow}</span>
            </span>
            <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {calc.heading}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">{calc.subtitle}</p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* LEFT: Interactive Bundle & ROI Controls */}
            <div className="space-y-6 lg:col-span-6">
              {/* Station Counter */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <label
                    htmlFor="b2b-stations-range"
                    className="text-sm font-extrabold text-slate-900"
                  >
                    {calc.stationsLabel}
                  </label>
                  <span className="rounded-full bg-[#0B1F3A] px-3.5 py-1 text-sm font-black text-emerald-300">
                    {stations}{" "}
                    {stations === 1
                      ? calc.stationsUnitSingular
                      : calc.stationsUnitPlural}{" "}
                    ({discountPercent > 0 ? `-${discountPercent}%` : "0%"})
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setStations(num)}
                      className={`min-h-[44px] min-w-[44px] rounded-xl border px-3 text-sm font-black transition ${
                        stations === num
                          ? "border-teal-700 bg-teal-700 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-800 hover:border-teal-500"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>

                <input
                  id="b2b-stations-range"
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={stations}
                  onChange={(e) => setStations(Number(e.target.value))}
                  className="mt-4 w-full accent-teal-700"
                />
              </div>

              {/* Wood Finish Toggle */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-extrabold text-slate-900">
                  {calc.finishLabel}
                </p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setFinish("light")}
                    className={`min-h-[46px] rounded-xl border px-3.5 py-2.5 text-left text-xs font-bold transition ${
                      finish === "light"
                        ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500/30"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {calc.finishLight}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFinish("dark")}
                    className={`min-h-[46px] rounded-xl border px-3.5 py-2.5 text-left text-xs font-bold transition ${
                      finish === "dark"
                        ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500/30"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {calc.finishDark}
                  </button>
                </div>
              </div>

              {/* Studio Add-Ons */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-extrabold text-slate-900">
                  {calc.addonsLabel}
                </p>
                <div className="mt-3 space-y-3">
                  <label className="flex min-h-[44px] cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={includeWallPanels}
                      onChange={(e) => setIncludeWallPanels(e.target.checked)}
                      className="mt-0.5 h-5 w-5 rounded border-slate-300 text-teal-700"
                    />
                    <span className="text-xs leading-relaxed">
                      <strong className="block text-slate-950">
                        {calc.addonWallPanelLabel}
                      </strong>
                      <span className="text-slate-600">{calc.addonWallPanelSub}</span>
                    </span>
                  </label>

                  <label className="flex min-h-[44px] cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={includeFreestandingStands}
                      onChange={(e) =>
                        setIncludeFreestandingStands(e.target.checked)
                      }
                      className="mt-0.5 h-5 w-5 rounded border-slate-300 text-teal-700"
                    />
                    <span className="text-xs leading-relaxed">
                      <strong className="block text-slate-950">
                        {calc.addonStandLabel}
                      </strong>
                      <span className="text-slate-600">{calc.addonStandSub}</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Illustrative Payback Sliders */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <span>{calc.paybackHeading}</span>
                </p>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <label htmlFor="b2b-sessions-range">
                        {calc.weeklySessionsLabel}
                      </label>
                      <span className="text-slate-950">{weeklySessions} / wk</span>
                    </div>
                    <input
                      id="b2b-sessions-range"
                      type="range"
                      min={5}
                      max={60}
                      step={1}
                      value={weeklySessions}
                      onChange={(e) => setWeeklySessions(Number(e.target.value))}
                      className="mt-2 w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <label htmlFor="b2b-fee-range">{calc.sessionFeeLabel}</label>
                      <span className="text-slate-950">
                        ${sessionFee} {currency}
                      </span>
                    </div>
                    <input
                      id="b2b-fee-range"
                      type="range"
                      min={25}
                      max={75}
                      step={5}
                      value={sessionFee}
                      onChange={(e) => setSessionFee(Number(e.target.value))}
                      className="mt-2 w-full accent-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Live Summary Box */}
              <div className="rounded-2xl bg-[#0B192C] p-6 text-white shadow-lg">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  {calc.summaryTitle}
                </p>

                <dl className="mt-4 space-y-2.5 text-sm">
                  <div className="flex justify-between gap-2 text-slate-300">
                    <dt>{calc.baseEquipmentLabel}</dt>
                    <dd className="font-bold text-white">
                      ${boardsSubtotal.toLocaleString()} {currency}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 text-emerald-300">
                    <dt>
                      {calc.volumeDiscountLabel} (-{discountPercent}%)
                    </dt>
                    <dd className="font-extrabold">
                      -${discountAmount.toLocaleString()} {currency}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 text-slate-300">
                    <dt>{calc.addonsTotalLabel}</dt>
                    <dd className="font-bold text-white">
                      +${addonsTotal.toLocaleString()} {currency}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-2 border-t border-white/15 pt-3">
                    <dt className="font-display text-base font-black text-white">
                      {calc.netBundleLabel}
                    </dt>
                    <dd className="font-display text-2xl font-black text-emerald-400">
                      ${netBundleTotal.toLocaleString()} {currency}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 text-xs text-slate-300">
                    <dt>{calc.perStationLabel}</dt>
                    <dd className="font-bold text-white">
                      ~${perStationNet.toLocaleString()} {currency}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 border-t border-white/10 pt-2.5 text-xs text-sky-300">
                    <dt>{calc.estWeeklyRevenueLabel}</dt>
                    <dd className="font-bold">
                      ${weeklyGross.toLocaleString()} {currency}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 text-xs text-amber-300">
                    <dt>{calc.estPaybackLabel}</dt>
                    <dd className="font-extrabold">
                      ~{paybackWeeks} {calc.weeksSuffix}
                    </dd>
                  </div>
                </dl>

                <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                  {calc.paybackDisclaimer}
                </p>
              </div>
            </div>

            {/* RIGHT: Commercial Invoice & W-9 Quote Request Form */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-black text-slate-950">
                      {calc.formHeading}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {calc.formSub}
                    </p>
                  </div>
                </div>

                {orderRef ? (
                  <div className="mt-6 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50 p-6">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <CheckCircle2 className="h-6 w-6 shrink-0" />
                      <p className="font-display text-lg font-black">
                        {calc.successTitle}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {calc.successBody}
                    </p>
                    <p className="mt-3 inline-block rounded-lg bg-white px-3 py-1.5 font-mono text-xs font-extrabold text-emerald-900 shadow-xs">
                      {calc.orderRefLabel}: {orderRef}
                    </p>
                    <div className="mt-5">
                      <a
                        href={prefilledWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          sendGTMEvent("click_whatsapp", {
                            location: "clinics_quote_success",
                          })
                        }
                        className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-3 text-sm font-black text-white shadow transition hover:bg-emerald-700"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" />
                        <span>{calc.whatsappDeskBtn}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="mt-6 space-y-4">
                    {/* Silent honeypot anti-spam field */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div>
                      <label
                        htmlFor="b2b-clinic-name"
                        className="block text-xs font-bold text-slate-800"
                      >
                        {calc.clinicNameLabel}
                      </label>
                      <input
                        id="b2b-clinic-name"
                        type="text"
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                        placeholder={calc.clinicNamePlaceholder}
                        className="mt-1.5 min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2 text-base text-slate-950 focus:border-teal-700 focus:outline-none sm:text-sm"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="b2b-contact-name"
                          className="block text-xs font-bold text-slate-800"
                        >
                          {calc.contactNameLabel}
                        </label>
                        <input
                          id="b2b-contact-name"
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder={calc.contactNamePlaceholder}
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2 text-base text-slate-950 focus:border-teal-700 focus:outline-none sm:text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="b2b-email"
                          className="block text-xs font-bold text-slate-800"
                        >
                          {calc.emailLabel}
                        </label>
                        <input
                          id="b2b-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={calc.emailPlaceholder}
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2 text-base text-slate-950 focus:border-teal-700 focus:outline-none sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="b2b-phone"
                          className="block text-xs font-bold text-slate-800"
                        >
                          {calc.phoneLabel}
                        </label>
                        <input
                          id="b2b-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={calc.phonePlaceholder}
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2 text-base text-slate-950 focus:border-teal-700 focus:outline-none sm:text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="b2b-state"
                          className="block text-xs font-bold text-slate-800"
                        >
                          {calc.stateLabel}
                        </label>
                        <input
                          id="b2b-state"
                          type="text"
                          value={stateOrProvince}
                          onChange={(e) => setStateOrProvince(e.target.value)}
                          placeholder={calc.statePlaceholder}
                          className="mt-1.5 min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2 text-base text-slate-950 focus:border-teal-700 focus:outline-none sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="b2b-notes"
                        className="block text-xs font-bold text-slate-800"
                      >
                        {calc.notesLabel}
                      </label>
                      <textarea
                        id="b2b-notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={calc.notesPlaceholder}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-base text-slate-950 focus:border-teal-700 focus:outline-none sm:text-sm"
                      />
                    </div>

                    {errorMsg && (
                      <p className="rounded-xl bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-700">
                        {errorMsg}
                      </p>
                    )}

                    <div className="space-y-2.5 pt-1">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#0B1F3A] px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-teal-800 disabled:opacity-60"
                      >
                        <Sparkles className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>
                          {submitting ? calc.submittingBtn : calc.submitBtn}
                        </span>
                      </button>

                      <a
                        href={prefilledWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          sendGTMEvent("click_whatsapp", {
                            location: "clinics_calculator_form",
                          })
                        }
                        className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-50 px-4 py-2.5 text-xs font-extrabold text-emerald-900 transition hover:bg-[#16A34A] hover:text-white sm:text-sm"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" />
                        <span>{calc.whatsappDeskBtn}</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. B2B FAQs & BOTTOM CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            {copy.faqsHeading}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">{copy.faqsSub}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {copy.faqs.map((faq) => (
            <article
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
            >
              <h3 className="font-display text-base font-black text-slate-950">
                {faq.q}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {faq.a}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="font-display text-xl font-black text-slate-950">
            {copy.bottomCta.heading}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{copy.bottomCta.body}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={getLocalizedHref("/products/3-piece-travel-board/", lang)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-teal-700 px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-teal-800 sm:text-sm"
            >
              <span>{copy.bottomCta.catalogBtn}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={getLocalizedHref("/centers/", lang)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-extrabold text-slate-900 transition hover:bg-slate-100 sm:text-sm"
            >
              <span>{copy.bottomCta.centersBtn}</span>
            </Link>
          </div>

          <p className="mt-6 flex items-start gap-2 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
            <span>{copy.bottomCta.complianceNotice}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
