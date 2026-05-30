import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://finaezer.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fi Naezer - Bloemen schilderijen",
  description: "Bloemen schilderijen en tekeningen",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fi Naezer - Bloemen schilderijen",
    description: "Bloemen schilderijen en tekeningen",
    url: "/",
    siteName: "Fi Naezer",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
          height: 630,
        alt: "Fi Naezer kunstwerk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fi Naezer - Bloemen schilderijen",
    description: "Bloemen schilderijen en tekeningen",
    images: ["/og-image.jpg"],
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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
