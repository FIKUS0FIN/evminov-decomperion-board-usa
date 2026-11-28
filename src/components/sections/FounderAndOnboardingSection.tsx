import Link from "next/link";
import { ArrowRight, Award, CalendarCheck, CheckCircle2, Quote } from "lucide-react";
import { Locale } from "@/i18n/types";
import { FOUNDER_ONBOARDING_COPY } from "@/i18n/locales/home-part2";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const PHASE_STYLES = [
  { accent: "border-t-sky-500", badge: "bg-sky-50 text-sky-800" },
  { accent: "border-t-emerald-500", badge: "bg-emerald-50 text-emerald-800" },
  { accent: "border-t-amber-500", badge: "bg-amber-50 text-amber-800" },
] as const;

const MOSAIC_SRCS = [
  "/images/authentic/evminov-board-profile.jpg",
  "/images/products/board-studio-incline.jpg",
  "/images/authentic/exercise-incline-stretch.jpg",
  "/images/authentic/evminov-disc-injury-mri.jpg",
  "/images/authentic/hero-evminov-decompression.jpg",
  "/images/authentic/exercise-seated-decompression.jpg",
  "/images/authentic/exercise-prone-extension.jpg",
  "/images/authentic/clinic-rehab-center-1.jpg",
] as const;

export function FounderAndOnboardingSection({ lang }: { lang: Locale }) {
  const c = FOUNDER_ONBOARDING_COPY[lang];

  return (
    <section id="heritage" className="mx-auto max-w-7xl space-y-16 px-4 py-16">
      {/* Part 1: Founder Story & 30-Year Continuity */}
      <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
            <OptimizedImage
              src="/images/authentic/vyacheslav-evminov-founder.jpg"
              alt={c.founderName}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-slate-950/85 p-3 text-white backdrop-blur">
              <p className="text-xs font-extrabold">{c.founderName}</p>
              <p className="text-[11px] text-emerald-300">{c.founderTitle}</p>
            </div>
          </div>

          <blockquote className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs italic leading-relaxed text-slate-800">
            <Quote className="mb-1.5 h-4 w-4 text-emerald-700" />
            &ldquo;{c.founderQuote}&rdquo;
          </blockquote>
        </div>

        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B1F3A] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
            <Award className="h-3.5 w-3.5" />
            <span>{c.heritageBadge}</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {c.heritageHeading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {c.founderSummary}
          </p>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.timeline.map((step) => (
              <li
                key={step.year}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5"
              >
                <span className="text-xs font-black text-teal-700">{step.year}</span>
                <p className="mt-0.5 text-sm font-extrabold text-slate-950">
                  {step.title}
                </p>
                <p className="mt-1 text-xs text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={getLocalizedHref("/centers/", lang)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3 text-xs font-bold text-white transition hover:bg-teal-800"
            >
              <span>{c.ctaCenters}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={getLocalizedHref("/portal/", lang)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-xs font-bold text-slate-900 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <span>{c.ctaPortal}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Real Studio & Kyiv Heritage Photo Mosaic */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {MOSAIC_SRCS.map((src, idx) => (
          <figure
            key={src}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
              <OptimizedImage
                src={src}
                alt={c.mosaicLabels[idx]}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-contain p-1"
              />
            </div>
            <figcaption className="px-3 py-2 text-center text-[11px] font-bold text-slate-700">
              {c.mosaicLabels[idx]}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Part 2: 30-Day Guided Progression Program */}
      <div
        id="onboarding"
        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900">
              <CalendarCheck className="h-3.5 w-3.5" />
              <span>{c.onboardingBadge}</span>
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950">
              {c.onboardingHeading}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {c.onboardingSub}
            </p>
          </div>
          <Link
            href={getLocalizedHref("/portal/", lang)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-xs font-extrabold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <span>{c.onboardingCta}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {c.phases.map((item, idx) => (
            <article
              key={item.phase}
              className={`flex flex-col rounded-2xl border border-slate-200 border-t-4 bg-white p-6 shadow-xs ${PHASE_STYLES[idx].accent}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${PHASE_STYLES[idx].badge}`}
                >
                  {item.phase}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {item.angle} • {item.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {item.desc}
              </p>
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
