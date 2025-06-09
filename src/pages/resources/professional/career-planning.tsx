import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Compass, BarChart, Briefcase, Target } from 'lucide-react';

const CareerPlanning: React.FC = () => {
  const sections = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Career Assessment',
      topics: [
        'Skills Evaluation',
        'Interest Mapping',
        'Values Alignment',
        'Personality Assessment'
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Setting',
      topics: [
        'Short-term Goals',
        'Long-term Vision',
        'Action Planning',
        'Milestone Tracking'
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Industry Analysis',
      topics: [
        'Market Research',
        'Industry Trends',
        'Salary Research',
        'Growth Opportunities'
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Professional Development',
      topics: [
        'Skill Enhancement',
        'Networking Strategy',
        'Education Planning',
        'Career Transitions'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Career Planning Resources"
      description="Strategic resources for effective career planning and development"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Career Planning Resources</h1>
          <p className="text-xl text-gray-600">
            Navigate your professional journey with our comprehensive career planning tools and strategies.
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

export default CareerPlanning;
