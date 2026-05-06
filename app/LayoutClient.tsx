"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import dynamic from "next/dynamic";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname.startsWith("/create"); // daha aydın ad

  const AOSProvider = dynamic(() => import("./providers/AOSProvider"), {
    ssr: false,
  });
  return (
    <>
      {!hideChrome && (
        <div className="headercontainer">
          <Header />
          <AOSProvider />
        </div>
      )}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}