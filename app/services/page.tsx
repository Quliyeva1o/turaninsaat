import { servicesContent } from "@/utils";
import type { Metadata } from "next";
import HeroWrapper from "@/components/home/heroWrapper";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: "Xidmətlərimiz | Hovuz, SPA, Sauna Tikintisi — Turan İnşaat",
  description:
    "Turan İnşaat MMC — Bakıda lisenziyalı hovuz tikintisi, SPA, türk hamamı, sauna, filtrasiya, isitmə, fontan və su abadlığı xidmətləri. Fərdi, olimpiya, infinity hovuzlar.",
  keywords: [
    "hovuz tikintisi Bakı",
    "hovuz quraşdırılması",
    "SPA tikintisi Azərbaycan",
    "türk hamamı qurulması",
    "sauna quraşdırılması Bakı",
    "infinity hovuz",
    "filtrasiya sistemi hovuz",
    "Turan İnşaat",
  ],
  alternates: {
    canonical: "https://www.turanprojects.az/services",
  },
  openGraph: {
    title: "Xidmətlərimiz | Hovuz, SPA, Sauna Tikintisi — Turan İnşaat",
    description:
      "Bakıda hovuz, SPA, sauna, türk hamamı, filtrasiya, isitmə sistemi və su abadlığı xidmətləri. Lisenziyalı tikinti şirkəti.",
    url: "https://www.turanprojects.az/services",
    siteName: "Turan İnşaat MMC",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "https://www.turanprojects.az/assets/images/og-services.webp",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat — Hovuz və SPA Xidmətləri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hovuz, SPA, Sauna Tikintisi | Turan İnşaat Bakı",
    description:
      "Bakıda lisenziyalı hovuz tikintisi, SPA, türk hamamı, sauna, filtrasiya sistemləri.",
    images: ["https://www.turanprojects.az/assets/images/og-services.webp"],
  },
  icons: {
    icon: "https://www.turanprojects.az/assets/images/logo.webp",
    shortcut: "https://www.turanprojects.az/assets/images/logo.webp",
    apple: "https://www.turanprojects.az/assets/images/logo.webp",
  },
};

export default function ServicesPage() {
  const services = servicesContent["az"];

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
    ],
  };

  // ─── ItemList JSON-LD (service list for Google rich results) ─
  const serviceListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Turan İnşaat Xidmətləri",
    description:
      "Hovuz tikintisi, SPA, sauna, filtrasiya, isitmə sistemləri və su abadlığı xidmətləri",
    url: "https://www.turanprojects.az/services",
    numberOfItems: services.length,
    itemListElement: services.map((service: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        url: `https://www.turanprojects.az/services/${service.slug}`,
        image: service.img,
        provider: {
          "@type": "Organization",
          name: "Turan İnşaat MMC",
          url: "https://www.turanprojects.az",
        },
      },
    })),
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": ".webpage",
    "@id": "https://www.turanprojects.az/services",
    name: "Xidmətlərimiz",
    description:
      "Hovuz, SPA, sauna, filtrasiya və su abadlığı xidmətləri",
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />

      <HeroWrapper />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        {/* Screen-reader visible h1 for SEO */}
        <h1 className="sr-only">
          Hovuz, SPA, Sauna Tikintisi Xidmətləri — Turan İnşaat MMC, Bakı
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service: any) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
