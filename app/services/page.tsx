import { servicesContent } from "@/utils";
import type { Metadata } from "next";
import HeroWrapper from "@/components/home/heroWrapper";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: "Xidmətlərimiz – Hovuz, SPA, Türk Hamamı, Sauna, Duz Otağı Tikintisi | Turan İnşaat Bakı",
  description:
    "Bakıda lisenziyalı hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna, infraqırmızı sauna, duz otağı, filtrasiya, isitmə sistemləri, şəlalə, aquapark quraşdırılması. Hyatt Regency, My Class referansları. Pulsuz konsultasiya: +994 55 751 31 15.",
  keywords: [
    // ── Hovuz tikintisi ──
    "hovuz tikintisi bakı",
    "hovuz quraşdırılması",
    "hovuz layihələndirilməsi",
    "hovuz tikintisi azərbaycan",
    "hovuz dizaynı bakı",
    "pool construction baku",
    "fərdi hovuz tikintisi",
    "villa hovuzu bakı",
    "bağ evi hovuzu",
    "infinity hovuz bakı",
    "sonsuzluq hovuzu",
    "daşma hovuz tikintisi",
    "skimmer hovuz",
    "olimpiya hovuzu tikintisi",
    "yarı olimpiya hovuzu",
    "uşaq hovuzu tikintisi",
    "akrilik hovuz",
    "şəffaf hovuz",
    "təbii hovuz ekoloji",
    "şok hovuz soyuq hovuz",
    "dalgıc hovuzu",
    "hidromassajlı hovuz",
    "cakuzi quraşdırılması",
    "jet stream hovuz",
    "ictimai hovuz tikintisi",
    "otel hovuzu bakı",

    // ── Filtrasiya və su təmizləmə ──
    "hovuz filtrasiya sistemi",
    "duz elektroliz sistemi hovuz",
    "uv dezinfeksiya sistemi hovuz",
    "avtomatik kimyəvi dozaj sistemi",
    "kartricli filtrasiya sistemi",
    "hovuz robot təmizləyici",
    "hovuz su təmizləmə bakı",
    "hovuz ph balansı",

    // ── İsitmə və soyutma ──
    "hovuz isitmə sistemi",
    "heat pump hovuz bakı",
    "isitmə pompası hovuz",
    "boru tipli eşenjor",
    "plaka tipli eşenjor",
    "hovuz suyu qızdırılması",

    // ── Əlavə avadanlıqlar ──
    "şəlalə qurğusu hovuz",
    "dalğa yaradan qurğu hovuz",
    "aquapark sistemi bakı",
    "hovuz slayd",
    "distansiyon nəzarət hovuz",
    "smart hovuz idarəetmə",

    // ── SPA ──
    "spa mərkəzi bakı",
    "spa tikintisi bakı",
    "spa kompleksi quraşdırılması",
    "wellness mərkəzi bakı",
    "spa construction baku",

    // ── Türk hamamı ──
    "türk hamamı tikintisi bakı",
    "hamam tikintisi azərbaycan",
    "türk hamamı quraşdırılması",
    "hammam construction baku",
    "mərmər hamam dizaynı",
    "hamam qiyməti bakı",

    // ── Rus hamamı ──
    "rus hamamı tikintisi bakı",
    "banya tikintisi bakı",
    "buxar otağı tikintisi",
    "süpürgə terapiyası banya",

    // ── Sauna ──
    "sauna tikintisi bakı",
    "sauna quraşdırılması azərbaycan",
    "finlandiya saunası bakı",
    "sauna ağacı lipa abaş",
    "sauna construction baku",
    "sauna qiyməti bakı",

    // ── Digər SPA otaqları ──
    "infraqırmızı sauna bakı",
    "infrared sauna baku",
    "duz otağı bakı",
    "haloterapiya otağı",
    "halotherapy room baku",
    "sulu par otağı tikintisi",
    "kisə otağı spa",
    "masaj otağı tikintisi",
    "buz otağı ice room",
    "şok duş tropik duş",
    "aromaterapiya otağı",

    // ── SPA avadanlıqları ──
    "şok vedrəsi spa",
    "buz bulağı kar çeşməsi",
    "kontrast terapiyası avadanlığı",

    // ── Coğrafi ──
    "hovuz tikintisi abşeron",
    "hovuz tikintisi novxanı",
    "hovuz tikintisi bilgəh",
    "hovuz tikintisi badamdar",
    "hovuz tikintisi sumqayıt",
    "hovuz tikintisi gəncə",
    "hovuz tikintisi lənkəran",
    "hovuz tikintisi nardaran",

    // ── Brend ──
    "turan inşaat",
    "turan inşaat mmc",
    "turanprojects az",
    "lisenziyalı inşaat şirkəti bakı",
    "inşaat şirkəti azərbaycan",
  ],
  alternates: {
    canonical: "https://www.turanprojects.az/services",
    languages: {
      "az-AZ": "https://www.turanprojects.az/services",
    },
  },
  openGraph: {
    title: "Xidmətlərimiz – Hovuz, SPA, Türk Hamamı, Sauna, Duz Otağı | Turan İnşaat Bakı",
    description:
      "Bakıda lisenziyalı hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna, duz otağı, filtrasiya və isitmə sistemləri. Hyatt Regency, My Class kimi nüfuzlu referanslar. Pulsuz konsultasiya: +994 55 751 31 15.",
    url: "https://www.turanprojects.az/services",
    siteName: "Turan İnşaat MMC",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "https://www.turanprojects.az/assets/images/og-services.webp",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat MMC — Hovuz, SPA, Hamam və Sauna Tikintisi Xidmətləri Bakı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hovuz, SPA, Türk Hamamı, Sauna, Duz Otağı Tikintisi | Turan İnşaat Bakı",
    description:
      "Bakıda lisenziyalı hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna, infraqırmızı sauna, duz otağı, filtrasiya sistemləri. Pulsuz konsultasiya: +994 55 751 31 15.",
    images: ["https://www.turanprojects.az/assets/images/og-services.webp"],
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
  icons: {
    icon: "https://www.turanprojects.az/assets/images/logo.webp",
    shortcut: "https://www.turanprojects.az/assets/images/logo.webp",
    apple: "https://www.turanprojects.az/assets/images/logo.webp",
  },
  category: "construction",
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

  // ─── ItemList JSON-LD ─────────────────────────────────────
  const serviceListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Turan İnşaat Xidmətləri",
    description:
      "Hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna, infraqırmızı sauna, duz otağı, filtrasiya, isitmə sistemləri, şəlalə və aquapark xidmətləri",
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
          telephone: "+994557513115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Binəqədi-Novxanı şossesi, Novxanı kəndi",
            addressLocality: "Bakı",
            addressRegion: "Abşeron",
            addressCountry: "AZ",
          },
        },
      },
    })),
  };

  // ─── WebPage JSON-LD ──────────────────────────────────────
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.turanprojects.az/services",
    name: "Xidmətlərimiz – Hovuz, SPA, Hamam, Sauna Tikintisi",
    description:
      "Bakıda hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna, infraqırmızı sauna, duz otağı, filtrasiya və isitmə sistemləri xidmətləri.",
    url: "https://www.turanprojects.az/services",
    inLanguage: "az-AZ",
    isPartOf: {
      "@type": "WebSite",
      name: "Turan İnşaat MMC",
      url: "https://www.turanprojects.az",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana səhifə", item: "https://www.turanprojects.az" },
        { "@type": "ListItem", position: 2, name: "Xidmətlər", item: "https://www.turanprojects.az/services" },
      ],
    },
  };

  // ─── FAQPage JSON-LD ──────────────────────────────────────
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hovuz tikintisi nə qədər vaxt aparır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fərdi hovuz tikintisi orta hesabla 4–8 həftə, böyük ictimai hovuzlar isə 3–6 ay müddət tələb edir. Dəqiq müddət hovuzun ölçüsünə, tipinə və quraşdırılacaq avadanlıqlara görə dəyişir.",
        },
      },
      {
        "@type": "Question",
        name: "Bakıda hovuz tikintisinin qiyməti nə qədərdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hovuz tikintisinin qiyməti hovuzun ölçüsünə, tipinə (skimmer/daşma/infinity), materiallarına, kafelə, filtrasiya sisteminə və əlavə avadanlıqlara görə müəyyən edilir. Dəqiq qiymət üçün +994 55 751 31 15 nömrəsinə zəng edin.",
        },
      },
      {
        "@type": "Question",
        name: "Türk hamamı ilə rus hamamı arasındakı fərq nədir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Türk hamamında temperatura 40–50°C, rütubət 90–100% olur, döşəmə və divarlar mərmərdən hazırlanır. Rus hamamında isə temperatur 50–70°C, rütubət 60–80% olur, interyerdə ağac materialları üstünlük təşkil edir.",
        },
      },
      {
        "@type": "Question",
        name: "Duz otağı kimlər üçün faydalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Duz otağı astma, bronxit, sinüzit, allergiya kimi tənəffüs yolu xəstəlikləri olan insanlar, dərmatit, ekzema problemləri yaşayanlar və stress azaltmaq istəyənlər üçün xüsusilə faydalıdır.",
        },
      },
      {
        "@type": "Question",
        name: "İnfraqırmızı sauna klassik saunadan nə ilə fərqlənir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Klassik sauna 80–100°C qızdırılmış havada işləyir. İnfraqırmızı sauna isə 50–60°C temperaturda bədəni birbaşa infraqırmızı şüalarla isidır, daha dərin toxuma penetrasiyası sağlayır, ürək problemi olan insanlar üçün daha münasibdir.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HeroWrapper />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        {/* Screen-reader visible h1 for SEO */}
        <h1 className="sr-only">
          Hovuz, SPA, Türk Hamamı, Rus Hamamı, Sauna, Duz Otağı, Filtrasiya və İsitmə Sistemi Tikintisi — Turan İnşaat MMC, Bakı
        </h1>

        {/* Hidden SEO content block */}
        <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none", zIndex: -1 }}>
          <h2>Hovuz Tikintisi Xidmətləri – Fərdi, İctimai, Olimpiya, Infinity</h2>
          <p>
            Turan İnşaat MMC Bakıda fərdi villa hovuzları, ictimai hovuzlar, olimpiya və yarı olimpiya
            hovuzları, infinity (sonsuzluq) hovuzlar, daşma tipli, skimmer tipli, akrilik, təbii,
            uşaq, şok, dalgıc, hidromassajlı cakuzi və jet stream hovuzların tikintisini həyata keçirir.
            Hyatt Regency Bakı, My Class İdman Kompleksi (Yasamal), Bilgəh və Badamdar layihələri
            şirkətimizin uğurlu referansları arasındadır.
          </p>

          <h2>Filtrasiya, Dezinfeksiya və Su Təmizləmə Sistemləri</h2>
          <p>
            Skimmer filtrasiya, daşma tipli filtrasiya, UV dezinfeksiya, duz elektroliz sistemi,
            avtomatik kimyəvi dozaj sistemi, kartricli filtrasiya və avtomatik robot təmizləyicilərin
            quraşdırılması xidmətlərini göstəririk. Hovuz suyunun pH balansı, xlor idarəetməsi
            və distansiyon nəzarət sistemləri ilə hovuzunuz daim optimal vəziyyətdə saxlanılır.
          </p>

          <h2>Hovuz İsitmə Sistemləri – Heat Pump, Eşenjor</h2>
          <p>
            İsitmə pompası (heat pump), boru tipli eşenjor və plaka tipli eşenjor quraşdırılması
            xidmətlərini göstəririk. Hər 1 kVt enerjiyə qarşılıq 4–6 kVt istilik istehsal edən
            enerji effektiv heat pump sistemləri ilə hovuzunuzu il boyu istifadəyə hazır saxlayın.
          </p>

          <h2>SPA Kompleksi Tikintisi – Türk Hamamı, Rus Hamamı, Sauna</h2>
          <p>
            Türk hamamı tikintisi: təbii mərmər, mis, əl işi dekorlar ilə klassik osmanlı estetikası.
            Rus hamamı (banya): 50–70°C temperatur, palıd və ağcaqayın süpürgə terapiyası.
            Sauna: Lipa, Abaş, Kedr, Hemlok, Palıd ağaclarından hazırlanmış finlandiya saunaları.
            İnfraqırmızı sauna: 50–60°C-də dərin toxuma penetrasiyası, artrit və detoks üçün ideal.
          </p>

          <h2>Duz Otağı, Sulu Par Otağı, Buz Otağı, Aromaterapiya</h2>
          <p>
            Duz otağı (haloterapiya): astma, bronxit, sinüzit müalicəsi üçün. Sulu par otağı:
            buxar terapiyası ilə dərin rahatlıq. Buz otağı (Ice Room): kontrast terapiyası.
            Kisə otağı: dərinin yenilənməsi. Aromaterapiya otağı: efir yağları ilə əsəb
            sisteminin sakinləşdirilməsi. Şok duş və tropik duş quraşdırılması.
          </p>

          <h2>Əlavə Avadanlıqlar – Şəlalə, Dalğa, Aquapark</h2>
          <p>
            Duvar tipli şəlalə qurğuları, dalğa yaradan sistemlər, aquapark slaydları,
            su tunelləri, köpük fışqırdıcıları, şok vedrəsi, buz bulağı (kar çeşməsi)
            quraşdırılması xidmətləri göstəririk.
          </p>

          <h2>Xidmət Coğrafiyası</h2>
          <p>
            Bakı, Abşeron, Novxanı, Bilgəh, Badamdar, Nardaran, Mərdəkan, Buzovna,
            Sumqayıt, Gəncə, Lənkəran, Şirvan və Azərbaycanın bütün bölgələrindəki
            fərdi villalar, otellər, idman kompleksləri, SPA mərkəzləri üçün xidmət göstəririk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service: any) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}