export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://www.turanprojects.az/#organization",
        name: "Turan İnşaat MMC",
        url: "https://www.turanprojects.az",
        logo: {
          "@type": "ImageObject",
          url: "https://www.turanprojects.az/assets/images/logo.webp",
          width: 512,
          height: 512,
        },
        image: "https://www.turanprojects.az/assets/images/logo.webp",

        description:
          "Bakıda hovuz tikintisi, SPA və hamam tikintisi üzrə peşəkar xidmətlər. Filtrasiya və isitmə sistemləri ilə fərdi layihələr.",

        keywords:
          "hovuz tikintisi, spa tikintisi, hamam tikintisi, sauna tikintisi, hovuz qurulması bakı",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Baku",
          addressCountry: "AZ",
        },

        telephone: "+994503127657",
        priceRange: "$$",
        openingHours: "Mo-Fr 09:00-18:00",

        sameAs: [
          "https://www.instagram.com/turanprojects.az",
          "https://www.tiktok.com/@turanprojects.az",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://www.turanprojects.az/#website",
        url: "https://www.turanprojects.az",
        name: "Turan İnşaat",
        inLanguage: "az",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}