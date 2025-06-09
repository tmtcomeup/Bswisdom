import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { FileText, Check, AlertTriangle, Book } from 'lucide-react';

const MotionWritingGuide: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Motion Structure',
      topics: [
        'Caption and Title',
        'Statement of Facts',
        'Legal Arguments',
        'Prayer for Relief'
      ]
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Writing Tips',
      topics: [
        'Clear and Concise Language',
        'Supporting Authority',
        'Proper Citations',
        'Persuasive Arguments'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Common Pitfalls',
      topics: [
        'Procedural Errors',
        'Weak Arguments',
        'Missing Deadlines',
        'Improper Format'
      ]
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Research Methods',
      topics: [
        'Case Law Research',
        'Statutory Analysis',
        'Local Rules Review',
        'Precedent Study'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Motion Writing Guide"
      description="Comprehensive guide for legal motion writing"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Motion Writing Guide</h1>
          <p className="text-xl text-gray-600">
            Master the art of drafting effective legal motions with our comprehensive guide.
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

export default MotionWritingGuide;