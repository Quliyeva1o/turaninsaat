import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

type ServiceImage = string | StaticImageData;

type ServiceItem = {
  title: string;
  img: ServiceImage;
};

type ServiceSection = {
  title: string;
  items: ServiceItem[];
};

export type Service = {
  slug: string;
  title: string;
  desc: string;
  img: ServiceImage;
  sections: ServiceSection[];
};

function createId(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ğ/g, "g")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getCleanItemTitle(title: string) {
  return title.split("–")[0].split("-")[0].trim();
}

export default function ServiceDetail({ service }: { service: Service }) {
  const sections = service.sections || [];
  const serviceItems = sections.flatMap((section) => section.items).slice(0, 6);

  return (
    <main className="min-h-screen text-white bg-[#0A1E30]">
      <section className="max-w-5xl mx-auto py-20 px-6">
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-400">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-[#00A8B5] transition-colors">
                Ana səhifə
              </Link>
            </li>

            <li aria-hidden="true" className="mx-1">
              /
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-[#00A8B5] transition-colors"
              >
                Xidmətlər
              </Link>
            </li>

            <li aria-hidden="true" className="mx-1">
              /
            </li>

            <li aria-current="page" className="text-gray-200">
              {service.title}
            </li>
          </ol>
        </nav>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm mb-10 text-[#00A8B5] hover:underline"
          aria-label="Bütün xidmətlərə qayıt"
        >
          ← Bütün xidmətlər
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="font-extrabold leading-tight mb-5 text-[#FAF6EC] text-[clamp(28px,4vw,48px)]">
              {service.title}
            </h1>

            <p className="text-base md:text-lg leading-8 text-[rgba(200,232,234,0.76)]">
              {service.desc}
            </p>

            <div className="mt-8 space-y-5 text-base md:text-lg leading-8 text-[rgba(200,232,234,0.72)]">
              <p>
                Turan İnşaat MMC bu istiqamətdə layihənin ilkin
                planlaşdırılmasından texniki həllərin seçiminə, quraşdırma
                prosesinə və yekun təhvil mərhələsinə qədər kompleks yanaşma
                təqdim edir. Hər layihədə məqsəd estetik görünüş, rahat istifadə
                və uzunömürlü texniki nəticə əldə etməkdir.
              </p>

              <p>
                Xidmət fərdi villalar, bağ evləri, otellər, SPA mərkəzləri,
                idman kompleksləri və kommersiya obyektləri üçün uyğundur.
                Məkanın ölçüsü, istifadə məqsədi, su sistemi, avadanlıq seçimi
                və dizayn tələbləri nəzərə alınaraq fərdi həll hazırlanır.
              </p>

              <p>
                Hovuz, SPA və hamam sistemlərində düzgün layihələndirmə,
                filtrasiya, isitmə, su dövriyyəsi, izolyasiya və avadanlıq
                seçimi son nəticənin keyfiyyətinə birbaşa təsir edir. Buna görə
                hər mərhələ texniki standartlara və praktik istifadə rahatlığına
                uyğun şəkildə icra olunur.
              </p>
            </div>
          </header>

          <Image
            src={service.img}
            alt={`${service.title} xidməti — Turan İnşaat MMC Bakı`}
            width={1200}
            height={600}
            quality={85}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-14"
          />

          {serviceItems.length > 0 && (
            <section className="mb-14 rounded-2xl bg-[#0f2a3f] border border-white/10 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#FAF6EC] mb-5">
                Bu xidmətə daxil olan əsas istiqamətlər
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[rgba(200,232,234,0.82)]">
                {serviceItems.map((item) => (
                  <li key={item.title} className="flex gap-3 leading-7">
                    <span className="text-[#00A8B5]" aria-hidden="true">
                      •
                    </span>
                    <span>{getCleanItemTitle(item.title)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="space-y-14">
            {sections.map((section, index) => {
              const sectionId = `service-section-${index}-${createId(
                section.title
              )}`;

              return (
                <section key={section.title} aria-labelledby={sectionId}>
                  <header className="mb-6">
                    <h2
                      id={sectionId}
                      className="text-xl md:text-2xl font-bold text-[#00A8B5]"
                    >
                      {section.title}
                    </h2>

                    <p className="mt-3 leading-7 text-[rgba(200,232,234,0.68)]">
                      {section.title} üzrə təqdim olunan həllər layihənin
                      funksionallığını, təhlükəsizliyini və vizual görünüşünü
                      gücləndirmək üçün seçilir. Turan İnşaat MMC hər detalı
                      obyektin texniki tələblərinə uyğun şəkildə planlaşdırır.
                    </p>
                  </header>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {section.items.map((item) => {
                      const cleanTitle = getCleanItemTitle(item.title);

                      return (
                        <article
                          key={item.title}
                          className="rounded-xl overflow-hidden shadow-lg group bg-[#0f2a3f] border border-white/5"
                        >
                          <Image
                            src={item.img}
                            alt={`${cleanTitle} — ${service.title} | Turan İnşaat MMC`}
                            width={400}
                            height={300}
                            quality={85}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <div className="p-4 flex gap-2">
                            <span
                              className="text-[#00A8B5]"
                              aria-hidden="true"
                            >
                              •
                            </span>

                            <p className="text-sm leading-snug text-[rgba(200,232,234,0.85)]">
                              {item.title}
                            </p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
            <article className="rounded-2xl bg-[#0f2a3f] border border-white/10 p-6">
              <h2 className="text-xl font-bold text-[#FAF6EC] mb-3">
                Planlaşdırma
              </h2>

              <p className="leading-7 text-[rgba(200,232,234,0.72)]">
                Layihənin ölçüsü, istifadə məqsədi, texniki tələbləri və
                dizayn istiqaməti əvvəlcədən analiz olunur.
              </p>
            </article>

            <article className="rounded-2xl bg-[#0f2a3f] border border-white/10 p-6">
              <h2 className="text-xl font-bold text-[#FAF6EC] mb-3">
                Quraşdırma
              </h2>

              <p className="leading-7 text-[rgba(200,232,234,0.72)]">
                Seçilmiş avadanlıqlar və materiallar obyektin şərtlərinə uyğun
                şəkildə peşəkar komanda tərəfindən tətbiq edilir.
              </p>
            </article>

            <article className="rounded-2xl bg-[#0f2a3f] border border-white/10 p-6">
              <h2 className="text-xl font-bold text-[#FAF6EC] mb-3">
                Nəticə
              </h2>

              <p className="leading-7 text-[rgba(200,232,234,0.72)]">
                Məqsəd uzunömürlü, rahat istifadə edilən, estetik və texniki
                baxımdan dayanıqlı sistem yaratmaqdır.
              </p>
            </article>
          </section>
        </article>

        <section className="mt-20 rounded-2xl bg-[#0f2a3f] border border-[#00A8B5]/20 p-10 text-center">
          <h2 className="text-2xl font-bold text-[#FAF6EC] mb-3">
            {service.title} üzrə məsləhət almaq istəyirsiniz?
          </h2>

          <p className="text-[rgba(200,232,234,0.65)] mb-6">
            Peşəkar komandamız layihənizi planlaşdırmaqda sizə kömək edəcək.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#00A8B5] hover:bg-[#0097a3] transition-colors text-white font-semibold px-8 py-3 rounded-xl"
          >
            Bizimlə əlaqə saxlayın
          </Link>
        </section>
      </section>
    </main>
  );
}