import type { Metadata } from "next";
import { ProductDetailsPage } from "@/components/webstack/ProductDetailsPage";

export const metadata: Metadata = {
  title: "Product Details",
  description:
    "See everything included with your WebStack website — pages, booking, payments, SEO, and what this service is not.",
  alternates: { canonical: "/product-details" },
  openGraph: {
    title: "Product Details | WebStack",
    description:
      "Everything you need to start getting customers online — and clear boundaries on what this service covers.",
    url: "/product-details",
  },
};

export default function Page() {
  return <ProductDetailsPage />;
}
