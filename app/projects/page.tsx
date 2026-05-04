import { projects } from "@/components/home/ourProjects/projes";
import type { Metadata } from "next";
import HeroWrapper from "@/components/home/heroWrapper";
import ProjectsGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Layihələrimiz",
  description:
    "Turan İnşaatın tamamlanmış hovuz, SPA və isitmə layihələri. Bakı və Azərbaycan üzrə kommersiya və yaşayış obyektləri.",
  alternates: {
    canonical: "https://www.turanprojects.az/projects",
  },
  openGraph: {
    title: "Layihələrimiz | Turan İnşaat",
    description: "Tamamlanmış hovuz və SPA layihələrimizə baxın.",
    url: "https://www.turanprojects.az/projects",
    images: [
      {
        url: projects[0]?.images?.[0] ?? "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat Layihələri",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <HeroWrapper />
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold mb-8">Layihələrimiz</h1>

          {/* ✅ Statik kart siyahısı — server-də render olunur, Google görür */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <article key={project.slug} className="group">
                <ProjectsGrid project={project} />

                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}