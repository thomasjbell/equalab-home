import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";



export const metadata: Metadata = {
  title: "EquaLab Home",
  description: "EquaLab Products Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
