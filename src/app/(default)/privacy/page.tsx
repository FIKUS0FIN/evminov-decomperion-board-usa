import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { LegalPageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/privacy/",
  lang: "en",
  title: "Privacy Policy (CCPA & GDPR)",
  description: "How Evminov Spine Systems protects customer data, handles cookies honestly under Consent Mode v2, and respects CCPA/GDPR rights.",
});

export default function PrivacyPage() {
  return <LegalPageView type="privacy" />;
}
