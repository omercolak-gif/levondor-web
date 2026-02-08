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

export const metadata: Metadata = {
  title: "LEVONDOR",
  description:
    "Sağlıklı ve uzun yaşam için akıllı teknolojiler. Longevity, WellBalance, Sport ve Beauty çözümleri.",
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
