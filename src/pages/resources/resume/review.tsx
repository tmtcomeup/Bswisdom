import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { CheckSquare, AlertTriangle, Eye, Settings } from 'lucide-react';

const ResumeReview: React.FC = () => {
  const sections = [
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Content Review',
      topics: [
        'Accuracy Verification',
        'Relevance Check',
        'Achievement Validation',
        'Consistency Review'
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visual Assessment',
      topics: [
        'Layout Evaluation',
        'Formatting Consistency',
        'Readability Check',
        'Design Elements'
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Technical Review',
      topics: [
        'ATS Compatibility',
        'File Format Check',
        'Link Verification',
        'Contact Info Update'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Common Issues',
      topics: [
        'Grammar & Spelling',
        'Formatting Problems',
        'Content Gaps',
        'Improvement Areas'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Resume Review Guide"
      description="Comprehensive resume review and optimization guide"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Resume Review Guide</h1>
          <p className="text-xl text-gray-600">
            Learn how to review and optimize your resume to make it stand out to employers.
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

export default ResumeReview;