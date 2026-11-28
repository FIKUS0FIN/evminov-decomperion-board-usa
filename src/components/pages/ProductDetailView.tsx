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
import { SITE_CONFIG } from "@/lib/site-config";
import { IS_CANADA } from "@/lib/region-config";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import {
  FaqJsonLd,
  ProductJsonLd,
  VideoObjectJsonLd,
} from "@/components/seo/JsonLd";
import {
  ACCESSORIES_SECTION_COPY,
  getLocalizedFinish,
  getLocalizedProduct,
  PRODUCT_DETAIL_COPY,
} from "@/i18n/locales/catalog";

const PDP_CRO_EXTRA: Record<
  Locale,
  {
    lmnHelperLink: string;
    videoHeading: string;
    videoSub: string;
    demoTitle: string;
    mountTitle: string;
    compareHeading: string;
    colFeature: string;
    colThreePiece: string;
    colTwoPiece: string;
    activeBadge: string;
    rows: Array<{ label: string; three: string; two: string }>;
  }
> = {
  en: {
    lmnHelperLink: IS_CANADA
      ? "Claiming via Extended Health / HSA? Build & print a free doctor's note template →"
      : "Using HSA/FSA before Dec 31? Build & print a free LMN template for your doctor →",
    videoHeading: "Official Technique & Wall Mounting Walkthroughs",
    videoSub: "Verified demonstrations from the official @evminoviusa channel.",
    demoTitle: "Evminov Method Carriage & Glisson Cervical Decompression Demo",
    mountTitle: "16-Inch North American Wood Stud Wall Mounting Guide",
    compareHeading: "3-Piece Full-Length vs 2-Piece Compact — Quick Choice Guide",
    colFeature: "Specification",
    colThreePiece: "3-Piece Folding (230–245 cm)",
    colTwoPiece: "2-Piece Compact (Spine Toothbrush)",
    activeBadge: "Viewing",
    rows: [
      {
        label: "Full Length & Sections",
        three: "3 sections • full 230–245 cm clinical span",
        two: "2 sections • compact daily posture board",
      },
      {
        label: "Packed / Closet Footprint",
        three: "Packs under 120 cm (2-bag case option)",
        two: "Fast 2-half closet storage (1-bag case option)",
      },
      {
        label: "Panel Width Options",
        three: "26 cm Standard (≤100 kg) or 30 cm Wide (≤150 kg)",
        two: "26 cm Standard (≤100 kg) or 30 cm Wide (≤150 kg)",
      },
      {
        label: "Ideal For",
        three: "Disc conditioning, tall athletes & full-length glide",
        two: "Condos, apartments, desks & rapid daily setup",
      },
    ],
  },
  es: {
    lmnHelperLink: IS_CANADA
      ? "¿Usas seguro de salud en Canadá? Prepara gratis tu plantilla médica →"
      : "¿Usas HSA/FSA antes del 31 dic.? Crea e imprime tu plantilla LMN gratis →",
    videoHeading: "Videos Oficiales de Uso e Instalación en Pared",
    videoSub: "Demostraciones verificadas del canal oficial @evminoviusa.",
    demoTitle: "Técnica Oficial de Descompresión Evminov y Lazo de Glisson",
    mountTitle: "Guía de Instalación en Montantes de Madera de 16 Pulgadas",
    compareHeading: "Modelo 3 Piezas vs 2 Piezas Compacta — Comparativa Rápida",
    colFeature: "Característica",
    colThreePiece: "Plegable 3 Piezas (230–245 cm)",
    colTwoPiece: "Compacta 2 Piezas",
    activeBadge: "Viendo",
    rows: [
      {
        label: "Longitud y Secciones",
        three: "3 secciones • longitud clínica completa 230–245 cm",
        two: "2 secciones • higiene postural diaria compacta",
      },
      {
        label: "Almacenamiento",
        three: "Bajo 120 cm embalado (opción 2 bolsas)",
        two: "Cabe rápido en clóset (opción 1 funda)",
      },
      {
        label: "Anchos Disponibles",
        three: "26 cm Estándar (≤100 kg) o 30 cm Reforzada (≤150 kg)",
        two: "26 cm Estándar (≤100 kg) o 30 cm Reforzada (≤150 kg)",
      },
      {
        label: "Recomendada Para",
        three: "Deportistas altos y recorrido completo de carro",
        two: "Departamentos, oficinas y guardado en segundos",
      },
    ],
  },
  fr: {
    lmnHelperLink:
      "Assurance santé / HSA ? Créez et imprimez gratuitement votre attestation →",
    videoHeading: "Démonstrations Officielles & Installation Murale",
    videoSub: "Vidéos vérifiées de la chaîne officielle @evminoviusa.",
    demoTitle: "Démonstration Technique Evminov et Boucle de Glisson",
    mountTitle: "Guide de Fixation sur Montant Bois 16 Pouces",
    compareHeading: "Planche 3 Pièces vs 2 Pièces Compacte — Comparatif Rapide",
    colFeature: "Critère",
    colThreePiece: "Pliable 3 Pièces (230–245 cm)",
    colTwoPiece: "Compacte 2 Pièces",
    activeBadge: "Consultée",
    rows: [
      {
        label: "Longueur & Sections",
        three: "3 sections • pleine longueur clinique 230–245 cm",
        two: "2 sections • format compact quotidien",
      },
      {
        label: "Rangement",
        three: "Moins de 120 cm démontée (option 2 housses)",
        two: "Rangement rapide en placard (option 1 housse)",
      },
      {
        label: "Largeurs",
        three: "26 cm Standard (≤100 kg) ou 30 cm Large (≤150 kg)",
        two: "26 cm Standard (≤100 kg) ou 30 cm Large (≤150 kg)",
      },
      {
        label: "Idéale Pour",
        three: "Grands gabarits, sportifs et amplitude maximale",
        two: "Appartements, condos et routine express",
      },
    ],
  },
  de: {
    lmnHelperLink:
      "HSA/FSA nutzen? Kostenlose ärztliche LMN-Vorlage erstellen & drucken →",
    videoHeading: "Offizielle Anwendungs- & Montagevideos",
    videoSub: "Verifizierte Anleitungen vom offiziellen Kanal @evminoviusa.",
    demoTitle: "Offizielle Evminov Technik & Glisson-Schlaufe Demonstration",
    mountTitle: "Wandmontage-Anleitung für 16-Zoll-Holzständerbauweise",
    compareHeading: "3-teilig Vollformat vs. 2-teilig Kompakt — Schnellvergleich",
    colFeature: "Merkmal",
    colThreePiece: "3-teilig Faltbar (230–245 cm)",
    colTwoPiece: "2-teilig Kompakt",
    activeBadge: "Aktiv",
    rows: [
      {
        label: "Länge & Teile",
        three: "3 Segmente • volle klinische Länge 230–245 cm",
        two: "2 Segmente • kompaktes tägliches Rückenboard",
      },
      {
        label: "Verstauen",
        three: "Packmaß unter 120 cm (optional 2 Taschen)",
        two: "Blitzschnell im Schrank verstaubar (1 Tasche)",
      },
      {
        label: "Breiten",
        three: "26 cm Standard (≤100 kg) oder 30 cm Breit (≤150 kg)",
        two: "26 cm Standard (≤100 kg) oder 30 cm Breit (≤150 kg)",
      },
      {
        label: "Optimal Für",
        three: "Sportler, große Personen & voller Schlittenweg",
        two: "Wohnungen, Homeoffice & tägliche Kurz-Routine",
      },
    ],
  },
  uk: {
    lmnHelperLink: IS_CANADA
      ? "Подаєте на канадську страховку? Сформуйте та роздрукуйте шаблон довідки →"
      : "Повертаєте ~30% через HSA/FSA? Створіть шаблон довідки LMN для лікаря →",
    videoHeading: "Офіційні відео техніки занять і монтажу на стіну",
    videoSub: "Перевірені інструкції з офіційного каналу @evminoviusa.",
    demoTitle: "Демонстрація занять на Профілакторі Євмінова та з петлею Гліссона",
    mountTitle: "Монтаж кріплення на американський/канадський дерев’яний брус 16 дюймів",
    compareHeading: "Профілактор з 3-х частин чи компактний з 2-х частин — що обрати",
    colFeature: "Параметр",
    colThreePiece: "З 3-х частин (повні 230–245 см)",
    colTwoPiece: "З 2-х частин («Зубна щітка»)",
    activeBadge: "Дивитесь",
    rows: [
      {
        label: "Довжина та секції",
        three: "3 секції • повна клінічна довжина 230–245 см",
        two: "2 секції • компактний формат для щоденної гігієни спини",
      },
      {
        label: "Зберігання вдома",
        three: "У складеному вигляді до 120 см (опція — 2 сумки)",
        two: "Миттєво ховається в шафу чи під ліжко (опція — 1 сумка)",
      },
      {
        label: "Варіанти ширини",
        three: "26 см стандарт (до 100 кг) або 30 см посилена (до 150 кг)",
        two: "26 см стандарт (до 100 кг) або 30 см посилена (до 150 кг)",
      },
      {
        label: "Найкраще підходить",
        three: "Для високого зросту, спорту та повного ходу каретки",
        two: "Для квартир, орендованого житла та занять за 10 хвилин",
      },
    ],
  },
  ru: {
    lmnHelperLink: IS_CANADA
      ? "Подаёте на канадскую страховку? Подготовьте шаблон справки для врача →"
      : "Возвращаете ~30% через HSA/FSA? Создайте шаблон справки LMN для врача →",
    videoHeading: "Официальные видео техники занятий и монтажа на стену",
    videoSub: "Проверенные инструкции с официального канала @evminoviusa.",
    demoTitle: "Демонстрация занятий на Профилакторе Евминова и с петлёй Глиссона",
    mountTitle: "Монтаж крепления в деревянную стойку стены 16 дюймов",
    compareHeading: "Модель из 3-х частей или компактная из 2-х частей — что выбрать",
    colFeature: "Параметр",
    colThreePiece: "Из 3-х частей (полные 230–245 см)",
    colTwoPiece: "Из 2-х частей («Зубная щётка»)",
    activeBadge: "Смотрите",
    rows: [
      {
        label: "Длина и секции",
        three: "3 секции • полная клиническая длина 230–245 см",
        two: "2 секции • компактный формат для ежедневной гигиены спины",
      },
      {
        label: "Хранение дома",
        three: "В разобранном виде до 120 см (опция — 2 сумки)",
        two: "Легко убирается в шкаф или под кровать (опция — 1 чехол)",
      },
      {
        label: "Варианты ширины",
        three: "26 см стандарт (до 100 кг) или 30 см усиленная (до 150 кг)",
        two: "26 см стандарт (до 100 кг) или 30 см усиленная (до 150 кг)",
      },
      {
        label: "Лучше всего для",
        three: "Высокого роста, спорта и полного хода каретки",
        two: "Квартир, съёмного жилья и быстрой разминки за 10 минут",
      },
    ],
  },
};

