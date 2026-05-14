import type { MetadataRoute } from "next";
import { projects } from "@/components/home/ourProjects/projes";
import { servicesContent } from "@/utils";

const BASE_URL = "https://www.turanprojects.az";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

function makePage(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency
): MetadataRoute.Sitemap[number] {
  const url = `${BASE_URL}${path}`;

  return {
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "az-AZ": url,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    makePage("/", 1, "weekly"),
    makePage("/services", 0.95, "weekly"),
    makePage("/projects", 0.85, "weekly"),
    makePage("/about", 0.7, "monthly"),
    makePage("/contact", 0.65, "monthly"),
  ];

  const servicePages: MetadataRoute.Sitemap = servicesContent.az.map(
    (service: { slug: string }) =>
      makePage(`/services/${service.slug}`, 0.85, "weekly")
  );

  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project: { slug: string }) =>
      makePage(`/projects/${project.slug}`, 0.75, "monthly")
  );

  return [...staticPages, ...servicePages, ...projectPages];
}