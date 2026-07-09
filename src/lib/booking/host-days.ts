export function isDayAvailable(weekday: number, availableDays: number[]): boolean {
  return availableDays.includes(weekday);
}
