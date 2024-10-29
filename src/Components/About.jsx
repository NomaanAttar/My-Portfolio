import React from "react";
import Profile from '../assets/profile.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const About = () => (
  <section
    id="about"
    className="py-16 px-6 bg-gradient-to-r from-purple-300 to-blue-400 flex flex-col items-center text-center"
  >
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center justify-center md:w-2/3 lg:w-1/2">
      <img
        src={Profile}
        alt="Profile"
        className="w-36 h-36 md:w-48 md:h-48 rounded-full mb-4 shadow-xl transform transition duration-300 cursor-pointer hover:scale-105 border-4 border-purple-500"
      />
      <div className="md:ml-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 drop-shadow-md">
          About Me
        </h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
          I'm a passionate frontend developer experienced in creating responsive web applications. I enjoy building user-friendly and aesthetically pleasing applications with the latest web technologies.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <FaHtml5 className="text-orange-500 text-3xl" title="HTML5" />
          <FaCss3Alt className="text-blue-500 text-3xl" title="CSS3" />
          <FaJs className="text-yellow-500 text-3xl" title="JavaScript" />
          <FaReact className="text-blue-600 text-3xl" title="React" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
