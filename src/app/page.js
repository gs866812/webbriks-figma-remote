"use client";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import FunFact from "@/components/FunFact";
import OurProcess from "@/components/OurProcess";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChoose from "@/components/WhyChoose";
import aos from "aos";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    aos.init({
      // You can customize the options here
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className="lg:py-10 py-5">
        <WhoWeAre />
      </section>
      <section className="lg:py-10 py-5">
        <FunFact />
      </section>
      <section data-aos='fade-up'>
        <ServicesSection />
      </section>
      <hr />
      <section data-aos='fade-up'>
        <OurProcess />
      </section>
      <section data-aos='fade-up'>
        <AboutUs />
      </section>
      <section data-aos='fade-up'>
        <PortfolioSection />
      </section>

      <section data-aos='fade-up'>
        <WhyChoose />
      </section>
      <section data-aos='fade-up'>
        <TestimonialsCarousel />
      </section>
      <section data-aos='fade-up'>
        <CTASection />
      </section>
    </div>
  );
};

export default Home;
