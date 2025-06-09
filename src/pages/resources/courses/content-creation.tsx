import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Film } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const ContentCreationPage: React.FC = () => {
  const services = [
    {
      id: 'multimedia-development',
      title: 'Multimedia Development',
      icon: <Film className="w-6 h-6 text-primary-600" />,
      description: 'Professional multimedia content creation for online courses.'
    },
    {
      id: 'content-design',
      title: 'Content Design',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Strategic content design and development services.'
    }
  ];

  const topics = [
    {
      title: 'Content Development',
      content: `
        Course content creation strategies:

        1. Video Content
        - Production Elements
          * Lecture recordings
          * Tutorial videos
          * Demonstrations
          * Screen captures
          * Video editing
          * Audio quality
          * Visual effects
          * Engagement elements

        2. Interactive Materials
        - Engagement Tools
          * Quizzes
          * Assignments
          * Discussions
          * Projects
          * Case studies
          * Simulations
          * Practice exercises
          * Group activities

        3. Supporting Resources
        - Learning Materials
          * Reading materials
          * Handouts
          * Worksheets
          * Reference guides
          * Links/resources
          * Templates
          * Examples
          * Additional reading

        [Extended content guidelines...]
      `,
      items: [
        'Video Production',
        'Interactive Content',
        'Learning Materials',
        'Resource Development',
        'Content Quality'
      ]
    },
    {
      title: 'Multimedia Elements',
      content: `
        Multimedia production and integration:

        1. Audio Development
        - Audio Elements
          * Voice recordings
          * Sound effects
          * Background music
          * Audio editing
          * Quality control
          * Format standards
          * Accessibility
          * Integration methods

        2. Visual Design
        - Design Elements
          * Graphics
          * Animations
          * Infographics
          * Charts/diagrams
          * Presentation slides
          * Visual themes
          * Brand elements
          * Design consistency

        [Detailed multimedia guidelines...]
      `,
      items: [
        'Audio Production',
        'Visual Design',
        'Graphics Creation',
        'Media Integration',
        'Quality Standards'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Content Creation"
      description="Comprehensive guide to creating engaging multimedia content for online courses."
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
                Need Content Creation Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your course content development.
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

export default ContentCreationPage;