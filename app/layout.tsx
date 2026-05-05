import type { Metadata } from "next";
import { Manrope, DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import LayoutClient from "./LayoutClient";
import SchemaOrg from "@/components/seo/SchemaOrg";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "cyrillic"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const BASE_URL = "https://turanprojects.az";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Turan İnşaat | Hovuz və SPA Tikintisi Bakı",
    template: "%s | Turan İnşaat",
  },

  description:
    "Bakıda peşəkar hovuz tikintisi, SPA mərkəzləri, filtrasiya və isitmə sistemləri. Yaşayış və kommersiya obyektlərinin layihələndirilməsi və inşaatı.",

  keywords: [
    "hovuz tikintisi bakı",
    "spa mərkəzi bakı",
    "filtrasiya sistemləri",
    "inşaat şirkəti azərbaycan",
    "turan inşaat",
    "pool construction baku",
    "hovuz qurulması",
  ],

  authors: [{ name: "Turan İnşaat MMC" }],
  creator: "Turan İnşaat MMC",

  openGraph: {
    title: "Turan İnşaat | Hovuz və SPA Tikintisi Bakı",
    description:
      "Bakıda peşəkar hovuz tikintisi, SPA mərkəzləri, filtrasiya və isitmə sistemləri.",
    url: BASE_URL,
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
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
    images: [`${BASE_URL}/images/og-image.jpg`],
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

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${dmSans.variable} antialiased`}
      >
        <SchemaOrg /> 
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}