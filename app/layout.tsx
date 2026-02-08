import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "LEVONDOR",
    template: "%s | LEVONDOR",
  },
  description:
    "LEVONDOR, sağlıklı ve uzun yaşam için akıllı teknolojiler geliştirir. WellBalance; supplement takibi ve öneri sistemi odağında ilk ürünümüzdür.",
  applicationName: "LEVONDOR",
  keywords: [
    "longevity",
    "sağlıklı yaşam",
    "akıllı teknolojiler",
    "supplement takibi",
    "wellbalance",
    "performans",
    "estetik",
    "rehabilitasyon",
  ],
  authors: [{ name: "LEVONDOR" }],
  metadataBase: new URL("https://levondor.com"),
  alternates: {
    canonical: "https://levondor.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://levondor.com",
    title: "LEVONDOR",
    description:
      "Sağlıklı ve uzun yaşam için akıllı teknolojiler. WellBalance: supplement takibi ve öneri sistemi.",
    siteName: "LEVONDOR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LEVONDOR",
      },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}