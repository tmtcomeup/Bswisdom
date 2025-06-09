import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const relatedGuides: Guide[] = [
  {
    id: 'federal-court',
    title: 'Federal Court Guide',
    description: 'Master federal court procedures',
    path: '/resources/legal/guides/federal-court',
  },
  {
    id: 'summary-judgment',
    title: 'Summary Judgment Guide',
    description: 'Navigate federal summary judgment motions',
    path: '/resources/legal/guides/summary-judgment',
  },
];

const FederalMotionsPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 'federal-motions',
      title: 'Federal Motions',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Resources for drafting and filing federal court motions.',
    }
  ];

  const topics = [
    {
      title: 'Federal Motion Types',
      items: [
        'Motion to Dismiss (Rule 12)',
        'Summary Judgment (Rule 56)',
        'Discovery Motions',
        'Preliminary Injunctions',
        'Post-Trial Motions',
      ],
    },
    {
      title: 'Federal Requirements',
      items: [
        'Local Rules Compliance',
        'Electronic Filing',
        'Service Requirements',
        'Page Limitations',
        'Supporting Documents',
      ],
    },
    {
      title: 'Procedural Considerations',
      items: [
        'Jurisdictional Issues',
        'Timing Requirements',
        'Meet and Confer',
        'Certificate of Service',
        'Proposed Orders',
      ],
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Federal Motions</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Basic content for Federal Motions page.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/legal/${service.id}`}
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
            {relatedGuides.map((guide) => (
              <Link
                key={guide.id}
                to={guide.path}
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
            <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Federal Court Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of expert legal writers is ready to help you craft effective, persuasive motions.
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

export default FederalMotionsPage;