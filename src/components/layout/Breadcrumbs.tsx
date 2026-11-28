"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getCanonicalUrl, getLocalizedHref } from "@/lib/url";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BREADCRUMB_COPY } from "@/i18n/locales/chrome";

const SEGMENT_LABELS: Record<string, Record<Locale, string>> = {
  products: { en: "Boards", es: "Tablas", fr: "Planches", de: "Boards", uk: "Дошки", ru: "Доски" },
  compare: { en: "Compare", es: "Comparar", fr: "Comparer", de: "Vergleich", uk: "Порівняння", ru: "Сравнение" },
  conditions: { en: "Spine Goals", es: "Objetivos", fr: "Objectifs", de: "Rückenziele", uk: "Програми", ru: "Программы" },
  guides: { en: "Guides", es: "Guías", fr: "Guides", de: "Ratgeber", uk: "Гайди", ru: "Статьи" },
  shipping: { en: "US Shipping", es: "Envíos", fr: "Livraison", de: "Versand", uk: "Доставка", ru: "Доставка" },
  centers: { en: "Heritage 1996", es: "Historia 1996", fr: "Histoire 1996", de: "Tradition 1996", uk: "Історія 1996", ru: "История 1996" },
  calculator: { en: "Angle Calculator", es: "Calculadora", fr: "Calculateur", de: "Winkelrechner", uk: "Калькулятор", ru: "Калькулятор" },
  order: { en: "Order Board", es: "Pedir Tabla", fr: "Commander", de: "Bestellen", uk: "Замовлення", ru: "Заказ" },
  portal: { en: "Patient Portal", es: "Portal Paciente", fr: "Portail Patient", de: "Patientenportal", uk: "Кабінет Пацієнта", ru: "Кабинет Пациента" },
  welcome: { en: "Owner Setup", es: "Instalación", fr: "Installation", de: "Einrichtung", uk: "Налаштування", ru: "Настройка" },
  privacy: { en: "Privacy Policy", es: "Privacidad", fr: "Confidentialité", de: "Datenschutz", uk: "Конфіденційність", ru: "Конфиденциальность" },
  terms: { en: "Terms of Service", es: "Términos", fr: "Conditions", de: "AGB", uk: "Умови", ru: "Условия" },
  "shipping-returns": { en: "Shipping & Returns", es: "Envíos y Devoluciones", fr: "Livraison & Retours", de: "Versand & Rückgabe", uk: "Доставка і повернення", ru: "Доставка и возврат" },
  "wellness-disclaimer": { en: "Wellness Disclaimer", es: "Aviso de Bienestar", fr: "Avis Bien-Être", de: "Wellness-Hinweis", uk: "Застереження", ru: "Дисклеймер" },
};

function formatSegment(segment: string, lang: Locale): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment][lang];
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function Breadcrumbs({ lang }: { lang: Locale }) {
  const pathname = usePathname() || "/";
  const rawSegments = pathname.split("/").filter(Boolean);
  const segments =
    rawSegments.length > 0 &&
    (NON_DEFAULT_LOCALES as readonly string[]).includes(rawSegments[0])
      ? rawSegments.slice(1)
      : rawSegments;

  if (segments.length === 0) return null;

  const homeHref = getLocalizedHref("/", lang);
  const crumbs = [
    { name: BREADCRUMB_COPY[lang].home, href: homeHref, url: getCanonicalUrl("/", lang) },
  ];

  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const href = getLocalizedHref(`${acc}/`, lang);
    crumbs.push({
      name: formatSegment(seg, lang),
      href,
      url: getCanonicalUrl(`${acc}/`, lang),
    });
  }

  return (
    <div className="border-b border-slate-100 bg-slate-50/70">
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.url }))} />
      <nav
        aria-label={BREADCRUMB_COPY[lang].navAria}
        className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto px-4 py-2.5 text-xs text-slate-600"
      >
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <span key={crumb.href} className="inline-flex items-center gap-1.5 whitespace-nowrap">
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              {isLast ? (
                <span className="font-semibold text-slate-900" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="inline-flex items-center gap-1 hover:text-teal-700"
                >
                  {idx === 0 && <Home className="h-3.5 w-3.5" />}
                  <span>{crumb.name}</span>
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
