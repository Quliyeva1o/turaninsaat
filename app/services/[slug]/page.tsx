
import { servicesContent } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroWrapper from "@/components/home/heroWrapper";
import ServiceDetail from "./ServiceDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContent["az"].find((s: any) => s.slug === slug);
  if (!service) return { title: "Xidmət tapılmadı | Turan İnşaat" };

  const url = `https://www.turanprojects.az/services/${service.slug}`;

  // Build a keyword-rich title suffix per service category
  const titleSuffix = "Turan İnşaat MMC, Bakı";

  return {
    title: `${service.title} | ${titleSuffix}`,
    description: service.desc,
    keywords: [
      service.title,
      "hovuz tikintisi Bakı",
      "SPA quraşdırılması Azərbaycan",
      "Turan İnşaat",
      "turanprojects.az",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Turan İnşaat MMC`,
      description: service.desc,
      url,
      siteName: "Turan İnşaat MMC",
      locale: "az_AZ",
      type: "article",
      images: [
        {
          url: service.img.startsWith("http")
            ? service.img
            : `https://www.turanprojects.az${service.img}`,
          width: 1200,
          height: 630,
          alt: `${service.title} — Turan İnşaat`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Turan İnşaat Bakı`,
      description: service.desc,
      images: [
        service.img.startsWith("http")
          ? service.img
          : `https://www.turanprojects.az${service.img}`,
      ],
    },
  };
}

export function generateStaticParams() {
  return servicesContent["az"].map((s: any) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesContent["az"].find((s: any) => s.slug === slug);
  if (!service) notFound();

  const pageUrl = `https://www.turanprojects.az/services/${service.slug}`;

  // ─── Service JSON-LD ─────────────────────────────────────
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    url: pageUrl,
    image: service.img.startsWith("http")
      ? service.img
      : `https://www.turanprojects.az${service.img}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Turan İnşaat MMC",
      url: "https://www.turanprojects.az",
      telephone: ["+994557513115", "+994503127657", "+994124482875"],
      email: "farizmehdiyevs@mail.ru",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Binəqədi-Novxanı şossesi, Novxanı kəndi",
        addressLocality: "Abşeron rayonu",
        addressRegion: "Bakı",
        addressCountry: "AZ",
      },
      sameAs: [
        "https://www.instagram.com/turanprojects.az",
        "https://www.tiktok.com/@turanprojects.az",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Azerbaijan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.sections.flatMap((section: any) =>
        section.items.map((item: any) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title.split("–")[0].trim(),
            description: item.title,
          },
        }))
      ),
    },
  };

  // ─── BreadcrumbList JSON-LD ───────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana səhifə",
        item: "https://www.turanprojects.az",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Xidmətlər",
        item: "https://www.turanprojects.az/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: pageUrl,
      },
    ],
  };

  // ─── FAQ JSON-LD (generated from section items) ──────────
  // Only include if the service has items that can read as Q&A
  const faqItems = service.sections
    .flatMap((section: any) => section.items)
    .slice(0, 5) // limit to first 5 to avoid bloat
    .map((item: any) => {
      const [question, answer] = item.title.split("–").map((s: string) => s.trim());
      return answer
        ? {
          "@type": "Question",
          name: `${service.title}: ${question} nədir?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        }
        : null;
    })
    .filter(Boolean);

  const faqJsonLd =
    faqItems.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems,
      }
      : null;

  return (
    <>
      <HeroWrapper />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <ServiceDetail service={service} />
    </>
  );
}