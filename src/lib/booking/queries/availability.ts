import { formatDateKey } from "@/lib/booking/calendar-utils";
import type { DaySlots, MonthAvailabilityMap } from "@/types/scheduling";

export function monthAvailabilityQueryKey(year: number, month: number) {
  return ["month-availability", year, month] as const;
}

export function daySlotsQueryKey(dateKey: string) {
  return ["day-slots", dateKey] as const;
}

export function getMonthRange(year: number, month: number) {
  const start = formatDateKey(new Date(year, month, 1));
  const end = formatDateKey(new Date(year, month + 1, 0));
  return { start, end };
}

export async function fetchMonthAvailabilityClient(
  year: number,
  month: number,
): Promise<MonthAvailabilityMap> {
  const { start, end } = getMonthRange(year, month);
  const res = await fetch(`/api/availability/month?start=${start}&end=${end}`);

  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(err.message ?? "Failed to load availability");
  }

  return res.json() as Promise<MonthAvailabilityMap>;
}

export async function fetchDaySlotsClient(dateKey: string): Promise<DaySlots> {
  const res = await fetch(`/api/availability/day?date=${dateKey}`);

  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(err.message ?? "Failed to load time slots");
  }

  return res.json() as Promise<DaySlots>;
}
