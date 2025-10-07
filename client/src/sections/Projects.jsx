import React, { useState } from 'react';
import { HiExternalLink, HiChevronRight } from 'react-icons/hi';
import { FaGithub, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlask, SiD3Dotjs, SiNasa, SiFirebase, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EduConnect Platform',
      description: 'Learning management system improving educational access in remote areas, aligned with SDG 4.',
      sdg: 4,
      tech: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-400' }
      ],
      github: 'https://github.com/bethwelkiplagat/educonnect',
      demo: 'https://educonnect.demo',
    },
    {
      id: 2,
      title: 'NASA Space Apps Solution',
      description: 'Award-winning space data visualization and analysis addressing climate challenges.',
      sdg: 13,
      tech: [
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
        { name: 'Flask', icon: SiFlask, color: 'text-gray-400' },
        { name: 'D3.js', icon: SiD3Dotjs, color: 'text-orange-500' },
        { name: 'NASA APIs', icon: SiNasa, color: 'text-blue-600' }
      ],
      github: 'https://github.com/bethwelkiplagat/nasa-spaceapps',
      demo: null,
    },
    {
      id: 3,
      title: 'Community Resource Hub',
      description: 'Open source platform connecting communities with essential resources and services.',
      sdg: 11,
      tech: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' }
      ],
      github: 'https://github.com/bethwelkiplagat/community-hub',
      demo: 'https://communityhub.demo',
    },
    {
      id: 4,
      title: 'Sustainable Agriculture App',
      description: 'Mobile application helping farmers optimize resources and connect with markets.',
      sdg: 2,
      tech: [
        { name: 'React Native', icon: FaReact, color: 'text-blue-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' }
      ],
      github: 'https://github.com/bethwelkiplagat/agri-app',
      demo: null,
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: '4', label: 'SDG 4: Education' },
    { id: '13', label: 'SDG 13: Climate' },
    { id: '11', label: 'SDG 11: Communities' },
    { id: '2', label: 'SDG 2: Agriculture' },
    { id: 'fun', label: 'Fun Projects' },
    { id: 'ui', label: 'UI/UX Projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.sdg === parseInt(filter));

  const getSdgColor = (sdg) => {
    const colors = {
      4: 'bg-blue-500',
      13: 'bg-green-500',
      11: 'bg-orange-500',
      2: 'bg-yellow-500'
    };
    return colors[sdg] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building technology that addresses global challenges and creates positive impact
          </p>
        </div>

        {/* Category Filter with Chevrons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all text-sm md:text-base flex items-center space-x-1 ${
                filter === category.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span>{category.label}</span>
              <HiChevronRight className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-green-400/30 hover:transform hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className={`${getSdgColor(project.sdg)} text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium`}>
                    SDG {project.sdg}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="bg-white text-gray-900 p-2 md:p-3 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                        aria-label="Live Demo"
                      >
                        <HiExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      className="bg-white text-gray-900 p-2 md:p-3 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack with Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, index) => {
                    const Icon = techItem.icon;
                    return (
                      <span
                        key={index}
                        className="group/tech bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs md:text-sm border border-gray-600 flex items-center space-x-2 transition-all duration-300 hover:border-gray-500"
                      >
                        <Icon className={`w-3 h-3 md:w-4 md:h-4 transition-colors duration-300 group-hover/tech:${techItem.color}`} />
                        <span>{techItem.name}</span>
                      </span>
                    );
                  })}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 pt-3 border-t border-gray-700/50">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors text-sm"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - No Background */}
        <div className="text-center mt-12 ">
          <p className="text-gray-400 mb-6 text-lg">
            Ready to collaborate on meaningful projects?
          </p>
          <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 text-sm md:text-base"
            >
            <span>Start a Collaboration</span>
            <HiChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;