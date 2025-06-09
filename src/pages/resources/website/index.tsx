import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code, FileCode } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const WebsiteResourcesPage: React.FC = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      icon: <Globe className="w-6 h-6 text-primary-600" />,
      description: 'Professional website design and UI/UX services.',
    },
    {
      id: 'development',
      title: 'Development',
      icon: <Code className="w-6 h-6 text-primary-600" />,
      description: 'Custom web development and programming.',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      icon: <FileCode className="w-6 h-6 text-primary-600" />,
      description: 'Online store setup and e-commerce solutions.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Globe className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Website Creation Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert guidance and resources for designing, developing, and maintaining professional websites.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/website/${service.id}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>        </div>

        {/* Guides Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link
              to="/resources/website/guides/essential-elements"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Essential Website Elements
                </h3>
                <p className="text-gray-600">
                  Core components every professional website needs to succeed.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/website/guides/seo-optimization"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  SEO Optimization
                </h3>
                <p className="text-gray-600">
                  Optimize your website for search engines and better visibility.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/website/guides/performance-optimization"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Performance Optimization
                </h3>
                <p className="text-gray-600">
                  Speed up your website for better user experience and SEO.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/website/guides/security-practices"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Security Best Practices
                </h3>
                <p className="text-gray-600">
                  Protect your website and users with essential security measures.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get expert help with your website creation project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default WebsiteResourcesPage;