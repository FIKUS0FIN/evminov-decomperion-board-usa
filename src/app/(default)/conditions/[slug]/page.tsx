import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllConditionSlugs, getConditionBySlug } from "@/data/conditions";
import { getLocalizedConditionMeta } from "@/i18n/content-meta";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ConditionDetailView } from "@/components/pages/ConditionDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllConditionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};
  const meta = getLocalizedConditionMeta(condition.slug, "en", {
    title: condition.metaTitle,
    description: condition.metaDescription,
  });
  return buildPageMetadata({
    path: `/conditions/${condition.slug}/`,
    lang: "en",
    title: meta.title,
    description: meta.description,
    image: condition.heroImage,
  });
}

export default async function ConditionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();
  return <ConditionDetailView condition={condition} lang="en" />;
}
