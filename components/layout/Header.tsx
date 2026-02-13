import Link from "next/link";
import Image from "next/image";
import './header.css'
import Button from "../common/Button";
import logo from '../../public/assets/images/logo.png'
export default function Header() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader" style={{ display: "none" }}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <Image src="/loader.svg" alt="Loading" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Magic Cursor */}
      <div id="magic-cursor" style={{ opacity: 0, visibility: "hidden" }}>
        <div id="ball" />
      </div>

      {/* Skip link (SEO + accessibility) */}
      <a href="#content" className="skip-link screen-reader-text">
        Skip to content
      </a>

      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Logo */}
          <div className="site-logo">
            <Link href="/">
              <Image
                src={logo}
                alt="Tikinti Şirkəti Logo"
                width={160}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="menu">
              <li className="has-dropdown">
                <Link href="/">Home</Link>
                <ul className="dropdown">
                  <li>
                    <Link href="/">Home – Image</Link>
                  </li>
                  <li>
                    <Link href="/home-slider">Home – Slider</Link>
                  </li>
                  <li>
                    <Link href="/home-video">Home – Video</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li className="has-dropdown">
                <Link href="/services">Services</Link>
                <ul className="dropdown">
                  <li><Link href="/services/building-construction">Building Construction</Link></li>
                  <li><Link href="/services/architecture-design">Architecture Design</Link></li>
                  <li><Link href="/services/building-renovation">Building Renovation</Link></li>
                  <li><Link href="/services/flooring-roofing">Flooring & Roofing</Link></li>
                  <li><Link href="/services/building-maintenance">Building Maintenance</Link></li>
                  <li><Link href="/services/project-management">Project Management</Link></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/projects">Projects</Link>
                <ul className="dropdown">
                  <li><Link href="/projects/aspen-heights">Aspen Heights</Link></li>
                  <li><Link href="/projects/forest-hill-towers">Forest Hill Towers</Link></li>
                  <li><Link href="/projects/bayside-residences">Bayside Residences</Link></li>
                  <li><Link href="/projects/parkview-plaza">Parkview Plaza</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li className="has-dropdown">
                <span>Pages</span>
                <ul className="dropdown">
                  <li><Link href="/team">Our Team</Link></li>
                  <li><Link href="/faqs">FAQs</Link></li>
                </ul>
              </li>

              <li className="mobile-only">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
     <Button link={"/create"} text={'Contact us'} type={1}/>
        </div>
      </header>
    </>
  );
}
