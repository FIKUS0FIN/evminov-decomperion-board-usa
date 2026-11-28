import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import {
  GUIDE_CATEGORY_LABELS,
  HUB_VIEWS_COPY,
  LEGAL_META_LABELS,
  LEGAL_PAGES_CONTENT,
  LegalDocType,
  localizeCarrier,
  localizeReadTime,
  localizeTransitDays,
  WELCOME_HUB_COPY,
} from "@/i18n/locales/chrome";
import { ORDER_WIZARD_COPY } from "@/i18n/locales/catalog";
import { getLocalizedComparison } from "@/i18n/locales/comparisons-i18n";
import { getLocalizedCondition } from "@/i18n/locales/conditions-i18n";
import { getLocalizedGuide } from "@/i18n/locales/guides-i18n";
import { SITE_CONFIG } from "@/lib/site-config";
import { getLocalizedHref } from "@/lib/url";
import { COMPARISONS } from "@/data/comparisons";
import { CONDITIONS } from "@/data/conditions";
import { GUIDES } from "@/data/guides";
import { US_STATES } from "@/data/us-states";
import { CA_PROVINCES } from "@/data/ca-provinces";
import { IS_CANADA } from "@/lib/region-config";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ProductCatalogSection } from "@/components/sections/ProductCatalogSection";
import { BiomechanicalCalculator } from "@/components/sections/BiomechanicalCalculator";
import { InteractiveSpineQuizSection } from "@/components/sections/InteractiveSpineQuizSection";
import {
  GuideCardViewModel,
  GuidesExplorerClient,
} from "@/components/sections/GuidesExplorerClient";
import { OrderWizard } from "@/components/sections/OrderWizard";
import { WelcomeReviewHub } from "@/components/sections/WelcomeReviewHub";
import { CalculatorWebAppJsonLd } from "@/components/seo/JsonLd";
import { CentersHeritagePage } from "@/components/pages/CentersHeritagePage";

export function ProductsHubView({ lang }: { lang: Locale }) {
  return (
    <div className="py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:pt-6">
        <h1 className="break-words font-display text-[1.75rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
          {getDictionary(lang).sections.catalogTitle}
        </h1>
      </div>
      <ProductCatalogSection lang={lang} />
    </div>
  );
}

