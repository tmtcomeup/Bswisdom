import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const LegalRequirementsGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Core Requirements',
      items: [
        'Written Agreement',
        'Voluntary Execution',
        'Full Disclosure',
        'Independent Counsel',
        'Reasonable Terms',
      ],
    },
    {
      title: 'Timing Requirements',
      items: [
        'Execution Deadline',
        'Review Period',
        'Cooling-off Period',
        'Marriage Timing',
        'Filing Requirements',
      ],
    },
    {
      title: 'Formal Elements',
      items: [
        'Proper Signatures',
        'Witness Requirements',
        'Notarization',
        'Filing Procedures',
        'Documentation Standards',
      ],
    },
    {
      title: 'Validity Factors',
      items: [
        'Mental Capacity',
        'Absence of Duress',
        'Financial Disclosure',
        'Conscionable Terms',
        'Legal Representation',
      ],
    },
  ];

  const practicalTips = [
    'Start early in the process',
    'Document all disclosures',
    'Maintain separate counsel',
    'Keep detailed records',
    'Follow state guidelines',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Legal Requirements for Prenuptial Agreements</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Essential legal requirements and formalities for creating valid and enforceable prenuptial agreements.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
            {topics.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    {section.title} are fundamental to ensuring your prenuptial agreement
                    stands up to legal scrutiny and remains enforceable.
                  </p>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Legal Compliance Tips
              </h2>
              <ul className="space-y-3">
                {practicalTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-xl p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ensure Legal Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Work with our legal experts to ensure your prenuptial agreement meets all legal requirements.
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
      </div>
    </ResourceLayout>
  );
};

export default LegalRequirementsGuidePage;
