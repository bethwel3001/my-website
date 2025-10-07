import React, { useState, useEffect } from 'react';
import { FaBlog, FaCode, FaRocket, FaCalendar, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import LoadingScreen from '../components/LoadingScreen';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Show loading for 2 seconds, then show error message
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowError(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <BlogNavbar />
      <div className="pt-16">
        {showError ? <BlogError /> : <BlogSkeleton />}
      </div>
    </div>
  );
};

// Blog Navbar Component
const BlogNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Tech', href: '#tech', icon: FaCode },
    { name: 'Hackathons', href: '#hackathons', icon: FaRocket },
    { name: 'Events', href: '#events', icon: FaCalendar },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Back to Portfolio */}
          <a
            href="/"
            className="text-sm text-gray-300 hover:text-green-400 font-medium transition-colors flex items-center space-x-2"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-green-400 font-medium transition-colors flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-400 p-2 transition-colors"
            >
              <FaBlog className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-green-400 font-medium transition-colors flex items-center space-x-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

// Blog Skeleton Loading Component
const BlogSkeleton = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Skeleton Header */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-800 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-64 bg-gray-800 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Skeleton Blog Cards */}
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-pulse">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-10 w-10 bg-gray-700 rounded-full"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-32 bg-gray-700 rounded"></div>
                  <div className="h-3 w-24 bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="h-6 w-3/4 bg-gray-700 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
              </div>
              <div className="flex space-x-2 mt-4">
                <div className="h-6 w-16 bg-gray-700 rounded"></div>
                <div className="h-6 w-20 bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Error Component
const BlogError = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 py-20">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
        {/* Animated Icon */}
        <div className="mb-8">
          <div className="animate-bounce inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full border-2 border-green-500/30">
            <FaExclamationTriangle className="w-10 h-10 text-green-400" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        
        <div className="text-xl text-gray-400 mb-8 leading-relaxed">
          <p className="mb-4">
            Blogs don't exist currently, <span className="text-green-400 font-semibold">Be Tu</span> is working on them!
          </p>
          <p className="text-sm">
            I'm crafting insightful content about tech, hackathons, and community events.
            Stay tuned for amazing stories and tutorials!
          </p>
        </div>

        {/* Progress Animation */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-gray-800 rounded-full h-2 mb-2">
            <div 
              className="bg-green-500 h-2 rounded-full animate-pulse"
              style={{ width: '65%' }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">Writing in progress... 65% complete</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center space-x-2"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </a>
          <a
            href="#contact"
            className="border border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center space-x-2"
          >
            <FaBlog className="w-4 h-4" />
            <span>Get Notified</span>
          </a>
        </div>

        {/* Categories Preview */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-6">
            What to Expect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: FaCode, title: 'Tech Tutorials', desc: 'Web development & programming' },
              { icon: FaRocket, title: 'Hackathon Stories', desc: 'NASA SpaceApps & more' },
              { icon: FaCalendar, title: 'Event Insights', desc: 'GDG & community events' }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <Icon className="w-6 h-6 text-green-400 mb-2 mx-auto" />
                  <h4 className="text-white text-sm font-medium mb-1">{category.title}</h4>
                  <p className="text-gray-400 text-xs">{category.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;