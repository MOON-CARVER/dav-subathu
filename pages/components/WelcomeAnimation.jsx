"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun } from "react-icons/fa";
import Image from "next/image";

const WelcomeAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 seconds duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, borderRadius: "50%" }}
          animate={{ opacity: 1, scale: 1, borderRadius: "20px" }}
          exit={{ opacity: 0, scale: 0.5, borderRadius: "50%" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white text-center z-50 p-6 shadow-xl"
        >
          {/* Rotating Sun Effect */}
          <motion.div
            className="absolute w-32 h-32 text-yellow-300 opacity-50"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <FaSun size={128} />
          </motion.div>
          
          {/* School Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white"
          >
            <Image 
              src="/DAV_School.jpg" 
              alt="D. A. V. Subathu" 
              layout="fill" 
              objectFit="cover" 
            />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to
          </motion.h1>
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold mt-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            D. A. V. Subathu
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
