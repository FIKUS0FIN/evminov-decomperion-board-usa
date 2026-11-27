"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

interface HeroSlide {
  src: string;
  alt: string;
  badge: string;
  caption: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/authentic/hero-full-device-traction.jpg",
    alt: "Evminov Spine Decompression Board controlled inclined traction in home setup",
    badge: "15° Controlled Traction",
    caption: "Gentle axial spine unloading with zero upside-down head rush",
  },
  {
    src: "/images/authentic/evminov-board-profile.jpg",
    alt: "Handcrafted resonant Carpathian pine Evminov board profile view",
    badge: "Carpathian Resonant Pine",
    caption: "Multi-layer flexing wood beam absorbs impact and cushions vertebrae",
  },
  {
    src: "/images/authentic/hero-carriage-traction-detail.jpg",
    alt: "Close-up of Evminov sliding carriage grip during gentle spinal elongation",
    badge: "5-Second Height Lock",
    caption: "Aircraft-alloy sliding carriage adapts to users from 4'0\" to 6'9\"",
  },
  {
    src: "/images/authentic/hero-reverse-decompression.jpg",
    alt: "Evminov inclined reverse decompression posture for deep lumbar release",
    badge: "Multi-Angle Versatility",
    caption: "Supports supine, prone, cervical, and athletic core routines",
  },
  {
    src: "/images/products/glisson-loop-studio.jpg",
    alt: "Official cotton-padded Glisson Loop cervical neck traction harness included free",
    badge: "Included Free ($49 Value)",
    caption: "Soft padded Glisson Loop for gentle 8°–12° neck & tech-neck unloading",
  },
  {
    src: "/images/products/board-natural-pine-finish.jpg",
    alt: "Natural kiln-dried Carpathian pine woodgrain finish on Evminov decompression board",
    badge: "Folds to 2.4\" Flat",
    caption: "Satin water-based finish folds flat against any US wall after use",
  },
];

export function HeroShowcaseGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = HERO_SLIDES[activeIndex];

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));

  return (
    <div className="space-y-3">
      {/* Main Interactive Frame */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
        <OptimizedImage
          src={current.src}
          alt={current.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 44vw"
          className="object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-3.5 right-3.5 top-3.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-slate-950/80 px-3 py-1 text-[11px] font-extrabold text-emerald-300 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            <span>{current.badge}</span>
          </span>
          <span className="rounded-full bg-slate-950/75 px-2.5 py-1 text-[11px] font-bold text-slate-200 backdrop-blur-md">
            {activeIndex + 1} / {HERO_SLIDES.length}
          </span>
        </div>

        {/* Left/Right Navigation Controls */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous product photo"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur transition hover:bg-emerald-500 hover:text-slate-950"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next product photo"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur transition hover:bg-emerald-500 hover:text-slate-950"
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
        aria-label="Evminov Board Showcase Photos"
      >
        {HERO_SLIDES.map((slide, idx) => {
          const active = idx === activeIndex;
          return (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`View ${slide.badge}`}
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
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
