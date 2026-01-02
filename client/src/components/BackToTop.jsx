import React, { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    
    // Start scroll immediately
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset animation after scroll completes
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-b from-green-600 to-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl z-30 transition-all duration-300 hover:scale-110 hover:shadow-green-500/30"
          aria-label="Back to top"
        >
          {/* Rocket Container */}
          <div className="relative flex items-center justify-center">
            {/* Rocket Icon - rotated 45° to face top-right, then -45° to straight up */}
            <div className={`transition-all duration-300 ${isLaunching ? 'animate-bounce' : ''}`}>
              <FaRocket className={`w-7 h-7 ${isLaunching ? 'text-yellow-300' : 'text-white'} transform -rotate-45`} />
            </div>
            
            {/* Simple Fire Effect - Green theme */}
            {isLaunching && (
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center space-y-1">
                  {/* Large flame */}
                  <div className="w-4 h-3 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-pulse"></div>
                  {/* Small flame */}
                  <div className="w-3 h-2 bg-gradient-to-t from-yellow-400 to-green-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  {/* Smoke */}
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-300/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-1 bg-gray-400/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-1 bg-gray-300/50 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pulsing glow ring */}
          <div className={`absolute inset-0 rounded-full border-2 border-green-400/30 ${
            isLaunching ? 'animate-ping' : ''
          }`}></div>
        </button>
      )}
    </>
  );
};

export default BackToTop;