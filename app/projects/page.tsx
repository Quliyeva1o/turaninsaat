import { projects } from "@/components/home/ourProjects/projes";
import type { Metadata } from "next";
import HeroWrapper from "@/components/home/heroWrapper";
import FilteredProjects from "@/components/projects/FilteredProjects";

const BASE_URL = "https://www.turanprojects.az";

export const metadata: Metadata = {
  title: "Layihələrimiz | Hovuz, SPA və Sauna Tikintisi – Turan İnşaat",
  description:
    "Turan İnşaat MMC tərəfindən tamamlanmış hovuz, SPA, sauna, türk hamamı və infinity hovuz layihələri. Bakı və Azərbaycan üzrə kommersiya və yaşayış obyektləri.",
  keywords:
    "hovuz tikintisi Bakı, SPA tikintisi, sauna quraşdırma, türk hamamı, infinity hovuz, Turan İnşaat layihələri",
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: "Layihələrimiz | Turan İnşaat",
    description:
      "Tamamlanmış hovuz, SPA, sauna və hamam layihələrimizə baxın. Bakı üzrə kommersiya və fərdi tikinti işləri.",
    url: `${BASE_URL}/projects`,
    type: "website",
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    images: [
      {
        url: projects[0]?.images?.[0] ?? "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat – Bakıda Hovuz və SPA Tikintisi Layihələri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layihələrimiz | Turan İnşaat",
    description:
      "Tamamlanmış hovuz, SPA, sauna və hamam layihələri – Bakı, Azərbaycan.",
    images: [projects[0]?.images?.[0] ?? "/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
    icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

// JSON-LD – ItemList of projects
function ProjectsStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Turan İnşaat Layihələri",
    description:
      "Turan İnşaat MMC tərəfindən tamamlanmış hovuz, SPA, sauna və hamam layihələri",
    url: `${BASE_URL}/projects`,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.seoDescription ?? project.description,
      url: `${BASE_URL}/projects/${project.slug}`,
      image:
        project.images?.find((img) => !img.endsWith(".mp4")) ??
        project.images?.[0],
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// JSON-LD – LocalBusiness
function BusinessStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Turan İnşaat MMC",
    description:
      "Lisenziyalı hovuz, SPA, sauna, türk hamamı və infinity hovuz tikinti şirkəti",
    url: BASE_URL,
    telephone: ["+994557513115", "+994503127657", "+994123482875"],
    email: "farizmehdiyevs@mail.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Binəqədi-Novxanı yolu",
      addressLocality: "Bakı",
      addressCountry: "AZ",
    },
    sameAs: [
      "https://www.instagram.com/turanprojects.az",
      "https://www.tiktok.com/@turanprojects.az",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hovuz və SPA Xidmətləri",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fərdi Hovuz Tikintisi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kommersiya Hovuzu" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infinity (Daşma) Hovuz" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SPA Mərkəzi Tikintisi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sauna Quraşdırma" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Türk Hamamı" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cakuzi Quraşdırma" } },
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

export default function ProjectsPage() {
  return (
    <>
      <ProjectsStructuredData />
      <BusinessStructuredData />
      <HeroWrapper />

      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold mb-2">Layihələrimiz</h1>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Turan İnşaat MMC tərəfindən tamamlanmış hovuz, SPA, sauna, türk
            hamamı və infinity hovuz layihələri – Bakı və Azərbaycan üzrə.
            Hər bir layihə dizayndən anahtar təhvilə qədər tam icra olunur.
          </p>

          <FilteredProjects initialProjects={projects} />

          {/* ─── Bottom keyword-rich summary paragraph ─── */}
          <div className="mt-20 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold mb-4">
              Bakıda Hovuz, SPA və Sauna Tikintisi – Turan İnşaat MMC
            </h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed">
              Turan İnşaat MMC olaraq Bakı və Azərbaycan ərazisində fərdi
              villa hovuzları, kommersiya hovuzları, infinity (daşma) hovuzlar,
              SPA mərkəzləri, fin saunaları, türk hamamları, buxar otaqları,
              duz otaqları, cakuzi sistemləri və masaj otaqları tikir və
              quraşdırırıq. Hər layihə dizayn mərhələsindən başlayaraq
              anahtar təhvilə qədər tam şəkildə idarə olunur. Hyatt Regency,
              My Class, Makfit, Crown kimi tanınmış adlar bizim müştərilərimiz
              arasındadır.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}