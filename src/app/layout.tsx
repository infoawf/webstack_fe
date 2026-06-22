import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-family",
  weight: ["400", "500", "600", "700"],
});

const themeBootScript = `(function(){try{var s=localStorage.getItem('ws-theme');var d=s==='dark';var r=document.documentElement;if(d){r.classList.add('dark');r.style.colorScheme='dark';}else{r.style.colorScheme='light';}}catch(e){}})();`;

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c79f9c99-38b7-4bac-b7ae-d680c6bcdc3c/id-preview-adf46fba--9a4a10c9-a557-4b38-aef0-84b17dee1691.lovable.app-1781708380629.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://webstack-growth-engine.lovable.app"),
  title: {
    default: "WebStack",
    template: "%s | WebStack",
  },
  description:
    "WebStack builds conversion-focused websites for UK/USA solopreneurs and local businesses.",
  authors: [{ name: "Lovable" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "WebStack",
    description:
      "WebStack builds conversion-focused websites for UK/USA solopreneurs and local businesses.",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "WebStack",
    description:
      "WebStack builds conversion-focused websites for UK/USA solopreneurs and local businesses.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
