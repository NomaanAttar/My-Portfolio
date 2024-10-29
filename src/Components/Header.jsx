import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4 fixed top-0 w-full z-20 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none hover:bg-purple-600 rounded p-2 transition-all"
          aria-label="Toggle menu"
        >
          <FaBars className="h-5 w-5" />
        </button>
        <ul
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static bg-indigo-700 md:bg-transparent top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block md:inline-block text-white py-2 px-4 hover:bg-purple-600 rounded transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
