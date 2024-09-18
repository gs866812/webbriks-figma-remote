import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: "url('src/components/SliderOne.jsx')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
            <div className="container mx-auto flex flex-col items-center justify-center h-full px-6 relative z-10">
                <h1 className="text-white text-5xl md:text-6xl font-bold text-center mb-6">
                    Transforming Your Vision into Creative Results
                </h1>
                <p className="text-white text-lg md:text-xl text-center mb-8">
                    We provide top-notch Graphics design, Web design & development, and digital marketing services to help your business thrive.
                </p>
                <div>

                        <Link href='/contact' className="bg-orange-400 text-gray-800 px-6 py-3 rounded-full hover:bg-orange-500 transition text-lg font-semibold">
                            Get a Quote
                        </Link>

                </div>
            </div>
        </section>
    );
};

export default Hero;
