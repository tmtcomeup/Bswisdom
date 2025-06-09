import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Share2, Brain } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.origin + '/blog/' + post.slug
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin + '/blog/' + post.slug);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <Link to={`/blog/${post.slug}`} className="block mb-3">
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition duration-300">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center mr-2">
              <Brain className="h-5 w-5 text-secondary-500" />
            </div>
            <span className="text-sm text-gray-700 font-medium">{post.author.name}</span>
          </div>

          <button
            onClick={handleShare}
            className="text-gray-500 hover:text-blue-600 transition duration-300 p-2 hover:bg-blue-50 rounded-full"
            aria-label="Share post"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;