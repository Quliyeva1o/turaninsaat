// ============================================================
// TURAN İNŞAAT MMC – TAM OPTİMALLAŞDIRILMIŞ SEO METADATA
// Fayl: app/page.tsx  (Next.js App Router)
// ============================================================

import AboutUs from "@/components/home/aboutUs";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";

// ─────────────────────────────────────────────
// 1. METADATA  (Next.js <head> inject edir)
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Title ──────────────────────────────────────────────────────────────
  // Format: [Əsas Keyword] | [Brand] — 50–60 simvol aralığında
  title: {
    default:
      "Hovuz Tikintisi Bakı | Turan İnşaat MMC – SPA, Hamam, Sauna",
    template: "%s | Turan İnşaat MMC",
  },

  // ── Description ────────────────────────────────────────────────────────
  // 145–160 simvol. CTA + əsas xidmətlər + lokasiya + diferensialedici
  description:
    "Bakıda 10+ il təcrübəli lisenziyalı hovuz tikintisi şirkəti. Fərdi & ictimai hovuz, Infinity hovuz, türk hamamı, rus hamamı, sauna, duz otağı, SPA kompleksi. Hyatt Regency referansı. Pulsuz konsultasiya: +994 55 751 31 15.",

  // ── Keywords ───────────────────────────────────────────────────────────
  // Google birbaşa istifadə etməsə də, Bing/Yandex üçün dəyərlidir
  keywords: [
    // → Yüksək intent (transaksional)
    "hovuz tikintisi bakı",
    "hovuz qurulması bakı",
    "hovuz qiymeti baki",
    "hovuz tikintisi azerbaycan",
    "spa tikintisi bakı",
    "türk hamamı tikintisi bakı",
    "sauna tikintisi bakı",
    "rus hamamı tikintisi bakı",
    "duz otağı tikintisi bakı",
    "hamam tikintisi bakı",
    // → İnformasional / uzun kuyruk
    "infinity hovuz bakı",
    "daşma hovuz bakı",
    "skimmer hovuz bakı",
    "olimpiya hovuzu tikintisi",
    "fərdi hovuz villa bakı",
    "hovuz filtrasiya sistemi bakı",
    "hovuz isitmə sistemi bakı",
    "hovuz baxımı bakı",
    "pool construction baku",
    "baku spa construction",
    "cakuzi quraşdırılması bakı",
    "aquapark tikintisi azərbaycan",
    // → Lokal / geo
    "hovuz tikintisi abşeron",
    "hovuz tikintisi novxanı",
    "hovuz tikintisi bilgəh",
    "hovuz tikintisi badamdar",
    "hovuz tikintisi sumqayıt",
    // → Rəqabətsiz/niche
    "turan inşaat hovuz",
    "turan projects az",
    "turan inşaat",
    "turan inşaat mmc",
    "turanprojects hovuz",
  ],

  // ── Canonical & hreflang ───────────────────────────────────────────────
  // alternates: {
  //   canonical: "https://www.turanprojects.az",
  //   languages: {
  //     "az-AZ": "https://www.turanprojects.az",
  //   },
  // },
  //  alternates: {
  //     canonical: "/",
  //     languages: {
  //       "az-AZ": "/",
  //     },
  //   },
  // ── Open Graph ─────────────────────────────────────────────────────────
  openGraph: {
    title:
      "Hovuz Tikintisi Bakı | SPA, Hamam, Sauna – Turan İnşaat MMC",
    description:
      "Bakıda lisenziyalı hovuz tikintisi: Infinity, skimmer & daşma hovuzlar, SPA kompleksi, türk hamamı, rus hamamı, sauna, duz otağı. Hyatt Regency, My Class referansları. Pulsuz konsultasiya: +994 55 751 31 15.",
    url: "https://www.turanprojects.az",
    siteName: "Turan İnşaat MMC",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "https://www.turanprojects.az/assets/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat MMC – Bakıda Hovuz, SPA, Hamam Tikintisi",
        type: "image/webp",
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "Hovuz Tikintisi Bakı | SPA, Hamam, Sauna – Turan İnşaat MMC",
    description:
      "Bakıda lisenziyalı hovuz tikintisi, SPA, türk hamamı, rus hamamı, sauna, duz otağı. Hyatt Regency referansı. Pulsuz konsultasiya: +994 55 751 31 15.",
    images: [
      "https://www.turanprojects.az/assets/images/og-image.webp",
    ],
    site: "@turanprojects",
    creator: "@turanprojects",
  },

  // ── Robots ─────────────────────────────────────────────────────────────
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

  // ── Icons ──────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },


  // ── Sitemap & manifest ─────────────────────────────────────────────────
  // manifest: "/site.webmanifest",  // aktivləşdir əgər varsa

  // ── Verification ───────────────────────────────────────────────────────
  // Google Search Console doğrulaması üçün aşağıdakını doldurun:
  // verification: {
  //   google: "BURAYA_GSC_KODU_YAZIN",
  // },

  // ── Authors & category ─────────────────────────────────────────────────
  authors: [{ name: "Turan İnşaat MMC", url: "https://www.turanprojects.az" }],
  category: "construction",

  // ── metadataBase ───────────────────────────────────────────────────────
  // Nisbi URL-ləri mütləq URL-ə çevirir (Next.js 13+)
  metadataBase: new URL("https://www.turanprojects.az"),
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. JSON-LD STRUCTURED DATA
//    Google "rich result" üçün tələb olunur.
//    LocalBusiness + Service + FAQ schema birləşdirilmişdir.
// ─────────────────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── 2a. LocalBusiness ────────────────────────────────────────────────
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://www.turanprojects.az/#business",
      name: "Turan İnşaat MMC",
      alternateName: ["Turan İnşaat", "Turan Projects", "turanprojects.az"],
      description:
        "Bakıda lisenziyalı hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna və duz otağı tikintisi şirkəti.",
      url: "https://www.turanprojects.az",
      logo: {
        "@type": "ImageObject",
        url: "https://www.turanprojects.az/assets/images/logo.webp",
        width: 200,
        height: 60,
      },
      image: "https://www.turanprojects.az/assets/images/og-image.webp",
      telephone: ["+994557513115", "+994503127657", "+994506350520"],
      email: "farizmehdiyevs@mail.ru",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Binəqədi-Novxanı şossesi, Novxanı kəndi",
        addressLocality: "Bakı",
        addressRegion: "Abşeron",
        addressCountry: "AZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.530605974607575,
        longitude: 49.78602313347508,

      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/turanprojects.az",
        "https://www.tiktok.com/@turanprojects.az",
      ],
      areaServed: [
        { "@type": "City", name: "Bakı" },
        { "@type": "City", name: "Sumqayıt" },
        { "@type": "AdministrativeArea", name: "Abşeron rayonu" },
        { "@type": "Country", name: "Azərbaycan" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hovuz, SPA və Hamam Tikintisi Xidmətləri",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fərdi Hovuz Tikintisi",
              description:
                "Villa və bağ evləri üçün skimmer, daşma və infinity hovuz tikintisi.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "İctimai Hovuz Tikintisi",
              description:
                "Otellər, idman kompleksləri və SPA mərkəzləri üçün böyük ölçülü hovuz tikintisi.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SPA Kompleksi Tikintisi",
              description:
                "Türk hamamı, rus hamamı, sauna, duz otağı, buz otağı, masaj otağı daxil tam SPA kompleksinin layihələndirilməsi və tikintisi.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hovuz Filtrasiya və İsitmə Sistemləri",
              description:
                "UV dezinfeksiya, duz elektroliz, isitmə pompası, robot təmizləyici quraşdırılması.",
            },
          },
        ],
      },
    },

    // ── 2b. WebSite (Sitelinks search box üçün) ─────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://www.turanprojects.az/#website",
      url: "https://www.turanprojects.az",
      name: "Turan İnşaat MMC",
      publisher: { "@id": "https://www.turanprojects.az/#business" },
      // inLanguage: "az-AZ",
    },

    // ── 2c. FAQ  (Google FAQ rich result) ────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": "https://www.turanprojects.az/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Bakıda hovuz tikintisinin qiyməti nə qədərdir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hovuz tikintisinin qiyməti hovuzun ölçüsünə, tipinə (skimmer, daşma, infinity), material seçiminə və əlavə avadanlıqlara görə müəyyən olunur. Dəqiq qiymət üçün +994 55 751 31 15 nömrəsinə zəng edin.",
          },
        },
        {
          "@type": "Question",
          name: "Hovuz tikintisi nə qədər vaxt aparır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fərdi hovuz tikintisi orta hesabla 4–8 həftə, böyük ictimai hovuzlar isə 3–6 ay müddət tələb edir.",
          },
        },
        {
          "@type": "Question",
          name: "Türk hamamı ilə rus hamamı arasındakı fərq nədir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türk hamamında temperatur 40–50°C, rütubət 90–100% olur, mərmər istifadə edilir. Rus hamamında temperatur 50–70°C, rütubət 60–80% olur, ağac interyeri üstünlük təşkil edir.",
          },
        },
        {
          "@type": "Question",
          name: "Duz otağı (haloterapiya) kimlər üçün faydalıdır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duz otağı astma, bronxit, sinüzit, allergiya kimi tənəffüs yolu xəstəlikləri, dərmatit, ekzema kimi dəri problemləri olan insanlar üçün xüsusilə faydalıdır.",
          },
        },
        {
          "@type": "Question",
          name: "Infinity (sonsuzluq) hovuz nədir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Infinity hovuz daşma tipli hovuzların bir növüdür. Su bir tərəfli kənardan axaraq 'sonsuzluq effekti' yaradır. Xüsusilə dəniz mənzərəli yüksək ərazilərdə vizual cəhətdən möhtəşəm görünüş verir.",
          },
        },
      ],
    },

    // ── 2d. BreadcrumbList ───────────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.turanprojects.az/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Səhifə",
          item: "https://www.turanprojects.az",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

