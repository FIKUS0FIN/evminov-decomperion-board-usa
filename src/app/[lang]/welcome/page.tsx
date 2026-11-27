import type { Metadata } from "next";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/page-metadata";
import { WelcomePageView } from "@/components/pages/HubViews";

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
  const f = getDictionary(lang).footer;
  return buildPageMetadata({
    path: "/welcome/",
    lang,
    title: f.welcomeQr,
    description: "Evminov Spine Systems 16-inch US wood stud mounting video and verified owner feedback hub.",
  });
}

export default function LocalizedWelcomePage() {
  return <WelcomePageView />;
}
