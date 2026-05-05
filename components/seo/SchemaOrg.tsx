export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://turanprojects.az/#organization",
        name: "Turan İnşaat MMC",
        url: "https://turanprojects.az",
        logo: {
          "@type": "ImageObject",
          url: "https://turanprojects.az/images/logo.png",
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
        "@id": "https://turanprojects.az/#website",
        url: "https://turanprojects.az",
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