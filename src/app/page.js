import AboutUs from '@/components/AboutUs';
import ServicesSection from '@/components/ServicesSection';
import SliderOne from '@/components/SliderOne';
import React from 'react';

const Home = () => {
  return (
    <div>
      <SliderOne/>
      <ServicesSection/>
      <AboutUs/>
    </div>
  );
};

export default Home;