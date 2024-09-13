"use client";
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import aos from "aos";

const Portfolio = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const projects = [
    {
      imgSrc: "https://iili.io/dNzwskl.jpg",
      title: "eCommerce Photo Editing",
      description: "Enhanced product images for better sales.",
      link: "/portfolio/ecommerce-photo-editing",
    },
    {
      imgSrc: "https://iili.io/dNzwZIS.jpg",
      title: "Drop Shadow Making",
      description: "Realistic drop shadows for fashion products.",
      link: "/portfolio/drop-shadow-making",
    },
    {
      imgSrc: "https://iili.io/dNzwZIS.jpg",
      title: "E-commerce Website",
      description: "Custom website design and development.",
      link: "/portfolio/abc-store-website",
    },
    // Add more projects here
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
            <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl mb-6">
              Showcasing our Expertise and Creative Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <Link href="#graphics-design">
            <span className="text-lg font-semibold cursor-pointer">
              Graphics Design
            </span>
          </Link>
          <Link href="#photo-editing">
            <span className="text-lg font-semibold cursor-pointer">
              Photo Editing
            </span>
          </Link>
          <Link href="#web-design">
            <span className="text-lg font-semibold cursor-pointer">
              Web Design & Development
            </span>
          </Link>
          <Link href="#virtual-assistant">
            <span className="text-lg font-semibold cursor-pointer">
              Virtual Assistant
            </span>
          </Link>
          <Link href="#video-editing">
            <span className="text-lg font-semibold cursor-pointer">
              Video Editing
            </span>
          </Link>
          <Link href="#digital-marketing">
            <span className="text-lg font-semibold cursor-pointer">
              Digital Marketing
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group h-[250px] border rounded-md shadow-lg"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="rounded-md shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 rounded-md flex justify-center items-center text-white text-center p-4">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2">{project.description}</p>
                    <Link href={project.link}>
                      <span className="inline-block mt-4 bg-orange-500 text-gray-900 px-4 py-2 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                        View Details
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  layout="responsive"
                  width={700}
                  height={475}
                  className="rounded-md"
                />
                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                <p className="text-lg mt-2">{project.description}</p>
                <Link href={project.link}>
                  <span className="inline-block mt-4 text-orange-500 font-semibold cursor-pointer">
                    Read More
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Project Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-5 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Project Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg bg-white overflow-hidden flex flex-col"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  layout="responsive"
                  width={700}
                  height={475}
                  className="object-cover w-full h-full"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <Link href={project.link}>
                      <span className="inline-block bg-orange-500 text-gray-900 px-4 py-2 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                        View Details
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-xl mb-8">
              Ready to start your next project? Contact us today!
            </p>
            <Link href="/contact">
              <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                Get in Touch
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
