import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Layout, BookOpen, Settings } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const CoursesPage: React.FC = () => {
  const services = [
    {
      id: 'course-planning',
      title: 'Course Planning',
      icon: <Layout className="w-6 h-6 text-primary-600" />,
      description: 'Strategic planning and curriculum development for online courses.',
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      icon: <Video className="w-6 h-6 text-primary-600" />,
      description: 'Development of engaging multimedia course content.',
    },
    {
      id: 'platform-setup',
      title: 'Platform Setup',
      icon: <Settings className="w-6 h-6 text-primary-600" />,
      description: 'Technical implementation and platform configuration.',
    },
    {
      id: 'assessment-design',
      title: 'Assessment Design',
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      description: 'Creation of effective evaluation methods and materials.',
    },
  ];

  const guides = [
    {
      id: 'learning-objectives',
      title: 'Learning Objectives Guide',
      description: 'Create clear and measurable learning outcomes.',
    },
    {
      id: 'engagement-strategies',
      title: 'Student Engagement Guide',
      description: 'Methods for increasing student participation and retention.',
    },
    {
      id: 'technical-setup',
      title: 'Technical Setup Guide',
      description: 'Platform selection and configuration best practices.',
    },
    {
      id: 'course-marketing',
      title: 'Course Marketing Guide',
      description: 'Strategies for promoting your online course.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Video className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Online Course Development Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access comprehensive resources for creating engaging and effective online courses.
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
                to={`/resources/courses/guides/${guide.id}`}
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
            <Video className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Course Development Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of e-learning experts is ready to help you create engaging online courses.
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

export default CoursesPage;