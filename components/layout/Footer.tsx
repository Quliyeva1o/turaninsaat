'use client'

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "@/public/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#12223B] pt-25 pb-20 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo & About */}
          <div data-aos="fade-up" data-aos-delay="0">
            <Image src={logo} alt="Turan İnşaat" width={140} height={40} />
            <p className="text-gray-500 mt-4 text-md leading-relaxed">
              Peşəkar hovuz, spa və mühəndislik həlləri ilə rahatlıq və estetik dizaynı birləşdiririk.
            </p>

            <div className="flex gap-4 mt-6">
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#2A69AC] hover:text-white transition">
                <FaInstagram />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#2A69AC] hover:text-white transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-bold mb-5">Keçidlər</h4>
            <ul className="space-y-3 text-md text-gray-600">
              <li><Link href="/" className="hover:text-[#2A69AC]">Ana səhifə</Link></li>
              <li><Link href="/about" className="hover:text-[#2A69AC]">Haqqımızda</Link></li>
              <li><Link href="/services" className="hover:text-[#2A69AC]">Xidmətlər</Link></li>
              <li><Link href="/projects" className="hover:text-[#2A69AC]">Layihələr</Link></li>
              <li><Link href="/contact" className="hover:text-[#2A69AC]">Əlaqə</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-bold mb-5">Xidmətlər</h4>
            <ul className="space-y-3 text-md text-gray-600">
              <li><Link href="#">Hovuz Tikintisi</Link></li>
              <li><Link href="#">Sauna</Link></li>
              <li><Link href="#">Spa Zonaları</Link></li>
              <li><Link href="#">Buxar otağı</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-bold mb-5">Əlaqə</h4>

            <div className="flex flex-col gap-4">

              <a href="tel:+994503127657" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-[#2A69AC] group-hover:text-white transition">
                  <FaPhoneAlt />
                </div>
                <span className="text-gray-600 text-md">+994 50 312 76 57</span>
              </a>

              <a href="mailto:turaninshaat21@mail.ru" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-[#2A69AC] group-hover:text-white transition">
                  <FaEnvelope />
                </div>
                <span className="text-gray-600 text-md">turaninshaat21@mail.ru</span>
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div data-aos="fade-up"  className="h-[1px] w-full bg-gray-200 mb-6" />

        {/* Bottom */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Turan İnşaat MMC</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#2A69AC]">Privacy</Link>
            <Link href="#" className="hover:text-[#2A69AC]">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);