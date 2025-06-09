import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Shield, FileText, Scale, Search } from 'lucide-react';

const CriminalLaw: React.FC = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Criminal Defense',
      topics: [
        'Defense Strategies',
        'Constitutional Rights',
        'Evidence Suppression',
        'Plea Bargaining'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Criminal Procedure',
      topics: [
        'Arrest Procedures',
        'Search and Seizure',
        'Miranda Rights',
        'Court Proceedings'
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Sentencing',
      topics: [
        'Sentencing Guidelines',
        'Alternative Sentences',
        'Appeals Process',
        'Post-Conviction Relief'
      ]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Investigation',
      topics: [
        'Evidence Collection',
        'Witness Interviews',
        'Forensic Analysis',
        'Case Building'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Criminal Law Resources"
      description="Comprehensive criminal law resources and defense strategies"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Criminal Law Resources</h1>
          <p className="text-xl text-gray-600">
            Essential resources for criminal defense and procedure.
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

export default CriminalLaw;
