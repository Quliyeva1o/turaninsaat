import type { Metadata } from "next";
import ProductCatalog from "./ProductCatalog";

export const metadata: Metadata = {
  title: "2026 Hovuz Məhsulları | Premium Hovuz Avadanlıqları",
  description:
    "2026 hovuz məhsulları kataloqu. Filtrlər, nasoslar, aksesuarlar və daha çox. Türkiyə və İspaniya istehsalı premium hovuz avadanlıqları.",
  keywords: [
    "hovuz məhsulları",
    "hovuz avadanlıqları",
    "pool equipment Azerbaijan",
    "hovuz filteri",
    "hovuz nasosu",
  ],
  openGraph: {
    title: "2026 Hovuz Məhsulları",
    description:
      "Premium hovuz avadanlıqları və aksesuarlar kataloqu.",
    url: "https://yourdomain.com/products",
    siteName: "Your Brand",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hovuz məhsulları kataloqu",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Hovuz Məhsulları",
    description: "Premium hovuz məhsulları kataloqu",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <ProductCatalog />;
}