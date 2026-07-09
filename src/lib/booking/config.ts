import "server-only";
import { readFileSync } from "fs";
import { join } from "path";
import { z } from "zod";
import type { ScheduleConfig } from "@/types/schedule";

const bookingConfigSchema = z.object({
  name: z.string().min(1),
  timezone: z.string().min(1),
  meetingDuration: z.number().int().positive(),
  workingHoursStart: z.string().min(1),
  workingHoursEnd: z.string().min(1),
  availableDays: z.array(z.number().int().min(1).max(7)),
});

export type BookingConfig = z.infer<typeof bookingConfigSchema>;

function normalizeTime(time: string): string {
  if (/^\d{2}:\d{2}:\d{2}$/.test(time)) return time;
  if (/^\d{2}:\d{2}$/.test(time)) return `${time}:00`;
  return time;
}

let cachedConfig: BookingConfig | null = null;

export function getBookingConfig(): BookingConfig {
  if (cachedConfig) return cachedConfig;

  const configPath = join(process.cwd(), "booking-config.json");
  const raw = readFileSync(configPath, "utf8");
  cachedConfig = bookingConfigSchema.parse(JSON.parse(raw));
  return cachedConfig;
}

export function getScheduleConfig(): ScheduleConfig {
  const config = getBookingConfig();
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!refreshToken) {
    throw new Error("Missing GOOGLE_REFRESH_TOKEN environment variable");
  }

  return {
    hostName: config.name,
    timezone: config.timezone,
    meetingDurationMinutes: config.meetingDuration,
    workingHoursStart: normalizeTime(config.workingHoursStart),
    workingHoursEnd: normalizeTime(config.workingHoursEnd),
    availableDays: config.availableDays,
    calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
    refreshToken,
    meetingTitle: `${config.meetingDuration} Minute Meeting`,
  };
}

export function getPublicBookingConfig() {
  const config = getBookingConfig();
  return {
    name: config.name,
    timezone: config.timezone,
    meetingDuration: config.meetingDuration,
  };
}
