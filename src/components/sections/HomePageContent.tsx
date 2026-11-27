import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Award } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
import { getLocalizedHref } from "@/lib/url";
import { HOME_COMPARISON_MATRIX, COMPARISONS } from "@/data/comparisons";
import { CONDITIONS } from "@/data/conditions";
import { GUIDES } from "@/data/guides";
import { GLOBAL_FAQS } from "@/data/faq";
import { PATENTS } from "@/data/heritage";
import { US_STATES } from "@/data/us-states";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { BiomechanicalCalculator } from "@/components/sections/BiomechanicalCalculator";
import { ProductCatalogSection } from "@/components/sections/ProductCatalogSection";
import { ExerciseGallerySection } from "@/components/sections/ExerciseGallerySection";
import { FaqJsonLd, VideoObjectJsonLd } from "@/components/seo/JsonLd";

export function HomePageContent({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const h = dict.hero;
  const s = dict.sections;

  const topStates = US_STATES.filter((st) =>
    ["CA", "TX", "FL", "NY", "WA", "IL", "CO", "AZ", "NC", "MA", "VA", "GA"].includes(
      st.code
    )
  );

  return (
    <>
      <FaqJsonLd
        faqs={GLOBAL_FAQS.map((f) => ({ q: f.question, a: f.answer }))}
      />
      <VideoObjectJsonLd />

      {/* 1. HERO (Pre-rendered Static HTML + Priority LCP Image) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
              <Award className="h-3.5 w-3.5" />
              <span>{h.badge}</span>
            </span>

            <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
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
                {h.startingFrom} <strong className="text-white text-sm">$450</strong>
              </span>
              <span>
                {h.hsaSavedNote}: <strong className="text-emerald-300">~$315</strong>
              </span>
              <span>
                {h.klarnaNote} <strong className="text-white">$112.50</strong>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
              <OptimizedImage
                src="/images/authentic/hero-full-device-traction.jpg"
                alt="Evminov Spine Decompression Board controlled inclined traction"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {[
                { src: "/images/authentic/evminov-board-profile.jpg", alt: "Carpathian pine board profile" },
                { src: "/images/products/board-mounting-bracket.jpg", alt: "16 inch US wood stud wall mount" },
                { src: "/images/accessories/renter-stand-setup.jpg", alt: "No-drill apartment ladder stand" },
              ].map((thumb) => (
                <div
                  key={thumb.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/15"
                >
                  <OptimizedImage
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATALOG (With Global HSA/FSA ~30% Toggle) */}
      <ProductCatalogSection lang={lang} />

      {/* 3. BIOMECHANICAL CALCULATOR (Promoted from section #14 to #3!) */}
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

      {/* 4. COMPARISON MATRIX + LINKS TO ALL 5 VERSUS PAGES */}
      <section id="compare" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {s.compareTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{s.compareSubtitle}</p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="p-4 font-bold">Factor</th>
                <th className="p-4 font-bold text-emerald-400">Evminov Spine Board</th>
                <th className="p-4 font-bold text-slate-300">90° Inversion Tables</th>
                <th className="p-4 font-bold text-slate-300">Clinic Traction Visits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {HOME_COMPARISON_MATRIX.map((row) => (
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
          {COMPARISONS.map((c) => (
            <Link
              key={c.slug}
              href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800 transition hover:border-teal-600 hover:text-teal-700"
            >
              <span>{c.shortTitle}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* 5. PROBLEM-AWARE SPINE GOALS HUB */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-black tracking-tight md:text-4xl">
              {s.conditionsTitle}
            </h2>
            <p className="mt-3 text-base text-slate-300">{s.conditionsSubtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONDITIONS.map((cond) => (
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
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300 line-clamp-3">
                  {cond.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-300">
                  Explore routine <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL OFFICIAL VIDEOS (LiteYouTube Click Facades — Zero Rickrolls!) */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {s.videosTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{s.videosSubtitle}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <LiteYouTube
            videoId={SITE_CONFIG.videos.methodDemo.id}
            title={SITE_CONFIG.videos.methodDemo.title}
            thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
          />
          <LiteYouTube
            videoId={SITE_CONFIG.videos.wallMounting.id}
            title={SITE_CONFIG.videos.wallMounting.title}
            thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
          />
        </div>
      </section>

      {/* 7. 20 AUTHENTIC EXERCISE PROTOCOLS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {s.galleryTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600">{s.gallerySubtitle}</p>
          </div>
          <div className="mt-8">
            <ExerciseGallerySection />
          </div>
        </div>
      </section>

      {/* 8. PATENTS & 30-YEAR HERITAGE */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {s.patentsTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600">{s.patentsSubtitle}</p>
          </div>
          <Link
            href={getLocalizedHref("/centers/", lang)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:underline"
          >
            <span>Explore Full Heritage &amp; Centers</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PATENTS.map((doc) => (
            <div
              key={doc.id}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <OptimizedImage
                  src={doc.image}
                  alt={doc.title}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase text-teal-700">
                  {doc.badge}
                </span>
                <h3 className="mt-0.5 text-sm font-extrabold text-slate-950">
                  {doc.docNumber}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {doc.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. 50-STATE US SHIPPING HUB PREVIEW */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                {s.shippingTitle}
              </h2>
              <p className="mt-3 text-base text-slate-600">{s.shippingSubtitle}</p>
            </div>
            <Link
              href={getLocalizedHref("/shipping/", lang)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:underline"
            >
              <Truck className="h-4 w-4" />
              <span>All 50 US States &amp; Global Rates</span>
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {topStates.map((st) => (
              <Link
                key={st.code}
                href={`/shipping/${st.slug}/`}
                className="rounded-2xl border border-slate-200 bg-white p-3.5 text-left shadow-sm transition hover:border-teal-600"
              >
                <p className="text-sm font-bold text-slate-950">{st.name}</p>
                <p className="mt-0.5 text-xs font-semibold text-teal-700">
                  {st.expressDays}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">{st.carrier}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. KNOWLEDGE GUIDES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
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
            <span>All Clinical Guides</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {GUIDES.slice(0, 4).map((g) => (
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
                <h3 className="mt-1.5 font-display text-base font-bold text-slate-950 line-clamp-2">
                  <Link
                    href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                    className="hover:text-teal-700"
                  >
                    {g.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
                  {g.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {s.faqTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{s.faqSubtitle}</p>

          <div className="mt-8 space-y-3">
            {GLOBAL_FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
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
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="bg-gradient-to-r from-teal-800 to-slate-950 py-16 text-white">
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
