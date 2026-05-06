import AboutUs from "@/components/home/aboutUs";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title:
    "Hovuz SPA və hamam Tikintisi Bakı | Filtrasiya, Dizayn və Quraşdırma",

  description:
    "Bakıda peşəkar hovuz tikintisi, SPA mərkəzləri, filtrasiya və isitmə sistemləri. Yaşayış və kommersiya obyektlərinin layihələndirilməsi.",

  alternates: {
    canonical: "https://www.turanprojects.az",
  },

  icons: {
    icon: "https://www.turanprojects.az/assets/images/logo.webp",
    shortcut: "https://www.turanprojects.az/assets/images/logo.webp",
    apple: "https://www.turanprojects.az/assets/images/logo.webp",
  },
};

// Lazy components
const OurServices = dynamic(() => import("@/components/home/ourServices"));

const OurProjects = dynamic(
  () => import("@/components/home/ourProjects"),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-gray-100 rounded-xl" />
    ),
  }
);

const ProductsHome = dynamic(() =>
  import("@/components/home/products").then((mod) => mod.ProductsHome)
);

const WhyChooseUs = dynamic(() => import("@/components/home/chooseUs"));

const ContactSection = dynamic(() =>
  import("@/components/home/contactUs").then((mod) => mod.ContactSection)
);

const HeroWrapper = dynamic(() => import("@/components/home/heroWrapper"));

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