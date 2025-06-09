import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const WebDesignPage: React.FC = () => {
  const topics = [
    {
      title: 'Design Principles',
      items: [
        'Visual Hierarchy',
        'Color Theory',
        'Typography Selection',
        'White Space Utilization',
        'Responsive Design',
      ],
    },
    {
      title: 'User Experience',
      items: [
        'Information Architecture',
        'User Flow Mapping',
        'Accessibility Standards',
        'Interaction Design',
        'Usability Testing',
      ],
    },
    {
      title: 'Design Tools',
      items: [
        'Wireframing Software',
        'Prototyping Platforms',
        'UI Design Applications',
        'Design Systems',
        'Collaboration Tools',
      ],
    },
    {
      title: 'Visual Elements',
      items: [
        'Image Selection',
        'Icon Design',
        'Animation Integration',
        'Video Implementation',
        'Graphic Design Principles',
      ],
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Palette className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Web Design Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Essential resources for creating visually stunning and user-friendly website designs that engage visitors and enhance brand identity.
          </p>
        </div>

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
            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Web Design Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance with creating a visually stunning and user-friendly website design.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
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

export default WebDesignPage;