import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import LayoutClient from "./LayoutClient";
import SchemaOrg from "@/components/seo/SchemaOrg";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const BASE_URL = "https://www.turanprojects.az"; // ✅ tək mənbə — hər yerdə buradan istifadə et

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // ✅ yourcompany.az → turanprojects.az

  title: {
    default: "Turan İnşaat | Hovuz və SPA Tikintisi Bakı", // ✅ 50 simvol
    template: "%s | Turan İnşaat",                         // ✅ YourCompany → Turan İnşaat
  },

  description:
    "Bakıda peşəkar hovuz tikintisi, SPA mərkəzləri, filtrasiya və isitmə sistemləri. Yaşayış və kommersiya obyektlərinin layihələndirilməsi və inşaatı.", // ✅ 152 simvol (120-160 arası)

  keywords: [
    "hovuz tikintisi bakı",
    "spa mərkəzi",
    "filtrasiya sistemləri",
    "inşaat şirkəti azerbaycan",
    "turan inşaat",
    "pool construction baku",
  ],

  authors: [{ name: "Turan İnşaat MMC" }],
  creator: "Turan İnşaat MMC",

  openGraph: {
    title: "Turan İnşaat | Hovuz və SPA Tikintisi Bakı",
    description:
      "Bakıda peşəkar hovuz tikintisi, SPA mərkəzləri, filtrasiya və isitmə sistemləri. Fərdi layihələndirmə.",
    url: BASE_URL, // ✅ sabit dəyişəndən
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
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
    images: ["/images/og-image.jpg"],
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

  alternates: {
    canonical: BASE_URL,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${dmSans.variable} antialiased`}
      >  <SchemaOrg />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}