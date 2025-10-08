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
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 leading-relaxed">
              From computer science student to community leader, I bridge technology 
              with human connection to create meaningful impact.
            </p>
            {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Enhanced Story Section */}
          <div className="space-y-8">
            <div className="rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                <span>My Journey</span>
              </h3>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="transition-all duration-300 hover:text-gray-300">
                  As a final year Computer Science student majoring in Software Engineering, 
                  I've discovered that technology's true power lies in its ability to connect 
                  people and solve pressing global challenges.
                </p>
                
                <p className="transition-all duration-300 hover:text-gray-300">
                  My journey took a transformative turn when I joined the NASA Space Apps 
                  Challenge, where our team earned the Galactic Problem Solver title. This 
                  experience showed me how technology can address even the most complex 
                  problems we face as a society.
                </p>
                
                <p className="transition-all duration-300 hover:text-gray-300">
                  Now, as a GDG Lead, I'm passionate about paying it forward—creating 
                  spaces where other students can discover their potential in technology 
                  and contribute to sustainable development.
                </p>
              </div>
            </div>

            {/* Enhanced Fun Note */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/30 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">💡</span>
                </div>
                <div>
                  <p className="text-green-400 text-sm leading-relaxed">
                    <span className="font-semibold">I hate debugging. Just kidding!</span> - I actually enjoy the puzzle-solving aspect of development. Every bug is just a mystery waiting to be solved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Personality Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personalityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 border ${item.border} backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-2 text-lg group-hover:text-green-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle hover indicator */}
                  <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-10 top-1/4 w-2 h-2 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute right-20 bottom-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default About;