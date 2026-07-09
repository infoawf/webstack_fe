"use client";

import { MeetingScheduler } from "@/components/booking/MeetingScheduler";
import type { MonthAvailabilityMap } from "@/types/scheduling";

interface BookNowPageProps {
  hostName: string;
  meetingDuration: number;
  timezone: string;
  initialMonthAvailability?: MonthAvailabilityMap;
  prefetchMonth?: { year: number; month: number };
}

export function BookNowPage({
  hostName,
  meetingDuration,
  timezone,
  initialMonthAvailability,
  prefetchMonth,
}: BookNowPageProps) {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-x-hidden px-3 pt-20 pb-4 sm:px-4 sm:pt-24">
      <MeetingScheduler
        meeting={{
          host: hostName,
          title: `${meetingDuration} Minute Meeting`,
          duration: meetingDuration,
          description: "Web conferencing details provided upon confirmation.",
          meetingType: "video",
        }}
        defaultTimezone={timezone}
        initialMonthAvailability={initialMonthAvailability}
        prefetchMonth={prefetchMonth}
      />
    </main>
  );
}
