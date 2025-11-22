import React from "react";
import { FaFolderOpen, FaTools } from "react-icons/fa";
("react");
import { motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Varsity Research Collaboration Hub",
    desc: "A platform where students can explore published research papers while teachers can upload their own theses or publications.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/research-collaboration.png",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Event Management System",
    desc: "A system where users can request event creation, view events, and admins can approve them.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
    ],
    image: "/event-management.png",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "University Admission Result Platform",
    desc: "View admission results, use calendars, visualize charts, and allow admins to publish updates.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/result-platform.png",
    gradient: "from-teal-500 to-emerald-600",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="max-w-screen-7xl mx-auto md:px-4 md:py-10">
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 px-4 md:mb-15 text-center">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <ProjectCard {...project} />
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
