import React, { useState } from 'react';
import { blogPosts } from '../data/blog';
import BlogCard from '../components/BlogCard';
import AuthorBio from '../components/AuthorBio';
import { Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory);

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
            <p className="text-xl max-w-2xl">
              Insights, guides, and expert advice to help you succeed
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area - Takes 2/3 of the space */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              {/* Search Bar */}
              <div className="relative max-w-xl mb-8">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-4 mb-8">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar - Takes 1/3 of the space */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Author Bio Card */}
              <div className="bg-gradient-to-br from-primary-900/5 via-primary-800/10 to-primary-900/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary-100/20">
                <AuthorBio />
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h2>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400 hover:from-secondary-500 hover:via-secondary-600 hover:to-secondary-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;