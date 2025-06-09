import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const CoverLetterGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Essential Components',
      items: [
        'Opening Paragraph',
        'Company Research',
        'Relevant Skills',
        'Key Achievements',
        'Call to Action',
      ],
    },
    {
      title: 'Writing Strategies',
      items: [
        'Addressing Hiring Manager',
        'Showing Enthusiasm',
        'Customization Tips',
        'Value Proposition',
        'Professional Tone',
      ],
    },
    {
      title: 'Common Mistakes',
      items: [
        'Generic Content',
        'Length Issues',
        'Grammar Errors',
        'Poor Formatting',
        'Missing Details',
      ],
    },
    {
      title: 'Showcasing Personality',
      items: [
        'Personal Brand',
        'Company Culture Fit',
        'Unique Perspective',
        'Story Elements',
        'Professional Voice',
      ],
    },
  ];

  const practicalTips = [
    'Research the company',
    'Use specific examples',
    'Keep it concise',
    'Show enthusiasm',
    'Proofread carefully',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Writing a Cover Letter That Gets You Noticed</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Learn how to craft compelling cover letters that showcase your value and land interviews.
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
                Writing Tips
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
                Need Cover Letter Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help writing your cover letter.
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

export default CoverLetterGuidePage;