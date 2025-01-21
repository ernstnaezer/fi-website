// RootLayout.tsx
import "./globals.css";

export const metadata = {
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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
