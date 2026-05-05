'use client'

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "@/public/assets/images/logo.png";
import { servicesContent } from "@/utils";
import { projects } from "@/components/home/ourProjects/projes";

const Footer = () => {
  return (
    <footer className="bg-white text-[#12223B] border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Grid — 5 bərabər sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Logo & Haqqında */}
          <div data-aos="fade-up" data-aos-delay="0">
            <Image src={logo} alt="Turan İnşaat" width={130} height={36} />
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              Peşəkar hovuz, spa və mühəndislik həlləri ilə rahatlıq və estetik dizaynı birləşdiririk.
            </p>
            <div className="flex gap-2 mt-5">

              <a href="https://www.instagram.com/turanprojects.az"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-[#2A69AC] hover:text-white text-gray-500 transition"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://wa.me/994503127657"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-[#2A69AC] hover:text-white text-gray-500 transition"
              >
                <FaWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Keçidlər */}
          <div data-aos="fade-up" data-aos-delay="75">
            <h3 className="text-[14px] font-bold tracking-widest uppercase text-[#12223B] mb-4">Keçidlər</h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {[
                { href: "/", label: "Ana səhifə" },
                { href: "/about", label: "Haqqımızda" },
                { href: "/projects", label: "Layihələr" },
                { href: "/products", label: "Məhsullarımız" },
                { href: "/create", label: "Öz hovuzunu yarat" },
                { href: "/contact", label: "Əlaqə" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#2A69AC] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Xidmətlər */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-[14px] font-bold tracking-widest uppercase text-[#12223B] mb-4">Xidmətlər</h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {servicesContent["az"].slice(0, 5).map((s: any) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-[#2A69AC] transition-colors">{s.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[#2A69AC] text-xs font-semibold hover:underline mt-1 inline-block">Daha çox →</Link>
              </li>
            </ul>
          </div>

          {/* Layihələr */}
          <div data-aos="fade-up" data-aos-delay="225">
            <h3 className="text-[14px] font-bold tracking-widest uppercase text-[#12223B] mb-4">Layihələr</h3>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {projects.slice(0, 5).map((proje) => (
                <li key={proje.slug}>
                  <Link href={`/projects?${proje.slug}`} className="hover:text-[#2A69AC] transition-colors">{proje.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/projects" className="text-[#2A69AC] text-xs font-semibold hover:underline mt-1 inline-block">Daha çox →</Link>
              </li>
            </ul>
          </div>

          {/* Əlaqə */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-[14px] font-bold tracking-widest uppercase text-[#12223B] mb-4">Əlaqə</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+994503127657" className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-[#2A69AC] group-hover:text-white text-gray-500 transition flex-shrink-0">
                  <FaPhoneAlt size={13} />
                </div>
                <span className="text-sm text-gray-600">+994 50 312 76 57</span>
              </a>
              <a href="mailto:turaninshaat21@mail.ru" className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-[#2A69AC] group-hover:text-white text-gray-500 transition flex-shrink-0">
                  <FaEnvelope size={13} />
                </div>
                <span className="text-sm text-gray-600">turaninshaat21@mail.ru</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div data-aos="fade-up" className="h-px bg-gray-200 mb-6" />

        {/* Alt hissə */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Turan İnşaat MMC. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[#2A69AC] transition-colors">Gizlilik siyasəti</Link>
            <Link href="#" className="hover:text-[#2A69AC] transition-colors">Şərtlər</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);