import type { Metadata } from "next";
import "./globals.css";
import { bodyFont, displayFont } from "@/utils/fonts";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://finaezer.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fi Naezer — Schilderijen voor thuis",
  description: "Een echt schilderij voor de huiskamer of kinderkamer. Kies iets moois uit of laat Fi iets voor je maken. Met de hand geschilderd, met een duidelijke prijs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fi Naezer — Schilderijen voor thuis",
    description: "Iets eigens voor aan je muur. Ontdek de huiskamer- en kinderkamerschilderijen van Fi Naezer.",
    url: "/",
    siteName: "Fi Naezer",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-huiskamer-a61e81b94e.jpg",
        width: 1200,
        height: 630,
        alt: "Fi Naezer — een schilderij voor je huiskamer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fi Naezer — Schilderijen voor thuis",
    description: "Iets eigens voor aan je muur. Met de hand geschilderd voor de huiskamer en kinderkamer.",
    images: ["/og-huiskamer-a61e81b94e.jpg"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
