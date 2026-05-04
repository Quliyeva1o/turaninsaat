"use client";

import { projects } from "@/components/home/ourProjects/projes";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroWrapper from "@/components/home/heroWrapper";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = useMemo(() => projects[activeIndex], [activeIndex]);
  const mediaList = project?.images || [];

  const openModal = (index: number) => {
    setActiveIndex(index);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + mediaList.length) % mediaList.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mediaList.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;

      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") setModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, mediaList.length]);

  return (
    <>
    <HeroWrapper/>
    <section ref={sectionRef} className="py-16 bg-white text-gray-900">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        <h1 className="text-3xl font-bold mb-8">Layihələrimiz</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <article key={project.slug} className="group">

              <Link href={`/projects/${project.slug}`}>
                <div className="overflow-hidden rounded-2xl">
                  {project.images?.[0]?.endsWith(".mp4") ? (
                    <video
                      src={project.images[0]}
                      className="w-full h-52 md:h-72 object-cover group-hover:scale-110 transition"
                      muted
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={project.images?.[0]}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-52 md:h-72 object-cover group-hover:scale-110 transition"
                    />
                  )}
                </div>
              </Link>

              <h3 className="mt-4 text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {project.description}
              </p>

            </article>
          ))}
        </div>
      </div>

      {/* MODAL (optional) */}
      {modalOpen && project && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-black w-full max-w-5xl h-[80vh] flex"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 flex items-center justify-center">
              {mediaList[currentImageIndex]?.endsWith(".mp4") ? (
                <video src={mediaList[currentImageIndex]} controls autoPlay />
              ) : (
                <Image
                  src={mediaList[currentImageIndex]}
                  alt="media"
                  width={1000}
                  height={700}
                />
              )}
            </div>

            <div className="w-1/3 p-4 text-white bg-gray-900">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </div>
        </div>
      )}
    </section></>
  );
}