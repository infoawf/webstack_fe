import type { Metadata } from "next";
import { ContactPage } from "@/components/webstack/ContactPage";

export const metadata: Metadata = {
  title: "Build Your Online Presence",
  description:
    "Tell WebStack about your business and we'll help you plan a website built to capture leads, take bookings, and accept payments. Start your project in minutes.",
  keywords: [
    "contact web designer",
    "hire web agency",
    "small business website quote",
    "booking website",
    "lead capture website",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Build Your Online Presence | WebStack",
    description: "Start a focused conversation about your website, booking and payment system.",
    type: "website",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WebStack",
    description: "Tell us about your business and we'll map the right website structure.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact WebStack",
  url: "/contact",
  mainEntity: {
    "@type": "Organization",
    name: "WebStack",
    email: "webstacklive@gmail.com",
  },
};

export default function ContactRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPage />
    </>
  );
}
