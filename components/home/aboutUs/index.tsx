'use client'
import Image from 'next/image'
import Button from '@/components/common/Button'
import imgSrc from '@/public/assets/images/aboutus.png'

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Image */}
        <div className="flex-1">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-lg">
            <Image
              src={imgSrc}
              alt="Turan İnşaat"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <span className="text-[#FFB703] uppercase font-extrabold text-sm tracking-widest mb-5 font-manrope">
            Haqqımızda
          </span>

          <h2 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-manrope">
            Premium hovuz və spa layihələrini peşəkar şəkildə həyata keçiririk
          </h2>

          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 font-dm-sans">
            Turan İnşaat hovuz, türk hamamı, sauna və spa məkanlarının
            layihələndirilməsi və tikintisi sahəsində fəaliyyət göstərir.
            Müasir texnologiyalar və keyfiyyətli materiallardan istifadə
            edərək evlər, villalar və kommersiya obyektləri üçün estetik və
            uzunömürlü istirahət zonaları yaradırıq.
          </p>

          {/* Features List */}
          <ul className="flex flex-col gap-3 mb-10">
            {[
              'Fərdi hovuz və spa dizaynı',
              'Müasir texnologiya və premium materiallar',
              'Zəmanətli və keyfiyyətli icra'
            ].map((feature, idx) => (
              <li
                key={idx}
                className="relative pl-6 font-semibold text-[#0F172A] before:absolute before:left-0 before:top-1.5 before:w-2.5 before:h-2.5 before:bg-[#C49B63] before:rounded-full font-dm-sans"
              >
                {feature}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button text="Pulsuz məsləhət al" link="/contact" type={2} />

            <div className="flex flex-col">
              <span className="text-slate-400 uppercase tracking-wider text-xs font-dm-sans">
                24/7 Əlaqə Mərkəzi
              </span>
              <strong className="text-[#FFB703] font-extrabold text-xl mt-1 font-manrope">
                +994 50 312 76 57
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs