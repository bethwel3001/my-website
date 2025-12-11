import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get experience data from sessionStorage or fallback
  const experienceData = sessionStorage.getItem('selectedExperience');
  const experience = experienceData ? JSON.parse(experienceData) : null;

  const handleBack = () => {
    // Check if we came from the experience section
    if (location.state?.fromExperienceSection) {
      // Go back to the main page and scroll to experience section
      navigate('/', { 
        state: { scrollToExperience: true },
        replace: true 
      });
    } else {
      // Otherwise just go back
      navigate(-1);
    }
  };

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <button
          onClick={handleBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8"
        >
          <FaArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
          <p className="text-gray-400">The experience details could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={handleBack}
            className="flex items-center space-x-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Experience</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Experience header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-lg"></div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-gray-700 bg-white flex items-center justify-center">
                <img 
                  src={experience.logo} 
                  alt={`${experience.organization} logo`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallbackDiv = e.target.parentElement;
                    fallbackDiv.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
                        <span class="text-3xl font-bold text-gray-700">
                          ${experience.organization.charAt(0)}
                        </span>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {experience.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {experience.organization}
              </p>
              <div className="text-gray-400">
                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          {/* Achievement badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {experience.achievements.map((achievement, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Role Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {experience.detailedDescription}
            </p>
          </div>
        </div>

        {/* Skills section */}
        {experience.skills && (
          <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {experience.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-900 text-green-400 rounded-full text-sm font-medium border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetail;