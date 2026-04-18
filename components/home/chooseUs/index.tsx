import { FaLightbulb, FaUserTie, FaBuilding } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLightbulb />,
      title: "Müasir Həllər",
      desc: "Hovuz və SPA layihələrində ən son texnologiyalardan istifadə edirik.",
    },
    {
      icon: <FaUserTie />,
      title: "Peşəkar Komanda",
      desc: "Təcrübəli mütəxəssislərlə keyfiyyətli və etibarlı icra.",
    },
    {
      icon: <FaBuilding />,
      title: "Fərdi Layihə",
      desc: "Hər müştəri üçün xüsusi dizayn və planlama təqdim edirik.",
    },
  ];

  return (

    // <section className="bg-white py-25">
    //   <div className="max-w-6xl mx-auto px-6">

    //     {/* Header */}
    //     <div className="text-center max-w-2xl mx-auto">
    //       <h3 data-aos="fade-down" className="text-sm font-semibold text-[#C49B63] md:text-[16px] uppercase tracking-widest">
    //         Niyə bizi seçməlisiniz?
    //       </h3>

    //       <h2 data-aos="fade-down" className="mt-4 text-3xl md:text-[56px] font-extrabold text-gray-900">
    //         Keyfiyyət və Peşəkarlıq
    //       </h2>

    //       <p data-aos="fade-down" className="mt-4 text-gray-600">
    //         Hovuz, sauna və SPA layihələrində müasir yanaşma və uzunmüddətli keyfiyyət təqdim edirik.
    //       </p>
    //     </div>
    <section
      aria-label="Our Projects"
      // style={{ background: "#0A1E30" }}
      className="pt-5 pb-15 lg:pt-12 lg:pb-22 overflow-hidden"
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
              color: "#C49B63", 
              fontSize: 11
            }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#C49B63" }} />
            Niyə bizi seçməlisiniz?            
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#C49B63" }} />
          </p>

          <h2
            data-aos="fade-up"
            className="font-extrabold leading-[1.1] tracking-tight mb-6"
            style={{
              color: "#0A1E30",
              fontSize: "clamp(28px, 5vw, 52px)"
            }}
          >
            Keyfiyyət və Peşəkarlıq
          </h2>

          <div
            data-aos="fade-up"
            className="mx-auto mb-6"
            style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #C49B63, transparent)" }}
          />

          <p
            data-aos="fade-up"
            className="text-[15px] text-gray-500 sm:text-[16px] leading-relaxed"
          // style={{ color: "rgba(200,232,234,0.65)" }}
          >
            Hovuz, sauna və SPA layihələrində müasir yanaşma və uzunmüddətli keyfiyyət təqdim edirik.          </p>
        </div>
        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="fade-down"
              className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F7FA] text-[#C49B63] text-xl">
                {f.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {f.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mini stat */}
        <div className="mt-16 text-center" data-aos="fade-down">
          <div className="text-4xl font-extrabold text-[#C49B63]">120+</div>
          <p className="text-gray-500 text-sm mt-2">
            Uğurla tamamlanmış layihə
          </p>
        </div>

      </div>
    </section>
  );
}