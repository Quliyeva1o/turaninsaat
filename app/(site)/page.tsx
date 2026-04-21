'use client'

import AboutUs from "@/components/home/aboutUs";
import OurServices from "@/components/home/ourServices";
import WhyChooseUs from "@/components/home/chooseUs";
import OurProjects from "@/components/home/ourProjects";
import { ProductsHome } from "@/components/home/products";
import { ContactSection } from "@/components/home/contactUs";

export default function Home() {

  return (
    <>
      {/* <Hero /> */}
      <AboutUs />
      <OurServices />
      <OurProjects />

      <ProductsHome />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}

