"use client";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import contactIllustration from "@/public/assets/images/aboutus.png";

const contactInfo = [
  {
    title: "Call Support Center 24/7",
    link: "tel:+18091206705",
    display: "+1 809 120 6705",
    icon: <FaPhoneAlt size={28} className="text-yellow-500" />,
  },
  {
    title: "Write To Us",
    link: "mailto:info@domain.com",
    display: "info@domain.com",
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

  <div className="mt-4">
    <Image
      src={contactIllustration}
      alt="Contact Illustration"
      className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
      width={280}
      height={320}
      quality={100}
    />
  </div>
</div>

          {/* Right Column: Form + Heading */}
          <div className="flex-1 flex flex-col gap-6 order-2 lg:order-2">

            {/* Heading: Desktop-right, Mobile-top */}
            <div className="lg:mb-8 text-center lg:text-right">
              <span className="text-yellow-500 font-semibold uppercase tracking-wide">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 leading-tight">
                Get in touch with us
              </h2>
              <p className="text-slate-400 mt-2 text-sm md:text-base">
                We’d love to hear from you! Reach out for any inquiries, quotes, or collaboration opportunities.
              </p>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#102948] p-8 rounded-3xl shadow-lg">
              <input
                type="text"
                name="your-name"
                placeholder="Your Name"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border border-gray-700 p-3 rounded-lg w-full h-12 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="border border-gray-700 p-3 rounded-lg w-full md:col-span-2 h-32 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg md:col-span-2 hover:bg-yellow-600 transition text-sm md:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};