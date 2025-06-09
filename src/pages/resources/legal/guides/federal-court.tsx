import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

interface Guide {
  title: string;
  description: string;
  path: string;
}

const FederalCourtGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Key Differences from State Court',
      items: [
        'Jurisdictional Requirements',
        'Procedural Rules',
        'Motion Practice',
        'Discovery Standards',
        'Filing Deadlines',
      ],
    },
    {
      title: 'Local Rules',
      items: [
        'District-Specific Requirements',
        'Judge-Specific Practices',
        'Citation Formats',
        'Page Limitations',
        'Filing Procedures',
      ],
    },
    {
      title: 'Electronic Filing',
      items: [
        'PACER/ECF System',
        'Document Formatting',
        'Service Requirements',
        'Technical Specifications',
        'Common Filing Errors',
      ],
    },
    {
      title: 'Specific Motion Types',
      items: [
        'Motion to Dismiss',
        'Discovery Motions',
        'Summary Judgment',
        'Daubert Motions',
        'Post-Trial Motions',
      ],
    },
  ];

  const practicalTips = [
    'Review local rules thoroughly before filing',
    'Maintain ECF compliance requirements',
    'Calendar all deadlines with buffer time',
    'Consider meet-and-confer requirements',
    'Prepare proposed orders when required',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Federal Court Motion Practice: Rules and Procedures</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Navigate the complexities of federal court motion practice with comprehensive guidance on rules, procedures, and best practices.
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
                    Understanding {section.title.toLowerCase()} is crucial for effective federal court practice. The federal system operates under distinct rules and procedures that differ significantly from state courts.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Federal court jurisdiction is limited and specific, requiring careful analysis of whether your case belongs in federal rather than state court. Factors such as federal question jurisdiction, diversity of citizenship, and amount in controversy all play critical roles.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The Federal Rules of Civil Procedure govern most aspects of federal litigation, from pleadings through discovery, motion practice, and trial. Mastery of these rules is essential for effective advocacy and avoiding procedural pitfalls.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Key elements of {section.title.toLowerCase()} include:
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
            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Practical Tips
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
                Need Federal Court Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your federal court motions.
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

export default FederalCourtGuidePage;