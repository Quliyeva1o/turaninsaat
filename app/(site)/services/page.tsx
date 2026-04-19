'use client';
import { servicesContent } from '@/utils';
import { useRouter } from 'next/navigation';

interface Props {
  locale?: "az" | "en";
}



export default function Services({ locale = "az" }: Props) {

  const services = servicesContent[locale];
  const router = useRouter();

  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s: any, i: any) => (
            <article
              key={i}
              data-aos="fade-up"
              data-aos-offset={-300}
              onClick={() => router.push(`/services/${s.slug}`)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              {/* Şəkil */}
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-50 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-2xl" />

              {/* Content */}
              <div
                className="
    absolute bottom-0 left-4 right-4 p-4 sm:p-5 lg:p-2 z-20
    transform translate-y-0 
    md:translate-y-[20%] md:group-hover:-translate-y-4
    transition-transform duration-500
  "
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white leading-tight">                  {s.title}
                </h3>

                <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-slate-200 leading-snug line-clamp-3 sm:line-clamp-none">                  {s.desc}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                  {locale === "az" ? "Ətraflı →" : "Learn More →"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}