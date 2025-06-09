import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Users } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const LeadershipTrainingPage: React.FC = () => {
  const services = [
    {
      id: 'leadership-development',
      title: 'Leadership Development',
      icon: <Users className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive leadership skills development and training.'
    },
    {
      id: 'management-skills',
      title: 'Management Skills',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Essential management and team leadership capabilities.'
    }
  ];

  const topics = [
    {
      title: 'Leadership Fundamentals',
      content: `
        Core leadership principles and skills:

        1. Leadership Styles
        - Management Approaches
          * Transformational leadership
          * Servant leadership
          * Democratic leadership
          * Strategic leadership
          * Situational leadership
          * Coaching leadership
          * Vision development
          * Change management

        2. Team Leadership
        - People Management
          * Team building
          * Motivation techniques
          * Conflict resolution
          * Performance management
          * Delegation skills
          * Communication
          * Decision making
          * Empowerment

        3. Strategic Leadership
        - Strategic Skills
          * Vision creation
          * Goal setting
          * Strategic planning
          * Risk management
          * Innovation leadership
          * Change initiatives
          * Culture building
          * Organizational development

        [Extended leadership principles...]
      `,
      items: [
        'Leadership Styles',
        'Team Management',
        'Strategic Thinking',
        'Decision Making',
        'Change Leadership'
      ]
    },
    {
      title: 'Management Skills',
      content: `
        Essential management capabilities:

        1. Operational Management
        - Management Functions
          * Planning processes
          * Organization skills
          * Resource allocation
          * Project management
          * Process improvement
          * Performance metrics
          * Quality control
          * Risk assessment

        2. People Management
        - Team Development
          * Talent management
          * Performance reviews
          * Team development
          * Coaching skills
          * Feedback methods
          * Conflict resolution
          * Employee engagement
          * Career development

        [Detailed management skills...]
      `,
      items: [
        'Operational Skills',
        'People Management',
        'Project Leadership',
        'Team Development',
        'Performance Management'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Leadership Training"
      description="Comprehensive resources for developing effective leadership and management skills."
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
                Need Leadership Training?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help developing your leadership skills.
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

export default LeadershipTrainingPage;