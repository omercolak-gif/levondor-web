import type { Metadata } from "next";
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

import type { Metadata } from "next";

export const metadata = {
  title: {
    default: "LEVONDOR",
    template: "%s | LEVONDOR",
  },
  description:
    "LEVONDOR, sağlıklı ve uzun yaşam için akıllı teknolojiler geliştirir. WellBalance, Longevity, Sport ve Beauty çözümleri.",
  applicationName: "LEVONDOR",
  keywords: [
    "longevity",
    "sağlıklı yaşam",
    "akıllı teknolojiler",
    "supplement takip",
    "wellbalance",
    "performans",
    "estetik",
  ],
  authors: [{ name: "LEVONDOR" }],
  creator: "LEVONDOR",
  publisher: "LEVONDOR",
  metadataBase: new URL("https://levondor.com"),
  alternates: {
    canonical: "https://levondor.com",
  },
  openGraph: {
    type: "website",
    url: "https://levondor.com",
    title: "LEVONDOR",
    description:
      "Sağlıklı ve uzun yaşam için akıllı teknolojiler. WellBalance ilk ürünümüzdür.",
    siteName: "LEVONDOR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LEVONDOR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEVONDOR",
    description:
      "Sağlıklı ve uzun yaşam için akıllı teknolojiler. WellBalance ilk ürünümüzdür.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
  <html lang="tr">
    <body
      className={`${geistSans.variable} ${geistMono.variable} bg-[#0b1026] text-white`}
    >
      <Navbar />
      {children}
    </body>
  </html>
);
}
