"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Truck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import {
  getProductPrice,
  OFFICIAL_ACCESSORIES,
  ProductItem,
  PRODUCTS,
} from "@/data/products";
import {
  calculateHsaPrice,
  formatKlarnaBiWeekly,
  formatUSD,
} from "@/lib/physics";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { FaqJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import {
  ACCESSORIES_SECTION_COPY,
  getLocalizedFinish,
  getLocalizedProduct,
  PRODUCT_DETAIL_COPY,
} from "@/i18n/locales/catalog";

export function ProductDetailView({
  product,
  lang,
}: {
  product: ProductItem;
  lang: Locale;
}) {
  const ui = getDictionary(lang).productUi;
  const pd = PRODUCT_DETAIL_COPY[lang];
  const accCopy = ACCESSORIES_SECTION_COPY[lang];
  const lp = getLocalizedProduct(product, lang);
  const { applyHsaSavings, toggleHsaSavings } = useHsaSavings();
  const [activeImg, setActiveImg] = useState(product.galleryImages[0]?.url || product.image);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
  const [boardWidth, setBoardWidth] = useState<"standard" | "wide">("standard");
  const [shipping, setShipping] = useState<"express" | "direct">("express");

  const activePrice = getProductPrice(product, boardWidth, shipping);
  const wideDelta = Math.max(
    0,
    getProductPrice(product, "wide", shipping) -
      getProductPrice(product, "standard", shipping)
  );
  const shownPrice = applyHsaSavings ? calculateHsaPrice(activePrice) : activePrice;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <ProductJsonLd product={product} lang={lang} />
      <FaqJsonLd faqs={lp.faqs} />

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Gallery */}
          <div className="min-w-0 lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-[#F4F7F9] shadow-sm">
              <OptimizedImage
                src={activeImg}
                alt={lp.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-3"
              />
            </div>
            <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-0.5 sm:grid sm:grid-cols-6 sm:overflow-visible">
              {lp.galleryImages.map((img) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => setActiveImg(img.url)}
                  aria-label={img.label}
                  className={`relative aspect-[4/3] w-[68px] shrink-0 overflow-hidden rounded-xl border-2 bg-[#F4F7F9] transition sm:w-auto ${
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
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Panel */}
          <div className="min-w-0 lg:col-span-6">
            <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
              {lp.badge}
            </span>
            <h1 className="mt-3 break-words font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              {lp.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {lp.subtitle}
            </p>

            {/* Price & HSA Toggle */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
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
                    {ui.klarnaLabel} {formatKlarnaBiWeekly(activePrice)} {pd.klarnaAprSuffix}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleHsaSavings}
                  className={`min-h-[40px] rounded-xl border px-3 py-1.5 text-xs font-bold ${
                    applyHsaSavings
                      ? "border-emerald-600 bg-emerald-100 text-emerald-900"
                      : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  {applyHsaSavings ? pd.hsaAppliedBtn : pd.hsaApplyBtn}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setShipping("express")}
                  className={`min-h-[56px] rounded-xl border p-3 text-left text-xs transition ${
                    shipping === "express"
                      ? "border-teal-700 bg-white font-bold text-slate-950 shadow-sm"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  <span className="block">{ui.usExpressLabel}</span>
                  <span className="mt-0.5 block text-sm font-black text-teal-800">
                    {formatUSD(getProductPrice(product, boardWidth, "express"))}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setShipping("direct")}
                  className={`min-h-[56px] rounded-xl border p-3 text-left text-xs transition ${
                    shipping === "direct"
                      ? "border-teal-700 bg-white font-bold text-slate-950 shadow-sm"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  <span className="block">{ui.directPriceLabel}</span>
                  <span className="mt-0.5 block text-sm font-black text-slate-900">
                    {formatUSD(getProductPrice(product, boardWidth, "direct"))}
                  </span>
                </button>
              </div>
            </div>

            {/* Width Selector: Standard 26 cm vs Reinforced Wide 30 cm */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                26 cm / 30 cm
              </p>
              <div className="mt-2 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setBoardWidth("standard")}
                  className={`min-h-[56px] rounded-xl border px-3 py-2.5 text-left text-xs font-bold transition ${
                    boardWidth === "standard"
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="block">26 cm Standard</span>
                  <span className="mt-0.5 block text-[11px] font-normal opacity-80">
                    ≤ 100 kg (220 lbs)
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setBoardWidth("wide")}
                  className={`min-h-[56px] rounded-xl border px-3 py-2.5 text-left text-xs font-bold transition ${
                    boardWidth === "wide"
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="block">
                    30 cm Wide (+{formatUSD(wideDelta)})
                  </span>
                  <span className="mt-0.5 block text-[11px] font-normal opacity-80">
                    &gt; 100 kg (up to 330 lbs)
                  </span>
                </button>
              </div>
            </div>

            {/* Finish Selector */}
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {ui.finishes}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.finishes.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFinish(f)}
                    className={`min-h-[42px] rounded-xl px-4 py-2 text-xs font-bold transition ${
                      selectedFinish === f
                        ? "bg-slate-950 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {getLocalizedFinish(f, lang)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${buildPrefilledOrderUrl({
                  lang,
                  product: product.slug,
                  finish: selectedFinish,
                  shipping,
                  step: 1,
                }).replace("#order-form", "")}&width=${boardWidth}#order-form`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-teal-700 px-6 py-4 text-sm font-black text-white shadow-lg transition hover:bg-teal-800"
              >
                <span>{ui.orderModel}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`${buildPrefilledOrderUrl({
                  lang,
                  product: product.slug,
                  finish: selectedFinish,
                  shipping,
                  stand: true,
                  step: 1,
                }).replace("#order-form", "")}&width=${boardWidth}#order-form`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-4 text-xs font-bold text-slate-900 hover:bg-slate-50"
              >
                + {ui.addStand}
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-teal-700" />
                {ui.trialBadge}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-teal-700" />
                {pd.shipsEverywhere}
              </span>
            </div>

            {/* What's Included */}
            <div className="mt-7 border-t border-slate-200 pt-6">
              <h2 className="font-display text-lg font-extrabold text-slate-950">
                {ui.whatsIncluded}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {lp.includes.map((inc) => (
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
              { label: pd.skuLabel, val: product.sku },
              { label: pd.constructionLabel, val: lp.construction },
              { label: ui.weightLimit, val: lp.weightLimitLabel },
              { label: ui.heightLimit, val: lp.heightLimitLabel },
              { label: ui.material, val: lp.material },
              { label: pd.boardWeightLabel, val: lp.boardWeightLabel },
              { label: ui.inclineRange, val: lp.inclineRange },
              { label: ui.storageProfile, val: lp.foldedDepth },
              { label: pd.mountingLabel, val: lp.mobility },
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

        {/* Official Accessories Add-Ons */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-black text-slate-950">
            {accCopy.title}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{accCopy.shippingBanner}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OFFICIAL_ACCESSORIES.map((acc) => (
              <div
                key={acc.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-xs"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700">
                  {acc.tag[lang]}
                </span>
                <h3 className="mt-1 font-display text-sm font-extrabold text-slate-950">
                  {acc.name[lang]}
                </h3>
                <p className="mt-1 text-xs text-slate-600">{acc.spec[lang]}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-base font-black text-slate-950">
                    {formatUSD(acc.priceUsd)}
                  </span>
                  <Link
                    href={`${getLocalizedHref("/order/", lang)}?product=${product.slug}&width=${boardWidth}&addon=${acc.id}&step=1#order-form`}
                    className="rounded-lg bg-slate-950 px-2.5 py-1.5 text-[11px] font-bold text-white hover:bg-teal-700"
                  >
                    {accCopy.addToOrder} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product FAQs */}
        {lp.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-black text-slate-950">
              {pd.faqsHeading}
            </h2>
            <div className="mt-4 space-y-3">
              {lp.faqs.map((faq) => (
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
            {pd.relatedHeading}
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {related.map((item) => {
              const rl = getLocalizedProduct(item, lang);
              return (
              <Link
                key={item.slug}
                href={getLocalizedHref(`/products/${item.slug}/`, lang)}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-600"
              >
                <p className="text-xs font-bold text-teal-700">{rl.badge}</p>
                <p className="mt-1 font-display text-base font-bold text-slate-950">
                  {rl.name}
                </p>
                <p className="mt-2 text-sm font-black text-slate-900">
                  {pd.fromPrefix} {formatUSD(item.directPriceUsd)}
                </p>
              </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
