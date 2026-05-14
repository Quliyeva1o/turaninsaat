import { servicesContent } from "@/utils";
import type { Metadata } from "next";
import HeroWrapper from "@/components/home/heroWrapper";
import ServiceCard from "@/components/services/ServiceCard";

const BASE_URL = "https://www.turanprojects.az";

export const metadata: Metadata = {
  title: "Xidmətlər",

  description:
    "Bakıda hovuz tikintisi, SPA, türk hamamı, rus hamamı, sauna, duz otağı, filtrasiya, isitmə və su təmizləmə sistemləri üzrə xidmətlər.",

  // alternates: {
  //   canonical: `${BASE_URL}/services`,
  //   languages: {
  //     "az-AZ": `${BASE_URL}/services`,
  //   },
  // },

  openGraph: {
    title: "Xidmətlər | Turan İnşaat",
    description:
      "Hovuz, SPA, hamam, sauna, filtrasiya və isitmə sistemləri üzrə peşəkar xidmətlər.",
    url: `${BASE_URL}/services`,
    siteName: "Turan İnşaat MMC",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/assets/images/og-services.webp`,
        width: 1200,
        height: 630,
        alt: "Turan İnşaat MMC — Hovuz, SPA və Hamam Xidmətləri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Xidmətlər | Turan İnşaat",
    description:
      "Bakıda hovuz tikintisi, SPA, hamam, sauna və su sistemləri üzrə xidmətlər.",
    images: [`${BASE_URL}/assets/images/og-services.webp`],
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

  category: "construction",
};

export default function ServicesPage() {
  const services = servicesContent["az"];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
    ],
  };

  const serviceListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Turan İnşaat Xidmətləri",
    description:
      "Hovuz tikintisi, SPA, türk hamamı, rus hamamı, sauna, duz otağı, filtrasiya və isitmə sistemləri.",
    url: `${BASE_URL}/services`,
    numberOfItems: services.length,
    itemListElement: services.map((service: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        url: `${BASE_URL}/services/${service.slug}`,
        image: service.img?.startsWith?.("http")
          ? service.img
          : `${BASE_URL}${service.img}`,
        provider: {
          "@type": "LocalBusiness",
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
      },
    })),
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/services#webpage`,
    name: "Xidmətlər",
    description:
      "Turan İnşaat MMC-nin hovuz, SPA, hamam, sauna və su sistemləri üzrə xidmətləri.",
    url: `${BASE_URL}/services`,
    // inLanguage: "az-AZ",
    isPartOf: {
      "@type": "WebSite",
      name: "Turan İnşaat MMC",
      url: BASE_URL,
    },
    breadcrumb: {
      "@id": `${BASE_URL}/services#breadcrumb`,
    },
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageJsonLd),
        }}
      />

      <HeroWrapper />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        {/* <header className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A1E30] mb-6">
            Hovuz, SPA və Hamam Xidmətləri
          </h1>

          <p className="text-base md:text-lg leading-8 text-gray-700">
            Turan İnşaat MMC Bakıda və Azərbaycanın müxtəlif bölgələrində
            fərdi hovuz, ictimai hovuz, olimpiya hovuzu, daşma və skimmer
            tipli hovuzların layihələndirilməsi, tikintisi və quraşdırılması
            üzrə peşəkar xidmət göstərir.
          </p>

          <p className="mt-5 text-base md:text-lg leading-8 text-gray-700">
            Xidmətlərimizə hovuz filtrasiya sistemləri, UV dezinfeksiya, duz
            elektroliz, avtomatik dozaj, isitmə və soyutma sistemləri, hovuz
            örtükləri, şəlalə qurğuları, aquapark sistemləri, türk hamamı, rus
            hamamı, sauna, duz otağı və SPA avadanlıqları daxildir.
          </p>
        </header> */}

        <section aria-labelledby="services-list-title">
     

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service: any) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A1E30] mb-4">
              Hovuz tikintisi və texniki sistemlər
            </h2>

            <p className="leading-8 text-gray-700">
              Fərdi villalar, bağ evləri, otellər, idman kompleksləri və SPA
              mərkəzləri üçün hovuzların texniki planlaşdırılması, beton
              konstruksiya, hidroizolyasiya, kafel seçimi, su dövriyyəsi,
              filtrasiya və avadanlıq quraşdırılması mərhələləri kompleks
              şəkildə icra olunur.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A1E30] mb-4">
              SPA, hamam və sauna həlləri
            </h2>

            <p className="leading-8 text-gray-700">
              Türk hamamı, rus hamamı, sauna, sulu par otağı, duz otağı,
              kisə otağı, masaj otağı, buz otağı və aromaterapiya sahələri
              üçün fərdi layihələndirmə və quraşdırma xidmətləri təqdim
              edirik. Hər layihədə funksionallıq, təhlükəsizlik və estetik
              görünüş əsas götürülür.
            </p>
          </article>

        </section>

        <section className="mt-16 rounded-2xl bg-[#0A1E30] text-white p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Layihəniz üçün düzgün xidmət seçimi
          </h2>

          <p className="leading-8 text-white/80">
            Hovuz, SPA və hamam layihələrində düzgün avadanlıq seçimi,
            filtrasiya gücü, su həcmi, isitmə sistemi və istifadə məqsədi
            əvvəlcədən hesablanmalıdır. Turan İnşaat MMC komandası layihənizin
            ölçüsünə, büdcəsinə və məkanın texniki şərtlərinə uyğun optimal
            həll hazırlayır.

          </p>
          <p className="leading-8 text-white/80">
            Xidmətlərimizə hovuz filtrasiya sistemləri, UV dezinfeksiya, duz
            elektroliz, avtomatik dozaj, isitmə və soyutma sistemləri, hovuz
            örtükləri, şəlalə qurğuları, aquapark sistemləri, türk hamamı, rus
            hamamı, sauna, duz otağı və SPA avadanlıqları daxildir.</p>
        </section>
      </section>
    </main>
  );
}