import { NextRequest, NextResponse } from "next/server";
import { fetchMonthAvailability } from "@/lib/booking/availability-service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!start || !end) {
      return NextResponse.json(
        { message: "Missing required query params: start, end" },
        { status: 400 },
      );
    }

    const availability = await fetchMonthAvailability(start, end);

    return NextResponse.json(availability, {
      headers: {
        "Cache-Control": "private, max-age=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch availability";
    return NextResponse.json({ message }, { status: 500 });
  }
}
