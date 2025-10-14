import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiCalendar, HiClock, HiEye, HiHeart, HiChat, HiShare, HiBookmark, HiArrowLeft, HiHome } from 'react-icons/hi';
import { getBlogBySlug } from '../utils/blogData';
import { BlogImages, RelevantLinks, CommentsSection, BlogPostFooter, BlogError } from '../components/BlogComponents';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const blogPost = getBlogBySlug(slug);
        if (!blogPost) {
          throw new Error('Blog post not found');
        }

        setBlog(blogPost);
        setComments([]); // No comments functionality yet
        
      } catch (err) {
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  const handleLike = async () => {
    try {
      // Like functionality not yet implemented
      console.log('Like functionality coming soon');
      setLiked(!liked);
      if (blog) {
        setBlog(prev => prev ? { 
          ...prev, 
          likes: prev.likes + (liked ? -1 : 1) 
        } : null);
      }
    } catch (err) {
      console.error('Error with like functionality:', err);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    // Comment functionality not yet implemented
    console.log('Comment functionality coming soon');
    alert('Comment functionality is not yet implemented. Please check back later.');
    setNewComment('');
  };

  const handleShare = async () => {
    try {
      if (!blog) return;
      
      const tweetText = `Reading: ${blog.title} by Bethwel Kiplagat`;
      const url = window.location.href;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
      
      window.open(twitterUrl, '_blank', 'width=550,height=420');
    } catch (err) {
      console.error('Error sharing:', err);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardErr) {
        console.error('Clipboard error:', clipboardErr);
        alert('Sharing failed. Please copy the URL manually.');
      }
    }
  };

  if (loading) {
    return <BlogPostLoadingSkeleton />;
  }

  if (error || !blog) {
    return (
      <BlogError 
        error={error} 
        onRetry={() => window.location.reload()} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Header */}
      <div className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/blog"
                className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors"
              >
                <HiArrowLeft className="w-4 h-4 mr-2" />
                <span className="text-sm">All Posts</span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/"
                className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors"
              >
                <HiHome className="w-4 h-4 mr-2" />
                <span className="text-sm">Portfolio</span>
              </Link>
            </div>
            
            <div className="text-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                {blog.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Header */}
        <header className="mb-8">
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <HiCalendar className="w-4 h-4 mr-1" />
            <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <HiClock className="w-4 h-4 mr-1" />
            <span>{blog.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {blog.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/30 flex-shrink-0">
              {blog.author.avatar ? (
                <img 
                  src={blog.author.avatar} 
                  alt={blog.author.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">BK</span>
                </div>
              )}
            </div>
            <div>
              <p className="text-white font-semibold">{blog.author.name}</p>
              <p className="text-gray-400 text-sm">{blog.author.role}</p>
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="flex items-center justify-between border-y border-gray-800 py-4">
            <div className="flex items-center space-x-6 text-gray-400">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 transition-colors ${
                  liked ? 'text-red-400' : 'hover:text-red-400'
                }`}
                title="Like functionality coming soon"
              >
                <HiHeart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                <span>{blog.likes + (liked ? 1 : 0)}</span>
              </button>
              <div className="flex items-center space-x-2">
                <HiChat className="w-5 h-5" />
                <span>{blog.comments}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiEye className="w-5 h-5" />
                <span>{blog.views}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="p-2 text-gray-400 hover:text-green-400 transition-colors rounded-lg hover:bg-gray-800"
                aria-label="Share article on X"
                title="Share on X (Twitter)"
              >
                <HiShare className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-800"
                aria-label="Bookmark article"
                title="Bookmark functionality coming soon"
              >
                <HiBookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Blog Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <BlogImages images={blog.images} />
          
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Relevant Links */}
        <RelevantLinks links={blog.relevantLinks} />

        {/* Comments Section */}
        <CommentsSection
          comments={comments}
          newComment={newComment}
          setNewComment={setNewComment}
          onAddComment={handleAddComment}
        />
      </article>

      <BlogPostFooter />
    </div>
  );
};

// Loading Skeleton Component
const BlogPostLoadingSkeleton = () => (
  <div className="min-h-screen bg-gray-900 pt-8">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-800 rounded w-1/2 mb-8"></div>
        <div className="h-96 bg-gray-800 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-800 rounded"></div>
          <div className="h-4 bg-gray-800 rounded w-5/6"></div>
          <div className="h-4 bg-gray-800 rounded w-4/6"></div>
          <div className="h-4 bg-gray-800 rounded w-3/4"></div>
          <div className="h-4 bg-gray-800 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPost;