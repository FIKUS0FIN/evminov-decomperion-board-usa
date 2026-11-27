import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Locale } from "@/i18n/types";
import { GuideItem, GUIDES } from "@/data/guides";
import { getProductBySlug } from "@/data/products";
import { getLocalizedGuide } from "@/i18n/locales/guides-i18n";
import { getSiloUi } from "@/i18n/locales/silo-ui";
import { getLocalizedProduct } from "@/i18n/locales/catalog";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { FaqJsonLd, GuideArticleJsonLd } from "@/components/seo/JsonLd";

export function GuideDetailView({
  guide: rawGuide,
  lang,
}: {
  guide: GuideItem;
  lang: Locale;
}) {
  const guide = getLocalizedGuide(rawGuide, lang);
  const ui = getSiloUi(lang);
  const recProduct = getProductBySlug(guide.recommendedProductSlug);
  const recLocalized = recProduct
    ? getLocalizedProduct(recProduct, lang)
    : undefined;

  return (
    <>
      <GuideArticleJsonLd guide={guide} lang={lang} />
      <FaqJsonLd faqs={guide.faqs} />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-12">
        {/* Main Article */}
        <article className="lg:col-span-8">
          <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
            {guide.category} • {guide.readTime}
          </span>
          <h1 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {guide.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-slate-200 py-3 text-xs text-slate-500">
            <span>
              {ui.guide.byAuthorPrefix}{" "}
              <strong className="text-slate-900">{guide.author.name}</strong> (
              {guide.author.credentials})
            </span>
            <span>
              {ui.guide.updatedLabel}: {guide.dateModified}
            </span>
          </div>

          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200">
            <OptimizedImage
              src={guide.heroImage}
              alt={guide.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          {/* Table of Contents */}
          <nav
            aria-label={ui.guide.tocAriaLabel}
            className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
              <BookOpen className="h-4 w-4 text-teal-700" />
              <span>{ui.guide.inThisGuide}</span>
            </p>
            <ul className="mt-2.5 space-y-1.5 text-sm">
              {guide.sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="font-semibold text-teal-800 hover:underline"
                  >
                    {sec.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="mt-8 space-y-8">
            {guide.sections.map((sec) => (
              <section key={sec.id} id={sec.id}>
                <h2 className="font-display text-2xl font-black text-slate-950">
                  {sec.heading}
                </h2>
                <div className="mt-3 space-y-4 text-base leading-relaxed text-slate-700">
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {sec.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Topic-Specific Citations */}
          {guide.references.length > 0 && (
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                {ui.guide.referencesHeading}
              </h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-xs text-slate-600">
                {guide.references.map((ref) => (
                  <li key={ref.citation}>
                    {ref.citation}{" "}
                    <span className="font-semibold text-slate-800">
                      ({ref.source})
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Guide FAQs (Single JSON-LD only — zero Microdata duplicate!) */}
          {guide.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-2xl font-black text-slate-950">
                {ui.guide.keyQuestionsHeading}
              </h2>
              <div className="mt-4 space-y-3">
                {guide.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    open
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <summary className="cursor-pointer font-bold text-slate-950">
                      {faq.q}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Contextual Conversion Sidebar */}
        <aside className="space-y-6 lg:col-span-4">
          {recProduct && recLocalized && (
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
                <p className="text-xs font-bold uppercase text-emerald-400">
                  {ui.guide.featuredEquipment}
                </p>
                <h2 className="mt-1.5 font-display text-xl font-black">
                  {recLocalized.name}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {recLocalized.keyFeature}
                </p>
                <p className="mt-4 text-2xl font-black text-emerald-400">
                  {formatUSD(recProduct.directPriceUsd)}{" "}
                  <span className="text-xs font-normal text-slate-400">
                    {ui.common.directLabel} / {formatUSD(recProduct.expressPriceUsd)}{" "}
                    {ui.common.caExpressLabel}
                  </span>
                </p>
                <Link
                  href={buildPrefilledOrderUrl({
                    lang,
                    product: recProduct.slug,
                    step: 2,
                  })}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-emerald-300"
                >
                  <span>{ui.common.configureAndOrder}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={getLocalizedHref("/calculator/", lang)}
                  className="mt-2.5 inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10"
                >
                  {ui.common.calculateSafeAngle}
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {ui.guide.relatedGuides}
                </p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {GUIDES.filter((g) => g.slug !== guide.slug)
                    .slice(0, 4)
                    .map((raw) => {
                      const g = getLocalizedGuide(raw, lang);
                      return (
                        <li key={g.slug}>
                          <Link
                            href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                            className="font-semibold text-slate-800 hover:text-teal-700"
                          >
                            {g.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
