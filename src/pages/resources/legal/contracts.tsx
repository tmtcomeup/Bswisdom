import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { FileText, CheckSquare, AlertTriangle, Book } from 'lucide-react';

const Contracts: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Contract Drafting',
      topics: [
        'Essential Contract Elements',
        'Standard Clauses',
        'Terms and Conditions',
        'Legal Language Guidelines'
      ]
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Contract Review',
      topics: [
        'Due Diligence Checklist',
        'Risk Assessment',
        'Common Pitfalls',
        'Compliance Review'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Dispute Resolution',
      topics: [
        'Breach of Contract',
        'Remedies',
        'Alternative Dispute Resolution',
        'Litigation Strategy'
      ]
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Legal Research',
      topics: [
        'Case Law Analysis',
        'Statutory Requirements',
        'Jurisdiction Specifics',
        'Precedent Review'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Contract Law Resources"
      description="Comprehensive contract law resources and guidelines"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Contract Law Resources</h1>
          <p className="text-xl text-gray-600">
            Expert resources for contract drafting, review, and dispute resolution.
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

export default Contracts;
