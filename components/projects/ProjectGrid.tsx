"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description: string;
  images: string[];
};

export default function ProjectsGrid({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="overflow-hidden rounded-2xl">
        {project.images?.[0]?.endsWith(".mp4") ? (
          <video
            src={project.images[0]}
            className="w-full h-52 md:h-72 object-cover group-hover:scale-110 transition"
            muted
            autoPlay
            loop
            playsInline
          />
        ) : (
          <Image
            src={project.images?.[0]}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-52 md:h-72 object-cover group-hover:scale-110 transition"
            loading="lazy"
          />
        )}
      </div>
    </Link>
  );
}