import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Shield, DollarSign, Building, FileText } from 'lucide-react';

const AssetProtection: React.FC = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Asset Protection Strategies',
      topics: [
        'Separate Property Preservation',
        'Business Interest Protection',
        'Investment Safeguards',
        'Future Asset Planning'
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Financial Planning',
      topics: [
        'Wealth Management',
        'Retirement Planning',
        'Tax Implications',
        'Estate Integration'
      ]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Property Considerations',
      topics: [
        'Real Estate Holdings',
        'Business Ownership',
        'Intellectual Property',
        'Joint Assets'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Documentation',
      topics: [
        'Asset Inventory',
        'Valuation Reports',
        'Financial Statements',
        'Supporting Documentation'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Asset Protection in Prenuptial Agreements"
      description="Strategies for protecting assets through prenuptial agreements"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Asset Protection Strategies</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to protecting your assets through effective prenuptial planning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.topics.map((topic, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default AssetProtection;
