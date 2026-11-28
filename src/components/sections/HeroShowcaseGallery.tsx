"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { HERO_GALLERY_COPY } from "@/i18n/locales/home-part1";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const HERO_IMAGE_SRCS = [
  "/images/authentic/hero-full-device-traction.jpg",
  "/images/authentic/evminov-board-profile.jpg",
  "/images/authentic/hero-carriage-traction-detail.jpg",
  "/images/authentic/hero-reverse-decompression.jpg",
  "/images/products/glisson-loop-studio.jpg",
  "/images/products/board-natural-pine-finish.jpg",
] as const;

export function HeroShowcaseGallery({ lang = "en" }: { lang?: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const copy = HERO_GALLERY_COPY[lang];
  const slides = HERO_IMAGE_SRCS.map((src, i) => ({
    src,
    ...copy.slides[i],
  }));
  const current = slides[activeIndex];

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="space-y-3">
      {/* Main Interactive Frame */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900 via-[#0E1E36] to-slate-950 shadow-2xl">
        <OptimizedImage
          src={current.src}
          alt={current.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 44vw"
          className="object-contain p-2 transition-transform duration-500"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-3.5 right-3.5 top-3.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-slate-950/80 px-3 py-1 text-[11px] font-extrabold text-emerald-300 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            <span>{current.badge}</span>
          </span>
          <span className="rounded-full bg-slate-950/75 px-2.5 py-1 text-[11px] font-bold text-slate-200 backdrop-blur-md">
            {activeIndex + 1} / {slides.length}
          </span>
        </div>

        {/* Left/Right Navigation Controls (WCAG 44px+ Tap Targets & Keyboard Focus) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label={copy.prevAria}
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-slate-950/75 text-white backdrop-blur transition hover:bg-emerald-500 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label={copy.nextAria}
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-slate-950/75 text-white backdrop-blur transition hover:bg-emerald-500 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Bottom Caption */}
        <div className="absolute bottom-3.5 left-4 right-4">
          <p className="text-xs font-semibold text-white drop-shadow sm:text-sm">
            {current.caption}
          </p>
        </div>
      </div>

      {/* 6 Interactive Thumbnail Switchers */}
      <div
        className="grid grid-cols-6 gap-2"
        role="tablist"
        aria-label={copy.tablistAria}
      >
        {slides.map((slide, idx) => {
          const active = idx === activeIndex;
          return (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`${copy.viewPrefix} ${slide.badge}`}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition ${
                active
                  ? "border-emerald-400 ring-2 ring-emerald-400/30"
                  : "border-white/15 opacity-70 hover:opacity-100"
              }`}
            >
              <OptimizedImage
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100px"
                className="bg-slate-950 object-contain p-0.5"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
