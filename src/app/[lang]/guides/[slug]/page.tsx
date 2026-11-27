import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getAllGuideSlugs, getGuideBySlug } from "@/data/guides";
import { buildPageMetadata } from "@/lib/page-metadata";
import { GuideDetailView } from "@/components/pages/GuideDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.flatMap((lang) =>
    getAllGuideSlugs().map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildPageMetadata({
    path: `/guides/${guide.slug}/`,
    lang,
    title: guide.metaTitle,
    description: guide.metaDescription,
    image: guide.heroImage,
  });
}

export default async function LocalizedGuideDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuideDetailView guide={guide} lang={lang} />;
}
