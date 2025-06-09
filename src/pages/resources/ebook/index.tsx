import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Book } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const EbookResourcesPage: React.FC = () => {
  const services = [
    {
      id: 'fiction-writing',
      title: 'Fiction Writing',
      icon: <Book className="w-6 h-6 text-primary-600" />,
      description: 'Craft compelling fiction stories with expert guidance.',
    },
    {
      id: 'nonfiction-writing',
      title: 'Non-Fiction Writing',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Create informative and engaging non-fiction content.',
    },
    {
      id: 'book-marketing',
      title: 'Book Marketing',
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      description: 'Promote and market your ebook effectively.',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Ebook Creation Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive resources for writing, formatting, and publishing your ebook.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/ebook/${service.id}`}
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
            <Link
              to="/resources/ebook/guides/writing-process"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Writing Process Guide
                </h3>
                <p className="text-gray-600">
                  Step-by-step approach to planning and writing your ebook.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/ebook/guides/publishing-platforms"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Publishing Platforms Guide
                </h3>
                <p className="text-gray-600">
                  Choose the right platform for distributing your ebook.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/ebook/guides/formatting-tips"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Formatting Tips
                </h3>
                <p className="text-gray-600">
                  Professional formatting techniques for ebooks.
                </p>
                <div className="text-primary-600 font-medium">
                  Read More →
                </div>
              </div>
            </Link>
            <Link
              to="/resources/ebook/guides/marketing-strategies"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Marketing Strategies
                </h3>
                <p className="text-gray-600">
                  Effective methods for promoting your published ebook.
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
            <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Ebook?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get expert help with writing, formatting, and publishing your ebook.
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

export default EbookResourcesPage;