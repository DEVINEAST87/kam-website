import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kam-website-flame.vercel.app"),

  title: {
    default:
      "Kansas Architectural Metals | Architectural Metals. Built by Pros.",
    template: "%s | Kansas Architectural Metals",
  },

  description:
    "Kansas Architectural Metals provides custom architectural sheet metal fabrication, ACM panels, roof and wall panels, flashings, gutters, specialty fabrication, and fast turnaround across Kansas.",

  keywords: [
    "Kansas Architectural Metals",
    "architectural sheet metal",
    "custom sheet metal fabrication",
    "metal fabrication Kansas",
    "ACM panels",
    "aluminum composite material",
    "roof panels",
    "wall panels",
    "metal flashings",
    "custom gutters",
    "sheet metal Wichita KS",
    "sheet metal Shawnee KS",
    "sheet metal Topeka KS",
    "PAC-CLAD",
    "Drexel Metals",
  ],

  authors: [
    {
      name: "Kansas Architectural Metals",
    },
  ],

  creator: "Kansas Architectural Metals",
  publisher: "Kansas Architectural Metals",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kansas Architectural Metals",
    title:
      "Kansas Architectural Metals | Architectural Metals. Built by Pros.",
    description:
      "Custom architectural sheet metal fabrication, ACM panels, roof and wall panels, flashings, gutters, specialty fabrication, and fast turnaround across Kansas.",
    images: [
      {
        url: "/images/hero-commercial.jpg",
        width: 1200,
        height: 630,
        alt: "Kansas Architectural Metals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kansas Architectural Metals | Architectural Metals. Built by Pros.",
    description:
      "Custom architectural sheet metal fabrication, ACM panels, roof and wall panels, flashings, gutters, specialty fabrication, and fast turnaround across Kansas.",
    images: ["/images/hero-commercial.jpg"],
  },

  category: "Construction",
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