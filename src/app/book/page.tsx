import type { Metadata } from "next";
import { BookNowPage } from "@/components/booking/BookNowPage";
import { fetchMonthAvailability } from "@/lib/booking/availability-service";
import { getPublicBookingConfig } from "@/lib/booking/config";
import { getMonthRange } from "@/lib/booking/queries/availability";
import type { MonthAvailabilityMap } from "@/types/scheduling";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Schedule a meeting with WebStack.",
  alternates: { canonical: "/book" },
};

export default async function BookRoute() {
  const config = getPublicBookingConfig();
  const now = new Date();
  const prefetchMonth = { year: now.getFullYear(), month: now.getMonth() };
  const { start, end } = getMonthRange(prefetchMonth.year, prefetchMonth.month);

  let initialMonthAvailability: MonthAvailabilityMap = {};
  try {
    initialMonthAvailability = await fetchMonthAvailability(start, end);
  } catch {
    // Client will fetch on mount if prefetch fails
  }

  return (
    <BookNowPage
      hostName={config.name}
      meetingDuration={config.meetingDuration}
      timezone={config.timezone}
      initialMonthAvailability={initialMonthAvailability}
      prefetchMonth={prefetchMonth}
    />
  );
}
