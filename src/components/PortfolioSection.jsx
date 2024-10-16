import React from 'react';
import PortfolioCard from './PortfolioCard';

const portfolioItems = [
  {
    imgSrc: 'https://iili.io/ds6UkPt.jpg', // Replace with your image paths
    title: 'Brand Identity for XYZ Corp',
    description: 'A complete rebranding project including logo design, website redesign, and marketing materials.',
    link: '/get-quote',
  },
  {
    imgSrc: 'https://iili.io/ds6qoqN.jpg',
    title: 'E-commerce Website for ABC Store',
    description: 'Developed a responsive e-commerce platform with custom features and seamless user experience.',
    link: '/get-quote',
  },
  {
    imgSrc: 'https://iili.io/ds6qBXR.jpg',
    title: 'Social Media Campaign for 123 Company',
    description: 'Strategic digital marketing campaign that increased brand awareness and engagement across all social channels.',
    link: '/get-quote',
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-gray-800">Featured Work</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-25 0 200 20"
          fill="none"
          className="w-full max-w-[300px] md:max-w-[350px] mb-10"
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
        <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A showcase of our recent projects across various industries, demonstrating our expertise and commitment to quality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
