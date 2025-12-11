// src/components/ExperienceModal.jsx
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

const ExperienceModal = ({ experience, onClose }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  // Handle click outside modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent modal scroll from affecting background
  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - X only */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-colors border border-gray-700"
          aria-label="Close"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Modal content with scrollable area */}
        <div 
          className="overflow-y-auto h-full"
          onScroll={handleModalScroll}
        >
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 border-b border-gray-700">
            <div className="flex items-start space-x-6">
              {/* Logo */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-green-500/30 to-blue-500/30 blur-lg"></div>
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700 bg-white flex items-center justify-center">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.organization} logo`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallbackDiv = e.target.parentElement;
                      fallbackDiv.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
                          <span class="text-2xl font-bold text-gray-700">
                            ${experience.organization.charAt(0)}
                          </span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>

              {/* Title and organization */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0 lg:mr-4">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {experience.title}
                    </h2>
                    <p className="text-xl text-gray-300">
                      {experience.organization}
                    </p>
                  </div>
                  <span className="inline-flex text-base text-green-400 font-medium bg-green-500/10 px-4 py-2 rounded-full self-start">
                    {experience.period}
                  </span>
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-2">
                  {experience.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content body */}
          <div className="p-8 space-y-8">
            {/* Detailed description */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Role Overview</h3>
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-300 whitespace-pre-line leading-relaxed space-y-4">
                  {experience.detailedDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills section */}
            {experience.skills && experience.skills.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Optional call to action - Only if you want some action at the bottom */}
            <div className="pt-4 border-t border-gray-800">
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;