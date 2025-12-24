import React from 'react';

const ExperienceLogo = ({ logo, organization, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const fallbackDiv = e.target.parentElement;
    fallbackDiv.innerHTML = `
      <div class="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-blue-100">
        <span class="${size === 'xl' ? 'text-3xl' : size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'} font-bold text-gray-700">
          ${organization.charAt(0)}
        </span>
      </div>
    `;
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-sm`}></div>
      <div className={`relative ${sizeClasses[size]} rounded-lg overflow-hidden border-2 border-gray-700 bg-white flex items-center justify-center p-1`}>
        <img 
          src={logo} 
          alt={`${organization} company logo`}
          className="w-full h-full object-contain"
          onError={handleImageError}
        />
      </div>
    </div>
  );
};

export default ExperienceLogo;