"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function GenerateRefreshTokenContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const error = searchParams.get("error");

  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-lg flex-col justify-center px-4 pt-24">
      <div className="rounded-2xl border border-ink/10 bg-surface p-8 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-ink">Google Calendar Setup</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Generate a refresh token once and add it to your <code className="text-xs">.env</code>{" "}
          file. You can delete this page after setup.
        </p>

        <div className="mt-6 space-y-3 text-sm text-ink-muted">
          <p className="font-medium text-ink">Before you start:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Enable the Google Calendar API in Google Cloud Console</li>
            <li>Create an OAuth 2.0 Web Client</li>
            <li>
              Add <code className="text-xs">GOOGLE_REDIRECT_URI</code> as an authorized redirect URI
            </li>
            <li>
              Set <code className="text-xs">GOOGLE_CLIENT_ID</code> and{" "}
              <code className="text-xs">GOOGLE_CLIENT_SECRET</code> in your{" "}
              <code className="text-xs">.env</code>
            </li>
          </ol>
        </div>

        {error && (
          <div
            className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            role="alert"
          >
            {error}
          </div>
        )}

        {token ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm font-medium text-ink">
              Copy this refresh token into your <code className="text-xs">.env</code> file:
            </p>
            <pre className="overflow-x-auto rounded-lg bg-ink-deep p-4 text-xs text-white">
              GOOGLE_REFRESH_TOKEN={token}
            </pre>
            <p className="text-xs text-ink-muted">
              Restart your dev server after updating <code className="text-xs">.env</code>.
            </p>
          </div>
        ) : (
          <Link
            href="/api/auth/google/start"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ink-deep px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Connect Google Calendar
          </Link>
        )}
      </div>
    </main>
  );
}

export default function GenerateRefreshTokenPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24" />}>
      <GenerateRefreshTokenContent />
    </Suspense>
  );
}
