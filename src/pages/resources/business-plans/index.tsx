import React from 'react';
import { Link } from 'react-router-dom';
import { FileSpreadsheet, LineChart, Building } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const BusinessPlansPage: React.FC = () => {
  const services = [
    {
      id: 'startup-plans',
      title: 'Startup Business Plans',
      icon: <Building className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive business planning resources for startups and new ventures.',
    },
    {
      id: 'nonprofit-grants',
      title: 'Non-Profit Grants',
      icon: <FileSpreadsheet className="w-6 h-6 text-primary-600" />,
      description: 'Grant writing resources and templates for non-profit organizations.',
    },
    {
      id: 'government-contracts',
      title: 'Government Contracts',
      icon: <Building className="w-6 h-6 text-primary-600" />,
      description: 'Resources for government contract proposals and documentation.',
    },
    {
      id: 'investment-proposals',
      title: 'Investment Proposals',
      icon: <LineChart className="w-6 h-6 text-primary-600" />,
      description: 'Templates and guides for creating compelling investment proposals.',
    },
  ];

  const guides = [
    {
      id: 'market-analysis',
      title: 'Market Analysis Guide',
      description: 'Learn how to conduct thorough market research and analysis.',
    },
    {
      id: 'financial-projections',
      title: 'Financial Projections Guide',
      description: 'Create accurate and compelling financial forecasts.',
    },
    {
      id: 'grant-requirements',
      title: 'Grant Writing Requirements',
      description: 'Understanding essential components of successful grant applications.',
    },
    {
      id: 'proposal-writing',
      title: 'Proposal Writing Tips',
      description: 'Best practices for writing winning business proposals.',
    },
  ];
  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Building className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Business Plan & Grant Writing Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access comprehensive resources for creating professional business plans and grant proposals that get results.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/business-plans/${service.id}`}
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
                to={`/resources/business-plans/guides/${guide.id}`}
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
        </div>        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <Building className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Launch Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get expert help with your business planning and grant writing projects.
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

export default BusinessPlansPage;