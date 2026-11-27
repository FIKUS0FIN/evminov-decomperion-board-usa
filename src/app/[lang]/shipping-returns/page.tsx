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
    path: "/shipping-returns/",
    lang,
    title: getDictionary(lang).footer.shippingReturns,
    description: "Evminov Spine Systems 50-state US shipping, international delivery, and 60-day home trial policy.",
  });
}

export default async function LocalizedShippingReturnsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <LegalPageView type="shipping-returns" lang={lang} />;
}
