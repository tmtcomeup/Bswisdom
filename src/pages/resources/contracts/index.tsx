import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, FileText, Briefcase, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const ContractsPage: React.FC = () => {
  const services = [
    {
      id: 'business-contracts',
      title: 'Business Contracts',
      icon: <Briefcase className="w-6 h-6 text-primary-600" />,
      description: 'Review and drafting of comprehensive business agreements and partnerships.',
    },
    {
      id: 'employment-agreements',
      title: 'Employment Agreements',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Expert guidance on employment contracts and workplace policies.',
    },
    {
      id: 'service-contracts',
      title: 'Service Contracts',
      icon: <FileCheck className="w-6 h-6 text-primary-600" />,
      description: 'Professional service agreements and contractor relationships.',
    },
    {
      id: 'licensing-agreements',
      title: 'Licensing Agreements',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Intellectual property and technology licensing contracts.',
    },
  ];

  const guides = [
    {
      id: 'contract-terms',
      title: 'Essential Contract Terms & Conditions',
      description: 'Understanding key clauses and legal requirements for valid contracts.',
    },
    {
      id: 'negotiation-strategy',
      title: 'Contract Negotiation Strategies',
      description: 'Effective techniques for negotiating favorable terms and conditions.',
    },
    {
      id: 'risk-assessment',
      title: 'Contract Risk Assessment',
      description: 'Identifying and mitigating potential legal and business risks.',
    },
    {
      id: 'compliance-guide',
      title: 'Regulatory Compliance Guide',
      description: 'Ensuring contracts meet industry-specific regulations and standards.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FileCheck className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Contract Review & Drafting Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access comprehensive resources for creating, reviewing, and managing various types of contracts and agreements.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.id}
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
                to={`/resources/contracts/guides/${guide.id}`}
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
            <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Professional Contract Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced legal professionals is ready to help you with contract review and drafting.
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

export default ContractsPage;