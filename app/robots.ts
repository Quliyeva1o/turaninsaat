import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/create", "/api/"],
    },
    sitemap: "https://www.turanprojects.az/sitemap.xml",
  };
}