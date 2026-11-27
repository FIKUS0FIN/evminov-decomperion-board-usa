import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ConditionsHubView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/conditions/",
  lang: "en",
  title: "Targeted Spine Wellness Programs by Goal",
  description:
    "Explore low-angle Evminov decompression routines for L4-S1 disc comfort, sciatica relief, heavy lifter recovery, tech-neck, and family posture.",
});

export default function ConditionsPage() {
  return <ConditionsHubView lang="en" />;
}
