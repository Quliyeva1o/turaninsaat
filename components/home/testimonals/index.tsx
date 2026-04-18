"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/common/Button";

type Product = {
  title: string;
  desc: string;
  image: string;
};

const products: Product[] = [
  {
    title: "Skimmer Hovuz Sistemləri",
    desc: "Sadə və sərfəli filtrasiya sistemi ilə şəxsi hovuzlar üçün ideal həll.",
    image: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
  },
  {
    title: "Daşma (Infinity) Hovuzlar",
    desc: "Estetik dizayn və yüksək su dövriyyəsi ilə premium hovuz sistemləri.",
    image: "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
  },
  {
    title: "UV Dezinfeksiya Sistemləri",
    desc: "Kimyəvi maddələri minimuma endirən müasir su təmizləmə texnologiyası.",
    image: "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
  },
  {
    title: "Duz Elektroliz Sistemləri",
    desc: "Duzdan xlor istehsal edərək suyu daha təbii və təmiz saxlayır.",
    image: "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
  },
];

export const Products = () => {
  return (
  <section
      aria-label="Our Products"
      style={{ background: "#0A1E30" }}
      className="pt-5 pb-15 lg:pt-12 lg:pb-22 text-white overflow-hidden"
    >          <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 pt-12">

        {/* ── Section header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 uppercase font-bold tracking-[0.28em] mb-5"
            style={{ color: "#00A8B5", fontSize: 11 }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
            Məhsullarımız

            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
          </p>

          <h2
            data-aos="fade-up"
            className="font-extrabold leading-[1.1] tracking-tight mb-6"
            style={{
              // color: "#FAF6EC",
              fontSize: "clamp(28px, 5vw, 52px)"
            }}
          >
            Hovuz və SPA üçün texnoloji həllər
          </h2>

          <div
            data-aos="fade-up"
            className="mx-auto mb-6"
            style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }}
          />

          <p
            data-aos="fade-up"
            className="text-[15px] text-gray-500 sm:text-[16px] leading-relaxed"
          // style={{ color: "rgba(200,232,234,0.65)" }}
          >
            Müasir hovuz sistemləri, filtrasiya və spa avadanlıqları ilə keyfiyyətli və uzunömürlü həllər təqdim edirik.

          </p>
        </div>


        <div className="swipperwrapper mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {products.map((p, i) => (
              <SwiperSlide key={i}>
                <div data-aos="fade-up"
                  data-aos-delay={i + 1 * 200} className="relative overflow-hidden rounded-[24px] group cursor-pointer">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px]" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-4 right-4 p-5 z-20 
        transform translate-y-[60%] group-hover:translate-y-0 
        transition-all duration-500">

                    <h3 className="text-lg font-bold text-white">
                      {p.title}
                    </h3>

                    <p className="text-sm mt-4 text-slate-200">
                      {p.desc}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                      Ətraflı →
                    </span>
                  </div>

                </div>
              </SwiperSlide>

            ))}
          </Swiper>

        </div>
        <div className="flex justify-center mt-8    ">
          <Button text="Bütün Məhsullar" type={4} link="/products" />
        </div>
      </div>
    </section>
  );
};