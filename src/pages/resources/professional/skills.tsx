import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { MessageSquare, PenTool, Brain, Users } from 'lucide-react';

const ProfessionalSkills: React.FC = () => {
  const sections = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Communication Skills',
      topics: [
        'Business Writing',
        'Public Speaking',
        'Active Listening',
        'Presentation Skills'
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Critical Thinking',
      topics: [
        'Problem Solving',
        'Decision Making',
        'Analytical Skills',
        'Strategic Planning'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Leadership Skills',
      topics: [
        'Team Management',
        'Delegation',
        'Conflict Resolution',
        'Motivation Techniques'
      ]
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Technical Skills',
      topics: [
        'Digital Literacy',
        'Project Management',
        'Data Analysis',
        'Industry Tools'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Professional Skills Development"
      description="Essential skills for workplace success"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Professional Skills Development</h1>
          <p className="text-xl text-gray-600">
            Enhance your workplace success with our comprehensive professional skills development resources.
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

export default ProfessionalSkills;