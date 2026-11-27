import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { LegalPageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/wellness-disclaimer/",
  lang: "en",
  title: "General Wellness Equipment & Safety Disclaimer",
  description: "HTS 9506.91.0030 general wellness classification, HSA/FSA LMN guidance, and spine exercise contraindications.",
});

export default function WellnessDisclaimerPage() {
  return <LegalPageView type="wellness-disclaimer" />;
}
