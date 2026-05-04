'use client';
import { useParams } from "next/navigation";
import Link from "next/link";
import { servicesContent } from "@/utils";

interface Props {
  locale?: "az" | "en";
}

export default function ServiceDetail({ locale = "az" }: Props) {
  const params = useParams();
  const slug = params.slug as string;

  const service = servicesContent[locale].find((s: any) => s.slug === slug);

  if (!service) {
    return (
      <main style={{ background: "#0A1E30" }} className="min-h-screen flex flex-col items-center justify-center text-white">
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
    <main style={{ background: "#0A1E30" }} className="min-h-screen text-white">
      <section className="max-w-5xl mx-auto py-24 px-6">

        {/* Geri düyməsi */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: "#00A8B5" }}
        >
          ← {locale === "az" ? "Bütün xidmətlər" : "All Services"}
        </Link>

        {/* Başlıq */}
        <h1
          className="font-extrabold leading-tight mb-4"
          style={{ color: "#FAF6EC", fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          {service.title}
        </h1>

        <p className="text-base mb-10" style={{ color: "rgba(200,232,234,0.65)" }}>
          {service.desc}
        </p>

        {/* Şəkil */}
        {service.img && (
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-14"
          />
        )}

        {/* Sections */}
        <div className="space-y-12">
          {service.sections.map((section: any, i: number) => (
            <div key={i}>
              <h2 className="text-xl font-bold mb-6" style={{ color: "#00A8B5" }}>
                {section.title}
              </h2>

              {/* ✅ item artıq obyektdir — item.title istifadə edilir */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden shadow-lg group"
                    style={{ background: "#0f2a3f" }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-4 flex gap-2">
                      <span style={{ color: "#00A8B5" }}>•</span>
                      <p className="text-sm leading-snug" style={{ color: "rgba(200,232,234,0.85)" }}>
                        {item.title}  {/* ✅ əvvəl {item} idi — xəta buradan gəlirdi */}
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