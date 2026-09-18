import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kansasarchmetals.com"),

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

  verification: {
    google: "QvXSO620EFlDgiKMT8z-PV-J6ZFljBy-sy4ECEYxx2M",
  },

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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.kansasarchmetals.com/#organization",
      name: "Kansas Architectural Metals",
      url: "https://www.kansasarchmetals.com/",
      logo: "https://www.kansasarchmetals.com/logos/kam-logo-mark.jpg",
      description:
        "Kansas Architectural Metals provides architectural sheet metal fabrication, ACM panels, roof and wall panels, flashings, gutters, and specialty metal fabrication throughout Kansas.",
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.kansasarchmetals.com/#wichita",
      name: "Kansas Architectural Metals",
      url: "https://www.kansasarchmetals.com/",
      image: "https://www.kansasarchmetals.com/images/hero-commercial.jpg",

      parentOrganization: {
        "@id": "https://www.kansasarchmetals.com/#organization",
      },

      address: {
        "@type": "PostalAddress",
        streetAddress: "3121 W Pawnee St",
        addressLocality: "Wichita",
        addressRegion: "KS",
        postalCode: "67213",
        addressCountry: "US",
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "06:30",
          closes: "16:30",
        },
      ],

      areaServed: {
        "@type": "City",
        name: "Wichita",
      },
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.kansasarchmetals.com/#shawnee",
      name: "Kansas Architectural Metals",
      url: "https://www.kansasarchmetals.com/",
      image: "https://www.kansasarchmetals.com/images/hero-commercial.jpg",

      parentOrganization: {
        "@id": "https://www.kansasarchmetals.com/#organization",
      },

      address: {
        "@type": "PostalAddress",
        streetAddress: "6423 Vista Dr",
        addressLocality: "Shawnee",
        addressRegion: "KS",
        postalCode: "66218",
        addressCountry: "US",
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "06:30",
          closes: "16:30",
        },
      ],

      areaServed: [
        {
          "@type": "City",
          name: "Shawnee",
        },
        {
          "@type": "City",
          name: "Kansas City",
        },
      ],
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.kansasarchmetals.com/#topeka",
      name: "Kansas Architectural Metals",
      url: "https://www.kansasarchmetals.com/",
      image: "https://www.kansasarchmetals.com/images/hero-commercial.jpg",

      parentOrganization: {
        "@id": "https://www.kansasarchmetals.com/#organization",
      },

      address: {
        "@type": "PostalAddress",
        streetAddress: "417 SE 10th Ave",
        addressLocality: "Topeka",
        addressRegion: "KS",
        postalCode: "66607",
        addressCountry: "US",
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "06:30",
          closes: "16:30",
        },
      ],

      areaServed: {
        "@type": "City",
        name: "Topeka",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}