import React, { useState } from 'react';
import { HiExternalLink, HiChevronRight, HiFolder } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: '4', label: 'SDG 4: Education' },
    { id: '13', label: 'SDG 13: Climate' },
    { id: '11', label: 'SDG 11: Communities' },
    { id: '2', label: 'SDG 2: Agriculture' },
    { id: 'fun', label: 'Fun Projects' },
    { id: 'ui', label: 'UI/UX Projects' }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            This section is currently under development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-3 md:px-6 md:py-3 rounded-full font-medium transition-colors text-base md:text-base flex items-center space-x-1 ${
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

        {/* Development Message */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-gray-700/50 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiFolder className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Projects Section Under Development
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-lg">
              This portfolio section is being updated with current projects. 
              You can visit my GitHub to see my latest work and contributions.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="https://github.com/bethwel3001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center space-x-2 text-base whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center justify-center space-x-2 text-base whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                <span>Contact</span>
                <HiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;