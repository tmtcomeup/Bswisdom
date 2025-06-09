import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { FileText, Edit, CheckSquare, Award } from 'lucide-react';

const ResumeWriting: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Content Development',
      topics: [
        'Professional Summary Creation',
        'Work Experience Descriptions',
        'Skills Assessment',
        'Achievement Highlights'
      ]
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: 'Writing Guidelines',
      topics: [
        'Action Verbs Usage',
        'Quantifiable Results',
        'Industry Keywords',
        'Clear Communication'
      ]
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Formatting Tips',
      topics: [
        'Section Organization',
        'Visual Hierarchy',
        'Font Selection',
        'Spacing Guidelines'
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Best Practices',
      topics: [
        'ATS Optimization',
        'Industry Standards',
        'Common Mistakes',
        'Professional Tone'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Resume Writing Guide"
      description="Expert guidance for writing professional resumes"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Resume Writing Guide</h1>
          <p className="text-xl text-gray-600">
            Learn how to write compelling resumes that get you noticed by employers.
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

export default ResumeWriting;
