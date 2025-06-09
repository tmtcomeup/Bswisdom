import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Compass } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const CoursePlanningPage: React.FC = () => {
  const services = [
    {
      id: 'curriculum-development',
      title: 'Curriculum Development',
      icon: <Compass className="w-6 h-6 text-primary-600" />,
      description: 'Strategic course planning and curriculum development services.'
    },
    {
      id: 'learning-design',
      title: 'Learning Design',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Expert guidance for instructional design and learning objectives.'
    }
  ];

  const topics = [
    {
      title: 'Course Structure',
      content: `
        Essential elements of course planning:

        1. Curriculum Design
        - Course Framework
          * Learning objectives
          * Module structure
          * Topic sequence
          * Time allocation
          * Resource planning
          * Activity design
          * Assessment strategy
          * Learning paths

        2. Content Organization
        - Course Elements
          * Module outlines
          * Lesson plans
          * Learning materials
          * Activity types
          * Discussion topics
          * Project guidelines
          * Assessment tools
          * Resource lists

        3. Delivery Strategy
        - Implementation Plan
          * Teaching methods
          * Content formats
          * Interaction design
          * Technology tools
          * Support systems
          * Progress tracking
          * Feedback methods
          * Success metrics

        [Extended planning guidelines...]
      `,
      items: [
        'Course Structure',
        'Content Planning',
        'Delivery Methods',
        'Resource Planning',
        'Assessment Design'
      ]
    },
    {
      title: 'Learning Design',
      content: `
        Instructional design principles:

        1. Learning Objectives
        - Objective Development
          * Knowledge goals
          * Skills outcomes
          * Competency levels
          * Performance targets
          * Measurable results
          * Assessment criteria
          * Success indicators
          * Progress markers

        2. Engagement Strategy
        - Student Interaction
          * Activity design
          * Discussion forums
          * Group projects
          * Interactive content
          * Practice exercises
          * Feedback loops
          * Peer learning
          * Collaboration tools

        [Detailed design strategies...]
      `,
      items: [
        'Learning Goals',
        'Student Engagement',
        'Content Design',
        'Activity Planning',
        'Assessment Methods'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Course Planning"
      description="Comprehensive guidance for planning and developing effective online courses."
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
                Need Course Planning Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your course development.
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

export default CoursePlanningPage;