import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Gavel, Search, BookOpen, Scale } from 'lucide-react';

const CaseLawGuide: React.FC = () => {
  const sections = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Case Research',
      topics: [
        'Finding Relevant Cases',
        'Jurisdiction Analysis',
        'Precedent Hierarchy',
        'Citation Methods'
      ]
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: 'Case Analysis',
      topics: [
        'Case Brief Writing',
        'Holdings vs. Dicta',
        'Reasoning Analysis',
        'Factual Comparisons'
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Legal Principles',
      topics: [
        'Rule Extraction',
        'Application Methods',
        'Precedent Evolution',
        'Exception Analysis'
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Case Integration',
      topics: [
        'Brief Writing',
        'Argument Support',
        'Counter-Arguments',
        'Case Synthesis'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Case Law Guide"
      description="Comprehensive guide to case law research and analysis"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Case Law Research Guide</h1>
          <p className="text-xl text-gray-600">
            Master the techniques of effective case law research and analysis.
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

export default CaseLawGuide;
