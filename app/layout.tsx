import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kansas Architectural Metals | Architectural Metals. Built by Pros.",
  description:
    "Custom architectural sheet metal fabrication, ACM, roof and wall panels, flashings, gutters, and specialty fabrication across Kansas.",
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