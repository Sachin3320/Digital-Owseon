import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = () => {
  // State for Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form Data:", formData); // Log form data to console
  };

  return (
    <div className="w-full min-h-screen mt-8 flex items-center justify-center bg-gray-100 p-4 md:p-8">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row bg-white w-2/3   shadow-2xl rounded-lg shadow-black">
        {/* Left Section (Fixed Size on Larger Screens) */}
        
            <div className="bg-[#21697D] w-full md:w-[45%] lg:w-[50%] min-h-[200px] md:min-h-[300px] rounded-lg flex flex-col items-start justify-center text-white p-6 md:p-8 relative">
            {/* Floating Circle */}
            <div
                className="absolute -bottom-0 right-[-60px] w-20 h-20 md:w-40 md:h-40 rounded-full"
                style={{
                background:
                    "linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)",
                }}
            ></div>

            <div className="absolute bottom-35 right-[60px] w-20 h-20 md:w-20 md:h-20 bg-white opacity-20 rounded-full"></div>

            {/* Title & Description */}
            <h1 className="font-bold text-[3vh] md:text-2xl mb-2">
                What’s on your mind?
            </h1>
            <p className="text-sm md:text-base mb-6">
                We’re here to help! Tell us what you’re looking for, and we’ll get
                you connected to the right people.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91 9031215222
                </p>
                <p className="flex items-center gap-2">
                <FaEnvelope /> info@digitalwiseon.com
                </p>
                <p className="flex items-start gap-2">
                <FaMapMarkerAlt /> 4th Floor, Govind Bhawan, New Dark Bunglow
                Road, Patna-800001, Bihar, India
                </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
                <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                <FaTwitter className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
                <FaLinkedin className="cursor-pointer hover:text-gray-300" />
            </div>
            </div>

            {/* Right Section - Contact Form (Flexible Size) */}
            <div className="w-full md:w-[55%] lg:w-[60%] flex-grow p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#21697D]">
                Get in <span className="text-black">Touch</span>{" "}
            </h2>
            <p className="text-sm md:text-base mb-4">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                molestie vel, ornare non id blandit netus.
            </p>

            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-neutral-300 rounded-xl w-full text-neutral-800 focus:border-[#21697D] focus:outline-none"
                />
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-neutral-300 rounded-xl w-full text-neutral-800 focus:border-[#21697D] focus:outline-none"
                />
                <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 border border-neutral-300 rounded-xl w-full text-neutral-800 focus:border-[#21697D] focus:outline-none"
                />
                <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border border-neutral-300 rounded-xl w-full text-neutral-800 focus:border-[#21697D] focus:outline-none h-24"
                ></textarea>
                <button
                type="submit"
                className="bg-[#21697D] text-white py-3 cursor-pointer hover:scale-105 active:scale-95 duration-700 rounded-2xl hover:bg-[#1b5d6c]"
                >
                SEND
                </button>
            </form>
            </div>
        </div>
      
    </div>
  );
};

export default ContactForm;