import React from "react";

const Hero = () => (
  <section
    className="bg-gradient-to-r from-purple-300 to-blue-400 h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white relative pt-24"
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 p-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Hello, I'm <span className="text-purple-400">Nomaan Attar</span>
      </h2>
      <p className="text-lg md:text-2xl mb-6 opacity-90">
        Frontend Developer | React Enthusiast
      </p>
      <a
        href="#projects"
        className="bg-purple-500 px-8 py-4 rounded-lg text-white font-semibold hover:bg-purple-700 transition transform hover:scale-105"
      >
        View My Work
      </a>
    </div>
  </section>
);

export default Hero;
