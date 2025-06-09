import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const LiteraryAnalysisGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Analysis Elements',
      items: [
        'Theme Identification',
        'Character Analysis',
        'Plot Structure',
        'Setting Analysis',
        'Literary Devices',
      ],
    },
    {
      title: 'Writing Techniques',
      items: [
        'Thesis Development',
        'Evidence Integration',
        'Close Reading',
        'Quote Analysis',
        'Argument Building',
      ],
    },
    {
      title: 'Literary Elements',
      items: [
        'Symbolism',
        'Imagery',
        'Tone & Mood',
        'Point of View',
        'Style Analysis',
      ],
    },
    {
      title: 'Common Approaches',
      items: [
        'Historical Context',
        'Biographical Analysis',
        'Feminist Critique',
        'Psychological Analysis',
        'Cultural Studies',
      ],
    },
  ];

  const practicalTips = [
    'Read text multiple times',
    'Take detailed notes',
    'Mark important passages',
    'Consider context',
    'Support with evidence',
  ];

  return (
    <ResourceLayout
      title="A Guide to Literary Analysis"
      description="Master the essential techniques and approaches for analyzing literature effectively."
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
            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Analysis Tips
              </h2>
              <ul className="space-y-3">
                {practicalTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Analysis Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your literary analysis.
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

export default LiteraryAnalysisGuidePage;