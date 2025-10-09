import React, { useState } from 'react';
import { HiExternalLink, HiChevronRight, HiFolder, HiLightBulb } from 'react-icons/hi';
import { FaGithub, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlask, SiD3Dotjs, SiNasa, SiTypescript, SiTailwindcss, SiFastapi, SiJupyter, SiPandas, SiNumpy, SiPostman, SiFramer, SiSpotify, SiFigma, SiReactrouter, SiAuth0, SiSwagger, SiGooglemaps } from 'react-icons/si';
import { FaMapMarkerAlt, FaCode, FaCoffee, FaMusic, FaComments } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      id: 1,
      title: 'LANA - Sustainable Education Platform',
      description: 'Empowering African children with accessible, quality education through innovative technology. Addressing SDG 4 by bridging educational gaps in underserved communities.',
      category: 'sdg',
      sdg: 4,
      tech: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
        { name: 'React Router', icon: SiReactrouter, color: 'text-red-500' },
        { name: 'Auth0', icon: SiAuth0, color: 'text-yellow-500' }
      ],
      github: 'https://github.com/bethwel3001/LANA',
      demo: 'https://dainty-dieffenbachia-0970e7.netlify.app/',
      featured: true,
      image: '/projects/lana-project.png'
    },
    {
      id: 2,
      title: 'NASA Space Apps - Air Quality Forecasting',
      description: 'Award-winning solution for forecasting air quality using TEMPO satellite data, ground sensors, and machine learning. Developed for NASA Space Apps Challenge 2025 to address climate and health challenges.',
      category: 'sdg',
      sdg: 13,
      tech: [
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
        { name: 'FastAPI', icon: SiFastapi, color: 'text-green-400' },
        { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-500' },
        { name: 'Pandas', icon: SiPandas, color: 'text-red-400' },
        { name: 'NumPy', icon: SiNumpy, color: 'text-blue-500' },
        { name: 'NASA APIs', icon: SiNasa, color: 'text-blue-600' },
        { name: 'Swagger', icon: SiSwagger, color: 'text-green-600' },
        { name: 'Geolocation API', icon: SiGooglemaps, color: 'text-red-500' }
      ],
      github: 'https://github.com/bethwel3001/predictions',
      demo: null,
      featured: true,
      award: 'Galactic Problem Solver',
      image: '/projects/nasa-spaceapps.jpg'
    },
    {
      id: 3,
      title: 'ConnectLink - Community Volunteer Platform',
      description: 'Open source platform connecting communities with volunteers and essential resources. Connect - Innovate - Grow through seamless volunteer matching and resource sharing.',
      category: 'sdg',
      sdg: 11,
      tech: [
        { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'Geolocation API', icon: FaMapMarkerAlt, color: 'text-red-400' },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-purple-500' }
      ],
      github: 'https://github.com/bethwel3001/connectlink',
      demo: null,
      featured: true,
      image: '/projects/connectlink.png'
    },
    {
      id: 4,
      title: 'VibeFy - Spotify Mood & Personality Analyzer',
      description: 'Fullstack web app that connects to Spotify, analyzes listening habits, and reveals musical mood, energy, and personality vibes. Built for Vibe Coding Hackathon 2025 courtesy of PLP Africa.',
      category: 'fun',
      tech: [
        { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
        { name: 'Spotify API', icon: SiSpotify, color: 'text-green-500' },
        { name: 'D3.js', icon: SiD3Dotjs, color: 'text-orange-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Cursor', icon: FaCode, color: 'text-purple-400' },
        { name: 'Coffee', icon: FaCoffee, color: 'text-yellow-700' },
        { name: 'Vibes', icon: FaMusic, color: 'text-red-400' }
      ],
      github: 'https://github.com/bethwel3001/VibeVerse',
      demo: null,
      featured: true,
      hackathon: 'Vibe Coding Hackathon 2025 - PLP Africa',
      image: '/projects/vibefy.png'
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
    : filter === 'fun' 
      ? projects.filter(project => project.category === 'fun')
      : filter === 'ui'
        ? projects.filter(project => project.category === 'ui')
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

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  // Empty state component
  const EmptyState = () => {
    const getEmptyStateMessage = () => {
      switch (filter) {
        case '2':
          return {
            icon: HiLightBulb,
            title: 'Agricultural Innovation in Progress',
            message: 'Sustainable agriculture projects are currently in development. Check back soon for impactful solutions in food security and farming technology.',
            action: 'Explore other SDG categories'
          };
        case 'ui':
          return {
            icon: HiFolder,
            title: 'UI/UX Portfolio Coming Soon',
            message: 'Design-focused projects and user experience case studies are being prepared. Meanwhile, explore my development work in other categories.',
            action: 'View Development Projects'
          };
        case 'fun':
          return filteredProjects.length === 0 ? {
            icon: HiLightBulb,
            title: 'Creative Projects in Development',
            message: 'More fun and experimental projects are currently being built. Stay tuned for innovative side projects and creative coding experiments.',
            action: 'Check Back Soon'
          } : null;
        default:
          return {
            icon: HiFolder,
            title: 'No Projects Found',
            message: `No projects available in this category yet. New ${categories.find(cat => cat.id === filter)?.label.toLowerCase()} are in development.`,
            action: 'Browse All Projects'
          };
      }
    };

    const emptyState = getEmptyStateMessage();
    if (!emptyState) return null;

    const Icon = emptyState.icon;

    return (
      <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="bg-gray-800/50 rounded-2xl p-8 max-w-md border border-gray-700/50">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            {emptyState.title}
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {emptyState.message}
          </p>
          <button
            onClick={() => setFilter('all')}
            className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>{emptyState.action}</span>
            <HiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-colors text-sm md:text-base flex items-center space-x-1 ${
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-colors duration-300 hover:border-green-400/30"
              >
                {/* Project Header with Image */}
                <div className="h-48 relative overflow-hidden">
                  {project.image && !imageErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
                          <HiFolder className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-gray-400 text-sm">Project Preview</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 right-4">
                    <span className={`${getSdgColor(project.sdg)} text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm`}>
                      {project.category === 'fun' ? 'Fun Project' : `SDG ${project.sdg}`}
                    </span>
                  </div>
                  
                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm">
                        🏆 {project.award}
                      </span>
                    </div>
                  )}
                  
                  {/* Hackathon Badge */}
                  {project.hackathon && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        {project.hackathon}
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="bg-white text-gray-900 p-2 md:p-3 rounded-full hover:bg-gray-100 transition-colors"
                          aria-label="Live Demo"
                        >
                          <HiExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        className="bg-white text-gray-900 p-2 md:p-3 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techItem, index) => {
                      const Icon = techItem.icon;
                      return (
                        <span
                          key={index}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs md:text-sm border border-gray-600 flex items-center space-x-2 transition-colors hover:border-gray-500"
                        >
                          <Icon className={`w-3 h-3 md:w-4 md:h-4 ${techItem.color}`} />
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
            ))
          ) : (
            <EmptyState />
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm max-w-md mx-auto">
          <p className="text-gray-400 mb-4 text-base">
            Ready to collaborate on meaningful projects?
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2 text-sm"
          >
            <span>Start a Collaboration</span>
            <HiChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;