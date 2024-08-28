'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const ServiceCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 text-center border hover:shadow-xl transition-shadow duration-300 py-10">
      <div className="mb-4 flex justify-center">
        <Image src={imgSrc} alt={title} width={150} height={150} />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>

        <Link href={link} className="inline-block w-full bg-gray-800 text-gray-100 px-4 py-2 rounded-md hover:bg-orange-400 hover:text-gray-800 transition-colors mt-8 lg:mt-10">
          Explore More
        </Link>

      {/* <button className='lg:mt-10'>
                <Link href="/contact" className="bg-orange-400 text-gray-800 px-6 py-3 rounded-full hover:bg-orange-500 transition text-lg font-semibold">
                Get Started
                </Link>
                </button> */}
    </div>
  );
};

export default ServiceCard;
