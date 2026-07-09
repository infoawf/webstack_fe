import { NextRequest, NextResponse } from "next/server";
import { getOAuthClientForAuth } from "@/lib/booking/google-client";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error) {
    return NextResponse.redirect(
      new URL(`/generate-refresh-token?error=${encodeURIComponent(error)}`, request.url),
    );
  }

  if (!code) {
    return NextResponse.json({ message: "Missing authorization code" }, { status: 400 });
  }

  try {
    const oauth2 = getOAuthClientForAuth();
    const { tokens } = await oauth2.getToken(code);

    if (!tokens.refresh_token) {
      return NextResponse.redirect(
        new URL(
          `/generate-refresh-token?error=${encodeURIComponent(
            "No refresh token received. Revoke app access in Google Account settings and try again.",
          )}`,
          request.url,
        ),
      );
    }

    return NextResponse.redirect(
      new URL(
        `/generate-refresh-token?token=${encodeURIComponent(tokens.refresh_token)}`,
        request.url,
      ),
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "OAuth callback failed";
    return NextResponse.redirect(
      new URL(`/generate-refresh-token?error=${encodeURIComponent(message)}`, request.url),
    );
  }
}
