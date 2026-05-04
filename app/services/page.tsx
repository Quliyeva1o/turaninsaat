import { servicesContent } from "@/utils";
import type { Metadata } from "next";
import HeroWrapper from "@/components/home/heroWrapper";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: "Xidmətlərimiz",
  description:
    "Turan İnşaatın hovuz tikintisi, SPA, filtrasiya, isitmə və su abadlığı xidmətləri. Bakı və Azərbaycan üzrə peşəkar həllər.",
  alternates: {
    canonical: "https://www.turanprojects.az/services",
  },
  openGraph: {
    title: "Xidmətlərimiz | Turan İnşaat",
    description: "Hovuz, SPA, filtrasiya və isitmə sistemləri üzrə xidmətlər.",
    url: "https://www.turanprojects.az/services",
  },
};

export default function ServicesPage() {
  // ✅ Server-də locale müəyyən et — prop kimi yox
  const services = servicesContent["az"];

  return (
    <main className="bg-gray-50 text-gray-900">
      <HeroWrapper />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">

        {/* ✅ Google bu h1-i görür */}
        <h1 className="sr-only">Xidmətlərimiz</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service:any) => (
            // ✅ key slug-dır, i yox
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}