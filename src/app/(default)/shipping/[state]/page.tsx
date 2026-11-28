import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllStateSlugs, getStateBySlug } from "@/data/us-states";
import { CA_PROVINCES, getCaProvinceBySlug } from "@/data/ca-provinces";
import { IS_CANADA } from "@/lib/region-config";
import { buildPageMetadata } from "@/lib/page-metadata";
import { StateShippingView } from "@/components/pages/StateShippingView";

export const dynamicParams = false;

export function generateStaticParams() {
  if (IS_CANADA) {
    return CA_PROVINCES.map((p) => ({ state: p.slug }));
  }
  return getAllStateSlugs().map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: slug } = await params;
  const location = IS_CANADA ? getCaProvinceBySlug(slug) : getStateBySlug(slug);
  if (!location) return {};

  const title = IS_CANADA
    ? `Evminov Spine Board Delivery in ${location.name}, Canada (CAD)`
    : `Evminov Spine Board Delivery in ${location.name} (${location.expressDays})`;

  const description = IS_CANADA
    ? `Insured Evminov Board delivery in CAD to ${location.majorCities.join(", ")} and all of ${location.name}, Canada via ${location.carrier}. Itemized receipt for Canadian Extended Health Benefits / HSA.`
    : `Fast insured Evminov board delivery to ${location.majorCities.join(", ")} and all of ${location.name} in ${location.expressDays} via ${location.carrier}. 16" stud kit & HSA/FSA receipt.`;

  return buildPageMetadata({
    path: `/shipping/${location.slug}/`,
    lang: "en",
    title,
    description,
    availableLocales: ["en"],
  });
}

export default async function StateShippingPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const location = IS_CANADA ? getCaProvinceBySlug(slug) : getStateBySlug(slug);
  if (!location) notFound();
  return <StateShippingView state={location} />;
}
