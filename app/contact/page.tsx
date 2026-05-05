import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bizimlə Əlaqə | Turan İnşaat – Bakı, Novxanı",
  description:
    "Hovuz, sauna, jacuzzi, türk hamamı və spa layihələri üçün Turan İnşaat ilə əlaqə saxlayın. Tel: +994 50 312 76 57 | Ünvan: Bakı, Binəqədi-Novxanı şossesi, Novxanı kəndi",
  keywords: [
    "Turan İnşaat əlaqə",
    "hovuz tikintisi Bakı əlaqə",
    "sauna quraşdırılması Bakı",
    "türk hamamı Azərbaycan",
    "jacuzzi qiymət Bakı",
    "pool construction Baku contact",
    "Novxanı inşaat şirkəti",
    "Binəqədi hovuz",
    "turaninshaat21@mail.ru",
    "turanprojects.az əlaqə",
  ],
  openGraph: {
    title: "Bizimlə Əlaqə | Turan İnşaat",
    description:
      "Hovuz, sauna, jacuzzi, türk hamamı layihələri üçün bizimlə əlaqə saxlayın. Bakı, Novxanı – +994 50 312 76 57",
    url: "https://www.turanprojects.az/contact",
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/assets/images/contactus.webp",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat – Bizimlə Əlaqə",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizimlə Əlaqə | Turan İnşaat",
    description:
      "Hovuz, sauna, jacuzzi və hamam layihələri üçün peşəkar komandamızla əlaqə saxlayın. Bakı, Novxanı.",
    images: ["/assets/images/contactus.webp"],
  },
  alternates: {
    canonical: "https://www.turanprojects.az/contact",
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <ContactClient />;
}