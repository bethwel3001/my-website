import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiCalendar, 
  HiClock, 
  HiEye, 
  HiHeart, 
  HiChat, 
  HiShare,
  HiBookmark,
  HiHome,
  HiArrowLeft,
  HiExternalLink,
  HiTag
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { authorInfo } from '../utils/blogData';

// Author Profile Component
export const AuthorProfile = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className="flex items-center space-x-4">
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-green-500/30 flex-shrink-0`}>
        {authorInfo.avatar ? (
          <img 
            src={authorInfo.avatar} 
            alt={authorInfo.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">BK</span>
          </div>
        )}
      </div>
      <div className={`${textSizes[size]}`}>
        <p className="text-white font-semibold">{authorInfo.name}</p>
        <p className="text-gray-400">{authorInfo.title}</p>
      </div>
    </div>
  );
};

// Blog Card Component
export const BlogCard = ({ blog, onLike, onShare }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleLike = () => {
    console.log('Like functionality not yet implemented');
  };

  const handleShare = () => {
    onShare(blog);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-green-400/30 group">
      <div className="relative h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 overflow-hidden">
        {blog.images && blog.images[0] && !imageError ? (
          <img 
            src={blog.images[0].url} 
            alt={blog.images[0].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-500/20 to-blue-500/20">
            <span className="text-gray-400 text-sm text-center px-4">{blog.title}</span>
          </div>
        )}
        
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium capitalize backdrop-blur-sm">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <HiCalendar className="w-4 h-4 mr-1" />
          <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <HiClock className="w-4 h-4 mr-1" />
          <span>{blog.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
          <Link to={`/blog/${blog.slug}`}>
            {blog.title}
          </Link>
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Author Info in Card */}
        <div className="flex items-center justify-between mb-4">
          <AuthorProfile size="small" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
              +{blog.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          <div className="flex items-center space-x-4 text-gray-400">
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 transition-colors hover:text-red-400"
              title="Like functionality coming soon"
            >
              <HiHeart className="w-4 h-4" />
              <span className="text-sm">{blog.likes}</span>
            </button>
            <div className="flex items-center space-x-1">
              <HiChat className="w-4 h-4" />
              <span className="text-sm">{blog.comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <HiEye className="w-4 h-4" />
              <span className="text-sm">{blog.views}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 text-gray-400 hover:text-green-400 transition-colors rounded-lg hover:bg-gray-700"
              aria-label="Share article"
              title="Share on X (Twitter)"
            >
              <HiShare className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-700"
              aria-label="Bookmark article"
              title="Bookmark functionality coming soon"
            >
              <HiBookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Images Component
export const BlogImages = ({ images }) => {
  const [imageErrors, setImageErrors] = React.useState({});

  const getImageSizeClass = (size) => {
    switch (size) {
      case 'large': return 'w-full';
      case 'medium': return 'w-4/5 mx-auto';
      case 'small': return 'w-2/3 mx-auto';
      default: return 'w-full';
    }
  };

  const getImageHeightClass = (size) => {
    switch (size) {
      case 'large': return 'h-80 md:h-96';
      case 'medium': return 'h-64 md:h-80';
      case 'small': return 'h-48 md:h-64';
      default: return 'h-64';
    }
  };

  const handleImageError = (imageIndex) => {
    setImageErrors(prev => ({ ...prev, [imageIndex]: true }));
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((image, index) => (
        <div key={index} className={`my-8 ${getImageSizeClass(image.size)}`}>
          <div className={`relative ${getImageHeightClass(image.size)} rounded-lg overflow-hidden bg-gradient-to-br from-green-500/10 to-blue-500/10`}>
            {!imageErrors[index] ? (
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <span className="text-gray-400 text-sm text-center px-4">{image.alt}</span>
              </div>
            )}
            
            {/* Image caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Relevant Links Component
export const RelevantLinks = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">Relevant Links & Resources</h3>
      <p className="text-gray-400 mb-4 text-sm">
        Explore these resources to learn more about the topics discussed in this article.
      </p>
      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600 transition-all duration-300 group border border-gray-600"
          >
            <span className="text-gray-300 group-hover:text-white font-medium">{link.name}</span>
            <HiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
};

// Comments Section Component
export const CommentsSection = ({ comments, newComment, setNewComment, onAddComment }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      alert('Comment functionality is not yet implemented. Please check back later.');
      return;
    }
    onAddComment(e);
  };

  return (
    <section className="border-t border-gray-800 pt-8">
      <h3 className="text-2xl font-bold text-white mb-6">Community Discussion</h3>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
        <p className="text-gray-400 mb-4">
          Comment functionality is currently under development. We're working on implementing a robust commenting system that will allow meaningful discussions while maintaining a positive community environment.
        </p>
        <div className="flex items-center text-gray-400 text-sm">
          <HiChat className="w-4 h-4 mr-2" />
          <span>Comments coming soon</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Comment functionality coming soon..."
            rows="4"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            disabled
          />
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-400 text-sm">
              Feature in development
            </p>
            <button
              type="submit"
              disabled
              className="bg-gray-600 text-gray-400 px-6 py-2 rounded-lg font-medium cursor-not-allowed flex items-center"
            >
              <HiChat className="w-4 h-4 mr-2" />
              Coming Soon
            </button>
          </div>
        </div>
      </form>

      {comments.length === 0 ? (
        <div className="text-center py-8">
          <HiChat className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">Comment system under development</p>
          <p className="text-gray-500 text-sm mt-2">Check back later to join the discussion</p>
        </div>
      ) : null}
    </section>
  );
};

// Blog Footer Component
export const BlogFooter = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <AuthorProfile size="medium" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              {authorInfo.bio}
            </p>
            <div className="flex space-x-3">
              <a href={authorInfo.social.github} className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-700">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={authorInfo.social.linkedin} className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-700">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${authorInfo.social.email}`} className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-700">
                <FaEnvelope className="w-5 h-5" />
              </a>
              <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-700">
                <HiHome className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog?category=hackathons" className="text-gray-400 hover:text-green-400 transition-colors">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link to="/blog?category=events" className="text-gray-400 hover:text-green-400 transition-colors">
                  Community Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-green-400 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <a href={`mailto:${authorInfo.social.email}`} className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Blog Post Footer Component
