import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiCalendar, HiClock, HiEye, HiHeart, HiChat, HiShare, HiBookmark, HiArrowLeft, HiHome } from 'react-icons/hi';
import { FaRocket, FaUsers, FaCode, FaLaptopCode } from 'react-icons/fa';
import { BlogImages, RelevantLinks, CommentsSection } from '../components/BlogComponents';
import { getBlogBySlug } from '../utils/blogData';

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
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const blogPost = getBlogBySlug(slug);
        if (!blogPost) {
          throw new Error('Blog post not found');
        }

        setBlog(blogPost);
        
        // Mock comments
        setComments([
          {
            id: 1,
            user: 'Tevin',
            comment: 'This is incredible! The technical depth and real-world impact are inspiring.',
            date: '2025-10-04',
            likes: 5
          },
          {
            id: 2,
            user: 'Felix 001',
            comment: 'Great breakdown of the implementation. Would love to see more technical details.',
            date: '2025-10-05',
            likes: 3
          }
        ]);
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
      setLiked(!liked);
      setBlog(prev => prev ? { ...prev, likes: prev.likes + (liked ? -1 : 1) } : null);
    } catch (err) {
      setError('Failed to like post. Please try again.');
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const comment = {
        id: comments.length + 1,
        user: 'You',
        comment: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      
      setComments(prev => [comment, ...prev]);
      setNewComment('');
      setBlog(prev => prev ? { ...prev, comments: prev.comments + 1 } : null);
    } catch (err) {
      setError('Failed to add comment. Please try again.');
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share && blog) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'tech': return FaLaptopCode;
      case 'events': return FaUsers;
      case 'hackathons': return FaRocket;
      case 'coding': return FaCode;
      default: return FaLaptopCode;
    }
  };

  if (loading) return <BlogPostLoadingSkeleton />;
  if (error || !blog) return <BlogPostError error={error} />;

  const CategoryIcon = getCategoryIcon(blog.category);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors">
                <HiArrowLeft className="w-4 h-4 mr-2" />
                <span className="text-sm">All Posts</span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/" className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors">
                <HiHome className="w-4 h-4 mr-2" />
                <span className="text-sm">Portfolio</span>
              </Link>
            </div>
            
            <div className="text-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium capitalize flex items-center">
                <CategoryIcon className="w-3 h-3 mr-1" />
                {blog.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <HiCalendar className="w-4 h-4 mr-1" />
            <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <HiClock className="w-4 h-4 mr-1" />
            <span>{blog.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{blog.title}</h1>

{/* Author Info */}
<div className="flex items-center space-x-4 mb-6">
  {blog.author.avatar ? (
    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/30 flex-shrink-0">
      <img 
        src={blog.author.avatar} 
        alt={blog.author.name}
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
      <HiUser className="w-6 h-6 text-white" />
    </div>
  )}
  <div>
    <p className="text-white font-semibold">{blog.author.name}</p>
    <p className="text-gray-400 text-sm">{blog.author.role}</p>
  </div>
</div>

          <div className="flex items-center justify-between border-y border-gray-800 py-4">
            <div className="flex items-center space-x-6 text-gray-400">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 transition-colors ${liked ? 'text-red-400' : 'hover:text-red-400'}`}
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
                aria-label="Share article"
              >
                <HiShare className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-800"
                aria-label="Bookmark article"
              >
                <HiBookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <BlogImages images={blog.images} category={blog.category} />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, index) => (
            <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
              #{tag}
            </span>
          ))}
        </div>

        <RelevantLinks links={blog.relevantLinks} />

        <CommentsSection
          comments={comments}
          newComment={newComment}
          setNewComment={setNewComment}
          onAddComment={handleAddComment}
          blog={blog}
        />
      </article>

      <BlogPostFooter />
    </div>
  );
};

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
        </div>
      </div>
    </div>
  </div>
);

const BlogPostError = ({ error }) => (
  <div className="min-h-screen bg-gray-900 pt-8 flex items-center justify-center">
    <div className="text-center">
      <HiChat className="w-16 h-16 text-red-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">Blog Post Not Found</h2>
      <p className="text-gray-400 mb-4">{error || 'The requested blog post could not be found.'}</p>
      <Link to="/blog" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
        Back to Blog
      </Link>
    </div>
  </div>
);

const BlogPostFooter = () => (
  <footer className="bg-gray-800 border-t border-gray-700">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Tech Insights Blog</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/blog" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="All Blog Posts">
            <HiChat className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default BlogPost;