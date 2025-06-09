 import React from 'react';
 import { Link } from 'react-router-dom';
 import { Scale, ArrowRight, BookOpen, FileText, Building, Shield } from 'lucide-react';
 import ResourceLayout from '../../../components/ResourceLayout';

const CorporateReviewPage: React.FC = () => {
  const sections = [
    {
      title: 'Due Diligence Analysis',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      items: [
        'Corporate Structure Review',
        'Financial Documentation Analysis',
        'Material Contracts Examination',
        'Asset Portfolio Assessment',
        'Subsidiary Relationships'
      ]
    },
    {
      title: 'Governance & Compliance',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      items: [
        'Board Structure & Operations',
        'Regulatory Framework Review',
        'Policy Implementation',
        'Compliance Program Evaluation',
        'Internal Controls Assessment'
      ]
    },
    {
      title: 'Risk Management',
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      items: [
        'Operational Risk Analysis',
        'Legal Exposure Assessment',
        'Financial Risk Evaluation',
        'Strategic Risk Planning',
        'Mitigation Strategy Development'
      ]
    },
    {
      title: 'Transaction Support',
      icon: <Building className="w-6 h-6 text-primary-600" />,
      items: [
        'M&A Transaction Analysis',
        'Deal Structure Review',
        'Integration Planning',
        'Synergy Assessment',
        'Post-merger Compliance'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Corporate Case Review"
      description="Strategic analysis of business disputes, corporate litigation, and regulatory compliance matters."
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-900 ml-3">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-lg p-6 mt-8">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Expert Corporate Review Assistance?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Get comprehensive support for your business case review from our experienced team.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default CorporateReviewPage;