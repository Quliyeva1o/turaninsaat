"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number; // 1-5
};

const testimonials: Testimonial[] = [
  {
    name: "Jane Smith",
    role: "Interior Designer",
    avatar: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/author-2.jpg",
    content:
      "We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.",
    rating: 5,
  },
  {
    name: "Chris Martinez",
    role: "Logistics Coordinator",
    avatar: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/author-3.jpg",
    content:
      "We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.",
    rating: 5,
  },
  {
    name: "Alis White",
    role: "Structural Engineer",
    avatar: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/author-4.jpg",
    content:
      "We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className="w-5 h-5 fill-yellow-400 mr-1"
  >
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
  </svg>
);

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      {/* Section Heading */}
      <div className="mb-12">
        <span className="text-yellow-500 font-semibold uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 text-gray-900">
          What people are saying about us
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We specialize in a wide range of construction services, including
          residential, commercial, and industrial projects.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gradient-to-b from-white/95 to-white rounded-2xl shadow-xl p-6 flex flex-col h-full transform transition hover:scale-105 duration-300">
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <StarIcon key={idx} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                {t.content}
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center justify-center space-x-4 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-yellow-500"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <span className="text-gray-500 text-sm">{t.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};