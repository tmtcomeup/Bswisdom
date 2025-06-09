import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Target, Search, FileText, Settings } from 'lucide-react';

const JobTargeting: React.FC = () => {
  const sections = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Job Analysis',
      topics: [
        'Job Description Analysis',
        'Required Skills Identification',
        'Company Research',
        'Industry Requirements'
      ]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Keyword Optimization',
      topics: [
        'ATS-Friendly Keywords',
        'Industry Terminology',
        'Skills Matching',
        'Experience Alignment'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Content Customization',
      topics: [
        'Achievement Selection',
        'Experience Highlighting',
        'Skills Prioritization',
        'Summary Adaptation'
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Strategy Development',
      topics: [
        'Application Strategy',
        'Cover Letter Alignment',
        'Portfolio Integration',
        'Follow-up Planning'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Job Targeting Guide"
      description="Strategies for targeting your resume to specific roles"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Job Targeting Guide</h1>
          <p className="text-xl text-gray-600">
            Learn how to tailor your resume to specific job roles and increase your chances of getting noticed by employers.
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

export default JobTargeting;