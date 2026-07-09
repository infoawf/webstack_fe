export type LegalSection = { title: string; body: string[] };

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "July 9, 2026",
  intro:
    "This policy explains how WebStack collects and uses information when you visit our website or contact us about a website project.",
  sections: [
    {
      title: "Who we are",
      body: [
        "WebStack provides one-time website development for service-based businesses. If you have questions about this policy, contact us at info@webstack.live.",
      ],
    },
    {
      title: "What we collect",
      body: [
        "When you submit our contact form, we collect your name, email address, phone number, and the message you send us about your business or project.",
        "We do not require you to create an account to use this website.",
      ],
    },
    {
      title: "How we use your information",
      body: [
        "We use your contact details to respond to your inquiry, discuss your project, and send you a free website mockup if you request one.",
        "We do not sell your personal information or use it for unrelated marketing.",
      ],
    },
    {
      title: "How we store your information",
      body: [
        "Contact form submissions are sent to our email inbox through Resend, our email delivery provider. We do not store form submissions in a separate marketing database.",
        "We keep inquiry emails for as long as needed to manage our business correspondence.",
      ],
    },
    {
      title: "Third-party services",
      body: [
        "We use Resend to deliver contact form emails.",
        "We use Google Fonts to load the fonts used on this website.",
        "These providers may process limited technical data needed to provide their services.",
      ],
    },
    {
      title: "Cookies and local storage",
      body: [
        "This website stores your light or dark theme preference in your browser's local storage under the key ws-theme.",
        "We do not use analytics or advertising cookies on this website.",
      ],
    },
    {
      title: "Your choices",
      body: [
        "You can email info@webstack.live to ask what information we hold about you from a contact inquiry or to request that we delete it.",
        "You can clear your browser's local storage at any time to remove the saved theme preference.",
      ],
    },
    {
      title: "Changes to this policy",
      body: [
        "We may update this Privacy Policy from time to time. The date at the top of this page shows when it was last updated.",
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "July 9, 2026",
  intro:
    "These terms apply when you use the WebStack website or hire us to build a one-time business website.",
  sections: [
    {
      title: "The service",
      body: [
        "WebStack provides custom business website development as a one-time service for $500 USD.",
        "Our websites are designed for service-based businesses that need a professional online presence with lead capture, bookings, and payments.",
      ],
    },
    {
      title: "How it works",
      body: [
        "You request a free website mockup by sharing details about your business.",
        "We create the mockup for your review. No payment is required at this stage.",
        "After you approve the design, you pay the one-time fee and we build and launch your website within 24–72 hours.",
      ],
    },
    {
      title: "What's included",
      body: [
        "Up to 4 custom pages with mobile-responsive design.",
        "Contact form with email integration, WhatsApp click-to-chat, calendar booking integration, and payment gateway setup.",
        "Basic SEO and AI-ready structure, Google Maps integration, social media links, and domain and hosting setup assistance.",
        "Two revisions are included.",
      ],
    },
    {
      title: "What's not included",
      body: [
        "We do not build e-commerce stores, membership platforms, or large custom applications as part of the standard service.",
        "Any work outside the agreed scope will be quoted separately.",
      ],
    },
    {
      title: "Your responsibilities",
      body: [
        "You agree to provide accurate business information, content, and feedback in a timely manner so we can deliver your website.",
        "You are responsible for the accuracy of the content you provide for your website.",
      ],
    },
    {
      title: "Payment",
      body: [
        "The website fee is a one-time payment of $500 USD, due after you approve the mockup.",
        "There are no monthly fees or subscriptions charged by WebStack for the website build itself.",
      ],
    },
    {
      title: "Ownership",
      body: [
        "Once your website is delivered and paid for, you own the website and the content you provided.",
        "Third-party services integrated into your site, such as hosting, domains, or payment processors, remain subject to their own terms.",
      ],
    },
    {
      title: "Revisions",
      body: [
        "Two revisions are included in the standard package.",
        "Additional revisions or new features beyond the agreed scope may be quoted and billed separately.",
      ],
    },
    {
      title: "Refunds",
      body: [
        "The website mockup is provided free of charge before any payment.",
        "After payment is made and work on the final website begins, refunds are handled at our discretion based on the work completed.",
      ],
    },
    {
      title: "Limitation of liability",
      body: [
        "WebStack provides website development services on an as-is basis.",
        "To the fullest extent permitted by applicable law, our total liability for any claim related to our services is limited to the amount you paid for the website.",
      ],
    },
    {
      title: "Changes to these terms",
      body: [
        "We may update these Terms of Service from time to time. The date at the top of this page shows when they were last updated.",
        "Continued use of our website after changes are posted means you accept the updated terms.",
      ],
    },
    {
      title: "Contact",
      body: ["For questions about these terms or your project, email us at info@webstack.live."],
    },
  ],
};
