import React from 'react';
import { 
  FaReact, 
  FaGitAlt, 
  FaGithub, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython,
  FaNpm
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiFlask, 
  SiTypescript,
  SiJavascript
} from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { 
      name: 'React', 
      icon: <FaReact className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-blue-400'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-cyan-400'
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-orange-400'
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-gray-300'
    },
    { 
      name: 'MongoDB', 
      icon: <SiMongodb className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-green-400'
    },
    { 
      name: 'Express', 
      icon: <SiExpress className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-gray-300'
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-green-500'
    },
    { 
      name: 'HTML', 
      icon: <FaHtml5 className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-orange-400'
    },
    { 
      name: 'CSS', 
      icon: <FaCss3Alt className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-blue-400'
    },
    { 
      name: 'Flask', 
      icon: <SiFlask className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-gray-300'
    },
    { 
      name: 'npm', 
      icon: <FaNpm className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-red-400'
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-blue-500'
    },
    { 
      name: 'Python', 
      icon: <FaPython className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-blue-400'
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript className="w-10 h-10 md:w-12 md:h-12" />, 
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 md:mb-6">
          Tech Stack
        </h3>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Technologies I work with
        </p>
        
        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 md:space-y-4 animate-breath group"
            >
              <div className={`${tech.color} transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {tech.icon}
              </div>
              <span className="text-base md:text-lg text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;