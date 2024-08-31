"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const SixServiceCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="bg-white rounded-2xl text-center p-5 border hover:shadow-xl transition-shadow duration-300 pb-10">
      <div className="mb-4 relative">
        <Image src={imgSrc} alt={title} width={100} height={100} />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>

      <span className='flex justify-center'>
        <Link
          href={link}
          className=" hover:text-orange-400 text-gray-800 transition-colors mt-8 lg:mt-10 text-xl flex items-center gap-2 w-[33%]"
        >
          Explore <MdArrowRightAlt />
        </Link>
      </span>
    </div>
  );
};

export default SixServiceCard;
