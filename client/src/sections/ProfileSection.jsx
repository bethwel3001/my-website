import { FaWhatsapp, FaHeart, FaSmile, FaStar } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';

const ProfileSection = () => {
  const logoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Animated Logo Container */}
          <div className="flex justify-center lg:justify-start" ref={logoRef}>
            <div className="relative">
              {/* Main Logo Container with Gradient Border */}
              <div className={`w-60 h-60 md:w-96 md:h-96 rounded-full flex items-center justify-center transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}>
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 rounded-full p-1.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 ${
                  isVisible ? 'animate-[spin_3s_linear_infinite] opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>

                {/* Logo Image Container */}
                <div className="absolute inset-4 md:ins-6 rounded-full overflow-hidden border-4 border-gray-900 bg-gray-800">
                  <img 
                    src="/image.png" 
                    alt="Bethwel Kiplagat Logo"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    }`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.fallback-logo');
                      fallback.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="fallback-logo hidden w-full h-full items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-500/10">
                    <div className="text-center">
                      <span className="text-4xl md:text-6xl font-bold text-white">BK</span>
                      <div className="flex justify-center mt-2">
                        <FaStar className="text-yellow-400 w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stars */}
                <div className={`absolute -top-2 -right-2 transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <FaStar className="text-yellow-400 w-4 h-4 animate-bounce" />
                </div>
                <div className={`absolute -bottom-2 -left-2 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <FaStar className="text-green-400 w-4 h-4 animate-bounce" />
                </div>
              </div>

              {/* Pulsing Rings */}
              <div className={`absolute inset-0 rounded-full border border-green-500/30 animate-ping ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} style={{animationDelay: '0.5s'}}></div>
              <div className={`absolute inset-4 rounded-full border border-blue-500/20 animate-ping ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Let's Connect & Create
            </h2>
            <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
              I'm always excited to discuss new ideas, collaborate on meaningful projects, 
              and connect with fellow developers and innovators.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-row justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-12">
              {/* Discord Button */}
              <a
                href="https://discord.com/users/bethwelk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-5 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center space-x-2 text-base md:text-lg shadow-lg hover:shadow-xl"
              >
                <FaDiscord className="w-5 h-5 md:w-6 md:h-6" />
                <span>Discord</span>
              </a>
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/254759112532"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-5 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center space-x-2 text-base md:text-lg shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Animated Goodbye */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-lg md:text-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="text-gray-400 text-center sm:text-left">Thanks for visiting!</span>
              <div className="flex space-x-3">
                <FaHeart className="text-red-400 animate-bounce" style={{animationDelay: '0s'}} />
                <FaSmile className="text-yellow-400 animate-bounce" style={{animationDelay: '0.2s'}} />
                <FaHeart className="text-red-400 animate-bounce" style={{animationDelay: '0.4s'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;