"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Dumbbell, Monitor, Shield, Stethoscope } from "lucide-react";
import { Locale } from "@/i18n/types";
import { ATHLETE_DESK_COPY } from "@/i18n/locales/home-part1";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const TAB_MEDIA = [
  {
    id: "athletes",
    icon: Dumbbell,
    image: "/images/authentic/exercise-reverse-traction.jpg",
    ctaPath: "/conditions/athlete-spine-recovery/",
  },
  {
    id: "desk",
    icon: Monitor,
    image: "/images/authentic/exercise-seated-decompression.jpg",
    ctaPath: "/conditions/desk-worker-posture/",
  },
  {
    id: "standing",
    icon: Stethoscope,
    image: "/images/authentic/exercise-incline-stretch.jpg",
    ctaPath: "/conditions/sciatica-relief/",
  },
  {
    id: "cervical",
    icon: Shield,
    image: "/images/authentic/evminov-glisson-loop-cervical.jpg",
    ctaPath: "/conditions/cervical-neck-traction/",
  },
] as const;

const STRIP_SRCS = [
  "/images/authentic/exercise-bridge-pelvic.jpg",
  "/images/authentic/exercise-lateral-flexion.jpg",
  "/images/authentic/exercise-lumbar-rotation.jpg",
  "/images/authentic/exercise-passive-traction.jpg",
  "/images/authentic/exercise-prone-extension.jpg",
  "/images/authentic/exercise-prone-leg-lift.jpg",
  "/images/authentic/exercise-quadriceps-stretch.jpg",
  "/images/gallery/incline-rotation-mobility.jpg",
] as const;

export function AthleteAndDeskSection({ lang }: { lang: Locale }) {
  const c = ATHLETE_DESK_COPY[lang];
  const [activeId, setActiveId] = useState<string>("athletes");
  const activeIdx = Math.max(
    0,
    c.tabs.findIndex((t) => t.id === activeId)
  );
  const current = c.tabs[activeIdx];
  const media = TAB_MEDIA[activeIdx];

  return (
    <section id="athletes" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-300">
            <Dumbbell className="h-3.5 w-3.5" />
            <span>{c.badge}</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight md:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-3 text-base text-slate-300">{c.subtitle}</p>
        </div>

        {/* 4 Interactive Audience Tabs */}
        <div
          role="tablist"
          aria-label={c.tablistAria}
          className="mt-8 flex flex-wrap gap-2"
        >
          {c.tabs.map((tab, idx) => {
            const Icon = TAB_MEDIA[idx].icon;
            const active = tab.id === current.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveId(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold transition sm:text-sm ${
                  active
                    ? "bg-emerald-500 text-slate-950 shadow-lg"
                    : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Audience Split Showcase */}
        <div className="mt-6 grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
              <OptimizedImage
                src={media.image}
                alt={current.problemTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur">
                  {current.angle}
                </span>
                <span className="rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur">
                  {current.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl font-black text-white">
              {current.problemTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {current.problemDesc}
            </p>

            <div className="mt-4 rounded-2xl border border-amber-400/25 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-100">
              <strong className="text-amber-300">{c.whyShortfallLabel} </strong>
              {current.whyOthersFail}
            </div>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
              {current.evminovSolution.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={getLocalizedHref(media.ctaPath, lang)}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-black text-slate-950 transition hover:bg-emerald-400"
              >
                <span>{current.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-xs font-bold text-white transition hover:bg-white/10"
              >
                {c.calcCta}
              </a>
            </div>
          </div>
        </div>

        {/* 8-Photo Movement Strip */}
        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {c.stripHeading}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {STRIP_SRCS.map((src, i) => (
              <figure
                key={src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
              >
                <div className="relative aspect-square w-full">
                  <OptimizedImage
                    src={src}
                    alt={c.stripLabels[i]}
                    fill
                    sizes="(max-width: 640px) 50vw, 12vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="truncate px-2 py-1.5 text-center text-[10px] font-bold text-slate-300">
                  {c.stripLabels[i]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
