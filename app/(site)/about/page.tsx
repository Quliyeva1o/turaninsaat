"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import certImg from "@/public/assets/images/certificate.png";

interface Props {
  locale?: "az" | "en";
}

const content = {
  az: {
    about: {
      badge: "HAQQIMIZDA",
      title: "Su ilə rahatlığı birləşdirən peşəkar hovuz və spa həlləri",
      desc: `Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq, su ilə rahatlığı birləşdirərək mükəmməl hovuz və spa həlləri təqdim edir. İllərin təcrübəsi və yenilikçi texnologiyalarla hovuz, spa və sauna sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması sahəsində peşəkar xidmət göstəririk.`,
      features: [
        { title: "Fərdi dizayn", desc: "Hər layihə müştəri ehtiyacına uyğun hazırlanır" },
        { title: "Premium materiallar", desc: "Uzunömürlü və yüksək keyfiyyətli materiallar" },
        { title: "Zəmanətli icra", desc: "Peşəkar komanda və tam nəzarət" },
        { title: "Müasir texnologiya", desc: "Ən son texnologiyalar ilə effektiv nəticə" },
      ],
      stats: [
        { value: "200+", label: "Tamamlanmış layihə" },
        { value: "12+", label: "İllik təcrübə" },
        { value: "98%", label: "Müştəri məmnuniyyəti" },
      ],
      cta: "Pulsuz məsləhət al",
      contact: "24/7 Əlaqə Mərkəzi",
      licenseBadge: "Rəsmi lisenziyalı",
    },
    story: {
      badge: "BİZİM HEKAYƏMİZ",
      title: "Hər hovuzun arxasında bir hekayə var",
      desc: `Turan İnşaat komandası uzun illərdir Azərbaycanda hovuz və spa layihələrinin həyata keçirilməsində peşəkar xidmət göstərir. Hər layihədə keyfiyyət, yenilik və müştəri məmnuniyyəti əsas prioritetimizdir.`,
    },
    testimonials: {
      badge: "MÜŞTƏRİ RƏYLƏRİ",
      title: "Onlar artıq seçim etdi",
      items: [
        { name: "Elvin Məmmədov", role: "Ev sahibi", text: "Layihə gözlədiyimdən daha yaxşı alındı! Komanda peşəkar yanaşdı, zamanında tamamlandı." },
        { name: "Leyla Hüseynova", role: "Villa sahibi", text: "Peşəkar yanaşma və yüksək keyfiyyət. Hovuzumuz tam arzuladığım kimi oldu." },
        { name: "Rəşad Quliyev", role: "Otel direktoru", text: "Tam ideal nəticə əldə etdik. Müştərilərimiz hovuzdan çox razıdır." },
      ],
    },
  },
  en: {
    about: {
      badge: "ABOUT US",
      title: "Professional pool and spa solutions combining comfort with water",
      desc: `Turan Construction LLC is a licensed company combining water and relaxation to deliver premium pool and spa solutions. With years of experience and innovative technologies, we provide professional design, construction, and installation services.`,
      features: [
        { title: "Custom design", desc: "Each project is tailored to client needs" },
        { title: "Premium materials", desc: "High-quality and long-lasting materials" },
        { title: "Guaranteed execution", desc: "Professional team with full control" },
        { title: "Modern technology", desc: "Latest tech for efficient results" },
      ],
      stats: [
        { value: "200+", label: "Completed projects" },
        { value: "12+", label: "Years of experience" },
        { value: "98%", label: "Client satisfaction" },
      ],
      cta: "Get free consultation",
      contact: "24/7 Contact Center",
      licenseBadge: "Officially licensed",
    },
    story: {
      badge: "OUR STORY",
      title: "Behind every pool, there is a story",
      desc: `Our team has been delivering premium pool and spa projects for years. Innovation, quality, and customer satisfaction are our main priorities.`,
    },
    testimonials: {
      badge: "CLIENT REVIEWS",
      title: "They have already chosen us",
      items: [
        { name: "Elvin Mammadov", role: "Homeowner", text: "Better than expected! The team was professional and finished on time." },
        { name: "Leyla Huseynova", role: "Villa owner", text: "Very professional team. The pool turned out exactly as I dreamed." },
        { name: "Rashad Guliyev", role: "Hotel director", text: "Perfect result overall. Our guests love the pool." },
      ],
    },
  },
};

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#C49B63">
    <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.7.6-3.6L1.8 4.8l3.6-.5z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M1 5l3 3 7-7" stroke="#00A8B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WaterWave = () => (
  <svg viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" style={{ height: 60 }}>
    <path
      d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
      fill="white"
    />
  </svg>
);

