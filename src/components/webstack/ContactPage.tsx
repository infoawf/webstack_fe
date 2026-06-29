"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Check, Mail } from "lucide-react";
import { toast } from "sonner";
import { Footer } from "@/components/webstack/sections";
import { Reveal } from "@/components/webstack/Reveal";
import { Toaster } from "@/components/ui/sonner";
import { submitContactInquiry, type ContactActionState } from "@/app/actions/contact";

const SUPPORTING = [
  "Conversion-focused website structure",
  "Lead capture and contact forms",
  "Booking and payment-ready setup",
  "Clean, professional brand presentation",
  "Built to support future growth",
];

const inputClass =
  "w-full rounded-xl bg-surface border border-ink/15 px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-sky-accent focus:ring-4 focus:ring-sky-accent/10 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-ink-muted mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-deep px-7 py-3.5 font-semibold text-white hover:bg-ink-deep transition-colors shadow-[0_14px_40px_-12px_rgba(2,8,23,0.45)] disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Inquiry"}
      {!pending && <ArrowRight className="size-4" />}
    </button>
  );
}

const initialState: ContactActionState = { status: "idle" };

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContactInquiry, initialState);

  useEffect(() => {
    if (state.status === "success") {
      toast.success("Inquiry submitted", {
        description: "We'll get back to you within 1 business day.",
      });
      formRef.current?.reset();
    } else if (state.status === "error" && state.message) {
      toast.error("Could not send inquiry", { description: state.message });
    }
  }, [state]);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col overflow-x-clip">
      <Toaster />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-24 min-w-0">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6">
          <div className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 min-w-0">
            <Reveal className="lg:col-span-5 min-w-0">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-ink-deep text-white p-5 sm:p-8 md:p-10 relative overflow-hidden min-w-0">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-sky-accent/30 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 size-56 rounded-full bg-sky-accent/15 blur-3xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono uppercase tracking-[0.18em] text-white/80">
                    <span className="size-1.5 rounded-full bg-accent-emerald" />
                    WebStack
                  </div>

                  <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold leading-[1.1]">
                    Let&apos;s Build Your Online Presence
                  </h2>

                  <p className="mt-5 text-white/70 leading-relaxed">
                    WebStack helps solopreneurs and service-based businesses create websites that do
                    more than look good. We build online systems that help businesses capture leads,
                    take bookings, accept payments, and guide visitors toward becoming customers.
                  </p>

                  <ul className="mt-8 space-y-3.5">
                    {SUPPORTING.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="mt-0.5 size-5 rounded-full bg-sky-accent/15 border border-sky-accent/30 grid place-items-center shrink-0">
                          <Check className="size-3 text-sky-accent" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-white/90 leading-snug">{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-3">
                    <span className="size-10 rounded-xl bg-white/5 grid place-items-center shrink-0">
                      <Mail className="size-4 text-sky-accent" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                        Email
                      </div>
                      <a
                        href="mailto:info@webstack.live"
                        className="text-sm font-medium hover:text-sky-accent transition-colors"
                      >
                        info@webstack.live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 min-w-0" delay={0.1}>
              <form
                ref={formRef}
                action={formAction}
                className="rounded-2xl sm:rounded-3xl bg-surface border border-ink/10 p-5 sm:p-8 md:p-10 shadow-[0_24px_60px_-30px_rgba(2,8,23,0.18)] grid gap-5 min-w-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Name">
                    <input required name="name" placeholder="Jane Smith" className={inputClass} />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@business.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Contact Number">
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000 0000"
                    className={inputClass}
                  />
                </Field>

                <Field label="Description">
                  <textarea
                    required
                    name="description"
                    rows={6}
                    placeholder="Tell us about your business, your customers, and what you'd like your website to do."
                    className={inputClass}
                  />
                </Field>

                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-ink-muted">
                    We typically reply within 1 business day.
                  </p>
                  <SubmitButton />
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
