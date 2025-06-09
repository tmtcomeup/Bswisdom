import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { FileText, PenTool, Target, Star } from 'lucide-react';

const CoverLetters: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Essential Components',
      topics: [
        'Header and Contact Information',
        'Opening Paragraph Structure',
        'Body Content Organization',
        'Professional Closing'
      ]
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Writing Techniques',
      topics: [
        'Engaging Opening Lines',
        'Company Research Integration',
        'Storytelling Elements',
        'Value Proposition'
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Customization Tips',
      topics: [
        'Job Description Analysis',
        'Company Culture Alignment',
        'Skills Matching',
        'Industry-Specific Approaches'
      ]
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Best Practices',
      topics: [
        'Professional Tone',
        'Length Guidelines',
        'Format Consistency',
        'Proofreading Steps'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Cover Letter Writing Guide"
      description="Master the art of writing compelling cover letters"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Cover Letter Writing Guide</h1>
          <p className="text-xl text-gray-600">
            Learn how to craft persuasive cover letters that complement your resume and captivate employers.
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

export default CoverLetters;
