import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const CriminalCasePrepGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Analysis Components',
      items: [
        'Evidence Review & Assessment',
        'Witness Statement Analysis',
        'Procedural Timeline Review',
        'Legal Issues Identification',
        'Defense Strategy Evaluation',
      ],
    },
    {
      title: 'Key Considerations',
      items: [
        'Constitutional Rights',
        'Evidence Admissibility',
        'Procedural Compliance',
        'Prosecutorial Conduct',
        'Defense Options',
      ],
    },
    {
      title: 'Analysis Methodology',
      items: [
        'Chronological Review',
        'Evidence Documentation',
        'Legal Precedent Research',
        'Issue Spotting',
        'Strategy Development',
      ],
    },
  ];

  const relatedGuides = [
    {
      title: 'Evidence Analysis Framework',
      description: 'Learn systematic approaches to analyzing criminal case evidence',
      path: '../evidence-analysis',
    },
    {
      title: 'Legal Strategy Development',
      description: 'Build effective defense strategies based on case analysis',
      path: '../legal-strategy',
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Search className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Preparing for a Criminal Case Review</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive resources for analyzing criminal cases. Learn systematic approaches to evidence review, legal analysis, and strategy development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
            {topics.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Understanding {section.title.toLowerCase()} is crucial for conducting thorough criminal case reviews. This systematic approach ensures no critical elements are overlooked during the analysis process.
                  </p>
                  <p className="text-gray-700 mb-4">
                    When examining criminal cases, attention to detail and methodical evaluation can reveal procedural errors, constitutional violations, or strategic opportunities that may significantly impact case outcomes. Each component requires careful consideration within the broader legal context.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Professional case review involves not just identifying what happened, but analyzing whether proper procedures were followed, rights were protected, and evidence was legally obtained and presented. This comprehensive approach forms the foundation for effective defense strategies.
                  </p>
                  <p className="text-gray-700 mb-6">
                    The following elements should be carefully examined as part of your {section.title.toLowerCase()} process:
                  </p>
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
                Need Professional Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your criminal case review.
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

export default CriminalCasePrepGuidePage;