import type { Metadata } from "next";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ConditionsHubView } from "@/components/pages/HubViews";

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
  const s = getDictionary(lang).sections;
  return buildPageMetadata({
    path: "/conditions/",
    lang,
    title: s.conditionsTitle,
    description: s.conditionsSubtitle,
  });
}

export default async function LocalizedConditionsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <ConditionsHubView lang={lang} />;
}
