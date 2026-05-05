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
          url: "https://www.turanprojects.az/images/logo.png",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bakı",
          addressCountry: "AZ",
        },
        telephone: "+994XXXXXXXXX", // ← öz nömrənizi yazın
        priceRange: "$$",
        openingHours: "Mo-Fr 09:00-18:00",
        sameAs: [
          // hazır olduqda əlavə edin:
          // "https://www.instagram.com/turaninsaat",
          // "https://www.facebook.com/turaninsaat",
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