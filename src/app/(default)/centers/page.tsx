import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { CentersHeritageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/centers/",
  lang: "en",
  title: "Evminov Heritage Since 1996, Patents & Global Centers",
  description:
    "Discover Vyacheslav Evminov's story, international patents (US 6,869,387 B2, EP 1 038 512 B1), Glendale CA operations hub, and historic Kyiv center.",
});

export default function CentersPage() {
  return <CentersHeritageView lang="en" />;
}
