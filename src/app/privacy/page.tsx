import type { Metadata } from "next";
import { PrivacyPage } from "@/components/webstack/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how WebStack collects, uses, and protects your information when you contact us about a one-time business website.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | WebStack",
    description: "How WebStack handles your information when you inquire about a website project.",
    type: "website",
    url: "/privacy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | WebStack",
    description: "How WebStack handles your information when you inquire about a website project.",
  },
};

export default function PrivacyRoute() {
  return <PrivacyPage />;
}
