"use client";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/logo.png";

const contactInfo = [
  {
    title: "24/7 Dəstək Mərkəzi",
    link: "tel:+994503127657",
    display: "+994 50 312 76 57",
    icon: <FaPhoneAlt size={28} className="text-yellow-500" />,
  },
  {
    title: "Bizə Yazın",
    link: "mailto:turaninshaat21@mail.ru",
    display: "turaninshaat21@mail.ru",
    icon: <FaEnvelope size={28} className="text-yellow-500" />,
  },
];

export const ContactSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Flex: Info + Form + Heading */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column: Info + Illustration */}
          <div className="flex-1 flex flex-col gap-4 order-1 lg:order-1">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                className="group bg-[#102948] rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center bg-[#0F172A] rounded-full group-hover:scale-105 transform transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-base mb-1">{info.title}</h3>
                <span className="text-yellow-500 font-medium group-hover:underline text-sm md:text-sm">
                  {info.display}
                </span>
              </a>
            ))}

            <div className="mt-4 flex justify-center">
              <Image
                src={contactIllustration}
                alt="Turan İnşaat ilə Əlaqə"
                className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                width={280}
                height={320}
                quality={100}
              />
            </div>
          </div>

          {/* Right Column: Form + Heading */}
          <div className="flex-1 flex flex-col gap-6 order-2 lg:order-2">

            {/* Heading */}
            <div className="lg:mb-8 text-center lg:text-right">
              <span className="text-yellow-500 font-semibold uppercase tracking-wide">
                Bizimlə Əlaqə
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 leading-tight">
                Əlaqə saxlayın
              </h2>
              <p className="text-slate-400 mt-2 text-sm md:text-base">
                Suallarınız, qiymət sorğularınız və ya əməkdaşlıq imkanları üçün bizimlə əlaqə saxlayın.
              </p>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#102948] p-8 rounded-3xl shadow-lg">
              <input
                type="text"
                name="your-name"
                placeholder="Adınız"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefon Nömrəniz"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                name="subject"
                placeholder="Mövzu"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                rows={6}
                className="border border-gray-700 p-3 rounded-lg w-full md:col-span-2 h-32 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg md:col-span-2 hover:bg-yellow-600 transition text-sm md:text-base"
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