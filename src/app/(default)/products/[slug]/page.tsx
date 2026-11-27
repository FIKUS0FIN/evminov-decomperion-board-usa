import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProductSlugs, getProductBySlug } from "@/data/products";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ProductDetailView } from "@/components/pages/ProductDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildPageMetadata({
    path: `/products/${product.slug}/`,
    lang: "en",
    title: `${product.name} — $${product.directPriceUsd}`,
    description: product.subtitle,
    image: product.image,
    productPriceUsd: product.directPriceUsd,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailView product={product} lang="en" />;
}
