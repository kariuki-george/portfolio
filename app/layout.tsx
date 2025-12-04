import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import CommandBar from "../components/kbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kariuki George",
  description: "This is a portfolio for Kariuki George Thuo",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black-500 max-w-screen overflow-hidden`}
      >
        <CommandBar>{children}</CommandBar>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
