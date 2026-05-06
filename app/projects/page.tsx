import { projects } from "@/components/home/ourProjects/projes";
import type { Metadata } from "next";
import HeroWrapper from "@/components/home/heroWrapper";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import Link from "next/link";

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
    icon: "https://www.turanprojects.az/assets/images/logo.webp",
    shortcut: "https://www.turanprojects.az/assets/images/logo.webp",
    apple: "https://www.turanprojects.az/assets/images/logo.webp",
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

          {/* ─── Project cards: SSR-rendered, Google indexes ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                {/* Visual card (client interactions handled inside ProjectsGrid) */}
                <ProjectsGrid project={project} />

                {/* ── SEO-rich text block – fully SSR, zero JS required ── */}
                <div className="mt-4">
                  <h2
                    className="text-xl font-bold"
                    itemProp="name"
                  >
                    {project.title}
                  </h2>

                  <p
                    className="text-gray-500 text-sm mt-2 leading-relaxed"
                    itemProp="description"
                  >
                    {project.seoDescription ?? project.description}
                  </p>

                  {/* Features list – each project has up to 6; adds keyword-rich text */}
                  {project.features && project.features.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="mt-0.5 text-yellow-500 flex-shrink-0" aria-hidden="true">✓</span>
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