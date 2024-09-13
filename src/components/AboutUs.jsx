import React from "react";

const AboutUs = () => {

  return (
    <section
      id="about"
      className="bg-[#022c5d] py-16 md:py-20 lg:py-24 px-5 md:px-10 lg:px-20"
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Who we are
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-25 0 200 20"
          fill="none"
          className="w-full max-w-[300px] md:max-w-[350px] mb-10"
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

        {/* Introduction */}
        <p className="text-lg md:text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          We are a dedicated team of professionals committed to delivering
          exceptional design, development, and digital marketing services.
        </p>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          

          <div
            style={{ backgroundImage: "url('https://iili.io/dh2vHJe.jpg')" }}
            className="bg-no-repeat bg-contain bg-right"
          >
            <div className="bg-about lg:p-8 p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                What We Do
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From crafting beautiful graphics to building responsive websites
                and executing digital marketing strategies, we offer a full
                suite of services to elevate your brand and achieve your
                business goals.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url('https://iili.io/dh22Wba.jpg')" }}
            className="bg-no-repeat bg-contain bg-right"
          >
            <div className="bg-about lg:p-8 p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-600">
                Our mission is to transform your vision into creative results
                that resonate with your audience. We strive to offer the best in
                design, development, and digital marketing to help your business
                thrive in a competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
