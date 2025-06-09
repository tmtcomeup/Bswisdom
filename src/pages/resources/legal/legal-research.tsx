import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Search, BookOpen, Scale, FileText } from 'lucide-react';

const LegalResearch: React.FC = () => {
  const sections = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Research Methods',
      topics: [
        'Legal Database Navigation',
        'Primary Source Analysis',
        'Secondary Source Usage',
        'Citation Methods'
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Case Law Research',
      topics: [
        'Precedent Analysis',
        'Shepardizing Cases',
        'Jurisdictional Impact',
        'Case Brief Writing'
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Statutory Research',
      topics: [
        'Legislative History',
        'Statutory Interpretation',
        'Regulatory Analysis',
        'Code Navigation'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Legal Writing',
      topics: [
        'Memo Drafting',
        'Brief Writing',
        'Citation Formats',
        'Legal Analysis'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Legal Research Resources"
      description="Comprehensive guide to legal research methods and resources"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Legal Research Resources</h1>
          <p className="text-xl text-gray-600">
            Master the art of legal research with our comprehensive guides and tools.
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

export default LegalResearch;
