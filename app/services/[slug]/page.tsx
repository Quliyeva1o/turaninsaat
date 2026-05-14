import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail, { type Service } from "./ServiceDetailClient";
import { servicesContent } from "@/utils";
import HeroWrapper from "@/components/home/heroWrapper";

const BASE_URL = "https://www.turanprojects.az";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const shortServiceTitles: Record<string, string> = {
  "hovuz-etrafi-avadanliqlar": "Hovuz Ətrafı Avadanlıqlar",
  "fontan-selale-sistemleri": "Fontan və Şəlalə Sistemləri",
  "hovuz-elave-avadanliqlar": "Hovuz Əlavə Avadanlıqları",
  "hovuz-filtrasiya-sistemleri": "Hovuz Filtrasiya Sistemləri",
  "hovuz-istitme-soyutma": "Hovuz İsitmə Sistemləri",
  "hovuz-novleri": "Hovuz Növləri",
  "hovuz-ortukleri": "Hovuz Örtükləri",
  "hovuz-temizlik-texnologiyalari": "Hovuz Təmizlik Sistemləri",
  "spa-avadanliqlari": "SPA Avadanlıqları",
  "spa-wellness": "SPA və Wellness Xidmətləri",
};

function getServices(): Service[] {
  return servicesContent.az as Service[];
}

function getService(slug: string): Service | undefined {
  return getServices().find((service) => service.slug === slug);
}

function cleanTitle(title: string) {
  return title
    .replace(/\s*\|\s*Turan İnşaat.*$/i, "")
    .replace(/\s*\|\s*Turan İnşaat MMC.*$/i, "")
    .replace(/\s*–\s*Turan İnşaat.*$/i, "")
    .replace(/\s*,\s*Bakı\s*$/i, "")
    .trim();
}

function getSeoTitle(service: Service) {
  return shortServiceTitles[service.slug] || cleanTitle(service.title);
}

function truncateDescription(text: string, maxLength = 155) {
  const cleanText = text.replace(/\s+/g, " ").trim();

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return `${cleanText.slice(0, maxLength - 3).trim()}...`;
}

function getImageSrc(image: Service["img"]) {
  return typeof image === "string" ? image : image.src;
}

function getAbsoluteImageUrl(image: Service["img"]) {
  const src = getImageSrc(image);

  if (src.startsWith("http")) {
    return src;
  }

  return `${BASE_URL}${src.startsWith("/") ? src : `/${src}`}`;
}

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export async function generateStaticParams() {
  return getServices().map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Xidmət tapılmadı",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageTitle = getSeoTitle(service);
  const description = truncateDescription(service.desc);
  const canonicalUrl = `${BASE_URL}/services/${service.slug}`;
  const imageUrl = getAbsoluteImageUrl(service.img);

  return {
    // layout.tsx template artıq sonuna "| Turan İnşaat" əlavə edir.
    // Ona görə burada brand yazmırıq.
    title: pageTitle,

    description,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        "az-AZ": canonicalUrl,
      },
    },

    openGraph: {
      title: `${pageTitle} | Turan İnşaat`,
      description,
      url: canonicalUrl,
      siteName: "Turan İnşaat MMC",
      locale: "az_AZ",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${pageTitle} — Turan İnşaat MMC`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Turan İnşaat`,
      description,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const pageTitle = getSeoTitle(service);
  const pageUrl = `${BASE_URL}/services/${service.slug}`;
  const imageUrl = getAbsoluteImageUrl(service.img);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: pageTitle,
        alternateName: service.title,
        description: service.desc,
        url: pageUrl,
        image: imageUrl,
        serviceType: pageTitle,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#localbusiness`,
          name: "Turan İnşaat MMC",
          url: BASE_URL,
          telephone: "+994557513115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Binəqədi-Novxanı şossesi, Novxanı kəndi",
            addressLocality: "Abşeron",
            addressCountry: "AZ",
          },
        },
        areaServed: [
          {
            "@type": "City",
            name: "Bakı",
          },
          {
            "@type": "AdministrativeArea",
            name: "Abşeron",
          },
          {
            "@type": "Country",
            name: "Azərbaycan",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana səhifə",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Xidmətlər",
            item: `${BASE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageTitle,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: service.desc,
        inLanguage: "az-AZ",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          name: "Turan İnşaat MMC",
          url: BASE_URL,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        mainEntity: {
          "@id": `${pageUrl}#service`,
        },
      },
    ],
  };

  return (
    <>
      <HeroWrapper />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(jsonLd),
        }}
      />

      <ServiceDetail service={service} />
    </>
  );
}