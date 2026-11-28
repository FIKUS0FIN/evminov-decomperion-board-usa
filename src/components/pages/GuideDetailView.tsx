import Link from "next/link";
import { ArrowRight, BookOpen, MessageCircle, ShieldCheck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { GuideItem, GUIDES } from "@/data/guides";
import { COMPARISONS } from "@/data/comparisons";
import { CONDITIONS } from "@/data/conditions";
import { getProductBySlug } from "@/data/products";
import { getLocalizedGuide } from "@/i18n/locales/guides-i18n";
import { getLocalizedComparison } from "@/i18n/locales/comparisons-i18n";
import { getLocalizedCondition } from "@/i18n/locales/conditions-i18n";
import { getSiloUi } from "@/i18n/locales/silo-ui";
import { BREADCRUMB_COPY } from "@/i18n/locales/chrome";
import { getLocalizedProduct } from "@/i18n/locales/catalog";
import { buildPrefilledOrderUrl, getCanonicalUrl, getLocalizedHref } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { SITE_CONFIG } from "@/lib/site-config";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { BreadcrumbJsonLd, FaqJsonLd, GuideArticleJsonLd } from "@/components/seo/JsonLd";

const GUIDE_CRO_COPY: Record<
  Locale,
  {
    homeLabel: string;
    guidesLabel: string;
    midCardBadge: string;
    midCardTitle: string;
    midCardDesc: string;
    stdBtn: string;
    wideBtn: string;
    waBtn: string;
    compareHeading: string;
  }
> = {
  en: {
    homeLabel: "Home",
    guidesLabel: "Guides",
    midCardBadge: "US & Canada • ~2 Weeks Courier Delivery • 1-Year Warranty",
    midCardTitle: "Ready to Configure Your Folding Evminov Board?",
    midCardDesc:
      "Choose Standard 26 cm (≤100 kg / 220 lbs) or Reinforced Wide 30 cm (>100 kg / up to 330 lbs) in Light or Dark finish — free Glisson Loop & HSA/FSA itemized receipt included.",
    stdBtn: "Standard 26 cm →",
    wideBtn: "Reinforced Wide 30 cm →",
    waBtn: "Ask Operator on WhatsApp",
    compareHeading: "Compare Home Decompression Options",
  },
  es: {
    homeLabel: "Inicio",
    guidesLabel: "Guías",
    midCardBadge: "EE. UU. y Canadá • Envío ~2 Semanas • Garantía 1 Año",
    midCardTitle: "¿Listo para Configurar Tu Tabla Evminov Plegable?",
    midCardDesc:
      "Elige Estándar 26 cm (≤100 kg) o Reforzada 30 cm (>100 kg) en acabado Claro u Oscuro — Lazo de Glisson gratis y recibo HSA/FSA incluidos.",
    stdBtn: "Estándar 26 cm →",
    wideBtn: "Reforzada 30 cm →",
    waBtn: "Consultar por WhatsApp",
    compareHeading: "Compara Opciones de Descompresión",
  },
  fr: {
    homeLabel: "Accueil",
    guidesLabel: "Guides",
    midCardBadge: "USA & Canada • Livraison ~2 Semaines • Garantie 1 An",
    midCardTitle: "Prêt à Configurer Votre Planche Evminov Pliable ?",
    midCardDesc:
      "Choisissez Standard 26 cm (≤100 kg) ou Renforcée 30 cm (>100 kg), finition Claire ou Foncée — Boucle de Glisson offerte et reçu détaillé inclus.",
    stdBtn: "Standard 26 cm →",
    wideBtn: "Renforcée 30 cm →",
    waBtn: "Écrire sur WhatsApp",
    compareHeading: "Comparer les Solutions de Décompression",
  },
  de: {
    homeLabel: "Startseite",
    guidesLabel: "Ratgeber",
    midCardBadge: "USA & Kanada • ~2 Wochen Versand • 1 Jahr Garantie",
    midCardTitle: "Bereit für Ihr klappbares Evminov Board?",
    midCardDesc:
      "Wählen Sie Standard 26 cm (≤100 kg) oder Verstärkt 30 cm (>100 kg) in Hell oder Dunkel — inkl. gratis Glisson-Schlaufe & HSA/FSA-Beleg.",
    stdBtn: "Standard 26 cm →",
    wideBtn: "Verstärkt 30 cm →",
    waBtn: "Per WhatsApp fragen",
    compareHeading: "Dekompressions-Alternativen vergleichen",
  },
  uk: {
    homeLabel: "Головна",
    guidesLabel: "Гайди",
    midCardBadge: "США та Канада • Доставка ~2 Тижні • Гарантія 1 Рік",
    midCardTitle: "Готові Підібрати Свій Розбірний Профілактор Євмінова?",
    midCardDesc:
      "Обирайте Стандарт 26 см (до 100 кг) або Посилений 30 см (>100 кг), світлий чи темний — Петля Гліссона безкоштовно та інвойс HSA/FSA у комплекті.",
    stdBtn: "Стандарт 26 см →",
    wideBtn: "Посилений 30 см →",
    waBtn: "Написати у WhatsApp",
    compareHeading: "Порівняння з Іншими Методами",
  },
  ru: {
    homeLabel: "Главная",
    guidesLabel: "Гайды",
    midCardBadge: "США и Канада • Доставка ~2 Недели • Гарантия 1 Год",
    midCardTitle: "Готовы Подобрать Свой Разборный Профилактор Евминова?",
    midCardDesc:
      "Выбирайте Стандарт 26 см (до 100 кг) или Усиленный 30 см (>100 кг), светлый или тёмный — Петля Глиссона бесплатно и чек HSA/FSA в комплекте.",
    stdBtn: "Стандарт 26 см →",
    wideBtn: "Усиленный 30 см →",
    waBtn: "Написать в WhatsApp",
    compareHeading: "Сравнение с Другими Методами",
  },
};

export function GuideDetailView({
  guide: rawGuide,
  lang,
}: {
  guide: GuideItem;
  lang: Locale;
}) {
  const guide = getLocalizedGuide(rawGuide, lang);
  const ui = getSiloUi(lang);
  const cro = GUIDE_CRO_COPY[lang];
  const bc = BREADCRUMB_COPY[lang];
  const recProduct = getProductBySlug(guide.recommendedProductSlug);
  const recLocalized = recProduct
    ? getLocalizedProduct(recProduct, lang)
    : undefined;
  const relatedGuides = [...GUIDES]
    .filter((g) => g.slug !== guide.slug)
    .sort((a, b) => {
      const aScore =
        (a.category === rawGuide.category ? 2 : 0) +
        (a.recommendedProductSlug === rawGuide.recommendedProductSlug ? 1 : 0);
      const bScore =
        (b.category === rawGuide.category ? 2 : 0) +
        (b.recommendedProductSlug === rawGuide.recommendedProductSlug ? 1 : 0);
      if (bScore !== aScore) return bScore - aScore;
      return b.dateModified.localeCompare(a.dateModified);
    })
    .slice(0, 6);

  return (
    <>
      <GuideArticleJsonLd guide={guide} lang={lang} />
      <FaqJsonLd faqs={guide.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: bc.home, url: getCanonicalUrl("/", lang) },
          { name: cro.guidesLabel, url: getCanonicalUrl("/guides/", lang) },
          { name: guide.title, url: getCanonicalUrl(`/guides/${guide.slug}/`, lang) },
        ]}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:py-12 lg:grid-cols-12">
        {/* Main Article */}
        <article className="lg:col-span-8">
          <nav
            aria-label={bc.navAria}
            className="mb-3 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500"
          >
            <Link href={getLocalizedHref("/", lang)} className="hover:text-teal-700">
              {bc.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={getLocalizedHref("/guides/", lang)} className="hover:text-teal-700">
              {cro.guidesLabel}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="line-clamp-1 text-slate-800">{guide.title}</span>
          </nav>

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

          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 bg-[#F4F7F9]">
            <OptimizedImage
              src={guide.heroImage}
              alt={guide.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-contain p-3"
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

          {/* Sections + In-Article CRO Width Picker after Section #2 */}
          <div className="mt-8 space-y-8">
            {guide.sections.map((sec, secIdx) => (
              <div key={sec.id} className="space-y-8">
                <section id={sec.id}>
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

                {secIdx === Math.min(1, guide.sections.length - 1) && recProduct && (
                  <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-[#0B1F3A] to-[#0D3B46] p-6 text-white shadow-lg">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                      <ShieldCheck className="h-4 w-4" />
                      <span>{cro.midCardBadge}</span>
                    </p>
                    <h3 className="mt-2 font-display text-xl font-black">
                      {cro.midCardTitle}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-sm">
                      {cro.midCardDesc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <Link
                        href={`${buildPrefilledOrderUrl({
                          lang,
                          product: recProduct.slug,
                          step: 1,
                        }).replace("#order-form", "")}&width=standard#order-form`}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-400 px-4 py-2.5 text-xs font-black text-slate-950 transition hover:bg-emerald-300"
                      >
                        {cro.stdBtn}
                      </Link>
                      <Link
                        href={`${buildPrefilledOrderUrl({
                          lang,
                          product: recProduct.slug,
                          step: 1,
                        }).replace("#order-form", "")}&width=wide#order-form`}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-white/20"
                      >
                        {cro.wideBtn}
                      </Link>
                      <a
                        href={SITE_CONFIG.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#16A34A] px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-emerald-500"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>{cro.waBtn}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
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

          {/* Silo Internal Cross-Links to Comparisons & Conditions */}
          <section className="mt-10 space-y-6 border-t border-slate-200 pt-7">
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                {cro.compareHeading}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {COMPARISONS.map((rawComp) => {
                  const c = getLocalizedComparison(rawComp, lang);
                  return (
                    <Link
                      key={c.slug}
                      href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-800 transition hover:border-teal-600 hover:text-teal-800"
                    >
                      {c.shortTitle} →
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                {ui.condition.otherSpineGoals}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {CONDITIONS.slice(0, 6).map((rawCond) => {
                  const cond = getLocalizedCondition(rawCond, lang);
                  return (
                    <Link
                      key={cond.slug}
                      href={getLocalizedHref(`/conditions/${cond.slug}/`, lang)}
                      className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-teal-600 hover:text-teal-800"
                    >
                      {cond.shortTitle} →
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
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
                    step: 1,
                  })}
                  className="mt-5 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-emerald-300"
                >
                  <span>{ui.common.configureAndOrder}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp • {SITE_CONFIG.phoneDisplay}</span>
                </a>
                <Link
                  href={getLocalizedHref("/calculator/", lang)}
                  className="mt-2.5 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10"
                >
                  {ui.common.calculateSafeAngle}
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {ui.guide.relatedGuides}
                </p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {relatedGuides.map((raw) => {
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
