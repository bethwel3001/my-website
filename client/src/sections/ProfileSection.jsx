import React from 'react';
import { FaBlog, FaWhatsapp, FaHeart, FaSmile } from 'react-icons/fa';

const ProfileSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-2xl p-1">
                {/* Your Profile Image */}
                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden border-4 border-gray-900">
                  <img 
                    src="/profile.png" 
                    alt="Bethwel Kiplagat"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div 
                    className="w-full h-full hidden items-center justify-center bg-gray-800"
                    style={{ display: 'none' }}
                  >
                    <span className="text-2xl md:text-4xl text-gray-400">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping opacity-20"></div>
              <div className="absolute inset-2 rounded-full border border-blue-500/20 animate-pulse opacity-30"></div>
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
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <a
                href="/blog"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center space-x-2 text-base"
              >
                <FaBlog className="w-5 h-5" />
                <span>My Blog</span>
              </a>
              <a
                href="https://wa.me/254759112532"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center space-x-2 text-base"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Animated Goodbye */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-lg md:text-xl">
              <span className="text-gray-400 text-center sm:text-left">Thanks for visiting!</span>
              <div className="flex space-x-2">
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