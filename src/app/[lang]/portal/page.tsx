import type { Metadata } from "next";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { buildPageMetadata } from "@/lib/page-metadata";
import { PatientPortalDashboard } from "@/components/sections/PatientPortalDashboard";

export const dynamicParams = false;
export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ lang }));
}

const PORTAL_META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Patient & Owner Portal — 30-Day Routine, Timer & HSA/FSA Kit",
    description:
      "Evminov Patient & Owner Portal with guided session timer, 30-day tracker, 16-inch US stud mounting guide, printable HSA/FSA LMN kit, and 10-year warranty registration.",
  },
  es: {
    title: "Portal de Pacientes y Propietarios — Rutina 30 Días y Kit HSA/FSA",
    description:
      "Accede al Portal de Pacientes Evminov: temporizador guiado, seguimiento de 30 días, guía de montaje en vigas de 16 pulgadas, kit imprimible HSA/FSA y garantía de 10 años.",
  },
  fr: {
    title: "Portail Patient & Propriétaire — Routine 30 Jours & Kit HSA/FSA",
    description:
      "Accédez au Portail Patient Evminov : minuteur de séance, suivi 30 jours, guide de fixation murale 16 pouces, dossier HSA/FSA imprimable et garantie 10 ans.",
  },
  de: {
    title: "Patienten- & Eigentümerportal — 30-Tage-Plan, Timer & HSA/FSA-Kit",
    description:
      "Evminov Patientenportal mit geführtem Trainingstimer, 30-Tage-Tracker, Wandmontage-Anleitung, HSA/FSA-Unterlagen und 10-Jahres-Garantieregistrierung.",
  },
  uk: {
    title: "Кабінет Пацієнта та Власника — План 30 Днів, Таймер і HSA/FSA",
    description:
      "Кабінет власника Профілактора Євмінова: таймер занять, трекер на 30 днів, інструкція монтажу на стійки 16 дюймів (США), пакет HSA/FSA та реєстрація 10-річної гарантії.",
  },
  ru: {
    title: "Кабинет Пациента и Владельца — План 30 Дней, Таймер и HSA/FSA",
    description:
      "Кабинет владельца Профилактора Евминова: таймер тренировок, трекер на 30 дней, гид монтажа на стойки 16 дюймов (США), пакет HSA/FSA и регистрация 10-летней гарантии.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const meta = PORTAL_META[lang];
  return buildPageMetadata({
    path: "/portal/",
    lang,
    title: meta.title,
    description: meta.description,
  });
}

export default async function LocalizedPatientPortalPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <PatientPortalDashboard lang={lang} />;
}
