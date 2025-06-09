import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const CareerAdvancementGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Performance Excellence',
      items: [
        'Setting Performance Goals',
        'Exceeding Expectations',
        'Tracking Achievements',
        'Performance Reviews',
        'Continuous Improvement',
      ],
    },
    {
      title: 'Leadership Development',
      items: [
        'Team Management Skills',
        'Decision Making',
        'Strategic Planning',
        'Change Management',
        'Mentoring Others',
      ],
    },
    {
      title: 'Professional Growth',
      items: [
        'Skill Enhancement',
        'Industry Knowledge',
        'Professional Network',
        'Career Planning',
        'Advanced Training',
      ],
    },
    {
      title: 'Advancement Strategies',
      items: [
        'Promotion Preparation',
        'Career Opportunities',
        'Salary Negotiation',
        'Role Transition',
        'Executive Presence',
      ],
    },
  ];

  const quickTips = [
    'Document your achievements',
    'Build strategic relationships',
    'Seek challenging projects',
    'Stay industry-relevant',
    'Develop leadership skills',
  ];

  return (
    <ResourceLayout
      title="Career Advancement Guide"
      description="Essential strategies and insights for advancing your professional career."
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
            {/* Quick Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Advancement Tips
              </h2>
              <ul className="space-y-3">
                {quickTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <Target className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Advance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalized guidance for your career advancement journey.
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

export default CareerAdvancementGuidePage;
