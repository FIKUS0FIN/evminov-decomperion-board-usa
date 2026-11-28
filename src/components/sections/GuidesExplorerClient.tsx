"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export interface GuideCardViewModel {
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  categoryLabel: string;
  readTimeLabel: string;
  topicBucket: "lumbar" | "sciatica" | "neck" | "compare" | "buying" | "family";
}

const EXPLORER_UI: Record<
  Locale,
  {
    searchPlaceholder: string;
    searchAria: string;
    all: string;
    lumbar: string;
    sciatica: string;
    neck: string;
    compare: string;
    buying: string;
    family: string;
    noResults: string;
    resetBtn: string;
  }
> = {
  en: {
    searchPlaceholder: "Search topic (e.g., L4-L5, piriformis, neck hump, HSA, Teeter)…",
    searchAria: "Search clinical spine guides",
    all: "All Guides",
    lumbar: "Lumbar & Discs",
    sciatica: "Sciatica & Sleep",
    neck: "Neck & Posture",
    compare: "Inversion & Comparisons",
    buying: "Buying & HSA/FSA",
    family: "Athletes & Family",
    noResults: "No guides matched your search filter.",
    resetBtn: "Show All Guides",
  },
  es: {
    searchPlaceholder: "Buscar tema (ej. L4-L5, piriforme, joroba cuello, HSA, Teeter)…",
    searchAria: "Buscar guías clínicas",
    all: "Todas las Guías",
    lumbar: "Lumbar y Discos",
    sciatica: "Ciática y Sueño",
    neck: "Cuello y Postura",
    compare: "Inversión y Opciones",
    buying: "Compra y HSA/FSA",
    family: "Atletas y Familia",
    noResults: "Ninguna guía coincidió con tu búsqueda.",
    resetBtn: "Ver Todas las Guías",
  },
  fr: {
    searchPlaceholder: "Rechercher (ex : L4-L5, piriforme, bosse cou, HSA, Teeter)…",
    searchAria: "Rechercher parmi les guides cliniques",
    all: "Tous les Guides",
    lumbar: "Lombaires & Disques",
    sciatica: "Sciatique & Sommeil",
    neck: "Nuque & Posture",
    compare: "Inversion & Comparatifs",
    buying: "Achat & Assurances",
    family: "Sport & Famille",
    noResults: "Aucun guide ne correspond à votre recherche.",
    resetBtn: "Afficher Tous les Guides",
  },
  de: {
    searchPlaceholder: "Thema suchen (z. B. L4-L5, Piriformis, Nackenbuckel, HSA)…",
    searchAria: "Klinische Ratgeber durchsuchen",
    all: "Alle Ratgeber",
    lumbar: "Lenden & Bandscheibe",
    sciatica: "Ischias & Schlaf",
    neck: "Nacken & Haltung",
    compare: "Inversion & Vergleiche",
    buying: "Kauf & HSA/FSA",
    family: "Sport & Familie",
    noResults: "Keine Ratgeber zu Ihrer Suche gefunden.",
    resetBtn: "Alle Ratgeber anzeigen",
  },
  uk: {
    searchPlaceholder: "Пошук теми (напр., L4-L5, ішіас, холка на шиї, ціна, HSA)…",
    searchAria: "Пошук клінічних гайдів",
    all: "Усі Гайди",
    lumbar: "Поперек і Диски",
    sciatica: "Ішіас і Сон",
    neck: "Шия та Постава",
    compare: "Інверсія та Аналоги",
    buying: "Купівля, Ціна й HSA",
    family: "Спорт і Родина",
    noResults: "За вашим запитом гайдів не знайдено.",
    resetBtn: "Показати Усі Гайди",
  },
  ru: {
    searchPlaceholder: "Поиск темы (напр., L4-L5, ишиас, холка, стоимость, HSA)…",
    searchAria: "Поиск клинических гайдов",
    all: "Все Гайды",
    lumbar: "Поясница и Диски",
    sciatica: "Ишиас и Сон",
    neck: "Шея и Осанка",
    compare: "Инверсия и Аналоги",
    buying: "Покупка, Цена и HSA",
    family: "Спорт и Семья",
    noResults: "По вашему запросу статьи не найдены.",
    resetBtn: "Показать Все Гайды",
  },
};

export function GuidesExplorerClient({
  items,
  lang,
  readMoreLabel,
}: {
  items: GuideCardViewModel[];
  lang: Locale;
  readMoreLabel: string;
}) {
  const ui = EXPLORER_UI[lang];
  const [bucket, setBucket] = useState<"all" | GuideCardViewModel["topicBucket"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (bucket !== "all" && item.topicBucket !== bucket) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [items, bucket, query]);

  const filterKeys: Array<"all" | GuideCardViewModel["topicBucket"]> = [
    "all",
    "lumbar",
    "sciatica",
    "neck",
    "compare",
    "buying",
    "family",
  ];

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filterKeys.map((key) => {
            const active = bucket === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active}
                onClick={() => setBucket(key)}
                className={`min-h-[40px] rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                  active
                    ? "bg-[#0B1F3A] text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-teal-600"
                }`}
              >
                {ui[key]}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={ui.searchAria}
            placeholder={ui.searchPlaceholder}
            className="min-h-[44px] w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none sm:text-xs"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 text-center">
          <p className="text-sm font-semibold text-slate-600">{ui.noResults}</p>
          <button
            type="button"
            onClick={() => {
              setBucket("all");
              setQuery("");
            }}
            className="mt-3 min-h-[44px] rounded-xl bg-emerald-600 px-5 py-2 text-xs font-black text-white hover:bg-emerald-500"
          >
            {ui.resetBtn}
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <article
              key={g.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <OptimizedImage
                  src={g.heroImage}
                  alt={g.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase text-teal-700">
                  {g.categoryLabel} • {g.readTimeLabel}
                </span>
                <h2 className="mt-2 font-display text-lg font-extrabold text-slate-950">
                  <Link
                    href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                    className="hover:text-teal-700"
                  >
                    {g.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">{g.excerpt}</p>
                <Link
                  href={getLocalizedHref(`/guides/${g.slug}/`, lang)}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal-700"
                >
                  {readMoreLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
