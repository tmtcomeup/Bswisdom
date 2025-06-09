import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, FileCheck, Scale, Shield, MessageSquare, Award } from 'lucide-react';

const PrenuptialIndex: React.FC = () => {
  const services = [
    {
      id: 'agreement-drafting',
      title: 'Agreement Drafting',
      icon: <FileCheck className="w-6 h-6 text-primary-600" />,
      description: 'Professional drafting of comprehensive prenuptial agreements.',
    },
    {
      id: 'legal-review',
      title: 'Legal Review',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Expert legal review and analysis of existing agreements.',
    },
    {
      id: 'negotiation-support',
      title: 'Negotiation Support',
      icon: <MessageSquare className="w-6 h-6 text-primary-600" />,
      description: 'Professional guidance through the negotiation process.',
    },
    {
      id: 'asset-protection',
      title: 'Asset Protection',
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      description: 'Strategies to protect your assets and financial interests.',
    },
  ];

  const guides = [
    {
      id: 'prenup-basics',
      title: 'Prenuptial Agreement Basics',
      description: 'Understanding the fundamentals of prenuptial agreements.',
    },
    {
      id: 'legal-requirements',
      title: 'Legal Requirements Guide',
      description: 'State-specific requirements and legal considerations.',
    },
    {
      id: 'financial-disclosure',
      title: 'Financial Disclosure',
      description: 'How to properly disclose assets and financial information.',
    },
    {
      id: 'negotiation-tips',
      title: 'Negotiation Best Practices',
      description: 'Tips for fair and effective prenuptial negotiations.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">Prenuptial Agreement Services</h1>
        </div>
        <p className="text-lg text-gray-600">
          Professional prenuptial agreement drafting, review, and negotiation services to protect your future.
        </p>
      </div>

      <div className="space-y-12 mt-8">
        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.id}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
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
                to={`guides/${guide.id}`}
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
            <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Expert Prenuptial Agreement Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our experienced legal professionals are here to help you create a fair and comprehensive prenuptial agreement that protects both parties.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrenuptialIndex;