import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto md:px-4 pt-20 md:pt-30 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight w-full text-left">
          Hi, I’m Sabuj — <br /> Web Application Developer
        </h1>

        <p className="mt-5 md:mt-10 text-gray-600 text-lg w-full text-left">
          I help businesses build fast, scalable and user-friendly web apps
          using React & Node.js.
        </p>

        <div className="flex items-center gap-4 mt-5 md:mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow text-sm md:text-base cursor-pointer">
            Hire Me
          </button>

          <button
            onClick={scrollToProjects}
            className="border px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 text-sm md:text-base cursor-pointer"
          >
            View Projects
          </button>
        </div>
      </div>

      <div className="flex w-full md:w-auto justify-center md:justify-start ml-auto items-center">
        <img
          src="/My photo.jpg"
          alt="Sabuj"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-xl border border-gray-200"
        />
      </div>
    </section>
  );
};

export default Hero;
