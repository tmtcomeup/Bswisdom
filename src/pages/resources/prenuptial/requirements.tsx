import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Scale, FileText, Clock, AlertTriangle } from 'lucide-react';

const PrenuptialRequirements: React.FC = () => {
  const sections = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Legal Standards',
      topics: [
        'Fairness Requirements',
        'Capacity to Contract',
        'Voluntary Execution',
        'Financial Disclosure'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Timing Requirements',
      topics: [
        'Execution Deadlines',
        'Review Periods',
        'Modification Windows',
        'Updating Provisions'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Documentation',
      topics: [
        'Asset Schedules',
        'Income Statements',
        'Liability Disclosures',
        'Supporting Documents'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Enforceability Factors',
      topics: [
        'Independent Counsel',
        'Full Disclosure',
        'Unconscionability Test',
        'Procedural Fairness'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Prenuptial Agreement Requirements"
      description="Legal requirements for valid prenuptial agreements"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Legal Requirements for Prenuptial Agreements</h1>
          <p className="text-xl text-gray-600">
            Understanding the essential requirements for creating legally valid and enforceable prenuptial agreements.
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

export default PrenuptialRequirements;
