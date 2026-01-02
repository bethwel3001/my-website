import { FaCode, FaUserFriends, FaCloud, FaRocket} from 'react-icons/fa';

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
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                {/* Header with transparent icon */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-green-400 group-hover:text-green-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features - Clean balanced layout */}
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-4 text-lg md:text-xl text-center md:text-left">
                    Core Offerings
                  </h4>
                  <div className="flex flex-col items-center md:items-start space-y-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 w-full max-w-xs md:max-w-none"
                      >
                        <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-base md:text-lg text-gray-300 text-center md:text-left flex-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer - Price */}
                <div className="pt-4 border-t border-gray-700/50">
                  <span className="text-green-400 font-semibold text-lg md:text-xl block text-center md:text-left">
                    {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action - Single Discuss button */}
        <div className="text-center mt-12 md:mt-16">
          <div className="backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Start Your Project
            </h3>
            <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-xl leading-relaxed">
              Let's collaborate to bring your vision to life with technical excellence and strategic insight.
            </p>
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3 text-base md:text-xl shadow-lg hover:shadow-xl"
            >
              <span>Discuss Your Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;