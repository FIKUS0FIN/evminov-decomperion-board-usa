"use client";

import { useState } from "react";
import { Locale } from "@/i18n/types";
import { ExerciseProtocolItem } from "@/data/heritage";
import {
  EXERCISE_GALLERY_UI,
  getLocalizedExercises,
} from "@/i18n/locales/faq-and-exercises";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

type FilterCategory = "all" | ExerciseProtocolItem["category"];

const FILTER_KEYS: FilterCategory[] = ["all", "lumbar", "cervical", "core", "family"];

export function ExerciseGallerySection({ lang = "en" }: { lang?: Locale }) {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selected, setSelected] = useState<ExerciseProtocolItem | null>(null);

  const ui = EXERCISE_GALLERY_UI[lang];
  const allExercises = getLocalizedExercises(lang);
  const visible =
    filter === "all"
      ? allExercises
      : allExercises.filter((item) => item.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={ui.tablistAria}>
        {FILTER_KEYS.map((key) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(key)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                active
                  ? "bg-slate-950 text-white shadow"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {ui.filters[key]}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 rounded-md bg-slate-950/85 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                {item.angle}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-700">
                {item.categoryLabel}
              </p>
              <h3 className="mt-1 line-clamp-2 text-sm font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                {item.benefit}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50">
              <OptimizedImage
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-contain p-1.5"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-800">
                {selected.angle}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                {selected.zone}
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800">
                {selected.duration}
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-black text-slate-950">
              {selected.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {selected.description}
            </p>
            <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-slate-800">
              {selected.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-6 w-full rounded-xl bg-slate-950 py-2.5 text-sm font-bold text-white hover:bg-slate-800"
            >
              {ui.closeBtn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
