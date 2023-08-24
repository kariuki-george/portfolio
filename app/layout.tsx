import "./globals.css";
import { Metadata } from "next";
import React from "react";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

import { Analytics } from "@vercel/analytics/react";

import dynamic from "next/dynamic";

const CommandBar = dynamic(() => import("@/components/kbar"), { ssr: false });

export const metadata: Metadata = {
  title: {
    default: "Kariuki George",
    template: `%s - ${"Kariuki George"}`,
  },
  description: "This is the portfolio for Kariuki George Thuo.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          suppressHydrationWarning={true}
          className={cn(
            "h-fit  min-h-screen bg-background font-sans antialiased ",
            fontSans.variable
          )}
        >
          <CommandBar>
            <>
              {children} <Toaster />
            </>
          </CommandBar>
          <Analytics />
        </body>
      </html>
    </>
  );
}
