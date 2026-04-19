'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import { servicesContent } from '@/utils';
import { Autoplay, Pagination } from "swiper/modules";

interface Props {
  locale?: 'az' | 'en';
}

export default function OurServices({ locale = 'az' }: Props) {
  const router = useRouter();
  const services = servicesContent[locale];

  return (
    <section
      aria-label="Our Services"
      style={{ background: "#0A1E30" }}
      className="pt-5 pb-15 lg:pt-12 lg:pb-22 text-white overflow-hidden"
    >
      {/* top teal border */}
      {/* <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }} /> */}

      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 pt-12">

        {/* ── Section header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 uppercase font-bold tracking-[0.28em] mb-5"
            style={{ color: "#00A8B5", fontSize: 11 }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
            {locale === 'az' ? "Xidmətlərimiz" : "Our Services"}
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
          </p>

          <h2
            data-aos="fade-up"
            className="font-extrabold leading-[1.1] tracking-tight mb-6"
            style={{ color: "#FAF6EC", fontSize: "clamp(28px, 5vw, 52px)" }}
          >
            {locale === 'az'
              ? "Premium hovuz və spa layihələri"
              : "Premium Pools & Spa Solutions"}
          </h2>

          <div
            data-aos="fade-up"
            className="mx-auto mb-6"
            style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }}
          />

          <p
            data-aos="fade-up"
            className="text-[15px] sm:text-[16px] leading-relaxed"
            style={{ color: "rgba(200,232,234,0.65)" }}
          >
            {locale === 'az'
              ? "Turan İnşaat olaraq fərdi və ictimai hovuzlar, türk hamamı, sauna və spa layihələrinin dizaynı və tikintisində peşəkar xidmət göstəririk. İdeal həllərimiz villa, otel və spa mərkəzləri üçün nəzərdə tutulub."
              : "Turan Construction provides professional design and construction of private and public pools, Turkish baths, saunas, and spa projects. Our solutions are ideal for villas, hotels, and spa centers."}
          </p>
        </div>

        {/* ── Swiper ── */}
     <div className="mt-20 swipperwrapper">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}

            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}

          >
            {services.map((s: any, i: any) => (
              <SwiperSlide key={i}>
                <div
                data-aos="fade-up"
                  onClick={() => router.push(`/services/${s.slug}`)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-2xl" />
                  <div className="absolute bottom-0 left-4 right-4 p-4 z-20 transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold font-[var(--font-manrope)]">{s.title}</h3>
                    <p className="text-sm mt-6 text-slate-200 font-[var(--font-dm-sans)]">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                      Ətraflı →
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── CTA ── */}
        <div data-aos="fade-up" className="flex justify-center mt-4">
          <Button
            text={locale === 'az' ? "Bütün xidmətlər" : "All Services"}
            link="/services"
            type={4}
          />
        </div>

      </div>

      {/* bottom teal border */}
      {/* <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #007A85, transparent)", marginTop: 64 }} /> */}

      {/* swiper pagination dot override */}
      <style>{`
        .services-swiper-wrapper .swiper-pagination-bullet {
          background: rgba(200,232,234,0.3);
          opacity: 1;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .services-swiper-wrapper .swiper-pagination-bullet-active {
          background: #00A8B5;
          width: 20px;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}