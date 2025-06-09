import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ArrowUp } from 'lucide-react';

interface ResourceLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
// Moved state and effect inside component
}

const ResourceLayout: React.FC<ResourceLayoutProps> = ({ children, title, description }) => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');

  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { path, name };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-500">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.path} className="flex items-center">
                  <ChevronRight className="flex-shrink-0 h-5 w-5 text-gray-400" />
                  <Link
                    to={crumb.path}
                    className={`ml-4 ${
                      index === breadcrumbs.length - 1
                        ? 'text-primary-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {crumb.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <div className="mb-8 border-b border-gray-200 pb-5">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">{title}</h1>
            {description && (
              <p className="mt-2 text-lg text-gray-500">{description}</p>
            )}
          </div>
        )}
        {children}
      </main>
      
      {/* Back-to-top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ResourceLayout;