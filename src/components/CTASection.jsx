import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section style={{backgroundImage: "url('https://iili.io/dhdK4wu.jpg')"}} className='bg-no-repeat bg-cover bg-center'>
      <div className="bg-cta py-20">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-5">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Partner with us to unlock the full potential of your brand through
          creative design, development, and strategic marketing.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-orange-400 text-gray-900 text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
        >
          Get Started Today
        </Link>
      </div>
    </div>
    </section>
  );
};

export default CTASection;
