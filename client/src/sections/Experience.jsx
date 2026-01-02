import { useRef } from 'react';

const lolweLogo = '/experience/lolwe.jpeg';
const ictAuthorityLogo = '/experience/ICTA.webp';
const powerLearnLogo = '/experience/plp.webp';
const wibaLogo = '/experience/wiba.jpeg';

const Experience = () => {
  const experienceSectionRef = useRef(null);

  const experiences = [
    {
      id: 'lolwe',
      logo: lolweLogo,
      title: 'Full-Stack Engineer',
      organization: 'Lolwe AI & Robotics Studio',
      period: 'Dec 2025-Present',
      description: 'Working in the innovations department at Lolwe AI & Robotics Studio, focusing on cutting-edge AI and robotics solutions.',
    },
    {
      id: 'ict-authority',
      logo: ictAuthorityLogo,
      title: 'SWE Intern',
      organization: 'ICT Authority',
      period: 'Sept 2025-Dec 2025',
      description: 'Apprenticeship at ICT Authority, gaining hands-on experience in government technology initiatives and digital transformation projects.',
    },
    {
      id: 'power-learn',
      logo: powerLearnLogo,
      title: 'SWE Intern',
      organization: 'Power Learn Project',
      period: 'Feb 2025-Aug 2025',
      description: 'Software engineering apprenticeship and training at Power Learn Project, developing full-stack applications and learning modern development practices.',
    },
    {
      id: 'wiba',
      logo: wibaLogo,
      title: 'Blockchain Instructor',
      organization: 'Women In Blockchain Africa (WIBA)',
      period: 'July 2024-Sept 2024',
      description: 'Teaching blockchain fundamentals and Web3 technologies to women across Africa, empowering them with technical skills in emerging technologies.',
    }
  ];

  const ExperienceItem = ({ exp, index }) => {
    return (
      <div
        key={exp.id}
        className={`relative flex flex-col md:flex-row ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        } items-center`}
      >
        {/* Timeline dot */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-green-500 rounded-full border-4 border-gray-900 z-10"></div>

        {/* Content */}
        <div className={`md:w-1/2 ${
          index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
        } ml-12 md:ml-0`}>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all hover:border-green-500/50">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-sm"></div>
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-700 bg-gray-50 flex items-center justify-center">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.organization} logo`}
                      className="w-full h-full object-contain p-1"
                      style={{ 
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallbackDiv = e.target.parentElement;
                        fallbackDiv.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-blue-100">
                            <span class="text-2xl font-bold text-gray-700">
                              ${exp.organization.charAt(0)}
                            </span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                {/* Title and period */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-2xl font-semibold text-white mb-2 sm:mb-0 pr-2 sm:pr-0">
                    {exp.title}
                  </h3>
                  <span className="text-base text-green-400 font-medium bg-green-500/10 px-4 py-2 rounded-full w-fit sm:w-auto">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xl text-gray-300 mb-4 mt-2">
                  {exp.organization}
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-400 mb-4">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-gray-900" ref={experienceSectionRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Journey
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            From professional roles to community leadership - my path in tech
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-500/30"></div>

          <div className="space-y-12">
            {/* Show all 4 experiences */}
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;