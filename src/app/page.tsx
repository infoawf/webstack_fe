import type { Metadata } from "next";
import { HomePage } from "@/components/webstack/HomePage";

const SITE_URL = "https://webstack-growth-engine.lovable.app/";

export const metadata: Metadata = {
  title: "Professional Business Website for $500",
  description:
    "Get a professional business website for $500. Live in 24–72 hours with booking, payments, WhatsApp, and AI-ready structure for service businesses. Free mockup before you pay.",
  keywords: [
    "professional business website",
    "$500 website",
    "service business website",
    "booking and payment website",
    "AI-ready website structure",
    "small business web design",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Professional Business Website for $500 | WebStack",
    description:
      "Fast, modern websites for service businesses, with booking, payments, WhatsApp, and AI-ready structure included. Free mockup before you pay. Live in 24–72 hours.",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Business Website for $500 | WebStack",
    description:
      "Professional websites for service businesses with booking, payments & AI-ready structure. Live in 24–72 hours.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WebStack Professional Business Website",
  description:
    "Professional business websites for service-based businesses with booking, payments, WhatsApp, and AI-ready structure. Live in 24–72 hours.",
  serviceType: "Web Design",
  offers: {
    "@type": "Offer",
    price: "500",
    priceCurrency: "USD",
    description: "One-time payment",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
