import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from Kansas Architectural Metals for custom architectural sheet metal, roof panels, wall panels, ACM, flashings, gutters, and specialty fabrication.",

  alternates: {
    canonical: "/request-quote",
  },

  openGraph: {
    title: "Request a Quote | Kansas Architectural Metals",
    description:
      "Send project details, drawings, measurements and photos to Kansas Architectural Metals for current fabrication pricing.",
    url: "/request-quote",
  },
};

export default function RequestQuoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}