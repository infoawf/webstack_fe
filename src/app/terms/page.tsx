import type { Metadata } from "next";
import { TermsPage } from "@/components/webstack/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms for WebStack's one-time $500 business website development service, including mockup, delivery, and revisions.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | WebStack",
    description: "Terms for WebStack's one-time business website development service.",
    type: "website",
    url: "/terms",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | WebStack",
    description: "Terms for WebStack's one-time business website development service.",
  },
};

export default function TermsRoute() {
  return <TermsPage />;
}
