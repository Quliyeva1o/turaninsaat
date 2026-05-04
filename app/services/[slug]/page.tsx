import { servicesContent } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroWrapper from "@/components/home/heroWrapper";
import ServiceDetail from "./ServiceDetailClient";

type Props = { params: Promise<{ slug: string }> }; // ✅ Promise

// ✅ servicesContent-dən avtomatik — əl ilə map yoxdur
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ await
  const service = servicesContent["az"].find((s: any) => s.slug === slug);
  if (!service) {
    return {
      title: "Xidmət tapılmadı | Turan İnşaat",
    };
  }

  const url = `https://www.turanprojects.az/services/${service.slug}`;

  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Turan İnşaat`,
      description: service.desc,
      url,
      siteName: "Turan İnşaat MMC",
      locale: "az_AZ",
      type: "article",
      images: [
        {
          url: service.img,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

// ✅ Build zamanı bütün slug-ları statik generate et
export function generateStaticParams() {
  return servicesContent["az"].map((s: any) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params; // ✅ await
  const service = servicesContent["az"].find((s: any) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <HeroWrapper />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.desc,
            url: `https://www.turanprojects.az/services/${service.slug}`,
            image: service.img,
            provider: {
              "@type": "Organization",
              name: "Turan İnşaat MMC",
              url: "https://www.turanprojects.az",
            },
          }),
        }}
      />

      <ServiceDetail service={service} />
    </>
  );
}