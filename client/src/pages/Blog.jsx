import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiSearch, HiHome } from 'react-icons/hi';
import { BlogCard, BlogFooter, BlogLoadingSkeleton, BlogError } from '../components/BlogComponents';
import { getAllBlogs, getBlogsByCategory } from '../utils/blogData';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tech', name: 'Tech' },
    { id: 'events', name: 'Events' },
    { id: 'hackathons', name: 'Hackathons' },
    { id: 'coding', name: 'Coding' }
  ];

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        const allBlogs = getAllBlogs();
        setBlogs(allBlogs);
        setFilteredBlogs(allBlogs);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  useEffect(() => {
    let filtered = getBlogsByCategory(selectedCategory);

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  const handleLike = async (blogId) => {
    try {
      // Like functionality not yet implemented
      console.log('Like functionality coming soon for blog:', blogId);
    } catch (err) {
      console.error('Error with like functionality:', err);
    }
  };

  const handleShare = async (blog) => {
    try {
      const tweetText = `Check out this article: ${blog.title} by Bethwel Kiplagat`;
      const url = `${window.location.origin}/blog/${blog.slug}`;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
      
      window.open(twitterUrl, '_blank', 'width=550,height=420');
    } catch (err) {
      console.error('Error sharing:', err);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${window.location.origin}/blog/${blog.slug}`);
        alert('Link copied to clipboard!');
      } catch (clipboardErr) {
        console.error('Clipboard error:', clipboardErr);
        alert('Sharing failed. Please copy the URL manually.');
      }
    }
  };

  if (loading) {
    return <BlogLoadingSkeleton />;
  }

  // In Blog.jsx, update the error handling section:

if (error) {
  return (
    <BlogError 
      error={error} 
      onRetry={() => window.location.reload()} 
    />
  );
}

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <div className="bg-gray-900 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors"
          >
            <HiHome className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Blog Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tech Insights & Stories
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sharing my journey through hackathons, community events, and technical adventures
            </p>
          </div>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              {selectedCategory === 'all' ? 'Latest Articles' : 
               categories.find(cat => cat.id === selectedCategory)?.name}
              <span className="text-gray-400 text-lg ml-2">({filteredBlogs.length})</span>
            </h2>

            {filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <HiSearch className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogCard 
                    key={blog.id} 
                    blog={blog} 
                    onLike={handleLike} 
                    onShare={handleShare} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  );
};

export default Blog;