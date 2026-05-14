const BASE_URL = "https://www.turanprojects.az";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Turan İnşaat MMC",
    url: BASE_URL,
    image: `${BASE_URL}/assets/images/og-image.webp`,
    logo: `${BASE_URL}/assets/images/logo.webp`,
    description:
      "Turan İnşaat MMC Bakıda hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna, duz otağı, filtrasiya və isitmə sistemləri üzrə xidmət göstərir.",
    telephone: ["+994557513115", "+994503127657", "+994506350520"],
    email: "Turaninshaat21@mail.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Binəqədi-Novxanı şossesi, Novxanı kəndi",
      addressLocality: "Abşeron",
      addressRegion: "Abşeron",
      addressCountry: "AZ",
    },
    areaServed: [
      "Bakı",
      "Abşeron",
      "Novxanı",
      "Bilgəh",
      "Badamdar",
      "Sumqayıt",
      "Azərbaycan",
    ],
    sameAs: [
      "https://www.instagram.com/turanprojects.az",
      "https://www.tiktok.com/@turanprojects.az",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hovuz, SPA və Hamam Tikintisi Xidmətləri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hovuz Tikintisi",
            areaServed: "Azərbaycan",
            serviceType: "Pool construction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SPA Kompleksi Tikintisi",
            areaServed: "Azərbaycan",
            serviceType: "SPA construction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Türk Hamamı və Sauna Tikintisi",
            areaServed: "Azərbaycan",
            serviceType: "Hammam and sauna construction",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}