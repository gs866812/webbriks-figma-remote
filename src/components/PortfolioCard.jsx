import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const PortfolioCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between" data-aos='flip-left' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div className="relative w-full">
        <Image src={imgSrc} alt={title} width={300} height={250} priority={true}/>
      </div>
      <div className="p-5 flex">
        {/* <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div> */}
        <Link
          href={link}
          className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md hover:bg-orange-400 hover:text-gray-800 transition-colors mt-auto flex items-center gap-2 justify-center"
        >
          Get quote <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
