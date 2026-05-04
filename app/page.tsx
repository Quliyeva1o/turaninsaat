// 'use client' SİLİNDİ — artıq server component-dir
import AboutUs from "@/components/home/aboutUs";
import OurServices from "@/components/home/ourServices";
import WhyChooseUs from "@/components/home/chooseUs";
import OurProjects from "@/components/home/ourProjects";
import { ProductsHome } from "@/components/home/products";
import { ContactSection } from "@/components/home/contactUs";
import HeroWrapper from "@/components/home/heroWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hovuz və SPA Tikintisi Bakı",
  description:
    "Bakıda peşəkar hovuz tikintisi, SPA mərkəzləri, filtrasiya və isitmə sistemləri. Yaşayış və kommersiya obyektlərinin layihələndirilməsi.",
  alternates: {
    canonical: "https://www.turanprojects.az",
  },
};

export default function Home() {
  return (
    <>
      <HeroWrapper />
      <AboutUs />
      <OurServices />
      <OurProjects />
      <ProductsHome />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}