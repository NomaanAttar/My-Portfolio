import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Git", icon: FaGitAlt },
  { name: "MongoDB", icon: FaDatabase },
  { name: "MySQL", icon: FaDatabase },
];

const Skills = () => (
  <section id="skills" className="py-16 px-4 md:px-6 bg-gradient-to-r from-purple-300 to-blue-400">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-black drop-shadow-lg">Skills</h2>
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-4xl mx-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform cursor-pointer hover:scale-105 hover:shadow-xl"
        >
          <skill.icon className="h-16 w-16 text-purple-600 mb-2 mx-auto transition-transform duration-200 hover:scale-125" />
          <h3 className="font-semibold text-gray-800 text-lg">{skill.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
