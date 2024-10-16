'use client';
import React from "react";
import Slider from "react-slick";
import { CgShapeZigzag } from "react-icons/cg";
import Image from "next/legacy/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    imgSrc: "/images/client1.jpg",
    name: "Emily R",
    position: "Small Business Owner",
    testimonial: "The virtual assistant from Web Bricks has been a tremendous help in managing my daily tasks. Their support has allowed me to focus on growing my business instead of getting bogged down in administration.",
    rating: 5, // 5 stars
  },
  {
    imgSrc: "/images/client2.jpg",
    name: "James T",
    position: "E-commerce Manager",
    testimonial: "We’ve seen a significant improvement in our customer response times since hiring a virtual assistant. The service is reliable, and the quality of work is outstanding",
    rating: 4, // 4 stars
  },
  {
    imgSrc: "/images/client3.jpg",
    name: "Sarah L",
    position: "Digital Marketing Specialist",
    testimonial: "I was hesitant at first, but the virtual assistant service reviews convinced me to try it. Now, I can't imagine my workflow without their support. They are professional, efficient, and a true asset to my team.",
    rating: 5, // 5 stars
  },
  {
    imgSrc: "/images/client4.jpg",
    name: "Mark D",
    position: "Real Estate Agent",
    testimonial: "Thanks to Web Bricks, I've been able to streamline my operations. The virtual assistant I work with is skilled and understands my business needs perfectly.",
    rating: 4, // 3 stars
  },
  {
    imgSrc: "/images/client4.jpg",
    name: "Mark L",
    position: "Small Business Owner",
    testimonial: "Hiring a virtual assistant was one of the best decisions we've made. We saved both time and money, and the flexibility they provide is invaluable.",
    rating: 4, // 3 stars
  },
  {
    imgSrc: "/images/client4.jpg",
    name: "Sarah J",
    position: "E-commerce Manager",
    testimonial: "Web Bricks’ virtual assistants have been a game-changer for our business. They handle our customer inquiries efficiently, allowing us to focus on our core activities..",
    rating: 4, // 3 stars
  },
];

const TestimonialForVirtual = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="bg-gray-100 py-20 relative">
      {/* <CgShapeZigzag className='absolute text-[200px] color-shape z-10 left-10 top-[40%] rotate-90 hidden md:block' /> */}
      {/* <CgShapeZigzag className='absolute text-[200px] color-shape z-10 right-10 top-[40%] -rotate-90 hidden md:block' /> */}

      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
          What Our Clients Say
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Hear from our satisfied clients who have experienced our top-notch
          services and support.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md p-8 text-center flex flex-col items-center justify-center mb-5">
                <p className="text-gray-600 italic mb-4">{testimonial.testimonial}</p>
                <div className="flex justify-center gap-1 mb-4">
                  {/* Rendering 5 stars */}
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-orange-400" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-5">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                {/* <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    objectFit="cover"
                  />
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialForVirtual;
