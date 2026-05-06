import type { Metadata } from "next";
import { Manrope, DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import LayoutClient from "./LayoutClient";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Script from "next/script";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "cyrillic"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const BASE_URL = "https://www.turanprojects.az";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Turan İnşaat | Hovuz, SPA və Hamam Tikintisi Bakı",
    template: "%s | Turan İnşaat",
  },

  description:
    "Bakıda peşəkar hovuz tikintisi, SPA və hamam tikintisi üzrə peşəkar xidmətlər, filtrasiya və isitmə sistemləri. Yaşayış və kommersiya obyektlərinin fərdi layihələndirilməsi. Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın.",

  keywords: [
    // ── Əsas brendlər / şirkət ──
    "turan inşaat",
    "turan inşaat mmc",
    "turanprojects",
    "turanprojects.az",
    "lisenziyalı inşaat şirkəti bakı",
    "inşaat şirkəti azərbaycan",

    // ── Hovuz tikintisi – ümumi ──
    "hovuz tikintisi bakı",
    "hovuz tikintisi azərbaycan",
    "hovuz qurulması",
    "hovuz layihələndirilməsi",
    "hovuz quraşdırılması",
    "pool construction baku",
    "pool installation azerbaijan",
    "hovuz dizaynı",
    "hovuz qiyməti bakı",
    "hovuz tikintisi qiyməti",

    // ── Hovuz növləri ──
    "fərdi hovuz tikintisi",
    "villa hovuzu bakı",
    "bağ evi hovuzu",
    "ictimai hovuz tikintisi",
    "olimpiya hovuzu",
    "yarı olimpiya hovuzu",
    "uşaq hovuzu",
    "infinity hovuz bakı",
    "sonsuzluq hovuzu",
    "daşma hovuz",
    "skimmer hovuz",
    "akrilik hovuz",
    "şəffaf hovuz",
    "təbii hovuz",
    "ekoloji hovuz",
    "şok hovuz",
    "soyuq hovuz spa",
    "dalgıc hovuzu",
    "diving pool baku",
    "hidromassajlı hovuz",
    "cakuzi quraşdırılması",
    "jet stream hovuz",
    "axınlı hovuz",

    // ── Filtrasiya və su təmizləmə ──
    "hovuz filtrasiya sistemi",
    "skimmer filtrasiya",
    "duz elektroliz sistemi hovuz",
    "uv dezinfeksiya sistemi",
    "avtomatik kimyəvi dozaj sistemi",
    "kartricli filtrasiya sistemi",
    "hovuz su təmizləmə",
    "hovuz ph balansı",
    "hovuz xlor sistemi",

    // ── İsitmə və soyutma ──
    "hovuz isitmə sistemi",
    "isitmə pompası hovuz",
    "heat pump hovuz bakı",
    "hovuz eşenjoru",
    "boru tipli eşenjor",
    "plaka tipli eşenjor",
    "hovuz suyu qızdırılması",

    // ── Hovuz avadanlıqları ──
    "avtomatik robot təmizləyici hovuz",
    "hovuz robotu",
    "şəlalə qurğusu hovuz",
    "dalğa yaradan qurğu",
    "aquapark sistemi",
    "hovuz slayd",
    "distansiyon nəzarət hovuz",
    "smart hovuz idarəetmə",

    // ── SPA mərkəzi ──
    "spa mərkəzi bakı",
    "spa tikintisi bakı",
    "spa kompleksi quraşdırılması",
    "wellness mərkəzi bakı",
    "spa layihələndirilməsi",
    "spa construction baku",

    // ── Türk hamamı ──
    "türk hamamı tikintisi bakı",
    "hamam tikintisi",
    "türk hamamı quraşdırılması",
    "hammam construction baku",
    "mərmər hamam",
    "hamam dizaynı",
    "hamam qiyməti bakı",

    // ── Rus hamamı ──
    "rus hamamı tikintisi",
    "banya tikintisi bakı",
    "rus hamamı quraşdırılması",
    "buxar otağı",
    "süpürgə terapiyası",

    // ── Sauna ──
    "sauna tikintisi bakı",
    "sauna quraşdırılması",
    "finlandiya saunası",
    "sauna ağacı",
    "lipa sauna",
    "abaş ağacı sauna",
    "sauna construction baku",
    "sauna qiyməti bakı",

    // ── Digər SPA otaqları ──
    "sulu par otağı",
    "buxar otağı tikintisi",
    "duz otağı bakı",
    "haloterapiya otağı",
    "halotherapy room baku",
    "kisə otağı",
    "masaj otağı tikintisi",
    "buz otağı ice room",
    "şok duş",
    "tropik duş",
    "aromaterapiya otağı",
    "infraqırmızı sauna",
    "infrared sauna baku",

    // ── SPA avadanlıqları ──
    "şok vedrəsi spa",
    "buz bulağı spa",
    "kar çeşməsi spa",
    "kontrast terapiyası avadanlığı",

    // ── Coğrafi hədəflər ──
    "hovuz tikintisi abşeron",
    "hovuz tikintisi sumqayıt",
    "hovuz tikintisi gəncə",
    "hovuz tikintisi lənkəran",
    "hovuz tikintisi novxanı",
    "hovuz tikintisi bilgəh",
    "hovuz tikintisi badamdar",
    "hovuz tikintisi nardaran",
    "hovuz tikintisi mərdəkan",
    "hovuz tikintisi buzovna",

    // ── Kommersiya / otel ──
    "otel hovuzu tikintisi",
    "otel spa tikintisi",
    "idman kompleksi hovuzu",
    "aquapark tikintisi azərbaycan",
    "kommersiya hovuzu bakı",
  ],

  authors: [{ name: "Turan İnşaat MMC" }],
  creator: "Turan İnşaat MMC",

  openGraph: {
    title: "Turan İnşaat | Hovuz və SPA Tikintisi Bakı",
    description:
      "Bakıda peşəkar hovuz tikintisi, SPA mərkəzləri, filtrasiya və isitmə sistemləri. Yaşayış və kommersiya obyektlərinin fərdi layihələndirilməsi. Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın.",
    url: BASE_URL,
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/assets/images/logo.webp`,
        width: 1200,
        height: 630,
        alt: "Turan İnşaat — Hovuz və SPA Tikintisi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Turan İnşaat | Hovuz və SPA Tikintisi",
    description: "Bakıda peşəkar hovuz tikintisi və SPA həlləri.",
    images: [`${BASE_URL}/assets/images/logo.webp`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "https://www.turanprojects.az/assets/images/logo.webp",
    shortcut: "https://www.turanprojects.az/assets/images/logo.webp",
    apple: "https://www.turanprojects.az/assets/images/logo.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WVLCWTLX4T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WVLCWTLX4T');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${dmSans.variable} antialiased`}
      >
        <SchemaOrg />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}