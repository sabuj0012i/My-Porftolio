import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaReact,
  FaCubes,
  FaDatabase,
  FaMobileAlt,
  FaPalette,
  FaBug,
  FaTools,
  FaSyncAlt,
  FaCloudUploadAlt,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, desc, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
  >
    <div className="text-4xl mb-4">
      <Icon style={{ color }} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const servicesData = [
  {
    icon: FaLaptopCode,
    color: "#2563EB",
    title: "Full-Stack Web Apps (Laravel + Inertia.js)",
    desc: "Complete full-stack applications with modern SPA experience using Laravel & Inertia.js.",
  },
  {
    icon: FaServer,
    color: "#7C3AED",
    title: "Laravel API Development",
    desc: "Secure and scalable REST APIs designed for mobile, web apps & external integrations.",
  },
  {
    icon: FaCubes,
    color: "#111111", // Updated to match Next.js branding
    title: "Next.js Full-Stack Projects",
    desc: "SEO-friendly, fast, and production-grade full-stack applications built with Next.js.",
  },
  {
    icon: FaReact,
    color: "#61DAFB",
    title: "React Frontend Development",
    desc: "Modern, responsive, and high-performance UI development using React & Tailwind CSS.",
  },
  {
    icon: FaDatabase,
    color: "#10B981",
    title: "Database Design (MySQL / PostgreSQL)",
    desc: "Database schema planning, optimization, migration & performance tuning.",
  },
  {
    icon: FaMobileAlt,
    color: "#EF4444",
    title: "Responsive UI Implementation",
    desc: "Pixel-perfect responsive UI for all screen sizes including mobile, tablet, and desktop.",
  },
  {
    icon: FaPalette,
    color: "#EC4899",
    title: "UI/UX Revamp & Redesign",
    desc: "Modernizing outdated websites with fresh, clean, user-friendly UI/UX designs.",
  },
  {
    icon: FaBug,
    color: "#DC2626",
    title: "Bug Fixing & Debugging",
    desc: "Fix issues in existing codebases, refactor unstable code and enhance reliability.",
  },
  {
    icon: FaTools,
    color: "#6B7280",
    title: "Performance Optimization",
    desc: "Speed improvements, database optimization, caching, and overall system performance boost.",
  },
  {
    icon: FaSyncAlt,
    color: "#0EA5E9",
    title: "Project Migration & Refactoring",
    desc: "Move old systems to modern tech stacks or refactor messy codebases to clean architecture.",
  },
  {
    icon: FaCloudUploadAlt,
    color: "#3B82F6",
    title: "Deployment (VPS / Shared Hosting)",
    desc: "Deploy full-stack apps on VPS, cPanel, cloud servers or any hosting environment.",
  },
  {
    icon: FaLock,
    color: "#0EA5E9", // Updated to a more security-appropriate color
    title: "Security Enhancements",
    desc: "Implement authentication, authorization, encryption, validation & security best practices.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-screen-7xl mx-auto  md:px-4 py-7 md:py-15"
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mt-8 md:mt-0 mb-7 md:mb-15 text-center">
        My Professional Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
