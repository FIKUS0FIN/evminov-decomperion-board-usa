"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Truck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { ProductItem, PRODUCTS } from "@/data/products";
import {
  calculateHsaPrice,
  formatKlarnaBiWeekly,
  formatUSD,
} from "@/lib/physics";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { FaqJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";

export function ProductDetailView({
  product,
  lang,
}: {
  product: ProductItem;
  lang: Locale;
}) {
  const ui = getDictionary(lang).productUi;
  const { applyHsaSavings, toggleHsaSavings } = useHsaSavings();
  const [activeImg, setActiveImg] = useState(product.galleryImages[0]?.url || product.image);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
  const [shipping, setShipping] = useState<"express" | "direct">("express");

  const activePrice =
    shipping === "express" ? product.expressPriceUsd : product.directPriceUsd;
  const shownPrice = applyHsaSavings ? calculateHsaPrice(activePrice) : activePrice;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <ProductJsonLd product={product} lang={lang} />
      <FaqJsonLd faqs={product.faqs} />

      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Gallery */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <OptimizedImage
                src={activeImg}
                alt={product.localizedNames[lang] || product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {product.galleryImages.map((img) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => setActiveImg(img.url)}
                  aria-label={img.label}
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition ${
                    activeImg === img.url
                      ? "border-teal-700"
                      : "border-slate-200 opacity-75 hover:opacity-100"
                  }`}
                >
                  <OptimizedImage
                    src={img.url}
                    alt={img.label}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Panel */}
          <div className="lg:col-span-6">
            <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
              {product.badge}
            </span>
            <h1 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {product.localizedNames[lang] || product.name}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {product.subtitle}
            </p>

            {/* Price & HSA Toggle */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-3xl font-black text-slate-950">
                    {formatUSD(shownPrice)}
                    {applyHsaSavings && (
                      <span className="ml-2 text-base font-normal text-slate-400 line-through">
                        {formatUSD(activePrice)}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    {ui.klarnaLabel} {formatKlarnaBiWeekly(activePrice)} (0% APR est.)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleHsaSavings}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-bold ${
                    applyHsaSavings
                      ? "border-emerald-600 bg-emerald-100 text-emerald-900"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  {applyHsaSavings ? "HSA/FSA -30% Applied" : "Apply ~30% HSA/FSA"}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShipping("express")}
                  className={`rounded-xl border p-3 text-left text-xs transition ${
                    shipping === "express"
                      ? "border-teal-700 bg-white font-bold text-slate-950 shadow-sm"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  <span className="block">{ui.usExpressLabel}</span>
                  <span className="mt-0.5 block text-sm font-black text-teal-800">
                    {formatUSD(product.expressPriceUsd)}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setShipping("direct")}
                  className={`rounded-xl border p-3 text-left text-xs transition ${
                    shipping === "direct"
                      ? "border-teal-700 bg-white font-bold text-slate-950 shadow-sm"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  <span className="block">{ui.directPriceLabel}</span>
                  <span className="mt-0.5 block text-sm font-black text-slate-900">
                    {formatUSD(product.directPriceUsd)}
                  </span>
                </button>
              </div>
            </div>

            {/* Finish Selector */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {ui.finishes}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.finishes.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFinish(f)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                      selectedFinish === f
                        ? "bg-slate-950 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={buildPrefilledOrderUrl({
                  lang,
                  product: product.slug,
                  finish: selectedFinish,
                  shipping,
                  step: 2,
                })}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-teal-700 px-6 py-4 text-sm font-black text-white shadow-lg transition hover:bg-teal-800"
              >
                <span>{ui.orderModel}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              {product.slug !== "free-standing-stand" && (
                <Link
                  href={buildPrefilledOrderUrl({
                    lang,
                    product: product.slug,
                    finish: selectedFinish,
                    shipping,
                    stand: true,
                    step: 2,
                  })}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-4 text-xs font-bold text-slate-900 hover:bg-slate-50"
                >
                  + {ui.addStand}
                </Link>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-teal-700" />
                {ui.trialBadge}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-teal-700" />
                Ships to all 50 US states, Canada &amp; EU
              </span>
            </div>

            {/* What's Included */}
            <div className="mt-7 border-t border-slate-200 pt-6">
              <h2 className="font-display text-lg font-extrabold text-slate-950">
                {ui.whatsIncluded}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {product.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="font-display text-2xl font-black text-slate-950">
            {ui.specsTitle}
          </h2>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "SKU", val: product.sku },
              { label: "Construction", val: product.construction },
              { label: ui.weightLimit, val: `Up to ${product.weightLimitLbs} lbs` },
              { label: ui.heightLimit, val: product.heightLimitLabel },
              { label: ui.material, val: product.material },
              { label: "Board Weight", val: product.boardWeightLabel },
              { label: ui.inclineRange, val: product.inclineRange },
              { label: ui.storageProfile, val: product.foldedDepth },
              { label: "Mounting", val: product.mobility },
            ].map((spec) => (
              <div key={spec.label} className="rounded-2xl bg-white p-4 shadow-sm">
                <dt className="text-xs font-bold uppercase text-slate-500">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  {spec.val}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Product FAQs */}
        {product.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-black text-slate-950">
              Model Questions &amp; Answers
            </h2>
            <div className="mt-4 space-y-3">
              {product.faqs.map((faq) => (
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

        {/* Related Models */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <h2 className="font-display text-2xl font-black text-slate-950">
            Compare Other Evminov Models
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={getLocalizedHref(`/products/${item.slug}/`, lang)}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-600"
              >
                <p className="text-xs font-bold text-teal-700">{item.badge}</p>
                <p className="mt-1 font-display text-base font-bold text-slate-950">
                  {item.localizedNames[lang] || item.name}
                </p>
                <p className="mt-2 text-sm font-black text-slate-900">
                  From {formatUSD(item.directPriceUsd)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
