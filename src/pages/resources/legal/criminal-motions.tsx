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
    id: 'motion-to-suppress',
    title: 'Motion to Suppress Guide',
    description: 'Learn how to effectively challenge evidence',
    path: '/resources/legal/guides/motion-to-suppress',
  },
  {
    id: 'criminal-procedure',
    title: 'Criminal Procedure Guide',
    description: 'Master criminal court procedures and timelines',
    path: '/resources/legal/guides/criminal-procedure',
  },
];

const CriminalMotionsPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 'suppression-motions',
      title: 'Suppression Motions',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Expert assistance with motions to suppress evidence and statements.',
    },
    {
      id: 'dismissal-motions',
      title: 'Dismissal Motions',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Strategic motions to dismiss charges based on legal defects.',
    }
  ];

  const topics = [
    {
      title: 'Common Criminal Motions',
      items: [
        'Motion to Suppress Evidence',
        'Motion to Dismiss Charges',
        'Motion for Bill of Particulars',
        'Motion for Discovery',
        'Motion for Speedy Trial',
      ],
    },
    {
      title: 'Motion Requirements',
      items: [
        'Supporting Affidavits',
        'Memorandum of Law',
        'Evidence Exhibits',
        'Notice Requirements',
        'Filing Deadlines',
      ],
    },
    {
      title: 'Strategic Considerations',
      items: [
        'Timing of Motions',
        'Constitutional Issues',
        'Precedent Analysis',
        'Preservation of Error',
        'Appeal Implications',
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
            <h1 className="text-3xl font-bold text-gray-900">Criminal Motions</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert assistance with criminal motion practice, from suppression motions to dismissals. 
            Our experienced legal writers help craft compelling arguments based on constitutional law and procedural rules.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
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
              </div>
            ))}
          </div>
        </div>

        {/* Topics Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.items.map((item) => (
                    <li key={item} className="text-gray-600 flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
              Need Help With Criminal Motions?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced legal writers can help you craft compelling motions that protect your client's rights.
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

export default CriminalMotionsPage;