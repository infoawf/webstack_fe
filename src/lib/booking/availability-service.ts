import "server-only";
import { formatDateKey } from "@/lib/booking/calendar-utils";
import { getOrFetchBusyForRange } from "@/lib/booking/busy-fetch";
import { findCachedBusyForDate } from "@/lib/booking/busy-cache";
import { getScheduleConfig } from "@/lib/booking/config";
import { buildMonthAvailability, generateSlotsForDay } from "@/lib/booking/google-calendar";
import type { DaySlots, MonthAvailabilityMap } from "@/types/scheduling";

function monthRangeForDate(dateKey: string) {
  const [year, month] = dateKey.split("-").map(Number);
  const start = formatDateKey(new Date(year, month - 1, 1));
  const end = formatDateKey(new Date(year, month, 0));
  return { start, end };
}

export async function fetchMonthAvailability(
  start: string,
  end: string,
): Promise<MonthAvailabilityMap> {
  const config = getScheduleConfig();
  const busy = await getOrFetchBusyForRange(config, start, end);
  return buildMonthAvailability(config, start, end, busy);
}

export async function fetchDaySlots(dateKey: string): Promise<DaySlots> {
  const config = getScheduleConfig();

  let busy = findCachedBusyForDate(dateKey);
  if (!busy) {
    const { start, end } = monthRangeForDate(dateKey);
    busy = await getOrFetchBusyForRange(config, start, end);
  }

  return generateSlotsForDay(dateKey, config, busy);
}
