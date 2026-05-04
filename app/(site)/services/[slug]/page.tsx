import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

type Slug = "pool-types" | "turkish-bath-spa";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {

  const map: Record<Slug, { title: string; desc: string }> = {
    "pool-types": {
      title: "Hovuz Növləri | Turan İnşaat",
      desc: "Fərdi və ictimai hovuz növləri, dizayn və tikinti həlləri.",
    },
    "turkish-bath-spa": {
      title: "Türk Hamamı və SPA | Turan İnşaat",
      desc: "Premium SPA və türk hamamı layihələri və quraşdırılması.",
    },
  };

  const data =
    map[params.slug as Slug] ?? {
      title: "Xidmətlər | Turan İnşaat",
      desc: "Hovuz, SPA və tikinti xidmətləri.",
    };

  return {
    title: data.title,
    description: data.desc,

    openGraph: {
      title: data.title,
      description: data.desc,
      url: `https://turanprojects.az/services/${params.slug}`,
      siteName: "Turan İnşaat MMC",
      locale: "az_AZ",
      type: "article",
    },

    alternates: {
      canonical: `https://turanprojects.az/services/${params.slug}`,
    },

    keywords: [
      "hovuz tikintisi",
      "spa sistemləri",
      "türk hamamı",
      "pool construction azerbaijan",
    ],
  };
}

export default function Page(props: any) {
  return <ServiceDetailClient {...props} />;
}