import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllConditionSlugs, getConditionBySlug } from "@/data/conditions";
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
  return buildPageMetadata({
    path: `/conditions/${condition.slug}/`,
    lang: "en",
    title: condition.metaTitle,
    description: condition.metaDescription,
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
