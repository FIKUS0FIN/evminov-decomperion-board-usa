import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getAllConditionSlugs, getConditionBySlug } from "@/data/conditions";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ConditionDetailView } from "@/components/pages/ConditionDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.flatMap((lang) =>
    getAllConditionSlugs().map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};
  return buildPageMetadata({
    path: `/conditions/${condition.slug}/`,
    lang,
    title: condition.metaTitle,
    description: condition.metaDescription,
    image: condition.heroImage,
  });
}

export default async function LocalizedConditionDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();
  return <ConditionDetailView condition={condition} lang={lang} />;
}
