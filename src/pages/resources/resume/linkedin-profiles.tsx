import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { UserCircle, Search, Network, Bell } from 'lucide-react';

const LinkedInProfiles: React.FC = () => {
  const sections = [
    {
      icon: <UserCircle className="w-6 h-6" />,
      title: 'Profile Optimization',
      topics: [
        'Professional Headline Creation',
        'About Section Writing',
        'Profile Photo Guidelines',
        'Background Image Selection'
      ]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Visibility Enhancement',
      topics: [
        'SEO Keywords Integration',
        'Skills Endorsements',
        'Recommendations Strategy',
        'Activity Optimization'
      ]
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Network Building',
      topics: [
        'Connection Strategy',
        'Group Participation',
        'Content Sharing',
        'Engagement Tactics'
      ]
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Profile Maintenance',
      topics: [
        'Regular Updates Schedule',
        'Achievement Documentation',
        'Content Calendar',
        'Analytics Monitoring'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="LinkedIn Profile Optimization"
      description="Maximize your professional presence on LinkedIn"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">LinkedIn Profile Optimization</h1>
          <p className="text-xl text-gray-600">
            Learn how to create and maintain a compelling LinkedIn profile that attracts recruiters and opportunities.
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

export default LinkedInProfiles;
