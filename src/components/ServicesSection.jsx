import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "https://iili.io/dXJpctj.gif", //https://iili.io/dXJpctj.gif
    title: "Graphics Design",
    description:
      "Creative and compelling graphic design services to make your brand stand out.",
    link: "/services/graphics-design",
  },
  {
    imgSrc: "https://iili.io/dX9sVx1.png",
    title: "Photo Editing",
    description:
      "Professional photo editing services to enhance your images to perfection.",
    link: "/services/photo-editing",
  },
  {
    imgSrc: "https://iili.io/dX9skRp.png",
    title: "Web Design & Development",
    description:
      "Custom websites that are responsive, fast, and tailored to your business needs.",
    link: "/services/web-design-development",
  },
  {
    imgSrc: "https://iili.io/dX9sw0J.png",
    title: "Virtual Assistant",
    description:
      "Reliable virtual assistant services to help manage your daily tasks efficiently.",
    link: "/services/virtual-assistant",
  },
  {
    imgSrc: "https://iili.io/dX9sGDP.png",
    title: "Video Editing",
    description:
      "High-quality video editing services to bring your stories to life.",
    link: "/services/video-editing",
  },
  {
    imgSrc: "https://iili.io/dX9sjfa.png",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions to grow your online presence.",
    link: "/services/digital-marketing",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>
        <div className='flex justify-center gap-3 -mb-3 absolute top-14 lg:left-[42%] left-[30%]'>
            <hr className='w-16 rounded-lg border-y-2 border-orange-400' /> 
            <hr className='w-2 rounded-lg border-y-2 border-orange-400' /> 
            <hr className='w-16 rounded-lg border-y-2 border-orange-400' />
        </div>
        <p className="text-lg md:text-xl text-center text-gray-800 mb-12 max-w-3xl mx-auto">
        Expertly crafted design, development, and marketing services tailored to elevate your brand and drive business success.
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
