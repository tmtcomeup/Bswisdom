import React from 'react';
import { Link } from 'react-router-dom';
import { WrenchIcon, Settings, Layout, LineChart } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const ToolsPage: React.FC = () => {
  const services = [
    {
      id: 'project-management',
      title: 'Project Management',
      icon: <WrenchIcon className="w-6 h-6 text-primary-600" />,
      description: 'Tools and templates for effective project management.',
    },
    {
      id: 'business-templates',
      title: 'Business Templates',
      icon: <Layout className="w-6 h-6 text-primary-600" />,
      description: 'Professional templates for business documentation.',
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      icon: <Settings className="w-6 h-6 text-primary-600" />,
      description: 'Resources for automating business processes.',
    },
    {
      id: 'analytics-tools',
      title: 'Analytics Tools',
      icon: <LineChart className="w-6 h-6 text-primary-600" />,
      description: 'Data analysis and reporting solutions.',
    },
  ];

  const guides = [
    {
      id: 'tool-selection',
      title: 'Tool Selection Guide',
      description: 'Choose the right tools for your business needs.',
    },
    {
      id: 'implementation',
      title: 'Implementation Guide',
      description: 'Successfully integrate new tools into your workflow.',
    },
    {
      id: 'best-practices',
      title: 'Best Practices Guide',
      description: 'Optimize tool usage and efficiency.',
    },
    {
      id: 'automation',
      title: 'Automation Guide',
      description: 'Streamline processes with automation tools.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <WrenchIcon className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Digital Tools & Templates Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access comprehensive resources for implementing and optimizing business tools and templates.
          </p>
        </div>

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

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <WrenchIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Digital Tools Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts is ready to help you implement the right tools for your business.
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
    </ResourceLayout>
  );
};

export default ToolsPage;