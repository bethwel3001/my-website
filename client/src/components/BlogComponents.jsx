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
  HiTag,
  HiPhotograph,
  HiUser
} from 'react-icons/hi';
import { FaRocket, FaUsers, FaCode, FaLaptopCode, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
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
            <HiUser className="w-1/2 h-1/2 text-white" />
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
  const [isLiked, setIsLiked] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'tech': return FaLaptopCode;
      case 'events': return FaUsers;
      case 'hackathons': return FaRocket;
      case 'coding': return FaCode;
      default: return FaLaptopCode;
    }
  };

  const CategoryIcon = getCategoryIcon(blog.category);

  const handleLikeClick = () => {
    onLike(blog.id);
    setIsLiked(!isLiked);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 group">
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
            <CategoryIcon className="w-12 h-12 text-gray-400 mb-2" />
            <p className="text-gray-400 text-sm text-center px-4">{blog.title}</p>
          </div>
        )}
        
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium capitalize flex items-center backdrop-blur-sm">
            <CategoryIcon className="w-3 h-3 mr-1" />
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
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
            >
              <HiTag className="w-3 h-3 mr-1" />
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
              onClick={handleLikeClick}
              className={`flex items-center space-x-1 transition-colors ${
                isLiked ? 'text-red-400' : 'hover:text-red-400'
              }`}
            >
              <HiHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{blog.likes + (isLiked ? 1 : 0)}</span>
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
              onClick={() => onShare(blog)}
              className="p-2 text-gray-400 hover:text-green-400 transition-colors rounded-lg hover:bg-gray-700"
              aria-label="Share article"
            >
              <HiShare className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-700"
              aria-label="Bookmark article"
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
export const BlogImages = ({ images, category }) => {
  const [imageErrors, setImageErrors] = React.useState({});

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'tech': return FaLaptopCode;
      case 'events': return FaUsers;
      case 'hackathons': return FaRocket;
      case 'coding': return FaCode;
      default: return FaLaptopCode;
    }
  };

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

  const CategoryIcon = getCategoryIcon(category);

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
                <HiPhotograph className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-gray-400 text-sm text-center px-4">{image.alt}</p>
              </div>
            )}
            
            {/* Image caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
              <p className="text-gray-300 text-xs">
                Image {index + 1} of {images.length} • 
                <span className="capitalize ml-1">{image.size} size</span>
              </p>
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
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <HiExternalLink className="w-5 h-5 mr-2 text-green-400" />
        Relevant Links & Resources
      </h3>
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
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors">
                <HiExternalLink className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-gray-300 group-hover:text-white font-medium">{link.name}</span>
            </div>
            <HiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
};

// Comments Section Component
export const CommentsSection = ({ comments, newComment, setNewComment, onAddComment, blog }) => {
  const [commentLikes, setCommentLikes] = React.useState({});

  const handleCommentLike = (commentId) => {
    setCommentLikes(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  return (
    <section className="border-t border-gray-800 pt-8">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <HiChat className="w-6 h-6 mr-2 text-green-400" />
        Community Discussion ({comments.length})
      </h3>

      <form onSubmit={onAddComment} className="mb-8">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts, ask questions, or provide feedback..."
            rows="4"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          />
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-400 text-sm">
              Be part of the conversation
            </p>
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <HiChat className="w-4 h-4 mr-2" />
              Post Comment
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-8">
            <HiChat className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-white text-sm">
                  {comment.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-white font-medium">{comment.user}</p>
                      <p className="text-gray-400 text-sm">{new Date(comment.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                    <button 
                      onClick={() => handleCommentLike(comment.id)}
                      className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                        commentLikes[comment.id] 
                          ? 'text-red-400 bg-red-400/10' 
                          : 'text-gray-400 hover:text-red-400 hover:bg-gray-700'
                      }`}
                    >
                      <HiHeart className={`w-4 h-4 ${commentLikes[comment.id] ? 'fill-current' : ''}`} />
                      <span className="text-sm">{comment.likes + (commentLikes[comment.id] ? 1 : 0)}</span>
                    </button>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{comment.comment}</p>
                  
                  <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-gray-700">
                    <button className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center">
                      <HiChat className="w-3 h-3 mr-1" />
                      Reply
                    </button>
                    <button className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center">
                      <HiShare className="w-3 h-3 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

// Blog Footer Component
export const BlogFooter = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
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
                <Link to="/blog?category=tech" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <FaLaptopCode className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Tech Insights
                </Link>
              </li>
              <li>
                <Link to="/blog?category=hackathons" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <FaRocket className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Hackathons
                </Link>
              </li>
              <li>
                <Link to="/blog?category=events" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <FaUsers className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Community Events
                </Link>
              </li>
              <li>
                <Link to="/blog?category=coding" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <FaCode className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Coding Tutorials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <HiChat className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  All Articles
                </Link>
              </li>
              <li>
                <a href={`mailto:${authorInfo.social.email}`} className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <HiShare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Contact
                </a>
              </li>
              <li>
                <a href="/rss" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <HiExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {authorInfo.name}. All rights reserved. 
            <span className="mx-2">•</span>
            Built with React & Tailwind CSS
          </p>
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

// Error Component
export const BlogError = ({ error, onRetry }) => (
  <div className="min-h-screen bg-gray-900 pt-8 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto p-8">
      <HiChat className="w-16 h-16 text-red-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">Unable to Load Content</h2>
      <p className="text-gray-400 mb-6">{error}</p>
      <button
        onClick={onRetry}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto"
      >
        <HiChat className="w-4 h-4 mr-2" />
        Try Again
      </button>
    </div>
  </div>
);