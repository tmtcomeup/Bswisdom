import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileText, Gavel } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const LegalResourcesPage: React.FC = () => {
  const services = [
    {
      id: 'criminal-motions',
      title: 'Criminal Motions',
      icon: <Gavel className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive resources for criminal motion writing and filing procedures.',
    },
    {
      id: 'civil-motions',
      title: 'Civil Motions',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Expert guidance on civil motion preparation and strategy.',
    },
    {
      id: 'appellate-motions',
      title: 'Appellate Motions',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Resources for effective appellate motion writing and procedures.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Legal Motion Writing Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access comprehensive resources and guides for crafting effective legal motions across various practice areas.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/legal/${service.id}`}
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
              to="/resources/legal/guides/motion-writing"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Motion Writing Guide
                </h3>
                <p className="text-gray-600">
                  Master the art of drafting effective legal motions and pleadings.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/legal/guides/legal-research-guide"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Legal Research Guide
                </h3>
                <p className="text-gray-600">
                  Comprehensive guide to effective legal research techniques.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/legal/guides/case-law"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Case Law Analysis
                </h3>
                <p className="text-gray-600">
                  Learn to analyze and apply case law effectively in legal writing.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/legal/guides/federal-court"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Federal Court Practice
                </h3>
                <p className="text-gray-600">
                  Navigate federal court rules and procedures with confidence.
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
            <Scale className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Enhance Your Legal Practice?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get expert assistance with your legal motion writing and case preparation.
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

export default LegalResourcesPage;