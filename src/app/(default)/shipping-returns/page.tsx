import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { LegalPageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/shipping-returns/",
  lang: "en",
  title: "Shipping Policy & 60-Day Risk-Free Home Trial",
  description: "Glendale CA 1-4 day express shipping across all 50 US states, global workshop delivery, and 60-day home trial return procedure.",
});

export default function ShippingReturnsPage() {
  return <LegalPageView type="shipping-returns" />;
}
