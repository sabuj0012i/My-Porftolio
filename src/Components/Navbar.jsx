import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const baseLink = "block py-2 px-3 rounded transition-all duration-200";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-sm">
      <div className="max-w-screen-7xl flex items-center justify-between xl:mx-20 mx-auto p-4">
        <a href="" className="flex items-center space-x-3">
          <img src="/Logo.svg" className="h-14 md:h-16" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-6 font-medium text-gray-700">
            {["Home", "About", "Projects", "Skills", "Services"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActive(item);
                    scrollToSection(item.toLowerCase());
                  }}
                  className={`cursor-pointer ${baseLink} ${
                    active === item ? "text-blue-600" : "hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Hire me
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 6l12 12M18 6l-12 12"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Top Shadow Added) */}
      {open && (
        <div className="md:hidden bg-white w-full shadow-[0_-6px_22px_rgba(0,0,0,0.08)] pb-1">
          <ul className="flex flex-col items-center justify-center gap-2 py-2 text-base font-medium w-full">
            {["Home", "About", "Projects", "Skills", "Services"].map((item) => (
              <li key={item} className="w-full">
                <button
                  onClick={() => {
                    setActive(item);
                    scrollToSection(item.toLowerCase());
                  }}
                  className={`${baseLink} w-full text-center py-1.5 px-2.5 ${
                    active === item
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
            <li className="w-full">
              <button
                onClick={() => scrollToSection("contact")}
                className={`${baseLink} w-full text-center py-1.5 px-2.5 text-gray-700 hover:bg-blue-100`}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
