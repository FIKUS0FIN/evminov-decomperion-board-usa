import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { GuidesHubView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/guides/",
  lang: "en",
  title: "Spine Decompression & Biomechanics Guides",
  description:
    "Evidence-informed guides on inversion table safety, lumbar disc biomechanics, athletic barbell recovery, 16-inch US stud wall mounting, and HSA/FSA.",
});

export default function GuidesPage() {
  return <GuidesHubView lang="en" />;
}
