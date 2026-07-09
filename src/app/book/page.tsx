import type { Metadata } from "next";
import { BookNowPage } from "@/components/booking/BookNowPage";
import { getPublicBookingConfig } from "@/lib/booking/config";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Schedule a meeting with WebStack.",
  alternates: { canonical: "/book" },
};

export default function BookRoute() {
  const config = getPublicBookingConfig();

  return (
    <BookNowPage
      hostName={config.name}
      meetingDuration={config.meetingDuration}
      timezone={config.timezone}
    />
  );
}
