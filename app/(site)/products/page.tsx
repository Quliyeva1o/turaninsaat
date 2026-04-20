'use client';
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Data ─────────────────────────────────────────────────────────────────────

import products from "./products.json";
import Image from "next/image";
const data = products as ProductGroup[];

// ─── Badge config ─────────────────────────────────────────────────────────────

const BADGE_CONFIG: Record<Badge, { label: string; bg: string; color: string }> = {
  spain: { label: "İspaniya", bg: "#dbeafe", color: "#1e40af" },
  turkey: { label: "Türkiyə", bg: "#fee2e2", color: "#991b1b" },
  other: { label: "Digər", bg: "#dcfce7", color: "#166534" },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function BadgePill({ badge }: { badge: Badge }) {
  const { label, bg, color } = BADGE_CONFIG[badge];
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 10,
        padding: "2px 8px",
        borderRadius: 6,
        background: bg,
        color,
        fontWeight: 500,
        marginBottom: 6,
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
  );
}

function ProductCard({ item, badge, brand }: { item: Product; badge: Badge; brand: string }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        transition: "box-shadow 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
        <Image
          src={`/assets/products/${item.img}.jpg`}
          alt={item.name}
          width={200}
          height={200}
        />
      <BadgePill badge={badge} />
      {brand && (
        <p style={{ fontSize: 10, fontWeight: 600, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
          {brand}
        </p>
      )}
      <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.35, margin: 0 }}>
        {item.name}
      </p>
      {item.specs && (
        <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
          {item.specs}
        </p>
      )}
      <div style={{ borderTop: "1px solid #f3f4f6", marginTop: 6, paddingTop: 8, display: "flex", flexDirection: "column", gap: 3 }}>
        {item.prices.map((p, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#9ca3af" }}>{p.dim}</span>
            <span
              style={{
                fontSize: i === 0 ? 14 : 12,
                fontWeight: i === 0 ? 700 : 500,
                color: i === 0 ? "#16a34a" : "#374151",
              }}
            >
              {p.val} ₼
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupSection({ group }: { group: ProductGroup }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#6b7280",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: 12,
          paddingBottom: 8,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {group.cat}
        <span style={{ fontSize: 11, fontWeight: 400, marginLeft: 8, color: "#9ca3af" }}>
          ({group.items.length} məhsul)
        </span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 10,
        }}
      >
        {group.items.map((item, i) => (
          <ProductCard key={i} item={item} badge={group.badge} brand={group.brand} />
        ))}
      </div>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

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
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.specs.toLowerCase().includes(search.toLowerCase()) ||
              g.brand.toLowerCase().includes(search.toLowerCase())
          )
        : g.items,
    }))
    .filter((g) => g.items.length > 0);

  const totalProducts = filtered.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#111827", margin: 0 }}>
          2026 Hovuz Məhsulları Kataloqu
        </h1>
        <p style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
          Rev 01 · 01.04.2026 · Bütün qiymətlər AZN ilə
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
          maxWidth: 380,
          padding: "9px 14px",
          fontSize: 14,
          border: "1px solid #d1d5db",
          borderRadius: 8,
          outline: "none",
          marginBottom: 16,
          boxSizing: "border-box",
        }}
      />

      {/* Category tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontSize: 12,
              padding: "5px 12px",
              borderRadius: 8,
              border: "1px solid",
              borderColor: cat === activeCategory ? "#16a34a" : "#e5e7eb",
              background: cat === activeCategory ? "#16a34a" : "#fff",
              color: cat === activeCategory ? "#fff" : "#374151",
              cursor: "pointer",
              fontWeight: cat === activeCategory ? 600 : 400,
              transition: "all 0.15s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 20 }}>
        {totalProducts} məhsul göstərilir
      </p>

      {/* Product groups */}
      {filtered.length === 0 ? (
        <p style={{ color: "#9ca3af", fontSize: 14 }}>Heç bir məhsul tapılmadı.</p>
      ) : (
        filtered.map((group) => <GroupSection key={group.cat} group={group} />)
      )}
    </div>
  );
}