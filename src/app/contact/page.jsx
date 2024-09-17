"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api', { // Correct path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        reset();
        toast.success('Email sent successfully');
      } else {
        toast.error('Failed to send email');
      }
    } catch (error) {
      toast.error('Error: ' + error.message); // Display error message
    }
  };
  


  

  

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('https://iili.io/dhdK6Zb.jpg')" }}
        className="bg-no-repeat bg-bottom bg-cover"
      >
        <div className="text-white py-10 lg:py-16 text-center bg-about-top">
          <div className="container mx-auto px-5">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl mb-6">
              We would love to hear from you! Reach out to us with any
              questions, comments, or business inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Office</h2>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-gray-800 text-2xl mr-3" />
                <p className="text-lg">
                  1234 Your Street, Your City, Your Country
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-gray-800 text-2xl mr-3" />
                <p className="text-lg">Phone: (123) 456-7890</p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-800 text-2xl mr-3" />
                <p className="text-lg">Email: info@webbriks.com</p>
              </div>
              <h3 className="text-2xl font-semibold mb-4 mt-8">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter className="text-2xl" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-lg font-medium text-gray-700 mb-2"
                      htmlFor="firstName"
                    >
                      {/* <FaUser className="inline-block mr-2 text-gray-800" /> */}
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", { required: true })}
                      className={`w-full p-3 border rounded-md ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 mt-2">
                        First Name is required.
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-lg font-medium text-gray-700 mb-2"
                      htmlFor="lastName"
                    >
                      {/* <FaUser className="inline-block mr-2 text-orange-500" /> */}
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", { required: true })}
                      className={`w-full p-3 border rounded-md ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 mt-2">
                        Last Name is required.
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    className="block text-lg font-medium text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    {/* <MdEmail className="inline-block mr-2 text-orange-500" /> */}
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    className={`w-full p-3 border rounded-md ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2">Email is required.</p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-lg font-medium text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    {/* <FaPaperPlane className="inline-block mr-2 text-orange-500" /> */}
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", { required: true })}
                    rows="5"
                    className={`w-full p-3 border rounded-md ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 mt-2">Message is required.</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-10">Find Us Here</h2>
          <div className="w-full h-64 md:h-96">
            <iframe
              className="w-full h-full border-0 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0118891254337!2d144.9537353159248!3d-37.816178979751294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a9089c3c50a!2sYour%20Office!5e0!3m2!1sen!2sau!4v1590123456789!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="bg-orange-500 py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-5">Ready to Get Started?</h2>
          <p className="text-lg mb-10">
            Contact us today to discuss how we can help your business thrive.
          </p>
          <a
            href="/contact"
            className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors inline-block"
          >
            Contact Us Now
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
