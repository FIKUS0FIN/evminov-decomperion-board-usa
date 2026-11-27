import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { HOME_MATRIX_COPY } from "@/i18n/locales/home-part1";
import { HOMEPAGE_EXTRA_COPY } from "@/i18n/locales/home-part2";
import { getLocalizedFaqs } from "@/i18n/locales/faq-and-exercises";
import { getLocalizedComparison } from "@/i18n/locales/comparisons-i18n";
import { getLocalizedCondition } from "@/i18n/locales/conditions-i18n";
import { getLocalizedGuide } from "@/i18n/locales/guides-i18n";
import { SITE_CONFIG } from "@/lib/site-config";
import { getLocalizedHref } from "@/lib/url";
import { COMPARISONS } from "@/data/comparisons";
import { CONDITIONS } from "@/data/conditions";
import { GUIDES } from "@/data/guides";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { HeroShowcaseGallery } from "@/components/sections/HeroShowcaseGallery";
import { ClinicalPathwaysNav } from "@/components/sections/ClinicalPathwaysNav";
import { BiomechanicalCalculator } from "@/components/sections/BiomechanicalCalculator";
import { InversionVisualComparison } from "@/components/sections/InversionVisualComparison";
import { ProductCatalogSection } from "@/components/sections/ProductCatalogSection";
import { GlobalHeritageRoiSection } from "@/components/sections/GlobalHeritageRoiSection";
import { AthleteAndDeskSection } from "@/components/sections/AthleteAndDeskSection";
import { PediatricFamilySection } from "@/components/sections/PediatricFamilySection";
import { FounderAndOnboardingSection } from "@/components/sections/FounderAndOnboardingSection";
import { MountingAndCraftsmanshipSection } from "@/components/sections/MountingAndCraftsmanshipSection";
import { PatentsLightboxSection } from "@/components/sections/PatentsLightboxSection";
import { ExerciseGallerySection } from "@/components/sections/ExerciseGallerySection";
import { InteractiveUsDeliverySection } from "@/components/sections/InteractiveUsDeliverySection";
import { OwnerScenariosAndReviewsSection } from "@/components/sections/OwnerScenariosAndReviewsSection";
import {
  FaqJsonLd,
  HomepageRichSchemas,
  VideoObjectJsonLd,
} from "@/components/seo/JsonLd";

