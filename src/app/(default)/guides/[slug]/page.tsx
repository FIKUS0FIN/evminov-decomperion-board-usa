import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGuideSlugs, getGuideBySlug } from "@/data/guides";
import { getLocalizedGuideMeta } from "@/i18n/content-meta";
import { buildPageMetadata } from "@/lib/page-metadata";
import { GuideDetailView } from "@/components/pages/GuideDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  const meta = getLocalizedGuideMeta(guide.slug, "en", {
    title: guide.metaTitle,
    description: guide.metaDescription,
  });
  return buildPageMetadata({
    path: `/guides/${guide.slug}/`,
    lang: "en",
    title: meta.title,
    description: meta.description,
    image: guide.heroImage,
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuideDetailView guide={guide} lang="en" />;
}
