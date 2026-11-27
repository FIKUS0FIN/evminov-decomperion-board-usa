import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { CompareHubView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/compare/",
  lang: "en",
  title: "Evminov Board vs. Inversion Tables, Teeter & Clinics",
  description:
    "Side-by-side biomechanical, safety, space, and cost comparisons between the Evminov inclined spine board and inversion tables, foam stretchers, or clinic visits.",
});

export default function ComparePage() {
  return <CompareHubView lang="en" />;
}
