import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const AssetDocumentationGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Financial Records',
      items: [
        'Bank Statements',
        'Investment Portfolios',
        'Retirement Accounts',
        'Credit Reports',
        'Tax Returns',
      ],
    },
    {
      title: 'Property Documentation',
      items: [
        'Real Estate Deeds',
        'Vehicle Titles',
        'Business Ownership',
        'Intellectual Property',
        'Personal Property',
      ],
    },
    {
      title: 'Valuation Methods',
      items: [
        'Professional Appraisals',
        'Market Analysis',
        'Depreciation Factors',
        'Future Value Projections',
        'Business Valuations',
      ],
    },
    {
      title: 'Debt Documentation',
      items: [
        'Mortgage Statements',
        'Credit Card Balances',
        'Student Loans',
        'Business Loans',
        'Personal Debts',
      ],
    },
  ];

  const practicalTips = [
    'Gather documents early',
    'Use professional valuations',
    'Keep detailed inventories',
    'Document inheritance claims',
    'Update regularly',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Complete Guide to Asset Documentation</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive guide to documenting and valuing assets for prenuptial agreements.
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
                    Understanding {section.title.toLowerCase()} is crucial for a comprehensive prenuptial agreement.
                    Proper documentation ensures transparency and enforceability.
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
            <div className="bg-primary-50 rounded-xl p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Professional Help?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our experts can assist with documenting and valuing your assets for your prenuptial agreement.
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

export default AssetDocumentationGuidePage;
