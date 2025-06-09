import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const CivilLawsuitGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Understanding the Complaint',
      items: [
        'Elements of Claims',
        'Relief Requested',
        'Jurisdictional Basis',
        'Time Limitations',
        'Service Requirements',
      ],
    },
    {
      title: 'Potential Defenses',
      items: [
        'Procedural Defenses',
        'Substantive Defenses',
        'Affirmative Defenses',
        'Counterclaims',
        'Third-Party Claims',
      ],
    },
    {
      title: 'Discovery Process',
      items: [
        'Document Requests',
        'Interrogatories',
        'Depositions',
        'Expert Discovery',
        'E-Discovery Issues',
      ],
    },
    {
      title: 'Settlement Considerations',
      items: [
        'Damage Assessment',
        'Risk Analysis',
        'Settlement Terms',
        'Negotiation Strategies',
        'Alternative Dispute Resolution',
      ],
    },
  ];

  const practicalTips = [
    'Review complaint thoroughly',
    'Document preservation plan',
    'Track response deadlines',
    'Consider insurance coverage',
    'Evaluate early settlement',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Your Rights in a Civil Lawsuit: A Case Analysis Primer</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive guide to help you understand your rights, options, and strategic considerations in civil litigation.
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
                    {section.title} plays a critical role in civil litigation strategy. Understanding these elements allows you to make informed decisions about your case and protect your interests throughout the legal process.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Civil lawsuits can be complex, involving multiple phases from initial filing through discovery, motion practice, and potentially trial. Each stage presents opportunities to strengthen your position or resolve the matter favorably.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Proper preparation and understanding of your rights can significantly impact the outcome. Whether you're a plaintiff or defendant, knowing what to expect and how to respond effectively is essential for protecting your interests.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Key considerations for {section.title.toLowerCase()} include:
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
                Need Case Review Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help understanding your rights in civil litigation.
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

export default CivilLawsuitGuidePage;