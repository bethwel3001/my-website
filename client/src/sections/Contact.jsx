import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind? Interested in collaboration? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center lg:text-left">
              Get In Touch
            </h3>
            
            <div className="space-y-4 md:space-y-6 mb-8">
              <div className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4">
                <div className="p-3 bg-green-500 text-white rounded-lg flex-shrink-0">
                  <FaEnvelope className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Email</p>
                  <a 
                    href="mailto:kiplagatbethwelk@gmail.com"
                    className="text-white hover:text-green-400 transition-colors text-sm md:text-base"
                  >
                    kiplagatbethwelk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4">
                <div className="p-3 bg-green-500 text-white rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Location</p>
                  <p className="text-white text-sm md:text-base">Kisumu, Kenya</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4">
                <div className="p-3 bg-green-500 text-white rounded-lg flex-shrink-0">
                  <FaPhone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Availability</p>
                  <p className="text-white text-sm md:text-base">Open for collaborations</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-white mb-4 text-sm md:text-base">
                Follow My Journey
              </h4>
              <div className="flex justify-center lg:justify-start space-x-3 md:space-x-4">
                <a
                  href="https://github.com/bethwel3001"
                  className="p-2 md:p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-green-500 hover:text-white transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/bethwel-kiplagat"
                  className="p-2 md:p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-green-500 hover:text-white transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://twitter.com/am_kiplagat"
                  className="p-2 md:p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-green-500 hover:text-white transition-all transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition-colors text-sm md:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition-colors text-sm md:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition-colors text-sm md:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition-colors resize-none text-sm md:text-base"
                  placeholder="Tell me about your project or collaboration idea..."
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`p-3 md:p-4 rounded-lg border ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : status.type === 'error'
                    ? 'bg-red-500/10 border-red-500/30 text-red-400'
                    : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                } flex items-center space-x-2 text-sm md:text-base`}>
                  {status.type === 'success' ? (
                    <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  ) : status.type === 'error' ? (
                    <FaExclamationCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  ) : null}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white py-3 px-8 md:py-4 md:px-12 rounded-lg font-medium transition-all hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[140px] text-sm md:text-base"
                >
                  <FaPaperPlane className="w-4 h-4 flex-shrink-0" />
                  <span>
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;