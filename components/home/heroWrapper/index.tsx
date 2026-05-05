"use client";
import { useState, useEffect } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";

import aboutImg from '@/public/assets/images/aboutushero.webp'
import servicesImg from '@/public/assets/images/services.webp'
import projectsImg from '@/public/assets/images/projects.webp'
import contactImg from '@/public/assets/images/contact.webp'

const heroContents: Record<string, any> = {
    "/": { isHome: true, video: "/assets/videos/2.mp4" },
    "/about": {
        text: "Haqqımızda",
        img: aboutImg,
        subTitle: "Turan İnşaat hovuz, türk hamamı, sauna və spa layihələrində uzunmüddətli keyfiyyət və estetik dizayn təmin edir."
    },
    "/contact": {
        text: "Bizimlə əlaqə",
        img: contactImg,
        subTitle: "Suallarınız və əməkdaşlıq üçün bizimlə əlaqə saxlayın."
    },
    "/services": {
        text: "Hovuz, SPA və Hamam Xidmətləri",
        img: servicesImg,
        subTitle: "Fərdi və ictimai hovuz, türk hamamı və SPA xidmətləri."
    },
    "/products": {
        text: "Məhsullarımız",
        img: servicesImg,
        subTitle: "Hovuz və SPA üçün geniş məhsul çeşidimizlə tanış olun."
    },
    "/projects": {
        text: "Layihələrimiz",
        img: projectsImg,
        subTitle: "Real layihələrimiz ilə estetik və funksional dizayn."
    },
};

// 🔥 services slug-ları üçün ayrıca map
const serviceHeroMap: Record<string, any> = {
    "pool-types": {
        text: "Hovuz Növləri",
        img: servicesImg,
        subTitle: "Fərdi, ictimai və olimpiya hovuzları daxil olmaqla bütün hovuz növləri haqqında məlumat."
    },
    "pool-filtration": {
        text: "Hovuz Təmizləmə Sistemləri",
        img: servicesImg,
        subTitle: "Skimmer, daşma və müasir filtrasiya texnologiyaları."
    },
    "pool-heating-cooling": {
        text: "İsitmə və Soyutma Sistemləri",
        img: servicesImg,
        subTitle: "Hovuz suyu üçün effektiv istilik və soyutma həlləri."
    },
    "turkish-bath-spa": {
        text: "Türk Hamamı və SPA",
        img: servicesImg,
        subTitle: "Rahatlıq, sağlamlıq və lüks SPA həlləri."
    },
};

export default function HeroWrapper() {
    const pathname = usePathname();

    const hero = (() => {
        const cleanPath = pathname.replace(/\/$/, "");

        if (heroContents[cleanPath]) {
            return heroContents[cleanPath];
        }

        if (cleanPath.startsWith("/services/")) {
            const slug = cleanPath.split("/")[2];
            return serviceHeroMap[slug] || heroContents["/services"];
        }

        if (cleanPath.startsWith("/projects/")) {
            const slug = cleanPath.split("/")[2];
            return heroContents["/projects"];
        }

        return heroContents["/"];
    })();

    return (
        <Hero
            isHome={hero.isHome}
            img={hero.img}
            text={hero.text}
            video={hero.video}
            subTitle={hero.subTitle}
        />
    );
}