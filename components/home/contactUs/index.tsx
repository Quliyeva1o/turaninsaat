"use client";
import Image from "next/image";
import React from "react";
import contactIllustration from "@/public/assets/images/aboutus.png";

const contactInfo = [
  {
    title: "Call Support Center 24/7",
    link: "tel:+18091206705",
    display: "+1 809 120 6705",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
        <g clipPath="url(#clip0)">
          <path
            d="M68.5417 32.0833C67.7367 32.0833 67.0833 31.43 67.0833 30.625C67.0833 15.3475 54.6525 2.91667 39.375 2.91667C38.57 2.91667 37.9167 2.26333 37.9167 1.45833C37.9167 0.653333 38.57 0 39.375 0C56.2625 0 70 13.7375 70 30.625C70 31.43 69.3467 32.0833 68.5417 32.0833ZM58.3333 30.625C58.3333 20.1717 49.8283 11.6667 39.375 11.6667C38.57 11.6667 37.9167 12.32 37.9167 13.125C37.9167 13.93 38.57 14.5833 39.375 14.5833C48.2213 14.5833 55.4167 21.7788 55.4167 30.625C55.4167 31.43 56.07 32.0833 56.875 32.0833C57.68 32.0833 58.3333 31.43 58.3333 30.625ZM64.8492 64.9571L67.7017 61.6758C69.1833 60.1942 70 58.2225 70 56.1283C70 54.0342 69.1833 52.0596 67.5588 50.4554L60.4246 44.9925C57.3679 41.9358 52.395 41.9329 49.3325 44.9838L44.8642 49.3413C34.1308 44.9692 25.3867 36.2163 20.6733 25.1242L25.0133 20.6763C28.0729 17.6167 28.0729 12.6379 25.1388 9.72125L19.425 2.30417C16.4587 -0.662083 11.2204 -0.592083 8.4 2.23708L4.97583 5.22375C1.76458 8.4175 0 12.7546 0 17.43C0 40.0312 29.9688 70 52.57 70C57.2454 70 61.5796 68.2354 64.8492 64.9571Z"
            fill="#FFB703"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="70" height="70" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Write To Us",
    link: "mailto:info@domain.com",
    display: "info@domain.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.0304 0.224684C31.5221 0.548024 30.5569 1.07384 27.5532 3.20843C26.0006 4.31175 24.5101 5.36394 24.2409 5.5466L23.7516 5.87869L17.9942 5.88088C12.2749 5.8832 12.2334 5.88525 11.6928 6.19136C11.3878 6.36418 11.0135 6.73851 10.8407 7.04353C10.5413 7.57209 10.5324 7.69746 10.5302 11.4308L10.528 15.274L5.43522 18.8786C2.63413 20.861 0.267528 22.577 0.175926 22.6917C-0.0831556 23.016 -0.0614173 66.8527 0.198075 67.5801C0.505965 68.4431 1.06665 69.1205 1.81792 69.5369L2.52995 69.9314H35.0007H67.4714L68.1915 69.5325C68.9487 69.1129 69.6795 68.2029 69.8222 67.5018C69.8646 67.2934 69.9528 67.0899 70.0183 67.0494C70.0851 67.0081 70.1374 57.2555 70.1374 44.8274C70.1374 31.0635 70.0888 22.709 70.009 22.7583C69.9384 22.8019 69.8308 22.7561 69.7697 22.6564C69.7088 22.5569 67.3672 20.8531 64.5661 18.8704L59.4733 15.2654L59.4711 11.4266C59.4689 7.69773 59.46 7.57209 59.1606 7.04353C58.9878 6.73851 58.6135 6.36418 58.3085 6.19136C57.7679 5.88525 57.7266 5.8832 52.0029 5.88088L46.2414 5.87869L43.7314 4.10271C39.8144 1.33115 39.3074 1.0022 38.4602 0.683239C36.6343 -0.00390927 34.8139 -0.157718 33.0304 0.224684Z"
            fill="#FFB703"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="70" height="70" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export const ContactSection = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-wide">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Get in touch with us
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We’d love to hear from you! Reach out for any inquiries, quotes, or collaboration opportunities.
          </p>
        </div>

        {/* Main Flex: Info + Form */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Info + Illustration */}
          <div className="flex-1 flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <div className="w-20 h-20 mb-4">{info.svg}</div>
                <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                <a href={info.link} className="text-blue-600 hover:underline font-medium">
                  {info.display}
                </a>
              </div>
            ))}

            {/* Illustration */}
            <div className="mt-6">
              <Image
                src={contactIllustration}
                alt="Contact Illustration"
                className="rounded-xl shadow-lg"
                width={500}
                height={350}
                quality={100}
              />
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg">
            <input
              type="text"
              name="your-name"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className="border border-gray-300 p-3 rounded-md w-full md:col-span-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md md:col-span-2 hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};