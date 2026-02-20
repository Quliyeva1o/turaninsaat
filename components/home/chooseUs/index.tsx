import { FaLightbulb, FaUserTie, FaBuilding } from 'react-icons/fa';
import Button from '@/components/common/Button';

export default function WhyChooseUs() {
  const projects = [
    {
      title: "Aspen Heights",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
      image: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-1-1.jpg",
      link: "https://demo.awaikenthemes.com/builtup/projects/aspen-heights/",
    },
    {
      title: "Forest Hill Towers",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
      image: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-2.jpg",
      link: "https://demo.awaikenthemes.com/builtup/projects/forest-hill-towers/",
    },
    {
      title: "Bayside Residences",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
      image: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-3.jpg",
      link: "https://demo.awaikenthemes.com/builtup/projects/bayside-residences/",
    },
    {
      title: "Parkview Plaza",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
      image: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-4.jpg",
      link: "https://demo.awaikenthemes.com/builtup/projects/parkview-plaza/",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-32 text-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="uppercase tracking-[0.25em] text-sm font-extrabold text-[#FFB703]">
            Why choose us?
          </h3>
          <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight font-[var(--font-manrope)]">
            Why we’re your best choice
          </h2>
          <p className="mt-6 text-slate-400 font-[var(--font-dm-sans)]">
            Developed in close collaboration with our partners and clients,
            combines industry knowledge, decades of experience, ingenuity and
            adaptability to deliver excellence to our clients.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">

          {/* Left Column */}
          <div className="space-y-12">

            {/* Icon box */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-[#102948] rounded-full text-[#FFB703] text-2xl transition-transform duration-300 group-hover:scale-110">
                <FaLightbulb />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[var(--font-manrope)]">
                  Innovation Solutions
                </h3>
                <p className="mt-3 text-sm text-slate-400 font-[var(--font-dm-sans)]">
                  Simple actions make a difference. It starts and ends with each
                  employee striving to work safer every single day.
                </p>
              </div>
            </div>

            {/* Counter */}
            <div className="bg-[#020617] rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-sm uppercase tracking-wide text-slate-400 font-[var(--font-dm-sans)]">
                Project Completed
              </p>
              <div className="mt-4 text-5xl font-extrabold text-[#FFB703] font-[var(--font-manrope)]">
                800<span className="text-3xl align-top">+</span>
              </div>
            </div>
          </div>

          {/* Middle Image */}
          <div className="flex justify-center">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="rounded-3xl max-h-[460px] object-cover shadow-lg hover:shadow-2xl transition-shadow"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-[#102948] rounded-full text-[#FFB703] text-2xl transition-transform duration-300 group-hover:scale-110">
                <FaUserTie />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[var(--font-manrope)]">
                  Trusted Expertise
                </h3>
                <p className="mt-3 text-sm text-slate-400 font-[var(--font-dm-sans)]">
                  Our experienced professionals deliver reliable construction
                  solutions with uncompromised quality.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-[#102948] rounded-full text-[#FFB703] text-2xl transition-transform duration-300 group-hover:scale-110">
                <FaBuilding />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[var(--font-manrope)]">
                  Wide Range of Projects
                </h3>
                <p className="mt-3 text-sm text-slate-400 font-[var(--font-dm-sans)]">
                  From residential to commercial buildings, we handle diverse projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid Below */}
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
                <h4 className="text-lg font-semibold font-[var(--font-manrope)] hover:text-[#FFB703] transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 text-gray-500 text-sm font-[var(--font-dm-sans)]">
                  {project.description}
                </p>
                <span className="mt-3 inline-block text-[#FFB703] font-semibold hover:underline">
                  View More →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button text="View All Projects" link="https://demo.awaikenthemes.com/builtup/projects/" type={4} />
        </div>
      </div>
    </section>
  );
}