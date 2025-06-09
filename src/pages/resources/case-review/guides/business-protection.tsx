import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const BusinessProtectionGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Common Types of Business Disputes',
      items: [
        'Contract Breaches',
        'Partnership Conflicts',
        'Employment Issues',
        'Intellectual Property',
        'Regulatory Compliance',
      ],
    },
    {
      title: 'Risk Mitigation',
      items: [
        'Contract Review Procedures',
        'Employee Policies',
        'Compliance Programs',
        'Documentation Systems',
        'Insurance Coverage',
      ],
    },
    {
      title: 'Litigation Avoidance',
      items: [
        'Early Dispute Resolution',
        'Alternative Dispute Methods',
        'Negotiation Strategies',
        'Settlement Approaches',
        'Preventive Measures',
      ],
    },
    {
      title: 'Dispute Resolution',
      items: [
        'Litigation Strategy',
        'Cost Management',
        'Evidence Preservation',
        'Expert Engagement',
        'Business Continuity',
      ],
    },
  ];

  const practicalTips = [
    'Review contracts regularly',
    'Document all decisions',
    'Maintain clear policies',
    'Monitor compliance',
    'Preserve business records',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Briefcase className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Protecting Your Business: Corporate Litigation Strategies</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Strategic guidance for preventing and managing business disputes, risk mitigation, and litigation planning.
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
                    {section.title} is vital for safeguarding your business interests in legal proceedings. Understanding these elements helps protect your company's assets, reputation, and operational continuity.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Business litigation can threaten the very foundation of your enterprise. Whether facing contract disputes, regulatory issues, or employment claims, proper legal strategy and case preparation are essential for protecting your investment.
                  </p>
                  <p className="text-gray-700 mb-4">
                    A comprehensive case review can identify vulnerabilities, strengthen defenses, and uncover opportunities for favorable resolution. Professional analysis ensures that business considerations are properly balanced with legal strategy.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Critical factors in {section.title.toLowerCase()} include:
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
                Need Business Protection?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help protecting your business interests.
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

export default BusinessProtectionGuidePage;