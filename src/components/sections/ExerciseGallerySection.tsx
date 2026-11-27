"use client";

import { useState } from "react";
import { EXERCISE_PROTOCOLS, ExerciseProtocolItem } from "@/data/heritage";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

type FilterCategory = "all" | ExerciseProtocolItem["category"];

const FILTERS: Array<{ key: FilterCategory; label: string }> = [
  { key: "all", label: "All 20 Protocols" },
  { key: "lumbar", label: "Lumbar Relief" },
  { key: "cervical", label: "Cervical & Tech-Neck" },
  { key: "core", label: "Athletic Core" },
  { key: "family", label: "Family & Youth" },
];

export function ExerciseGallerySection() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selected, setSelected] = useState<ExerciseProtocolItem | null>(null);

  const visible =
    filter === "all"
      ? EXERCISE_PROTOCOLS
      : EXERCISE_PROTOCOLS.filter((item) => item.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Exercise categories">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.key)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                active
                  ? "bg-slate-950 text-white shadow"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {f.label}
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
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 rounded-md bg-slate-950/85 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                {item.angle}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-700">
                {item.categoryLabel}
              </p>
              <h3 className="mt-1 text-sm font-bold text-slate-950 line-clamp-2">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600 line-clamp-2">
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
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
              <OptimizedImage
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
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
              Close Protocol
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
