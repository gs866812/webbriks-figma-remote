'use client';
import Link from 'next/link';
import SubTitle from './SubTitle';
import React, { useEffect } from 'react';


const SliderOne = () => {

    return (
        <section style={{ backgroundImage: "url('https://iili.io/dVOujj9.webp')" }} className='bg-cover bg-center bg-no-repeat'>
            <div className='w-full text-white flex justify-center items-center text-center mx-auto  relative bg-color' >
            <div className='py-10 md:py-10 lg:py-14 px-5 '>
                <div className='md:py-10 rounded-lg'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-3xl md:text-4xl lg:text-6xl font-bold lg:leading-[80px]'>Transforming Your Vision into <span className='text-orange-400'>Creative</span> Results</h1>
                <div className='md:text-xl text-lg md:my-8 my-5'>
                    <SubTitle/>
                </div>
                <button className='lg:mt-10 mt-8'>
                <Link href="/contact" className="bg-orange-400 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-500 transition text-lg font-semibold">
                Get Started
                </Link>
                </button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default SliderOne;