export function ProductDetailView({
  product,
  lang,
}: {
  product: ProductItem;
  lang: Locale;
}) {
  const ui = getDictionary(lang).productUi;
  const pd = PRODUCT_DETAIL_COPY[lang];
  const cro = PDP_CRO_EXTRA[lang];
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
      <VideoObjectJsonLd />

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
              <div className="mt-3 border-t border-slate-200 pt-2.5">
                <Link
                  href={`${getLocalizedHref("/guides/hsa-fsa-spinal-decompression-lmn-guide/", lang)}#lmn-builder`}
                  className="inline-flex items-center text-xs font-bold text-teal-800 hover:underline"
                >
                  {cro.lmnHelperLink}
                </Link>
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

        {/* Official @evminoviusa Video Walkthroughs */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-black text-slate-950">
            {cro.videoHeading}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{cro.videoSub}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <LiteYouTube
                videoId={SITE_CONFIG.videos.methodDemo.id}
                title={cro.demoTitle}
                thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
              />
              <p className="mt-2 text-xs font-bold text-slate-800">{cro.demoTitle}</p>
            </div>
            <div>
              <LiteYouTube
                videoId={SITE_CONFIG.videos.wallMounting.id}
                title={cro.mountTitle}
                thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
              />
              <p className="mt-2 text-xs font-bold text-slate-800">{cro.mountTitle}</p>
            </div>
          </div>
        </section>

        {/* 3-Piece vs 2-Piece Quick Comparison */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-black text-slate-950">
            {cro.compareHeading}
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-900">
                <tr>
                  <th className="px-4 py-3 font-extrabold">{cro.colFeature}</th>
                  <th
                    className={`px-4 py-3 font-extrabold ${
                      product.slug === "3-piece-travel-board" ? "bg-emerald-50 text-emerald-950" : ""
                    }`}
                  >
                    {cro.colThreePiece}
                    {product.slug === "3-piece-travel-board" && (
                      <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black text-white">
                        {cro.activeBadge}
                      </span>
                    )}
                  </th>
                  <th
                    className={`px-4 py-3 font-extrabold ${
                      product.slug === "2-piece-folding-board" ? "bg-emerald-50 text-emerald-950" : ""
                    }`}
                  >
                    {cro.colTwoPiece}
                    {product.slug === "2-piece-folding-board" && (
                      <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black text-white">
                        {cro.activeBadge}
                      </span>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {cro.rows.map((row) => (
                  <tr key={row.label}>
                    <td className="px-4 py-3 font-bold text-slate-900">{row.label}</td>
                    <td
                      className={`px-4 py-3 ${
                        product.slug === "3-piece-travel-board" ? "bg-emerald-50/40 font-semibold text-slate-900" : ""
                      }`}
                    >
                      {row.three}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        product.slug === "2-piece-folding-board" ? "bg-emerald-50/40 font-semibold text-slate-900" : ""
                      }`}
                    >
                      {row.two}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
