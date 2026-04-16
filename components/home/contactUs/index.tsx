'use client'

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/contactus.jpg";

const contactInfo = [
  {
    title: "24/7 Dəstək",
    link: "tel:+994503127657",
    display: "+994 50 312 76 57",
    icon: <FaPhoneAlt size={22} className="text-[#C49B63]" />,
  },
  {
    title: "Email",
    link: "mailto:turaninshaat21@mail.ru",
    display: "turaninshaat21@mail.ru",
    icon: <FaEnvelope size={22} className="text-[#C49B63]" />,
  },
];

export const ContactSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B1220] to-[#071421] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ───────── LEFT SIDE ───────── */}
          <div className="space-y-10">

            {/* Badge */}
            <div data-aos="fade-up" className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C49B63]" />
              <p className="uppercase text-[11px] tracking-[0.3em] text-[#C49B63] font-semibold">
                Bizimlə Əlaqə
              </p>
            </div>

            {/* Title */}
            <h2
              data-aos="fade-up"
              className="text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.1] tracking-tight"
            >
              Suallarınız və sorğularınız üçün buradayıq
            </h2>

            {/* Description */}
            <p
              data-aos="fade-up"
              className="text-[15px] sm:text-[16px] text-white/70 leading-relaxed max-w-xl"
            >
              Qiymət sorğuları, əməkdaşlıq və layihə detalları üçün bizimlə rahat şəkildə əlaqə saxlayın.
            </p>

            {/* Image */}
            <div data-aos="fade-up" className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={contactIllustration}
                alt="Contact"
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* ───────── RIGHT SIDE ───────── */}
          <div className="space-y-8">

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  data-aos="fade-up"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F172A]">
                    {info.icon}
                  </div>

                  <div>
                    <p className="text-[#C49B63] text-sm font-semibold">
                      {info.title}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {info.display}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <form
              data-aos="fade-up"
              className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Adınız"
                  className="h-12 px-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-[#C49B63]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 px-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-[#C49B63]"
                />

                <input
                  placeholder="Telefon"
                  className="h-12 px-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-[#C49B63]"
                />

                <input
                  placeholder="Mövzu"
                  className="h-12 px-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-[#C49B63]"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Mesajınız"
                className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-[#C49B63]"
              />

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#C49B63] text-black font-semibold hover:bg-[#B88A5A] transition"
              >
                Göndər
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};