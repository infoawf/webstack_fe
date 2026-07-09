export interface ScheduleConfig {
  hostName: string;
  timezone: string;
  meetingDurationMinutes: number;
  workingHoursStart: string;
  workingHoursEnd: string;
  availableDays: number[];
  calendarId: string;
  refreshToken: string;
  meetingTitle?: string;
}
