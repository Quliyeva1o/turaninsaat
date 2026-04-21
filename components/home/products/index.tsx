"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";

// ─── Tip təriflər ─────────────────────────────────────────────────────────────

type BadgeKey = "es" | "tr" | "ot";

interface Product {
  cat: string;
  badge: BadgeKey;
  brand: string;
  name: string;
  specs: string;
  price: string;
  img: string | null;
}

// ─── Məhsul datası ────────────────────────────────────────────────────────────
// Hər kateqoriyadan 1-2 məhsul. img dəyərləri /public/assets/products/ qovluğundan oxunur.

const PRODUCTS: Product[] = [
  {
    cat: "Keramika",
    badge: "es",
    brand: "Mayor Ceramica",
    name: "Crosscut Puro",
    specs: "Mat · 37.5×75 – 120×120 cm",
    price: "153.19",
    img: "img69",
  },
  {
    cat: "Keramika",
    badge: "es",
    brand: "Rosa Gres",
    name: "Cuore Verde",
    specs: "Rəngli · 31×62.6 – 97.9×97.9 cm",
    price: "174.95",
    img: "img110",
  },
  {
    cat: "Mozaik",
    badge: "es",
    brand: "Squamers",
    name: "Identity Siroko",
    specs: "Silikonlu · 2.5×2.5 – 5×5 cm",
    price: "125.03",
    img: "img239",
  },
  {
    cat: "Mozaik",
    badge: "tr",
    brand: "Betaş Mozaik",
    name: "BP-520",
    specs: "Silikonlu · 2.5×2.5 – 5×5 cm",
    price: "61.69",
    img: "img216",
  },
  {
    cat: "Filterlər",
    badge: "tr",
    brand: "Nurpool",
    name: "Bobin Sarğılı Filter",
    specs: "Ø525–Ø1200 · 6 yollu vana",
    price: "524.56",
    img: "img319",
  },
  {
    cat: "Nasoslar",
    badge: "tr",
    brand: "Nurpool",
    name: "Sirkulyasiya Nasosu A50",
    specs: "0.5 HP · Ø50 · 6 m³/saat",
    price: "328.23",
    img: "img348",
  },
  {
    cat: "Avadanlıq",
    badge: "ot",
    brand: "Elecro Engineering",
    name: "G2 Titan Isıtıcı",
    specs: "AISI 304 · 49–320 KW",
    price: "2091.69",
    img: "img368",
  },
  {
    cat: "Avadanlıq",
    badge: "ot",
    brand: "Pool Office",
    name: "Marquise Rulo Örtük",
    specs: "Avtomatik · 2.5×2.5 – 12×8 m",
    price: "12126",
    img: "img299",
  },
  {
    cat: "Aksesuarlar",
    badge: "tr",
    brand: "Nurpool",
    name: "Su Şəlaləsi AISI 304",
    specs: "700×500 – 1000×600 mm · Ø50/63",
    price: "580.00",
    img: "img433",
  },
  {
    cat: "Aksesuarlar",
    badge: "ot",
    brand: "Chasing",
    name: "Hydro 6 Kabelli Robot",
    specs: "17×10 m · 1–180 Mikron · 18m kabel",
    price: "5820.80",
    img: "img285",
  },
];

// ─── Konfiqurasiya ─────────────────────────────────────────────────────────────

const TABS = [
  "Hamısı",
  "Keramika",
  "Mozaik",
  "Filterlər",
  "Nasoslar",
  "Avadanlıq",
  "Aksesuarlar",
];

const BADGE_LABELS: Record<BadgeKey, string> = {
  es: "İspaniya",
  tr: "Türkiyə",
  ot: "Digər",
};

// ─── Fallback ikon (şəkil yükləmə xətası) ─────────────────────────────────────

function ImgFallback() {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{ opacity: 0.2 }}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

// ─── Tək kart ──────────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div style={styles.card}>
      {/* Şəkil sahəsi */}
      <div style={styles.imgWrapper}>
        {product.img && !imgError ? (
          <Image
            src={`/assets/products/${product.img}.jpg`}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            style={{ objectFit: "cover", borderRadius: 8 }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={styles.imgFallback}>
            <ImgFallback />
          </div>
        )}
      </div>

      {/* Kart başlığı: badge + kateqoriya */}
      <div style={styles.cardTop}>
        <span style={styles.badge[product.badge]}>
          {BADGE_LABELS[product.badge]}
        </span>
        <span style={styles.catLabel}>{product.cat}</span>
      </div>

      {/* Brend */}
      <p style={styles.brand}>{product.brand}</p>

      {/* Ad */}
      <p style={styles.productName}>{product.name}</p>

      {/* Spesifikasiya */}
      <p style={styles.specs}>{product.specs}</p>

      {/* Qiymət sətri */}
      <div style={styles.cardFooter}>
        <div>
          <span style={styles.priceFrom}>Başlayan qiymət</span>
          <span style={styles.price}>
            {Number(product.price).toLocaleString("az-AZ")} ₼
          </span>
        </div>
        <span style={styles.moreLink}>Ətraflı →</span>
      </div>
    </div>
  );
}

// ─── Əsas section ──────────────────────────────────────────────────────────────

