import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/components/home/ourProjects/projes";
import HeroWrapper from "@/components/home/heroWrapper";
import ProjectDetailClient from "./ProjectDetailClient";

const BASE_URL = "https://www.turanprojects.az";

type Props = { params: Promise<{ slug: string }> };

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
  const pageUrl = `${BASE_URL}/projects/${project.slug}`;
  // const firstImage = project.images?.find((img) => !img.endsWith(".mp4"));
  // const imageUrl = firstImage
  //   ? firstImage.startsWith("http")
  //     ? firstImage
  //     : `${BASE_URL}${firstImage}`
  //   : undefined;

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
      // ...(imageUrl && {
      //   images: [{ url: imageUrl, width: 1200, height: 630, alt: `${project.title} — Turan İnşaat` }],
      // }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Turan İnşaat Bakı`,
      description: project.seoDescription ?? project.description,
      // ...(imageUrl && { images: [imageUrl] }),
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

  // ─── Article JSON-LD ─────────────────────────────────────
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
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.webp` },
    },
  };

  // ─── BreadcrumbList JSON-LD ──────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Səhifə", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Layihələr", item: `${BASE_URL}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: pageUrl },
    ],
  };

  // ─── ImageGallery JSON-LD ────────────────────────────────
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

  // ─── Service JSON-LD (adds service keywords to index) ───
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: project.title,
    description: project.seoDescription ?? project.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Turan İnşaat MMC",
      url: BASE_URL,
      telephone: "+994557513115",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bakı",
        addressCountry: "AZ",
      },
    },
    url: pageUrl,
    ...(imageUrl && { image: imageUrl }),
    ...(project.features && {
      serviceType: project.features[0],
    }),
  };

  return (
    <>
      <HeroWrapper />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {imageGalleryJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }} />
      )}

      {/*
        ──────────────────────────────────────────────────────────
        SSR TEXT BLOCK — this is the fix for the low text/HTML ratio.
        Google crawls this directly. No JS needed.
        ──────────────────────────────────────────────────────────
      */}
      <article
        className="max-w-6xl mx-auto px-6 pt-10 pb-0 text-gray-900"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Breadcrumb – visible + matches JSON-LD */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6">
            <li><a href="/" className="hover:text-gray-700">Ana Səhifə</a></li>
            <li aria-hidden="true">›</li>
            <li><a href="/projects" className="hover:text-gray-700">Layihələr</a></li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-700 font-medium" aria-current="page">{project.title}</li>
          </ol>
        </nav>

        {/* h1 – visible, SSR, keyword-rich */}
        <h1 className="text-3xl font-bold" itemProp="headline">
          {project.title}
        </h1>

        {/* seoDescription – full SSR paragraph */}
        <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed text-base" itemProp="description">
          {project.seoDescription ?? project.description}
        </p>

        {/* Details paragraph – the longest text block; was previously missing from HTML */}
        {project.details && (
          <div className="mt-6 max-w-3xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Layihə haqqında</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{project.details}</p>
          </div>
        )}

        {/* Features list – keyword-rich bullet list, SSR */}
        {project.features && project.features.length > 0 && (
          <div className="mt-6 max-w-3xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Əsas xüsusiyyətlər</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Keywords – rendered as tags (helps topical relevance signals) */}
        {project.keywords && project.keywords.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Əlaqəli açar sözlər">
            {project.keywords.map((kw, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Interactive gallery – client component, below the SSR content */}
      <ProjectDetailClient />
    </>
  );
}