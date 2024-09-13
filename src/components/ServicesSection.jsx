"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    // imgSrc: "https://iili.io/dX9sXig.png",
    imgSrc: "https://iili.io/dXJpctj.gif",
    title: "Graphics Design",
    description:
      "Creative and compelling graphic design services to make your brand stand out.",
    link: "/services/graphics-design",
  },
  {
    // imgSrc: "https://iili.io/dX9sVx1.png",
    // imgSrc: "https://iili.io/dXdurNa.gif",
    imgSrc: "https://iili.io/dXdEN3b.gif",
    title: "Photo Editing",
    description:
      "Professional photo editing services to enhance your images to perfection.",
    link: "/services/photo-editing",
  },
  {
    // imgSrc: "https://iili.io/dX9skRp.png",
    imgSrc: "https://iili.io/dXduPov.gif",
    title: "Web Design & Development",
    description:
      "Custom websites that are responsive, fast, and tailored to your business needs.",
    link: "/services/web-design-development",
  },
  {
    // imgSrc: "https://iili.io/dX9sw0J.png",
    imgSrc: "https://iili.io/dXduiVR.gif",
    title: "Virtual Assistant",
    description:
      "Reliable virtual assistant services to help manage your daily tasks efficiently.",
    link: "/services/virtual-assistant",
  },
  {
    // imgSrc: "https://iili.io/dX9sGDP.png",
    imgSrc: "https://iili.io/dXduUHF.gif",
    title: "Video Editing",
    description:
      "High-quality video editing services to bring your stories to life.",
    link: "/services/video-editing",
  },
  {
    // imgSrc: "https://iili.io/dX9sjfa.png",
    imgSrc: "https://iili.io/dXdu4DJ.gif",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions to grow your online presence.",
    link: "/services/digital-marketing",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto relative flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 inline-block">
          Our Services
          {/* Hand-drawn underline */}
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-30 0 200 20"
          fill="none"
          className="w-full max-w-[300px] md:max-w-[340px] mb-10"
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

        <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Expertly crafted design, development, and marketing services tailored
          to elevate your brand and drive business success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
