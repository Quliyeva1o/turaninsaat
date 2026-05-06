"use client";

import { useEffect, useState } from "react";
import AOS from "aos";

export default function AOSProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      AOS.init({
        duration: 600,
        easing: "ease-out-cubic",
        once: false,
        offset: 70,
      });
    }
  }, [mounted]);

  return null;
}