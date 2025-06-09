import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const AnalyticsToolsPage: React.FC = () => {
  const topics = [
    {
      title: 'Data Analysis Tools',
      items: [
        'Business Intelligence',
        'Data Visualization',
        'Statistical Software',
        'Data Mining Tools',
        'Reporting Platforms',
      ],
    },
    {
      title: 'Implementation Steps',
      items: [
        'Data Collection',
        'Data Cleaning',
        'Data Analysis',
        'Visualization',
        'Reporting',
      ],
    },
    {
      title: 'Key Metrics',
      items: [
        'KPIs',
        'Performance Indicators',
        'Business Metrics',
        'Financial Ratios',
        'Customer Analytics',
      ],
    },
  ];

  const relatedGuides = [
    {
      title: 'Data Analysis Guide',
      description: 'Master data analysis techniques',
      path: '../guides/data-analysis',
    },
    {
      title: 'Tool Selection Guide',
      description: 'Choose the right analytics tools',
      path: '../guides/tool-selection',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <LineChart className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Analytics Tools</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore data analysis and reporting solutions to gain insights and improve business performance.
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
            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Guides
              </h2>
              <div className="space-y-4">
                {relatedGuides.map((guide, index) => (
                  <Link
                    key={index}
                    to={guide.path}
                    className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="font-medium text-primary-600 mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Analytics Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your data analysis needs.
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

export default AnalyticsToolsPage;