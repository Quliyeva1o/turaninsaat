import Hero from "@/components/home/hero";

import AboutUs from "@/components/home/aboutUs";
import OurServices from "@/components/home/ourServices";
import WhyChooseUs from "@/components/home/chooseUs";
import OurProjects from "@/components/home/ourProjects";
import CallToAction from "@/components/home/callToAction";
import { Testimonials } from "@/components/home/testimonals";
import { ContactSection } from "@/components/home/contactUs";

export default function Home() {

  return (
    <>
      {/* <Hero /> */}
      <AboutUs />
      <OurServices />
      <Testimonials />
      <WhyChooseUs />
      <OurProjects />
      <CallToAction />
      <ContactSection />
    </>
  );
}

