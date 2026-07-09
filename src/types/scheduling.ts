export interface MeetingDetails {
  host: string;
  title: string;
  duration: number;
  description: string;
  meetingType?: "video" | "phone" | "in-person";
}

export interface TimezoneOption {
  id: string;
  label: string;
  offset: string;
}

export interface MonthAvailabilityMap {
  [dateKey: string]: boolean;
}

export type DaySlots = string[];

export interface MeetingSchedulerProps {
  meeting: MeetingDetails;
  initialMonthAvailability?: MonthAvailabilityMap;
  prefetchMonth?: { year: number; month: number };
  defaultTimezone?: string;
  onDateSelect?: (date: Date) => void;
  onTimeSelect?: (date: Date, time: string) => void;
}
