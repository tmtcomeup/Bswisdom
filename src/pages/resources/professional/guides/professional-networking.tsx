import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const ProfessionalNetworkingGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Building Connections',
      items: [
        'Professional Events',
        'Industry Conferences',
        'Online Networking',
        'Alumni Networks',
        'Professional Associations',
      ],
    },
    {
      title: 'Communication Skills',
      items: [
        'Elevator Pitch',
        'Active Listening',
        'Follow-up Strategies',
        'Digital Communication',
        'Relationship Building',
      ],
    },
    {
      title: 'Platform Presence',
      items: [
        'LinkedIn Profile',
        'Professional Portfolio',
        'Social Media Branding',
        'Content Sharing',
        'Digital Engagement',
      ],
    },
    {
      title: 'Network Management',
      items: [
        'Contact Organization',
        'Regular Check-ins',
        'Value Exchange',
        'Mentorship Opportunities',
        'Long-term Relationships',
      ],
    },
  ];

  const networkingTips = [
    'Be authentically yourself',
    'Give before you ask',
    'Follow up consistently',
    'Share valuable content',
    'Maintain relationships',
  ];

  return (
    <ResourceLayout
      title="Professional Networking Guide"
      description="Master the art of building and maintaining professional relationships."
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
            {topics.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Networking Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Networking Tips
              </h2>
              <ul className="space-y-3">
                {networkingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <Users className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expand Your Network
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance on building your professional network.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default ProfessionalNetworkingGuidePage;
