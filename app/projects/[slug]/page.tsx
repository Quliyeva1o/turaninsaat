import type { Metadata } from "next";
import ProjectDetailClient from "./ProjectDetailClient";
import { projects } from "@/components/home/ourProjects/projes";
import HeroWrapper from "@/components/home/heroWrapper";

type Props = {
  params: { slug: string };
};

// SEO
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "Project does not exist",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images?.[0] ? [project.images[0]] : [],
    },
  };
}

export default function Page(props: any) {
  return <><HeroWrapper /><ProjectDetailClient {...props} /></>;
}