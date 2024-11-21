import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";
import React from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "My Docs",
  description: "My go-to collaborative editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
