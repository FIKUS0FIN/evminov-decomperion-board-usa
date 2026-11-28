import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { LegalPageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/terms/",
  lang: "en",
  title: "Terms of Service & 1-Year Frame Warranty",
  description: "Evminov Spine Systems ordering terms, pricing clarity, 1-year timber frame warranty, and patent rights.",
});

export default function TermsPage() {
  return <LegalPageView type="terms" />;
}
