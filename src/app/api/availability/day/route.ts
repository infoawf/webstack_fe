import { NextRequest, NextResponse } from "next/server";
import { fetchDaySlots } from "@/lib/booking/availability-service";

export async function GET(request: NextRequest) {
  try {
    const date = request.nextUrl.searchParams.get("date");

    if (!date) {
      return NextResponse.json({ message: "Missing required query param: date" }, { status: 400 });
    }

    const slots = await fetchDaySlots(date);

    return NextResponse.json(slots, {
      headers: {
        "Cache-Control": "private, max-age=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch time slots";
    return NextResponse.json({ message }, { status: 500 });
  }
}
