import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-secondary-500" />
              <span className="font-bold text-xl">BSwisdom</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Brilliant Strategic Wisdom for your professional needs
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/academic" className="text-gray-400 hover:text-white">Academic Services</Link></li>
              <li><Link to="/resources/legal" className="text-gray-400 hover:text-white">Legal Services</Link></li>
              <li><Link to="/resources/business-plans" className="text-gray-400 hover:text-white">Business Services</Link></li>
              <li><Link to="/resources/website" className="text-gray-400 hover:text-white">Website Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/charity" className="text-gray-400 hover:text-white">No One Left Behind Charity</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BSwisdom.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;