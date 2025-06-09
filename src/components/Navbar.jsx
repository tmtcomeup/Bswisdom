import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X, ShoppingCart, ChevronDown, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-primary text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-secondary-500" />
              <span className="font-bold text-xl">BSwisdom</span>
            </Link>
            <span className="ml-2 text-sm font-medium text-blue-200">Elevate Your Potential</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:bg-primary-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="hover:bg-primary-700 px-3 py-2 rounded-md">About</Link>
            <Link to="/resources" className="hover:bg-primary-700 px-3 py-2 rounded-md">Resources</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center hover:bg-primary-700 px-3 py-2 rounded-md"
              >
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl py-2 mt-1 hidden group-hover:block z-50">
                <div className="relative bg-white rounded-lg">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/charity"
                    className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    No One Left Behind
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/blog" className="hover:bg-primary-700 px-3 py-2 rounded-md">Blog</Link>
            <Link to="/contact" className="hover:bg-primary-700 px-3 py-2 rounded-md">Contact</Link>
            <Link 
              to="/cart" 
              className="flex items-center hover:bg-primary-700 px-3 py-2 rounded-md"
            >
              <ShoppingCart className="h-5 w-5 mr-1" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/cart" 
              className="mr-4 hover:bg-primary-700 p-2 rounded-md"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-primary-800 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 rounded-md hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/charity"
              className="flex items-center px-3 py-2 rounded-md text-secondary-300 hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="h-4 w-4 mr-2" />
              No One Left Behind
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;