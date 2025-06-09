import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const WorkflowAutomationPage: React.FC = () => {
  const topics = [
    {
      title: 'Automation Tools',
      items: [
        'Workflow Software',
        'Integration Platforms',
        'Robotic Process Automation',
        'Business Process Management',
        'Low-Code/No-Code Tools',
      ],
    },
    {
      title: 'Automation Strategies',
      items: [
        'Process Mapping',
        'Task Identification',
        'Trigger Definition',
        'Action Configuration',
        'Workflow Testing',
      ],
    },
    {
      title: 'Business Applications',
      items: [
        'Marketing Automation',
        'Sales Automation',
        'Customer Service',
        'HR Processes',
        'Finance Operations',
      ],
    },
  ];

  const relatedGuides = [
    {
      title: 'Automation Guide',
      description: 'Implement workflow automation',
      path: '../guides/automation-guide',
    },
    {
      title: 'Tool Selection Guide',
      description: 'Choose the right automation tools',
      path: '../guides/tool-selection',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Settings className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Workflow Automation</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Streamline your business processes and improve efficiency with workflow automation tools and strategies.
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
                Need Automation Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help implementing workflow automation.
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

export default WorkflowAutomationPage;