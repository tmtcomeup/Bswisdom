import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Scale } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const CaseReviewPage: React.FC = () => {
  const services = [
    {
      id: 'criminal-analysis',
      title: 'Criminal Case Analysis',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Thorough analysis of criminal cases including evidence review and legal strategy development.',
    },
    {
      id: 'civil-litigation',
      title: 'Civil Litigation Review',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive review of civil cases, focusing on liability assessment and damages analysis.',
    },
    {
      id: 'family-law',
      title: 'Family Law Cases',
      icon: <Search className="w-6 h-6 text-primary-600" />,
      description: 'Expert review of family law matters including custody, support, and property division.',
    },
    {
      id: 'corporate-review',
      title: 'Corporate Legal Review',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Strategic analysis of corporate legal matters and compliance issues.',
    },  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Case Review & Analysis Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access comprehensive resources and methodologies for conducting thorough case reviews across various practice areas.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/case-review/${service.id}`}
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
              to="/resources/case-review/guides/criminal-case-prep"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Criminal Case Preparation
                </h3>
                <p className="text-gray-600">
                  Comprehensive guide to preparing for criminal case review and analysis.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/case-review/guides/civil-lawsuit"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Civil Lawsuit Rights
                </h3>
                <p className="text-gray-600">
                  Understand your rights and options in civil litigation proceedings.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/case-review/guides/navigating-divorce"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Navigating Divorce
                </h3>
                <p className="text-gray-600">
                  Key legal considerations and strategies for divorce proceedings.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/case-review/guides/business-protection"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Business Protection
                </h3>
                <p className="text-gray-600">
                  Strategies for protecting your business in legal disputes.
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
            <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Strengthen Your Case?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get expert help with your case review and analysis projects.
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

export default CaseReviewPage;