"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";

// =========================
// ASSETS — same imports as before
// =========================
import a151 from "../../public/assets/hovuzlar/klassikcam/a151.png";
import a151gece from "../../public/assets/hovuzlar/klassikcam/a151gece.png";
import a155 from "../../public/assets/hovuzlar/klassikcam/a155.png";
import a155gece from "../../public/assets/hovuzlar/klassikcam/a155gece.png";
import a158 from "../../public/assets/hovuzlar/klassikcam/a158.png";
import a158gece from "../../public/assets/hovuzlar/klassikcam/a158gece.png";
import a159 from "../../public/assets/hovuzlar/klassikcam/a159.png";
import a159gece from "../../public/assets/hovuzlar/klassikcam/a159gece.png";
import a161 from "../../public/assets/hovuzlar/klassikcam/a161.png";
import a161gece from "../../public/assets/hovuzlar/klassikcam/a161gece.png";
import a161l from "../../public/assets/hovuzlar/klassikcam/a161l.png";
import a161lgece from "../../public/assets/hovuzlar/klassikcam/a161lgece.png";
import a218 from "../../public/assets/hovuzlar/klassikcam/a218.png";
import a218gece from "../../public/assets/hovuzlar/klassikcam/a218gece.png";
import a231 from "../../public/assets/hovuzlar/klassikcam/a231.png";
import a231gece from "../../public/assets/hovuzlar/klassikcam/a231gece.png";
import a236 from "../../public/assets/hovuzlar/klassikcam/a236.png";
import a236gece from "../../public/assets/hovuzlar/klassikcam/a236gece.png";
import a276 from "../../public/assets/hovuzlar/klassikcam/a276.png";
import a276gece from "../../public/assets/hovuzlar/klassikcam/a276gece.png";

import bali from "../../public/assets/hovuzlar/kare/bali.png";
import baligece from "../../public/assets/hovuzlar/kare/baligece.png";
import floralblue from "../../public/assets/hovuzlar/kare/floralBlue.png";
import floralblueGece from "../../public/assets/hovuzlar/kare/floralBlueGece.png";
import floralgreen from "../../public/assets/hovuzlar/kare/floralGreen.png";
import floralgreenGece from "../../public/assets/hovuzlar/kare/floralGreenGece.png";
import judiGreyKare from "../../public/assets/hovuzlar/kare/judiGrey.png";
import judiGreyKareGece from "../../public/assets/hovuzlar/kare/judiGreyGece.png";

import light from "../../public/assets/kenarkafeller/light.png";
import lightGece from "../../public/assets/kenarkafeller/lightgece.png";
import superstone from "../../public/assets/kenarkafeller/superstonegpt.png";
import superstoneGece from "../../public/assets/kenarkafeller/superstonegptgece.png";
import judiGrey from "../../public/assets/kenarkafeller/judigrey.png";
import judiGreyGece from "../../public/assets/kenarkafeller/judigreygece.png";
import lucaGrey from "../../public/assets/kenarkafeller/lucaGrey.png";
import lucaGreyGece from "../../public/assets/kenarkafeller/lucaGreyGece.png";

import lightorta from "../../public/assets/ortakafeller/lightorta.png";
import lightortaGece from "../../public/assets/ortakafeller/lightortaGece.png";
import judiGreyorta from "../../public/assets/ortakafeller/judiGreyorta.png";
import judiGreyortaGece from "../../public/assets/ortakafeller/judiGreyortaGece.png";
import lucaGreyOrta from "../../public/assets/ortakafeller/lucaGreyOrta.png";
import lucaGreyOrtaGece from "../../public/assets/ortakafeller/lucaGreyOrtaGece.png";

import terasLight from "../../public/assets/teraslar/villa3.png";
import terasLightGece from "../../public/assets/teraslar/villa3gece.png";
import terasJudi from "../../public/assets/teraslar/villa2.png";
import terasJudiGece from "../../public/assets/teraslar/villa3gecee.png";
import terasLuca from "../../public/assets/teraslar/hovuz.png";
import terasLucaGece from "../../public/assets/teraslar/hovuzgece.png";
import mavivilla from "../../public/assets/teraslar/mavivilla.png";
import mavivillagece from "../../public/assets/teraslar/mavivillagece.png";
import villa4 from "../../public/assets/teraslar/villa4.png";

import gpt from "../../public/assets/teraslar/mavihovuz.png";
import gptgece from "../../public/assets/teraslar/mavihovuzgece.png";
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
}

