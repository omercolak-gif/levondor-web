import type { Metadata } from "next";
import "./globals.css";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEVONDOR",
  description: "Sağlıklı ve uzun yaşam için akıllı teknolojiler.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}