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
import { OrderWizard } from "@/components/sections/OrderWizard";
import { WelcomeReviewHub } from "@/components/sections/WelcomeReviewHub";
import { CalculatorWebAppJsonLd } from "@/components/seo/JsonLd";
import { CentersHeritagePage } from "@/components/pages/CentersHeritagePage";

export function ProductsHubView({ lang }: { lang: Locale }) {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
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
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.compareTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.compareSubtitle}</p>
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
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.conditionsTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.conditionsSubtitle}</p>
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

export function GuidesHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  const hub = HUB_VIEWS_COPY[lang];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.guidesTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.guidesSubtitle}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((raw) => {
          const g = getLocalizedGuide(raw, lang);
          return (
            <article
              key={g.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <OptimizedImage
                  src={g.heroImage}
                  alt={g.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase text-teal-700">
                  {GUIDE_CATEGORY_LABELS[raw.category]?.[lang] || g.category} •{" "}
                  {localizeReadTime(raw.readTime, lang)}
                </span>
                <h2 className="mt-2 font-display text-lg font-extrabold text-slate-950">
                  <Link
                    href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                    className="hover:text-teal-700"
                  >
                    {g.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">{g.excerpt}</p>
                <Link
                  href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal-700"
                >
                  {hub.guidesCta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function ShippingHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  const hub = HUB_VIEWS_COPY[lang];
  const sc = hub.shippingCards;
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.shippingTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.shippingSubtitle}</p>

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
    <div className="mx-auto max-w-6xl px-4 py-12">
      <CalculatorWebAppJsonLd lang={lang} />
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.calculatorTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.calculatorSubtitle}</p>
      <div className="mt-8">
        <BiomechanicalCalculator lang={lang} />
      </div>
    </div>
  );
}

export function OrderPageView({ lang }: { lang: Locale }) {
  const o = getDictionary(lang).orderUi;
  const ow = ORDER_WIZARD_COPY[lang];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {o.pageTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{ow.pageSubtitle}</p>
      <div className="mt-8">
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
    <div className="mx-auto max-w-5xl px-4 py-12">
      <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800">
        {w.badge}
      </span>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-slate-950">
        {w.pageTitle}
      </h1>
      <p className="mt-3 text-base text-slate-600">{w.pageSubtitle}</p>
      <div className="mt-8">
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