export function HomePageContent({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const h = dict.hero;
  const s = dict.sections;
  const matrix = HOME_MATRIX_COPY[lang];
  const extra = HOMEPAGE_EXTRA_COPY[lang];
  const faqs = getLocalizedFaqs(lang);

  return (
    <>
      <HomepageRichSchemas lang={lang} />
      <FaqJsonLd faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      <VideoObjectJsonLd />

      {/* 1. HERO (Pre-rendered Static HTML + Interactive 6-Photo Gallery) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1628] via-[#0B1F3A] to-[#0D3B46] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
              <Award className="h-3.5 w-3.5" />
              <span>{h.badge}</span>
            </span>

            <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              {h.title}{" "}
              <span className="text-emerald-400">{h.titleHighlight}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {h.subtitle}
            </p>

            <ul className="mt-6 grid gap-2.5 text-sm text-slate-200 sm:grid-cols-2">
              {h.trustItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href={getLocalizedHref("/order/", lang)}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:bg-emerald-400"
              >
                <span>{h.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <span>{h.ctaSecondary}</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span>
                {h.startingFrom}{" "}
                <strong className="text-sm text-white">$450</strong>
              </span>
              <span>
                {h.hsaSavedNote}:{" "}
                <strong className="text-emerald-300">~$315</strong>
              </span>
              <span>
                {h.klarnaNote} <strong className="text-white">$112.50</strong>
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroShowcaseGallery lang={lang} />
          </div>
        </div>
      </section>

      {/* 2. 8-CARD CLINICAL PATHWAYS ROUTER */}
      <ClinicalPathwaysNav lang={lang} />

      {/* 3. PRODUCT CATALOG */}
      <ProductCatalogSection lang={lang} />

      {/* 4. BIOMECHANICAL CALCULATOR */}
      <section id="calculator" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {s.calculatorTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600">{s.calculatorSubtitle}</p>
          </div>
          <div className="mt-8">
            <BiomechanicalCalculator lang={lang} />
          </div>
        </div>
      </section>

      {/* 5. WHY NOT INVERSION? */}
      <section id="compare" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {s.compareTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{s.compareSubtitle}</p>
        </div>

        <InversionVisualComparison lang={lang} />

        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-[#0B1F3A] text-white">
              <tr>
                <th className="p-4 font-bold">{matrix.colFactor}</th>
                <th className="p-4 font-bold text-emerald-400">
                  {matrix.colEvminov}
                </th>
                <th className="p-4 font-bold text-slate-300">
                  {matrix.colInversion}
                </th>
                <th className="p-4 font-bold text-slate-300">
                  {matrix.colClinic}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {matrix.rows.map((row) => (
                <tr key={row.metric}>
                  <td className="p-4 font-bold text-slate-900">{row.metric}</td>
                  <td className="bg-emerald-50/50 p-4 font-semibold text-teal-900">
                    {row.evminov}
                  </td>
                  <td className="p-4 text-slate-600">{row.inversion}</td>
                  <td className="p-4 text-slate-600">{row.clinic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {COMPARISONS.map((raw) => {
            const c = getLocalizedComparison(raw, lang);
            return (
              <Link
                key={c.slug}
                href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800 transition hover:border-teal-600 hover:text-teal-700"
              >
                <span>{c.shortTitle}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* 6. GLOBAL HERITAGE + ROI CALCULATOR */}
      <GlobalHeritageRoiSection lang={lang} />

      {/* 7. ATHLETES, DESK WORKERS, NURSES & TACTICAL */}
      <AthleteAndDeskSection lang={lang} />

      {/* 8. "SPINE TOOTHBRUSH" KIDS & FAMILY POSTURE */}
      <PediatricFamilySection lang={lang} />

      {/* 9. FOUNDER STORY & 30-DAY ONBOARDING */}
      <FounderAndOnboardingSection lang={lang} />

      {/* 10. 16" US STUD MOUNTING & CRAFTSMANSHIP */}
      <MountingAndCraftsmanshipSection lang={lang} />

      {/* 11. PROBLEM-AWARE SPINE GOALS HUB */}
      <section className="bg-[#0B1628] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-black tracking-tight md:text-4xl">
              {s.conditionsTitle}
            </h2>
            <p className="mt-3 text-base text-slate-300">{s.conditionsSubtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONDITIONS.map((raw) => {
              const cond = getLocalizedCondition(raw, lang);
              return (
                <Link
                  key={cond.slug}
                  href={getLocalizedHref(`/conditions/${cond.slug}/`, lang)}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/50 hover:bg-white/10"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    {cond.recommendedAngle}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-white group-hover:text-emerald-300">
                    {cond.shortTitle}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-300">
                    {cond.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-300">
                    {extra.exploreRoutine} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. REAL OFFICIAL VIDEOS */}
      <section id="videos" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {s.videosTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{s.videosSubtitle}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <LiteYouTube
            videoId={SITE_CONFIG.videos.methodDemo.id}
            title={extra.methodDemoVideoTitle}
            thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
          />
          <LiteYouTube
            videoId={SITE_CONFIG.videos.wallMounting.id}
            title={extra.wallMountingVideoTitle}
            thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
          />
        </div>
      </section>

      {/* 13. 20 AUTHENTIC EXERCISE PROTOCOLS */}
      <section id="gallery" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {s.galleryTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600">{s.gallerySubtitle}</p>
          </div>
          <div className="mt-8">
            <ExerciseGallerySection lang={lang} />
          </div>
        </div>
      </section>

      {/* 14. PATENT SCAN LIGHTBOX */}
      <PatentsLightboxSection
        lang={lang}
        title={s.patentsTitle}
        subtitle={s.patentsSubtitle}
      />

      {/* 15. 50-STATE US SHIPPING ESTIMATOR */}
      <InteractiveUsDeliverySection
        lang={lang}
        title={s.shippingTitle}
        subtitle={s.shippingSubtitle}
      />

      {/* 16. REAL OWNER SCENARIOS */}
      <OwnerScenariosAndReviewsSection lang={lang} />

      {/* 17. KNOWLEDGE GUIDES */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                {s.guidesTitle}
              </h2>
              <p className="mt-3 text-base text-slate-600">{s.guidesSubtitle}</p>
            </div>
            <Link
              href={getLocalizedHref("/guides/", lang)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:underline"
            >
              <span>{extra.allClinicalGuides}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {GUIDES.slice(0, 4).map((raw) => {
              const g = getLocalizedGuide(raw, lang);
              return (
                <article
                  key={g.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-100">
                    <OptimizedImage
                      src={g.heroImage}
                      alt={g.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-bold uppercase text-teal-700">
                      {g.category} • {g.readTime}
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-base font-bold text-slate-950">
                      <Link
                        href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                        className="hover:text-teal-700"
                      >
                        {g.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-600">
                      {g.excerpt}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 18. 15-QUESTION LONG-TAIL FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
          {s.faqTitle}
        </h2>
        <p className="mt-3 text-base text-slate-600">{s.faqSubtitle}</p>

        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
            >
              <summary className="cursor-pointer list-none font-display text-base font-bold text-slate-950">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 19. FINAL CTA */}
      <section className="bg-gradient-to-r from-[#023373] via-teal-800 to-[#0B1628] py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-black">{s.finalCtaTitle}</h2>
            <p className="mt-2 text-sm text-teal-100">{s.finalCtaSubtitle}</p>
          </div>
          <Link
            href={getLocalizedHref("/order/", lang)}
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-emerald-400 px-7 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:bg-emerald-300"
          >
            <ShieldCheck className="h-5 w-5" />
            <span>{s.finalCtaButton}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
