import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { WelcomePageView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/welcome/",
  lang: "en",
  title: "Owner Setup Guide, Mounting Video & Review Hub",
  description:
    "Watch the official 16-inch US wood stud mounting video and starter exercise guide for your Evminov Spine Decompression Board.",
});

export default function WelcomePage() {
  return <WelcomePageView />;
}
