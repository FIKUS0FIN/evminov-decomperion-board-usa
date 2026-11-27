import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { HomePageContent } from "@/components/sections/HomePageContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ lang }));
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <HomePageContent lang={lang} />;
}
