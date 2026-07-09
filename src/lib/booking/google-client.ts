import "server-only";
import { google } from "googleapis";

function getCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error("Missing GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, or GOOGLE_REDIRECT_URI");
  }

  return { clientId, clientSecret, redirectUri };
}

let cachedOAuth2: InstanceType<typeof google.auth.OAuth2> | null = null;
let cachedCalendar: ReturnType<typeof google.calendar> | null = null;
let cachedRefreshToken: string | null = null;

export function getOAuthClientForAuth() {
  const { clientId, clientSecret, redirectUri } = getCredentials();
  return new google.auth.OAuth2(clientId, clientSecret, redirectUri);
}

export function getOAuthClientForHost(refreshToken: string) {
  if (cachedOAuth2 && cachedRefreshToken === refreshToken) {
    return cachedOAuth2;
  }

  const oauth2 = getOAuthClientForAuth();
  oauth2.setCredentials({ refresh_token: refreshToken });
  cachedOAuth2 = oauth2;
  cachedRefreshToken = refreshToken;
  cachedCalendar = null;
  return oauth2;
}

export function getCalendarForHost(refreshToken: string) {
  if (cachedCalendar && cachedRefreshToken === refreshToken) {
    return cachedCalendar;
  }

  cachedCalendar = google.calendar({ version: "v3", auth: getOAuthClientForHost(refreshToken) });
  return cachedCalendar;
}
