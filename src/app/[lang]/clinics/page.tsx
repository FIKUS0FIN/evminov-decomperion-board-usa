import type { Metadata } from "next";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { buildPageMetadata } from "@/lib/page-metadata";
import { CLINICS_B2B_COPY } from "@/i18n/locales/clinics";
import { ClinicsB2bPage } from "@/components/pages/ClinicsB2bPage";

export const dynamicParams = false;
export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const copy = CLINICS_B2B_COPY[lang];
  return buildPageMetadata({
    path: "/clinics/",
    lang,
    title: copy.metaTitle,
    description: copy.metaDescription,
    image: "/images/authentic/clinic-rehab-center-1.jpg",
  });
}

export default async function LocalizedClinicsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <ClinicsB2bPage lang={lang} />;
}
