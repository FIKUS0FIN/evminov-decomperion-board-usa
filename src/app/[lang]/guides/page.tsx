import type { Metadata } from "next";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/page-metadata";
import { GuidesHubView } from "@/components/pages/HubViews";

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
    path: "/guides/",
    lang,
    title: s.guidesTitle,
    description: s.guidesSubtitle,
  });
}

export default async function LocalizedGuidesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <GuidesHubView lang={lang} />;
}
