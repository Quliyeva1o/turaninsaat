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
              alt="About Us"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <span className="text-[#FFB703] uppercase font-extrabold text-sm tracking-widest mb-5 font-manrope">
            About Us
          </span>

          <h2 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-manrope">
            Crafting structures that last a lifetime
          </h2>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 font-dm-sans">
            Crafting structures that last a lifetime requires a holistic approach
            that integrates advanced materials, resilient design, and sustainability.
          </p>

          {/* Features List */}
          <ul className="flex flex-col gap-3 mb-10">
            {['Comprehensive Services', 'Advanced Technology', 'Transparent Communication'].map((feature, idx) => (
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
            <Button text="Get Free Quote" link="/contact" type={2} />

            <div className="flex flex-col">
              <span className="text-slate-400 uppercase tracking-wider text-xs font-dm-sans">
                Call support center 24x7
              </span>
              <strong className="text-[#FFB703] font-extrabold text-xl mt-1 font-manrope">
                +1 809 120 6705
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs