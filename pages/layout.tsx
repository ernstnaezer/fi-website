// RootLayout.tsx
import Head from "next/head";

const metadata = {
  title: "Fi Naezer - Bloemen schilderijen",
  description: "Bloemen schilderijen en tekeningen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
