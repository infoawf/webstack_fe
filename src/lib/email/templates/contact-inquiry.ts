import { emailColors } from "../brand-colors";

export type ContactInquiryData = {
  name: string;
  email: string;
  phone: string;
  description: string;
  subject: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactInquiryHtml(data: ContactInquiryData): string {
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const subject = escapeHtml(data.subject);
  const description = escapeHtml(data.description);

  const { inkDeep, skyAccent, ink, inkMuted, surface, skySoft, border } = emailColors;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${surface};border-radius:16px;overflow:hidden;border:1px solid ${border};box-shadow:0 4px 24px rgba(2,8,23,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:${inkDeep};padding:28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <span style="display:inline-block;font-size:20px;font-weight:700;color:${surface};letter-spacing:-0.02em;">
                      Web<span style="color:${skyAccent};">Stack</span>
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,${skyAccent},#60A5FA);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:${ink};letter-spacing:-0.02em;">
                New Contact Inquiry
              </h1>
              <p style="margin:0 0 28px;font-size:14px;color:${inkMuted};line-height:1.5;">
                A visitor submitted the contact form on your website.
              </p>

              <!-- From -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="90" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:${inkMuted};vertical-align:top;padding-top:2px;">From</td>
                  <td style="font-size:15px;font-weight:600;color:${ink};">${name}</td>
                </tr>
              </table>

              <!-- Email -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="90" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:${inkMuted};vertical-align:top;padding-top:2px;">Email</td>
                  <td style="font-size:15px;">
                    <a href="mailto:${email}" style="color:${skyAccent};text-decoration:none;font-weight:500;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Phone -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="90" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:${inkMuted};vertical-align:top;padding-top:2px;">Phone</td>
                  <td style="font-size:15px;color:${ink};">${phone}</td>
                </tr>
              </table>

              <!-- Subject -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td width="90" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:${inkMuted};vertical-align:top;padding-top:2px;">Subject</td>
                  <td style="font-size:15px;color:${ink};">${subject}</td>
                </tr>
              </table>

              <!-- Message -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="90" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:${inkMuted};vertical-align:top;padding-top:12px;">Message</td>
                  <td style="padding:12px 16px;background-color:${skySoft};border-radius:12px;border:1px solid #DBEAFE;">
                    <p style="margin:0;font-size:15px;color:${ink};line-height:1.6;white-space:pre-wrap;">${description}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid ${border};background-color:#F8FAFC;">
              <p style="margin:0;font-size:12px;color:${inkMuted};line-height:1.5;">
                Received ${timestamp}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
