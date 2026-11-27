import "@/app/globals.css";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalOrigin),
  manifest: "/manifest.json",
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
