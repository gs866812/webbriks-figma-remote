"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import aos from "aos";
import SixServiceCard from "@/components/SixServiceCard";
// import Image from "next/image";
import Image from "next/legacy/image";

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
      imgSrc: "https://iili.io/dh6T9Wv.jpg", // Replace with appropriate images
      title: "Graphics Design",
      description:
        "Creative designs that elevate your brand's visual identity.",
      link: "/services/graphics-design",
    },
    {
      imgSrc: "https://iili.io/dh6Tdfp.jpg", // Replace with appropriate images
      title: "Photo Editing",
      description:
        "Professional photo editing services to enhance your images.",
      link: "/services/photo-editing",
    },
    {
      imgSrc: "https://iili.io/dh6T20N.jpg", // Replace with appropriate images
      title: "Web Design & Development",
      description: "Responsive and modern websites tailored to your needs.",
      link: "/services/web-design-and-development",
    },
    {
      imgSrc: "https://iili.io/dh6T3gI.jpg", // Replace with appropriate images
      title: "Virtual Assistant",
      description: "Efficient virtual assistance to streamline your workflow.",
      link: "/services/virtual-assistant",
    },
    {
      imgSrc: "https://iili.io/dh6T9Wv.jpg", // Replace with appropriate images
      title: "Video Editing",
      description: "High-quality video editing to bring your vision to life.",
      link: "/services/video-editing",
    },
    {
      imgSrc: "https://iili.io/dh6Tdfp.jpg", // Replace with appropriate images
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
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <SixServiceCard
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
            Looking for tailored services? Request a quote and let’s start planning your next project together.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                Get a Quote
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="py-16 bg-white text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 lg:mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <div className="text-center">
              <div className="mb-4 relative h-[110px]">
                <Image
                  src="https://iili.io/dwJRHFI.png"
                  width={100}
                  height={100}
                  priority='true'
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
            <div className="text-center">
              <div className="mb-4 relative h-[110px]">
                <Image
                  src="https://iili.io/dwJRJat.png"
                  width={100}
                  height={100}
                  priority='true'
                  alt="Step 2"
                  className="mx-auto w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p>
                We create a detailed plan and timeline to ensure the project
                stays on track.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative h-[110px]">
                <Image
                  src="https://iili.io/dwJRd8X.png"
                  width={100}
                  height={100}
                  priority='true'
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



      {/* case studies */}

      <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg shadow-sm">
              <div className='p-5 relative h-[150px]'>
              <Image
                src="https://iili.io/dh6Tdfp.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt="Case Study 1"
                className="w-full mb-4 rounded-md"
               
              />
              </div>
              <div className='p-5'>
              <h3 className="text-xl font-semibold mb-2">Project Name 1</h3>
              <p>
                A brief description of the project and the successful outcomes.
              </p>

              <Link
                href="/case-studies/project-1"
                className="text-orange-500 hover:underline mt-4 inline-block"
              >
                Read More
              </Link>
              </div>
            </div>
            <div className="border rounded-lg shadow-sm">
              <div className='p-5 relative h-[150px]'>
              <Image
                src="https://iili.io/dh6Tdfp.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt="Case Study 1"
                className="w-full mb-4 rounded-md"
               
              />
              </div>
              <div className='p-5'>
              <h3 className="text-xl font-semibold mb-2">Project Name 1</h3>
              <p>
                A brief description of the project and the successful outcomes.
              </p>

              <Link
                href="/case-studies/project-1"
                className="text-orange-500 hover:underline mt-4 inline-block"
              >
                Read More
              </Link>
              </div>
            </div>
            <div className="border rounded-lg shadow-sm">
              <div className='p-5 relative h-[150px]'>
              <Image
                src="https://iili.io/dh6Tdfp.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt="Case Study 1"
                className="w-full mb-4 rounded-md"
               
              />
              </div>
              <div className='p-5'>
              <h3 className="text-xl font-semibold mb-2">Project Name 1</h3>
              <p>
                A brief description of the project and the successful outcomes.
              </p>

              <Link
                href="/case-studies/project-1"
                className="text-orange-500 hover:underline mt-4 inline-block"
              >
                Read More
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
