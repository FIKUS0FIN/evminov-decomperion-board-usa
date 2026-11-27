import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ProductsHubView } from "@/components/pages/HubViews";

export const metadata: Metadata = buildPageMetadata({
  path: "/products/",
  lang: "en",
  title: "Evminov Spine Decompression Boards & Accessories",
  description:
    "Compare all 5 handcrafted Evminov spine boards (Standard Pine, 2-Piece Folding, 3-Piece Travel, Wide 330 lb, Select Alder) and the no-drill Free-Standing Stand.",
});

export default function ProductsPage() {
  return <ProductsHubView lang="en" />;
}
