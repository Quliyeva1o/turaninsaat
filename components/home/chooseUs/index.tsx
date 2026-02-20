export default function WhyChooseUs() {
  return (
    <section className="bg-[#0F172A] py-32 text-white">
      <div className="max-w-[1300px] mx-auto px-8">

        {/* header */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="uppercase tracking-[0.25em] text-sm font-extrabold text-[#FFB703]">
            Why choose us?
          </h3>

          <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight">
            Why we’re your best choice
          </h2>

          <p className="mt-6 text-slate-400">
            Developed in close collaboration with our partners and clients,
            combines industry knowledge, decades of experience, ingenuity and
            adaptability to deliver excellence to our clients.
          </p>
        </div>

        {/* content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">

          {/* left */}
          <div className="space-y-12">

            {/* icon box */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                {/* svg icon */}
                <svg width="64" height="64" viewBox="0 0 70 70" fill="none">
                  <path
                    d="M34.196 3.3508C33.8429 3.6986 33.84 3.72361 33.84 6.42943C33.84 9.13525 33.8429 9.16026 34.196 9.50806C34.4203 9.72925 34.7175 9.85886 35 9.85886C35.2825 9.85886 35.5797 9.72925 35.804 9.50806C36.1571 9.16026 36.16 9.13525 36.16 6.42943C36.16 3.72361 36.1571 3.6986 35.804 3.3508C35.5797 3.1296 35.2825 3 35 3C34.7175 3 34.4203 3.1296 34.196 3.3508ZM14.5438 11.4197C13.7997 12.153 13.9614 12.4817 16.1168 14.6149C17.1319 15.6196 18.1105 16.4788 18.2915 16.5244C19.078 16.7223 19.9246 15.8879 19.7238 15.1129C19.6776 14.9346 18.8057 13.9702 17.7862 12.9698C15.6215 10.8457 15.288 10.6864 14.5438 11.4197ZM54.2125 11.14C53.6879 11.3568 50.225 14.9336 50.225 15.2586C50.225 16.0604 50.9829 16.707 51.7085 16.5244C51.8895 16.4788 52.8681 15.6196 53.8832 14.6149C56.027 12.4931 56.1981 12.1509 55.4731 11.4364C55.0246 10.9944 54.7315 10.9256 54.2125 11.14Z"
                    fill="#FFB703"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Innovation Solutions
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  Simple actions make a difference. It starts and ends with each
                  employee striving to work safer every single day.
                </p>
              </div>
            </div>

            {/* counter */}
            <div className="bg-[#020617] rounded-3xl p-8 text-center">
              <p className="text-sm uppercase tracking-wide text-slate-400">
                Project Completed
              </p>

              <div className="mt-4 text-5xl font-extrabold text-[#FFB703]">
                800<span className="text-3xl align-top">+</span>
              </div>
            </div>
          </div>

          {/* middle image */}
          <div className="flex justify-center">
            <img
              src="/images/why-choose-img-1.jpg"
              alt="Why choose us"
              className="rounded-3xl max-h-[460px] object-cover"
            />
          </div>

          {/* right */}
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <svg width="64" height="64" viewBox="0 0 70 70" fill="none">
                  <path
                    d="M13.1212 2.28588C12.7785 2.56241 8.06759 8.1842 7.65124 8.81336C7.19671 9.50028 7.50594 10.5392 8.26115 10.863C8.50004 10.9653 9.01075 11.0491 9.39608 11.0491H10.0965L10.1343 17.304L10.172 23.5589L10.4693 23.9866C10.9959 24.7441 11.2434 24.8033 13.8809 24.8033C16.5499 24.8033 16.928 24.7118 17.3837 23.9553C17.6323 23.5425 17.6411 23.3155 17.6411 17.3028V11.0778L18.5987 11.0282C19.4632 10.9834 19.5939 10.9399 19.9433 10.5816C20.4888 10.0218 20.5597 9.4137 20.1509 8.79777C19.619 7.99662 14.835 2.28339 14.5776 2.14205C14.1784 1.92277 13.4864 1.99115 13.1212 2.28588Z"
                    fill="#FFB703"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Trusted Expertise
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  Our experienced professionals deliver reliable construction
                  solutions with uncompromised quality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}