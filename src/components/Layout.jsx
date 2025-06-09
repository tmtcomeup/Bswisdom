import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Brain, ShoppingCart } from 'lucide-react';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Navbar */}
      <nav className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-secondary-500" />
              <span className="font-bold text-xl">BSwisdom</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="hover:bg-primary-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="hover:bg-primary-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/resources" className="hover:bg-primary-700 px-3 py-2 rounded-md">Resources</Link>
              <Link to="/services" className="hover:bg-primary-700 px-3 py-2 rounded-md">Services</Link>
              <Link to="/charity" className="hover:bg-primary-700 px-3 py-2 rounded-md">Charity</Link>
              <Link to="/blog" className="hover:bg-primary-700 px-3 py-2 rounded-md">Blog</Link>
              <Link to="/contact" className="hover:bg-primary-700 px-3 py-2 rounded-md">Contact</Link>
              <Link to="/cart" className="hover:bg-primary-700 px-3 py-2 rounded-md">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow">
        <main>
          <Outlet />
        </main>
      </div>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-secondary-500" />
                <span className="font-bold text-xl">BSwisdom</span>
              </Link>
              <p className="mt-2 text-gray-400">Brilliant Strategic Wisdom</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/charity" className="text-gray-400 hover:text-white">Charity</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BSwisdom.org. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;