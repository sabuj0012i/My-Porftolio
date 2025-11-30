import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const ContactWithMe = () => {
  return (
    <section id="contact" className="max-w-screen-7xl mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
      >
        📞 Contact With Me
      </motion.h2>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Phone */}
        <div className="flex flex-col items-center text-center gap-2 text-lg text-gray-700">
          <FaPhoneAlt className="text-blue-600 text-4xl" />
          <span className="text-base md:text-lg">+880 1325889717</span>
        </div>

        {/* Gmail */}
        <div className="flex flex-col items-center text-center gap-2 text-lg text-gray-700">
          <FaEnvelope className="text-red-500 text-4xl" />
          <div className="flex flex-col text-base md:text-lg">
            <span>sabujdevweb@gmail.com</span>
            <span>cse1905040brur@gmail.com</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center gap-2 text-lg text-gray-700">
          <FaMapMarkerAlt className="text-green-600 text-4xl" />
          <a
            href="https://www.google.com/maps/place/Rangpur,+Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-base md:text-lg"
          >
            Rangpur, Bangladesh
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mt-10 justify-center text-3xl">
        <a
          href="https://www.linkedin.com/in/sabuj-hossain-6135a7326/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sabuj0012i"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:scale-110 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/8801325889717"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.upwork.com/freelancers/~01b59b6fcbd00269cd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6fda44] font-bold text-xl hover:scale-110 transition"
        >
          UP
        </a>
      </div>

      {/* Hire Me */}
      <div className="text-center mt-12">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          🚀 Want to Work With Me?
        </h3>

        <p className="text-gray-600 p-4 text-base md:text-lg max-w-2xl mx-auto mb-6">
          I'm available for freelance projects, long-term contracts, and
          full-stack development work. Let's build something amazing together.
        </p>

        <a
          href="https://www.upwork.com/freelancers/~01b59b6fcbd00269cd"
          className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Hire Me on Upwork
        </a>
      </div>
    </section>
  );
};

export default ContactWithMe;
