import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllStateSlugs, getStateBySlug } from "@/data/us-states";
import { buildPageMetadata } from "@/lib/page-metadata";
import { StateShippingView } from "@/components/pages/StateShippingView";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllStateSlugs().map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  return buildPageMetadata({
    path: `/shipping/${state.slug}/`,
    lang: "en",
    title: `Evminov Spine Board Delivery in ${state.name} (${state.expressDays})`,
    description: `Fast insured Evminov board delivery to ${state.majorCities.join(", ")} and all of ${state.name} in ${state.expressDays} via ${state.carrier}. 16" stud kit & HSA/FSA receipt.`,
    availableLocales: ["en"],
  });
}

export default async function StateShippingPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();
  return <StateShippingView state={state} />;
}
