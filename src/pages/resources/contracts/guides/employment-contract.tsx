import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const EmploymentContractGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Salary & Benefits',
      items: [
        'Base Compensation',
        'Bonus Structures',
        'Equity Compensation',
        'Health Benefits',
        'Retirement Plans',
      ],
    },
    {
      title: 'Non-Compete Agreements',
      items: [
        'Scope of Restrictions',
        'Geographic Limitations',
        'Time Duration',
        'Industry Limitations',
        'Enforceability Issues',
      ],
    },
    {
      title: 'Intellectual Property',
      items: [
        'Work Product Ownership',
        'Pre-existing IP Rights',
        'Assignment Provisions',
        'License Rights',
        'Post-Employment Rights',
      ],
    },
    {
      title: 'Termination Clauses',
      items: [
        'Notice Requirements',
        'Severance Terms',
        'Cause Definitions',
        'Exit Procedures',
        'Post-Termination Obligations',
      ],
    },
  ];

  const practicalTips = [
    'Research industry standards',
    'Prioritize key terms',
    'Consider future implications',
    'Document negotiations',
    'Seek legal review',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Negotiating Your Employment Contract</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Essential guidance for understanding and negotiating key terms in your employment agreement.
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
                 {/* Salary & Benefits Content */}
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Considerations</h3>
                 <ul className="space-y-2">
                   <li className="text-gray-600">Research market salary ranges for your role and experience level</li>
                   <li className="text-gray-600">Negotiate signing bonuses and performance-based incentives</li>
                   <li className="text-gray-600">Understand equity vesting schedules and tax implications</li>
                   <li className="text-gray-600">Clarify health insurance coverage options and premium costs</li>
                   <li className="text-gray-600">Review 401(k) or pension plan details and employer match policies</li>
                 </ul>
                 {/* End Placeholder Content */}
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Negotiation Tips
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
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Contract Review?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help negotiating your employment contract.
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

export default EmploymentContractGuidePage;