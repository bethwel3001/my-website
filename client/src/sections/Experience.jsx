import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { useState, useRef, useEffect } from 'react';
import ExperienceModal from '../components/ExperienceModal';

const lolweLogo = '/experience/lolwe.jpeg';
const ictAuthorityLogo = '/experience/ICTA.webp';
const powerLearnLogo = '/experience/plp.webp';
const wibaLogo = '/experience/wiba.jpeg';
const gdgLogo = '/experience/gdgcuk.webp';
const nasaLogo = '/experience/nasa.webp'; 
const openSourceLogo = '/experience/opensource.webp'; 
const gdgKisumuLogo = '/experience/gdgkisumu.webp'; 
const plpAfricaLogo = '/experience/plp.webp'; 

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const experienceSectionRef = useRef(null);
  const showMoreButtonRef = useRef(null);

  // Store all experiences in one array
  const allExperiences = [
    // Priority experiences
    {
      id: 'lolwe',
      logo: lolweLogo,
      title: 'Junior Innovations Officer',
      organization: 'Lolwe AI & Robotics Studio',
      period: 'Dec 2025-Present',
      description: 'Working in the innovations department at Lolwe AI & Robotics Studio, focusing on cutting-edge AI and robotics solutions.',
      detailedDescription: `As a Junior Innovations Officer at Lolwe AI & Robotics Studio, I contribute to cutting-edge projects in artificial intelligence and robotics. My role involves collaborating with senior engineers to develop innovative solutions, participating in research initiatives, and helping to implement AI models for real-world applications.

Key responsibilities include:
- Assisting in the development of AI algorithms and robotic systems
- Participating in innovation workshops and brainstorming sessions
- Collaborating with cross-functional teams to integrate AI solutions
- Testing and validating robotic prototypes
- Documenting research findings and technical specifications`,
      achievements: ['AI Solutions', 'Robotics', 'Innovation Projects'],
      skills: ['Artificial Intelligence', 'Robotics', 'Research', 'Python', 'TensorFlow'],
    },
    {
      id: 'ict-authority',
      logo: ictAuthorityLogo,
      title: 'Software Engineering Apprentice',
      organization: 'ICT Authority',
      period: 'Sept 2025-Dec 2025',
      description: 'Apprenticeship at ICT Authority, gaining hands-on experience in government technology initiatives and digital transformation projects.',
      detailedDescription: `During my apprenticeship at the ICT Authority, I worked on various government technology initiatives focused on digital transformation and public service improvement. This experience provided me with insights into how technology can enhance government operations and citizen services.

Notable projects and responsibilities:
- Contributed to the development of e-government platforms
- Assisted in digital service optimization projects
- Participated in cybersecurity awareness initiatives
- Collaborated with government departments on tech integration
- Developed documentation for public sector IT systems`,
      achievements: ['Government Tech', 'Digital Transformation', 'Public Sector IT'],
      skills: ['Government Systems', 'Digital Transformation', 'Public Sector', 'Java', 'Spring Boot'],
    },
    {
      id: 'power-learn',
      logo: powerLearnLogo,
      title: 'Software Engineering Apprentice',
      organization: 'Power Learn Project',
      period: 'Feb 2025-Aug 2025',
      description: 'Software engineering apprenticeship and training at Power Learn Project, developing full-stack applications and learning modern development practices.',
      detailedDescription: `My apprenticeship at Power Learn Project was an intensive software engineering training program where I developed full-stack applications using modern technologies and best practices. The program emphasized hands-on learning and real-world project development.

Key learnings and projects:
- Built full-stack web applications using MERN stack
- Learned software development methodologies and version control
- Developed responsive front-end interfaces
- Implemented RESTful APIs and database design
- Participated in code reviews and team collaborations`,
      achievements: ['Full-Stack Development', 'Software Engineering', 'Professional Training'],
      skills: ['MERN Stack', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
    },
    {
      id: 'wiba',
      logo: wibaLogo,
      title: 'Tutor, mentor & Instructor',
      organization: 'Women In Blockchain Africa (WIBA)',
      period: 'July 2024-Sept 2024',
      description: 'Teaching blockchain fundamentals and Web3 technologies to women across Africa, empowering them with technical skills in emerging technologies.',
      detailedDescription: `As a tutor and mentor at Women In Blockchain Africa, I had the privilege of teaching blockchain fundamentals and Web3 technologies to women across the continent. This role focused on empowering women with technical skills in emerging technologies and promoting diversity in the blockchain space.

My responsibilities included:
- Designing and delivering blockchain curriculum
- Mentoring women developers in Web3 technologies
- Conducting workshops on smart contracts and DApps
- Providing career guidance in blockchain development
- Building a supportive community for women in tech`,
      achievements: ['Blockchain Education', 'Web3 Technologies', 'Women Empowerment'],
      skills: ['Blockchain', 'Smart Contracts', 'Web3', 'Solidity', 'Ethereum', 'Mentoring'],
    },
    // Additional experiences
    {
      id: 'gdg-campus',
      logo: gdgLogo,
      title: 'GDG On Campus Co-Lead',
      organization: 'The Co-operative University of Kenya',
      period: 'Oct 2024-Present',
      description: 'Awarded the Google Developer Groups on campus Co-Lead position focusing on Website Development track. Leading tech community initiatives and mentoring students in web technologies.',
      detailedDescription: `As a GDG On Campus Co-Lead, I organize and lead tech community initiatives at my university, focusing on web development technologies. This leadership role allows me to mentor students, organize workshops, and foster a vibrant tech community.

Community initiatives include:
- Monthly web development workshops and hackathons
- Guest speaker sessions with industry professionals
- Study jams for Google technologies
- Mentorship programs for beginner developers
- Collaboration with other campus tech communities`,
      achievements: ['Website Development Track', 'Community Leadership', 'Student Mentorship'],
      skills: ['Community Building', 'Event Organization', 'Web Development', 'Leadership', 'Public Speaking'],
    },
    {
      id: 'nasa',
      logo: nasaLogo,
      title: 'NASA Galactic Problem Solver',
      organization: 'NASA Space Apps Challenge 2025',
      period: '2025',
      description: 'Awarded Galactic Problem Solver title through a 3-day hackathon where my team developed solutions to minimize respiratory diseases using space technology and data analytics.',
      detailedDescription: `At the NASA Space Apps Challenge 2025, our team developed an innovative solution to minimize respiratory diseases using space technology and data analytics. Our project earned us the title of Galactic Problem Solvers among thousands of participants worldwide.

Our solution featured:
- Integration of NASA Earth observation data
- Machine learning models for disease prediction
- Real-time air quality monitoring system
- Mobile application for public health awareness
- Data visualization dashboards for health authorities`,
      achievements: ['3-Day Hackathon', 'Health Tech Solution', 'Space Data Utilization'],
      skills: ['Data Science', 'Machine Learning', 'NASA APIs', 'Team Collaboration', 'Hackathon'],
    },
    {
      id: 'opensource',
      logo: openSourceLogo,
      title: 'Open Source Contributor',
      organization: 'Environment centered and SDG focused Projects',
      period: 'Jan 2025-Present',
      description: 'Actively contributing to open source projects since January this year, collaborating with global developers and learning modern development practices through hands-on experience.',
      detailedDescription: `My open source journey involves contributing to environmental and Sustainable Development Goals (SDG) focused projects. Through these contributions, I collaborate with developers worldwide and learn modern development practices.

Notable contributions:
- Environmental monitoring tools and applications
- SDG-related data visualization platforms
- Documentation improvements and bug fixes
- Feature development for community projects
- Participation in open source communities`,
      achievements: ['Global Collaboration', 'Modern Practices', 'Hands-on Learning'],
      skills: ['Open Source', 'GitHub', 'Collaboration', 'Code Review', 'Documentation'],
    },
    {
      id: 'gdg-kisumu',
      logo: gdgKisumuLogo,
      title: 'Facilitator & Member',
      organization: 'Google Developer Groups - Kisumu',
      period: '2025-Present',
      description: 'Active member and facilitator at Google Developer Groups Kisumu, participating in community events, tech talks, and volunteer activities. Contributing to the growth of tech ecosystem in Lake Region Kenya.',
      detailedDescription: `As an active member and facilitator at GDG Kisumu, I contribute to building the tech ecosystem in the Lake Region of Kenya. I participate in organizing events, delivering tech talks, and volunteering for community initiatives.

Community involvement includes:
- Monthly tech meetups and networking events
- Technical workshops and hands-on sessions
- Developer advocacy and outreach programs
- Collaboration with local tech startups
- Volunteer initiatives for digital literacy`,
      achievements: ['Community Events', 'Tech Talks', 'Lake Region Growth'],
      skills: ['Community Engagement', 'Technical Facilitation', 'Networking', 'Volunteer Management'],
    },
    {
      id: 'plp-africa',
      logo: plpAfricaLogo,
      title: 'Software Developer',
      organization: 'Power Learn Project Africa',
      period: 'Jul 2025',
      description: 'Certified MERN Stack Developer through Power Learn Project Africa. Learned to use AI tools to enhance productivity and became proficient in open source contribution methodologies.',
      detailedDescription: `I earned my MERN Stack Developer certification through Power Learn Project Africa, where I mastered full-stack development and learned to integrate AI tools for enhanced productivity. The program also emphasized open source contribution methodologies.

Certification highlights:
- Comprehensive MERN stack development training
- AI tools integration for developer productivity
- Open source contribution best practices
- Real-world project development
- Professional software engineering methodologies`,
      achievements: ['AI Tools Integration', 'Open Source Methodologies', 'Full-Stack Expertise'],
      skills: ['MERN Stack', 'AI Tools', 'Certification', 'Full-Stack Development', 'Best Practices'],
    }
  ];

  const priorityExperiences = allExperiences.slice(0, 4);
  const additionalExperiences = allExperiences.slice(4);

  const toggleShowAll = () => {
    const isCurrentlyHidden = !showAll;
    setShowAll(!showAll);
    
    if (!isCurrentlyHidden) {
      setTimeout(() => {
        if (experienceSectionRef.current) {
          experienceSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      setTimeout(() => {
        if (showMoreButtonRef.current) {
          showMoreButtonRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100);
    }
  };

  const handleReadMore = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  const ExperienceItem = ({ exp, index }) => {
    return (
      <div
        key={exp.id}
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
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-sm"></div>
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-700 bg-gray-50 flex items-center justify-center">
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
                            <span class="text-xl font-bold text-gray-700">
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
                {/* Title and period - Better layout for mobile */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-white mb-2 sm:mb-0 pr-2 sm:pr-0">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-green-400 font-medium bg-green-500/10 px-3 py-1 rounded-full w-fit sm:w-auto">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-gray-300 mb-3 mt-2">
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
            <button
              onClick={() => handleReadMore(exp)}
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 cursor-pointer"
            >
              <HiExternalLink className="w-4 h-4" />
              <span>Read More</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="experience" className="py-20 bg-gray-900" ref={experienceSectionRef}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Experience & Journey
            </h2>
            <p className="text-xl text-gray-400">
              From professional roles to community leadership - my path in tech
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-green-500/30"></div>

            <div className="space-y-12">
              {/* Priority experiences (always shown) */}
              {priorityExperiences.map((exp, index) => (
                <ExperienceItem key={`priority-${exp.id}`} exp={exp} index={index} />
              ))}

              {/* Additional experiences (conditionally shown) */}
              {showAll && additionalExperiences.map((exp, index) => (
                <ExperienceItem 
                  key={`additional-${exp.id}`} 
                  exp={exp} 
                  index={index + priorityExperiences.length} 
                />
              ))}
            </div>
          </div>

          {/* Show More/Less Button */}
          <div className="text-center mt-12" ref={showMoreButtonRef}>
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 border border-gray-700 group cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <FaChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  <span>Show More</span>
                  <FaChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Modal for experience details */}
      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

export default Experience;