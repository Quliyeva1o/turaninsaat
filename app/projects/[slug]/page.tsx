import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/components/home/ourProjects/projes";
import HeroWrapper from "@/components/home/heroWrapper";
import ProjectDetailClient from "./ProjectDetailClient";

const BASE_URL = "https://turanprojects.az";

type Props = { params: Promise<{ slug: string }> };

// ✅ Pre-render all project pages at build time → Google crawls them all
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ Rich metadata per project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Layihə tapılmadı | Turan İnşaat",
      description: "Axtardığınız layihə mövcud deyil.",
    };
  }

  const firstImage = project.images?.find((img) => !img.endsWith(".mp4"));

  return {
    title: `${project.title} | Turan İnşaat Layihəsi`,
    description: project.seoDescription ?? project.description,
    keywords: project.keywords,
    alternates: {
      canonical: `${BASE_URL}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Turan İnşaat`,
      description: project.seoDescription ?? project.description,
      url: `${BASE_URL}/projects/${project.slug}`,
      type: "article",
      siteName: "Turan İnşaat",
      locale: "az_AZ",
      images: firstImage
        ? [
            {
              url: firstImage,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Turan İnşaat`,
      description: project.seoDescription ?? project.description,
      images: firstImage ? [firstImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ✅ JSON-LD for each project page
function ProjectStructuredData({ project }: { project: (typeof projects)[0] }) {
  const firstImage = project.images?.find((img) => !img.endsWith(".mp4"));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.seoDescription ?? project.description,
    url: `${BASE_URL}/projects/${project.slug}`,
    image: firstImage ? `${BASE_URL}${firstImage}` : undefined,
    author: {
      "@type": "Organization",
      name: "Turan İnşaat MMC",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Turan İnşaat MMC",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    // BreadcrumbList for better SERP appearance
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Səhifə",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Layihələr",
          item: `${BASE_URL}/projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: `${BASE_URL}/projects/${project.slug}`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ✅ SSR-rendered content — Google sees title, description, and first image
// without needing JS execution. Client component handles the gallery.
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const firstImage = project.images?.find((img) => !img.endsWith(".mp4"));

  return (
    <>
      <ProjectStructuredData project={project} />
      <HeroWrapper />

      {/*
        ✅ SEO-critical content rendered server-side.
        The <h1>, description, and first image are in the initial HTML.
        Google indexes these immediately without JS execution.
      */}
      <div className="sr-only">
        <h1>{project.title}</h1>
        <p>{project.seoDescription ?? project.description}</p>
        {firstImage && (
          <Image
            src={firstImage}
            alt={`${project.title} – Turan İnşaat`}
            width={1200}
            height={630}
            priority
          />
        )}
      </div>

      {/* Interactive gallery — client component */}
      <ProjectDetailClient />
    </>
  );
}