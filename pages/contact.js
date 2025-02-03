import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";


export default function Contact() {
    return (
        <div>
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-lg md:text-xl">
              Have questions or need assistance? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Form and Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows="6"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
  
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Feel free to reach out to us via phone, email, or visit us at our
                campus.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 m-2">
                
                <FaPhone className="w-4 h-4 "/>
               
                  <p className="text-gray-800 font-medium">
                   +91 93174-27672, 80919-05962
                  </p>
                  
                </div>
                
                <div className="flex items-center gap-3 m-2">
                  <IoMailSharp className="w-4 h-4 "  />
               
                  <span className="text-gray-800 font-medium">
                    davsubathu@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-1 m-1 ">
                <IoLocation className="w-6 h-6 mr-1" />
                  <span className="text-gray-800 font-medium">
                  Vill-Kalyan (Near Kainchi Mod),P. O. Subathu, Teh. Kasauli,Distt. Solan, HP-173206
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </section>
  
        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Visit Us
            </h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
 
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109452.05172047639!2d76.82383060455321!3d30.987874141088334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390563ea20ecb7ad%3A0x2f4eaac9fbbc3e74!2sD.A.V.%20Subathu!5e0!3m2!1sen!2sin!4v1737188087364!5m2!1sen!2sin" 

                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="border-0"
                >
              </iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }