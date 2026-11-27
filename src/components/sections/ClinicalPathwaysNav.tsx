import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Dumbbell,
  Monitor,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";

const SECTION_COPY: Record<
  Locale,
  { eyebrow: string; heading: string; badge: string }
> = {
  en: {
    eyebrow: "GUIDED SPINE PATHWAYS",
    heading: "Explore by Goal, Condition & Setup",
    badge: "8 Evidence-Informed Pathways",
  },
  es: {
    eyebrow: "RUTAS ESPINALES GUIADAS",
    heading: "Explora por Objetivo, Dolor o Instalación",
    badge: "8 Rutas Biomecánicas",
  },
  fr: {
    eyebrow: "PARCOURS VERTÉBRAUX GUIDÉS",
    heading: "Explorer par Besoin & Installation",
    badge: "8 Parcours Biomécaniques",
  },
  uk: {
    eyebrow: "НАПРЯМКИ ТА ПРОГРАМИ",
    heading: "Оберіть Вашу Ціль або Потребу",
    badge: "8 Перевірених Напрямків",
  },
  ru: {
    eyebrow: "НАПРАВЛЕНИЯ И ПРОГРАММЫ",
    heading: "Выберите Вашу Цель или Потребность",
    badge: "8 Проверенных Направлений",
  },
};

export function ClinicalPathwaysNav({ lang }: { lang: Locale }) {
  const copy = SECTION_COPY[lang];

  const pathways = [
    {
      href: getLocalizedHref("/compare/evminov-vs-inversion-table/", lang),
      title: "Why Not Inversion?",
      subtitle: "Zero upside-down head rush",
      tag: "Safety Compare",
      accent: "bg-sky-50 text-sky-700 border-sky-200",
      icon: ShieldCheck,
    },
    {
      href: getLocalizedHref("/conditions/herniated-disc-l4-l5/", lang),
      title: "L4–S1 Disc Comfort",
      subtitle: "Low-angle 12°–20° unloading",
      tag: "Lumbar Focus",
      accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: Activity,
    },
    {
      href: getLocalizedHref("/conditions/sciatica-relief/", lang),
      title: "Sciatica & Nerve Ease",
      subtitle: "Gentle lumbar decompression",
      tag: "Sciatic Mobility",
      accent: "bg-amber-50 text-amber-700 border-amber-200",
      icon: Zap,
    },
    {
      href: "#pediatric-family",
      title: "Kids & Family Posture",
      subtitle: "Ages 4–85+ Spine Toothbrush",
      tag: "Kids & Teens",
      accent: "bg-teal-50 text-teal-700 border-teal-200",
      icon: Users,
    },
    {
      href: getLocalizedHref("/conditions/cervical-neck-pain/", lang),
      title: "Cervical Neck Traction",
      subtitle: "Free Glisson Loop at 8°–12°",
      tag: "Neck & C1–C7",
      accent: "bg-indigo-50 text-indigo-700 border-indigo-200",
      icon: Sparkles,
    },
    {
      href: "#athletes",
      title: "Athletic Recovery",
      subtitle: "Post-deadlift & squat relief",
      tag: "Heavy Lifters",
      accent: "bg-orange-50 text-orange-700 border-orange-200",
      icon: Dumbbell,
    },
    {
      href: getLocalizedHref("/conditions/desk-worker-posture/", lang),
      title: "Desk Worker Posture",
      subtitle: "Reverses 8h sitting slump",
      tag: "WFH & Nurses",
      accent: "bg-violet-50 text-violet-700 border-violet-200",
      icon: Monitor,
    },
    {
      href: "#mounting",
      title: "16\" Wall & Renter Setup",
      subtitle: "Single stud or no-drill stand",
      tag: "Installation",
      accent: "bg-slate-100 text-slate-800 border-slate-300",
      icon: Wrench,
    },
  ];

  return (
    <section
      aria-label="Guided Spine Pathways"
      className="border-b border-slate-200 bg-white py-8 shadow-[0_6px_24px_rgba(11,31,58,0.04)]"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {copy.eyebrow}
            </span>
            <h2 className="mt-1.5 font-display text-xl font-black text-slate-950 sm:text-2xl">
              {copy.heading}
            </h2>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold text-slate-600">
            {copy.badge}
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => {
            const Icon = item.icon;
            const isAnchor = item.href.startsWith("#");
            const cardClasses =
              "group flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-teal-600 hover:shadow-md";
            const inner = (
              <>
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${item.accent}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700">
                    {item.tag}
                  </span>
                  <p className="truncate font-display text-sm font-extrabold text-slate-950 group-hover:text-teal-800">
                    {item.title}
                  </p>
                  <p className="truncate text-xs text-slate-500">{item.subtitle}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700" />
              </>
            );

            return isAnchor ? (
              <a key={item.title} href={item.href} className={cardClasses}>
                {inner}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={cardClasses}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