function ImageLayer({ img, isActive, zIndex, alt, style }: ImageLayerProps) {
  return (
    <Image
      src={img}
      alt={alt}
      className="absolute w-full h-full object-cover object-bottom transition-opacity duration-500"
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

  const activeCat = categories.find((c) => c.id === activeCategory)!;

  return (
    <div
      style={{
        position: "absolute",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        display: "flex",
        gap: 8,
        height: "min(600px, 85vh)",
      }}
    >
      {/* Category tabs (icon strip) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          justifyContent: "center",
        }}
      >
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          const selectedOpt = cat.options.find((o) => o.key === selections[cat.id]);
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              title={cat.label}
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                border: isActive
                  ? "1.5px solid rgba(255,255,255,0.7)"
                  : "1.5px solid rgba(255,255,255,0.12)",
                background: isActive
                  ? "rgba(255,255,255,0.15)"
                  : "rgba(0,0,0,0.45)",
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
              {/* Mini preview of selected tile */}
              {selectedOpt && (
                <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
                  <Image
                    src={isNight ? selectedOpt.gece : selectedOpt.gunduz}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              )}
              <span style={{ fontSize: 18, position: "relative" }}>{cat.icon}</span>
              <span
                style={{
                  fontSize: 8,
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
          width: 176,
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
        {/* Panel header */}
        <div
          style={{
            padding: "14px 14px 10px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 11,
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

        {/* Scrollable grid */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "10px 10px 14px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
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
  );
}

// =========================
// MAIN COMPONENT
// =========================
export default function Create() {
  const [isNight, setIsNight] = useState(false);

  // --- Data ---
  const hovuzlar: TileOption[] = [
    { key: "a151", label: "A151", gunduz: a151, gece: a151gece },
    { key: "a155", label: "A155", gunduz: a155, gece: a155gece },
    { key: "a158", label: "A158", gunduz: a158, gece: a158gece },
    { key: "a159", label: "A159", gunduz: a159, gece: a159gece },
    { key: "a161", label: "A161", gunduz: a161, gece: a161gece },
    { key: "a161l", label: "A161L", gunduz: a161l, gece: a161lgece },
    { key: "a218", label: "A218", gunduz: a218, gece: a218gece },
    { key: "a231", label: "A231", gunduz: a231, gece: a231gece },
    { key: "a236", label: "A236", gunduz: a236, gece: a236gece },
    { key: "a276", label: "A276", gunduz: a276, gece: a276gece },
    { key: "bali", label: "Bali", gunduz: bali, gece: baligece },
    { key: "floralblue", label: "Floral Blue", gunduz: floralblue, gece: floralblueGece },
    { key: "floralgreen", label: "Floral Green", gunduz: floralgreen, gece: floralgreenGece },
    { key: "judiGrey", label: "Judi Grey", gunduz: judiGreyKare, gece: judiGreyKareGece },
        { key: "gpt", label: "gpt ", gunduz: gpt, gece: gptgece },

  ];

  const kenarKafeller: TileOption[] = [
    { key: "light", label: "Light", gunduz: light, gece: lightGece },
    { key: "judi", label: "Judi Grey", gunduz: judiGrey, gece: judiGreyGece },
    { key: "luca", label: "Luca Grey", gunduz: lucaGrey, gece: lucaGreyGece },
    { key: "superstone", label: "Superstone", gunduz: superstone, gece: superstoneGece },
  ];

  const ortaKafeller: TileOption[] = [
    { key: "light", label: "Light", gunduz: lightorta, gece: lightortaGece },
    { key: "judi", label: "Judi Grey", gunduz: judiGreyorta, gece: judiGreyortaGece },
    { key: "luca", label: "Luca Grey", gunduz: lucaGreyOrta, gece: lucaGreyOrtaGece },
    { key: "superstone", label: "Superstone", gunduz: superstone, gece: superstoneGece },
  ];

  const teraslar: TileOption[] = [
    { key: "judi", label: "Judi", gunduz: terasJudi, gece: terasJudiGece },
    { key: "boz", label: "Boz", gunduz: villa4, gece: terasJudiGece },
    { key: "light", label: "Light", gunduz: terasLight, gece: terasLightGece },
    { key: "luca", label: "Luca", gunduz: terasLuca, gece: terasLucaGece },
    { key: "mavivilla", label: "Mavi Villa", gunduz: mavivilla, gece: mavivillagece },
    { key: "gpt", label: "GPT Villa", gunduz: gpt, gece: gptgece },

  ];

  const categories: CatalogCategory[] = [
    { id: "hovuz", label: "Hovuz", icon: "🏊", options: hovuzlar },
    { id: "kenar", label: "Kenar", icon: "🪨", options: kenarKafeller },
    { id: "orta", label: "Orta", icon: "⬛", options: ortaKafeller },
    { id: "teras", label: "Teras", icon: "🏡", options: teraslar },
  ];

  const [selections, setSelections] = useState<Record<string, string>>({
    hovuz: "gpt",
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

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* HOVUZLAR */}
      {hovuzlar.map((opt) => (
        <ImageLayer
          key={opt.key}
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === hovuzKey}
          zIndex={10}
          alt={`hovuz-${opt.key}`}
        />
      ))}

      {/* KENAR KAFELLƏR */}
      {kenarKafeller.map((opt) => (
        <ImageLayer
          key={opt.key}
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === kenarKey}
          zIndex={20}
          alt={`kenar-${opt.key}`}
        />
      ))}

      {/* ORTA KAFELLƏR */}
      {ortaKafeller.map((opt) => (
        <ImageLayer
          key={opt.key}
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === ortaKey}
          zIndex={22}
          style={{ transform: "scale(1.01) translateX(3px)" }}
          alt={`orta-${opt.key}`}
        />
      ))}

      {/* TERASLAR */}
      {teraslar.map((opt) => (
        <ImageLayer
          key={opt.key}
          img={isNight ? opt.gece : opt.gunduz}
          isActive={opt.key === terasKey}
          zIndex={15}
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