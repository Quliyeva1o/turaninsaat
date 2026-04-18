"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import imgSrc from "@/public/assets/images/aboutUs.jpg";

interface AboutProps {
  locale?: "az" | "en";
}

const content = {
  az: {
    badge: "HAQQIMIZDA",
    title: "Su ilə rahatlığı birləşdirən peşəkar hovuz və spa həlləri",
    desc: `Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq hovuz, spa və sauna sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması sahəsində peşəkar xidmət göstərir. İllərin təcrübəsi və yenilikçi texnologiyalar ilə müasir, estetik və uzunömürlü istirahət məkanları yaradırıq.`,
    features: [
      "Fərdi hovuz və spa layihələndirilməsi",
      "İnnovativ texnologiyalar və keyfiyyətli materiallar",
      "Peşəkar quraşdırma və zəmanətli xidmət",
    ],
    cta: "Pulsuz məsləhət al",
    contactLabel: "24/7 Əlaqə Mərkəzi",
  },
  en: {
    badge: "ABOUT US",
    title: "Professional pool and spa solutions combining comfort with water",
    desc: `Turan Construction LLC is a licensed company providing professional services in the design, construction, and installation of pool, spa, and sauna systems. With years of experience and innovative technologies, we create modern, aesthetic, and long-lasting relaxation spaces.`,
    features: [
      "Custom pool and spa design",
      "Innovative technologies and premium materials",
      "Professional installation with warranty",
    ],
    cta: "Get free consultation",
    contactLabel: "24/7 Contact Center",
  },
};

export default function AboutUs({ locale = "az" }: AboutProps) {
  const t = content[locale];

  return (
    <section
      aria-label="About Turan İnşaat"
      // style={{ background: "#0A1E30" }}
    >
      {/* subtle teal top border */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }} />

      <div className="max-w-[1340px] overflow-hidden mx-auto px-6 sm:px-8 lg:px-12 py-15 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

        {/* ── IMAGE (left on desktop) ── */}
        <div className="flex-1 w-full order-2 lg:order-1">
          <div
            data-aos="fade-right"
            className="relative w-full h-[280px] sm:h-[400px] lg:h-[560px] rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,168,181,0.12)" }}
          >
            <Image
              src={imgSrc}
              alt="Turan İnşaat hovuz və spa layihəsi"
              fill
              quality={100}
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* teal vignette overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(0,168,181,0.08) 0%, transparent 60%, rgba(10,30,48,0.4) 100%)" }}
            />

            {/* floating stat badge */}
            <div
              className="absolute bottom-6 left-6 flex flex-col gap-0.5 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(10,30,48,0.82)",
                backdropFilter: "blur(12px)",
                border: "0.5px solid rgba(0,168,181,0.25)",
              }}
            >
              <span style={{ color: "#00A8B5", fontSize: 28, fontWeight: 800, lineHeight: 1 }}>12+</span>
              <span style={{ color: "rgba(200,232,234,0.7)", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                İllik təcrübə
              </span>
            </div>
          </div>
        </div>

        {/* ── TEXT (right on desktop) ── */}
        <div className="flex-1 order-1 lg:order-2">

          {/* Badge */}
          <p
            data-aos="fade-left"
            className="flex items-center gap-2 uppercase font-bold text-[11px] sm:text-[12px] tracking-[0.28em] mb-5"
            style={{ color: "#00A8B5" }}
          >
            <span style={{ display: "inline-block", width: 24, height: 1, background: "#00A8B5" }} />
            {t.badge}
          </p>

          {/* Title */}
          <h2
            data-aos="fade-left"
            className="font-extrabold text-[28px] sm:text-[36px] md:text-[46px] leading-[1.1] tracking-tight mb-6"
            style={{ color: "#0A1E30" }}
          >
            {t.title}
          </h2>

          {/* Divider */}
          <div
            data-aos="fade-left"
            className="mb-6"
            style={{ width: 48, height: 2, background: "linear-gradient(90deg, #00A8B5, transparent)" }}
          />

          {/* Description */}
          <p
            data-aos="fade-left"
            className="text-[15px] sm:text-[16px] leading-relaxed mb-8"
            style={{ color: "#0A1E30 " }}
          >
            {t.desc}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-3 mb-10">
            {t.features.map((item, i) => (
              <li
                key={i}
                data-aos="fade-left"
                data-aos-delay={i * 80}
                className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium"
                style={{ color: "#0A1E30" }}
              >
                {/* teal check icon */}
                <span
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 22,
                    height: 22,
                    background: "rgba(0,168,181,0.12)",
                    border: "1px solid rgba(0,168,181,0.3)",
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="#00A8B5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA row */}
          <div
            data-aos="fade-left"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <Button text={t.cta} link="/contact" type={2} />

            {/* divider */}
            <div
              className="hidden sm:block self-stretch"
              style={{ width: 1, background: "rgba(200,232,234,0.12)" }}
            />

            <div className="flex flex-col gap-0.5">
              <span
                className="uppercase tracking-widest"
                style={{ 
                  // color: "rgba(200,232,234,0.45)", 
                  fontSize: 10, fontWeight: 600 }}
              >
                {t.contactLabel}
              </span>

              <a href="tel:+994503127657"
                className="font-bold text-[17px] hover:opacity-80 transition-opacity"
                style={{ color: "#D4AF37", letterSpacing: "0.01em" }}
              >
                +994 50 312 76 57
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* subtle teal bottom border */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #007A85, transparent)" }} />
    </section>
  );
}