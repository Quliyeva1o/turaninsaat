'use client';
import { useState } from "react";
import Image from "next/image";
import products from "@/data/products.json";
import HeroWrapper from "@/components/home/heroWrapper";

// ─── Types ─────────────────────────────────────────

export type Badge = "spain" | "turkey" | "other";

export interface Price {
  dim: string;
  val: string;
}

export interface Product {
  name: string;
  specs: string;
  prices: Price[];
  img: number;
}

export interface ProductGroup {
  cat: string;
  badge: Badge;
  brand: string;
  items: Product[];
}

const data = products as any[];

// ─── Badge config ─────────────────────────────────

const BADGE_CONFIG = {
  spain: { label: "İspaniya", bg: "#eff6ff", color: "#1d4ed8" },
  turkey: { label: "Türkiyə", bg: "#fef2f2", color: "#b91c1c" },
  other: { label: "Digər", bg: "#f0fdf4", color: "#166534" },
};

// ─── Badge ────────────────────────────────────────

function BadgePill({ badge }: { badge: Badge }) {
  const b = BADGE_CONFIG[badge];

  return (
    <span
      style={{
        fontSize: 11,
        padding: "4px 10px",
        borderRadius: 999,
        background: b.bg,
        color: b.color,
        fontWeight: 500,
        width: "fit-content",
      }}
    >
      {b.label}
    </span>
  );
}

// ─── Product Card ─────────────────────────────────

function ProductCard({ item, badge, brand }: { item: Product; badge: Badge; brand: string }) {
  return (

    <div
      style={{
        background: "#fff",
        border: "1px solid #f1f5f9",
        borderRadius: 16,
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        height: "100%",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",
          borderRadius: 12,
          overflow: "hidden",
          // background: "#f8fafc",
        }}
      >
        {item.img && item.img !== null && <Image
          src={`/assets/products/${item.img}.webp`}
          alt={item.name}
          fill
          quality={85}
          style={{
            objectFit: "contain",
            // padding: 12,
          }}
        />}
      </div>

      <BadgePill badge={badge} />

      {brand && (
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#16a34a",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          {brand}
        </p>
      )}

      <p
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#0f172a",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {item.name}
      </p>

      {item.specs && (
        <p
          style={{
            fontSize: 12,
            color: "#64748b",
            margin: 0,
          }}
        >
          {item.specs}
        </p>
      )}

      {/* Prices */}
      <div
        style={{
          marginTop: "auto",
          borderTop: "1px solid #f1f5f9",
          paddingTop: 10,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {item.prices.map((p, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
            }}
          >
            <span style={{ color: "#94a3b8" }}>{p.dim}</span>
            <span style={{ fontWeight: 600, color: "#0f172a" }}>
              {p.val} ₼
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Group Section ────────────────────────────────

function GroupSection({ group }: { group: ProductGroup }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#64748b",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 16,
        }}
      >
        {group.cat}
        <span style={{ marginLeft: 8, color: "#94a3b8", fontSize: 12 }}>
          ({group.items.length})
        </span>
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {group.items.map((item, i) => (
          <ProductCard key={i} item={item} badge={group.badge} brand={group.brand} />
        ))}
      </div>
    </section>
  );
}

// ─── Main ─────────────────────────────────────────

const ALL = "Hamısı";

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [search, setSearch] = useState("");

  const categories = [ALL, ...data.map((g) => g.cat)];

  const filtered = data
    .filter((g) => activeCategory === ALL || g.cat === activeCategory)
    .map((g) => ({
      ...g,
      items: search.trim()
        ? g.items.filter(
          (item: any) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.specs.toLowerCase().includes(search.toLowerCase()) ||
            g.brand.toLowerCase().includes(search.toLowerCase())
        )
        : g.items,
    }))
    .filter((g) => g.items.length > 0);

  const totalProducts = filtered.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <> <HeroWrapper />
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 16px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#0f172a",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            2026 Hovuz Məhsulları
          </h1>

          <p style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>
            Premium kataloq · Bütün qiymətlər AZN ilə
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Məhsul axtar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: 420,
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid #e2e8f0",
            background: "#f8fafc",
            fontSize: 14,
            marginBottom: 20,
          }}
        />

        {/* Categories */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontSize: 12,
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid #e2e8f0",
                background: cat === activeCategory ? "#0f172a" : "#fff",
                color: cat === activeCategory ? "#fff" : "#475569",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 24 }}>
          {totalProducts} məhsul göstərilir
        </p>

        {/* Content */}
        {filtered.length === 0 ? (
          <p style={{ color: "#94a3b8" }}>Heç nə tapılmadı</p>
        ) : (
          filtered.map((group) => (
            <GroupSection key={group.cat} group={group} />
          ))
        )}
      </div></>
  );
}