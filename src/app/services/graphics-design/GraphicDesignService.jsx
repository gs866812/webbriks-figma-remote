"use client";
import aos from "aos";
import { useEffect } from "react";
import Image from "next/legacy/image";

const GraphicDesignService = () => {
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
            Best Graphic Design Services at Affordable Pricing
          </h1>
          <p className="text-lg">Elevate your brand with stunning visuals</p>
        </div>
      </section>

      {/* Introduction */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 mt-16"
      >
        <p className="mb-6">
          Your brand deserves more than just visuals—it deserves designs that captivate and convert. At Web Briks LLC, our graphic design services are crafted to bring your vision to life. Our creative team blends aesthetics with strategy to produce eye-catching designs aligned with your business goals.
        </p>
      </section>

      {/* Why Choose Us */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Our Graphic Design Services?
        </h2>
        <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
          <li>
            <strong>Expert Designers:</strong> Our team is made up of seasoned professionals who are experts in their fields.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> We offer custom-made designs for your brand.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> High-quality design at competitive rates.
          </li>
        </ul>
      </section>

      {/* Services Breakdown */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">
          Our Comprehensive Graphic Design Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Logo Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Logo Design</h3>
              <p>
                {`Your logo is the cornerstone of your brand’s identity. We craft logos that are visually appealing and meaningful, reflecting the essence of your business.`}
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Brand Identity Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Brand Identity Design
              </h3>
              <p>
                We develop full brand identity systems, including color schemes, typography, and visual guidelines that ensure consistency across all channels.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Banner Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Banner Design</h3>
              <p>
                We create visually striking custom banners tailored to your marketing goals for events, online advertising, and storefront displays.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Poster Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Poster Design</h3>
              <p>
                Our poster designs are crafted to convey your message clearly while making a bold visual statement.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Flyer Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Flyer Design</h3>
              <p>
                We make sure your flyer stands out with engaging visuals and compelling copy.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Brochure Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Brochure Design</h3>
              <p>
                We design multi-page brochures that ensure your message is engaging and informative.
              </p>
            </div>
          </div>

          {/* Service 7 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Social Media Graphics"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Social Media Graphics
              </h3>
              <p>
                We create custom social media graphics optimized for engagement across all platforms.
              </p>
            </div>
          </div>

          {/* Service 8 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Website Graphics"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Website Graphics</h3>
              <p>
                Our website graphics are designed to enhance both aesthetics and functionality.
              </p>
            </div>
          </div>

          {/* Service 9 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Business Card Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Business Card Design
              </h3>
              <p>
                {`We design professional and sleek business cards that reflect your brand's identity.`}
              </p>
            </div>
          </div>

          {/* Service 10 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Product Packaging Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Product Packaging Design
              </h3>
              <p>
                We design visually compelling and functional packaging that makes your product stand out.
              </p>
            </div>
          </div>

          {/* Service 11 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Marketing Materials Design"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Marketing Materials Design
              </h3>
              <p>
                We create a wide range of marketing materials such as brochures, catalogs, and mail pieces that are on-brand and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">How We Work</h2>
        <p>
          {`We start by understanding your brand, your goals, and your audience. From there, our expert designers develop concepts that align with your vision. We prioritize communication and feedback, ensuring you're involved at every step of the design process.`}
        </p>
      </section>

      {/* Call to Action */}
      <section
        data-aos="fade-up"
        className="text-center text-gray-100 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('https://iili.io/dhdK4wu.jpg')" }}
      >
        <div className="py-16 bg-cta">
          <div className="container mx-auto px-5 lg:px-20">
            <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
            <p className="text-xl mb-8">
            {`Ready to transform your brand's visual identity? Contact Web Briks Inc. for graphic design services that leave a lasting impact. Let's create something extraordinary together!`}
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

export default GraphicDesignService;
