import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Users, MessageCircle, Scale } from 'lucide-react';

const PrenuptialNegotiation: React.FC = () => {
  const sections = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Communication Strategies',
      topics: [
        'Open Dialogue Techniques',
        'Addressing Concerns',
        'Setting Expectations',
        'Conflict Resolution'
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Fair Compromise',
      topics: [
        'Balancing Interests',
        'Mutual Benefits',
        'Alternative Solutions',
        'Risk Assessment'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Mediation Process',
      topics: [
        'Working with Mediators',
        'Joint Sessions',
        'Issue Resolution',
        'Agreement Refinement'
      ]
    },
    {
      icon: null,
      title: 'Agreement Finalization',
      topics: [
        'Terms Review',
        'Legal Consultation',
        'Document Revision',
        'Mutual Understanding'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Prenuptial Agreement Negotiation"
      description="Guide to successful prenuptial agreement negotiations"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Negotiation Strategies</h1>
          <p className="text-xl text-gray-600">
            Effective techniques for negotiating fair and lasting prenuptial agreements.
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

export default PrenuptialNegotiation;
