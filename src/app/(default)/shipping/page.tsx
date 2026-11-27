import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ShippingHubView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/shipping/",
  lang: "en",
  title: "US 50-State & Global Shipping Directory",
  description:
    "Check insured UPS/FedEx transit times from Glendale, California to all 50 US states, plus Canada, European Union, and Ukraine delivery timelines.",
});

export default function ShippingPage() {
  return <ShippingHubView lang="en" />;
}
