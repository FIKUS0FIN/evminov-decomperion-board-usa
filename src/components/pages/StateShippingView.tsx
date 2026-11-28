import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Truck } from "lucide-react";
import { UsStateShippingData, US_STATES } from "@/data/us-states";
import { CaProvinceShippingData, CA_PROVINCES } from "@/data/ca-provinces";
import { IS_CANADA } from "@/lib/region-config";
import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildPrefilledOrderUrl } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export function StateShippingView({
  state,
}: {
  state: UsStateShippingData | CaProvinceShippingData;
}) {
  const stateFaqs = IS_CANADA
    ? [
        {
          q: `How fast does an Evminov Spine Board ship to ${state.name}, Canada?`,
          a: `All orders to ${state.name} (${state.majorCities.join(", ")}) currently dispatch directly and arrive in ~2 weeks via ${state.carrier} with full tracking and transit insurance. Faster local express delivery resumes in the New Year.`,
        },
        {
          q: `Can ${state.name} residents claim an Evminov Board through Canadian Extended Health Benefits or HSA?`,
          a: `Many Canadian buyers claim Evminov Spine Conditioning equipment through Extended Health Benefits, a Health Spending Account (HSA), or the CRA Medical Expense Tax Credit with a doctor's prescription or note. We email an itemized CAD receipt immediately.`,
        },
        {
          q: `How is the Evminov Board set up in ${state.name} homes and condos?`,
          a: `${state.housingNote}`,
        },
      ]
    : [
        {
          q: `How fast does an Evminov Spine Board ship to ${state.name}?`,
          a: `Orders to ${state.name} (${state.majorCities.join(", ")}) via ${state.carrier} currently deliver in ~2 weeks via direct dispatch, with faster local express delivery (${state.expressDays}) resuming in the New Year.`,
        },
        {
          q: `Can ${state.name} residents use pre-tax HSA or FSA funds for an Evminov board?`,
          a: `Yes. Many ${state.name} buyers use pre-tax HSA or FSA dollars (~25%–35% tax savings) with a Letter of Medical Necessity from their healthcare provider. We provide an itemized wellness equipment invoice immediately after ordering.`,
        },
        {
          q: `How is the Evminov board mounted in ${state.name} homes and apartments?`,
          a: `${state.housingNote} Every 2-Piece Folding board arrives complete with its sturdy Support Stand.`,
        },
      ];

  const allLocations = IS_CANADA ? CA_PROVINCES : US_STATES;
  const siblingStates = allLocations.filter(
    (s) => s.region === state.region && s.slug !== state.slug
  );

  return (
    <>
      <FaqJsonLd faqs={stateFaqs} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
          <MapPin className="h-3.5 w-3.5" />
          <span>
            {state.name} ({state.code}) • {state.region} Delivery Hub
          </span>
        </span>

        <h1 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
          Evminov Spine Decompression Board Delivery in {state.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Direct insured shipping from our Glendale, California operations hub to{" "}
          <strong>{state.majorCities.join(", ")}</strong> and every residential ZIP code
          across {state.name} in <strong>{state.expressDays}</strong> via {state.carrier}.
        </p>

        {/* Key Logistics Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Truck className="h-6 w-6 text-teal-700" />
            <h2 className="mt-3 font-display text-lg font-extrabold text-slate-950">
              {state.expressDays}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              California Warehouse Express via {state.carrier} — 100% insured reinforced crate.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <h2 className="mt-3 font-display text-lg font-extrabold text-slate-950">
              {IS_CANADA ? "Extended Health & HSA Ready" : "HSA / FSA Ready"}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {IS_CANADA
                ? `Itemized CAD wellness equipment invoice emailed to ${state.name} buyers for benefits or CRA claims.`
                : `Itemized equipment invoice & LMN template emailed to ${state.name} buyers.`}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-amber-600" />
            <h2 className="mt-3 font-display text-lg font-extrabold text-slate-950">
              Home &amp; Apartment Ready
            </h2>
            <p className="mt-1 text-sm text-slate-600">{state.housingNote}</p>
          </div>
        </div>

        {/* Popular Models for State */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-black text-slate-950">
            Available Evminov Models Shipping to {state.name}
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((p) => (
              <div
                key={p.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-[11px] font-bold uppercase text-teal-700">{p.badge}</p>
                <h3 className="mt-1 font-display text-base font-extrabold text-slate-950">
                  <Link href={`/products/${p.slug}/`} className="hover:text-teal-700">
                    {p.name}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-xs text-slate-600">{p.keyFeature}</p>
                <p className="mt-3 text-sm font-black text-slate-950">
                  {formatUSD(p.directPriceUsd)} Direct •{" "}
                  <span className="text-teal-800">{formatUSD(p.expressPriceUsd)} Express</span>
                </p>
                <Link
                  href={buildPrefilledOrderUrl({
                    lang: "en",
                    product: p.slug,
                    shipping: "express",
                    state: `${state.name} (${state.code})`,
                    step: 2,
                  })}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-700 py-2.5 text-xs font-bold text-white hover:bg-teal-800"
                >
                  <span>Order to {state.code}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* State FAQs */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-black text-slate-950">
            {state.name} Shipping &amp; Setup FAQ
          </h2>
          <div className="mt-4 space-y-3">
            {stateFaqs.map((f) => (
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

        {/* Regional Sibling States Directory (Smista 66-Suburb Internal Link Graph Pattern) */}
        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Nearby {state.region} States We Ship To
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {siblingStates.map((s) => (
              <Link
                key={s.code}
                href={`/shipping/${s.slug}/`}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:border-teal-600"
              >
                {s.name} ({s.expressDays})
              </Link>
            ))}
            <Link
              href="/shipping/"
              className="rounded-lg bg-slate-950 px-3 py-1.5 text-xs font-bold text-white"
            >
              {IS_CANADA ? "All 13 Canadian Provinces →" : "All 50 US States →"}
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Direct California Support: {SITE_CONFIG.phoneDisplay} • {SITE_CONFIG.supportEmail}
          </p>
        </section>
      </div>
    </>
  );
}
