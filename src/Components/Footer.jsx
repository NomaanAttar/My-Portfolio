import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 py-2 text-center text-white">
    <div className="flex justify-center items-center mb-1">
      <a href="https://github.com/NomaanAttar" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaGithub className="h-6 w-6 text-white hover:text-gray-400 transition duration-200" />
      </a>
      <a href="https://www.linkedin.com/in/nomaan-attar-410137313" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaLinkedin className="h-6 w-6 text-white hover:text-gray-400 transition duration-200" />
      </a>
    </div>
    <p className="text-xs md:text-sm">© {new Date().getFullYear()} Nomaan Attar. All Rights Reserved.</p>
  </footer>
);

export default Footer;
