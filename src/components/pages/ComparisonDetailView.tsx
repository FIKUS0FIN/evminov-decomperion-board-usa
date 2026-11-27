import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Locale } from "@/i18n/types";
import { ComparisonPageData, COMPARISONS } from "@/data/comparisons";
import { getProductBySlug } from "@/data/products";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export function ComparisonDetailView({
  comparison,
  lang,
}: {
  comparison: ComparisonPageData;
  lang: Locale;
}) {
  const recProduct = getProductBySlug(comparison.recommendedProductSlug);

  return (
    <>
      <FaqJsonLd faqs={comparison.faqs} />
      <article className="mx-auto max-w-5xl px-4 py-12">
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
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 md:col-span-6">
            <OptimizedImage
              src={comparison.heroImage}
              alt={comparison.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-3xl bg-slate-950 p-6 text-white md:col-span-6">
            <h2 className="font-display text-lg font-bold text-emerald-400">
              Key Takeaways
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
                <th className="p-4 font-bold">Criteria</th>
                <th className="p-4 font-bold text-emerald-400">Evminov Spine Board</th>
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
        {recProduct && (
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-slate-950 to-teal-900 p-7 text-white md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase text-emerald-400">
                Recommended Upgrade
              </p>
              <h2 className="mt-1 font-display text-2xl font-black">
                {recProduct.localizedNames[lang] || recProduct.name}
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Starting from {formatUSD(recProduct.directPriceUsd)} • 60-Day Home Trial •
                Glisson Loop Included
              </p>
            </div>
            <Link
              href={buildPrefilledOrderUrl({
                lang,
                product: recProduct.slug,
                step: 2,
              })}
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 text-sm font-black text-slate-950 hover:bg-emerald-300"
            >
              <span>Configure &amp; Order</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* FAQs */}
        {comparison.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-black text-slate-950">
              Frequently Asked Questions
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
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Cross-links */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            More Comparisons
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {COMPARISONS.filter((c) => c.slug !== comparison.slug).map((c) => (
              <Link
                key={c.slug}
                href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800 hover:border-teal-600"
              >
                {c.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
