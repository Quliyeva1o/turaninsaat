import Button from "@/components/common/Button";

const services = [
  {
    title: "Hovuz Tikintisi",
    img: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
    desc: "Villa və obyektlər üçün fərdi hovuz dizaynı və peşəkar tikinti xidmətləri.",
  },
  {
    title: "Türk Hamamı",
    img: "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
    desc: "Mərmər dekorasiya və müasir buxar sistemləri ilə türk hamamı layihələri.",
  },
  {
    title: "Sauna",
    img: "https://i.pinimg.com/736x/4b/34/8d/4b348d91042e2b81263361b19668b69b.jpg",
    desc: "Fin və infraqırmızı sauna sistemlərinin layihələndirilməsi və quraşdırılması.",
  },
  {
    title: "Buxar Otağı",
    img: "https://i.pinimg.com/736x/20/4e/76/204e76a6df728598e6544bb43e4dc61c.jpg",
    desc: "Spa və evlər üçün müasir buxar otaqları və texniki sistemlər.",
  },
  {
    title: "Rus Hamamı (Banya)",
    img: "https://i.pinimg.com/1200x/3d/d3/99/3dd3996ef102678e11bcdd2abdd908f1.jpg",
    desc: "Təbii ağac materiallarla klassik rus hamamı tikintisi.",
  },
  {
    title: "Spa və Relax Zonaları",
    img: "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
    desc: "Spa mərkəzləri və villalar üçün tam istirahət zonalarının qurulması.",
  },
  {
    title: "Masaj Otaqları",
    img: "https://i.pinimg.com/736x/f2/2b/5a/f22b5ad40f4a4196fd7a1d989846d5e3.jpg",
    desc: "Spa və hotel layihələri üçün komfortlu masaj otaqları.",
  },
  {
    title: "Duz Otaqları",
    img: "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
    desc: "Haloterapiya üçün xüsusi duz otaqlarının layihələndirilməsi.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#0F172A] py-32 text-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center">

        {/* Header */}
        <span className="uppercase tracking-[0.15em] text-sm font-extrabold text-[#2A69AC]">
          Xidmətlərimiz
        </span>

        <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight font-[var(--font-manrope)]">
          Premium hovuz və spa xidmətləri
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400 font-[var(--font-dm-sans)]">
          Turan İnşaat olaraq hovuz, sauna, türk hamamı və spa layihələrinin
          dizaynı və tikintisi sahəsində peşəkar xidmət təqdim edirik.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-[24px] cursor-pointer group"
            >
              <img
        src={s.img}
                alt={s.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px]" />

              {/* Content */}
              <div className="absolute bottom-0 left-4 right-4 p-4 z-20 transform translate-y-[65%] group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold font-[var(--font-manrope)]">
                  {s.title}
                </h3>

                <p className="text-sm mt-4 text-slate-200 font-[var(--font-dm-sans)]">
                  {s.desc}
                </p>

                <a
                  href="/services"
                  className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold hover:underline"
                >
                  Ətraflı →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 w-full flex justify-center">
          <Button text="Bütün xidmətlər" link="/services" type={4} />
        </div>
      </div>
    </section>
  );
}