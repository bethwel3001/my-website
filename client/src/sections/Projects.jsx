import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp, HiFolderOpen } from 'react-icons/hi';
import { projects, categories } from '../data/projects';

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden group border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:border-gray-600/80">
    <div className="overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 text-base mb-4 min-h-[5rem]">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <span key={tech.name} className="flex items-center text-xs bg-gray-700/80 text-green-300 px-3 py-1 rounded-full">
              <Icon className="mr-2" />
              {tech.name}
            </span>
          );
        })}
      </div>
      <div className="flex justify-end items-center">
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              <FaGithub className="w-6 h-6" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              <FaExternalLinkAlt className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const resultsRef = useRef(null);

  useEffect(() => {
    const initialProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    setFilteredProjects(initialProjects);
  }, []);

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
    const filtered = newFilter === 'all' ? projects : projects.filter(p => p.category === newFilter);
    setFilteredProjects(filtered);
    setVisibleProjects(6);
    
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const showLessProjects = () => {
    setVisibleProjects(6);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">A selection of projects that I'm proud of. Each one is a step in my journey as a developer.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleFilterClick(category.id)}
              className={`px-5 py-2 text-base md:px-6 md:py-2 md:text-lg rounded-full font-medium transition-all duration-300 ${filter === category.id ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
              {category.label}
            </button>
          ))}
        </div>

        <div ref={resultsRef} className="scroll-mt-24">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProjects.slice(0, visibleProjects).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 px-6 bg-transparent border-2 border-dashed border-gray-700 rounded-lg animate-fadeInUp">
              <HiFolderOpen className="mx-auto text-gray-600 w-20 h-20 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">No Projects Found</h3>
              <p className="text-gray-400 text-lg">There are no projects in this category yet. Check back later!</p>
            </div>
          )}

          {filteredProjects.length > 6 && (
            <div className="text-center mt-16">
              {visibleProjects < filteredProjects.length ? (
                <button onClick={showMoreProjects} className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto shadow-lg shadow-green-500/30">
                  View More <HiChevronDown className="ml-2 w-5 h-5" />
                </button>
              ) : (
                <button onClick={showLessProjects} className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center mx-auto">
                  View Less <HiChevronUp className="ml-2 w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
