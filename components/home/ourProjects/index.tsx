export default function OurProjects() {
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
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-[1300px] mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="uppercase tracking-widest text-sm font-extrabold text-yellow-500">
            Our projects
          </h3>
          <h2 className="mt-4 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight">
            Explore our diverse range of projects
          </h2>
          <p className="mt-6 text-gray-500">
            We specialize in a wide range of construction services, including
            residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <a href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </a>
              <div className="p-4">
                <a href={project.link}>
                  <h4 className="text-lg font-semibold hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h4>
                </a>
                <p className="mt-2 text-gray-500 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-yellow-500 font-semibold hover:underline"
                >
                  view more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <a
            href="https://demo.awaikenthemes.com/builtup/projects/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
              />
            </svg>
            view all projects
          </a>
        </div>
      </div>
    </section>
  );
}