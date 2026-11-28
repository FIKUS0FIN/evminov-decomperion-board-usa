"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Gift,
  ShieldCheck,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { OFFICIAL_ACCESSORIES, PRODUCTS, ProductItem } from "@/data/products";
import {
  calculateHsaPrice,
  formatKlarnaBiWeekly,
  formatUSD,
} from "@/lib/physics";
import { buildPrefilledOrderUrl, getLocalizedHref } from "@/lib/url";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { sendGTMEvent } from "@/lib/gtm";
import {
  ACCESSORIES_SECTION_COPY,
  CATALOG_SECTION_COPY,
  getLocalizedFinish,
  getLocalizedProduct,
} from "@/i18n/locales/catalog";

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
  const cc = CATALOG_SECTION_COPY[lang];
  const lp = getLocalizedProduct(product, lang);
  const { applyHsaSavings } = useHsaSavings();

  const gallery =
    product.galleryImages.length > 0
      ? product.galleryImages
      : [{ url: product.image, label: lp.name }];
  const [imgIdx, setImgIdx] = useState(0);
  const activeSlide = gallery[imgIdx] ?? gallery[0];

  const prevImg = () =>
    setImgIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  const nextImg = () =>
    setImgIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  const directShown = applyHsaSavings
    ? calculateHsaPrice(product.directPriceUsd)
    : product.directPriceUsd;
  const expressShown = applyHsaSavings
    ? calculateHsaPrice(product.expressPriceUsd)
    : product.expressPriceUsd;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
      {/* Interactive Product Mini-Gallery */}
      <div className="bg-[#F4F7F9]">
        <div className="group relative aspect-[4/3] w-full overflow-hidden">
          <OptimizedImage
            src={activeSlide.url}
            alt={`${lp.name} — ${activeSlide.label}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
            className="object-contain p-2 transition-transform duration-300"
          />

          <span className="absolute left-3 top-3 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur">
            {lp.badge}
          </span>
          {product.popular && (
            <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-black uppercase text-slate-950 shadow">
              {cc.mostPopular}
            </span>
          )}

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImg}
                aria-label="Previous photo"
                className="absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:bg-slate-950 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextImg}
                aria-label="Next photo"
                className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:bg-slate-950 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                  {activeSlide.label}
                </span>
                <span className="rounded-full bg-slate-950/75 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-sm">
                  {imgIdx + 1} / {gallery.length}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Clickable Thumbnail Strip */}
        {gallery.length > 1 && (
          <div className="grid grid-cols-6 gap-1.5 border-t border-slate-200/70 bg-white/80 px-3 py-2">
            {gallery.map((item, idx) => {
              const isSelected = idx === imgIdx;
              return (
                <button
                  key={`${item.url}-${idx}`}
                  type="button"
                  onClick={() => setImgIdx(idx)}
                  aria-label={item.label}
                  aria-pressed={isSelected}
                  className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border bg-[#F4F7F9] transition ${
                    isSelected
                      ? "border-teal-600 ring-2 ring-teal-500/30"
                      : "border-slate-200 opacity-75 hover:opacity-100"
                  }`}
                >
                  <OptimizedImage
                    src={item.url}
                    alt={item.label}
                    fill
                    sizes="80px"
                    className="object-contain p-0.5"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-extrabold text-slate-950">
          <Link
            href={getLocalizedHref(`/products/${product.slug}/`, lang)}
            className="hover:text-teal-700"
          >
            {lp.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {lp.subtitle}
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
              {getLocalizedFinish(finish, lang)}
            </span>
          ))}
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-3 text-xs">
          <div>
            <dt className="text-slate-500">{ui.weightLimit}</dt>
            <dd className="font-bold text-slate-900">{lp.weightLimitLabel}</dd>
          </div>
          <div>
            <dt className="text-slate-500">{ui.heightLimit}</dt>
            <dd className="font-bold text-slate-900">{lp.heightLimitLabel}</dd>
          </div>
        </dl>

        <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
          {lp.includes.slice(0, 3).map((inc) => (
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
            <div className="mt-1.5 flex items-center justify-between border-t border-slate-200/70 pt-1.5 text-[11px] text-slate-600">
              <span>30 cm Wide (&gt;100 kg):</span>
              <strong className="text-slate-900">
                {formatUSD(
                  applyHsaSavings
                    ? calculateHsaPrice(product.wideDirectPriceUsd)
                    : product.wideDirectPriceUsd
                )}{" "}
                /{" "}
                {formatUSD(
                  applyHsaSavings
                    ? calculateHsaPrice(product.wideExpressPriceUsd)
                    : product.wideExpressPriceUsd
                )}
              </strong>
            </div>
            <p className="mt-1.5 text-[11px] text-slate-500">
              {ui.klarnaLabel} {formatKlarnaBiWeekly(product.directPriceUsd)} {cc.klarnaAprSuffix}
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
  const cc = CATALOG_SECTION_COPY[lang];
  const acc = ACCESSORIES_SECTION_COPY[lang];
  const { applyHsaSavings, toggleHsaSavings } = useHsaSavings();
  const boxScrollRef = useRef<HTMLDivElement>(null);

  const visibleBoxItems = cc.boxItems.filter(
    (item) =>
      !item.src.includes("soft-foot") && !item.src.includes("carriage-foot")
  );

  const scrollBox = (dir: -1 | 1) => {
    boxScrollRef.current?.scrollBy({
      left: dir * 320,
      behavior: "smooth",
    });
  };

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            {cc.eyebrow}
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
          className={`inline-flex cursor-pointer items-center gap-2 self-start rounded-2xl border px-4 py-2.5 text-xs font-bold transition md:self-auto ${
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

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} lang={lang} />
        ))}
      </div>

      {/* International Courier Delivery (~2 Weeks) & 1-Year Warranty Strip */}
      <div className="mx-auto mt-6 flex max-w-5xl items-center justify-center gap-2 rounded-2xl border border-teal-200 bg-teal-50/70 px-4 py-3 text-center text-xs font-bold text-teal-950 sm:text-sm">
        <ShieldCheck className="h-4 w-4 shrink-0 text-teal-700" />
        <span>{acc.shippingBanner}</span>
      </div>

      {/* Official US & Canada Accessories Lineup (6 Items) */}
      <div className="mt-14">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            {acc.eyebrow}
          </span>
          <h3 className="mt-1 font-display text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            {acc.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{acc.subtitle}</p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICIAL_ACCESSORIES.map((item) => {
            const targetProduct =
              item.compatibleWith === "2-piece-folding-board"
                ? "2-piece-folding-board"
                : "3-piece-travel-board";
            const orderHref = `${getLocalizedHref("/order/", lang)}?product=${targetProduct}&addon=${item.id}&step=1#order-form`;
            return (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:border-teal-500/60 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full bg-[#F4F7F9]">
                  <OptimizedImage
                    src={item.image}
                    alt={item.name[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-2"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-slate-950/90 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    {item.tag[lang]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h4 className="font-display text-sm font-extrabold text-slate-950">
                    {item.name[lang]}
                  </h4>
                  <p className="mt-1 text-[11px] font-semibold text-teal-800">
                    {item.spec[lang]}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {item.desc[lang]}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-3.5">
                    <span className="text-lg font-black text-slate-950">
                      {formatUSD(
                        applyHsaSavings
                          ? calculateHsaPrice(item.priceUsd)
                          : item.priceUsd
                      )}
                    </span>
                    <Link
                      href={orderHref}
                      className="inline-flex items-center gap-1 rounded-xl bg-slate-950 px-3 py-2 text-[11px] font-bold text-white transition hover:bg-teal-700"
                    >
                      <span>{acc.addToOrder}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
              {cc.matrixEyebrow}
            </span>
            <h3 className="mt-1 font-display text-2xl font-black text-slate-950">
              {cc.matrixTitle}
            </h3>
          </div>
          <a
            href="#calculator"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline"
          >
            {cc.matrixCalcCta} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[720px] border-collapse text-left text-xs sm:text-sm">
            <thead className="bg-[#0B1F3A] text-white">
              <tr>
                <th className="p-3.5 font-bold">{cc.tableHeaders.model}</th>
                <th className="p-3.5 font-bold">{cc.tableHeaders.construction}</th>
                <th className="p-3.5 font-bold">{cc.tableHeaders.maxWeightHeight}</th>
                <th className="p-3.5 font-bold">{cc.tableHeaders.boardWeight}</th>
                <th className="p-3.5 font-bold">{cc.tableHeaders.bestFor}</th>
                <th className="p-3.5 font-bold text-emerald-300">{cc.tableHeaders.directExpress}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {PRODUCTS.map((p) => {
                const lp = getLocalizedProduct(p, lang);
                return (
                  <tr key={p.slug} className="hover:bg-slate-50/70">
                    <td className="p-3.5 font-extrabold text-slate-950">
                      <Link
                        href={getLocalizedHref(`/products/${p.slug}/`, lang)}
                        className="hover:text-teal-700 hover:underline"
                      >
                        {lp.name}
                      </Link>
                    </td>
                    <td className="p-3.5 text-slate-700">{lp.construction}</td>
                    <td className="p-3.5 font-semibold text-slate-900">
                      {lp.weightLimitLabel} • {lp.heightLimitLabel}
                    </td>
                    <td className="p-3.5 text-slate-600">{lp.boardWeightLabel}</td>
                    <td className="p-3.5 text-slate-600">{lp.mobility}</td>
                    <td className="p-3.5 font-black text-teal-800 whitespace-nowrap">
                      {formatUSD(applyHsaSavings ? calculateHsaPrice(p.directPriceUsd) : p.directPriceUsd)}
                      {" / "}
                      {formatUSD(applyHsaSavings ? calculateHsaPrice(p.expressPriceUsd) : p.expressPriceUsd)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compact Horizontal Carousel: Complete Box Contents & Hardware */}
      <div className="mt-10 rounded-3xl border border-emerald-200/80 bg-emerald-50/40 p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Gift className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-display text-base font-black text-slate-950 sm:text-lg">
                {cc.boxTitle}
              </h3>
              <p className="text-xs text-slate-600">{cc.boxSubtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollBox(-1)}
              aria-label="Scroll left"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:border-teal-600 hover:text-teal-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBox(1)}
              aria-label="Scroll right"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:border-teal-600 hover:text-teal-700"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={boxScrollRef}
          className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
        >
          {visibleBoxItems.map((item) => (
            <div
              key={item.src}
              className="w-[270px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs sm:w-[300px] lg:w-[calc(33.333%-11px)]"
            >
              <div className="relative aspect-[16/10] w-full bg-[#F4F7F9]">
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 280px, 340px"
                  className="object-contain p-1.5"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-slate-950/85 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                  {item.tag}
                </span>
              </div>
              <div className="p-3.5">
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
