import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search, Users, BarChart, Target } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

interface Section {
  title: string;
  icon: React.ReactElement;
  items: string[];
}

interface Guide {
  title: string;
  description: string;
  path: string;
}

const MarketAnalysisPage: React.FC = () => {
  const sections: Section[] = [
    {
      title: 'Market Research',
      icon: <Search className="w-6 h-6 text-primary-600" />,
      items: [
        'Industry Analysis',
        'Market Size Evaluation',
        'Growth Trends',
        'Market Dynamics',
        'Competitive Landscape'
      ]
    },
    {
      title: 'Customer Analysis',
      icon: <Users className="w-6 h-6 text-primary-600" />,
      items: [
        'Target Demographics',
        'Customer Segments',
        'Buying Behavior',
        'Need Analysis',
        'Pain Points'
      ]
    },
    {
      title: 'Competitive Analysis',
      icon: <BarChart className="w-6 h-6 text-primary-600" />,
      items: [
        'Competitor Mapping',
        'SWOT Analysis',
        'Market Position',
        'Competitive Advantage',
        'Market Share'
      ]
    },
    {
      title: 'Market Strategy',
      icon: <Target className="w-6 h-6 text-primary-600" />,
      items: [
        'Market Entry Plan',
        'Positioning Strategy',
        'Value Proposition',
        'Distribution Channels',
        'Growth Opportunities'
      ]
    }
  ];

  const relatedGuides: Guide[] = [
    {
      title: 'Market Research Guide',
      description: 'Learn effective techniques for conducting thorough market research',
      path: '../guides/market-research',
    },
    {
      title: 'Financial Projections Guide',
      description: 'Connect market analysis to financial forecasting',
      path: '../guides/financial-projections',
    },
    {
      title: 'Grant Writing Guide',
      description: 'Incorporate market analysis into grant proposals',
      path: '../guides/grant-writing',
    }
  ];

  return (
    <ResourceLayout
      title="Market Analysis"
      description="Comprehensive guidance for conducting thorough market analysis to validate your business concept and identify opportunities."
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-900 ml-3">
                  {section.title}
                </h2>
              </div>
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

        {/* Related Resources Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedGuides.map((guide, index) => (
              <Link
                key={index}
                to={guide.path}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="font-medium text-primary-600 mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 p-6 bg-primary-50 rounded-lg">
            <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Help With Market Analysis?
            </h3>
            <p className="text-gray-600 mb-4">
              Get expert assistance with your market research and competitive analysis from our experienced consultants.
            </p>
            <Link
              to="/contact"
              className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default MarketAnalysisPage;