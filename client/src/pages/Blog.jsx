import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiSearch, HiTrendingUp, HiHome } from 'react-icons/hi';
import { FaRocket, FaUsers, FaCode, FaLaptopCode } from 'react-icons/fa';
import { BlogCard, BlogFooter, BlogLoadingSkeleton } from '../components/BlogComponents';
import { getAllBlogs, getBlogsByCategory } from '../utils/blogData';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts', icon: HiTrendingUp },
    { id: 'tech', name: 'Tech', icon: FaLaptopCode },
    { id: 'events', name: 'Events', icon: FaUsers },
    { id: 'hackathons', name: 'Hackathons', icon: FaRocket },
    { id: 'coding', name: 'Coding', icon: FaCode }
  ];

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
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
      setBlogs(prev => prev.map(blog =>
        blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
      ));
    } catch (err) {
      setError('Failed to like post. Please try again.');
    }
  };

  const handleShare = async (blog) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: `${window.location.origin}/blog/${blog.slug}`,
        });
      } else {
        await navigator.clipboard.writeText(`${window.location.origin}/blog/${blog.slug}`);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  if (loading) return <BlogLoadingSkeleton />;
  if (error) return <div className="text-red-400 text-center p-8">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors group">
          <HiHome className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Insights & Stories</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sharing my journey through hackathons, community events, and technical adventures
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors text-sm md:text-base ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <HiTrendingUp className="w-6 h-6 mr-2 text-green-400" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} onLike={handleLike} onShare={handleShare} />
              ))}
            </div>
          )}
        </div>
      </div>

      <BlogFooter />
    </div>
  );
};

export default Blog;