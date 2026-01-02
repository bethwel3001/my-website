import React, { useState, useEffect } from "react";
import { FaGithub, FaMedium, FaAngular } from "react-icons/fa6"; 

const Hero = () => {
  const [displayedFirstName, setDisplayedFirstName] = useState("");
  const [displayedLastName, setDisplayedLastName] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const firstName = "Bethwel";
  const lastName = "Kiplagat";

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeFirstName = () => {
      if (currentIndex <= firstName.length) {
        setDisplayedFirstName(firstName.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeFirstName, 100);
      } else {
        setTimeout(() => {
          currentIndex = 0;
          typeLastName();
        }, 300);
      }
    };

    const typeLastName = () => {
      if (currentIndex <= lastName.length) {
        setDisplayedLastName(lastName.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeLastName, 100);
      } else {
        setIsTypingComplete(true);
      }
    };

    timeoutId = setTimeout(typeFirstName, 500);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 sm:px-8 scroll-smooth relative overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl w-full text-center mt-16 opacity-0 animate-fadeInUp relative z-10">

        <div className="flex justify-center gap-4 mb-10 flex-wrap mt-2">
           {/* GDE Angular Mission Badge - Updated */}
           <div className="bg-gradient-to-r from-red-500/10 to-red-700/10 text-red-400 border border-red-500/20 px-4 py-2 rounded-full text-sm md:text-base font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(220,38,38,0.3)] animate-bounce-slow">
            <span className="relative flex h-2.5 w-2.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <FaAngular className="w-4 h-4" />
            <span>GDE Angular 2026</span>
          </div>

          {/* Galactic Badge */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 border border-green-500/20 px-4 py-2 rounded-full text-sm md:text-base font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]">
            <span>Galactic Problem Solver</span>
          </div>

          {/* GDG Badge */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-sm md:text-base font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            <span>GDG Lead</span>
          </div>
          
          {/* Open Source Badge */}
          <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 text-purple-400 border border-purple-500/20 px-4 py-2 rounded-full text-sm md:text-base font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]">
            <span>Open Source</span>
          </div>
        </div>

        <div className="mb-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight min-h-[4.5rem] flex justify-center items-center">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {displayedFirstName}
              {!isTypingComplete && displayedFirstName.length < firstName.length && (
                <span className="inline-block w-0.5 h-14 bg-white ml-1 animate-pulse"></span>
              )}
            </span>
            
            {displayedFirstName.length === firstName.length && <span className="mx-3"></span>}
            
            {displayedFirstName.length === firstName.length && (
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {displayedLastName}
                {!isTypingComplete && displayedLastName.length < lastName.length && (
                  <span className="inline-block w-0.5 h-14 bg-green-400 ml-1 animate-pulse"></span>
                )}
              </span>
            )}
          </h1>

          <h2 className={`text-lg md:text-xl font-light text-gray-400 tracking-wide mb-5 transition-all duration-500 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Software Engineer & Community Leader
          </h2>

          <div className={`max-w-3xl mx-auto space-y-5 transition-all duration-500 delay-300 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Currently learning{" "}
              <span className="text-red-400 font-semibold">
                Angular
              </span>{" "}
              and writing articles on my journey to becoming a{" "}
              <span className="text-red-400 font-semibold">
                GDE in Angular
              </span>.
            </p>
            <p className="text-lg md:text-xl text-gray-400 italic leading-relaxed">
              Building impactful digital experiences that connect technology with people.
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-500 delay-500 ${
          isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="#contact"
            aria-label="Start a conversation with Bethwel Kiplagat"
            className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-base md:text-lg flex items-center space-x-2 shadow-lg shadow-green-500/30 relative z-10"
          >
            <span>Let's Talk</span>
            <div className="relative flex items-center justify-center w-3.5 h-3.5">
              <span className="absolute inline-flex w-full h-full bg-green-300 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 bg-white rounded-full"></span>
            </div>
          </a>

          <a
            href="https://medium.com/@iamkiplagat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gray-800 border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-base md:text-lg flex items-center space-x-2 relative z-10"
          >
            <FaMedium className="w-5 h-5 group-hover:text-white transition-colors" />
            <span>Angular Articles</span>
          </a>

          <a
            href="https://github.com/bethwel3001"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-base md:text-lg relative z-10"
          >
            <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>View Work</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-3 gap-6 max-w-md mx-auto border-t border-gray-800 pt-8 mb-12 relative z-10 transition-all duration-500 delay-700 ${
          isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Angular Articles */}
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-2">
              1
            </div>
            <div className="text-sm md:text-base text-gray-300 uppercase tracking-wide font-medium">
              Angular Article
            </div>
          </div>
          
          {/* Community */}
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-sm md:text-base text-gray-300 uppercase tracking-wide font-medium">
              Community
            </div>
          </div>
          
          {/* Awards */}
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-sm md:text-base text-gray-300 uppercase tracking-wide font-medium">
              Awards
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-6 flex justify-center relative z-10 transition-all duration-500 delay-1000 ${
          isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="#about"
            aria-label="Scroll to next section"
            className="flex flex-col items-center space-y-1 text-gray-500 hover:text-green-400 transition-colors group"
          >
            <span className="text-sm md:text-base">Explore</span>
            <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center items-start group-hover:border-green-400">
              <div className="w-1 h-2 bg-green-400 rounded-full mt-1 animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;