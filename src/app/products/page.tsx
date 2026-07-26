import type { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";

export const metadata: Metadata = {
  title: "Products | Master Prince",
  description:
    "Products built at M37 Labs and independently: RecruitPilot, SiteBOT, Slate, AutoDeskAI, CreatorConnect, BIU Chatbot, CruiseConnect, and more.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <ProductPageClient />;
}
