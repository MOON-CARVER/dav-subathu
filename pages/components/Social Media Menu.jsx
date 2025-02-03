import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const SocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center p-4">
      <div
        className="bg-white text-red-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={isOpen?()=>setIsOpen(false): ()=>setIsOpen(true)}
      >
        <span className="text-md font-bold">Follow Us</span>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 flex space-x-3"
        >
          <a href="#" className="text-blue-600 text-xl hover:text-blue-800"><FaFacebook /></a>
          <a href="#" className="text-blue-400 text-xl hover:text-blue-600"><FaWhatsapp /></a>
          <a href="#" className="text-pink-500 text-xl hover:text-pink-700"><FaInstagram /></a>
         
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMenu;