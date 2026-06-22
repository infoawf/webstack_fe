"use server";

import { z } from "zod";
import { sendContactInquiry } from "@/lib/email/send-contact-inquiry";

const contactInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(254),
  phone: z.string().trim().min(1, "Phone number is required").max(30),
  description: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters in your message")
    .max(5000),
});

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactInquiry(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const parsed = contactInquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    description: formData.get("description"),
  });

  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Please check your form and try again.";
    return { status: "error", message: firstError };
  }

  try {
    await sendContactInquiry(parsed.data);
    return { status: "success" };
  } catch (err) {
    console.error("[contact] Failed to send inquiry email:", err);
    return {
      status: "error",
      message: "We couldn't send your inquiry right now. Please try again or email us directly.",
    };
  }
}
