import React from 'react';
import { FaRocket, FaCode, FaHandsHelping, FaBullhorn } from 'react-icons/fa';

const About = () => {
  const personalityItems = [
    {
      icon: FaBullhorn,
      title: 'Fata Ambassador',
      description: 'Representing and promoting the Fata project in the developer community.',
      gradient: 'from-yellow-500/10 to-orange-500/10',
      border: 'border-yellow-500/30'
    },
    {
      icon: FaRocket,
      title: 'Hackathon Enthusiast',
      description: 'NASA SpaceApps Galactic Problem Solver • Passionate about solving real-world challenges',
      gradient: 'from-purple-500/10 to-blue-500/10',
      border: 'border-purple-500/30'
    },
    {
      icon: FaCode,
      title: 'Open Source',
      description: 'Contributing to open source projects and building developer tools',
      gradient: 'from-green-500/10 to-yellow-500/10',
      border: 'border-green-500/30'
    },
    {
      icon: FaHandsHelping,
      title: 'Community',
      description: 'Organizing tech events and mentoring aspiring developers',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-500/30'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            About Me
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Software Engineer focused on Angular, community building, and creating impactful solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
          {/* Left Card - Simplified Journey */}
          <div className="flex flex-col h-full">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 flex items-center space-x-3">
                <div className="w-2 h-8 md:h-10 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>My Journey</span>
              </h3>

              <div className="space-y-6 md:space-y-8 text-gray-400 leading-relaxed flex-grow">
                <p className="transition-all duration-300 hover:text-gray-300 text-base md:text-lg">
                  As a Software Engineering student, I discovered my passion for building user-friendly applications
                  and solving real-world problems through code.
                </p>

                <p className="transition-all duration-300 hover:text-gray-300 text-base md:text-lg">
                  My journey took a significant turn when I participated in the NASA Space Apps Challenge,
                  where our team earned the Galactic Problem Solver title. This experience taught me how
                  technology can address complex global challenges.
                </p>

                <p className="transition-all duration-300 hover:text-gray-300 text-base md:text-lg">
                  I am passionate about building scalable and robust applications using <span className="text-red-400 font-semibold">Angular</span>.
                  I have authored 5+ technical articles to share my knowledge with the community.
                </p>

                <p className="transition-all duration-300 hover:text-gray-300 text-base md:text-lg">
                  I believe in sharing knowledge and empowering others, which is why I'm actively involved
                  in community events and open-source contributions alongside my Angular learning journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards - Clean and Simple */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 h-full">
            {personalityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-5 md:p-6 border ${item.border} backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group flex flex-col h-full`}
                >
                  {/* Simple Icon and Content - No glass effect */}
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    <div className="mb-4">
                      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 md:w-9 md:h-9 text-white/90 group-hover:text-white" />
                      </div>
                      <h4 className="font-bold text-white text-lg md:text-xl mb-2 group-hover:text-green-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
