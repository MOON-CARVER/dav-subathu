// components/SchoolFooter.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const SchoolFooter = () => {
  return (
    <footer className="relative w-full h-auto md:h-[28rem] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/School Background.png" // Update this path
          alt="School background"
          className="w-full h-full object-cover"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Shaping Bright Futures
        </h2>
        <p className="max-w-2xl text-base md:text-lg mb-6">
          Our school is committed to providing quality education in a nurturing
          environment. We empower students with knowledge, values, and life
          skills.
        </p>

        {/* Contact Us Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition duration-300 mb-6">
          Contact Us
        </button>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-yellow-400">
            <FaFacebookF size={20} />
          </a>
          <a href="https://wa.me/9317427672?text=Hy%2C%0AI%20am%20interested%20to%20admit%20my%20child%20in%20your%20school." target="_blank" aria-label="Twitter" className="hover:text-yellow-400">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-yellow-400">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;
