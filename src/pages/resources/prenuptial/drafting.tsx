import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { FileText, CheckSquare, AlertTriangle, PenTool } from 'lucide-react';

const PrenuptialDrafting: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Essential Components',
      topics: [
        'Property Division',
        'Asset Disclosure',
        'Debt Allocation',
        'Inheritance Rights'
      ]
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Drafting Guidelines',
      topics: [
        'Clear Language',
        'Specific Terms',
        'Future Considerations',
        'Modification Clauses'
      ]
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Legal Requirements',
      topics: [
        'Voluntary Execution',
        'Full Disclosure',
        'Independent Counsel',
        'Timing Requirements'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Common Pitfalls',
      topics: [
        'Unconscionable Terms',
        'Incomplete Disclosure',
        'Improper Execution',
        'Vague Provisions'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Prenuptial Agreement Drafting"
      description="Guidelines for drafting effective prenuptial agreements"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Prenuptial Agreement Drafting Guide</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guidelines for drafting enforceable prenuptial agreements.
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

export default PrenuptialDrafting;
