import { MetadataRoute } from "next";

const BASE_URL = "https://www.turanprojects.az";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}