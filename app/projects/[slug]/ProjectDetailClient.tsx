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
      <div className="min-h-[200px] flex items-center justify-center text-black">
        <p>Layihə tapılmadı</p>
      </div>
    );
  }

  const media = project.images || [];
  const next = () => setActiveIndex((prev) => (prev + 1) % media.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16 pt-8" aria-label="Şəkil qalereyası">

      {/* Main Media */}
      {media.length > 0 && (
        <figure className="relative" aria-label={`${project.title} – şəkil qalereyası`}>
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
              quality={85}
              className="w-full h-[500px] object-contain rounded-xl bg-black"
              priority={activeIndex === 0}
            />
          )}

          {/* Arrow navigation */}
          {media.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full transition-colors text-xl font-bold"
                aria-label="Əvvəlki şəkil"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full transition-colors text-xl font-bold"
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
      )}

      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div
          className="flex gap-3 mt-6 overflow-x-auto pb-2"
          role="list"
          aria-label="Şəkil siyahısı"
        >
          {media.map((m, i) => (
            <div
              key={i}
              role="listitem"
              onClick={() => setActiveIndex(i)}
              className={`w-20 h-20 flex-shrink-0 cursor-pointer border-2 rounded-lg overflow-hidden transition-all ${i === activeIndex
                ? "border-yellow-500 scale-105"
                : "border-gray-200 hover:border-gray-400"
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
                  quality={85}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Back link */}
      <div className="mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
        >
          ← Bütün layihələrə qayıt
        </Link>
      </div>
    </section>
  );
}