import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { CalculatorPageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/calculator/",
  lang: "en",
  title: "Biomechanical Spine Angle & Board Sizing Calculator",
  description:
    "Calculate your exact axial traction force, recommended starting angle (8°–35°), and optimal Evminov board size based on weight, height, and goal.",
});

export default function CalculatorPage() {
  return <CalculatorPageView lang="en" />;
}
