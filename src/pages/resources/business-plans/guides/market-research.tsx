import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Download, LineChart, FileText } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const MarketResearchGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Market Research Methods',
      items: [
        'Primary Research',
        'Secondary Research',
        'Surveys & Interviews',
        'Data Analysis',
        'Competitive Analysis',
      ],
    },
    {
      title: 'Market Size & Trends',
      items: [
        'Total Addressable Market',
        'Market Segmentation',
        'Growth Trends',
        'Industry Analysis',
        'Future Projections',
      ],
    },
    {
      title: 'Competitive Analysis',
      items: [
        'Competitor Identification',
        'SWOT Analysis',
        'Market Positioning',
        'Competitive Advantages',
        'Market Share Analysis',
      ],
    },
    {
      title: 'Customer Analysis',
      items: [
        'Demographics',
        'Psychographics',
        'Buying Behavior',
        'Customer Needs',
        'Market Feedback',
      ],
    },
  ];

  const practicalTips = [
    'Use reliable data sources',
    'Document methodology',
    'Update regularly',
    'Consider local factors',
    'Validate assumptions',
  ];

  return (
    <ResourceLayout
      title="How to Conduct a Market Analysis"
      description="A comprehensive guide to researching and analyzing your market for effective business planning."
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
            {/* Research Tools */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Research Tools
              </h3>
              <div className="space-y-4">
                <Link
                  to="/tools/market-analysis"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <LineChart className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Market Analysis Tool</p>
                    <p className="text-sm text-gray-600">Analyze market data and trends</p>
                  </div>
                </Link>
                <Link
                  to="/tools/templates"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Research Templates</p>
                    <p className="text-sm text-gray-600">Download research frameworks</p>
                  </div>
                </Link>
                <Link
                  to="/tools/report-builder"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <FileText className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Report Builder</p>
                    <p className="text-sm text-gray-600">Create professional reports</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Research Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Research Tips
              </h2>
              <ul className="space-y-3">
                {practicalTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expert Help */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Market Research Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance with your market research and analysis from our experienced consultants.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/services/market-research"
                  className="block text-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md shadow-sm text-primary-600 bg-white hover:bg-primary-50"
                >
                  View Research Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default MarketResearchGuidePage;