import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit an Order",
  description:
    "Submit fabrication orders, drawings, sketches, photos and project files to Kansas Architectural Metals for custom architectural sheet metal fabrication.",

  alternates: {
    canonical: "/submit-order",
  },

  openGraph: {
    title: "Submit an Order | Kansas Architectural Metals",
    description:
      "Send fabrication orders, drawings and project files directly to Kansas Architectural Metals.",
    url: "/submit-order",
  },
};

export default function SubmitOrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}