import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const IndustryTrendsGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Technology Trends',
      items: [
        'Artificial Intelligence',
        'Remote Work Technologies',
        'Digital Transformation',
        'Cybersecurity Advances',
        'Cloud Computing',
      ],
    },
    {
      title: 'Workforce Evolution',
      items: [
        'Hybrid Work Models',
        'Skills-Based Hiring',
        'Employee Wellbeing',
        'Diversity and Inclusion',
        'Talent Analytics',
      ],
    },
    {
      title: 'Business Innovation',
      items: [
        'Sustainable Practices',
        'Data-Driven Decisions',
        'Agile Methodologies',
        'Customer Experience',
        'Digital Marketing',
      ],
    },
    {
      title: 'Future Skills',
      items: [
        'Digital Literacy',
        'Adaptive Learning',
        'Cross-Cultural Skills',
        'Innovation Mindset',
        'Data Analytics',
      ],
    },
  ];

  const keyInsights = [
    'Remote work is here to stay',
    'AI integration is accelerating',
    'Sustainability is crucial',
    'Digital skills are essential',
    'Continuous learning matters',
  ];

  return (
    <ResourceLayout
      title="Industry Trends Guide"
      description="Stay ahead with insights on emerging industry trends and developments."
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
            {/* Key Insights */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Insights
              </h2>
              <ul className="space-y-3">
                {keyInsights.map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalized insights on industry trends affecting your career.
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

export default IndustryTrendsGuidePage;
