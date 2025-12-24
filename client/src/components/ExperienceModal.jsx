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
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [onClose]);

  // Handle click outside modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-4xl bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-700 shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - Better positioning for scrollable modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50 p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-colors border border-gray-700 cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Modal content - Removed max-height constraint, let it flow naturally */}
        <div className="overflow-y-auto">
          {/* Header with gradient - More compact on mobile */}
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-3 sm:p-4 md:p-8 pb-3 sm:pb-4 md:pb-6 border-b border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 md:gap-6">
              {/* Logo - Smaller on mobile */}
              <div className="flex justify-center sm:justify-start">
                <div className="relative">
                  <div className="absolute -inset-1 sm:-inset-1 md:-inset-2 rounded-lg bg-gradient-to-r from-green-500/30 to-blue-500/30 blur-lg"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-gray-700 bg-white flex items-center justify-center p-1 sm:p-1 md:p-1.5 shadow-lg">
                    <img 
                      src={experience.logo} 
                      alt={`${experience.organization} logo`}
                      className="w-full h-full object-contain"
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
                            <span class="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
                              ${experience.organization.charAt(0)}
                            </span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Title and organization - More compact on mobile */}
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <div className="mb-2 sm:mb-3 md:mb-4">
                  <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-1 leading-tight">
                    {experience.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-xl text-gray-300">
                    {experience.organization}
                  </p>
                </div>

                {/* Period badge */}
                <div className="flex justify-center sm:justify-start mb-2 sm:mb-3 md:mb-4">
                  <span className="inline-flex text-xs sm:text-sm md:text-base text-green-400 font-medium bg-green-500/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-full border border-green-500/20">
                    {experience.period}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content body - More compact spacing on mobile */}
          <div className="p-3 sm:p-4 md:p-8 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Detailed description */}
            <div>
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 pb-2 border-b border-gray-800">
                Role Overview
              </h3>
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                <div className="text-gray-300 whitespace-pre-line leading-relaxed space-y-3 sm:space-y-4 md:space-y-6">
                  {experience.detailedDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Combined sections with reduced spacing */}
            <div className="space-y-4 sm:space-y-6">
              {/* Achievements section */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-6 pb-2 border-b border-gray-800">
                    Key Achievements
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                    {experience.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm bg-gray-800/80 text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-700"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills section */}
              {experience.skills && experience.skills.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-6 pb-2 border-b border-gray-800">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2.5 bg-gray-800/80 text-green-400 rounded-lg text-xs sm:text-sm font-medium border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;