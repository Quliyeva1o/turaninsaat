"use client";

import { projects } from "@/components/home/ourProjects/projes";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  locale?: "az" | "en";
}

export default function ProjectDetailClient({ locale = "az" }: Props) {
  const params = useParams();
  const slug = params.slug as string;
  const project = useMemo(() => {
    return projects.find((p) => p.slug === slug);
  }, [slug]);



  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        Project not found
      </div>
    );
  }

  const media = project.images || [];

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % media.length);

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <section className="min-h-screen bg-white text-black py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back */}
        <Link href="/projects" className="text-sm text-gray-500 hover:text-black">
          ← Back to projects
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
        <p className="text-gray-600 mt-2">{project.description}</p>

        {/* Main Media */}
        <div className="mt-10 relative">
          {media[activeIndex]?.endsWith(".mp4") ? (
            <video
              src={media[activeIndex]}
              controls
              autoPlay
              className="w-full h-[500px] object-contain rounded-xl bg-black"
            />
          ) : (
            <Image
              src={media[activeIndex]}
              alt={project.title}
              width={1200}
              height={700}
              className="w-full h-[500px] object-contain rounded-xl bg-black"
            />
          )}

          {/* arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {media.length > 1 && (
          <div className="flex gap-3 mt-6 overflow-x-auto">
            {media.map((m, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-20 h-20 cursor-pointer border-2 rounded-lg overflow-hidden ${i === activeIndex ? "border-yellow-500" : "border-gray-300"
                  }`}
              >
                {m.endsWith(".mp4") ? (
                  <video src={m} className="w-full h-full object-cover" muted />
                ) : (
                  <Image
                    src={m}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}