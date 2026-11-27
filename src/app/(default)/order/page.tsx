import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { OrderPageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/order/",
  lang: "en",
  title: "Configure & Reserve Your Evminov Spine Board",
  description:
    "Choose your Evminov board model, wood finish, and Glendale CA express or direct delivery. Includes Glisson loop, 60-day trial, and HSA/FSA invoice.",
});

export default function OrderPage() {
  return <OrderPageView lang="en" />;
}
