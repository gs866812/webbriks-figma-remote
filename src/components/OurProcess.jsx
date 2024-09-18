import Image from "next/legacy/image";
import React from "react";

const OurProcess = () => {
  return (
    <section
      className="py-16 process text-gray-800 rounded-2xl"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-5 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 lg:mb-12 text-center">
          Our Process
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-30 0 200 20"
            fill="none"
            className="w-full max-w-[270px] md:max-w-[270] mb-10"
          >
            <path
              d="M10 10c20 5 40 2 60 0s40-10 60-5"
              stroke="#FFA500"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
              }}
            />
          </svg>
        </h2>
        {/* Single Column Layout for All Devices */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-4 relative h-[110px]">
              <Image
                src="https://iili.io/dwJRHFI.png"
                width={100}
                height={100}
                priority="true"
                alt="Step 1"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p>
              We start by understanding your needs and goals to tailor our
              services accordingly.
            </p>
          </div>

          {/* Arrow between steps */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-4 relative h-[110px]">
              <Image
                src="https://iili.io/dwJRJat.png"
                width={100}
                height={100}
                priority="true"
                alt="Step 2"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Planning</h3>
            <p>
              We create a detailed plan and timeline to ensure the project stays
              on track.
            </p>
          </div>

          {/* Arrow between steps */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-4 relative h-[110px]">
              <Image
                src="https://iili.io/dwJRd8X.png"
                width={100}
                height={100}
                priority="true"
                alt="Step 3"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Execution</h3>
            <p>
              Our team executes the plan with precision and keeps you updated
              throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
