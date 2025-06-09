import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Database, CheckCircle } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const ResearchMethodsGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Research Design',
      items: [
        'Research Questions',
        'Hypothesis Formation',
        'Study Types',
        'Variables Selection',
        'Sample Design',
      ],
    },
    {
      title: 'Data Collection',
      items: [
        'Survey Methods',
        'Interview Techniques',
        'Observation Tools',
        'Document Analysis',
        'Field Research',
      ],
    },
    {
      title: 'Analysis Methods',
      items: [
        'Qualitative Analysis',
        'Statistical Methods',
        'Data Coding',
        'Pattern Analysis',
        'Results Interpretation',
      ],
    },
    {
      title: 'Research Ethics',
      items: [
        'Informed Consent',
        'Privacy Protection',
        'Data Security',
        'Bias Prevention',
        'Ethical Reporting',
      ],
    },
  ];

  const practicalTips = [
    'Define clear objectives',
    'Choose appropriate methods',
    'Maintain detailed records',
    'Consider ethics early',
    'Plan analysis strategy',
  ];

  const methodologyGuides = [
    {
      title: 'Quantitative Research',
      steps: [
        'Define variables and hypotheses',
        'Design data collection methods',
        'Conduct statistical analysis',
        'Interpret numerical results'
      ]
    },
    {
      title: 'Qualitative Research',
      steps: [
        'Select appropriate approach',
        'Gather descriptive data',
        'Conduct thematic analysis',
        'Develop interpretive insights'
      ]
    },
    {
      title: 'Mixed Methods',
      steps: [
        'Combine research approaches',
        'Integrate different data types',
        'Cross-validate findings',
        'Synthesize results'
      ]
    }
  ];

  const researchTools = [
    {
      title: 'Data Collection Tools',
      items: [
        'Survey platforms (Google Forms, SurveyMonkey)',
        'Interview recording software',
        'Data logging applications',
        'Field research equipment'
      ]
    },
    {
      title: 'Analysis Software',
      items: [
        'Statistical packages (SPSS, R)',
        'Qualitative analysis tools (NVivo)',
        'Data visualization software',
        'Reference management tools'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Research Methods Guide"
      description="A comprehensive guide to research methodology, data collection, and analysis"
    >
      <div className="space-y-12">
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Search className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Research Methods Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Master the essential techniques and approaches for conducting effective research.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Core Topics */}
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

            {/* Methodology Guides */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Research Methodologies</h2>
              {methodologyGuides.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                  <ul className="space-y-3">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Research Tools */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Research Tools</h2>
              {researchTools.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Database className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Research Tips
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

            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="space-y-4">
                <Link
                  to="/resources/homework/guides/note-taking"
                  className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-150"
                >
                  <h4 className="font-medium text-gray-900">Note-Taking Methods</h4>
                  <p className="text-sm text-gray-600">Record research findings effectively</p>
                </Link>
                <Link
                  to="/resources/homework/guides/literature-reviews"
                  className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-150"
                >
                  <h4 className="font-medium text-gray-900">Literature Reviews</h4>
                  <p className="text-sm text-gray-600">Master source analysis</p>
                </Link>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Research Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your research methods.
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

export default ResearchMethodsGuidePage;