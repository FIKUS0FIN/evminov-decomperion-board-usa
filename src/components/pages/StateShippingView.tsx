import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Truck } from "lucide-react";
import { UsStateShippingData, US_STATES } from "@/data/us-states";
import { CaProvinceShippingData, CA_PROVINCES } from "@/data/ca-provinces";
import { IS_CANADA } from "@/lib/region-config";
import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildPrefilledOrderUrl, getCanonicalUrl } from "@/lib/url";
import { formatUSD } from "@/lib/physics";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export function StateShippingView({
  state,
}: {
  state: UsStateShippingData | CaProvinceShippingData;
}) {
  const standPriceLabel = formatUSD(275);
  const stateFaqs = IS_CANADA
    ? [
        {
          q: `How fast does an Evminov Spine Board ship to ${state.name}, Canada?`,
          a: `All orders to ${state.name} (${state.majorCities.join(", ")}) currently dispatch directly via ${state.carrier} and arrive in ~2 weeks with full tracking and transit insurance. Faster local express delivery (${state.expressDays}) resumes in the New Year.`,
        },
        {
          q: `Can ${state.name} residents claim an Evminov Board through Canadian Extended Health Benefits or HSA?`,
          a: `Many Canadian buyers claim Evminov Spine Conditioning equipment (HTS 9506.91.0030) through Extended Health Benefits, a Health Spending Account (HSA), or the CRA Medical Expense Tax Credit with a doctor's prescription or note. We email an itemized CAD receipt immediately.`,
        },
        {
          q: `How is the Evminov Board mounted in ${state.name} homes and apartments?`,
          a: `${state.housingNote} Every 2-Piece and 3-Piece Folding Evminov Board includes a free 400+ lb rated steel wall-mounting kit and Glisson Cervical Loop; renters who prefer zero wall drilling can add the optional 4-Piece Demountable Ladder Stand (max 123 cm, +${standPriceLabel}).`,
        },
      ]
    : [
        {
          q: `How fast does an Evminov Spine Board ship to ${state.name}?`,
          a: `Orders to ${state.name} (${state.majorCities.join(", ")}) via ${state.carrier} currently deliver in ~2 weeks via direct tracked dispatch, with faster local express delivery (${state.expressDays}) resuming in the New Year.`,
        },
        {
          q: `Can ${state.name} residents use pre-tax HSA or FSA funds for an Evminov board?`,
          a: `Yes. Many ${state.name} buyers use pre-tax HSA or FSA dollars (~25%–35% savings) with a Letter of Medical Necessity (LMN) from their healthcare provider and plan approval. We provide an itemized wellness equipment invoice (HTS 9506.91.0030) immediately after ordering.`,
        },
        {
          q: `How is the Evminov board mounted in ${state.name} homes and apartments?`,
          a: `${state.housingNote} Every 2-Piece and 3-Piece Folding Evminov Board includes a free 400+ lb rated steel wall-mounting kit and Glisson Cervical Loop; renters who prefer zero wall drilling can add the optional 4-Piece Demountable Ladder Stand (max 123 cm, +${standPriceLabel}).`,
        },
      ];

  const allLocations = IS_CANADA ? CA_PROVINCES : US_STATES;
  const siblingStates = allLocations.filter(
    (s) => s.region === state.region && s.slug !== state.slug
  );
  const shippingHubLabel = IS_CANADA ? "Canada Shipping" : "US & Canada Shipping";

  return (
    <>
      <FaqJsonLd faqs={stateFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: getCanonicalUrl("/", "en") },
          { name: shippingHubLabel, url: getCanonicalUrl("/shipping/", "en") },
          { name: state.name, url: getCanonicalUrl(`/shipping/${state.slug}/`, "en") },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500"
        >
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/shipping/" className="hover:text-teal-700">
            {shippingHubLabel}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-800">{state.name}</span>
        </nav>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
          <MapPin className="h-3.5 w-3.5" />
          <span>
            {state.name} ({state.code}) • {state.region} Delivery Corridor
          </span>
        </span>

        <h1 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
          Evminov Spine Decompression Board Delivery in {state.name}
          {IS_CANADA ? ", Canada (CAD)" : ""}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Direct tracked courier shipping to <strong>{state.majorCities.join(", ")}</strong> and every
          residential address in {state.name} in <strong>~2 weeks</strong> via {state.carrier}, with
          faster local express fulfillment (<strong>{state.expressDays}</strong>) resuming in the New
          Year.
        </p>

        {/* Key Logistics Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Truck className="h-6 w-6 text-teal-700" />
            <h2 className="mt-3 font-display text-lg font-extrabold text-slate-950">
              ~2 Weeks Direct Tracked Dispatch
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {IS_CANADA
                ? `Insured CAD air courier via ${state.carrier} across ${state.name} • Local express (${state.expressDays}) resumes in the New Year.`
                : `Insured courier via ${state.carrier} across ${state.name} • Local warehouse express (${state.expressDays}) resumes in the New Year.`}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <h2 className="mt-3 font-display text-lg font-extrabold text-slate-950">
              {IS_CANADA ? "Extended Health & HSA Ready" : "HSA / FSA Pre-Tax Eligible"}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {IS_CANADA
                ? `Itemized CAD wellness equipment receipt emailed to ${state.name} buyers for benefits or CRA claims.`
                : `Itemized USD receipt & printable LMN checklist for ${state.name} buyers (~25%–35% pre-tax savings with provider LMN).`}
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

        {/* Quick-Answer Regional Logistics & Setup Summary Table */}
        <section
          id="regional-geo-summary"
          className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-slate-900">
              {state.name} Delivery, Reimbursement &amp; Setup Quick Summary
            </h2>
          </div>
          <dl className="divide-y divide-slate-100 text-sm">
            {[
              {
                label: "Current Dispatch Window",
                value: `~2 weeks tracked courier delivery to ${state.majorCities.join(", ")} & all ${state.name} postal codes`,
              },
              {
                label: "Post-New-Year Express Window",
                value: `${state.expressDays} via ${state.carrier}`,
              },
              {
                label: "Pre-Tax Reimbursement",
                value: IS_CANADA
                  ? "Canadian Extended Health Benefits / HSA / CRA itemized CAD receipt"
                  : "HSA / FSA pre-tax eligible (~25%–35% savings) with healthcare provider LMN",
              },
              {
                label: "Available Widths",
                value:
                  "Standard 26 cm (≤100 kg / 220 lbs) & Reinforced Wide 30 cm (>100 kg / up to 330 lbs)",
              },
              {
                label: "Home Mounting Options",
                value: `Free 16" wood-stud wall bracket included • Optional 4-Piece No-Drill Ladder Stand (+${standPriceLabel})`,
              },
            ].map((row) => (
              <div
                key={row.label}
                className="grid gap-1 px-5 py-3 sm:grid-cols-3 sm:items-center sm:gap-4"
              >
                <dt className="font-bold text-slate-700">{row.label}</dt>
                <dd className="text-slate-600 sm:col-span-2">{row.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Popular Models for State */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-black text-slate-950">
            Available Evminov Models Shipping to {state.name}
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
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
                    shipping: "direct",
                    state: `${state.name} (${state.code})`,
                    step: 2,
                  })}
                  className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-teal-700 py-2.5 text-xs font-bold text-white hover:bg-teal-800"
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

        {/* Regional Sibling States/Provinces Directory */}
        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {IS_CANADA
              ? "Other Canadian Provinces & Territories We Ship To"
              : `Nearby ${state.region} States We Ship To`}
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
            {IS_CANADA ? "Direct Canada Support:" : "Direct US Support:"} {SITE_CONFIG.phoneDisplay} •{" "}
            {SITE_CONFIG.supportEmail}
          </p>
        </section>
      </div>
    </>
  );
}
