import Link from "next/link";
import { ArrowRight, AlertTriangle, MessageCircle } from "lucide-react";
import { Locale } from "@/i18n/types";
import { ConditionPageData, CONDITIONS } from "@/data/conditions";
import { COMPARISONS } from "@/data/comparisons";
import { GUIDES } from "@/data/guides";
import { getProductBySlug } from "@/data/products";
import { getLocalizedCondition } from "@/i18n/locales/conditions-i18n";
import { getLocalizedComparison } from "@/i18n/locales/comparisons-i18n";
import { getLocalizedGuide } from "@/i18n/locales/guides-i18n";
import { getSiloUi } from "@/i18n/locales/silo-ui";
import { getLocalizedProduct } from "@/i18n/locales/catalog";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { SITE_CONFIG } from "@/lib/site-config";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ConditionArticleJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export function ConditionDetailView({
  condition: rawCondition,
  lang,
}: {
  condition: ConditionPageData;
  lang: Locale;
}) {
  const condition = getLocalizedCondition(rawCondition, lang);
  const ui = getSiloUi(lang);
  const recProduct = getProductBySlug(condition.recommendedProductSlug);
  const recLocalized = recProduct
    ? getLocalizedProduct(recProduct, lang)
    : undefined;

  return (
    <>
      <ConditionArticleJsonLd condition={condition} lang={lang} />
      <FaqJsonLd faqs={condition.faqs} />
      <article className="mx-auto max-w-5xl px-4 py-12">
        <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800">
          {condition.eyebrow}
        </span>
        <h1 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
          {condition.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {condition.summary}
        </p>

        {/* Key Parameters Strip */}
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase text-slate-500">
              {ui.condition.suggestedAngle}
            </p>
            <p className="mt-1 text-lg font-black text-teal-800">
              {condition.recommendedAngle}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase text-slate-500">
              {ui.condition.dailySession}
            </p>
            <p className="mt-1 text-lg font-black text-slate-950">
              {condition.dailyDuration}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase text-slate-500">
              {ui.condition.focusArea}
            </p>
            <p className="mt-1 text-lg font-black text-slate-950">
              {condition.targetZone}
            </p>
          </div>
        </div>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200">
          <OptimizedImage
            src={condition.heroImage}
            alt={condition.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
        </div>

        {/* Biomechanical Mechanisms */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-black text-slate-950">
            {ui.condition.howItWorksHeading}
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {condition.mechanisms.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-display text-base font-bold text-slate-950">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Routine Progression */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-black text-slate-950">
            {ui.condition.starterRoutineHeading}
          </h2>
          <div className="mt-4 space-y-3">
            {condition.routineSteps.map((step) => (
              <div
                key={step.phase}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="text-sm font-black text-slate-950">
                    {step.phase}
                  </p>
                  <p className="mt-1 text-sm text-slate-700">{step.action}</p>
                </div>
                <span className="shrink-0 self-start rounded-xl bg-slate-950 px-3.5 py-1.5 text-xs font-bold text-emerald-400 sm:self-center">
                  {step.angle}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Note */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <p>{condition.safetyNote}</p>
        </div>

        {/* CTA */}
        {recProduct && recLocalized && (
          <div className="mt-10 flex flex-col justify-between gap-5 rounded-3xl bg-slate-950 p-7 text-white md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase text-emerald-400">
                {ui.condition.recommendedBoardLabel}
              </p>
              <h2 className="mt-1 font-display text-2xl font-black">
                {recLocalized.name}
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                {ui.common.fromLabel} {formatUSD(recProduct.directPriceUsd)} •{" "}
                {ui.common.hsaFsaReceiptBadge} • {ui.common.homeTrialBadge}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href={getLocalizedHref("/calculator/", lang)}
                className="rounded-xl border border-white/25 px-4 py-3 text-xs font-bold text-white hover:bg-white/10"
              >
                {ui.common.calculateExactAngle}
              </Link>
              <Link
                href={buildPrefilledOrderUrl({
                  lang,
                  product: recProduct.slug,
                  goal: condition.goalKey,
                  step: 2,
                })}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-xs font-black text-slate-950 hover:bg-emerald-300"
              >
                <span>{ui.common.orderBoard}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#16A34A] px-4 py-3 text-xs font-extrabold text-white hover:bg-emerald-500"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* FAQs */}
        {condition.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-black text-slate-950">
              {ui.condition.qaHeading}
            </h2>
            <div className="mt-4 space-y-3">
              {condition.faqs.map((f) => (
                <details
                  key={f.q}
                  open
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer font-bold text-slate-950">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 space-y-7 border-t border-slate-200 pt-8">
          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              {ui.condition.otherSpineGoals}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CONDITIONS.filter((c) => c.slug !== condition.slug).map((raw) => {
                const c = getLocalizedCondition(raw, lang);
                return (
                  <Link
                    key={c.slug}
                    href={getLocalizedHref(`/conditions/${c.slug}/`, lang)}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800 hover:border-teal-600"
                  >
                    {c.shortTitle}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              {ui.comparison.moreComparisons}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {COMPARISONS.slice(0, 5).map((raw) => {
                const comp = getLocalizedComparison(raw, lang);
                return (
                  <Link
                    key={comp.slug}
                    href={getLocalizedHref(`/compare/${comp.slug}/`, lang)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:border-teal-600 hover:text-teal-800"
                  >
                    {comp.shortTitle} →
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              {ui.guide.relatedGuides}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {GUIDES.slice(-4)
                .reverse()
                .map((raw) => {
                  const g = getLocalizedGuide(raw, lang);
                  return (
                    <Link
                      key={g.slug}
                      href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:border-teal-600 hover:text-teal-800"
                    >
                      {g.title} →
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
