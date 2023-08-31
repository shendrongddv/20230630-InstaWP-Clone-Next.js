import "./globals.css";
import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans as FontDisplay,
  Inter as FontBody,
} from "next/font/google";

import { cn } from "@/lib/utils";

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontBody = FontBody({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Instant WordPress Sandbox and Test Sites - InstaWP",
  description:
    "InstaWP is a 1-click WordPress sandbox launcher. Create new test WordPress sites in less than a second. Create from scratch or use a template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-body antialiased",
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
