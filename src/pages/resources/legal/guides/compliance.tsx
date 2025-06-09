import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const LegalComplianceGuide: React.FC = () => {
  const topics = [
    {
      title: 'Core Compliance Areas',
      items: [
        'Regulatory Framework Overview',
        'Industry-Specific Regulations',
        'Compliance Program Development',
        'Risk Assessment Methods',
        'Documentation Requirements',
      ],
    },
    {
      title: 'Implementation Steps',
      items: [
        'Policy Development',
        'Procedure Documentation',
        'Training Programs',
        'Monitoring Systems',
        'Reporting Mechanisms',
      ],
    },
    {
      title: 'Risk Management',
      items: [
        'Risk Identification',
        'Assessment Techniques',
        'Mitigation Strategies',
        'Control Implementation',
        'Continuous Monitoring',
      ],
    },
    {
      title: 'Audit & Review',
      items: [
        'Internal Audit Procedures',
        'External Audit Preparation',
        'Compliance Testing',
        'Documentation Review',
        'Corrective Actions',
      ],
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Shield className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Legal Compliance Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive guide to developing and maintaining an effective legal compliance program that meets regulatory requirements and minimizes legal risks.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
            {topics.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/resources/legal/guides/contract-drafting" className="text-primary-600 hover:text-primary-800 flex items-center">
                    Contract Drafting Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/resources/legal/guides/document-review" className="text-primary-600 hover:text-primary-800 flex items-center">
                    Document Review Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/resources/legal/guides/risk-management" className="text-primary-600 hover:text-primary-800 flex items-center">
                    Legal Risk Management Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Compliance Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance with legal compliance and risk management.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default LegalComplianceGuide;
