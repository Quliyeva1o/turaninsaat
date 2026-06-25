"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import ProjectsGrid from "./ProjectGrid";

interface Project {
  title: string;
  slug: string;
  description: string;
  seoDescription?: string;
  keywords?: string[];
  details: string;
  features?: string[];
  images: string[];
}

interface FilteredProjectsProps {
  initialProjects: Project[];
}

const categories = [
  { id: "all", label: "Hamısı" },
  { id: "hovuz", label: "Hovuzlar" },
  { id: "hamam", label: "Türk Hamamları" },
  { id: "sauna", label: "Saunalar" },
  { id: "spa", label: "SPA və Digər" },
];

function getProjectCategory(project: Project): "hovuz" | "hamam" | "sauna" | "spa" {
  const title = project.title.toLowerCase();
  const slug = project.slug.toLowerCase();

  if (title.includes("hovuz") || slug.includes("pool") || slug.includes("hovuz")) {
    return "hovuz";
  }
  if (
    title.includes("hamam") ||
    title.includes("kese") ||
    title.includes("kise") ||
    slug.includes("hamam") ||
    slug.includes("kise") ||
    slug.includes("kese") ||
    slug.includes("rus")
  ) {
    return "hamam";
  }
  if (title.includes("sauna") || slug.includes("sauna")) {
    return "sauna";
  }
  return "spa";
}

export default function FilteredProjects({ initialProjects }: FilteredProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (category: string) => {
    startTransition(() => {
      setActiveCategory(category);
    });
  };

  const filteredProjects = initialProjects.filter((project) => {
    if (activeCategory === "all") return true;
    return getProjectCategory(project) === activeCategory;
  });

  return (
    <div>
      {/* Dynamic injection of CSS for smooth staggered entrance animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .project-card-animate {
            animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `
      }} />

      {/* ─── Category Selection Tabs ─── */}
      <div className="flex items-center gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 transform active:scale-95 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-[#12223B] text-white border-[#12223B] shadow-md shadow-[#12223B]/10 scale-[1.03]"
                  : "bg-[#E9F7FE]/50 text-[#12223B] border-[#12223B]/10 hover:bg-[#E9F7FE] hover:border-[#12223B]/30 hover:scale-[1.01]"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* ─── Filtered Projects Grid ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]">
        {filteredProjects.map((project, index) => (
          <article
            key={`${activeCategory}-${project.slug}`}
            className="group project-card-animate"
            style={{
              animationDelay: `${index * 45}ms`,
              opacity: 0,
            }}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            {/* Visual card */}
            <ProjectsGrid project={project} />

            {/* SEO-rich text block */}
            <div className="mt-4">
              <h2 className="text-xl font-bold" itemProp="name">
                {project.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed" itemProp="description">
                {project.seoDescription ?? project.description}
              </p>

              {/* Features list */}
              {project.features && project.features.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 text-yellow-500 flex-shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href={`/projects/${project.slug}`}
                className="inline-block mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
                aria-label={`${project.title} haqqında ətraflı məlumat`}
              >
                Ətraflı bax →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
