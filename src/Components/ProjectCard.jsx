import React from "react";
import { FaFolderOpen, FaTools } from "react-icons/fa";

const ProjectCard = ({ image, title, desc, tags, gradient }) => {
  return (
    <div
      className={`rounded-2xl shadow-xl p-6 bg-gradient-to-br ${gradient} backdrop-blur-lg bg-white/10 border border-white/20 text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
    >
      {/* Image */}
      <div className="bg-white rounded-xl p-3 mb-5 shadow-md">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Title with Icon */}
      <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
        <FaFolderOpen className="text-white/90 text-2xl" />
        <span>{title}</span>
      </h3>

      {/* Description */}
      <p className="text-sm text-white/90 leading-relaxed mb-4">{desc}</p>

      {/* Technologies Used */}
      <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
        <FaTools className="text-white/80 text-lg" />
        <span>Technologies Used:</span>
      </h4>

      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
