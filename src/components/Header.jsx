"use client";
import Link from 'next/link';

const Header = () => {
    return (
        <div className="bg-gray-800 w-full z-50 shadow-lg">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-white text-lg font-bold">
                    <Link href="/" className="hover:text-orange-400">YourLogo</Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-white hover:text-orange-400">Home</Link>
                    <Link href="/about" className="text-white hover:text-orange-400">About Us</Link>
                    <Link href="/services" className="text-white hover:text-orange-400">Services</Link>
                    <Link href="/portfolio" className="text-white hover:text-orange-400">Portfolio</Link>
                    <Link href="/contact" className="text-white hover:text-orange-400">Contact Us</Link>
                </nav>

                {/* Call-to-Action Button */}
                <div className="hidden md:block">
                    <Link href="/contact" className="bg-orange-400 text-gray-800 px-4 py-2 rounded hover:bg-orange-500 transition">Get a Quote</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
