// components/SchoolAnnouncements.jsx
import React from "react";
import { FaBullhorn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  {
    id: 7,
    title: "PTM",
    date: "July 19, 2025",
  },

  {
    id: 1,
    title: "Admissions Open for 2025–26 Academic Year",
    date: "Present",
  },
  {
    id: 2,
    title: "Independence Day Celebration",
    date: "August 15, 2025",
  },
  {
    id: 3,
    title: `Haryali Teej`,
    date: "August 23, 2025",
  },
  {
    id: 4,
    title: "Ganesh Chaturthi",
    date: "August 27, 2025",
  },
    {
    id: 5,
    title: "National Sports Day",
    date: "August 29, 2025",
  },
    {
    id: 6,
    title: "Interhouse Sports Competition",
    date: "August 30, 2025",
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
                <h3 className="text-lg font-semibold text-gray-800 display-linebreak">
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
