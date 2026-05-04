'use client';

import { useParams } from "next/navigation";
import Link from "next/link";
import { servicesContent } from "@/utils";
import Image from "next/image";
import { useMemo } from "react";

interface Props {
  locale?: "az" | "en";
}

export default function ServiceDetailClient({ locale = "az" }: Props) {
  const params = useParams();
  const slug = params.slug as string;

  const service = useMemo(() => {
    return servicesContent[locale].find((s: any) => s.slug === slug);
  }, [slug, locale]);

  if (!service) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0A1E30]">
        <h1 className="text-3xl font-bold mb-4">
          {locale === "az" ? "Xidmət tapılmadı" : "Service not found"}
        </h1>
        <Link href="/services" className="text-[#00A8B5] underline">
          {locale === "az" ? "Geri qayıt" : "Go back"}
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white bg-[#0A1E30]">
      <section className="max-w-5xl mx-auto py-24 px-6">

        {/* 🔥 Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-400">
          <Link href="/">Ana səhifə</Link> /{" "}
          <Link href="/services">Xidmətlər</Link> /{" "}
          <span>{service.title}</span>
        </nav>

        {/* Back */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm mb-10 text-[#00A8B5]"
        >
          ← {locale === "az" ? "Bütün xidmətlər" : "All Services"}
        </Link>

        {/* H1 */}
        <h1 className="font-extrabold leading-tight mb-4 text-[#FAF6EC] text-[clamp(28px,4vw,48px)]">
          {service.title}
        </h1>

        <p className="text-base mb-10 text-[rgba(200,232,234,0.65)]">
          {service.desc}
        </p>

        {/* 🔥 MAIN IMAGE */}
        {service.img && (
          <Image
            src={service.img}
            alt={`${service.title} - Turan İnşaat hovuz və spa həlləri`}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-14"
          />
        )}

        {/* 🔥 JSON-LD (AI üçün) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.title,
              description: service.desc,
              provider: {
                "@type": "Organization",
                name: "Turan İnşaat MMC",
                url: "https://turanprojects.az",
              },
            }),
          }}
        />

        {/* Sections */}
        <div className="space-y-12">
          {service.sections.map((section: any, i: number) => (
            <div key={i}>
              <h2 className="text-xl font-bold mb-6 text-[#00A8B5]">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden shadow-lg group bg-[#0f2a3f]"
                  >
                    <Image
                      src={item?.img}
                      alt={`${item.title} - hovuz və spa avadanlığı`}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-4 flex gap-2">
                      <span className="text-[#00A8B5]">•</span>
                      <p className="text-sm leading-snug text-[rgba(200,232,234,0.85)]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}