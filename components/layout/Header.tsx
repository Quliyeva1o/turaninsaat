// components/header/index.tsx
'use client'
import Link from "next/link";
import Image from "next/image";
import './header.css'
import Button from "../common/Button";
import logo from '../../public/assets/images/logoag.png'
import { useEffect, useRef, useState } from "react";
import { servicesContent } from "@/utils";
import { projects } from "../home/ourProjects/projes";

export default function Header({ locale = "az" }: any) {
  const headerRef = useRef<HTMLElement>(null);
const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    // Scroll → header background
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);
  useEffect(() => {
    // Magic cursor
    const cursor = document.getElementById("magic-cursor");
    const ball = document.getElementById("ball");
    if (!cursor || !ball) return;

    let mouseX = 0, mouseY = 0, ballX = 0, ballY = 0;
    const speed = 0.15;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = "1";
      cursor.style.visibility = "visible";
    };

    const animate = () => {
      ballX += (mouseX - ballX) * speed;
      ballY += (mouseY - ballY) * speed;
      ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="preloader" style={{ display: "none" }}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <Image src="/loader.svg" alt="Loading" width={40} height={40} />
          </div>
        </div>
      </div>

      <div id="magic-cursor" style={{ opacity: 0, visibility: "hidden" }}>
        <div id="ball" />
      </div>

      <header ref={headerRef} className="site-header">
        <div className="container header-inner">

          <div className="site-logo w-[160px]">
            <Link href="/">
              <Image
                src={logo}
                alt="Turan İnşaat Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>

<nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Main Navigation">            <ul className="menu">
              <li>
                <Link href="/">Ana səhifə</Link>
              </li>
              <li>
                <Link href="/about">Haqqımızda</Link>
              </li>
              <li className="has-dropdown">
                <Link href="/services">Xidmətlər</Link>
                <ul className="dropdown">
                  {servicesContent[locale].map((s: any) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="has-dropdown">
                <Link href="/projects">Layihələr</Link>
                <ul className="dropdown">
                  {projects.map((proje) => (
                    <li key={proje.slug}>
                      <Link href={`/projects?${proje.slug}`}>{proje.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mobile-only">
                <Link href="/contact">Bizimlə əlaqə</Link>
              </li>
            </ul>
          </nav>

          <Button link={"/contact"} text={"Bizimlə əlaqə"} type={5} />
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
  <span className={menuOpen ? "open" : ""}></span>
  <span className={menuOpen ? "open" : ""}></span>
  <span className={menuOpen ? "open" : ""}></span>
</div>
        </div>
      </header>
    </>
  );
}