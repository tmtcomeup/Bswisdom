import React from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface RelatedGuide extends Guide {
  description: string;
}

const ProfessionalBioPage: React.FC = () => {
  const topics = [
    {
      title: 'Bio Components',
      items: [
        'Professional Introduction',
        'Career Highlights',
        'Expertise Areas',
        'Achievements',
        'Personal Brand',
      ],
    },
    {
      title: 'Writing Styles',
      items: [
        'First vs Third Person',
        'Tone Selection',
        'Length Variations',
        'Industry Standards',
        'Platform Adaptations',
      ],
    },
    {
      title: 'Content Strategy',
      items: [
        'Story Structure',
        'Value Proposition',
        'Career Progression',
        'Skills Showcase',
        'Call to Action',
      ],
    },
  ];

  const relatedGuides = [
    {
      title: 'Personal Branding Guide',
      description: 'Develop your professional brand',
      path: '../guides/personal-branding',
    },
    {
      title: 'LinkedIn Guide',
      description: 'Optimize your online presence',
      path: '../guides/linkedin-summary',
    },
  ];

  return (
    <ResourceLayout
      title="Professional Bio Writing"
      description="Create compelling professional biographies that showcase your expertise and engage your audience."
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
            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Guides
              </h2>
              <div className="space-y-4">
                {relatedGuides.map((guide, index) => (
                  <Link
                    key={index}
                    to={guide.path}
                    className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="font-medium text-primary-600 mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Bio Writing Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help crafting your professional bio.
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

export default ProfessionalBioPage;