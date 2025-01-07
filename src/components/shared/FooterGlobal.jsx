import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function FooterGlobal() {
    return (
        <div className="bg-[#2B2121] lg:mt-[250px] relative lg:pt-32 mx-auto">
            <div className='hidden lg:block lg:h-[381px] h-[100px] lg:bg-[url("https://iili.io/2u9QXRe.png")] bg-no-repeat bg-center bg-cover rounded-2xl lg:w-[90%] absolute lg:left-[5%] lg:-top-[200px]'>
                <div className="relative">
                    <div className="w-[570px] h-[198px] flex-col justify-start items-start gap-10 inline-flex py-[91.5px] pl-[73px]">
                        <div className="h-[102px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch text-white text-[40px] font-semibold leading-[48px]">
                                Feel Free To contact Us!
                            </div>
                            <div className="self-stretch text-white text-base font-normal leading-tight">{`Reach out to our team of experts, and we'll get back to you promptly with personalized solutions.`}</div>
                        </div>
                        <div className="self-stretch justify-start items-center gap-6 inline-flex">
                            <Link
                                href={'/get-quote'}
                                className="pl-8 pr-6 py-4 bg-[#2b2121] rounded-lg justify-start items-center gap-4 flex"
                            >
                                <div className="text-white text-base font-normal leading-tight">
                                    Request a Quote
                                </div>
                                <ArrowRightIcon className="text-white w-6 h-6 overflow-hidden" />
                            </Link>
                            <Link
                                href="tel:+17185771232"
                                className="pl-6 pr-8 py-4 bg-white/20 rounded-lg border border-white backdrop-blur-[9.80px] justify-start items-center gap-4 flex"
                            >
                                <PhoneIcon className="text-white w-6 h-6 overflow-hidden" />
                                <div className="text-white text-base font-normal leading-tight">
                                    +1 718 577 1232
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Image
                        src="/images/footer.png"
                        alt="footer image"
                        width={378.45}
                        height={481.96}
                        className="hidden lg:block absolute right-20 xl:right-40 2xl:right-72 -top-[99px]"
                    />
                </div>
            </div>
            <div className="w-[90%] max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-2  lg:items-start lg:justify-between lg:pt-24 pt-5 lg:pb-5 pb-5 text-white text-center lg:text-start">
                <div className="lg:space-y-3 space-y-2  lg:w-[30%] lg:pr-5 flex flex-col items-center lg:items-start border-b pb-5 lg:border-b-0 lg:pb-0 lg:h-[200px] lg:border-r border-gray-800">
                    <Image
                        src="https://iili.io/2TwgNxp.png"
                        alt="webbriks"
                        width={171}
                        height={44}
                        priority={true}
                        className="h-auto w-auto"
                    />
                    <p>
                        We offer a range of services to help your business
                        succeed, from design and development to digital
                        marketing and more.
                    </p>
                    <p className="font-semibold pt-3">
                        Follow Us On Social Media
                    </p>
                    <div className="flex gap-3 items-center justify-start">
                        <a href="/" target="_blank">
                            <FaFacebookF className="" />
                        </a>
                        <a href="/" target="_blank">
                            <FaLinkedinIn className="" />
                        </a>
                    </div>
                </div>

                <div className=" lg:space-y-3 space-y-2 lg:border-r border-gray-800 lg:w-[15%] border-b pb-5 lg:border-b-0 lg:pb-0 lg:h-[200px]">
                    <h2 className="text-xl font-semibold ">Quick Links</h2>
                    <div className="flex flex-col space-y-2 pt-3">
                        <a href="/terms-and-conditions">Term & Condition</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/refund-policy">Refund Policy</a>
                        <a href="/disclaimer-policy">Disclaimer Policy</a>
                    </div>
                </div>

                <div className=" lg:space-y-3 space-y-2 lg:border-r border-gray-800 lg:w-[20%] border-b pb-5 lg:border-b-0 lg:pb-0 lg:h-[200px]">
                    <h2 className="text-xl font-semibold">Quick Links</h2>
                    <div className="flex flex-col space-y-2 pt-3">
                        <a href="/services/graphics-design">Graphics Design</a>
                        <a href="/services/photo-editing">Photo Editing</a>
                        <a href="/services/web-design-and-development">Web Design & Development</a>
                        <a href="/services/virtual-assistant">Virtual Assistant</a>
                    </div>
                </div>

                <div className=" lg:space-y-3 space-y-2 lg:w-[28%] lg:h-[200px] ">
                    <h2 className="text-xl font-semibold pb-3">Contact Us</h2>
                    <p>
                        Email:{' '}
                        <a
                            href="mailto:info@webbriks.com"
                            className="underline"
                        >
                            info@webbriks.com
                        </a>
                    </p>
                    <p>
                        Phone: <a href="tel:+17185771232">+1 718 577 1232</a>
                    </p>
                    <p>
                        Address: Web briks, LLC. 1209, Mountain Road PL NE, STE
                        R, ALBUQUERQUE, NM, 87110
                    </p>
                </div>
            </div>

            <div className="flex max-w-screen-2xl flex-col lg:flex-row items-center text-white lg:w-[90%] mx-auto lg:py-5 py-3">
                <div className="lg:w-[72%]">
                    <p>
                        © {new Date().getFullYear()}{' '}
                        <a href="/" className="underline">
                            Webbriks
                        </a>{' '}
                        LLC. All rights reserved.
                    </p>
                </div>
                <div className="lg:flex items-center gap-3 lg:w-[28%] space-y-2 mt-3 lg:mt-0">
                    <h2 className="text-center lg:text-start">We Accept: </h2>
                    <div className="flex justify-center items-center gap-3">
                        <Image
                            src="https://iili.io/2u9NmZu.png"
                            alt="VISA CARD"
                            width={64}
                            height={35}
                        />
                        <Image
                            src="https://iili.io/2u9OMS2.png"
                            alt="MASTER CARD"
                            width={64}
                            height={35}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
