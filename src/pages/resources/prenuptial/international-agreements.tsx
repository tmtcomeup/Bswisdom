import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Globe, Building, Scale, FileCheck } from 'lucide-react';

const PrenuptialInternationalAgreements: React.FC = () => {
  const sections = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'International Jurisdiction',
      topics: [
        'Choice of Law Provisions',
        'Jurisdictional Requirements',
        'Cross-Border Enforcement',
        'International Recognition'
      ]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Legal Framework',
      topics: [
        'Foreign Legal Systems',
        'Treaty Compliance',
        'Conflict Resolution',
        'Documentation Standards'
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Cultural Considerations',
      topics: [
        'Cultural Differences',
        'Religious Requirements',
        'Traditional Practices',
        'Local Customs'
      ]
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Documentation Requirements',
      topics: [
        'Translation Services',
        'Document Authentication',
        'Notarization Process',
        'Filing Requirements'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="International Prenuptial Agreements"
      description="Guidance for creating internationally recognized prenuptial agreements"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">International Prenuptial Agreements</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guidance for drafting and enforcing prenuptial agreements across international jurisdictions.
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

export default PrenuptialInternationalAgreements;
