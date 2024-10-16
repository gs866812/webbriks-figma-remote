"use client";
import aos from "aos";
import { useEffect } from "react";
import Image from "next/legacy/image";

const WebDesignDevelopmentService = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="bg-gray-100">
            {/* Banner Section */}
            <section
                data-aos="fade-up"
                className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('')" }} // Replace with actual banner image
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white px-5">
                    <h1 className="text-4xl font-bold mb-4">
                        Professional Web Design and Development Service
                    </h1>
                    <p className="text-lg">Transform Your Digital Presence with professional web design and development service</p>
                </div>
            </section>

            {/* Introduction */}
            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 mt-16"
            >
                <p className="mb-6">
                    {`At Web Bricks, we specialize in creating stunning, high-performance
                    websites tailored to your business needs. Whether you're starting from
                    scratch or need a redesign, our expert team ensures your site is
                    visually appealing, user-friendly, and optimized for success.`}
                </p>
            </section>

            {/* Services Section */}
            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">
                Custom Web Design and Development Solutions for Your Business
                </h2>
                <p>
                A well-constructed website is more than just aesthetics—it plays a critical role in your business growth. A professional website helps build credibility, improves customer engagement, and enhances conversion rates.It is a vital asset for attracting and retaining customers. At Web Bricks, we are committed to delivering websites that are not only visually stunning but also search engines friendly. 
                </p>
                <p>
                We understand that every business is unique. Our design process is centered around delivering user-friendly, responsive, and visually engaging websites that not only look great but also perform seamlessly across devices. From intuitive navigation to fast load times, we ensure that your website provides an exceptional user experience.
                </p>
              
            </section>
            {/* Services Section */}
            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">
                    Our Web Design Services: Crafting Stunning Websites Tailored to Your
                    Needs
                </h2>
                <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
                    <li>
                        <strong>Custom Web Design:</strong> We create custom websites that
                        are unique to your brand, offering bespoke designs aligned with your
                        vision.
                    </li>
                    <li>
                        <strong>Responsive Design:</strong> We ensure websites look and
                        function beautifully on all devices, ensuring a seamless experience
                        across mobile, tablet, and desktop.
                    </li>
                    <li>
                        <strong>UI/UX Design Optimization:</strong> We focus on intuitive
                        navigation and usability, enhancing both user experience and
                        engagement.
                    </li>
                    <li>
                        <strong>Website Redesign and Enhancements:</strong> We breathe new
                        life into old websites, refreshing their appearance, optimizing
                        functionality, and improving performance.
                    </li>
                    <li>
                        <strong>E-commerce Web Design:</strong> For businesses looking to
                        sell online, we create user-friendly online stores that convert
                        visitors into customers.
                    </li>
                </ul>
            </section>

            {/* Why Choose Us Section */}
            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">
                    Why Choose Web Bricks for Your Web Design and Development Needs?
                </h2>
                <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
                    <li>
                        <strong>Custom Solutions Tailored to Client Needs:</strong> Every
                        project is fully customized to meet your business goals.
                    </li>
                    <li>
                        <strong>Expertise in Latest Web Technologies:</strong> We stay
                        up-to-date with the latest web technologies to offer cutting-edge
                        solutions.
                    </li>
                    <li>
                        <strong>Focus on User Experience and Performance:</strong> We ensure
                        websites are both visually stunning and functional.
                    </li>
                    <li>
                        <strong>Timely Delivery and Post-Launch Support:</strong> We
                        complete projects on time and offer comprehensive support post
                        launch.
                    </li>
                    <li>
                        <strong>Competitive Pricing with Transparent Packages:</strong> Our
                        pricing is transparent, offering great value for your investment.
                    </li>
                </ul>
            </section>

            {/* Process Section */}
            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">
                    Our Process: From Concept to Launch, We’re With You Every Step of the
                    Way
                </h2>
                <div className="space-y-5">
                    <p>
                        Our web design and development process is structured to ensure
                        you’re involved at every key stage, resulting in a website that
                        perfectly aligns with your business goals.
                    </p>
                    <ol className="list-decimal pl-8 mb-4 mt-2 space-y-1">
                        <li>
                            <strong>Consultation & Strategy:</strong> We begin with an
                            in-depth consultation to understand your business, goals, and
                            audience.
                        </li>
                        <li>
                            <strong>Design Phase:</strong> Our designers create a visually
                            stunning, user-friendly website design that reflects your brand’s
                            identity.
                        </li>
                        <li>
                            <strong>Development Phase:</strong> We build your website using
                            the latest web technologies, ensuring fast, secure, and scalable
                            solutions.
                        </li>
                        <li>
                            <strong>Testing & Launch:</strong> Before going live, we conduct
                            thorough testing to ensure everything runs smoothly.
                        </li>
                        <li>
                            <strong>Maintenance & Support:</strong> After launch, we offer
                            ongoing support to ensure your website continues performing at its
                            best.
                        </li>
                    </ol>
                </div>
            </section>

            {/* FAQs Section */}
            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-5">
                    <h3 className="text-2xl font-semibold mb-4">
                        What is included in your web design and development services?
                    </h3>
                    <p>
                        We offer a full range of services, including custom web design,
                        responsive design, SEO optimization, e-commerce functionality,
                        performance optimization, and post-launch support.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">
                        How long does a typical project take?
                    </h3>
                    <p>
                        Small websites typically take 2-4 weeks, while larger projects like
                        e-commerce websites may take 8-12+ weeks, depending on complexity.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">
                        What platforms do you specialize in?
                    </h3>
                    <p>
                        We specialize in a wide range of platforms, including WordPress,
                        Shopify, WooCommerce, Magento, and custom development solutions.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">
                        Do you offer post-launch support?
                    </h3>
                    <p>
                        Yes, we provide ongoing support, including regular updates, security
                        patches, performance monitoring, and feature enhancements.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section
                data-aos="fade-up"
                className="text-center text-gray-100 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('your-cta-background-url')" }} // Replace with actual CTA image
            >
                <div className="py-16 bg-cta">
                    <div className="container mx-auto px-5 lg:px-20">
                        <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
                        <p className="text-xl mb-8">
                            Ready to elevate your digital presence? Contact Web Bricks for
                            professional web design and development services!
                        </p>
                        <a
                            href="/get-quote"
                            className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer"
                        >
                            Request a Quote
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDesignDevelopmentService;
