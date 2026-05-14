"use client";

import Hero from "../hero";
import { usePathname } from "next/navigation";

import aboutImg from "@/public/assets/images/aboutushero.webp";
import servicesImg from "@/public/assets/images/services.webp";
import projectsImg from "@/public/assets/images/projects.webp";
import contactImg from "@/public/assets/images/contact.webp";

type HeroContent = {
    isHome?: boolean;
    text?: string;
    img?: any;
    video?: string;
    subTitle?: string;
};

const heroContents: Record<string, HeroContent> = {
    "/": {
        isHome: true,
        video: "/assets/videos/2.mp4",
    },

    "/about": {
        text: "Haqqımızda",
        img: aboutImg,
        subTitle:
            "Turan İnşaat hovuz, türk hamamı, sauna və spa layihələrində uzunmüddətli keyfiyyət və estetik dizayn təmin edir.",
    },

    "/contact": {
        text: "Bizimlə əlaqə",
        img: contactImg,
        subTitle: "Suallarınız və əməkdaşlıq üçün bizimlə əlaqə saxlayın.",
    },

    "/services": {
        text: "Hovuz, SPA və Hamam Xidmətləri",
        img: servicesImg,
        subTitle:
            "Turan İnşaat MMC Bakıda və Azərbaycanın müxtəlif bölgələrində  fərdi hovuz, ictimai hovuz, olimpiya hovuzu, daşma və skimmer tipli hovuzların layihələndirilməsi, tikintisi və quraşdırılmasıüzrə peşəkar xidmət göstərir",
    },

    "/products": {
        text: "Məhsullarımız",
        img: servicesImg,
        subTitle: "Hovuz və SPA üçün geniş məhsul çeşidimizlə tanış olun.",
    },

    "/projects": {
        text: "Layihələrimiz",
        img: projectsImg,
        subTitle: "Real layihələrimiz ilə estetik və funksional dizayn.",
    },
};

const serviceHeroMap: Record<string, HeroContent> = {
    "pool-types": {
        text: "Hovuz Növləri",
        img: servicesImg,
        subTitle:
            "Fərdi, ictimai, olimpiya, uşaq, hidromasajlı və infinity hovuz növləri haqqında ətraflı məlumat.",
    },

    "pool-filtration": {
        text: "Hovuz Təmizləmə Sistemləri",
        img: servicesImg,
        subTitle:
            "Skimmer, daşma, UV dezinfeksiya, duz elektroliz və avtomatik dozaj sistemləri.",
    },

    "pool-heating-cooling": {
        text: "Hovuz İsitmə və Soyutma Sistemləri",
        img: servicesImg,
        subTitle:
            "Hovuz suyu üçün isitmə pompası, boru tipli və plaka tipli eşenjor həlləri.",
    },

    "turkish-bath-spa": {
        text: "Türk Hamamı və SPA",
        img: servicesImg,
        subTitle:
            "Türk hamamı, sauna, sulu par otağı, duz otağı və SPA layihələri üçün peşəkar həllər.",
    },
};

function normalizePath(pathname: string) {
    if (pathname === "/") return "/";

    const withoutTrailingSlash = pathname.replace(/\/$/, "");

    // Gələcəkdə /en/about, /en/services kimi route istifadə etsən,
    // hero yenə əsas AZ route-a görə tapılacaq.
    return withoutTrailingSlash.replace(/^\/en(?=\/|$)/, "") || "/";
}

export default function HeroWrapper() {
    const pathname = usePathname();
    const cleanPath = normalizePath(pathname);

    let hero: HeroContent;

    if (heroContents[cleanPath]) {
        hero = heroContents[cleanPath];
    } else if (cleanPath.startsWith("/services/")) {
        const slug = cleanPath.split("/")[2];
        hero = serviceHeroMap[slug] || heroContents["/services"];
    } else if (cleanPath.startsWith("/projects/")) {
        hero = heroContents["/projects"];
    } else {
        hero = heroContents["/"];
    }

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