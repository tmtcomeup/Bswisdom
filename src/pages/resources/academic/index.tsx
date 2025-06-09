import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, FileText, Book } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const AcademicPage: React.FC = () => {
  const services = [
    {
      id: 'research-papers',
      title: 'Research Papers',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive guidance for academic research paper writing.',
    },
    {
      id: 'thesis-writing',
      title: 'Thesis Writing',
      icon: <Book className="w-6 h-6 text-primary-600" />,
      description: 'Expert support for thesis development and writing.',
    },
    {
      id: 'dissertation-support',
      title: 'Dissertation Support',
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />,
      description: 'Guidance through the dissertation writing process.',
    },
    {
      id: 'literature-reviews',
      title: 'Literature Reviews',
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      description: 'Methods for comprehensive literature review and analysis.',
    },  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <GraduationCap className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Academic Writing Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert guidance and resources for academic writing, research, and scholarly publications.
          </p>
        </div>        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/academic/${service.id}`}
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
          </div>        </div>

        {/* Guides Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link
              to="/resources/academic/guides/research-methodology"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Research Methodology Guide
                </h3>
                <p className="text-gray-600">
                  Comprehensive guide to research methods and academic inquiry techniques.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/academic/guides/citation-styles"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Citation Styles Guide
                </h3>
                <p className="text-gray-600">
                  Master APA, MLA, Chicago, and other essential citation formats.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/academic/guides/writing-standards"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Academic Writing Standards
                </h3>
                <p className="text-gray-600">
                  Essential guidelines for clear, effective academic writing.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/academic/guides/peer-review"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Peer Review Guide
                </h3>
                <p className="text-gray-600">
                  Navigate the peer review process and provide constructive feedback.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Excel in Academic Writing?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get expert help with your academic writing and research projects.
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

export default AcademicPage;