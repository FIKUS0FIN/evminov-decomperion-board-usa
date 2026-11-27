import type { Metadata } from "next";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ProductsHubView } from "@/components/pages/HubViews";

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
    path: "/products/",
    lang,
    title: s.catalogTitle,
    description: s.catalogSubtitle,
  });
}

export default async function LocalizedProductsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <ProductsHubView lang={lang} />;
}
