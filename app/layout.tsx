import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Insights } from "./insights";

import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jashwanth Sai | Portfolio",
  description: "Portfolio of Jashwanth Sai Tandamalla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Insights />
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Jashwanth Sai Tandamalla. All
            rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
