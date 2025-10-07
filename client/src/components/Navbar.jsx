import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-gray-900 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg border-b border-gray-800' : 'border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-green-400 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggler - Desktop */}
            <div className="ml-4">
              <ThemeToggler />
            </div>
          </div>

          {/* Mobile menu button and theme toggler */}
          <div className="md:hidden flex items-center space-x-4 w-full justify-end">
            <ThemeToggler />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-400 p-2 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Glassmorphism Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Glassmorphism Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-sm">
            <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-green-400 transition-colors p-2"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-center text-base text-gray-300 hover:text-green-400 font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;