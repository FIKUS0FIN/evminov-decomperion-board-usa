import type { Metadata } from "next";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/page-metadata";
import { LegalPageView } from "@/components/pages/HubViews";

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
  return buildPageMetadata({
    path: "/wellness-disclaimer/",
    lang,
    title: getDictionary(lang).footer.wellnessDisclaimer,
    description: "Evminov Spine Systems General Wellness Equipment notice and safety contraindications.",
  });
}

export default function LocalizedWellnessDisclaimerPage() {
  return <LegalPageView type="wellness-disclaimer" />;
}
