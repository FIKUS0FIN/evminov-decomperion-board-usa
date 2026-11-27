import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, NON_DEFAULT_LOCALES } from "@/i18n/types";
import { getAllProductSlugs, getProductBySlug } from "@/data/products";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ProductDetailView } from "@/components/pages/ProductDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.flatMap((lang) =>
    getAllProductSlugs().map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildPageMetadata({
    path: `/products/${product.slug}/`,
    lang,
    title: `${product.localizedNames[lang] || product.name} — $${product.directPriceUsd}`,
    description: product.subtitle,
    image: product.image,
    productPriceUsd: product.directPriceUsd,
  });
}

export default async function LocalizedProductDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailView product={product} lang={lang} />;
}
