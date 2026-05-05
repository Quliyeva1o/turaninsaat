'use client'

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaGlobe,
  FaEnvelope
} from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import contactIllustration from "@/public/assets/images/contactus.jpg";

const HeroWrapper = dynamic(() => import("@/components/home/heroWrapper"));

const contactInfo = [
  {
    title: "Əsas Nömrə",
    link: "tel:+994503127657",
    display: "+994 50 312 76 57",
    icon: <FaPhoneAlt size={18} className="text-[#2A6AAB]" />,
  },
  {
    title: "Mobil",
    link: "tel:+994557513115",
    display: "+994 55 751 31 15",
    icon: <FaPhoneAlt size={18} className="text-[#2A6AAB]" />,
  },
  {
    title: "Mobil",
    link: "tel:+994506350520",
    display: "+994 50 635 05 20",
    icon: <FaPhoneAlt size={18} className="text-[#2A6AAB]" />,
  },
  {
    title: "Ofis",
    link: "tel:+994123482875",
    display: "+994 12 348 28 75",
    icon: <FaPhoneAlt size={18} className="text-[#2A6AAB]" />,
  },
  {
    title: "Email",
    link: "mailto:turaninshaat21@mail.ru",
    display: "turaninshaat21@mail.ru",
    icon: <FaEnvelope size={18} className="text-[#2A6AAB]" />,
  },
  {
    title: "Vebsayt",
    link: "https://www.turanprojects.az",
    display: "www.turanprojects.az",
    icon: <FaGlobe size={18} className="text-[#2A6AAB]" />,
  },
  {
    title: "Instagram / TikTok",
    link: "https://www.instagram.com/turanprojects.az",
    display: "@turanprojects.az",
    icon: <FaInstagram size={18} className="text-[#2A6AAB]" />,
  },
  {
    title: "Ünvan",
    link: "https://maps.google.com/?q=Abşeron+rayon,+Binəqədi-Novxanı+şossesi,+Novxanı+kəndi",
    display: "Abşeron r., Binəqədi-Novxanı şossesi, Novxanı kəndi",
    icon: <FaMapMarkerAlt size={18} className="text-[#2A6AAB]" />,
  },
];

export default function ContactClient() {
  return (
    <>
      <HeroWrapper />

      <section className="py-20 lg:py-28 bg-[#F9FAFB] text-[#0B1220]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-stretch">

            {/* SOL */}
            <div className="flex flex-col gap-7">

              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#2A6AAB]" />
                <p className="uppercase text-[11px] tracking-[0.25em] text-[#2A6AAB] font-semibold">
                  Bizimlə Əlaqə
                </p>
              </div>

              <h2 className="text-[32px] sm:text-[44px] font-extrabold leading-tight">
                Suallarınız üçün buradayıq
              </h2>

              <p className="text-gray-500 max-w-md">
                Qiymət sorğuları və əməkdaşlıq üçün bizimlə rahat şəkildə əlaqə saxlayın.
              </p>

              {/* SOCIAL */}
              <div className="flex items-center gap-4 text-sm">

                <a
                  href="https://instagram.com/turanprojects.az"
                  target="_blank"
                  className="flex items-center gap-2 text-[#2A6AAB] font-medium hover:opacity-80"
                >
                  <FaInstagram />
                  @turanprojects.az
                </a>

                <span className="text-gray-300">|</span>

                <a
                  href="https://tiktok.com/@turanprojects.az"
                  target="_blank"
                  className="flex items-center gap-2 text-[#2A6AAB] font-medium hover:opacity-80"
                >
                  TikTok @turanprojects.az
                </a>

              </div>

              {/* IMAGE */}
              <div className="mt-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={contactIllustration}
                  alt="Əlaqə"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

            </div>

            {/* SAĞ */}
            <div className="flex flex-col gap-5">

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    target="_blank"
                    className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#2A6AAB]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EFF6FF]">
                      {info.icon}
                    </div>

                    <div>
                      <p className="text-[#2A6AAB] text-xs font-semibold uppercase tracking-wide">
                        {info.title}
                      </p>
                      <p className="text-gray-500 text-sm leading-snug">
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
    </>
  );
}