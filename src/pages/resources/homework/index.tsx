import React from 'react';
import { Link } from 'react-router-dom';
import { School, Calculator, BookOpen, FileText } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const HomeworkPage: React.FC = () => {
  const services = [
    {
      id: 'math-sciences',
      title: 'Math & Sciences',
      icon: <Calculator className="w-6 h-6 text-primary-600" />,
      description: 'Support for mathematics, physics, chemistry, and biology.',
    },
    {
      id: 'languages-literature',
      title: 'Languages & Literature',
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      description: 'Assistance with language arts and literary analysis.',
    },
    {
      id: 'social-studies',
      title: 'Social Studies',
      icon: <School className="w-6 h-6 text-primary-600" />,
      description: 'Resources for history, geography, and social sciences.',
    },
    {
      id: 'test-preparation',
      title: 'Test Preparation',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Strategies and materials for exam success.',
    },
  ];

  const guides = [
    {
      id: 'study-techniques',
      title: 'Study Techniques Guide',
      description: 'Effective methods for learning and retention.',
    },
    {
      id: 'time-management',
      title: 'Time Management Guide',
      description: 'Strategies for balancing study and other activities.',
    },
    {
      id: 'exam-strategies',
      title: 'Exam Preparation Strategies',
      description: 'Tips for successful test-taking and exam preparation.',
    },
    {
      id: 'note-taking',
      title: 'Note-Taking Methods',
      description: 'Efficient techniques for classroom and study notes.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <School className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Homework & Test Guidance Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access comprehensive resources for academic success, study skills, and test preparation.
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
                to={`/resources/homework/guides/${guide.id}`}
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
            <School className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Academic Support?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of subject matter experts is ready to help you succeed in your studies.
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

export default HomeworkPage;
