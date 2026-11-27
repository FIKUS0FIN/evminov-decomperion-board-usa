import type { Metadata } from "next";
import {
  getSharedMetadata,
  sharedViewport,
  WebsiteLayout,
} from "@/components/layout/WebsiteLayout";

export const viewport = sharedViewport;

export function generateMetadata(): Metadata {
  return getSharedMetadata("en");
}

export default function DefaultLocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WebsiteLayout lang="en">{children}</WebsiteLayout>;
}
