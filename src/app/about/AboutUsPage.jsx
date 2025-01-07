"use client";
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";
import aos from "aos";




const AboutUsPage = () => {
  useEffect(() => {
    aos.init({
      // You can customize the options here
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);

  const profiles = [
    {
      imgSrc: "https://iili.io/dh6T9Wv.jpg",
      title: "Md Ashaduzzaman",
      position: "CEO & Founder",
      fb: "/fb/asad",
      twitter: "/twitter/asad",
      instagram: "/instagram/asad",
    },
    {
      imgSrc: "https://iili.io/dh6Tdfp.jpg",
      title: "Md Ariful-Islam",
      position: "Managing Director",
      fb: "/fb/arif",
      twitter: "/twitter/arif",
      instagram: "/instagram/arif",
    },
    {
      imgSrc: "https://iili.io/dh6T20N.jpg",
      title: "Md Masum Kamal",
      position: "Director",
      fb: "/fb/dulu",
      twitter: "/twitter/dulu",
      instagram: "/instagram/dulu",
    },
    {
      imgSrc: "https://iili.io/dh6T3gI.jpg",
      title: "Md Kabir Hossain",
      position: "Director",
      fb: "/fb/kabir",
      twitter: "/twitter/kabir",
      instagram: "/instagram/kabir",
    },
  ];
  return (
    <>
      <div>
        {/* Hero Section */}
        <section
          data-aos="fade-up"
          style={{ backgroundImage: "url('https://iili.io/dhd9CUg.jpg')" }}
          className="bg-no-repeat bg-center bg-cover"
        >
          <div className="text-white py-10 lg:py-16 text-center bg-about-top">
            <div className="container mx-auto px-5">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-xl mb-6">
                Transforming Your Vision into Creative Results with Our
                Comprehensive Services.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
          <div className="container mx-auto">
            {/* <div className="md:w-[50%] h-[300px] relative border">
              <Image
                src="https://iili.io/dhrIA9s.jpg"
                alt="about-us"
                layout="fill"
                objectFit="contain"
                priority={true}
                className="rounded-md shadow-lg shadow-blue-gray-500 w-full"
              />
            </div> */}

            <div className="">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 0 200 20"
                fill="none"
                className="w-full max-w-[200px] md:max-w-[200px] mb-8"
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
              <p className="text-lg leading-relaxed mb-12">
                {` In early 2018, we started our journey as a small photo editing company called "Cut Out Expert." Back then, our focus was simple—providing high-quality photo editing services to clients around the world. As more clients discovered our work, we realized there was a chance to grow and offer even more. So, we decided to take the next big step and created "Web Briks LLC." This new chapter will allow us to expand our services beyond photo editing, reaching more businesses globally.`}
              </p>

              <p className="text-lg leading-relaxed mb-12">
                {`Our story is one of steady growth, driven by a strong dedication to quality and a passion for helping our clients succeed through outsourcing. We started small, but over time, we’ve grown into a company that offers many different services.`}
              </p>
              <p className="text-lg leading-relaxed mb-12">
                {`From the beginning, we’ve focused on delivering high-quality solutions that adapt to our clients’ changing needs. With each step forward, we’ve worked to improve what we do, build strong relationships, and help our clients' businesses thrive. Our journey shows that with hard work, new ideas, and always putting our clients first, we can truly make a difference.`}
              </p>
              <div className="">
                <Link href="/contact">
                  <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 text-gray-800" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="">
              <h2 className="text-3xl font-bold">Our Founders</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 0 200 20"
                fill="none"
                className="w-full max-w-[280px] md:max-w-[280px] mb-8"
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
              <p className="text-lg leading-relaxed mb-12">
                {`Web Briks was started by four visionary people: Md Ashaduzzaman, Md Ariful Islam, Masum Kamal, and Kabir Hossain. They had one goal—to build a company that provides top-quality outsourcing services. `}
              </p>

              <p className="text-lg leading-relaxed mb-12">
                {`Md Ashaduzzaman, as the Founder and CEO, leads the team and plays a key role. His leadership and innovative ideas help the company grow every day. The four founders work hard together to build Web Briks into a trusted name in the outsourcing industry. Their focus is always on serving clients and delivering great results. `}
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 0 200 20"
                fill="none"
                className="w-full max-w-[280px] md:max-w-[280px] mb-8"
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
              <p className="text-xl leading-relaxed mb-12">
                At Web Briks, we offer a variety of professional services to help businesses succeed:
              </p>
              <ul className="list-disc space-y-3">
                <li>
                  Photo Editing: We specialize in product photo editing service. Our team makes sure every image looks flawless and professional.
                </li>
                <li>
                  Virtual Assistance: We provide skilled virtual assistants to help businesses save time and focus on growing their businesses.
                </li>
                <li>
                  Web Design & Development: Our talented web developers create custom websites for each client. We tailor every website to meet specific needs and ensure a unique online presence for every business.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 text-gray-800" data-aos="fade-up">
          <div className="container mx-auto px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="5 0 200 20"
                fill="none"
                className="w-full max-w-[260px] md:max-w-[260px] mb-6"
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
              <p className="text-lg leading-relaxed text-justify">
                {`Our mission is simple: we provide high-quality outsourcing services to help our clients grow their businesses. We aim to deliver expert work on time every time. Each service we offer is tailored to fit our clients' specific needs because we believe personalized service is the key to success.`}
              </p>
              <p className="text-lg leading-relaxed text-justify mt-3">
                At Web Briks, we want to go beyond what our clients expect. Our team strives to help them achieve their goals, no matter how big or small the project is. We are dedicated to being a partner in their success and making a real difference in their business journeys.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="5 0 200 20"
                fill="none"
                className="w-full max-w-[240px] md:max-w-[240px] mb-6"
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
              <p className="text-lg leading-relaxed text-justify">
                We aim to become a global leader in the outsourcing industry. To do this, we provide consistent, high-quality services in many different fields. We believe that focusing on quality, transparency, and customer satisfaction will help us build a strong reputation worldwide.
              </p>
              <p className="text-lg leading-relaxed text-justify mt-3">
                Our vision is clear: we want to be the go-to outsourcing company that businesses trust for photo editing, virtual assistance, and web design services. As we grow, we stay dedicated to improving our services. Our goal is to help even more businesses succeed with our expert solutions and make a positive impact on their journeys.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
          <div className="container mx-auto px-5 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-30 0 200 20"
              fill="none"
              className="w-full max-w-[350px] md:max-w-[350px] mb-10"
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

            <div className="text-center space-y-3">
              <p>
                At Web Briks, we have a team of highly skilled and dedicated professionals. Each person on our team is passionate about their work. They commit themselves to delivering the best results for our clients.
              </p>
              <p>
                We invest in regular training to keep our team updated on the latest trends and technologies in the industry. This approach helps us maintain high-quality standards. It also allows us to take on even the most complex projects with confidence.
              </p>
              <p>
              {`Our team’s dedication and expertise make Web Briks a trusted partner for businesses around the world. We believe that together, we can achieve great things.`}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {profiles.map((service, index) => (
                <TeamMember
                  key={index}
                  imgSrc={service.imgSrc}
                  title={service.title}
                  position={service.position}
                  fb={service.fb}
                  twitter={service.twitter}
                  instagram={service.instagram}
                />
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="">
              <h2 className="text-3xl font-bold">Our Office</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 0 200 20"
                fill="none"
                className="w-full max-w-[200px] md:max-w-[200px] mb-8"
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
              <p className="text-lg leading-relaxed mb-12">
              Our offices inspire creativity, productivity, and teamwork. Our production office is located in Bangladesh. We also have a registered office in New Mexico, USA. It helps us serve clients around the world.
              </p>
              <p className="text-lg leading-relaxed mb-12">
              Our office environment is comfortable and modern. We believe that a good working environment is essential for delivering high-quality services, and our office reflects this belief. Every detail in our workspace supports our goal of achieving outstanding results for our clients.
              </p>
           
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="">
              <h2 className="text-3xl font-bold">Our Commitment</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 0 200 20"
                fill="none"
                className="w-full max-w-[350px] md:max-w-[350px] mb-8"
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
              <p className="text-lg leading-relaxed mb-12">
              At Web Briks, we commit to building long-term partnerships with our clients. We believe in transparency, so we stay open and honest in all our communications and work.
              </p>
              <p className="text-lg leading-relaxed mb-12">
              {`Quality is at the heart of everything we do. We always strive to exceed our clients’ expectations. Our team focuses on delivering value-driven results that help our clients succeed. `}
              </p>
              <p className="text-lg leading-relaxed mb-12">
              Whether we provide photo editing, virtual assistance, or web design services, our goal is to support our clients. We want to help them achieve their business goals and grow alongside them.
              </p>
           
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          data-aos="fade-up"
          className=" text-center text-gray-100 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('https://iili.io/dhdK4wu.jpg')" }}
        >
          <div className="py-16 bg-cta">
            <div className="container mx-auto px-5 lg:px-20">
              <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-xl mb-8">
                Contact us today to discuss your project and see how we can help
                you achieve your goals.
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
    </>
  );
};

export default AboutUsPage;
