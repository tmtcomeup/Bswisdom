import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Settings, GitBranch, Briefcase, TrendingUp, BarChart2, BookOpen, BarChart3 } from 'lucide-react';

const TradingPage: React.FC = () => {
  const services = [
    {
      id: 'strategy-development',
      title: 'Strategy Development',
      icon: <Briefcase className="w-6 h-6 text-primary-600" />,
      description: 'Create and refine automated trading strategies.',
    },
    {
      id: 'algorithm-design',
      title: 'Algorithm Design',
      icon: <GitBranch className="w-6 h-6 text-primary-600" />,
      description: 'Technical implementation of trading algorithms.',
    },
    {
      id: 'testing-optimization',
      title: 'Testing & Optimization',
      icon: <Settings className="w-6 h-6 text-primary-600" />,
      description: 'Backtesting and performance optimization tools.',
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: <LineChart className="w-6 h-6 text-primary-600" />,
      description: 'Live deployment and monitoring solutions.',
    },
  ];

  const guides = [
    {
      id: 'market-analysis',
      title: 'Market Analysis Guide',
      description: 'Understanding market dynamics and indicators.',
    },
    {
      id: 'risk-management',
      title: 'Risk Management Guide',
      description: 'Implementing effective risk control measures.',
    },
    {
      id: 'performance-monitoring',
      title: 'Performance Monitoring Guide',
      description: 'Track and analyze trading bot performance.',
    },
    {
      id: 'api-integration',
      title: 'API Integration Guide',
      description: 'Connect with various trading platforms.',
    },
  ];

  const sections = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Trading Fundamentals',
      description: 'Essential concepts and principles of trading',
      path: 'fundamentals'
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Technical Analysis',
      description: 'Chart patterns and technical indicators',
      path: 'technical-analysis'
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Trading Strategies',
      description: 'Various trading approaches and methodologies',
      path: 'strategies'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Risk Management',
      description: 'Portfolio and risk management techniques',
      path: 'risk-management'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-8 h-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">Custom Trading Robot Development</h1>
        </div>
        <p className="text-lg text-gray-600">
          Access comprehensive resources for developing and implementing automated trading solutions.
        </p>
      </div>

      <div className="space-y-12 mt-8">
        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.id}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Guides Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                to={`guides/${guide.id}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600">
                    {guide.description}
                  </p>
                  <div className="text-primary-600 font-medium">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trading Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Trading Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Link
                key={index}
                to={section.path}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <p className="text-gray-600">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <LineChart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Trading Robot?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced developers and trading experts is ready to help you create a custom automated trading solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPage;