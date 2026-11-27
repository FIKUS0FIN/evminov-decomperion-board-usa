"use client";

import Link from "next/link";
import { ArrowRight, Check, Gift, ShieldCheck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { PRODUCTS, ProductItem } from "@/data/products";
import {
  calculateHsaPrice,
  formatKlarnaBiWeekly,
  formatUSD,
} from "@/lib/physics";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { sendGTMEvent } from "@/lib/gtm";

const FINISH_SWATCH_COLOR: Record<string, string> = {
  "Light Natural Pine": "bg-[#E6C79C] border-[#C59F6C]",
  "Dark Walnut Pine": "bg-[#5C3A21] border-[#3E2614]",
  "Gym Stealth Black": "bg-slate-900 border-slate-700",
  "Natural Warm Amber Alder": "bg-[#C8844B] border-[#9A5E2F]",
  "Royal Cognac Alder": "bg-[#8B4513] border-[#5E2D0C]",
  "Natural Beech": "bg-[#DFBE93] border-[#B69469]",
  "Matching Pine Tone": "bg-[#D9B382] border-[#B08A5A]",
};

export function ProductCard({
  product,
  lang,
}: {
  product: ProductItem;
  lang: Locale;
}) {
  const ui = getDictionary(lang).productUi;
  const { applyHsaSavings } = useHsaSavings();

  const directShown = applyHsaSavings
    ? calculateHsaPrice(product.directPriceUsd)
    : product.directPriceUsd;
  const expressShown = applyHsaSavings
    ? calculateHsaPrice(product.expressPriceUsd)
    : product.expressPriceUsd;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full bg-slate-100">
        <OptimizedImage
          src={product.image}
          alt={product.localizedNames[lang] || product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur">
          {product.badge}
        </span>
        {product.popular && (
          <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-black uppercase text-slate-950 shadow">
            Most Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-extrabold text-slate-950">
          <Link
            href={getLocalizedHref(`/products/${product.slug}/`, lang)}
            className="hover:text-teal-700"
          >
            {product.localizedNames[lang] || product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {product.subtitle}
        </p>

        {/* Finish Swatches */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {product.finishes.map((finish) => (
            <span
              key={finish}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full border ${
                  FINISH_SWATCH_COLOR[finish] || "bg-amber-200 border-amber-400"
                }`}
                aria-hidden="true"
              />
              {finish}
            </span>
          ))}
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-3 text-xs">
          <div>
            <dt className="text-slate-500">{ui.weightLimit}</dt>
            <dd className="font-bold text-slate-900">Up to {product.weightLimitLbs} lbs</dd>
          </div>
          <div>
            <dt className="text-slate-500">{ui.heightLimit}</dt>
            <dd className="font-bold text-slate-900">{product.heightLimitLabel}</dd>
          </div>
        </dl>

        <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
          {product.includes.slice(0, 3).map((inc) => (
            <li key={inc} className="flex items-start gap-2">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-700" />
              <span>{inc}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-medium text-slate-600">
                {applyHsaSavings ? ui.hsaEstimatedLabel : ui.directPriceLabel}
              </span>
              <span className="text-2xl font-black text-slate-950">
                {formatUSD(directShown)}
                {applyHsaSavings && (
                  <span className="ml-1.5 text-xs font-normal text-slate-400 line-through">
                    {formatUSD(product.directPriceUsd)}
                  </span>
                )}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-xs text-slate-600">
              <span>{ui.usExpressLabel}</span>
              <strong className="text-teal-800">{formatUSD(expressShown)}</strong>
            </div>
            <p className="mt-1.5 text-[11px] text-slate-500">
              {ui.klarnaLabel} {formatKlarnaBiWeekly(product.directPriceUsd)} (0% APR est.)
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link
              href={getLocalizedHref(`/products/${product.slug}/`, lang)}
              onClick={() => sendGTMEvent("view_item", { product_slug: product.slug })}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-50"
            >
              {ui.viewDetails}
            </Link>
            <Link
              href={buildPrefilledOrderUrl({
                lang,
                product: product.slug,
                step: 2,
              })}
              onClick={() =>
                sendGTMEvent("begin_checkout", { product_slug: product.slug })
              }
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-teal-700 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-teal-800"
            >
              <span>{ui.orderModel}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

const INCLUDED_BOX_ITEMS = [
  {
    src: "/images/products/glisson-loop-studio.jpg",
    alt: "Cotton-padded Glisson Loop neck traction harness included free with Evminov board",
    tag: "Included Free",
    title: "Glisson Cervical Loop",
    desc: "Soft padded neck unloading sling for gentle 8°–12° cervical relief and tech-neck reset.",
  },
  {
    src: "/images/products/board-studio-carriage.jpg",
    alt: "Aircraft-grade alloy gliding carriage mechanism with safety pin lock",
    tag: "Precision Hardware",
    title: "Smooth-Glide Alloy Carriage",
    desc: "Moves cleanly along the timber rail and locks solidly in 5 seconds for users from 4'0\" to 6'9\".",
  },
  {
    src: "/images/products/carriage-foot-sleeves-studio.jpg",
    alt: "Soft padded foot sleeves attachment for reverse lumbar decompression on Evminov carriage",
    tag: "Padded Comfort",
    title: "Soft Foot & Grip Sleeves",
    desc: "Cushioned contact sleeves support comfortable athletic core and gentle reverse traction routines.",
  },
  {
    src: "/images/accessories/glisson-neck-loop-detailed.jpg",
    alt: "Detailed stitching and adjustment straps of the Evminov cervical traction loop",
    tag: "Universal Fit",
    title: "Adjustable Straps & Anchor Kit",
    desc: "Heavy-duty 16\" US wood stud bracket, braided anchor cable, and illustrated setup guide included.",
  },
];

export function ProductCatalogSection({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const { applyHsaSavings, toggleHsaSavings } = useHsaSavings();

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            Handcrafted in Carpathian Pine &amp; Select Ukrainian Alder
          </span>
          <h2 className="mt-1 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {dict.sections.catalogTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {dict.sections.catalogSubtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={toggleHsaSavings}
          aria-pressed={applyHsaSavings}
          className={`inline-flex items-center gap-2 self-start rounded-2xl border px-4 py-2.5 text-xs font-bold transition md:self-auto ${
            applyHsaSavings
              ? "border-emerald-600 bg-emerald-50 text-emerald-900"
              : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
          }`}
        >
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>
            {applyHsaSavings
              ? dict.nav.hsaToggleActive
              : dict.nav.hsaToggleLabel}
          </span>
        </button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} lang={lang} />
        ))}
      </div>

      {/* Restored: "How to Choose Your Evminov Board: Key Differences at a Glance" Matrix */}
      <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
              Side-by-Side Spec Comparison
            </span>
            <h3 className="mt-1 font-display text-2xl font-black text-slate-950">
              How to Choose Your Evminov Board: Key Differences at a Glance
            </h3>
          </div>
          <a
            href="#calculator"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline"
          >
            Not sure? Run the 30-second sizing calculator <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[720px] border-collapse text-left text-xs sm:text-sm">
            <thead className="bg-[#0B1F3A] text-white">
              <tr>
                <th className="p-3.5 font-bold">Model</th>
                <th className="p-3.5 font-bold">Construction</th>
                <th className="p-3.5 font-bold">Max Weight / Height</th>
                <th className="p-3.5 font-bold">Board Weight</th>
                <th className="p-3.5 font-bold">Best For</th>
                <th className="p-3.5 font-bold text-emerald-300">Direct / CA Express</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {PRODUCTS.map((p) => (
                <tr key={p.slug} className="hover:bg-slate-50/70">
                  <td className="p-3.5 font-extrabold text-slate-950">
                    <Link
                      href={getLocalizedHref(`/products/${p.slug}/`, lang)}
                      className="hover:text-teal-700 hover:underline"
                    >
                      {p.localizedNames[lang] || p.name}
                    </Link>
                  </td>
                  <td className="p-3.5 text-slate-700">{p.construction}</td>
                  <td className="p-3.5 font-semibold text-slate-900">
                    {p.weightLimitLbs} lbs • {p.heightLimitLabel}
                  </td>
                  <td className="p-3.5 text-slate-600">{p.boardWeightLabel}</td>
                  <td className="p-3.5 text-slate-600">{p.mobility}</td>
                  <td className="p-3.5 font-black text-teal-800 whitespace-nowrap">
                    {formatUSD(applyHsaSavings ? calculateHsaPrice(p.directPriceUsd) : p.directPriceUsd)}
                    {" / "}
                    {formatUSD(applyHsaSavings ? calculateHsaPrice(p.expressPriceUsd) : p.expressPriceUsd)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Restored: What's Included Free & Hardware Close-Up Strip */}
      <div className="mt-10 rounded-3xl border border-emerald-200/80 bg-emerald-50/40 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Gift className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-display text-lg font-black text-slate-950">
                Complete Box Contents &amp; Hardware Details
              </h3>
              <p className="text-xs text-slate-600">
                Every Evminov board arrives ready to mount with the Glisson cervical loop, alloy carriage, and 16&quot; US stud hardware.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED_BOX_ITEMS.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-slate-950/85 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-display text-sm font-extrabold text-slate-950">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
