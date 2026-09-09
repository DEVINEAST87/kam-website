import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.kansasarchmetals.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/test-blob",
        "/blob-upload-test",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}