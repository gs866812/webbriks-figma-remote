'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TeamMember from '@/components/TeamMember';



const AboutUs = () => {
  const profiles = [
    { 
      imgSrc: "https://iili.io/dh6T9Wv.jpg", 
      title: "Md Ashaduzzaman",
      position: "CEO & Founder",
      fb: "/fb/asad",
      twitter: "/twitter/asad",
      instagram: "",
    },
    {
      imgSrc: "https://iili.io/dh6Tdfp.jpg",
      title: "Md Ariful-Islam",
      position:"Managing Director",
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
    <div>
      {/* Hero Section */}
      <section style={{backgroundImage: "url('https://iili.io/dhd9CUg.jpg')"}} className='bg-no-repeat bg-center bg-cover'>
      <div className="text-white py-10 lg:py-16 text-center bg-about-top" >
        <div className="container mx-auto px-5">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-6">
            Transforming Your Vision into Creative Results with Our Comprehensive Services.
          </p>
        </div>
      </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 p-5">
          <div className='md:w-[50%] relative'>
            <Image src='https://iili.io/dhrIA9s.jpg' layout='fill' objectFit='cover' objectPosition='top' className='rounded-md shadow-lg shadow-blue-gray-500'/>
          </div>
        
          <div className='md:w-[50%]'>
            <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-12">
              We are a team of passionate professionals dedicated to providing top-notch services in
              Graphics Design, Photo Editing, Web Design & Development, Virtual Assistance, Video Editing, 
              and Digital Marketing. Our mission is to empower businesses by delivering creative, effective, 
              and innovative solutions that drive success.
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

      {/* Mission & Vision Section */}
      <section className="py-16 text-gray-800">
        <div className="container mx-auto px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to provide exceptional services that help our clients achieve their goals. 
              We strive to be a trusted partner in their success, offering innovative solutions and 
              unparalleled expertise in every project we undertake.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a world where businesses can effortlessly transform their ideas into reality 
              through creative and cutting-edge solutions. Our goal is to be at the forefront of this 
              transformation, delivering results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=" text-center text-gray-100 bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('https://iili.io/dhdK4wu.jpg')"}}>
        <div className='py-16 bg-cta'>
        <div className="container mx-auto px-5 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your project and see how we can help you achieve your goals.
          </p>
          <Link href="/contact">
            <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
              Get in Touch
            </span>
          </Link>
        </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Team Member 1 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6T9Wv.jpg' alt="Team Member 1" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">John Doe</h3>
              <p className="text-orange-500">CEO & Founder</p>
            </div> */}
            {/* Team Member 2 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6Tdfp.jpg' alt="Team Member 2" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">Jane Smith</h3>
              <p className="text-orange-500">Chief Designer</p>
            </div> */}
            {/* Team Member 3 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6T20N.jpg' alt="Team Member 3" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">Alice Johnson</h3>
              <p className="text-orange-500">Marketing Head</p>
            </div> */}
            {/* Team Member 4 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6T3gI.jpg' alt="Team Member 3" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">Alice Johnson</h3>
              <p className="text-orange-500">Marketing Head</p>
            </div> */}
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
      </section>

      
    </div>
  );
};

export default AboutUs;
