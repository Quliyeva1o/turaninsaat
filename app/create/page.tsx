"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";

// =========================
// ASSETS — same imports as before
// =========================
import img61 from "@/public/assets/hovuzlaar/img61.webp";
import img62 from "@/public/assets/hovuzlaar/img62.webp";
import img63 from "@/public/assets/hovuzlaar/img63.webp";
import img64 from "@/public/assets/hovuzlaar/img64.webp";
import img65 from "@/public/assets/hovuzlaar/img65.webp";
import img66 from "@/public/assets/hovuzlaar/img66.webp";
import img67 from "@/public/assets/hovuzlaar/img67.webp";
import img68 from "@/public/assets/hovuzlaar/img68.webp";
import img1088 from "@/public/assets/hovuzlaar/img10888.webp";
import logo from '@/public/assets/images/logoag.webp'





// import a151gece from "@/public/assets/hovuzlar/klassikcam/a151gece.webp";
// import a155 from "@/public/assets/hovuzlar/klassikcam/a155.webp";
// import a155gece from "@/public/assets/hovuzlar/klassikcam/a155gece.webp";
// import a158 from "@/public/assets/hovuzlar/klassikcam/a158.webp"
// import a158gece from "@/public/assets/hovuzlar/klassikcam/a158gece.webp";
// import a159 from "@/public/assets/hovuzlar/klassikcam/a159.webp";
// import a159gece from "@/public/assets/hovuzlar/klassikcam/a159gece.webp";
// import a161 from "@/public/assets/hovuzlar/klassikcam/a161.webp";
// import a161gece from "@/public/assets/hovuzlar/klassikcam/a161gece.webp";
// import a161l from "@/public/assets/hovuzlar/klassikcam/a161l.webp";
// import a161lgece from "@/public/assets/hovuzlar/klassikcam/a161lgece.webp";
// import a218 from "@/public/assets/hovuzlar/klassikcam/a218.webp";
// import a218gece from "@/public/assets/hovuzlar/klassikcam/a218gece.webp";
// import a231 from "@/public/assets/hovuzlar/klassikcam/a231.webp";
// import a231gece from "@/public/assets/hovuzlar/klassikcam/a231gece.webp";
// import a236 from "@/public/assets/hovuzlar/klassikcam/a236.webp";
// import a236gece from "@/public/assets/hovuzlar/klassikcam/a236gece.webp";
// import a276 from "@/public/assets/hovuzlar/klassikcam/a276.webp";
// import a276gece from "@/public/assets/hovuzlar/klassikcam/a276gece.webp";

// import bali from "@/public/assets/hovuzlar/kare/bali.webp";
// import baligece from "@/public/assets/hovuzlar/kare/baligece.webp";
// import floralblue from "@/public/assets/hovuzlar/kare/floralBlue.webp";
// import floralblueGece from "@/public/assets/hovuzlar/kare/floralBlueGece.webp";
// import floralgreen from "@/public/assets/hovuzlar/kare/floralGreen.webp";
// import floralgreenGece from "@/public/assets/hovuzlar/kare/floralGreenGece.webp";
// import judiGreyKare from "@/public/assets/hovuzlar/kare/judiGrey.webp";
// import judiGreyKareGece from "@/public/assets/hovuzlar/kare/judiGreyGece.webp";

// import light from "@/public/assets/kenarkafeller/light.webp";
// import lightGece from "@/public/assets/kenarkafeller/lightgece.webp";
import superstone from "@/public/assets/kenarkafeller/superstonegpt.webp";
import superstoneGece from "@/public/assets/kenarkafeller/superstonegptgece.webp";
// import judiGrey from "@/public/assets/kenarkafeller/judigrey.webp";
// import judiGreyGece from "@/public/assets/kenarkafeller/judigreygece.webp";
// import lucaGrey from "@/public/assets/kenarkafeller/lucaGrey.webp";
// import lucaGreyGece from "@/public/assets/kenarkafeller/lucaGreyGece.webp";

