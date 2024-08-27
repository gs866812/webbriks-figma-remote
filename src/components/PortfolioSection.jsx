import React from 'react';
import PortfolioCard from './PortfolioCard';

const portfolioItems = [
  {
    imgSrc: '/images/portfolio1.gif', // Replace with your image paths
    title: 'Brand Identity for XYZ Corp',
    description: 'A complete rebranding project including logo design, website redesign, and marketing materials.',
    link: '/portfolio/xyz-corp',
  },
  {
    imgSrc: '/images/portfolio2.png',
    title: 'E-commerce Website for ABC Store',
    description: 'Developed a responsive e-commerce platform with custom features and seamless user experience.',
    link: '/portfolio/abc-store',
  },
  {
    imgSrc: '/images/portfolio3.png',
    title: 'Social Media Campaign for 123 Company',
    description: 'Strategic digital marketing campaign that increased brand awareness and engagement across all social channels.',
    link: '/portfolio/123-company',
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">Featured Work</h2>
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
