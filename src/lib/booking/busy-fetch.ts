import "server-only";
import type { BusyPeriod } from "@/lib/booking/busy-cache";
import { busyCacheKey, getCachedBusy, setCachedBusy } from "@/lib/booking/busy-cache";
import { fetchBusyPeriodsForRange } from "@/lib/booking/google-calendar";
import type { ScheduleConfig } from "@/types/schedule";

export async function getOrFetchBusyForRange(
  config: ScheduleConfig,
  start: string,
  end: string,
): Promise<BusyPeriod[]> {
  const key = busyCacheKey(start, end);
  const cached = getCachedBusy(key);
  if (cached) return cached;

  const busy = await fetchBusyPeriodsForRange(config, start, end);
  setCachedBusy(key, busy, start, end);
  return busy;
}
