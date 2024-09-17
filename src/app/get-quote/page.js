"use client";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "react-toastify";


const GetQuote = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const [formData, setFormData] = useState({
    services: {
      graphicsDesign: false,
      photoEditing: false,
      webDevelopment: false,
      virtualAssistant: false,
      videoEditing: false,
      digitalMarketing: false,
    },
    file: null,
    driveLink: "",
    fullName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleCheckboxChange = (service) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [service]: !formData.services[service],
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10485760 && /image\/(png|jpeg|gif)/.test(file.type)) {
      setFormData({ ...formData, file });
    } else {
      toast.error("File must be a PNG, JPG, GIF and up to 10MB.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { services, fullName, email, phone } = formData;
    const isServiceSelected = Object.values(services).some((service) => service);
    return isServiceSelected && fullName && email && phone;
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.warn("Please fill all required fields and select at least one service.");
      return;
    }

    // Submit form data
    // console.log(formData); // Simulating form data submission
    toast.success("Thank you. Your info has been submitted.");

    // Reset the form data
    setFormData({
      services: {
        graphicsDesign: false,
        photoEditing: false,
        webDevelopment: false,
        virtualAssistant: false,
        videoEditing: false,
        digitalMarketing: false,
      },
      file: null,
      driveLink: "",
      fullName: "",
      email: "",
      phone: "",
      website: "",
      message: "",
    });

    // Redirect to the thank you page or home page
    router.push('/'); // Redirect to the Thank You page, replace with your actual route
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-8">Get a Quote</h1>
      <form className="w-full lg:w-3/4 mx-auto" onSubmit={handleSubmit}>
        {/* Services Section */}
        <h2 className="text-2xl font-semibold mb-4">Services You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={formData.services.graphicsDesign}
              onChange={() => handleCheckboxChange("graphicsDesign")}
            />
            Graphics Design
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={formData.services.photoEditing}
              onChange={() => handleCheckboxChange("photoEditing")}
            />
            Photo Editing
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={formData.services.webDevelopment}
              onChange={() => handleCheckboxChange("webDevelopment")}
            />
            Web Development
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={formData.services.virtualAssistant}
              onChange={() => handleCheckboxChange("virtualAssistant")}
            />
            Virtual Assistance
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={formData.services.videoEditing}
              onChange={() => handleCheckboxChange("videoEditing")}
            />
            Video Editing
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={formData.services.digitalMarketing}
              onChange={() => handleCheckboxChange("digitalMarketing")}
            />
            Digital Marketing
          </label>
        </div>

        {/* File Upload Section */}
        <h2 className="text-2xl font-semibold mb-4">Upload Files or Enter Drive Link</h2>
        <div className="mb-8">
          <div
            className="w-full h-36 p-3 border-dotted border-2 border-gray-400 mb-4 flex justify-center items-center text-center"
            style={{ position: "relative" }}
          >
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .gif"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
            <div>
              <Image width={30} height={30} src="https://iili.io/d6qpdR2.png" alt="upload icon" className="mx-auto mb-2" />
              <p className="text-green-600 font-semibold">Upload a file</p>
              <p className="text-gray-600 text-sm">or drag and drop</p>
              <p className="text-gray-600 text-sm">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {/* Display file name if uploaded */}
          {formData.file && (
            <p className="text-sm text-gray-600 mt-2">
              <strong>Uploaded file:</strong> {formData.file.name}
            </p>
          )}
        </div>

        <div className="mb-8">
          <p className="text-sm font-semibold mb-2">Or enter drive link:</p>
          <input
            type="text"
            name="driveLink"
            placeholder="Google Drive / Dropbox / OneDrive"
            className="w-full p-3 border rounded-md"
            value={formData.driveLink}
            onChange={handleInputChange}
          />
        </div>

        {/* User Information Section */}
        <h2 className="text-2xl font-semibold mb-4">Your Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-3 border rounded-md"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-md"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full p-3 border rounded-md"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Website (optional)"
            className="w-full p-3 border rounded-md"
            value={formData.website}
            onChange={handleInputChange}
          />
        </div>

        {/* Message Section */}
        <div className="mb-8">
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 border rounded-md"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-400 text-gray-900 py-3 px-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Submit Quote Request
        </button>
      </form>
    </div>
  );
};

export default GetQuote;
