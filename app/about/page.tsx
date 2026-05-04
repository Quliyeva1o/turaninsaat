import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haqqımızda | Turan İnşaat – Hovuz, Sauna və Spa Mütəxəssisləri",
  description:
    "Turan İnşaat MMC — Azərbaycanda lisenziyalı hovuz tikintisi, sauna, türk hamamı və spa quraşdırması üzrə 12+ il təcrübəli şirkət. 200+ tamamlanmış layihə, Hyatt Regency, My Class və s. referanslar.",
  keywords: [
    "Turan İnşaat haqqında",
    "hovuz tikintisi şirkəti Bakı",
    "lisenziyalı inşaat MMC",
    "sauna quraşdırma Azərbaycan",
    "türk hamamı tikintisi",
    "spa həlləri Bakı",
    "hovuz mütəxəssisi",
    "Hyatt Regency hovuz",
    "My Class Yasamal hovuz",
    "turanprojects.az",
  ],
  openGraph: {
    title: "Haqqımızda | Turan İnşaat MMC",
    description:
      "12+ il təcrübə, 200+ tamamlanmış layihə. Hovuz, sauna, türk hamamı, rus hamamı, duz otağı və spa sahəsində Azərbaycanın etibarlı mütəxəssisi.",
    url: "https://turaninshaat.az/about",
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/assets/images/certificate.png",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat MMC – Lisenziya Sertifikatı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haqqımızda | Turan İnşaat MMC",
    description:
      "Azərbaycanda hovuz, sauna, türk hamamı və spa sahəsində lisenziyalı şirkət. 200+ tamamlanmış layihə.",
    images: ["/assets/images/certificate.png"],
  },
  alternates: {
    canonical: "https://turaninshaat.az/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Turan İnşaat MMC",
  "description": "Hovuz tikintisi, sauna, türk hamamı, spa quraşdırması üzrə lisenziyalı şirkət",
  "url": "https://turaninshaat.az",
  "telephone": ["+994503127657", "+994557513115"],
  "email": "turaninshaat21@mail.ru",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Binəqədi-Novxanı şossesi, Novxanı kəndi",
    "addressLocality": "Bakı",
    "addressCountry": "AZ"
  },
  "sameAs": [
    "https://instagram.com/turanprojects.az",
    "https://tiktok.com/@turanprojects.az",
    "https://turanprojects.az"
  ]
};


export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient locale="az" />
    </>
  );
}