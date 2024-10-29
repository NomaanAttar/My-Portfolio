import React, { useEffect, useState } from "react";
import { FaSpinner } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/NomaanAttar/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
      <p className="text-gray-600 flex-grow">{project.description || "No description available."}</p>
      <a href={project.html_url} className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
    </div>
  );

  return (
    <section id="projects" className="py-16 px-4 md:px-6 bg-gradient-to-r from-purple-300 to-blue-400">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-black drop-shadow-lg">Projects</h2>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <FaSpinner className="animate-spin h-10 w-10 text-white" />
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
