"use client";
import aos from "aos";
import { useEffect } from "react";
import Image from "next/legacy/image";

const PhotoEditingServicePage = () => {
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
            Best Photo Editing Services at Affordable Pricing
          </h1>
          <p className="text-lg">Stunning visuals to make a lasting impression</p>
        </div>
      </section>

      {/* Introduction */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 mt-16"
      >
        <p className="mb-6">
          Stunning visuals are essential for making a lasting impression. For this, you must need professional photo editing services that balance quality and affordability. At Web Briks LLC, we specialize in photo editing solutions that breathe new life into your images. Our experts work hard to reduce your editing pressure without losing quality. We are available 24/7 to assist you with photo editing projects.
        </p>
      </section>

      {/* Our Photo Editing Services */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">Our Photo Editing Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="https://iili.io/dNommHQ.png"
                width={400}
                height={300}
                alt="Background Removal"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Background Removal</h3>
              <p>
                Our background removal service ensures your images have a clean, professional look. Whether you need white, transparent, or a custom background, we deliver flawless results.
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
                alt="Clipping Path Service"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Clipping Path Service</h3>
              <p>
                Our clipping path service ensures precise image cutouts with smooth, accurate edges around even the most complex shapes.
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
                alt="Color Correction Service"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Color Correction Service</h3>
              <p>
                Our color correction service enhances the visual quality of your images by adjusting colors, brightness, contrast, and tones to achieve a vibrant, professional look.
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
                alt="Photo Retouching Service"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Photo Retouching Service</h3>
              <p>
                We enhance images by removing blemishes, smoothing skin, and correcting imperfections for a flawless finish.
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
                alt="Ghost Mannequin Service"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Ghost Mannequin Service</h3>
              <p>
                We provide a seamless, professional look for fashion and apparel images by removing mannequins or models from product photos, giving the clothing a 3D, hollow effect.
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
                alt="Shadow Creation Service"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Shadow Creation Service</h3>
              <p>
                Our shadow creation service enhances the depth and realism of your images by adding natural-looking shadows that complement the subject.
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
                alt="Product Photo Editing Service"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Product Photo Editing Service
              </h3>
              <p>
                We transform your product images into high-quality, market-ready visuals, ensuring your products look flawless and professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">
          Industries We Serve with Our Photo Editing Services
        </h2>
        <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
          <li>
            <strong>Product Photography:</strong> Enhance product images to attract customers and increase conversion rates with our precise editing services.
          </li>
          <li>
            <strong>Fashion & Apparel:</strong> Showcase clothing with ghost mannequin and model retouching services to make your brand stand out.
          </li>
          <li>
            <strong>Real Estate:</strong> Elevate property listings with stunning image enhancements to captivate potential buyers.
          </li>
          <li>
            <strong>Advertising & Marketing:</strong> Our services help create visually striking promotional materials that resonate with target audiences.
          </li>
          <li>
            <strong>Food & Beverage:</strong> Make dishes irresistible with expert photo editing that highlights colors and textures.
          </li>
        </ul>
      </section>

      {/* Our Editing Process */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">Our Editing Process</h2>
        <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
          <li>
            <strong>Quotation Request:</strong> {`We listen to your requirements and analyze the photo to predict the full batch's needs.`}
          </li>
          <li>
            <strong>Editing:</strong> Once our quotation is approved, we start enhancing your photos.
          </li>
          <li>
            <strong>Review & Revisions:</strong> We provide multiple revisions to make sure you are 100% satisfied with the outcome.
          </li>
          <li>
            <strong>Delivery:</strong> We deliver high-quality images in your preferred format.
          </li>
        </ul>
      </section>

      {/* Why Work with Web Briks LLC */}
      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">Why Work with Web Briks LLC?</h2>
        <p>
          Choosing Web Briks LLC means partnering with a dedicated team committed to elevating your visual content. Our skilled editors bring years of industry experience, ensuring that every image is expertly crafted to meet your specific needs. We offer affordable pricing without compromising on quality, allowing you to achieve stunning results within your budget.
        </p>
        <p className="mt-4">
          In addition to competitive rates, we pride ourselves on fast turnaround times, ensuring your projects are completed promptly. We also utilize the latest editing software and techniques, staying ahead of industry trends to deliver modern, eye-catching visuals.
        </p>
        <p className="mt-4">
          We also utilize the latest editing software and techniques, staying ahead of industry trends to deliver modern, eye-catching visuals. With a focus on customer satisfaction, we tailor our services to fit your unique requirements, making us your ideal partner for all photo editing needs. </p>
        <p className="mt-4">
          Let us take your photos to the next level. Contact Web Briks LLC today to get a custom quote for our Photo Editing Service!
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
              Let us take your photos to the next level. Contact Web Briks LLC today to get a custom quote for our Photo Editing Service!
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

export default PhotoEditingServicePage;
