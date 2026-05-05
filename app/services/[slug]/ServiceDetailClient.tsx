
"use client";
import Link from "next/link";
import Image from "next/image";

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

        {/* ── Breadcrumb (visible + accessible) ────────────────── */}
        <nav aria-label="breadcrumb" className="text-sm mb-6 text-gray-400">
          <ol className="flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="hover:text-[#00A8B5] transition-colors">
                <span itemProp="name">Ana səhifə</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <span aria-hidden="true" className="mx-1">/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/services" itemProp="item" className="hover:text-[#00A8B5] transition-colors">
                <span itemProp="name">Xidmətlər</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <span aria-hidden="true" className="mx-1">/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-200">{service.title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm mb-10 text-[#00A8B5] hover:underline"
          aria-label="Bütün xidmətlərə qayıt"
        >
          ← Bütün xidmətlər
        </Link>

        {/* ── H1 — every service detail page has a unique, keyword-rich H1 ── */}
        <h1 className="font-extrabold leading-tight mb-4 text-[#FAF6EC] text-[clamp(28px,4vw,48px)]">
          {service.title}
        </h1>

        <p className="text-base mb-10 text-[rgba(200,232,234,0.65)]">
          {service.desc}
        </p>

        <Image
          src={service.img}
          alt={`${service.title} — Turan İnşaat MMC Bakı`}
          width={1200}
          height={600}
          priority
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-14"
        />

        <div className="space-y-12">
          {service.sections.map((section) => (
            <div key={section.title}>
              {/* H2 for each section */}
              <h2 className="text-xl font-bold mb-6 text-[#00A8B5]">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl overflow-hidden shadow-lg group bg-[#0f2a3f]"
                  >
                    <Image
                      src={item.img}
                      alt={`${item.title.split("–")[0].trim()} — ${service.title}`}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-4 flex gap-2">
                      <span className="text-[#00A8B5]" aria-hidden="true">•</span>
                      {/* Use <p> not <p> with raw bullet — semantically correct */}
                      <p className="text-sm leading-snug text-[rgba(200,232,234,0.85)]">
                        {item.title}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Section ───────────────────────────────────────── */}
        <div className="mt-20 rounded-2xl bg-[#0f2a3f] border border-[#00A8B5]/20 p-10 text-center">
          <h2 className="text-2xl font-bold text-[#FAF6EC] mb-3">
            {service.title} üzrə məsləhət almaq istəyirsiniz?
          </h2>
          <p className="text-[rgba(200,232,234,0.65)] mb-6">
            Peşəkar komandamız layihənizi planlaşdırmaqda sizə kömək edəcək.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00A8B5] hover:bg-[#0097a3] transition-colors text-white font-semibold px-8 py-3 rounded-xl"
          >
            Bizimlə əlaqə saxlayın
          </Link>
        </div>

      </section>
    </main>
  );
}