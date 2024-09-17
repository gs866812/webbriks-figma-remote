"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import aos from "aos";
import SixServiceCard from "@/components/SixServiceCard";
// import Image from "next/image";
import Image from "next/legacy/image";
import OurProcess from "@/components/OurProcess";

const Services = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    {
      imgSrc: "https://iili.io/dNommHQ.png", // Replace with appropriate images
      title: "Graphics Design",
      description:
        "Creative designs that elevate your brand's visual identity.",
      link: "/services/graphics-design",
    },
    {
      imgSrc: "https://iili.io/dNomDUx.png", // Replace with appropriate images
      title: "Photo Editing",
      description:
        "Professional photo editing services to enhance your images.",
      link: "/services/photo-editing",
    },
    {
      imgSrc: "https://iili.io/dNomsVe.png", // Replace with appropriate images
      title: "Web Design & Development",
      description: "Responsive and modern websites tailored to your needs.",
      link: "/services/web-design-and-development",
    },
    {
      imgSrc: "https://iili.io/dNomZKb.png", // Replace with appropriate images
      title: "Virtual Assistant",
      description: "Efficient virtual assistance to streamline your workflow.",
      link: "/services/virtual-assistant",
    },
    {
      imgSrc: "https://iili.io/dNomLiu.png", // Replace with appropriate images
      title: "Video Editing",
      description: "High-quality video editing to bring your vision to life.",
      link: "/services/video-editing",
    },
    {
      imgSrc: "https://iili.io/dNomtlj.png", // Replace with appropriate images
      title: "Digital Marketing",
      description: "Strategies to boost your online presence and drive growth.",
      link: "/services/digital-marketing",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        data-aos="fade-up"
        style={{ backgroundImage: "url('https://iili.io/dhd9CUg.jpg')" }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <div className="text-white py-10 lg:py-16 text-center bg-about-top">
          <div className="container mx-auto px-5">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl mb-6">
              We offer a range of services designed to meet your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-5 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">What We Do</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-30 0 200 20"
            fill="none"
            className="w-full max-w-[250px] md:max-w-[250px] mb-10"
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
          <div className="grid grid-cols-1 gap-12 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg shadow-lg hover:shadow-xl bg-white ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Image Section */}
                <div className={`w-full md:w-1/2 h-auto lg:flex justify-center`}>
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    width={200}
                    height={200}
                    className={`rounded-lg shadow-lg w-full object-cover `}
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg mb-4 text-gray-600">
                    {service.description}
                  </p>
                  <span>
                  <a
                    href={service.link}
                    className="inline-block bg-orange-400 text-gray-900 px-6 py-3 rounded-md hover:bg-orange-500 transition-colors mt-5"
                  >
                    Learn More
                  </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <OurProcess />

      {/* case studies */}

      <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-5 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Case Studies</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-30 0 200 20"
            fill="none"
            className="w-full max-w-[270px] md:max-w-[270px] mb-10"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-3xl shadow-sm bg-white">
              <div className="p-5 relative h-[200px]">
                <Image
                  src="https://iili.io/dNzwskl.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt="Case Study 1"
                  className="w-full mb-4 rounded-t-md"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  eCommerce Photo Editing
                </h3>
                <p className="text-justify">
                  We partnered with an online retailer to enhance the visual
                  appeal of their product images. The project involved color
                  correction, background removal, and retouching over 500
                  product photos to ensure they were polished, professional, and
                  ready for their eCommerce platform.
                </p>
              </div>
              <div>
                <Link
                  href="/case-studies/project-1"
                  className="text-orange-500 hover:underline mt-4 p-5 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="border rounded-3xl shadow-sm bg-white">
              <div className="p-5 relative h-[200px]">
                <Image
                  src="https://iili.io/dNzwZIS.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt="Case Study 1"
                  className="w-full mb-4 rounded-t-md"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Drop Shadow Making
                </h3>
                <p className="text-justify">
                  We worked with a fashion retailer to create realistic drop
                  shadows for their product. This project required meticulous
                  attention to detail to ensure that each shadow was consistent
                  with the lighting and angle of the product, enhancing the
                  overall presentation of the items on their website.
                </p>
              </div>
              <div>
                <Link
                  href="/case-studies/project-1"
                  className="text-orange-500 hover:underline mt-4 p-5 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="border rounded-3xl shadow-sm bg-white">
              <div className="p-5 relative h-[200px]">
                <Image
                  src="https://iili.io/dhkgXqB.webp"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt="Case Study 1"
                  className="w-full mb-4 rounded-t-md"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  E-commerce Website
                </h3>
                <p className="text-justify">
                  We developed a fully responsive and user-friendly eCommerce
                  website for ABC Store, a growing retail business. The project
                  involved custom web design, integration of a secure payment
                  gateway, and implementation of an easy-to-navigate product
                  catalog.
                </p>
              </div>
              <div>
                <Link
                  href="/case-studies/project-1"
                  className="text-orange-500 hover:underline mt-4 inline-block p-5"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        data-aos="fade-up"
        className="text-center text-gray-100 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('https://iili.io/dhdK4wu.jpg')" }}
      >
        <div className="py-16 bg-cta">
          <div className="container mx-auto px-5 lg:px-20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl mb-8">
              Looking for tailored services? Request a quote and let’s start
              planning your next project together.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                Get a Quote
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
