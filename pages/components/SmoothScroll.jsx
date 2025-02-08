"use client"; // Ensure this runs only on the client side

import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    anchors.forEach(anchor => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
    };
  }, []);

  return null; // This component just adds the effect
};

export default SmoothScroll;
