import Button from "@/components/common/Button";

export default function CallToAction() {
  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="max-w-[1300px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-tight">
            Let&apos;s build something great together!
          </h2>
          <p className="text-gray-400">
            Don’t wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality.
          </p>

          <Button text="Get Free Quote" type={3} link="/contact" />
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/cta-box-img.png"
            alt="Call to action"
            className="rounded-2xl max-w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}