export function ProductsHome() {
  const [activeTab, setActiveTab] = useState("Hamısı");

  const visible =
    activeTab === "Hamısı"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === activeTab);

  return (
    <section aria-label="Seçilmiş məhsullar" style={styles.section}>
      {/* Başlıq */}
      <div style={styles.header}>
  <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 uppercase font-bold tracking-[0.28em] mb-5"
            style={{ color: "#00A8B5", fontSize: 11 }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
            Məhsullarımız
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
          </p>        <h2  data-aos="fade-up"
            className="font-extrabold leading-[1.1] tracking-tight mb-6"
            style={{ color: "#FAF6EC", fontSize: "clamp(28px, 5vw, 52px)" }}>Hovuz və SPA üçün texnoloji həllər

        </h2>

          <div
            data-aos="fade-up"
            className="mx-auto mb-6"
            style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }}
          />
    <p         data-aos="fade-up"
            className="text-[15px] sm:text-[16px] leading-relaxed"
            style={{ color: "rgba(200,232,234,0.65)" }}>Müasir hovuz sistemləri, filtrasiya və spa avadanlıqları ilə keyfiyyətli və uzunömürlü həllər təqdim edirik.

        </p>
      </div>

      {/* Tablar */}
      <div style={styles.tabs} role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={tab === activeTab}
            onClick={() => setActiveTab(tab)}
            style={
              tab === activeTab ? styles.tabActive : styles.tab
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Kart şəbəkəsi */}
      <div style={styles.grid}>
        {visible.map((product, i) => (
          <ProductCard key={`${product.name}-${i}`} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">   <Button link="/products" text="Bütün məhsullara bax" type={5} style={styles.cta} />
      </div>    </section>
  );
}

export default ProductsHome;

// ─── Stillər ──────────────────────────────────────────────────────────────────
// Inline style obyektlərini ayrı tutmaq kodu oxunaqlı saxlayır.

const BADGE_BASE: React.CSSProperties = {
  fontSize: 10,
  padding: "3px 9px",
  borderRadius: 999,
  fontWeight: 600,
  letterSpacing: "0.04em",
  whiteSpace: "nowrap",
};

const styles = {
  section: {
    background: "#0A1E30",
    padding: "64px 24px 80px",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  } as React.CSSProperties,

  header: {
    textAlign: "center",
    marginBottom: 20,
  } as React.CSSProperties,

  sectionLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#00A8B5",
    marginBottom: 8,
  } as React.CSSProperties,

  title: {
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: 700,
    color: "#f1f5f9",
    letterSpacing: "-0.02em",
    margin: 0,
  } as React.CSSProperties,

  tabs: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    justifyContent: "center",
    marginBottom: 32,
  } as React.CSSProperties,

  tab: {
    fontSize: 12,
    padding: "6px 14px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "transparent",
    color: "rgba(148,163,184,0.7)",
    cursor: "pointer",
    transition: "all 0.15s ease",
  } as React.CSSProperties,

  tabActive: {
    fontSize: 12,
    padding: "6px 14px",
    borderRadius: 999,
    border: "1px solid #00A8B5",
    background: "rgba(0,168,181,0.1)",
    color: "#00A8B5",
    cursor: "pointer",
    fontWeight: 600,
  } as React.CSSProperties,

  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
    gap: 14,
  } as React.CSSProperties,

  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 7,
    transition: "border-color 0.2s ease",
    cursor: "pointer",
  } as React.CSSProperties,

  imgWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    borderRadius: 8,
    overflow: "hidden",
    background: "rgba(0,0,0,0.2)",
    marginBottom: 2,
  } as React.CSSProperties,

  imgFallback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8",
  } as React.CSSProperties,

  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } as React.CSSProperties,

  badge: {
    es: {
      ...BADGE_BASE,
      background: "rgba(29,78,216,0.2)",
      color: "#93c5fd",
    } as React.CSSProperties,
    tr: {
      ...BADGE_BASE,
      background: "rgba(185,28,28,0.2)",
      color: "#fca5a5",
    } as React.CSSProperties,
    ot: {
      ...BADGE_BASE,
      background: "rgba(22,101,52,0.2)",
      color: "#86efac",
    } as React.CSSProperties,
  },

  catLabel: {
    fontSize: 10,
    color: "rgba(148,163,184,0.5)",
  } as React.CSSProperties,

  brand: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#00A8B5",
    margin: 0,
  } as React.CSSProperties,

  productName: {
    fontSize: 14,
    fontWeight: 600,
    color: "#f1f5f9",
    lineHeight: 1.35,
    margin: 0,
  } as React.CSSProperties,

  specs: {
    fontSize: 11,
    color: "rgba(148,163,184,0.7)",
    lineHeight: 1.5,
    margin: 0,
  } as React.CSSProperties,

  cardFooter: {
    marginTop: "auto",
    paddingTop: 10,
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } as React.CSSProperties,

  priceFrom: {
    fontSize: 9,
    color: "rgba(148,163,184,0.5)",
    display: "block",
    marginBottom: 1,
  } as React.CSSProperties,

  price: {
    fontSize: 15,
    fontWeight: 700,
    color: "#f1f5f9",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  moreLink: {
    fontSize: 11,
    color: "rgba(0,168,181,0.6)",
  } as React.CSSProperties,

  ctaWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  } as React.CSSProperties,

  cta: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 600,
    color: "#0A1E30",
    background: "linear-gradient(135deg, #00A8B5, #38bdf8)",
    padding: "12px 28px",
    borderRadius: 999,
    textDecoration: "none",
    letterSpacing: "0.01em",
    boxShadow: "0 6px 24px rgba(0,168,181,0.25)",
    transition: "all 0.2s ease",
  } as React.CSSProperties,
};