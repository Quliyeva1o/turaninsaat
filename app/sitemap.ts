import { MetadataRoute } from "next";
import { projects } from "@/components/home/ourProjects/projes";
import { servicesContent } from "@/utils";

const BASE_URL = "https://www.turanprojects.az";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "weekly", // dəyişdik
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.55,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));
  const servicesPages: MetadataRoute.Sitemap = [
    ...servicesContent.az.map((p: any) => ({
      url: `${BASE_URL}/az/services/${p.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    })),

    ...servicesContent.en.map((p: any) => ({
      url: `${BASE_URL}/en/services/${p.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];  
  return [...staticPages, ...projectPages, ...servicesPages];
}