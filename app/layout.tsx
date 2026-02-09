import type { Metadata } from "next";
import "./globals.css";

import type { Metadata } from "next";
import "./globals.css";

eexport const metadata: Metadata = {
  title: "LEVONDOR",
  description: "Sağlıklı ve uzun yaşam için akıllı teknolojiler.",
  icons: {
    icon: "/levondor.ico",
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