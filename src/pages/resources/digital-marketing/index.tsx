import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, BarChart3, Share2, Target } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const DigitalMarketingPage: React.FC = () => {
  const services = [
    {
      id: 'social-media-strategy',
      title: 'Social Media Strategy',
      icon: <Share2 className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive social media planning and content strategies.',
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      icon: <Megaphone className="w-6 h-6 text-primary-600" />,
      description: 'Create engaging content that drives traffic and conversions.',
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      icon: <Target className="w-6 h-6 text-primary-600" />,
      description: 'Search engine optimization strategies and implementation.',
    },
    {
      id: 'analytics-reporting',
      title: 'Analytics & Reporting',
      icon: <BarChart3 className="w-6 h-6 text-primary-600" />,
      description: 'Track performance and measure digital marketing success.',
    },
  ];

  const guides = [
    {
      id: 'campaign-planning',
      title: 'Campaign Planning Guide',
      description: 'Structure and plan effective digital marketing campaigns.',
    },
    {
      id: 'audience-targeting',
      title: 'Audience Targeting Guide',
      description: 'Identify and reach your ideal customer segments.',
    },
    {
      id: 'conversion-optimization',
      title: 'Conversion Optimization Guide',
      description: 'Improve website performance and conversion rates.',
    },
    {
      id: 'brand-building',
      title: 'Brand Building Guide',
      description: 'Develop a strong online brand presence and identity.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Megaphone className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Digital Marketing Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive resources for developing and implementing effective digital marketing strategies.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/digital-marketing/${service.id}`}
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
          </div>
        </div>

        {/* Guides Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                to={`/resources/digital-marketing/guides/${guide.id}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600">
                    {guide.description}
                  </p>
                  <div className="text-primary-600 font-medium">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <Megaphone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Digital Marketing Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of digital marketing experts is ready to help you grow your online presence.
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

export default DigitalMarketingPage;