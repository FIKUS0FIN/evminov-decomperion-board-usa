"use client";

import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
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

export function ProductCatalogSection({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const { applyHsaSavings, toggleHsaSavings } = useHsaSavings();

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
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
    </section>
  );
}
