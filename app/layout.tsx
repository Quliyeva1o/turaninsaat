import type { Metadata } from "next";
import { Manrope, DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import LayoutClient from "./LayoutClient";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.turanprojects.az";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Turan İnşaat | Hovuz və SPA Tikintisi",
    template: "%s | Turan İnşaat",
  },

  description:
    "Bakıda hovuz tikintisi, SPA, türk hamamı, rus hamamı, sauna, duz otağı, filtrasiya və isitmə sistemləri üzrə peşəkar xidmətlər.",

  // alternates: {
  //   canonical: BASE_URL,
  //   languages: {
  //     "az-AZ": BASE_URL,
  //   },
  // },

  authors: [{ name: "Turan İnşaat MMC" }],
  creator: "Turan İnşaat MMC",

  openGraph: {
    title: "Turan İnşaat | Hovuz və SPA Tikintisi",
    description:
      "Bakıda hovuz, SPA, hamam, sauna və su sistemləri üzrə peşəkar layihələndirmə və tikinti xidmətləri.",
    url: BASE_URL,
    siteName: "Turan İnşaat MMC",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/assets/images/logo.webp`,
        width: 1200,
        height: 630,
        alt: "Turan İnşaat MMC — Hovuz və SPA Tikintisi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Turan İnşaat | Hovuz və SPA Tikintisi",
    description:
      "Bakıda hovuz tikintisi, SPA, hamam, sauna və su sistemləri üzrə peşəkar xidmətlər.",
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
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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