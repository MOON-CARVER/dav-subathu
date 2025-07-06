// components/SchoolAnnouncements.jsx
import React from "react";
import { FaBullhorn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  {
    id: 1,
    title: "Admissions Open for 2025–26 Academic Year",
    date: "July 1, 2025",
  },
  {
    id: 2,
    title: "Independence Day Celebration on August 15th",
    date: "June 28, 2025",
  },
  {
    id: 3,
    title: "Annual Sports Meet Scheduled for September 20",
    date: "June 20, 2025",
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting on August 10",
    date: "July 5, 2025",
  },
];

const SchoolAnnouncements = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 border-blue-600 border-2 rounded-md md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaBullhorn className="text-blue-600 text-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Latest Announcements
          </h2>
        </div>

        <div className="relative h-32 overflow-hidden">
          <motion.div
            className="space-y-4"
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              duration: announcements.length * 6,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {announcements.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md border-l-4 border-blue-600 p-4 rounded-md w-full"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {announcements.map((item) => (
              <div
                key={item.id + "-copy"}
                className="bg-white shadow-md border-l-4 border-blue-600 p-4 rounded-md w-full"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolAnnouncements;
