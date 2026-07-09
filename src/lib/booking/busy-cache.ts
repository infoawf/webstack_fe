import "server-only";

export interface BusyPeriod {
  start: number;
  end: number;
}

const TTL_MS = 60_000;

interface BusyCacheEntry {
  busy: BusyPeriod[];
  rangeStart: string;
  rangeEnd: string;
  expires: number;
}

const cache = new Map<string, BusyCacheEntry>();

export function busyCacheKey(start: string, end: string): string {
  return `${start}:${end}`;
}

export function getCachedBusy(key: string): BusyPeriod[] | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    cache.delete(key);
    return null;
  }
  return entry.busy;
}

export function setCachedBusy(
  key: string,
  busy: BusyPeriod[],
  rangeStart: string,
  rangeEnd: string,
): void {
  cache.set(key, { busy, rangeStart, rangeEnd, expires: Date.now() + TTL_MS });
}

export function findCachedBusyForDate(dateKey: string): BusyPeriod[] | null {
  for (const [, entry] of cache) {
    if (Date.now() > entry.expires) continue;
    if (dateKey >= entry.rangeStart && dateKey <= entry.rangeEnd) {
      return entry.busy;
    }
  }

  return null;
}
