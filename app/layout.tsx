import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

import StarsCanvas from "@/components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

const PopBold = localfont({
  src: [
    {
      path: "../public/fonts/PopBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-PopBold",
});

const PopReg = localfont({
  src: [
    {
      path: "../public/fonts/PopReg.ttf",
      weight: "100, 400, 700",
    },
  ],
  variable: "--font-PopReg",
});

export const metadata: Metadata = {
  title: "MJ | Portfolio",
  description: "Tambay to Riches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PopBold.variable} ${PopReg.variable}`}>
        {children}
        <StarsCanvas />
      </body>
    </html>
  );
}
