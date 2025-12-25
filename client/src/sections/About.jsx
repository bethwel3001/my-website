import React from 'react';
import { FaRocket, FaUserFriends, FaCode, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  const personalityItems = [
    {
      icon: FaRocket,
      title: 'Hackathons',
      description: 'NASA SpaceApps Galactic Problem Solver • Passionate about solving real-world challenges',
      gradient: 'from-purple-500/10 to-blue-500/10',
      border: 'border-purple-500/30'
    },
    {
      icon: FaUserFriends,
      title: 'Community Building',
      description: 'Google Developer Groups Co-Lead • Facilitating tech education • Building developer ecosystems',
      gradient: 'from-blue-500/10 to-green-500/10',
      border: 'border-blue-500/30'
    },
    {
      icon: FaCode,
      title: 'Open Source',
      description: 'Collaborative development • Knowledge sharing • Community contributions',
      gradient: 'from-green-500/10 to-yellow-500/10',
      border: 'border-green-500/30'
    },
    {
      icon: FaHandsHelping,
      title: 'Volunteering',
      description: 'DEVFEST organizer • Tech event volunteering • Mentoring students • Workshops',
      gradient: 'from-orange-500/10 to-red-500/10',
      border: 'border-orange-500/30'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            About Me
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              From computer science student to community leader, I bridge technology 
              with human connection to create meaningful impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-stretch">
          {/* Enhanced Story Section - Now matches height of personality grid */}
          <div className="flex flex-col h-full">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6 flex items-center space-x-3">
                <div className="w-2 h-6 md:h-8 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>My Journey</span>
              </h3>
              
              <div className="space-y-4 md:space-y-6 text-gray-400 leading-relaxed flex-grow">
                <p className="transition-all duration-300 hover:text-gray-300 text-sm md:text-base">
                  As a final year Computer Science student majoring in Software Engineering, 
                  I've discovered that technology's true power lies in its ability to connect 
                  people and solve pressing global challenges.
                </p>
                
                <p className="transition-all duration-300 hover:text-gray-300 text-sm md:text-base">
                  My journey took a transformative turn when I joined the NASA Space Apps 
                  Challenge, where our team earned the Galactic Problem Solver title. This 
                  experience showed me how technology can address even the most complex 
                  problems we face as a society.
                </p>
                
                <p className="transition-all duration-300 hover:text-gray-300 text-sm md:text-base">
                  Now, as a GDG Lead, I'm passionate about paying it forward—creating 
                  spaces where other students can discover their potential in technology 
                  and contribute to sustainable development.
                </p>
                
                <p className="transition-all duration-300 hover:text-gray-300 text-sm md:text-base">
                  I believe that the most impactful solutions come from combining 
                  technical expertise with community-driven approaches, which is why 
                  I'm committed to both building innovative technology and fostering 
                  collaborative ecosystems.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Personality Grid - Icons without borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full">
            {personalityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-4 md:p-6 border ${item.border} backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group flex flex-col h-full`}
                >
                  <div className="flex items-start space-x-3 md:space-x-4 mb-3 md:mb-4">
                    <div className="flex-shrink-0">
                      {/* Transparent icon container - no border */}
                      <div className="p-2 md:p-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/90 group-hover:text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 md:mb-2 text-base md:text-lg group-hover:text-green-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle hover indicator */}
                  <div className="mt-2 md:mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden md:block absolute left-10 top-1/4 w-2 h-2 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="hidden md:block absolute right-20 bottom-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default About;