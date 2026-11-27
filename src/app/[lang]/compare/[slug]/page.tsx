import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getAllComparisonSlugs, getComparisonBySlug } from "@/data/comparisons";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ComparisonDetailView } from "@/components/pages/ComparisonDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.flatMap((lang) =>
    getAllComparisonSlugs().map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};
  return buildPageMetadata({
    path: `/compare/${comparison.slug}/`,
    lang,
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    image: comparison.heroImage,
  });
}

export default async function LocalizedComparisonDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();
  return <ComparisonDetailView comparison={comparison} lang={lang} />;
}
