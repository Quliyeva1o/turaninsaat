"use client";
import Image from "next/image";
import Button from "../../common/Button";
import { useEffect, useRef } from "react";

interface HeroProps {
  text?: string;
  video?: string;
  isHome?: boolean;
  img?: string;
  subTitle?: string;
  locale?: "az" | "en";
}

const heroContent = {
  az: {
    badge: "TURAN İNŞAAT MMC",
    title: (
      <>
        Suya həyat, <br /> rahatlığa dəyər qatırıq
      </>
    ),
    desc: "Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq hovuz, spa və sauna sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması sahəsində peşəkar xidmət təqdim edir. Müasir texnologiyalar, keyfiyyətli materiallar və innovativ dizaynlarla komfortlu istirahət məkanları yaradırıq.",
    cta1: "Öz hovuzunu yarat",
    cta2: "Layihələrimizə bax",
  },
  en: {
    badge: "TURAN CONSTRUCTION LLC",
    title: (
      <>
        We bring life to water <br /> and value to comfort
      </>
    ),
    desc: "Turan Construction LLC is a licensed company providing professional design, construction, and installation of pool, spa, and sauna systems. With modern technologies, high-quality materials, and innovative designs, we create premium relaxation spaces.",
    cta1: "Create your pool",
    cta2: "View projects",
  },
};

export default function Hero({
  text,
  video,
  isHome,
  img,
  subTitle,
  locale = "az",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const content = heroContent[locale];

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const playVideo = () => { videoEl.play().catch(() => {}); };
    playVideo();
    document.addEventListener("touchstart", playVideo, { once: true });
    return () => { document.removeEventListener("touchstart", playVideo); };
  }, []);

  return (
    <section
      aria-label="Turan İnşaat Hero Section"
      className={`relative ${
        isHome
          ? "h-[calc(100vh+100px)]"
          : "h-[280px] sm:h-[340px] md:h-[420px]"
      }`}
    >
      <div className="flex items-center text-white h-full overflow-hidden">
        {/* VIDEO */}
        {video && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        {/* IMAGE */}
        {img && !video && (
          <Image
            src={img}
            alt="Turan İnşaat hovuz və spa layihəsi"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        )}

        {/* OVERLAY — daha dərin, layered gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        {/* subtle teal glow at bottom center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#007A85]/10 blur-3xl rounded-full pointer-events-none" />

        {/* CONTENT */}
        <div
          data-aos="fade-up"
          className={`relative z-30 text-center w-full px-4 sm:px-6 lg:px-8 ${
            isHome ? "pt-0" : "pt-0"
          }`}
        >
          {/* BADGE */}
          <p className="inline-flex items-center gap-2 uppercase text-[#00A8B5] mb-5 text-[11px] sm:text-[13px] font-bold tracking-[0.25em]">
            <span className="w-6 h-[1px] bg-[#00A8B5] inline-block" />
            {content.badge}
            <span className="w-6 h-[1px] bg-[#00A8B5] inline-block" />
          </p>

          {/* TITLE */}
          <h1 className="text-[32px] sm:text-[44px] md:text-[58px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-6 text-white drop-shadow-sm">
            {isHome ? content.title : text}
          </h1>

          {/* DIVIDER */}
          {isHome && (
            <div className="flex justify-center mb-6">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#00A8B5] to-transparent" />
            </div>
          )}

          {/* DESCRIPTION */}
          <p
            className={`text-[15px] sm:text-[17px] md:text-[19px] max-w-3xl mx-auto text-[#C8E8EA]/90 leading-relaxed ${
              isHome ? "mb-10 sm:mb-14" : "mb-6 sm:mb-8"
            }`}
          >
            {isHome ? content.desc : subTitle}
          </p>

          {/* CTA */}
          {isHome && (
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <Button text={content.cta1} link="/create" type={1} />
              <Button text={content.cta2} link="/projects" type={4} />
            </div>
          )}
        </div>

        {/* scroll indicator — only on home */}
        {isHome && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 opacity-60">
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-[#C8E8EA] animate-pulse" />
          </div>
        )}
      </div>
    </section>
  );
}