"use client";

import { useQuery } from "@tanstack/react-query";
import {
  availability as fallbackDaySlots,
  monthAvailability as fallbackMonthAvailability,
} from "@/constants/availability";
import {
  daySlotsQueryKey,
  fetchDaySlotsClient,
  fetchMonthAvailabilityClient,
  monthAvailabilityQueryKey,
} from "@/lib/booking/queries/availability";
import type { DaySlots, MonthAvailabilityMap } from "@/types/scheduling";

const STALE_TIME_MS = 300_000;

interface UseMonthAvailabilityOptions {
  year: number;
  month: number;
  initialMonthAvailability?: MonthAvailabilityMap;
  prefetchMonth?: { year: number; month: number };
}

export function useMonthAvailability({
  year,
  month,
  initialMonthAvailability,
  prefetchMonth,
}: UseMonthAvailabilityOptions) {
  const isPrefetchMonth = prefetchMonth?.year === year && prefetchMonth?.month === month;
  const hasInitialData = isPrefetchMonth && !!initialMonthAvailability;

  return useQuery({
    queryKey: monthAvailabilityQueryKey(year, month),
    queryFn: () => fetchMonthAvailabilityClient(year, month),
    staleTime: STALE_TIME_MS,
    gcTime: 10 * 60_000,
    refetchOnWindowFocus: false,
    refetchOnMount: !hasInitialData,
    initialData: hasInitialData ? initialMonthAvailability : undefined,
    placeholderData: (previous) => previous,
  });
}

export function useDaySlots(dateKey: string | null) {
  return useQuery({
    queryKey: daySlotsQueryKey(dateKey ?? ""),
    queryFn: () => fetchDaySlotsClient(dateKey!),
    enabled: !!dateKey,
    staleTime: STALE_TIME_MS,
    gcTime: 10 * 60_000,
    refetchOnWindowFocus: false,
  });
}

export function getMonthAvailabilityWithFallback(
  data: MonthAvailabilityMap | undefined,
  isError: boolean,
): { monthAvailability: MonthAvailabilityMap; usedFallback: boolean } {
  if (data) return { monthAvailability: data, usedFallback: false };
  if (isError) {
    return { monthAvailability: fallbackMonthAvailability, usedFallback: true };
  }
  return { monthAvailability: {}, usedFallback: false };
}

export function getDaySlotsWithFallback(
  data: DaySlots | undefined,
  isError: boolean,
  dateKey: string | null,
): { slots: DaySlots; usedFallback: boolean } {
  if (data) return { slots: data, usedFallback: false };
  if (isError && dateKey) {
    return { slots: fallbackDaySlots[dateKey] ?? [], usedFallback: true };
  }
  return { slots: [], usedFallback: false };
}
