import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Current Pricing",
  description:
    "Request current pricing from Kansas Architectural Metals for architectural sheet metal, roof panels, wall and soffit panels, ACM, gutters, coping, fascia, accessories, and custom fabrication.",

  alternates: {
    canonical: "/request-pricing",
  },

  openGraph: {
    title: "Request Current Pricing | Kansas Architectural Metals",
    description:
      "Ask Kansas Architectural Metals for current material and fabrication pricing based on your project needs.",
    url: "/request-pricing",
  },
};

export default function RequestPricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}