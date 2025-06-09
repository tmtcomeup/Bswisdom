import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Layout, Briefcase, FileText, Users } from 'lucide-react';

const ResumeTemplates: React.FC = () => {
  const sections = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Professional Templates',
      topics: [
        'Executive Level',
        'Management Level',
        'Entry Level',
        'Career Change'
      ]
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Industry-Specific',
      topics: [
        'Technology',
        'Finance',
        'Healthcare',
        'Creative Fields'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Format Options',
      topics: [
        'Chronological',
        'Functional',
        'Combination',
        'Targeted'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Experience Level',
      topics: [
        'Student/Graduate',
        'Mid-Career',
        'Senior Level',
        'Specialist'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Resume Templates"
      description="Professional resume templates for every career stage"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Resume Templates</h1>
          <p className="text-xl text-gray-600">
            Choose from our collection of professional resume templates tailored for different industries and experience levels.
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

export default ResumeTemplates;