export default function About({ locale = "az" }: Props) {
  const t = content[locale];

  return (
    <main>
      {/* ─── HERO ABOUT SECTION ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A1E30 0%, #0d2d45 60%, #0e3550 100%)" }}
      >
        {/* Decorative teal circle */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            top: -200,
            right: -180,
            background: "radial-gradient(circle, rgba(0,168,181,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            left: -100,
            background: "radial-gradient(circle, rgba(196,155,99,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-0 flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* TEXT SIDE */}
          <div className="flex-1 order-2 lg:order-1 pb-16 lg:pb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span style={{ width: 28, height: 1.5, background: "#00A8B5", display: "inline-block" }} />
              <span
                className="text-[11px] font-bold tracking-[0.3em] uppercase"
                style={{ color: "#00A8B5" }}
              >
                {t.about.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              data-aos="fade-up"
              className="font-extrabold text-[30px] sm:text-[40px] md:text-[50px] leading-[1.08] tracking-tight mb-6 text-white"
            >
              {t.about.title}
            </h1>

            {/* Gold divider */}
            <div style={{ width: 56, height: 3, background: "#C49B63", borderRadius: 2, marginBottom: 24 }} />

            {/* Description */}
            <p
              data-aos="fade-up"
              className="text-[15px] sm:text-[16px] leading-[1.85]"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {t.about.desc}
            </p>

            {/* Features */}
            <ul className="mt-8 flex flex-col gap-4">
              {t.about.features.map((item, i) => (
                <li key={i} data-aos="fade-up" data-aos-delay={i * 60} className="flex items-start gap-3">
                  <span
                    className="mt-[3px] flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 24,
                      height: 24,
                      background: "rgba(0,168,181,0.15)",
                      border: "1.5px solid rgba(0,168,181,0.4)",
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <div>
                    <span className="text-[14px] font-semibold text-white">{item.title}</span>
                    <span className="text-[13px] ml-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                      — {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA + Phone */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-10">
              <Button text={t.about.cta} link="/contact" type={2} />
              <div className="border-l-2 pl-6" style={{ borderColor: "rgba(196,155,99,0.4)" }}>
                <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {t.about.contact}
                </span>
                <div className="font-bold text-[20px] mt-1" style={{ color: "#C49B63" }}>
                  +994 50 312 76 57
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {t.about.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-[28px] font-extrabold text-white leading-none">{stat.value}</div>
                  <div className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex-1 order-1 md:order-2 relative flex  items-end w-full" style={{ maxWidth: 520 }}>
            {/* License badge */}
            <div
              className="absolute top-0 md:left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
              style={{
                background: "rgba(196,155,99,0.9)",
                color: "white",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 20px rgba(196,155,99,0.3)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 8.8l-3 1.7.5-3.5L2 4.5l3.5-.5z" />
              </svg>
              {t.about.licenseBadge}
            </div>

            {/* Teal glow behind image */}
            <div
              className="absolute top-30 left-1/2 rounded-full pointer-events-none"
              style={{
                width: 280,
                height: 280,
                background: "radial-gradient(circle, rgba(0,168,181,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <Image
              src={certImg}
              alt="Turan İnşaat sertifikat"
              width={460}
              height={560}
              className="relative z-10 mt-15 md:mt-20 object-contain drop-shadow-2xl"
              style={{ maxHeight: 560 }}
              priority
            />
          </div>
        </div>

        {/* Wave separator */}
        <WaterWave />
      </section>

      {/* ─── STORY SECTION ─── */}
      <section className="bg-white">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="max-w-[760px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-5">
              <span style={{ width: 24, height: 1.5, background: "#C49B63", display: "inline-block" }} />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: "#C49B63" }}>
                {t.story.badge}
              </span>
              <span style={{ width: 24, height: 1.5, background: "#C49B63", display: "inline-block" }} />
            </div>
            <h2
              className="font-extrabold text-[28px] sm:text-[38px] leading-[1.15] tracking-tight mb-6"
              style={{ color: "#0A1E30" }}
            >
              {t.story.title}
            </h2>
            <p className="text-[15px] sm:text-[17px] leading-[1.85]" style={{ color: "#5a6a7a" }}>
              {t.story.desc}
            </p>

            {/* Decorative water dots */}
            <div className="flex justify-center gap-2 mt-10">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="rounded-full"
                  style={{
                    width: i === 1 ? 10 : 6,
                    height: i === 1 ? 10 : 6,
                    background: i === 1 ? "#00A8B5" : "rgba(0,168,181,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ background: "#f7f8fa" }}>
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span style={{ width: 24, height: 1.5, background: "#00A8B5", display: "inline-block" }} />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: "#00A8B5" }}>
                {t.testimonials.badge}
              </span>
              <span style={{ width: 24, height: 1.5, background: "#00A8B5", display: "inline-block" }} />
            </div>
            <h2
              className="font-extrabold text-[28px] sm:text-[38px] leading-tight"
              style={{ color: "#0A1E30" }}
            >
              {t.testimonials.title}
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="relative bg-white rounded-2xl p-8 flex flex-col gap-5 group transition-all duration-300"
                style={{
                  border: "1px solid rgba(0,168,181,0.1)",
                  boxShadow: "0 2px 20px rgba(10,30,48,0.06)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="absolute top-6 right-7 text-[64px] leading-none font-serif pointer-events-none select-none"
                  style={{ color: "rgba(0,168,181,0.08)", lineHeight: 1 }}
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
                </div>

                {/* Text */}
                <p className="text-[15px] leading-[1.75] flex-1" style={{ color: "#3d5166" }}>
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(0,168,181,0.1)" }}>
                  <div
                    className="rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{
                      width: 42,
                      height: 42,
                      background: "linear-gradient(135deg, #0A1E30, #00A8B5)",
                      color: "white",
                    }}
                  >
                    {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold" style={{ color: "#0A1E30" }}>{item.name}</div>
                    <div className="text-[12px]" style={{ color: "#C49B63" }}>{item.role}</div>
                  </div>
                </div>

                {/* Hover bottom accent */}
              <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }}
                  />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}