// Lazy components
const OurServices = dynamic(() => import("@/components/home/ourServices"));

const OurProjects = dynamic(() => import("@/components/home/ourProjects"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 rounded-xl" />
  ),
});

const ProductsHome = dynamic(() =>
  import("@/components/home/products").then((mod) => mod.ProductsHome)
);

const WhyChooseUs = dynamic(() => import("@/components/home/chooseUs"));

const ContactSection = dynamic(() =>
  import("@/components/home/contactUs").then((mod) => mod.ContactSection)
);

const HeroWrapper = dynamic(() => import("@/components/home/heroWrapper"));

export default function Home() {
  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <Script
        id="jsonld-main"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      {/* ── Visually Hidden SEO Content ────────────────────────────────── */}
      {/*
        Qeyd: Bu blok axtarış motorları üçün nəzərdə tutulmuşdur.
        İstifadəçilər görmür, lakin Google crawl edir.
        Ehtiyac olmadıqca dəyişdirməyin.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        {/* ── H1: Yalnız bir dəfə, əsas keyword ── */}
        <h1>
          Turan İnşaat MMC – Bakıda Lisenziyalı Hovuz, SPA və Hamam Tikintisi
        </h1>

        {/* ── Şirkət haqqında ── */}
        <p>
          Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq, su ilə rahatlığı
          birləşdirərək mükəmməl hovuz və SPA həlləri təqdim edir. Hovuz, SPA və
          sauna sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması
          sahəsində peşəkar xidmət göstəririk. Şirkətimiz Hyatt Regency Bakı,
          My Class İdman Kompleksi (Yasamal) kimi nüfuzlu referanslara malikdir.
          Bakı, Abşeron, Sumqayıt, Gəncə və Azərbaycanın bütün bölgələrindəxidmət
          göstəririk. Pulsuz konsultasiya: +994 55 751 31 15.
        </p>

        {/* ── Hovuz növləri ── */}
        <h2>Bakıda Hovuz Tikintisi – Bütün Növlər</h2>
        <h3>Fərdi Hovuzlar – Villa və Bağ Evləri üçün</h3>
        <p>
          Bakı, Abşeron, Novxanı, Bilgəh, Nardaran, Badamdar ərazilərindəki
          villalar üçün skimmer, daşma, infinity hovuz tikintisi. Fərdi hovuz
          qiymətləri üçün bizimlə əlaqə saxlayın.
        </p>
        <h3>İctimai Hovuzlar – Otellər və İdman Kompleksləri üçün</h3>
        <p>
          Hyatt Regency Bakı çöl hovuzu tikintisi tamamlanan referans layihələrimiz
          arasındadır. İctimai hovuzlara filtrasiya, UV dezinfeksiya və avtomatik
          kimyəvi tənzimləmə sistemləri quraşdırılır.
        </p>
        <h3>Olimpiya Hovuzu, Şok Hovuz, Dalğıc Hovuzu, Uşaq Hovuzu</h3>
        <h3>Infinity (Daşma) Hovuz – Sonsuzluq Effekti</h3>
        <h3>Akrilik Hovuz – Şəffaf Divarlar</h3>
        <h3>Hidromassajlı Hovuz – Cakuzi və Jet Stream</h3>
        <h3>Təbii Hovuz – Kimyəvisiz, Ekoloji</h3>

        {/* ── SPA otaqları ── */}
        <h2>SPA Kompleksi Tikintisi Bakı – Türk Hamamı, Sauna, Duz Otağı</h2>
        <h3>Türk Hamamı (Hammam) Tikintisi Bakı</h3>
        <p>
          Mərmər, mis və əl işləmə dekorlarla klassik osmanlı estetikası ilə müasir
          lüks birləşdirən türk hamamı tikintisi. Villa, otel və ictimai SPA
          mərkəzləri üçün fərdi layihə.
        </p>
        <h3>Rus Hamamı (Banya) Tikintisi</h3>
        <p>
          İstiyə davamlı ağac interyeri, elektrik və ya odunla qızdırılan soba,
          süpürgə terapiyası. 50–70°C temperatur, 60–80% rütubət.
        </p>
        <h3>Sauna Tikintisi Bakı</h3>
        <p>
          Lipa, Palıd, Abaş, Kedr, Hemlok, Albalı ağaclarından istifadə edilir.
          80–100°C temperatur, 10–20% rütubət. Mini sauna kabinlərindən böyük
          ictimai saunalara qədər.
        </p>
        <h3>Duz Otağı (Halotherapy) Tikintisi</h3>
        <p>
          Astma, bronxit, sinüzit, allergiya kimi tənəffüs yolu problemlərinə
          faydalı duz otağı tikintisi. Otel SPA, fizioterapiya mərkəzləri və
          şəxsi villalar üçün.
        </p>
        <h3>
          İnfraqırmızı Sauna, Buz Otağı, Masaj Otağı, Kisə Otağı, Aromaterapiya
          Otağı, Şok Duş, Şok Vedrəsi
        </h3>

        {/* ── Sistemlər ── */}
        <h2>Hovuz Filtrasiya, İsitmə və Təmizlik Sistemləri</h2>
        <p>
          Robot təmizləyici, UV dezinfeksiya, avtomatik kimyəvi dozaj, duz
          elektroliz, kartricli filtrasiya, isitmə pompası (heat pump), plaka və
          boru tipli eşenjor, distansion idarəetmə sistemi quraşdırılması.
        </p>

        {/* ── Referanslar ── */}
        <h2>Tamamlanan Layihələr – Referanslar</h2>
        <ul>
          <li>
            Hyatt Regency Bakı – Çöl Hovuz Tikintisi
          </li>
          <li>
            My Class İdman Kompleksi (Yasamal, Bakı) – Hovuz, Cakuzi, Türk
            Hamamı, Sauna
          </li>
          <li>Özəl Villa – Infinity Hovuz, Bilgəh, Mircəlal küçəsi</li>
          <li>Özəl Villa – Daşma Hovuz, Badamdar</li>
        </ul>

        {/* ── Əlaqə / NAP ── */}
        <h2>Əlaqə – Turan İnşaat MMC | Bakı</h2>
        <address>
          <p>
            Turan İnşaat MMC, Bakı şəhəri, Abşeron rayonu, Binəqədi-Novxanı
            şossesi, Novxanı kəndi (Berlin Avto ilə üzbəüz).
          </p>
          <p>
            Tel: +994 55 751 31 15 | +994 50 312 76 57 | +994 50 635 05 20
          </p>
          <p>Ofis: +994 12 348 28 75</p>
          <p>
            E-mail:{" "}
            <a href="mailto:farizmehdiyevs@mail.ru">farizmehdiyevs@mail.ru</a>
          </p>
          <p>
            Sayt:{" "}
            <a href="https://www.turanprojects.az">www.turanprojects.az</a>
          </p>
        </address>
      </div>

      {/* ── Visible Page Sections ── */}
      <HeroWrapper />
      <AboutUs />
      <OurServices />
      <OurProjects />
      <ProductsHome />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}