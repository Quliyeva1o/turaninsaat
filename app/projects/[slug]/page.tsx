import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/components/home/ourProjects/projes";
import HeroWrapper from "@/components/home/heroWrapper";
import ProjectDetailClient from "./ProjectDetailClient";

const BASE_URL = "https://www.turanprojects.az";

type Props = { params: Promise<{ slug: string }> };

// ✅ FIX: was incorrectly using servicesContent instead of projects
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ─── Rich metadata per project ────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Layihə tapılmadı | Turan İnşaat" };
  }

  const firstImage = project.images?.find((img) => !img.endsWith(".mp4"));
  const imageUrl = firstImage
    ? firstImage.startsWith("http")
      ? firstImage
      : `${BASE_URL}${firstImage}`
    : undefined;

  const pageUrl = `${BASE_URL}/projects/${project.slug}`;

  return {
    title: `${project.title} | Turan İnşaat MMC, Bakı`,
    description: project.seoDescription ?? project.description,
    keywords: project.keywords ?? [
      project.title,
      "hovuz tikintisi Bakı",
      "Turan İnşaat",
      "turanprojects.az",
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${project.title} | Turan İnşaat MMC`,
      description: project.seoDescription ?? project.description,
      url: pageUrl,
      type: "article",
      siteName: "Turan İnşaat MMC",
      locale: "az_AZ",
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: `${project.title} — Turan İnşaat` }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Turan İnşaat Bakı`,
      description: project.seoDescription ?? project.description,
      images: imageUrl ? [imageUrl] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ─── Page ─────────────────────────────────────────────────
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const pageUrl = `${BASE_URL}/projects/${project.slug}`;
  const firstImage = project.images?.find((img) => !img.endsWith(".mp4"));
  const imageUrl = firstImage
    ? firstImage.startsWith("http")
      ? firstImage
      : `${BASE_URL}${firstImage}`
    : undefined;

  // ─── Article JSON-LD ──────────────────────────────────────
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.seoDescription ?? project.description,
    url: pageUrl,
    ...(imageUrl && { image: imageUrl }),
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
  };

  // ─── BreadcrumbList JSON-LD ───────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Səhifə", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Layihələr", item: `${BASE_URL}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: pageUrl },
    ],
  };

  // ─── ImageGallery JSON-LD (bonus: indexes all project images) ─
  const galleryImages = project.images
    ?.filter((img) => !img.endsWith(".mp4"))
    .map((img) => ({
      "@type": "ImageObject",
      url: img.startsWith("http") ? img : `${BASE_URL}${img}`,
      name: project.title,
    }));

  const imageGalleryJsonLd =
    galleryImages && galleryImages.length > 1
      ? {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: `${project.title} — Foto Qalereya`,
          description: project.seoDescription ?? project.description,
          url: pageUrl,
          associatedMedia: galleryImages,
        }
      : null;

  return (
    <>
      <HeroWrapper />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {imageGalleryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }}
        />
      )}

      {/*
        SSR-rendered SEO content — Google indexes <h1> and first image
        immediately without JS execution. sr-only keeps it visually hidden.
      */}
      <div className="sr-only">
        <h1>{project.title}</h1>
        <p>{project.seoDescription ?? project.description}</p>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${project.title} — Turan İnşaat`}
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