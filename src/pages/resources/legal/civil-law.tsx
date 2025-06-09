import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Scale, FileText, Gavel, Users } from 'lucide-react';

const CivilLaw: React.FC = () => {
  const sections = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Civil Procedure',
      topics: [
        'Filing Requirements',
        'Discovery Process',
        'Motion Practice',
        'Trial Preparation'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Civil Rights',
      topics: [
        'Constitutional Rights',
        'Discrimination Claims',
        'Employment Rights',
        'Housing Laws'
      ]
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: 'Tort Law',
      topics: [
        'Negligence',
        'Personal Injury',
        'Product Liability',
        'Professional Malpractice'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Family Law',
      topics: [
        'Divorce Proceedings',
        'Child Custody',
        'Support Orders',
        'Property Division'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Civil Law Resources"
      description="Comprehensive civil law resources and guidelines"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Civil Law Resources</h1>
          <p className="text-xl text-gray-600">
            Complete guide to civil law procedures, rights, and remedies.
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

export default CivilLaw;
