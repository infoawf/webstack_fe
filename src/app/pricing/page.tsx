import type { Metadata } from "next";
import { PricingPage } from "@/components/webstack/PricingPage";

export const metadata: Metadata = {
  title: "Simple One-Time Pricing",
  description:
    "Get a professional business website for $500. One-time payment with no monthly fees, complete setup, and everything you need to start getting customers online.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Simple One-Time Pricing | WebStack",
    description: "$500 one-time payment. No monthly fees. Complete website setup included.",
    url: "/pricing",
  },
};

export default function Page() {
  return <PricingPage />;
}
