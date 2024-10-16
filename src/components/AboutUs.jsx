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
        <p className="text-lg md:text-xl text-gray-300 mb-12 mx-auto text-center">
          {`At Web Briks, we began our journey in early 2018 as "Cut Out Expert." Our focus was on providing high-quality photo editing services. As we grew and gained more clients, we decided to expand our offerings. This growth led us to create "Web Briks LLC." Now, we offer additional services, including virtual assistance and web design.`}
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 mx-auto text-center">
          {`Our founders bring a wealth of experience and vision to our company. They lead a passionate team dedicated to helping clients succeed. We prioritize tailored solutions that meet each client’s unique needs.`}
        </p>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">


          <div
            style={{ backgroundImage: "url('https://iili.io/dh2vHJe.jpg')" }}
            className="bg-no-repeat bg-contain bg-right"
          >
            <div className="bg-about lg:p-8 p-4 md:p-6 rounded-lg shadow-md">
              {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                What We Do
              </h3> */}
              <p className="text-gray-600 leading-relaxed">
                At Web Briks, we believe in delivering quality work. We maintain transparency in our communications and ensure timely results. Our goal is to build long-term partnerships with businesses around the world. We want to support our clients in achieving their goals and help them grow.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url('https://iili.io/dh22Wba.jpg')" }}
            className="bg-no-repeat bg-contain bg-right"
          >
            <div className="bg-about lg:p-8 p-4 md:p-6 rounded-lg shadow-md">
              {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3> */}
              <p className="leading-relaxed text-gray-600">
                Our mission is to empower our clients to thrive in their respective fields. We envision becoming a trusted global leader in outsourcing services. By focusing on excellence and client satisfaction, we aim to make a positive impact in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