// import lightorta from "@/public/assets/ortakafeller/lightorta.webp";
// import lightortaGece from "@/public/assets/ortakafeller/lightortaGece.webp";
// import judiGreyorta from "@/public/assets/ortakafeller/judiGreyorta.webp";
// import judiGreyortaGece from "@/public/assets/ortakafeller/judiGreyortaGece.webp";
// import lucaGreyOrta from "@/public/assets/ortakafeller/lucaGreyOrta.webp";
// import lucaGreyOrtaGece from "@/public/assets/ortakafeller/lucaGreyOrtaGece.webp";

// import terasLight from "@/public/assets/teraslar/villa3.webp";
// import terasLightGece from "@/public/assets/teraslar/villa3gece.webp";
// import terasJudi from "@/public/assets/teraslar/villa2.webp";
// import terasJudiGece from "@/public/assets/teraslar/villa3gecee.webp";
// import terasLuca from "@/public/assets/teraslar/hovuz.webp";
// import terasLucaGece from "@/public/assets/teraslar/hovuzgece.webp";
// import mavivilla from "@/public/assets/teraslar/mavivilla.webp";
// import mavivillagece from "@/public/assets/teraslar/mavivillagece.webp";
// import villa4 from "@/public/assets/teraslar/villa4.webp";

import gpt from "@/public/assets/teraslar/esashovuz.webp";
import gptgece from "@/public/assets/teraslar/mavihovuzgece.webp";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
// =========================
// TYPES
// =========================
interface TileOption {
  key: string;
  label: string;
  gunduz: StaticImageData;
  gece: StaticImageData;
}

interface CatalogCategory {
  id: string;
  label: string;
  icon: string;
  options: TileOption[];
}

// =========================
// IMAGE LAYER
// =========================
interface ImageLayerProps {
  img: StaticImageData;
  isActive: boolean;
  zIndex: number;
  alt: string;
  style?: React.CSSProperties;
  // isMobile?: boolean
}

function ImageLayer({ img, isActive, zIndex, alt, style }: ImageLayerProps) {
  return (
    <Image
      src={img}
      alt={alt}
      className={`absolute w-full h-full object-cover object-bottom transition-opacity duration-500`}
      style={{ ...style, opacity: isActive ? 1 : 0, zIndex }}
      width={100000}
      height={100000}
      quality={100}
      priority
    />
  );
}

// =========================
// TILE CARD
// =========================
function TileCard({
  option,
  isSelected,
  isNight,
  onClick,
}: {
  option: TileOption;
  isSelected: boolean;
  isNight: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-full group"
      style={{ outline: "none", background: "none", border: "none", padding: 0 }}
    >
      {/* Thumbnail */}
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          border: isSelected
            ? "2px solid rgba(255,255,255,0.9)"
            : "2px solid rgba(255,255,255,0.08)",
          boxShadow: isSelected
            ? "0 0 0 3px rgba(99,179,237,0.5), 0 4px 20px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.3)",
          transition: "all 0.25s ease",
          transform: isSelected ? "scale(1.03)" : "scale(1)",
          aspectRatio: "1 / 1",
          position: "relative",
        }}
      >
        <Image
          src={isNight ? option.gece : option.gunduz}
          alt={option.label}
          fill
          className="object-cover"
          sizes="80px"
          quality={80}
        />
        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.08)",
            opacity: 0,
            transition: "opacity 0.2s",
          }}
          className="group-hover:opacity-100"
        />
        {/* Selected checkmark */}
        {isSelected && (
          <div
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "rgba(99,179,237,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: "#fff",
              fontWeight: 700,
            }}
          >
            ✓
          </div>
        )}
      </div>
      {/* Label */}
      <p
        style={{
          marginTop: 5,
          fontSize: 10,
          fontWeight: isSelected ? 700 : 400,
          color: isSelected ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          transition: "color 0.2s",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {option.label}
      </p>
    </button>
  );
}

