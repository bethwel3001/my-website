import { FaWhatsapp, FaHeart, FaSmile } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa6';

const ProfileSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Your Logo - Borderless and Bigger */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Logo Container - No gradient border */}
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl">
                {/* Your Logo Image - Direct with no surrounding border */}
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/image.png" 
                    alt="Bethwel Kiplagat Logo"
                    className="w-full h-full object-contain p-2"
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
                    <span className="text-3xl md:text-5xl font-bold text-green-400">BK</span>
                  </div>
                </div>
              </div>
              
              {/* Subtle animated rings - for visual appeal without borders */}
              <div className="absolute inset-0 rounded-full border border-green-500/10 animate-pulse opacity-30"></div>
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
            
            {/* Action Buttons - Centered on Mobile, Left on Desktop */}
            <div className="flex flex-row justify-center md:justify-start gap-2 md:gap-4 mb-6 md:mb-12">
              {/* Discord Button */}
              <a
                href="https://discord.com/users/bethwelk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2.5 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base w-auto"
              >
                <FaDiscord className="w-4 h-4 md:w-5 md:h-5" />
                <span>Discord</span>
              </a>
              <a
                href="https://wa.me/254759112532"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-4 py-2.5 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base w-auto"
              >
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
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