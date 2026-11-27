import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
import { getLocalizedHref } from "@/lib/url";
import { COMPARISONS } from "@/data/comparisons";
import { CONDITIONS } from "@/data/conditions";
import { GUIDES } from "@/data/guides";
import { US_STATES } from "@/data/us-states";
import { CONTRAINDICATIONS } from "@/data/heritage";
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
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.compareTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.compareSubtitle}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {COMPARISONS.map((c) => (
          <Link
            key={c.slug}
            href={getLocalizedHref(`/compare/${c.slug}/`, lang)}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-600 hover:shadow-lg"
          >
            <span className="text-xs font-bold uppercase text-teal-700">{c.eyebrow}</span>
            <h2 className="mt-2 font-display text-xl font-black text-slate-950">
              {c.title}
            </h2>
            <p className="mt-2 flex-1 text-sm text-slate-600">{c.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
              Read Side-by-Side Comparison <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ConditionsHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.conditionsTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.conditionsSubtitle}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {CONDITIONS.map((c) => (
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
              View Routine &amp; Sizing <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function GuidesHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.guidesTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.guidesSubtitle}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
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
                {g.category} • {g.readTime}
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
                Read Guide <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ShippingHubView({ lang }: { lang: Locale }) {
  const s = getDictionary(lang).sections;
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {s.shippingTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{s.shippingSubtitle}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-950 p-6 text-white">
          <p className="text-xs font-bold uppercase text-emerald-400">United States</p>
          <p className="mt-1 font-display text-xl font-black">1–4 Business Days</p>
          <p className="mt-2 text-xs text-slate-300">
            Dispatched from Glendale, CA ({SITE_CONFIG.address.street}) via insured UPS / FedEx.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-bold uppercase text-teal-700">Canada (CAD / USD)</p>
          <p className="mt-1 font-display text-xl font-black text-slate-950">4–8 Business Days</p>
          <p className="mt-2 text-xs text-slate-600">
            Tracked cross-border UPS / Canada Post delivery across Ontario, Quebec, BC &amp; Alberta.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-bold uppercase text-teal-700">Europe &amp; Ukraine</p>
          <p className="mt-1 font-display text-xl font-black text-slate-950">Direct Workshop</p>
          <p className="mt-2 text-xs text-slate-600">
            Direct European dispatch across EU nations, UK, Poland, Italy, and Ukraine.
          </p>
        </div>
      </div>

      <h2 className="mt-12 font-display text-2xl font-black text-slate-950">
        All 50 US States Transit Directory
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {US_STATES.map((st) => (
          <Link
            key={st.code}
            href={`/shipping/${st.slug}/`}
            className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-teal-600"
          >
            <p className="text-sm font-bold text-slate-950">
              {st.name} ({st.code})
            </p>
            <p className="mt-0.5 text-xs font-semibold text-teal-700">{st.expressDays}</p>
            <p className="mt-0.5 text-[11px] text-slate-500">{st.carrier}</p>
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
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-black tracking-tight text-slate-950">
        {o.pageTitle}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{o.pageSubtitle}</p>
      <div className="mt-8">
        <Suspense fallback={<div className="h-96 rounded-3xl bg-slate-100" />}>
          <OrderWizard lang={lang} />
        </Suspense>
      </div>
    </div>
  );
}

export function WelcomePageView() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800">
        Evminov Owner QR Hub • Setup &amp; Community
      </span>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-slate-950">
        Welcome to Your Evminov Board — Mounting Guide &amp; Owner Feedback
      </h1>
      <p className="mt-3 text-base text-slate-600">
        Watch our 16-inch US wood-stud installation guide and starter routine below, then share your real experience with fellow back-care seekers.
      </p>
      <div className="mt-8">
        <WelcomeReviewHub />
      </div>
    </div>
  );
}

export function LegalPageView({
  type,
}: {
  type: "privacy" | "terms" | "shipping-returns" | "wellness-disclaimer";
}) {
  const map = {
    privacy: {
      title: "Privacy Policy (CCPA / CPRA & GDPR Compliant)",
      updated: "November 2026",
      sections: [
        {
          h: "1. Data We Collect",
          p: `When you reserve an Evminov board, request a custom angle guide, or chat with our concierge on evminovusa.com, we collect only the contact and shipping information you voluntarily provide (name, email, phone, delivery state/address, and optional notes). We never store raw payment card numbers on our servers.`,
        },
        {
          h: "2. Cookies & Consent Mode v2",
          p: "Essential cookies store your cookie preferences. Optional analytics (Google Analytics 4, Microsoft Clarity) and marketing tags only activate after you explicitly grant consent via our Cookie Preferences banner. You may change or revoke consent anytime from the footer.",
        },
        {
          h: "3. Your Rights (California CCPA/CPRA & EU GDPR)",
          p: `You have the right to request access, correction, or deletion of your personal records at any time by emailing ${SITE_CONFIG.supportEmail} or calling ${SITE_CONFIG.phoneDisplay}. We never sell personal data to third parties.`,
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      updated: "November 2026",
      sections: [
        {
          h: "1. Orders, Pricing & Availability",
          p: "All product prices on evminovusa.com are listed in US Dollars (USD) and clearly distinguish Direct Workshop Delivery from Glendale, California Express Fulfillment. Reservations submitted prior to payment completion are confirmed by email from orders@evminovusa.com.",
        },
        {
          h: "2. 10-Year Structural Frame Warranty",
          p: "Every authentic Evminov Carpathian pine or Ukrainian alder board carries a 10-year warranty against structural manufacturing defects under normal home or studio use within the specified user weight limit (210–220 lbs Standard/Folding/Alder; 330 lbs Wide Heavy-Duty).",
        },
        {
          h: "3. Intellectual Property",
          p: `Evminov Spine Systems hardware designs are protected by international patents (${SITE_CONFIG.compliance.patentsSummary}).`,
        },
      ],
    },
    "shipping-returns": {
      title: "Shipping, 60-Day Home Trial & Returns Policy",
      updated: "November 2026",
      sections: [
        {
          h: "1. US 50-State & International Delivery",
          p: `California Warehouse Express orders ship from ${SITE_CONFIG.address.full} via insured UPS/FedEx (1–2 business days West Coast, 2–3 days Central/South, 3–4 days East Coast, 4–5 days AK/HI). Direct Workshop Delivery ships to the US, Canada, EU, UK, and Ukraine in 10–16 business days.`,
        },
        {
          h: "2. 60-Day Risk-Free Home Trial",
          p: `You have 60 calendar days from delivery to evaluate your Evminov board at home. To initiate a return, email ${SITE_CONFIG.supportEmail} with your order reference for return authorization and instructions. Refunds are processed within 5–7 business days after inspection of returned merchandise.`,
        },
        {
          h: "3. Damaged in Transit Replacement",
          p: "Every shipment is 100% insured. If a crate arrives damaged, photograph the box and item within 48 hours and email support@evminovusa.com for a prompt replacement at no cost to you.",
        },
      ],
    },
    "wellness-disclaimer": {
      title: "General Wellness Equipment & Safety Disclaimer",
      updated: "November 2026",
      sections: [
        {
          h: "1. Product Classification (General Wellness / Exercise Equipment)",
          p: `Evminov Spine Systems boards sold in the United States are classified as ${SITE_CONFIG.compliance.classification}. Statements on this site have not been evaluated by the US Food and Drug Administration (FDA). Our equipment is intended to support general spine wellness, posture conditioning, flexibility, and athletic recovery — not to diagnose, treat, cure, or prevent any disease.`,
        },
        {
          h: "2. HSA / FSA Pre-Tax Reimbursement",
          p: SITE_CONFIG.compliance.hsaFsaNote,
        },
        {
          h: "3. Consult Your Physician & Contraindications",
          p: `Consult a licensed physician before starting inclined spine exercises if you have acute back trauma, recent surgery, osteoporosis, severe hypertension, pregnancy, or neurological red flags (foot drop, severe numbness, or bladder/bowel changes). Absolute contraindications include: ${CONTRAINDICATIONS.absolute.join("; ")}.`,
        },
      ],
    },
  };

  const doc = map[type];
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-3xl font-black text-slate-950 md:text-4xl">
        {doc.title}
      </h1>
      <p className="mt-2 text-xs font-semibold text-slate-500">
        Last Updated: {doc.updated} • {SITE_CONFIG.brandName} ({SITE_CONFIG.address.full})
      </p>
      <div className="mt-8 space-y-6">
        {doc.sections.map((sec) => (
          <section key={sec.h}>
            <h2 className="font-display text-xl font-bold text-slate-950">{sec.h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{sec.p}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
