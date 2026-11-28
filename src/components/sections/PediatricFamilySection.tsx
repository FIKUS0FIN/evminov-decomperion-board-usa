import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, Music, Sparkles, Users } from "lucide-react";
import { Locale } from "@/i18n/types";
import { PEDIATRIC_FAMILY_COPY } from "@/i18n/locales/home-part2";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function PediatricFamilySection({ lang }: { lang: Locale }) {
  const c = PEDIATRIC_FAMILY_COPY[lang];

  return (
    <section
      id="pediatric-family"
      className="border-y border-emerald-200/70 bg-gradient-to-b from-emerald-50/50 via-white to-sky-50/40 py-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-900">
            <Users className="h-3.5 w-3.5" />
            <span>{c.badge}</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{c.intro}</p>
        </div>

        {/* 3 Signature Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-black text-slate-950">
              {c.card1Title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {c.card1Body}
            </p>
            <div className="mt-4 rounded-2xl bg-slate-50 p-3.5 text-xs font-semibold text-slate-800">
              {c.card1Line1}
              <br />
              <span className="font-extrabold text-emerald-700">
                {c.card1Line2}
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-emerald-300 bg-[#0B1F3A] p-6 text-white shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-black">{c.card2Title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {c.card2BodyPre}
              <strong className="text-emerald-300">{c.card2BodyBold}</strong>
              {c.card2BodyPost}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5 text-center">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-display text-2xl font-black text-emerald-400">
                  $7.50
                </p>
                <p className="text-[11px] text-slate-300">{c.card2Stat1Label}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-display text-2xl font-black text-sky-400">
                  {c.card2Stat2Value}
                </p>
                <p className="text-[11px] text-slate-300">{c.card2Stat2Label}</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <Music className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-black text-slate-950">
              {c.card3Title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {c.card3Body}
            </p>
            <Link
              href={getLocalizedHref("/conditions/scoliosis-posture/", lang)}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-700 hover:underline"
            >
              <span>{c.card3Cta}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Authentic Family & Youth Photography + 13-Point Family Plan */}
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <OptimizedImage
                src="/images/gallery/youth-paired-traction.jpg"
                alt={c.photo1Label}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-[11px] font-bold text-emerald-300">
                {c.photo1Label}
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <OptimizedImage
                src="/images/gallery/family-home-lifestyle.jpg"
                alt={c.photo2Label}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-[11px] font-bold text-white">
                {c.photo2Label}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7 md:p-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
              {c.planEyebrow}
            </span>
            <h3 className="mt-1 font-display text-2xl font-black text-slate-950">
              {c.planHeading}
            </h3>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {c.checklist.map((point, idx) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs leading-relaxed text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {c.disclaimer}
              </span>
              <Link
                href={getLocalizedHref(
                  "/order/?product=2-piece-folding-board&step=1#order-form",
                  lang
                )}
                className="inline-flex items-center gap-1.5 rounded-xl bg-teal-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-800"
              >
                <span>{c.ctaEquip}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
