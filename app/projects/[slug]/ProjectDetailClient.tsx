"use client";

import { projects } from "@/components/home/ourProjects/projes";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetailClient() {
  const params = useParams();
  const slug = params.slug as string;

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        <p>Layihə tapılmadı</p>
      </div>
    );
  }

  const media = project.images || [];
  const next = () => setActiveIndex((prev) => (prev + 1) % media.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <main className="min-h-screen bg-white text-black py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* ✅ Breadcrumb — matches JSON-LD breadcrumb for rich result */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <li>
              <Link href="/" className="hover:text-black">
                Ana Səhifə
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/projects" className="hover:text-black">
                Layihələr
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-800 font-medium" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* ✅ h1 visible (not sr-only) for users; the sr-only one in page.tsx
            is purely for SSR. The client h1 below is what users see. */}
        <h1 className="text-3xl font-bold mt-2">{project.title}</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          {project.seoDescription ?? project.description}
        </p>

        {/* Main Media */}
        <figure className="mt-10 relative" aria-label={`${project.title} – əsas şəkil`}>
          {media[activeIndex]?.endsWith(".mp4") ? (
            <video
              src={media[activeIndex]}
              controls
              autoPlay
              className="w-full h-[500px] object-contain rounded-xl bg-black"
              aria-label={`${project.title} – video`}
            />
          ) : (
            <Image
              src={media[activeIndex]}
              alt={`${project.title} – Turan İnşaat tərəfindən icra edilmiş layihə, şəkil ${activeIndex + 1}`}
              width={1200}
              height={700}
              className="w-full h-[500px] object-contain rounded-xl bg-black"
              priority={activeIndex === 0}
            />
          )}

          {/* Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
                aria-label="Əvvəlki şəkil"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
                aria-label="Növbəti şəkil"
              >
                ›
              </button>
            </>
          )}

          <figcaption className="mt-2 text-xs text-gray-400 text-center">
            {activeIndex + 1} / {media.length} — {project.title}
          </figcaption>
        </figure>

        {/* Thumbnails */}
        {media.length > 1 && (
          <div
            className="flex gap-3 mt-6 overflow-x-auto"
            role="list"
            aria-label="Şəkil qalereyası"
          >
            {media.map((m, i) => (
              <div
                key={i}
                role="listitem"
                onClick={() => setActiveIndex(i)}
                className={`w-20 h-20 flex-shrink-0 cursor-pointer border-2 rounded-lg overflow-hidden ${
                  i === activeIndex ? "border-yellow-500" : "border-gray-300"
                }`}
                aria-label={`Şəkil ${i + 1}: ${project.title}`}
                aria-current={i === activeIndex ? "true" : undefined}
              >
                {m.endsWith(".mp4") ? (
                  <video
                    src={m}
                    className="w-full h-full object-cover"
                    muted
                    aria-label={`${project.title} video thumbnail`}
                  />
                ) : (
                  <Image
                    src={m}
                    alt={`${project.title} – kiçik şəkil ${i + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* ✅ Back link for UX + internal linking */}
        <div className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
          >
            ← Bütün layihələrə qayıt
          </Link>
        </div>
      </div>
    </main>
  );
}