import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Briefcase, TrendingUp, Target, Book } from 'lucide-react';

const CareerDevelopment: React.FC = () => {
  const sections = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Career Planning',
      topics: [
        'Career Path Mapping',
        'Industry Analysis',
        'Skill Gap Assessment',
        'Professional Development Plans'
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Strategies',
      topics: [
        'Leadership Development',
        'Professional Certifications',
        'Continuing Education',
        'Mentorship Programs'
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Career Advancement',
      topics: [
        'Promotion Strategies',
        'Performance Optimization',
        'Personal Branding',
        'Career Transitions'
      ]
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Professional Resources',
      topics: [
        'Industry Publications',
        'Professional Associations',
        'Networking Events',
        'Career Workshops'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Career Development Resources"
      description="Comprehensive resources for career growth and advancement"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Career Development Resources</h1>
          <p className="text-xl text-gray-600">
            Strategic guidance and resources for advancing your professional career.
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

export default CareerDevelopment;
