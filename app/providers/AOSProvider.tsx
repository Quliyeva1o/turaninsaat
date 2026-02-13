"use client";

import { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1900,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });
  }, []);

  return null;
}
