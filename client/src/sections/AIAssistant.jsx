import React, { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Basic responses based on common questions
      const responses = {
        'nasa': "I was awarded the Galactic Problem Solver title at NASA Space Apps Challenge for developing an innovative solution to a space-related problem.",
        'gdg': "I lead the GDG chapter at The Co-operative University of Kenya and facilitate at GDG Kisumu, organizing tech events and community building.",
        'projects': "I work on projects aligned with Sustainable Development Goals, especially SDG 4 - Quality Education.",
        'contact': "You can reach me through the contact form or connect with me on social media platforms.",
        'skills': "My tech stack includes MERN, TypeScript, Python/Flask, and I'm skilled in prompt engineering and open source collaboration."
      };

      const response = Object.entries(responses).find(([key]) => 
        message.toLowerCase().includes(key)
      )?.[1] || "I can tell you about my NASA experience, GDG leadership, projects, skills, or how to contact me. What would you like to know?";

      // Here you would typically integrate with an AI service
      console.log('User message:', message);
      console.log('AI response:', response);
      
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl z-30 transition-all hover:scale-110 animate-bounce"
        aria-label="Open AI Assistant"
      >
        <FaRobot className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 h-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-40 border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaRobot className="w-5 h-5" />
              <span className="font-semibold">Ask Me Anything</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hi! I can tell you about Bethwel's NASA experience, GDG leadership, projects, and skills. What would you like to know?
              </p>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about my experience..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;