'use client'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/contactus.jpg";

const contactInfo = [
  {
    title: "Əsas Nömrə",
    link: "tel:+994503127657",
    display: "+994 50 312 76 57",
    icon: <FaPhoneAlt size={20} className="text-[#C49B63]" />,
  },
  {
    title: "Mobil",
    link: "tel:+994557513115",
    display: "+994 55 751 31 15",
    icon: <FaPhoneAlt size={20} className="text-[#C49B63]" />,
  },
  {
    title: "Mobil",
    link: "tel:+994506350520",
    display: "+994 50 635 05 20",
    icon: <FaPhoneAlt size={20} className="text-[#C49B63]" />,
  },
  {
    title: "Ofis",
    link: "tel:+994123482875",
    display: "+994 12 348 28 75",
    icon: <FaPhoneAlt size={20} className="text-[#C49B63]" />,
  },
  {
    title: "Email",
    link: "mailto:turaninshaat21@mail.ru",
    display: "turaninshaat21@mail.ru",
    icon: <FaEnvelope size={20} className="text-[#C49B63]" />,
  },
  {
    title: "Vebsayt",
    link: "https://www.turanprojects.az",
    display: "www.turanprojects.az",
    icon: <FaGlobe size={20} className="text-[#C49B63]" />,
  },
  {
    title: "Instagram / TikTok",
    link: "https://www.instagram.com/turanprojects.az",
    display: "@turanprojects.az",
    icon: <FaInstagram size={20} className="text-[#C49B63]" />,
  },
  {
    title: "Ünvan",
    link: "https://maps.google.com/?q=Abşeron+rayon,+Binəqədi-Novxanı+şossesi,+Novxanı+kəndi",
    display: "Abşeron r., Binəqədi-Novxanı şossesi, Novxanı kəndi (Berlin Avto ilə üzbəüz)",
    icon: <FaMapMarkerAlt size={20} className="text-[#C49B63]" />,
  },
];

export const ContactSection = () => {
  return (
    <section className="relative py-15 bg-gradient-to-b from-[#0B1220] to-[#071421] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT SIDE */}
          <div className="space-y-8 h-full flex flex-col">

            <div data-aos="fade-right" className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C49B63]" />
              <p className="uppercase text-[11px] tracking-[0.3em] text-[#C49B63] font-semibold">
                Bizimlə Əlaqə
              </p>
            </div>

            <h2
              data-aos="fade-right"
              className="text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.1] tracking-tight"
            >
              Suallarınız və sorğularınız üçün buradayıq
            </h2>

            <p
              data-aos="fade-right"
              className="text-[15px] sm:text-[16px] text-white/70 leading-relaxed max-w-xl"
            >
              Qiymət sorğuları, əməkdaşlıq və layihə detalları üçün bizimlə rahat şəkildə əlaqə saxlayın.
            </p>
            <div className="mt-auto w-full rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-right">              <Image
              src={contactIllustration}
              alt="Turan İnşaat Əlaqə"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
            </div>

          </div>

          <div
            data-aos="fade-left"
            className="h-full flex items-end"
          >
            <div data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition h-full"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#0F172A]">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#C49B63] text-xs font-semibold uppercase tracking-wide">
                      {info.title}
                    </p>
                    <p className="text-white/80 text-sm mt-0.5 break-words">
                      {info.display}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};