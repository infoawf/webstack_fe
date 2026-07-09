import { NextRequest, NextResponse } from "next/server";
import { getOAuthClientForAuth } from "@/lib/booking/google-client";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export async function GET() {
  const oauth2 = getOAuthClientForAuth();
  const authUrl = oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
    state: "refresh-token",
  });

  return NextResponse.redirect(authUrl);
}
