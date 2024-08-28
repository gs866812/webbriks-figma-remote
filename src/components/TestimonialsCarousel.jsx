'use client';
import React from "react";
import Slider from "react-slick";
import { CgShapeZigzag } from "react-icons/cg";
import Image from "next/legacy/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    imgSrc: "/images/client1.jpg",
    name: "Shirly",
    position: "CEO, XYZ Corp",
    testimonial: "Working with this team was a game-changer. Their creativity and professionalism exceeded our expectations.",
    rating: 5, // 5 stars
  },
  {
    imgSrc: "/images/client2.jpg",
    name: "Jane Smith",
    position: "Marketing Director, ABC Inc.",
    testimonial: "They delivered outstanding results on time and within budget. We couldn’t be happier with the outcome.",
    rating: 4, // 4 stars
  },
  {
    imgSrc: "/images/client3.jpg",
    name: "Michael Johnson",
    position: "Founder, 123 Startups",
    testimonial: "Their innovative approach and attention to detail helped us achieve our goals. Highly recommended!",
    rating: 5, // 5 stars
  },
  {
    imgSrc: "/images/client4.jpg",
    name: "Alex Brown",
    position: "CTO, Tech Solutions",
    testimonial: "Good service, but there is some room for improvement in communication.",
    rating: 4, // 3 stars
  },
];

const TestimonialsCarousel = () => {
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
      <CgShapeZigzag className='absolute text-[200px] color-shape z-10 left-10 top-[40%] rotate-90 hidden md:block'/>
      <CgShapeZigzag className='absolute text-[200px] color-shape z-10 right-10 top-[40%] -rotate-90 hidden md:block'/>

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

export default TestimonialsCarousel;