// =========================
// CATALOG PANEL
// =========================
// =========================
// CATALOG PANEL (responsive)
// =========================
function CatalogPanel({
  categories,
  selections,
  onSelect,
  isNight,
}: {
  categories: CatalogCategory[];
  selections: Record<string, string>;
  onSelect: (categoryId: string, key: string) => void;
  isNight: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const [mounted, setMounted] = useState(false); // ← əlavə et

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    check();
    setMounted(true); // ← check-dən sonra mounted=true
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const tabSize = isMobile ? 42 : 48;
  const panelWidth = isMobile ? 80 : 176;
  const gridcol = isMobile ? '' : '1fr 1fr';

  const activeCat = categories.find((c) => c.id === activeCategory)!;
  if (!mounted) return null;

  // ── MOBILE PORTRAIT: horizontal strip at top-left ─────────────────────────
  {
    return (isMobile && isPortrait) ?
      (
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            maxWidth: "calc(100vw - 80px)",
          }}
        >
          {/* Row 1 — Home + category tabs */}
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <Link href="/" title="Ana səhifə">
              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BiHome size={18} color="white" />
              </button>
            </Link>

            {categories.map((cat) => {
              const isActive = cat.id === activeCategory;
              const selectedOpt = cat.options.find((o) => o.key === selections[cat.id]);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  title={cat.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    border: isActive
                      ? "1.5px solid rgba(255,255,255,0.7)"
                      : "1.5px solid rgba(255,255,255,0.12)",
                    background: isActive ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(12px)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    boxShadow: isActive ? "0 4px 16px rgba(0,0,0,0.4)" : "none",
                    padding: 0,
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                >
                  {selectedOpt && (
                    <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
                      <Image
                        src={isNight ? selectedOpt.gece : selectedOpt.gunduz}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  )}
                  <span style={{ fontSize: 16, position: "relative" }}>{cat.icon}</span>
                  <span
                    style={{
                      fontSize: 7,
                      color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      position: "relative",
                    }}
                  >
                    {cat.label.slice(0, 5)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 2 — Horizontal scrollable tiles */}
          <div
            style={{
              background: "rgba(8,8,12,0.75)",
              backdropFilter: "blur(20px)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
              padding: "8px 10px",
            }}
          >
            <p
              style={{
                margin: "0 0 6px",
                fontSize: 9,
                fontWeight: 700,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {activeCat.icon} {activeCat.label} · {activeCat.options.length} seçim
            </p>

            <div
              style={{
                display: "flex",
                gap: 8,
                overflowX: "auto",
                scrollbarWidth: "none",
                paddingBottom: 2,
              }}
            >
              {activeCat.options.map((option) => (
                <div key={option.key} style={{ flexShrink: 0, width: 60 }}>
                  <TileCard
                    option={option}
                    isSelected={selections[activeCategory] === option.key}
                    isNight={isNight}
                    onClick={() => onSelect(activeCategory, option.key)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
      :
      (
        <div
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            display: "flex",
            gap: 8,
            height: isMobile ? "min(420px, 90vh)" : "min(600px, 85vh)",
          }}
        >
          {/* Category tabs (icon strip) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 5 : 6,
              justifyContent: "center",
            }}
          >
            <Link href="/" title="Ana səhifə">
              <button
                style={{
                  width: tabSize,
                  height: tabSize,
                  borderRadius: 12,
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(12px)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >
                <BiHome size={isMobile ? 18 : 22} color="white" />
              </button>
            </Link>

            {categories.map((cat) => {
              const isActive = cat.id === activeCategory;
              const selectedOpt = cat.options.find((o) => o.key === selections[cat.id]);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  title={cat.label}
                  style={{
                    width: tabSize,
                    height: tabSize,
                    borderRadius: 12,
                    border: isActive
                      ? "1.5px solid rgba(255,255,255,0.7)"
                      : "1.5px solid rgba(255,255,255,0.12)",
                    background: isActive ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(12px)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? "0 4px 16px rgba(0,0,0,0.4)" : "none",
                    padding: 0,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {selectedOpt && (
                    <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
                      <Image
                        src={isNight ? selectedOpt.gece : selectedOpt.gunduz}
                        alt=""
                        fill
                        className="object-cover"
                        sizes={`${tabSize}px`}
                      />
                    </div>
                  )}
                  <span style={{ fontSize: isMobile ? 15 : 18, position: "relative" }}>{cat.icon}</span>
                  <span
                    style={{
                      fontSize: isMobile ? 7 : 8,
                      color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      position: "relative",
                    }}
                  >
                    {cat.label.slice(0, 5)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tiles grid panel */}
          <div
            style={{
              width: panelWidth,
              height: "100%",
              background: "rgba(8,8,12,0.72)",
              backdropFilter: "blur(20px)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "12px 12px 8px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? 10 : 11,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {activeCat.icon} {activeCat.label}
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: 9,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.06em",
                }}
              >
                {activeCat.options.length} seçim
              </p>
            </div>

            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "10px 10px 14px",
                display: "grid",
                gridTemplateColumns: gridcol,
                gap: isMobile ? 2 : 8,
                alignContent: "start",
                scrollbarWidth: "none",
              }}
            >
              {activeCat.options.map((option) => (
                <TileCard
                  key={option.key}
                  option={option}
                  isSelected={selections[activeCategory] === option.key}
                  isNight={isNight}
                  onClick={() => onSelect(activeCategory, option.key)}
                />
              ))}
            </div>
          </div>
        </div>
      )


  }
}

// =========================
// MAIN COMPONENT
// =========================
export default function Create() {
  const [isNight, setIsNight] = useState(false);

  // --- Data ---
  const hovuzlar: TileOption[] = [
    { key: "a151", label: "A151", gunduz: img61, gece: img61 },
    { key: "a62", label: "a62", gunduz: img62, gece: img62 },
    { key: "a63", label: "a63", gunduz: img63, gece: img63 },
    { key: "a64", label: "a64", gunduz: img64, gece: img64 },
    { key: "a65", label: "a65", gunduz: img65, gece: img65 },
    { key: "a66", label: "a66", gunduz: img66, gece: img66 },
    { key: "a67", label: "a67", gunduz: img67, gece: img67 },
    { key: "a668", label: "a68", gunduz: img68, gece: img68 },
    { key: "a1011", label: "a1011", gunduz: img1088, gece: img1088 },


    // { key: "a155", label: "A155", gunduz: a155, gece: a155gece },
    // { key: "a158", label: "A158", gunduz: a158, gece: a158gece },
    // { key: "a159", label: "A159", gunduz: a159, gece: a159gece },
    // { key: "a161", label: "A161", gunduz: a161, gece: a161gece },
    // { key: "a161l", label: "A161L", gunduz: a161l, gece: a161lgece },
    // { key: "a218", label: "A218", gunduz: a218, gece: a218gece },
    // { key: "a231", label: "A231", gunduz: a231, gece: a231gece },
    // { key: "a236", label: "A236", gunduz: a236, gece: a236gece },
    // { key: "a276", label: "A276", gunduz: a276, gece: a276gece },
    // { key: "bali", label: "Bali", gunduz: bali, gece: baligece },
    // { key: "floralblue", label: "Floral Blue", gunduz: floralblue, gece: floralblueGece },
    // { key: "floralgreen", label: "Floral Green", gunduz: floralgreen, gece: floralgreenGece },
    // { key: "judiGrey", label: "Judi Grey", gunduz: judiGreyKare, gece: judiGreyKareGece },
    // { key: "gpt", label: "gpt ", gunduz: gpt, gece: gptgece },

  ];

  const kenarKafeller: TileOption[] = [
    // { key: "light", label: "Light", gunduz: light, gece: lightGece },
    // { key: "judi", label: "Judi Grey", gunduz: judiGrey, gece: judiGreyGece },
    // { key: "luca", label: "Luca Grey", gunduz: lucaGrey, gece: lucaGreyGece },
    { key: "superstone", label: "Superstone", gunduz: superstone, gece: superstoneGece },
  ];

  const ortaKafeller: TileOption[] = [
    // { key: "light", label: "Light", gunduz: lightorta, gece: lightortaGece },
    // { key: "judi", label: "Judi Grey", gunduz: judiGreyorta, gece: judiGreyortaGece },
    // { key: "luca", label: "Luca Grey", gunduz: lucaGreyOrta, gece: lucaGreyOrtaGece },
    { key: "superstone", label: "Superstone", gunduz: superstone, gece: superstoneGece },
  ];

  const teraslar: TileOption[] = [
    // { key: "judi", label: "Judi", gunduz: terasJudi, gece: terasJudiGece },
    // { key: "boz", label: "Boz", gunduz: villa4, gece: terasJudiGece },
    // { key: "light", label: "Light", gunduz: terasLight, gece: terasLightGece },
    // { key: "luca", label: "Luca", gunduz: terasLuca, gece: terasLucaGece },
    // { key: "mavivilla", label: "Mavi Villa", gunduz: mavivilla, gece: mavivillagece },
    { key: "gpt", label: "GPT Villa", gunduz: gpt, gece: gptgece },

  ];

  const categories: CatalogCategory[] = [
    { id: "hovuz", label: "Hovuz", icon: "🏊", options: hovuzlar },
    { id: "kenar", label: "Kenar", icon: "🪨", options: kenarKafeller },
    // { id: "orta", label: "Orta", icon: "⬛", options: ortaKafeller },
    { id: "teras", label: "Teras", icon: "🏡", options: teraslar },
  ];

  const [selections, setSelections] = useState<Record<string, string>>({
    hovuz: "a151",
    kenar: "superstone",
    orta: "superstone",
    teras: "gpt",
  });

  const handleSelect = (categoryId: string, key: string) => {
    setSelections((prev) => ({ ...prev, [categoryId]: key }));
  };

  const hovuzKey = selections.hovuz as keyof typeof Object;
  const kenarKey = selections.kenar;
  const ortaKey = selections.orta;
  const terasKey = selections.teras;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      // setIsPortrait(window.innerHeight > window.innerWidth);
    };
    check();
    // setMounted(true); // ← check-dən sonra mounted=true
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <div className="relative w-screen h-screen overflow-hidden">


      {/* HOVUZLAR */}
      {hovuzlar.map((opt) => (
        <ImageLayer
          key={opt.key}
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === hovuzKey}
          zIndex={1}
          // isMobile
          style={
            !isMobile
              ? {
                transform: ['a66', 'a63', 'a64', 'a65', 'a67'].some(k => opt.key.includes(k))
                  ? "translateX(22px)"
                  : opt.key.includes('a62')
                    ? "scale(1.07) translateX(7px)"
                    : undefined
              }
              : undefined
          }
          alt={`hovuz-${opt.key}`}
        />
      ))}

      {/* KENAR KAFELLƏR */}
      {kenarKafeller.map((opt) => (
        <ImageLayer
          key={opt.key}
          // isMobile
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === kenarKey}
          zIndex={4}
          alt={`kenar-${opt.key}`}
        />
      ))}

      {/* ORTA KAFELLƏR */}
      {ortaKafeller.map((opt) => (
        <ImageLayer
          // isMobile
          key={opt.key}
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === ortaKey}
          zIndex={2}
          alt={`orta-${opt.key}`}
        />
      ))}

      {/* TERASLAR */}
      {teraslar.map((opt) => (
        <ImageLayer
          key={opt.key}
          // isMobile
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === terasKey}
          zIndex={3}
          alt={`teras-${opt.key}`}
        />
      ))}


      {/* ===================== */}
      {/* LEFT CATALOG PANEL   */}
      {/* ===================== */}
      <CatalogPanel
        categories={categories}
        selections={selections}
        onSelect={handleSelect}
        isNight={isNight}
      />

      {/* ===================== */}
      {/* DAY / NIGHT TOGGLE   */}
      {/* ===================== */}
      <button
        onClick={() => setIsNight(!isNight)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 100,
          width: 52,
          height: 52,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.2)",
          background: isNight
            ? "rgba(20,20,40,0.85)"
            : "rgba(255,220,80,0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: isNight
            ? "0 0 20px rgba(100,100,255,0.3)"
            : "0 0 20px rgba(255,200,0,0.4)",
          cursor: "pointer",
          fontSize: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
        title={isNight ? "Gündüzə keç" : "Gecəyə keç"}
      >
        {isNight ? "🌙" : "☀️"}
      </button>

      {/* Bottom status bar */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: "8px 20px",
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        {categories.map((cat) => {
          const sel = cat.options.find((o) => o.key === selections[cat.id]);
          return (
            <div key={cat.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13 }}>{cat.icon}</span>
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {cat.label}:
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                {sel?.label ?? "—"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}