import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Settings } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const PlatformSetupPage: React.FC = () => {
  const services = [
    {
      id: 'platform-configuration',
      title: 'Platform Configuration',
      icon: <Settings className="w-6 h-6 text-primary-600" />,
      description: 'Expert setup and configuration of online learning platforms.'
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive technical support for platform implementation.'
    }
  ];

  const topics = [
    {
      title: 'Platform Selection',
      content: `
        Choosing the right learning platform:

        1. Platform Options
        - LMS Platforms
          * Moodle
          * Canvas
          * Blackboard
          * Teachable
          * Thinkific
          * Kajabi
          * LearnDash
          * Open edX

        2. Feature Comparison
        - Platform Features
          * Course hosting
          * Student management
          * Content delivery
          * Assessment tools
          * Analytics
          * Payment processing
          * Integration options
          * Customization

        3. Selection Criteria
        - Decision Factors
          * Budget requirements
          * Technical needs
          * Scalability
          * User experience
          * Support services
          * Security features
          * Mobile access
          * Integration capabilities

        [Extended platform analysis...]
      `,
      items: [
        'Platform Options',
        'Feature Analysis',
        'Selection Process',
        'Cost Comparison',
        'Technical Requirements'
      ]
    },
    {
      title: 'Technical Setup',
      content: `
        Platform configuration and setup:

        1. Initial Setup
        - Configuration Steps
          * Domain setup
          * SSL installation
          * User roles
          * Permissions
          * Branding elements
          * Email settings
          * Payment gateway
          * Security settings

        2. Course Configuration
        - Setup Elements
          * Course structure
          * Navigation setup
          * Content upload
          * Module organization
          * Assessment tools
          * Discussion forums
          * Progress tracking
          * Certification system

        [Detailed setup guidelines...]
      `,
      items: [
        'Initial Configuration',
        'Course Setup',
        'Technical Settings',
        'Integration Steps',
        'Testing Procedures'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Platform Setup"
      description="Comprehensive guide to selecting and configuring online learning platforms."
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
                <div className="prose max-w-none mb-6">
                  {section.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Our Services
              </h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 bg-gray-50 rounded-md"
                  >
                    <div className="flex items-start space-x-3">
                      {service.icon}
                      <div>
                        <h3 className="font-medium text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Platform Setup Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your learning platform configuration.
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

export default PlatformSetupPage;