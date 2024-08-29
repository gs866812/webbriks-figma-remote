'use client';
import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";


const SixServiceCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg p-5  border hover:shadow-xl transition-shadow duration-300 pb-10">
      <div className="mb-4 flex justify-center relative h-[200px]">
        <Image src={imgSrc} alt={title} layout="fill" objectFit='cover' objectPosition='top'/>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>

        <Link href={link} className=" hover:text-orange-400 text-gray-800 transition-colors mt-8 lg:mt-10 text-xl flex items-center gap-2 w-[33%]">
          Explore <MdArrowRightAlt />
        </Link>

    </div>
  );
};

export default SixServiceCard;
