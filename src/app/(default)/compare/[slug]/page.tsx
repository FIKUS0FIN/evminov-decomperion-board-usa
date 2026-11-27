import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllComparisonSlugs, getComparisonBySlug } from "@/data/comparisons";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ComparisonDetailView } from "@/components/pages/ComparisonDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};
  return buildPageMetadata({
    path: `/compare/${comparison.slug}/`,
    lang: "en",
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    image: comparison.heroImage,
  });
}

export default async function ComparisonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();
  return <ComparisonDetailView comparison={comparison} lang="en" />;
}
