import Image from "next/legacy/image";
import React from "react";

const WhyChoose = () => {
  return (
    <section className="py-16 text-gray-800">
      <div className="container mx-auto px-5 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-25 0 200 20"
          fill="none"
          className="w-full max-w-[325px] md:max-w-[325px] mb-10"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="m-4 relative h-[150px] flex items-center justify-center">
              <Image
                src="https://iili.io/dwHVYhP.png"
                width={100}
                height={100}
                priority='true'
                alt="Expertise"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p>
              Our team has years of experience in delivering high-quality
              services.
            </p>
          </div>
          <div className="text-center">
            <div className="m-4 relative h-[150px] flex items-center justify-center">
              <Image
                src="https://iili.io/dwHV0Eg.png"
                width={100}
                height={100}
                priority='true'
                alt="Reliability"

              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            <p>We consistently deliver on our promises and meet deadlines.</p>
          </div>
          <div className="text-center">
            <div className="m-4 relative h-[150px] flex items-center justify-center">
              <Image
                src="https://iili.io/dwHV14a.png"
                width={100}
                height={100}
                priority='true'
                alt="Innovation"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>
              We use the latest tools and techniques to stay ahead of the curve.
            </p>
          </div>
          <div className="text-center">
            <div className="m-4 relative h-[150px] flex items-center justify-center">
              <Image
                src="https://iili.io/dwHVMYv.png"
                width={100}
                height={100}
                priority='true'
                alt="Customer Focus"
                className="mx-auto w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p>
              Our clients are at the heart of everything we do, ensuring
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
