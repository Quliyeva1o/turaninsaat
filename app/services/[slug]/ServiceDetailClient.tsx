"use client";
import Link from "next/link";
import Image from "next/image";

// ✅ tip servicesContent strukturuna uyğun
type ServiceItem = { title: string; img: string };
type ServiceSection = { title: string; items: ServiceItem[] };

type Service = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  sections: ServiceSection[];
};

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <main className="min-h-screen text-white bg-[#0A1E30]">
      <section className="max-w-5xl mx-auto py-24 px-6">

        {/* Breadcrumb — JSON-LD ilə birlikdə Google-da görünür */}
        <nav aria-label="breadcrumb" className="text-sm mb-6 text-gray-400">
          <Link href="/">Ana səhifə</Link>
          {" / "}
          <Link href="/services">Xidmətlər</Link>
          {" / "}
          <span className="text-gray-200">{service.title}</span>
        </nav>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm mb-10 text-[#00A8B5]"
        >
          ← Bütün xidmətlər
        </Link>

        <h1 className="font-extrabold leading-tight mb-4 text-[#FAF6EC] text-[clamp(28px,4vw,48px)]">
          {service.title}
        </h1>

        <p className="text-base mb-10 text-[rgba(200,232,234,0.65)]">
          {service.desc}
        </p>

        <Image
          src={service.img}
          alt={`${service.title} - Turan İnşaat`}
          width={1200}
          height={600}
          priority // ✅ LCP şəkli — lazy yox
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-14"
        />

        <div className="space-y-12">
          {service.sections.map((section) => (
            // ✅ key index yox — section title unikaldır
            <div key={section.title}>
              <h2 className="text-xl font-bold mb-6 text-[#00A8B5]">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl overflow-hidden shadow-lg group bg-[#0f2a3f]"
                  >
                    <Image
                      src={item.img}
                      alt={`${item.title} - hovuz avadanlığı`}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-4 flex gap-2">
                      <span className="text-[#00A8B5]" aria-hidden="true">•</span>
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