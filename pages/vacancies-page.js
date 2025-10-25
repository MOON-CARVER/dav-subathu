// "use client"; // Keep only if you're using the App Router (not needed for Pages Router)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  // {
  //   title: "TGT Science",
  //   department: "Academics",
  //   location: "High School Wing",
  //   type: "Full-Time",
  //   qualifications: "Bachelor’s Degree from a recognized university with at least 50% marks in aggregate as well in the concerned subjects. B.Ed. or any equivalent degree from a recognized University. Should pass TET/CTET. In Hindi and English Medium Proficiency in teaching.",
  //   vacancies: 1,
  //   description:
  //     "We are seeking a qualified Science Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  // },
  // {
  //   title: "Physics Lab Assistant",
  //   department: "Laboratory",
  //   location: "Science Block",
  //   type: "Part-Time",
  //   qualifications: "B.Sc in Physics or relevant diploma",
  //   vacancies: 1,
  //   description:
  //     "Assist physics faculty in lab experiments, manage equipment, and ensure lab safety protocols.",
  // },
  // {
  //   title: "Primary English Teacher",
  //   department: "Academics",
  //   location: "Primary Wing",
  //   type: "Full-Time",
  //   qualifications: "B.A in English with D.El.Ed or B.Ed",
  //   vacancies: 3,
  //   description:
  //     "Responsible for teaching English to primary classes with focus on phonetics and grammar. Previous experience preferred.",
  // },
  // {
  //   title: "Receptionist",
  //   department: "Administration",
  //   location: "Admin Office",
  //   type: "Full-Time",
  //   qualifications: "Graduate with good communication and computer skills",
  //   vacancies: 1,
  //   description:
  //     "Manage front desk operations, assist visitors, and coordinate communication for the administration department.",
  // },
  // {
  //   title: "TGT Arts and Craft",
  //   department: "Academics",
  //   location: "High School Wing",
  //   type: "Full-Time",
  //   qualifications: "Graduate with drawing & Painting/Art/Fine Art with minimum two years full time diploma from a recognized institute. Or MA in Drawing and Painting/Fine Arts from a recognized University.",
  //   vacancies: 1,
  //   description:
  //     "We are seeking a qualified Arts & Craft Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  // },
  // {
  //   title: "TGT Hindi (L.T)",
  //   department: "Academics",
  //   location: "High School Wing",
  //   type: "Full-Time",
  //   qualifications: "Bachelor’s Degree from a recognized university with at least 50% marks in aggregate as well in the concerned subjects. B.Ed. or any equivalent degree from a recognized University. Should pass TET/CTET. In Hindi and English Medium Proficiency in teaching.",
  //   vacancies: 1,
  //   description:
  //     "We are seeking a qualified Hindi Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  // },
  // {
  //   title: "TGT English (L.T)",
  //   department: "Academics",
  //   location: "High School Wing",
  //   type: "Full-Time",
  //   qualifications: "Bachelor’s Degree from a recognized university with at least 50% marks in aggregate as well in the concerned subjects. B.Ed. or any equivalent degree from a recognized University. Should pass TET/CTET. In Hindi and English Medium Proficiency in teaching.",
  //   vacancies: 1,
  //   description:
  //     "We are seeking a qualified English Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  // },
  // {
  //   title: "IT Teacher",
  //   department: "Academics",
  //   location: "High School Wing",
  //   type: "Full-Time",
  //   qualifications: `At least 50% marks in aggregate in any of the following: BCA/MCA /B.Tech.(CSE/IT), B.Sc (Computer Science).
  //   (Experience:- minimum 2 year)`,
  //   vacancies: 1,
  //   description:
  //     "We are seeking a qualified IT Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  // },
];

export default function VacanciesPage() {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = ["All", ...new Set(jobs.map((job) => job.department))];

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.department === filter);

  const openModal = (job) => setSelectedJob(job);
  const closeModal = () => setSelectedJob(null);

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20 relative">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-4">
        Current Vacancies
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Explore the latest openings and become a part of our school family.
      </p>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="border border-blue-300 rounded px-4 py-2 text-blue-800 focus:outline-none focus:ring focus:ring-blue-200"
        >
          {departments.map((dept) => (
            <option key={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={index}
            onClick={() => openModal(job)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer border border-blue-200 rounded-lg p-6 shadow hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{job.department}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium mt-2 px-3 py-1 rounded">
              {job.type}
            </span>
            <div className="mt-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors duration-200">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No vacancies available in this department currently.
        </p>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                {selectedJob.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Department:</strong> {selectedJob.department}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> {selectedJob.location}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Type:</strong> {selectedJob.type}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Qualifications:</strong> {selectedJob.qualifications}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Number of Vacancies:</strong> {selectedJob.vacancies}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Description:</strong> {selectedJob.description}
              </p>
              {/* <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
                Apply Now
              </button> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

{/*       
      <h1 className="text-2xl font-bold text-blue-800 text-center my-8">
        Selection Process
      </h1>
      {/* <p className="text-center text-gray-600 mb-8 font-bold">
        Applicants are requested to fill in the Interview Application Form duly completing in all respects. The completed application form has to be submitted at the venue of the interview for verification along with original documents, one set of self-attested copies of requisite documents and two recent passport size photographs. Interview will be conducted and based on the credentials & performance in the personal interview the applicants will be shortlisted.
      </p>

      <h1 className="text-2xl font-bold text-blue-800 text-center my-8">
        How to Apply
      </h1>
      <p className="text-center text-gray-600 mb-8 font-bold">
        Applicants should send their resume on given email address: davsubathu@gmail.com <br></br>
        or WhatsApp(8091905962)<br>
        </br> or by Speed Post on School address. <br></br>
        The date of interview will be given through email/whatsapp and telephone information.
      </p>
 */ }


    </div>
  );
}
