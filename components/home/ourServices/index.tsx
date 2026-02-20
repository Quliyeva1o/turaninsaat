const services = [
  {
    title: "Building Construction",
    img: "/images/service-1.jpg",
    desc: "Complete construction solutions from planning to delivery.",
  },
  {
    title: "Architecture Design",
    img: "/images/service-2.jpg",
    desc: "Innovative and sustainable architectural designs.",
  },
  {
    title: "Building Renovation",
    img: "/images/service-3.jpg",
    desc: "Modern renovation services with quality materials.",
  },
  {
    title: "Building Maintenance",
    img: "/images/service-4.jpg",
    desc: "Reliable maintenance to extend building lifetime.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#0F172A] py-32 text-white">
      <div className="max-w-[1300px] mx-auto px-10 text-center">

        {/* header */}
        <span className="uppercase tracking-[0.2em] text-sm font-extrabold text-[#2A69AC]">
          Our Services
        </span>

        <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight">
          Our construction services
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400">
          We specialize in residential, commercial, and industrial construction projects.
        </p>

        {/* cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden bg-[#020617] hover:-translate-y-2 transition"
            >
              <img
                src={s.img}
                alt={s.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-xl font-bold">{s.title}</h3>

                <p className="text-sm text-slate-400">
                  {s.desc}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-[#C49B63] font-semibold"
                >
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="mt-20">
          <a
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-[#C49B63] px-10 py-4 font-semibold text-black hover:bg-white transition"
          >
            View All Services →
          </a>
        </div>

      </div>
    </section>
  );
}