export const BlogPostFooter = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bethwel Kiplagat. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/blog"
              className="text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              All Blog Posts
            </Link>
            <a
              href="mailto:bethwel.kip@example.com"
              className="text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Loading Skeleton Component
export const BlogLoadingSkeleton = () => (
  <div className="min-h-screen bg-gray-900 pt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-800 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6">
              <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-700 rounded mb-3"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="flex space-x-2 mb-4">
                <div className="h-6 bg-gray-700 rounded w-16"></div>
                <div className="h-6 bg-gray-700 rounded w-20"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-4 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Updated BlogError Component with Perfect Sizing and Positioning
export const BlogError = ({ error, onRetry }) => (
  <div className="min-h-screen bg-gray-900 pt-8 flex items-center justify-center px-4">
    <div className="text-center max-w-md w-full mx-auto">
      {/* Animation Container */}
      <div className="relative w-32 h-32 mx-auto mb-6 sm:w-40 sm:h-40 sm:mb-8 md:w-48 md:h-48 md:mb-10">
        {/* Astronaut Body */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-full h-full animate-float"
            viewBox="0 0 200 200"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Space Helmet */}
            <circle cx="100" cy="80" r="40" fill="#2d3748" stroke="#4a5568" strokeWidth="3"/>
            <circle cx="100" cy="80" r="35" fill="#4a5568" stroke="#718096" strokeWidth="2"/>
            
            {/* Visor Reflection */}
            <ellipse cx="110" cy="75" rx="15" ry="12" fill="#a0aec0" opacity="0.4"/>
            
            {/* Astronaut Body */}
            <rect x="85" y="120" width="30" height="50" rx="15" fill="#4a5568" stroke="#718096" strokeWidth="2"/>
            
            {/* Arms */}
            <path d="M85 130 L65 150 L75 160 L85 150" fill="#4a5568" stroke="#718096" strokeWidth="2" className="animate-wave-arm"/>
            <path d="M115 130 L135 150 L125 160 L115 150" fill="#4a5568" stroke="#718096" strokeWidth="2" className="animate-wave-arm-reverse"/>
            
            {/* Legs */}
            <path d="M90 170 L80 190 L90 190" fill="#4a5568" stroke="#718096" strokeWidth="2" className="animate-walk-leg"/>
            <path d="M110 170 L120 190 L110 190" fill="#4a5568" stroke="#718096" strokeWidth="2" className="animate-walk-leg-reverse"/>
            
            {/* Backpack */}
            <rect x="105" y="125" width="20" height="25" rx="5" fill="#2d3748" stroke="#4a5568" strokeWidth="2"/>
            
            {/* Stars */}
            <circle cx="40" cy="50" r="1.5" fill="#e2e8f0" className="animate-twinkle"/>
            <circle cx="160" cy="30" r="1" fill="#e2e8f0" className="animate-twinkle-delayed"/>
            <circle cx="60" cy="20" r="1.2" fill="#e2e8f0" className="animate-twinkle"/>
            <circle cx="180" cy="70" r="0.8" fill="#e2e8f0" className="animate-twinkle-delayed"/>
            <circle cx="30" cy="100" r="1.1" fill="#e2e8f0" className="animate-twinkle"/>
          </svg>
        </div>

        {/* 404 Badge - Better positioned */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium animate-bounce shadow-lg border border-red-400">
            404
          </div>
        </div>
      </div>

      {/* Error Text */}
      <div className="space-y-4 sm:space-y-5">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 sm:text-2xl sm:mb-3">
            Lost in Space
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed sm:text-base">
            {error || "The blog post you're looking for seems to have drifted off into the cosmos. It might have been moved, deleted, or never existed in this galaxy."}
          </p>
        </div>
        
       {/* Action Buttons - Side by Side on All Screens */}
<div className="flex flex-row gap-2 justify-center items-center">
  <button
    onClick={onRetry}
    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 w-auto text-xs sm:text-sm shadow-sm border border-green-400"
  >
    <span className="flex items-center justify-center gap-1.5">
      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Try Again
    </span>
  </button>
  <Link
    to="/blog"
    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 w-auto text-xs sm:text-sm shadow-sm border border-gray-600"
  >
    <span className="flex items-center justify-center gap-1.5">
      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v12" />
      </svg>
      All Articles
    </span>
  </Link>
</div>
        {/* Helpful Links */}
        <div className="pt-3 border-t border-gray-700 sm:pt-4">
          <p className="text-gray-400 text-xs mb-2 sm:text-sm sm:mb-3">While you're here, you might want to:</p>
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <Link to="/" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Back to Earth
            </Link>
            <a href="mailto:kiplagatbethwelk@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Updated CSS animations with better responsive behavior
const errorStyles = `
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes wave-arm {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(12deg);
  }
}

@keyframes wave-arm-reverse {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-12deg);
  }
}

@keyframes walk-leg {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(8deg);
  }
}

@keyframes walk-leg-reverse {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-8deg);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes twinkle-delayed {
  0%, 100% {
    opacity: 0.3;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0.3;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-wave-arm {
  animation: wave-arm 2s ease-in-out infinite;
  transform-origin: 85px 130px;
}

.animate-wave-arm-reverse {
  animation: wave-arm-reverse 2s ease-in-out infinite;
  transform-origin: 115px 130px;
}

.animate-walk-leg {
  animation: walk-leg 1.5s ease-in-out infinite;
  transform-origin: 90px 170px;
}

.animate-walk-leg-reverse {
  animation: walk-leg-reverse 1.5s ease-in-out infinite;
  transform-origin: 110px 170px;
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

.animate-twinkle-delayed {
  animation: twinkle-delayed 3s ease-in-out infinite;
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .animate-float {
    animation-duration: 3.5s;
  }
  
  .animate-wave-arm,
  .animate-wave-arm-reverse {
    animation-duration: 2.2s;
  }
  
  .animate-walk-leg,
  .animate-walk-leg-reverse {
    animation-duration: 1.8s;
  }
  
  .animate-bounce {
    animation-duration: 2.2s;
  }
}

@media (max-width: 480px) {
  .animate-float {
    animation-duration: 4s;
  }
  
  .animate-wave-arm,
  .animate-wave-arm-reverse {
    animation-duration: 2.5s;
  }
  
  .animate-walk-leg,
  .animate-walk-leg-reverse {
    animation-duration: 2s;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = errorStyles;
  document.head.appendChild(styleSheet);
}


// Export all components
export default {
  AuthorProfile,
  BlogCard,
  BlogImages,
  RelevantLinks,
  CommentsSection,
  BlogFooter,
  BlogPostFooter,
  BlogLoadingSkeleton,
  BlogError
};