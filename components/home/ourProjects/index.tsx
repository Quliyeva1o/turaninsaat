import Button from "@/components/common/Button";

export default function OurProjects() {
  const projects = [
    {
      title: "Açıq və Qapalı Hovuz Layihəsi",
      description:
        "Xarici və daxili hovuzların fərdi dizaynı və tikintisi – yay və qış üçün ideal istirahət zonası.",
      image:
        "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-1-1.jpg",
      link: "/projects",
    },
    {
      title: "Spa və Jacuzzi Zonası",
      description:
        "Peşəkar hidromasajlı və spa sistemləri ilə rahatlıq və relaks üçün müasir zona layihəsi.",
      image:
        "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-2.jpg",
      link: "/projects",
    },
    {
      title: "Türk Hamamı Layihəsi",
      description:
        "Mərmər və xüsusi buxar sistemi ilə estetik və funksional türk hamamı layihələri.",
      image:
        "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-3.jpg",
      link: "/projects",
    },
    {
      title: "Sauna və Buxar Otağı",
      description:
        "Fin və infraqırmızı sauna ilə birlikdə buxar otağı layihələri – sağlamlıq və rahatlıq.",
      image:
        "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-4.jpg",
      link: "/projects",
    },
  ];

  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="uppercase tracking-[0.15em] text-sm font-extrabold text-[#C49B63]">
            Layihələrimiz
          </h3>
          <h2 className="mt-4 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight font-[var(--font-manrope)]">
            Real spa, hammam və hovuz layihələrimiz
          </h2>
          <p className="mt-6 text-gray-500 font-[var(--font-dm-sans)]">
            Turan İnşaat olaraq fərdi hovuzlardan tutmuş türk hamamı və spa
            zonalarına qədər kompleks layihələr həyata keçiririk – estetik,
            funksional və uzunömürlü.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative overflow-hidden rounded-[24px] cursor-pointer group"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px] opacity-100 transition-opacity duration-500"></div>

              {/* Hover description */}
              <div className="absolute bottom-0 left-4 right-4 p-4 z-20 transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold text-white font-[var(--font-manrope)]">
                  {project.title}
                </h3>
                <p className="text-sm mt-6 text-slate-200 font-[var(--font-dm-sans)]">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold hover:underline"
                >
                  Ətraflı →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center w-full">
          <Button text="Bütün Layihələr" link="/projects" type={4} />
        </div>
      </div>
    </section>
  );
}