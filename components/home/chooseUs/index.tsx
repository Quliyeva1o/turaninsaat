import { FaLightbulb, FaUserTie, FaBuilding } from "react-icons/fa";
import Button from "@/components/common/Button";

export default function WhyChooseUs() {
  const projects = [
    {
      title: "Novxanı Villa Hovuzu",
      description:
        "Fərdi dizayn və müasir filtrasiya sistemləri ilə həyata keçirilmiş villa hovuz layihəsi.",
      image:
      "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
      link: "/projects",
    },
    {
      title: "Premium Türk Hamamı",
      description:
        "Mərmər dekorasiya və peşəkar buxar sistemləri ilə qurulmuş müasir hamam layihəsi.",
      image:
        "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
      link: "/projects",
    },
    {
      title: "Spa & Sauna Zonası",
      description:
        "Villa üçün hazırlanmış sauna və relax spa zonası layihəsi.",
      image:
        "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
      link: "/projects",
    },
    {
      title: "Duz Otağı Layihəsi",
      description:
        "Haloterapiya üçün xüsusi mikroiqlim sistemi ilə hazırlanmış duz otağı.",
      image:
        "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
      link: "/projects",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-32 text-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="uppercase tracking-[0.25em] text-sm font-extrabold text-[#FFB703]">
            Niyə bizi seçməlisiniz?
          </h3>

          <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight font-[var(--font-manrope)]">
            Turan İnşaat – keyfiyyət və peşəkarlıq
          </h2>

          <p className="mt-6 text-slate-400 font-[var(--font-dm-sans)]">
            Hovuz, sauna, türk hamamı və spa layihələrinin dizaynı və tikintisi
            sahəsində uzun illərin təcrübəsi ilə müştərilərimizə yüksək
            keyfiyyətli və etibarlı xidmət təqdim edirik.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">

          {/* Left */}
          <div className="space-y-12">

            <div className="flex gap-6 items-start">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-[#102948] rounded-full text-[#FFB703] text-2xl">
                <FaLightbulb />
              </div>

              <div>
                <h3 className="text-xl font-bold font-[var(--font-manrope)]">
                  Müasir Həllər
                </h3>

                <p className="mt-3 text-sm text-slate-400 font-[var(--font-dm-sans)]">
                  Hovuz və spa layihələrində ən son texnologiya və innovativ
                  sistemlərdən istifadə edirik.
                </p>
              </div>
            </div>

            <div className="bg-[#020617] rounded-3xl p-8 text-center shadow-lg">
              <p className="text-sm uppercase tracking-wide text-slate-400 font-[var(--font-dm-sans)]">
                Tamamlanmış Layihə
              </p>

              <div className="mt-4 text-5xl font-extrabold text-[#FFB703] font-[var(--font-manrope)]">
                120<span className="text-3xl align-top">+</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="rounded-3xl max-h-[460px] object-cover shadow-lg"
            />
          </div>

          {/* Right */}
          <div className="space-y-12">

            <div className="flex gap-6 items-start">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-[#102948] rounded-full text-[#FFB703] text-2xl">
                <FaUserTie />
              </div>

              <div>
                <h3 className="text-xl font-bold font-[var(--font-manrope)]">
                  Peşəkar Komanda
                </h3>

                <p className="mt-3 text-sm text-slate-400 font-[var(--font-dm-sans)]">
                  Təcrübəli mühəndis və ustalarımız hər layihəni yüksək
                  keyfiyyətlə həyata keçirir.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-[#102948] rounded-full text-[#FFB703] text-2xl">
                <FaBuilding />
              </div>

              <div>
                <h3 className="text-xl font-bold font-[var(--font-manrope)]">
                  Fərdi Layihələr
                </h3>

                <p className="mt-3 text-sm text-slate-400 font-[var(--font-dm-sans)]">
                  Hər layihə müştərinin istəyinə və məkanın xüsusiyyətlərinə
                  uyğun şəkildə hazırlanır.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Projects */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="p-4">
                <h4 className="text-lg font-semibold text-black font-[var(--font-manrope)] group-hover:text-[#FFB703] transition-colors">
                  {project.title}
                </h4>

                <p className="mt-2 text-gray-500 text-sm font-[var(--font-dm-sans)]">
                  {project.description}
                </p>

                <span className="mt-3 inline-block text-[#FFB703] font-semibold hover:underline">
                  Ətraflı →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button text="Bütün layihələr" link="/projects" type={4} />
        </div>
      </div>
    </section>
  );
}