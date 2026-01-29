import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaTimes, FaMedium } from 'react-icons/fa';

const ContactInfoItem = ({ icon, label, value, isLink = false }) => {
  const Icon = icon;
  return (
    <div className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4">
      <div className="p-3 bg-green-500/20 text-green-400 rounded-lg flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-gray-400 text-base">{label}</p>
        {isLink ? (
          <a href={value} className="text-white hover:text-green-400 transition-colors text-lg">
            {value.replace('mailto:', '')}
          </a>
        ) : (
          <p className="text-white text-lg">{value}</p>
        )}
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  const Icon = icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};

const StatusMessage = ({ type, message, onClose }) => {
  const isSuccess = type === 'success';
  const isError = type === 'error';

  const bgColor = isSuccess ? 'bg-green-500/10' : isError ? 'bg-red-500/10' : 'bg-blue-500/10';
  const borderColor = isSuccess ? 'border-green-500/30' : isError ? 'border-red-500/30' : 'border-blue-500/30';
  const textColor = isSuccess ? 'text-green-400' : isError ? 'text-red-400' : 'text-blue-400';

  return (
    <div className={`p-4 rounded-lg border ${bgColor} ${borderColor} ${textColor} flex items-center space-x-3 text-base`}>
      {isSuccess ? <FaCheckCircle className="w-5 h-5 flex-shrink-0" /> : 
       isError ? <FaExclamationCircle className="w-5 h-5 flex-shrink-0" /> : 
       <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin flex-shrink-0"></div>}
      <span className="flex-1">{message}</span>
      {(isSuccess || isError) && (
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
          <FaTimes className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (status.type === 'success' || status.type === 'error') {
      const timer = setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status.type]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Sorry, there was an error. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">Have a project in mind or interested in a collaboration? I'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12">
          
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center lg:text-left">Get In Touch</h3>
            <ContactInfoItem icon={FaEnvelope} label="Email" value="mailto:kiplagatbethwelk@gmail.com" isLink />
            <ContactInfoItem icon={FaMapMarkerAlt} label="Location" value="Kisumu, Kenya" />
            
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-base">Current Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute animate-ping"></div>
                  </div>
                  <span className="text-green-400 text-base font-semibold">ONLINE</span>
                </div>
              </div>
              <p className="text-white text-lg font-medium">Available for new collaborations</p>
              <p className="text-gray-500 text-sm mt-1">Response times are typically within a few hours.</p>
            </div>

            <div className="pt-4 text-center lg:text-left">
              <h4 className="font-semibold text-white mb-4 text-lg">Follow My Journey</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                <SocialLink href="https://github.com/bethwel3001" icon={FaGithub} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/iambethwelkiplagat/" icon={FaLinkedin} label="LinkedIn" />
                <SocialLink href="https://twitter.com/am_kiplagat" icon={FaTwitter} label="Twitter" />
                <SocialLink href="https://medium.com/@iamkiplagat" icon={FaMedium} label="Medium" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-gray-300 mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full text-base px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full text-base px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition" placeholder="e.g. john.doe@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-base font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full text-base px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition" placeholder="Project or collaboration idea" />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full text-base px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 text-white transition resize-none" placeholder="Tell me about your idea..."></textarea>
              </div>
              {status.message && <StatusMessage type={status.type} message={status.message} onClose={() => setStatus({ type: '', message: '' })} />}
              <div className="text-center sm:text-right">
                <button type="submit" disabled={status.type === 'loading'} className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-8 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto text-lg">
                  <FaPaperPlane className="w-5 h-5" />
                  <span>{status.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
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
