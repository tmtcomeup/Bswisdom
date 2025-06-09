import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Search, BookOpen, Database, ListChecks } from 'lucide-react';

const LegalResearchGuide: React.FC = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Research Databases',
      topics: [
        'Legal Database Navigation',
        'Database Selection',
        'Search Strategies',
        'Resource Organization'
      ]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Research Methods',
      topics: [
        'Boolean Searching',
        'Citation Research',
        'Historical Research',
        'Cross-Reference Techniques'
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Source Analysis',
      topics: [
        'Primary Sources',
        'Secondary Sources',
        'Authority Verification',
        'Source Evaluation'
      ]
    },
    {
      icon: <ListChecks className="w-6 h-6" />,
      title: 'Research Process',
      topics: [
        'Research Planning',
        'Note Taking',
        'Result Organization',
        'Findings Documentation'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Legal Research Guide"
      description="Comprehensive guide to legal research methods and resources"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Legal Research Guide</h1>
          <p className="text-xl text-gray-600">
            Master effective legal research techniques for accurate and thorough legal analysis.
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

export default LegalResearchGuide;
