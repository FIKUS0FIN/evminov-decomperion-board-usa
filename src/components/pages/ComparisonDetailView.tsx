import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Locale } from "@/i18n/types";
import { ComparisonPageData, COMPARISONS } from "@/data/comparisons";
import { GUIDES } from "@/data/guides";
import { getProductBySlug } from "@/data/products";
import { getLocalizedComparison } from "@/i18n/locales/comparisons-i18n";
import { getLocalizedGuide } from "@/i18n/locales/guides-i18n";
import { getSiloUi } from "@/i18n/locales/silo-ui";
import { getLocalizedProduct } from "@/i18n/locales/catalog";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { SITE_CONFIG } from "@/lib/site-config";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ComparisonArticleJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export function ComparisonDetailView({
  comparison: rawComparison,
  lang,
}: {
  comparison: ComparisonPageData;
  lang: Locale;
}) {
  const comparison = getLocalizedComparison(rawComparison, lang);
  const ui = getSiloUi(lang);
  const recProduct = getProductBySlug(comparison.recommendedProductSlug);
  const recLocalized = recProduct
    ? getLocalizedProduct(recProduct, lang)
    : undefined;

  return (
    <>
      <ComparisonArticleJsonLd comparison={comparison} lang={lang} />
      <FaqJsonLd faqs={comparison.faqs} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:py-12">

        <span className="inline-block rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
          {comparison.eyebrow}
        </span>
        <h1 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
          {comparison.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {comparison.summary}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-[#F4F7F9] md:col-span-6">
            <OptimizedImage
              src={comparison.heroImage}
              alt={comparison.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-3"
            />
          </div>
          <div className="rounded-3xl bg-slate-950 p-6 text-white md:col-span-6">
            <h2 className="font-display text-lg font-bold text-emerald-400">
              {ui.comparison.keyTakeaways}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {comparison.keyTakeaways.map((k) => (
                <li key={k} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[540px] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="p-4 font-bold">{ui.comparison.criteriaHeader}</th>
                <th className="p-4 font-bold text-emerald-400">
                  {ui.comparison.evminovBoardHeader}
                </th>
                <th className="p-4 font-bold text-slate-300">
                  {comparison.competitorName}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {comparison.rows.map((r) => (
                <tr key={r.metric}>
                  <td className="p-4 font-bold text-slate-900">{r.metric}</td>
                  <td className="bg-emerald-50/50 p-4 font-semibold text-teal-950">
                    {r.evminov}
                  </td>
                  <td className="p-4 text-slate-600">{r.alternative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep Dive */}
        <div className="mt-10 space-y-6">
          {comparison.deepDiveSections.map((sec) => (
            <section key={sec.heading}>
              <h2 className="font-display text-2xl font-black text-slate-950">
                {sec.heading}
              </h2>
              <p className="mt-2.5 text-base leading-relaxed text-slate-700">
                {sec.body}
              </p>
            </section>
          ))}
        </div>

        {/* Recommended Board CTA */}
        {recProduct && recLocalized && (
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-slate-950 to-teal-900 p-7 text-white md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase text-emerald-400">
                {ui.comparison.recommendedUpgrade}
              </p>
              <h2 className="mt-1 font-display text-2xl font-black">
                {recLocalized.name}
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                {ui.common.startingFrom} {formatUSD(recProduct.directPriceUsd)} •{" "}
                {ui.common.homeTrialBadge} • {ui.common.glissonIncludedBadge}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href={buildPrefilledOrderUrl({
                  lang,
                  product: recProduct.slug,
                  step: 1,
                })}
                className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 text-sm font-black text-slate-950 hover:bg-emerald-300"
              >
                <span>{ui.common.configureAndOrder}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-2xl bg-[#16A34A] px-5 py-3.5 text-sm font-extrabold text-white hover:bg-emerald-500"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* FAQs */}
        {comparison.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-black text-slate-950">
              {ui.comparison.faqHeading}
            </h2>
            <div className="mt-4 space-y-3">
              {comparison.faqs.map((f) => (
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

        {/* Cross-links: Comparisons + Related Guides */}
        <div className="mt-12 space-y-7 border-t border-slate-200 pt-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {ui.comparison.moreComparisons}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {COMPARISONS.filter((c) => c.slug !== comparison.slug).map((raw) => {
                const c = getLocalizedComparison(raw, lang);
                return (
                  <Link
                    key={c.slug}
                    href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800 hover:border-teal-600"
                  >
                    {c.shortTitle}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {ui.guide.relatedGuides}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {GUIDES.slice(-5)
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
