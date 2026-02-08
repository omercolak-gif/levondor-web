import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "LEVONDOR",
    template: "%s | LEVONDOR",
  },
  description:
    "LEVONDOR, sağlıklı ve uzun yaşam için akıllı teknolojiler geliştirir. WellBalance; supplement takibi ve öneri sistemi odağında ilk ürünümüzdür.",
  metadataBase: new URL("https://levondor.com"),
  alternates: { canonical: "https://levondor.com" },
  openGraph: {
    type: "website",
    url: "https://levondor.com",
    title: "LEVONDOR",
    description:
      "Sağlıklı ve uzun yaşam için akıllı teknolojiler. WellBalance: supplement takibi ve öneri sistemi.",
    siteName: "LEVONDOR",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "LEVONDOR" },
    ],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEVONDOR",
    description:
      "Sağlıklı ve uzun yaşam için akıllı teknolojiler. WellBalance: supplement takibi ve öneri sistemi.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
