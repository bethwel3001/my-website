import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Status */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Be Tu</h3>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="relative">
                <FaCircle className="w-3 h-3 text-green-500 animate-ping absolute" />
                <FaCircle className="w-3 h-3 text-green-500 relative" />
              </div>
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Building impactful solutions through code and community
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/bethwel3001"
                className="text-gray-400 hover:text-green-400 transition-colors p-2"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/bethwelkiplagat"
                className="text-gray-400 hover:text-green-400 transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/am_kiplagat"
                className="text-gray-400 hover:text-green-400 transition-colors p-2"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:kiplagatbethwelk@gmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors p-2"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="space-y-3">
              <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors block text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors block text-sm">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors block text-sm">
                Projects
              </a>
              <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors block text-sm">
                Services
              </a>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors block text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Expertise */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <div className="space-y-3">
              <span className="text-gray-400 block text-sm">Full-Stack Development</span>
              <span className="text-gray-400 block text-sm">Community Building</span>
              <span className="text-gray-400 block text-sm">Open Source</span>
              <span className="text-gray-400 block text-sm">SDG Solutions</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:kiplagatbethwelk@gmail.com"
                className="text-green-400 hover:text-green-300 transition-colors block text-sm"
              >
                hello@bethwel.dev
              </a>
              <p className="text-gray-400 text-sm">Kisumu, Kenya</p>
              <p className="text-gray-400 text-sm">Open for collaborations</p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium transition-all hover:scale-105"
                >
                  Start Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-gray-800 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">5+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">2</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Awards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">3+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Years Coding</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">10+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Tech Events</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Be Tu. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Be Tu</span>
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>Building the future, one line at a time</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;