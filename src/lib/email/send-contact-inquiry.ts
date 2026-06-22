import { Resend } from "resend";
import { buildContactInquiryHtml } from "./templates/contact-inquiry";

export type ContactInquiryInput = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export async function sendContactInquiry(input: ContactInquiryInput): Promise<void> {
  const apiKey = getRequiredEnv("RESEND_API_KEY");
  const toEmail = getRequiredEnv("CONTACT_TO_EMAIL");
  const fromEmail = getRequiredEnv("CONTACT_FROM_EMAIL");

  const subject = `New inquiry from ${input.name}`;
  const html = buildContactInquiryHtml({ ...input, subject });

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `WebStack Contact <${fromEmail}>`,
    to: [toEmail],
    replyTo: input.email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
