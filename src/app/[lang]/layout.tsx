import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NON_DEFAULT_LOCALES, Locale } from "@/i18n/types";
import {
  getSharedMetadata,
  sharedViewport,
  WebsiteLayout,
} from "@/components/layout/WebsiteLayout";

export const dynamicParams = false;
export const viewport = sharedViewport;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ lang }));
}

function asNonDefaultLocale(raw: string): Exclude<Locale, "en"> | null {
  return (NON_DEFAULT_LOCALES as readonly string[]).includes(raw)
    ? (raw as Exclude<Locale, "en">)
    : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = asNonDefaultLocale(raw);
  if (!lang) return {};
  return getSharedMetadata(lang);
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = asNonDefaultLocale(raw);
  if (!lang) notFound();
  return <WebsiteLayout lang={lang}>{children}</WebsiteLayout>;
}
