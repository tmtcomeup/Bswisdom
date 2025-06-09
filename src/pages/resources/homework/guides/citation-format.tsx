import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ArrowRight, 
  BookOpen, 
  Quote, 
  List,
  FileSearch 
} from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const citationStyles = [
  {
    name: 'APA',
    version: '7th Edition',
    description: 'Most common in social sciences and education',
    examples: [
      {
        type: 'Book',
        format: 'Author, A. A. (Year). Title of book. Publisher.',
        example: 'Smith, J. D. (2024). The art of citation. Academic Press.'
      },
      {
        type: 'Journal Article',
        format: 'Author, A. A. (Year). Title of article. Journal Name, Volume(Issue), pp-pp.',
        example: 'Johnson, M. R. (2025). Citation methods. Academic Journal, 12(3), 45-67.'
      }
    ]
  },
  {
    name: 'MLA',
    version: '9th Edition',
    description: 'Commonly used in humanities and liberal arts',
    examples: [
      {
        type: 'Book',
        format: 'Author\'s Last Name, First Name. Title of Book. Publisher, Year.',
        example: 'Smith, John. The Art of Citation. Academic Press, 2024.'
      },
      {
        type: 'Journal Article',
        format: 'Author\'s Last Name, First Name. "Title of Article." Journal Name, vol. X, no. Y, Year, pp. XX-YY.',
        example: 'Johnson, Mary. "Citation Methods." Academic Journal, vol. 12, no. 3, 2025, pp. 45-67.'
      }
    ]
  }
];

const helpfulResources = [
  {
    name: 'Citation Machine',
    description: 'Automatic citation generator for multiple formats',
    link: 'https://www.citationmachine.net',
  },
  {
    name: 'Purdue OWL',
    description: 'Comprehensive writing and citation guidelines',
    link: 'https://owl.purdue.edu',
  },
  {
    name: 'Zotero',
    description: 'Free reference management software',
    link: 'https://www.zotero.org',
  },
  {
    name: 'Mendeley',
    description: 'Reference manager and academic social network',
    link: 'https://www.mendeley.com',
  },
];

const CitationFormatGuide: React.FC = () => {
  const topics = [
    {
      title: 'Citation Basics',
      icon: Quote,
      items: [
        'Understanding Citations',
        'When to Cite',
        'Avoiding Plagiarism',
        'Citation Elements',
        'In-text vs. References',
      ],
    },
    {
      title: 'Research Tips',
      icon: FileSearch,
      items: [
        'Source Evaluation',
        'Research Organization',
        'Note-Taking Methods',
        'Source Documentation',
        'Bibliography Management',
      ],
    },
    {
      title: 'Common Mistakes',
      icon: List,
      items: [
        'Missing Information',
        'Incorrect Formatting',
        'Inconsistent Style',
        'Poor Organization',
        'Incomplete Citations',
      ],
    },
  ];

  return (
    <ResourceLayout
      title="Citation Format Guide"
      description="Master academic citations and reference formatting"
      icon={FileText}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Topics */}
          {topics.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-4">
                <section.icon className="w-6 h-6 mr-2 text-primary-600" />
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

          {/* Citation Styles */}
          {citationStyles.map((style, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {style.name} Style ({style.version})
              </h2>
              <p className="text-gray-600 mb-4">{style.description}</p>
              <div className="space-y-4">
                {style.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">{example.type}</h3>
                    <p className="text-sm text-gray-600 mb-2">Format:</p>
                    <p className="text-sm font-mono bg-white p-2 rounded border border-gray-200 mb-2">
                      {example.format}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">Example:</p>
                    <p className="text-sm font-mono bg-white p-2 rounded border border-gray-200">
                      {example.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related Guides */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Related Guides
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/resources/homework/guides/research-methods"
                  className="text-primary-600 hover:text-primary-800 flex items-center"
                >
                  Research Methods Guide
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/homework/guides/writing"
                  className="text-primary-600 hover:text-primary-800 flex items-center"
                >
                  Academic Writing Guide
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Helpful Resources */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Helpful Resources
            </h3>
            <div className="space-y-4">
              {helpfulResources.map((resource, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <h4 className="font-medium text-gray-900 mb-1">
                    {resource.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {resource.description}
                  </p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 text-sm flex items-center"
                  >
                    Visit Website
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary-50 rounded-lg p-6">
            <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Citation Help?
            </h3>
            <p className="text-gray-600 mb-4">
              Get expert guidance with your citations and references.
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
    </ResourceLayout>
  );
};

export default CitationFormatGuide;
