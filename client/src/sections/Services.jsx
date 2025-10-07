import React from 'react';
import { FaCode, FaUserFriends, FaCloud, FaRocket, FaComments } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Full-stack applications using modern frameworks. Scalable, performant solutions built with best practices.',
      features: ['MERN Stack', 'TypeScript', 'Responsive Design', 'API Development'],
      price: 'Project-based'
    },
    {
      icon: FaUserFriends,
      title: 'Community Building',
      description: 'Developer community leadership and ecosystem growth. Creating spaces for learning and collaboration.',
      features: ['Community Strategy', 'Event Planning', 'Developer Relations', 'Mentorship'],
      price: 'Consultation'
    },
    {
      icon: FaCloud,
      title: 'Open Source Collaboration',
      description: 'Contributing to and maintaining open source projects. Collaborative development and knowledge sharing.',
      features: ['Code Contributions', 'Project Maintenance', 'Documentation', 'Community Support'],
      price: 'Collaboration'
    },
    {
      icon: FaRocket,
      title: 'Hackathon Collaboration',
      description: 'Partnering on hackathon projects. From ideation to technical execution and pitch refinement.',
      features: ['Idea Validation', 'Technical Execution', 'Pitch Refinement', 'Problem Solving'],
      price: 'Partnership'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Services & Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Leveraging technical expertise and community leadership to deliver impactful solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 transition-all duration-300 hover:border-green-400/30 hover:transform hover:scale-[1.02]"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl group-hover:bg-green-500/20 transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 truncate">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-3 text-sm md:text-base">
                    Core Offerings
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs md:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                  <span className="text-green-400 font-semibold text-sm md:text-base">
                    {service.price}
                  </span>
                  <a
                    href="#contact"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <FaComments className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Discuss</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Start Your Project
            </h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
              Let's collaborate to bring your vision to life with technical excellence and strategic insight.
            </p>
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 text-sm md:text-base"
            >
              <FaComments className="w-4 h-4 md:w-5 md:h-5" />
              <span>Discuss Your Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;