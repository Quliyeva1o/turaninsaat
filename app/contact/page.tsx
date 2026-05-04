import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bizimlə Əlaqə | Turan İnşaat",
  description:
    "Hovuz, jacuzzi, sauna, türk hamamı və digər layihələr üçün Turan İnşaat ilə əlaqə saxlayın. Telefon: +994 50 312 76 57 | Email: turaninshaat21@mail.ru",
  keywords: [
    "Turan İnşaat əlaqə",
    "hovuz tikintisi Bakı",
    "sauna quraşdırılması",
    "türk hamamı Azərbaycan",
    "jacuzzi qiymət",
    "pool construction Baku",
    "əlaqə nömrəsi",
  ],
  openGraph: {
    title: "Bizimlə Əlaqə | Turan İnşaat",
    description:
      "Hovuz, sauna, jacuzzi və hamam layihələri üçün peşəkar komandamızla əlaqə saxlayın.",
    url: "https://turaninshaat.az/contact",
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/assets/images/contactus.jpg",
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
      "Hovuz, sauna, jacuzzi və hamam layihələri üçün peşəkar komandamızla əlaqə saxlayın.",
    images: ["/assets/images/contactus.jpg"],
  },
  alternates: {
    canonical: "https://turaninshaat.az/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}