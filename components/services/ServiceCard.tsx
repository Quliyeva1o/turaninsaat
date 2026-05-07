"use client";

import Image from "next/image";
import Link from "next/link";

type Service = {
  slug: string;
  title: string;
  desc: string;
  img: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    // ✅ onClick+router yox — Link işlət, crawler slug-ları izləyir
    <Link href={`/services/${service.slug}`}>
      <article
        data-aos="fade-up"
        data-aos-offset="-300"
        className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg transition-all duration-500 hover:shadow-2xl"
      >
        <div className="relative w-full h-52 md:h-72">
          <Image
            src={service.img}
            alt={service.title}
            fill
            quality={85}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

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
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white leading-tight">
            {service.title}
          </h2>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-slate-200 leading-snug line-clamp-3 sm:line-clamp-none">
            {service.desc}
          </p>

          <span className="mt-7 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
            Ətraflı →
          </span>
        </div>
      </article>
    </Link>
  );
}