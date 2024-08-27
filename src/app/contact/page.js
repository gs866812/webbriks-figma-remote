'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form submission here, e.g., send the data to an API or email.
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{backgroundImage: "url('https://iili.io/dhdK6Zb.jpg')"}} className='bg-no-repeat bg-bottom bg-cover'>
      <div className="text-white py-10 lg:py-16 text-center bg-about-top" >
        <div className="container mx-auto px-5">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-6">
          We would love to hear from you! Reach out to us with any questions, comments, or business inquiries.
          </p>
        </div>
      </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Office</h2>
              <p className="text-lg mb-4">1234 Your Street, Your City, Your Country</p>
              <p className="text-lg mb-4">Phone: (123) 456-7890</p>
              <p className="text-lg mb-4">Email: info@yourcompany.com</p>
              <h3 className="text-2xl font-semibold mb-4 mt-8">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: true })}
                    className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-red-500 mt-2">Name is required.</p>}
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: true })}
                    className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 mt-2">Email is required.</p>}
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    {...register('message', { required: true })}
                    rows="5"
                    className={`w-full p-3 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 mt-2">Message is required.</p>}
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
    </div>
  );
};

export default Contact;
