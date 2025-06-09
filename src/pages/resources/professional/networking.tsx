import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Users, Globe, Calendar, MessageSquare } from 'lucide-react';

const Networking: React.FC = () => {
  const sections = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Professional Networking',
      topics: [
        'Building Connections',
        'Industry Events',
        'Professional Associations',
        'Alumni Networks'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Online Networking',
      topics: [
        'LinkedIn Optimization',
        'Social Media Presence',
        'Virtual Events',
        'Digital Networking Tools'
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Event Strategies',
      topics: [
        'Conference Planning',
        'Networking Events',
        'Follow-up Techniques',
        'Relationship Maintenance'
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Communication Skills',
      topics: [
        'Elevator Pitch',
        'Conversation Starters',
        'Active Listening',
        'Business Etiquette'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Professional Networking"
      description="Build and maintain valuable professional relationships"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Professional Networking Guide</h1>
          <p className="text-xl text-gray-600">
            Master the art of building and maintaining valuable professional relationships.
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

export default Networking;