export function CompareHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  const hub = HUB_VIEWS_COPY[lang];
  return (
    <div className="mx-auto max-w-6xl px-4 py-7 sm:py-10 md:py-12">
      <h1 className="break-words font-display text-[1.75rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {s.compareTitle}
      </h1>
      <p className="mt-2.5 max-w-3xl text-sm text-slate-600 sm:mt-3 sm:text-base">{s.compareSubtitle}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {COMPARISONS.map((raw) => {
          const c = getLocalizedComparison(raw, lang);
          return (
            <Link
              key={c.slug}
              href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-600 hover:shadow-lg"
            >
              <span className="text-xs font-bold uppercase text-teal-700">
                {c.eyebrow}
              </span>
              <h2 className="mt-2 font-display text-xl font-black text-slate-950">
                {c.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">{c.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
                {hub.compareCta} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ConditionsHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  const hub = HUB_VIEWS_COPY[lang];
  return (
    <div className="mx-auto max-w-6xl px-4 py-7 sm:py-10 md:py-12">
      <h1 className="break-words font-display text-[1.75rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {s.conditionsTitle}
      </h1>
      <p className="mt-2.5 max-w-3xl text-sm text-slate-600 sm:mt-3 sm:text-base">{s.conditionsSubtitle}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {CONDITIONS.map((raw) => {
          const c = getLocalizedCondition(raw, lang);
          return (
            <Link
              key={c.slug}
              href={getLocalizedHref(`/conditions/${c.slug}/`, lang)}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-600 hover:shadow-lg"
            >
              <span className="text-xs font-bold uppercase text-teal-700">
                {c.recommendedAngle} • {c.dailyDuration}
              </span>
              <h2 className="mt-2 font-display text-xl font-black text-slate-950">
                {c.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">{c.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
                {hub.conditionsCta} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function classifyGuideTopic(slug: string, category: string): GuideCardViewModel["topicBucket"] {
  const s = slug.toLowerCase();
  const c = category.toLowerCase();
  if (s.includes("sciatica") || s.includes("piriformis") || s.includes("nerve-flossing")) return "sciatica";
  if (s.includes("neck") || s.includes("glisson") || s.includes("desk") || c.includes("cervical")) return "neck";
  if (s.includes("inversion") || s.includes("high-blood-pressure") || s.includes("best-home-spinal")) return "compare";
  if (s.includes("hsa-fsa") || s.includes("buy-evminov") || s.includes("drx9000")) return "buying";
  if (s.includes("lifter") || s.includes("pediatric") || s.includes("toothbrush")) return "family";
  return "lumbar";
}

export function GuidesHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  const hub = HUB_VIEWS_COPY[lang];
  const items: GuideCardViewModel[] = GUIDES.map((raw) => {
    const g = getLocalizedGuide(raw, lang);
    return {
      slug: g.slug,
      title: g.title,
      excerpt: g.excerpt,
      heroImage: g.heroImage,
      categoryLabel: GUIDE_CATEGORY_LABELS[raw.category]?.[lang] || g.category,
      readTimeLabel: localizeReadTime(raw.readTime, lang),
      topicBucket: classifyGuideTopic(raw.slug, raw.category),
    };
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-7 sm:py-10 md:py-12">
      <h1 className="break-words font-display text-[1.75rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {s.guidesTitle}
      </h1>
      <p className="mt-2.5 max-w-3xl text-sm text-slate-600 sm:mt-3 sm:text-base">{s.guidesSubtitle}</p>
      <GuidesExplorerClient items={items} lang={lang} readMoreLabel={hub.guidesCta} />
      <InteractiveSpineQuizSection lang={lang} compact />
    </div>
  );
}

export function ShippingHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  const hub = HUB_VIEWS_COPY[lang];
  const sc = hub.shippingCards;
  return (
    <div className="mx-auto max-w-7xl px-4 py-7 sm:py-10 md:py-12">
      <h1 className="break-words font-display text-[1.75rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {s.shippingTitle}
      </h1>
      <p className="mt-2.5 max-w-3xl text-sm text-slate-600 sm:mt-3 sm:text-base">{s.shippingSubtitle}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-950 p-6 text-white">
          <p className="text-xs font-bold uppercase text-emerald-400">
            {sc.usLabel}
          </p>
          <p className="mt-1 font-display text-xl font-black">{sc.usTime}</p>
          <p className="mt-2 text-xs text-slate-300">{sc.usDesc}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-bold uppercase text-teal-700">
            {sc.caLabel}
          </p>
          <p className="mt-1 font-display text-xl font-black text-slate-950">
            {sc.caTime}
          </p>
          <p className="mt-2 text-xs text-slate-600">{sc.caDesc}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-bold uppercase text-teal-700">
            {sc.euLabel}
          </p>
          <p className="mt-1 font-display text-xl font-black text-slate-950">
            {sc.euTime}
          </p>
          <p className="mt-2 text-xs text-slate-600">{sc.euDesc}</p>
        </div>
      </div>

      <h2 className="mt-12 font-display text-2xl font-black text-slate-950">
        {IS_CANADA
          ? "Canadian Provinces & Territories Delivery Directory"
          : hub.usDirectoryTitle}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {(IS_CANADA ? CA_PROVINCES : US_STATES).map((st) => (
          <Link
            key={st.code}
            href={`/shipping/${st.slug}/`}
            className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-teal-600"
          >
            <p className="text-sm font-bold text-slate-950">
              {st.name} ({st.code})
            </p>
            <p className="mt-0.5 text-xs font-semibold text-teal-700">
              {localizeTransitDays(st.expressDays, lang)}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              {localizeCarrier(st.carrier, lang)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CentersHeritageView({ lang }: { lang: Locale }) {
  return <CentersHeritagePage lang={lang} />;
}

export function CalculatorPageView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10 md:py-12">
      <CalculatorWebAppJsonLd lang={lang} />
      <h1 className="break-words font-display text-[1.65rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {s.calculatorTitle}
      </h1>
      <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:mt-3 sm:text-base">{s.calculatorSubtitle}</p>
      <div className="mt-5 sm:mt-8">
        <BiomechanicalCalculator lang={lang} />
      </div>
    </div>
  );
}

export function OrderPageView({ lang }: { lang: Locale }) {
  const o = getDictionary(lang).orderUi;
  const ow = ORDER_WIZARD_COPY[lang];
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10 md:py-12">
      <h1 className="break-words font-display text-[1.65rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {o.pageTitle}
      </h1>
      <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:mt-3 sm:text-base">{ow.pageSubtitle}</p>
      <div className="mt-5 sm:mt-8">
        <Suspense fallback={<div className="h-96 rounded-3xl bg-slate-100" />}>
          <OrderWizard lang={lang} />
        </Suspense>
      </div>
    </div>
  );
}

export function WelcomePageView({ lang = "en" }: { lang?: Locale }) {
  const w = WELCOME_HUB_COPY[lang];
  return (
    <div className="mx-auto max-w-5xl px-4 py-7 sm:py-10 md:py-12">
      <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800">
        {w.badge}
      </span>
      <h1 className="mt-3 break-words font-display text-[1.65rem] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {w.pageTitle}
      </h1>
      <p className="mt-2.5 text-sm text-slate-600 sm:mt-3 sm:text-base">{w.pageSubtitle}</p>
      <div className="mt-6 sm:mt-8">
        <WelcomeReviewHub lang={lang} />
      </div>
    </div>
  );
}

export function LegalPageView({
  type,
  lang = "en",
}: {
  type: LegalDocType;
  lang?: Locale;
}) {
  const doc = LEGAL_PAGES_CONTENT[lang][type];
  const meta = LEGAL_META_LABELS[lang];
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-3xl font-black text-slate-950 md:text-4xl">
        {doc.title}
      </h1>
      <p className="mt-2 text-xs font-semibold text-slate-500">
        {meta.lastUpdated}: {doc.updated} • {SITE_CONFIG.brandName} (
        {SITE_CONFIG.address.full})
      </p>
      <div className="mt-8 space-y-6">
        {doc.sections.map((sec) => (
          <section key={sec.h}>
            <h2 className="font-display text-xl font-bold text-slate-950">
              {sec.h}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{sec.p}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
