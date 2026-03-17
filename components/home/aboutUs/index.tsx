'use client'
import Image from 'next/image'
import Button from '@/components/common/Button'
import imgSrc from '@/public/assets/images/aboutUs.jpg'

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-28 lg:py-32">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-8 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-24">
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          <span className="text-[#FFB703] uppercase font-extrabold text-sm sm:text-base tracking-widest mb-4 font-manrope">
            Haqqımızda
          </span>

          <h2 className="text-[#0F172A] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 sm:mb-6 font-manrope">
            Premium hovuz və spa layihələrini peşəkar şəkildə həyata keçiririk
          </h2>

          <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 font-dm-sans">
            Turan İnşaat hovuz, türk hamamı, sauna və spa məkanlarının
            layihələndirilməsi və tikintisi sahəsində fəaliyyət göstərir.
            Müasir texnologiyalar və keyfiyyətli materiallardan istifadə
            edərək evlər, villalar və kommersiya obyektləri üçün estetik və
            uzunömürlü istirahət zonaları yaradırıq.
          </p>

          {/* Features List */}
          <ul className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-10">
            {[
              'Fərdi hovuz və spa dizaynı',
              'Müasir texnologiya və premium materiallar',
              'Zəmanətli və keyfiyyətli icra'
            ].map((feature, idx) => (
              <li
                key={idx}
                className="relative pl-5 sm:pl-6 font-semibold text-[#0F172A] before:absolute before:left-0 before:top-1 before:w-2.5 before:h-2.5 before:bg-[#C49B63] before:rounded-full font-dm-sans"
              >
                {feature}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Button text="Pulsuz məsləhət al" link="/contact" type={2} />

            <div className="flex flex-col mt-2 sm:mt-0">
              <span className="text-slate-400 uppercase tracking-wider text-xs sm:text-sm font-dm-sans">
                24/7 Əlaqə Mərkəzi
              </span>
              <strong className="text-[#FFB703] font-extrabold text-lg sm:text-xl mt-1 font-manrope">
                +994 50 312 76 57
              </strong>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-lg">
            <Image
              src={imgSrc}
              alt="Turan İnşaat"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs