import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiVercel,
  SiDocker,
} from "react-icons/si";
import { FaGithub, FaGitAlt, FaKey } from "react-icons/fa";

const SkillBox = ({ icon: Icon, label, color }) => {
  return (
    <div className="flex flex-col items-center justify-center w-24 h-28 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {Icon && <Icon className="text-4xl md:text-5xl mb-2" style={{ color }} />}
      <span className="text-gray-700 text-sm md:text-base text-center">
        {label}
      </span>
    </div>
  );
};

const Expertise = () => {
  return (
    <section
      id="skills"
      className="max-w-screen-7xl mx-auto px-4 pt-10 md:pt-20 pb-15 "
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-7 md:mb-15">
        Expertise
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Frontend */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBox icon={SiReact} label="React" color="#61DAFB" />
            <SkillBox icon={SiNextdotjs} label="Next.js" color="#000000" />
            <SkillBox icon={SiTailwindcss} label="Tailwind" color="#38BDF8" />
            <SkillBox icon={null} label="Shadcn UI" />
            <SkillBox icon={SiTypescript} label="TypeScript" color="#3178C6" />
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Backend</h3>
          <div className="flex flex-wrap justify-center gap-4 ">
            <SkillBox icon={SiNodedotjs} label="Node.js" color="#83CD29" />
            <SkillBox icon={SiExpress} label="Express" color="#000000" />
            <SkillBox icon={SiMongodb} label="MongoDB" color="#47A248" />
            <SkillBox icon={FaKey} label="Auth" color="#F59E0B" />
            <SkillBox icon={SiPostman} label="REST APIs" color="#FF6C37" />
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBox icon={FaGitAlt} label="Git" color="#F05032" />
            <SkillBox icon={FaGithub} label="GitHub" color="#000000" />
            <SkillBox icon={SiFigma} label="Figma" color="#0ACF83" />
            <SkillBox icon={SiVercel} label="Vercel" color="#000000" />
            <SkillBox icon={SiDocker} label="Docker" color="#2496ED" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
