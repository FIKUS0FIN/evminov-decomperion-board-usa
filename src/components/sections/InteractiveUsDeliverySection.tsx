"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Truck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { US_DELIVERY_COPY } from "@/i18n/locales/home-part2";
import { localizeCarrier, localizeTransitDays } from "@/i18n/locales/chrome";
import { getLocalizedHref } from "@/lib/url";
import { US_STATES } from "@/data/us-states";
import { SITE_CONFIG } from "@/lib/site-config";

const FEATURED_CODES = [
  "CA",
  "TX",
  "FL",
  "NY",
  "WA",
  "IL",
  "CO",
  "AZ",
  "NC",
  "MA",
  "VA",
  "GA",
];

export function InteractiveUsDeliverySection({
  lang,
  title,
  subtitle,
}: {
  lang: Locale;
  title: string;
  subtitle: string;
}) {
  const c = US_DELIVERY_COPY[lang];
  const [selectedSlug, setSelectedSlug] = useState("california");
  const selected =
    US_STATES.find((st) => st.slug === selectedSlug) || US_STATES[0];
  const topStates = US_STATES.filter((st) => FEATURED_CODES.includes(st.code));

  return (
    <section id="us-shipping" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#023373]">
              <MapPin className="h-3.5 w-3.5" />
              <span>{c.hubBadge}</span>
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-base text-slate-600">{subtitle}</p>
          </div>
          <Link
            href={getLocalizedHref("/shipping/", lang)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:underline"
          >
            <Truck className="h-4 w-4" />
            <span>{c.allStatesLink}</span>
          </Link>
        </div>

        {/* Interactive 50-State Instant Estimator + 4 US Logistics Pillars */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-6 md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
              {c.lookupEyebrow}
            </p>
            <h3 className="mt-1 font-display text-xl font-black text-slate-950">
              {c.lookupHeading}
            </h3>

            <div className="mt-4">
              <label
                htmlFor="us-state-selector"
                className="block text-xs font-bold text-slate-600"
              >
                {c.selectLabel}
              </label>
              <select
                id="us-state-selector"
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-950 focus:border-teal-600 focus:outline-none"
              >
                {US_STATES.map((st) => (
                  <option key={st.code} value={st.slug}>
                    {st.name} ({st.code}) — {localizeTransitDays(st.expressDays, lang)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-[#0B1F3A] p-4 text-white">
              <div>
                <p className="text-[11px] text-slate-400">{c.caExpressLabel}</p>
                <p className="mt-0.5 font-display text-xl font-black text-emerald-400">
                  {localizeTransitDays(selected.expressDays, lang)}
                </p>
                <p className="text-[11px] text-slate-300">
                  {localizeCarrier(selected.carrier, lang)}
                </p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400">{c.directLabel}</p>
                <p className="mt-0.5 font-display text-xl font-black text-sky-300">
                  {c.directDays}
                </p>
                <p className="text-[11px] text-slate-300">{c.directSub}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-600">
                {c.dispatchedFrom}{" "}
                <strong className="text-slate-900">
                  {SITE_CONFIG.address.city}, CA
                </strong>
              </p>
              <Link
                href={`/shipping/${selected.slug}/`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-teal-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-teal-800"
              >
                <span>
                  {[c.openStatePre, selected.name, c.openStatePost]
                    .filter(Boolean)
                    .join(" ")}
                </span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-6">
            {c.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <h3 className="mt-3 font-display text-sm font-extrabold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick-Link Grid for Top 12 States */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {topStates.map((st) => (
            <Link
              key={st.code}
              href={`/shipping/${st.slug}/`}
              className="rounded-2xl border border-slate-200 bg-white p-3.5 text-left shadow-xs transition hover:border-teal-600"
            >
              <p className="text-sm font-bold text-slate-950">{st.name}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-teal-700">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                {localizeTransitDays(st.expressDays, lang)}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                {localizeCarrier(st.carrier, lang)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
