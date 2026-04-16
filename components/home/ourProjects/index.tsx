import Button from "@/components/common/Button";
import { projects } from "./projes";
import Link from "next/link";

export default function OurProjects() {
  return (
    <section
      aria-label="Our Projects"
      // style={{ background: "#0A1E30" }}
      className="py-24 lg:pt-12 lg:pb-22 overflow-hidden"
    >
      {/* top border */}
      {/* <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }} /> */}

      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 pt-12">

        {/* ── Section header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 uppercase font-bold tracking-[0.28em] mb-5"
            style={{
              // color: "#00A8B5", 
              fontSize: 11
            }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
            Layihələrimiz
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#00A8B5" }} />
          </p>

          <h2
            data-aos="fade-up"
            className="font-extrabold leading-[1.1] tracking-tight mb-6"
            style={{
              // color: "#FAF6EC",
              fontSize: "clamp(28px, 5vw, 52px)"
            }}
          >
            Real hovuz və SPA layihələrimiz
          </h2>

          <div
            data-aos="fade-up"
            className="mx-auto mb-6"
            style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #00A8B5, transparent)" }}
          />

          <p
            data-aos="fade-up"
            className="text-[15px] text-gray-500 sm:text-[16px] leading-relaxed"
          // style={{ color: "rgba(200,232,234,0.65)" }}
          >
            Tamamladığımız real layihələr ilə keyfiyyət, estetik və funksionallığı bir araya gətiririk.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(3, 6).map((project, idx) => (
            <article
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="relative overflow-hidden rounded-[24px] cursor-pointer group"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px]" />

              <div className="absolute bottom-1 left-5  right-5 z-20 transform translate-y-[60%] h-[120px] group-hover:-translate-y-5 transition-transform duration-500">
                <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug tracking-tight text-white">                  {project.title}
                </h3>
                <p className="text-[14px] mt-4 sm:text-[15px] text-white/80 leading-relaxed">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[#C49B63] text-[14px] font-medium tracking-wide">                  Ətraflı →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ── CTA ── */}
        <div data-aos="fade-up" className="mt-14 flex justify-center">
          <Button text="Bütün Layihələr" link="/projects" type={2} />
        </div>

      </div>

      {/* bottom border */}
      {/* <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #007A85, transparent)", marginTop: 64 }} /> */}
    </section>
  );
}