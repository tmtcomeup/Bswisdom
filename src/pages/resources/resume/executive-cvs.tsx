import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Briefcase, Trophy, Target, Users } from 'lucide-react';

const ExecutiveCVs: React.FC = () => {
  const sections = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Executive Positioning',
      topics: [
        'Leadership Philosophy',
        'Career Trajectory',
        'Core Competencies',
        'Executive Brand Development'
      ]
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Achievement Showcase',
      topics: [
        'Revenue Impact',
        'Team Leadership Results',
        'Strategic Initiatives',
        'Business Transformation'
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategic Elements',
      topics: [
        'Industry Vision',
        'Change Management',
        'Global Experience',
        'Board Experience'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Professional Profile',
      topics: [
        'Executive Summary',
        'Leadership Style',
        'Stakeholder Management',
        'Corporate Governance'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Executive CV Development"
      description="Craft powerful executive-level CVs that showcase leadership impact"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Executive CV Development</h1>
          <p className="text-xl text-gray-600">
            Learn how to create compelling executive CVs that demonstrate strategic leadership and business impact.
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

export default ExecutiveCVs;
