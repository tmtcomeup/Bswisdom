import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const NavigatingDivorceGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Property Division',
      items: [
        'Community Property',
        'Separate Property',
        'Asset Valuation',
        'Debt Distribution',
        'Business Interests',
      ],
    },
    {
      title: 'Child Custody',
      items: [
        'Legal Custody Rights',
        'Physical Custody Options',
        'Visitation Schedules',
        'Best Interest Factors',
        'Modification Standards',
      ],
    },
    {
      title: 'Support Calculations',
      items: [
        'Child Support Guidelines',
        'Spousal Support Factors',
        'Income Determination',
        'Special Needs',
        'Duration Considerations',
      ],
    },
    {
      title: 'Legal Strategies',
      items: [
        'Negotiation Approaches',
        'Mediation Options',
        'Court Procedures',
        'Settlement Terms',
        'Post-Decree Modifications',
      ],
    },
  ];

  const practicalTips = [
    'Gather financial documents early',
    'Document child care arrangements',
    'Consider tax implications',
    'Plan for post-divorce budget',
    'Maintain detailed records',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Users className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Navigating Divorce: Key Legal Considerations</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive guide to help you understand and prepare for navigating divorce and its key legal considerations.
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
                </h2>                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    {section.title} is essential for protecting your interests during divorce proceedings. Understanding these factors helps ensure fair outcomes and protects your financial and personal well-being.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Divorce proceedings involve complex legal, financial, and emotional considerations. Each decision made during this process can have long-term consequences for you and your family. Proper preparation and understanding of your rights is crucial.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Professional case review can identify opportunities to protect assets, ensure fair custody arrangements, and avoid common pitfalls that could negatively impact your future. Knowledge of the process empowers better decision-making.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Important aspects of {section.title.toLowerCase()} include:
                  </p>
                </div>
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
                Practical Tips
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
                Need Divorce Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help navigating your divorce case.
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

export default NavigatingDivorceGuidePage;