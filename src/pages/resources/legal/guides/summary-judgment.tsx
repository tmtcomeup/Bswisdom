import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

interface Guide {
  title: string;
  description: string;
  path: string;
}

const SummaryJudgmentGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Legal Standards',
      items: [
        'Rule 56 Requirements',
        'Burden of Proof',
        'Genuine Issues of Material Fact',
        'Shifting Burdens',
        'Standard of Review',
      ],
    },
    {
      title: 'Supporting Evidence',
      items: [
        'Affidavits/Declarations',
        'Documentary Evidence',
        'Deposition Testimony',
        'Expert Opinions',
        'Judicial Notice',
      ],
    },
    {
      title: 'Strategic Considerations',
      items: [
        'Timing of Motion',
        'Discovery Completion',
        'Partial Summary Judgment',
        'Cross-Motions',
        'Appeal Considerations',
      ],
    },
    {
      title: 'Common Mistakes',
      items: [
        'Factual Disputes',
        'Credibility Issues',
        'Evidentiary Problems',
        'Procedural Defects',
        'Rule Violations',
      ],
    },
  ];

  const practicalTips = [
    'Organize evidence systematically',
    'Focus on undisputed facts',
    'Address opposing arguments directly',
    'Use clear statement of facts',
    'Include comprehensive record citations',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Drafting Effective Motions for Summary Judgment</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Master the art of summary judgment motions with comprehensive guidance on legal standards, evidence, and strategy.
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
                    {section.title} represents a critical stage in litigation where cases can be resolved without trial. Understanding the standards and requirements is essential for both seeking and opposing summary judgment motions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Summary judgment is appropriate when there is no genuine dispute as to any material fact and the movant is entitled to judgment as a matter of law. This high standard requires careful factual development and legal analysis.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The timing, briefing requirements, and evidentiary standards for summary judgment motions are strictly governed by court rules. Strategic considerations include whether to seek partial or complete summary judgment and how to respond effectively to opposing motions.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Essential aspects of {section.title.toLowerCase()} include:
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
                Need Summary Judgment Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your summary judgment motion.
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

export default SummaryJudgmentGuidePage;