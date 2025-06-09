import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { BookOpen, Search, FileText, History } from 'lucide-react';

const StatutoryGuide: React.FC = () => {
  const sections = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Statutory Research',
      topics: [
        'Code Navigation',
        'Section Analysis',
        'Cross-Reference Tools',
        'Amendment Tracking'
      ]
    },
    {
      icon: <History className="w-6 h-6" />,
      title: 'Legislative History',
      topics: [
        'Bill Tracking',
        'Committee Reports',
        'Floor Debates',
        'Amendment History'
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Interpretation',
      topics: [
        'Plain Meaning Rule',
        'Legislative Intent',
        'Canons of Construction',
        'Contextual Analysis'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Application',
      topics: [
        'Element Analysis',
        'Regulatory Framework',
        'Compliance Requirements',
        'Exception Handling'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Statutory Research Guide"
      description="Comprehensive guide to statutory research and interpretation"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Statutory Research Guide</h1>
          <p className="text-xl text-gray-600">
            Learn effective techniques for statutory research and interpretation.
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

export default StatutoryGuide;
