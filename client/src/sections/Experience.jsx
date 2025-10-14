import { FaRocket, FaUserFriends, FaCode, FaCertificate } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      icon: FaUserFriends,
      title: 'Google Developer Groups On Campus Co-Lead',
      organization: 'The Co-operative University of Kenya',
      period: 'Oct 2024-Present',
      description: 'Awarded the Google Developer Groups on campus Co-Lead position focusing on Website Development track. Leading tech community initiatives and mentoring students in web technologies.',
      achievements: ['Website Development Track', 'Community Leadership', 'Student Mentorship'],
      blogLink: 'blog/gdg-community-leadership'
    },
    {
      icon: FaRocket,
      title: 'NASA Galactic Problem Solver',
      organization: 'NASA Space Apps Challenge 2025',
      period: '2025',
      description: 'Awarded Galactic Problem Solver title through a 3-day hackathon where my team developed solutions to minimize respiratory diseases using space technology and data analytics.',
      achievements: ['3-Day Hackathon', 'Health Tech Solution', 'Space Data Utilization'],
      blogLink: '/blog/nasa-spaceapps-journey'
    },
    {
      icon: FaCode,
      title: 'Open Source Contributor',
      organization: 'Environment centered and SDG focused Projects',
      period: 'Jan 2025-Present',
      description: 'Actively contributing to open source projects since January this year, collaborating with global developers and learning modern development practices through hands-on experience.',
      achievements: ['Global Collaboration', 'Modern Practices', 'Hands-on Learning'],
      blogLink: '/blog/open-source-journey'
    },
    {
      icon: FaUserFriends,
      title: 'Facilitator & Member',
      organization: 'Google Developer Groups - Kisumu',
      period: '2025-Present',
      description: 'Active member and facilitator at Google Developer Groups Kisumu, participating in community events, tech talks, and volunteer activities. Contributing to the growth of tech ecosystem in Lake Region Kenya.',
      achievements: ['Community Events', 'Tech Talks', 'Lake Region Growth'],
      blogLink: '/blog/gdg-kisumu-community'
    },
    {
      icon: FaCertificate,
      title: 'MERN Stack Software Developer',
      organization: 'Power Learn Project Africa',
      period: 'Jul 2025',
      description: 'Certified MERN Stack Developer through Power Learn Project Africa. Learned to use AI tools to enhance productivity and became proficient in open source contribution methodologies.',
      achievements: ['AI Tools Integration', 'Open Source Methodologies', 'Full-Stack Expertise'],
      blogLink: '/blog/mern-certification-journey'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & Journey
          </h2>
          <p className="text-xl text-gray-400">
            From coding projects to community leadership - my path in tech
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-green-500/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                  } ml-12 md:ml-0`}>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all hover:border-green-500/50">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-green-500 text-white rounded-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <h3 className="text-xl font-semibold text-white">
                              {exp.title}
                            </h3>
                            <span className="text-sm text-green-400 font-medium bg-green-500/10 px-3 py-1 rounded-full mt-1 sm:mt-0">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-lg text-gray-300 mb-3">
                            {exp.organization}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <a
                        href={exp.blogLink}
                        className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                      >
                        <HiExternalLink className="w-4 h-4" />
                        <span>Read More</span>
                      </a>
                    </div>
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

export default Experience;