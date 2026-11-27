"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Globe2, TrendingDown } from "lucide-react";
import { Locale } from "@/i18n/types";
import { GLOBAL_ROI_COPY } from "@/i18n/locales/home-part1";
import { getLocalizedHref } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { EvminovLogo } from "@/components/brand/EvminovLogo";

export function GlobalHeritageRoiSection({ lang }: { lang: Locale }) {
  const c = GLOBAL_ROI_COPY[lang];
  const [visitsPerWeek, setVisitsPerWeek] = useState(2);
  const [costPerVisit, setCostPerVisit] = useState(95);

  const annualClinicCost = visitsPerWeek * costPerVisit * 48;
  const threeYearClinicCost = annualClinicCost * 3;
  const boardOneTimeCost = 450;
  const threeYearSavings = Math.max(0, threeYearClinicCost - boardOneTimeCost);
  const hoursSavedPerYear = Math.round(visitsPerWeek * 2.2 * 48);
  const breakEvenVisits = Math.max(1, Math.ceil(boardOneTimeCost / costPerVisit));

  return (
    <section
      id="global-trust"
      className="border-y border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header + Official Emblem */}
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              <Globe2 className="h-3.5 w-3.5" />
              <span>{c.badge}</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {c.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{c.intro}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xs">
            <EvminovLogo size={46} />
            <div className="text-xs">
              <p className="font-black text-[#0B1F3A]">{c.emblemTop}</p>
              <p className="font-semibold text-emerald-700">{c.emblemSub}</p>
            </div>
          </div>
        </div>

        {/* 4 Signature Authority Counters */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <p className="font-display text-4xl font-black text-[#023373]">30+</p>
            <p className="mt-1 text-sm font-extrabold text-slate-950">{c.kpi1Title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{c.kpi1Desc}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <p className="font-display text-4xl font-black text-teal-700">40+</p>
            <p className="mt-1 text-sm font-extrabold text-slate-950">{c.kpi2Title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{c.kpi2Desc}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <p className="font-display text-4xl font-black text-emerald-700">
              {hoursSavedPerYear}+
            </p>
            <p className="mt-1 text-sm font-extrabold text-slate-950">{c.kpi3Title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{c.kpi3Desc}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <p className="font-display text-4xl font-black text-amber-600">
              {formatUSD(annualClinicCost)}+
            </p>
            <p className="mt-1 text-sm font-extrabold text-slate-950">{c.kpi4Title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {c.kpi4DescPrefix}
              {breakEvenVisits} {c.kpi4DescSuffix}
            </p>
          </div>
        </div>

        {/* Interactive Clinic vs. Home Board ROI Calculator */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-slate-200 bg-[#0B1F3A] p-6 text-white shadow-xl lg:col-span-7 md:p-8">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              <Calculator className="h-4 w-4" />
              <span>{c.calcBadge}</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-black">{c.calcHeading}</h3>
            <p className="mt-1 text-xs text-slate-300">{c.calcSub}</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="flex justify-between text-xs font-bold">
                  <label htmlFor="roi-visits">{c.visitsLabel}</label>
                  <span className="text-emerald-400">
                    {visitsPerWeek}
                    {c.visitsUnit}
                  </span>
                </div>
                <input
                  id="roi-visits"
                  type="range"
                  min={1}
                  max={4}
                  step={1}
                  value={visitsPerWeek}
                  onChange={(e) => setVisitsPerWeek(Number(e.target.value))}
                  className="mt-2 w-full accent-emerald-400"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold">
                  <label htmlFor="roi-copay">{c.copayLabel}</label>
                  <span className="text-amber-300">{formatUSD(costPerVisit)}</span>
                </div>
                <input
                  id="roi-copay"
                  type="range"
                  min={45}
                  max={180}
                  step={5}
                  value={costPerVisit}
                  onChange={(e) => setCostPerVisit(Number(e.target.value))}
                  className="mt-2 w-full accent-amber-400"
                />
              </div>
            </div>

            {/* Visual Cost Comparison Bars */}
            <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span className="text-slate-300">{c.clinicBarLabel}</span>
                  <span className="text-rose-300">{formatUSD(threeYearClinicCost)}</span>
                </div>
                <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-rose-400/80" />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold">
                  <span className="text-emerald-300">{c.boardBarLabel}</span>
                  <span className="text-emerald-400">$450</span>
                </div>
                <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all"
                    style={{
                      width: `${Math.max(4, Math.min(100, Math.round((450 / threeYearClinicCost) * 100)))}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2.5">
                <TrendingDown className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-[11px] uppercase text-slate-400">{c.savingsLabel}</p>
                  <p className="font-display text-2xl font-black text-emerald-400">
                    {formatUSD(threeYearSavings)}
                  </p>
                </div>
              </div>
              <Link
                href={getLocalizedHref("/order/", lang)}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-black text-slate-950 transition hover:bg-emerald-400"
              >
                <span>{c.ctaReserve}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* 6 Global Shipping Regions Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
              {c.logisticsEyebrow}
            </span>
            <h3 className="mt-1 font-display text-xl font-black text-slate-950">
              {c.logisticsHeading}
            </h3>
            <div className="mt-4 divide-y divide-slate-100">
              {c.regions.map((item) => (
                <div key={item.region} className="py-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs font-extrabold text-slate-950">
                    <span>{item.region}</span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-bold text-teal-800">
                      {item.transit}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-500">{item.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
