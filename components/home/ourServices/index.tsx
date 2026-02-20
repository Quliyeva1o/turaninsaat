import Button from "@/components/common/Button";

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
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center">

        {/* Header */}
        <span className="uppercase tracking-[0.15em] text-sm font-extrabold text-[#2A69AC]">
          Our Services
        </span>

        <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight font-[var(--font-manrope)]">
          Our construction services
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400 font-[var(--font-dm-sans)]">
          We specialize in residential, commercial, and industrial construction projects.
        </p>

        {/* Cards */}
<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((s, i) => (
    <article
      key={i}
      className="relative overflow-hidden rounded-[24px] cursor-pointer group"
    >
      {/* Şəkil */}
      <img
        src={'https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/service-img-2.jpg'}
        alt={s.title}
        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px] opacity-100 transition-opacity duration-500"></div>

      {/* Hover description + button */}
      <div className="absolute bottom-0 left-4 right-4 p-4 z-20 transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-lg font-bold font-[var(--font-manrope)]">{s.title}</h3> <p className="text-sm mt-4 text-slate-200 font-[var(--font-dm-sans)]">
          {s.desc}
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold hover:underline"
        >
          View More →
        </a>
      </div>
    </article>
  ))}
</div>

        {/* CTA Button */}
        <div className="mt-20 w-[100%] flex justify-center">
    
          <Button text="View All Services" link="/services" type={4} />
        </div>


      </div>
    </section>
  );
}