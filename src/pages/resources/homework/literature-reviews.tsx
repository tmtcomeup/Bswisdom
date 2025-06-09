import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Search, PenTool, Library } from 'lucide-react';
import ResourceLayout from '@/components/ResourceLayout';

const LiteratureReviewsPage: React.FC = () => {
  const topics = [
    {
      title: 'Literary Analysis',
      items: [
        'Thematic Analysis',
        'Character Studies',
        'Plot Analysis',
        'Style Examination',
        'Genre Analysis',
      ],
    },
    {
      title: 'Critical Elements',
      items: [
        'Thesis Development',
        'Evidence Support',
        'Literary Devices',
        'Context Analysis',
        'Critical Theory',
      ],
    },
    {
      title: 'Review Structures',
      items: [
        'Introduction Methods',
        'Body Organization',
        'Argument Flow',
        'Citation Integration',
        'Conclusion Writing',
      ],
    },
  ];

  const guides = [
    {
      title: 'Literary Analysis Guide',
      description: 'Master literature review techniques',
      path: 'guides/literary-analysis',
    },
    {
      title: 'Citation Guide',
      description: 'Format references correctly',
      path: 'guides/citation-format',
    },
  ];

  const sections = [
    {
      icon: <Search className="w-6 h-6 text-primary-600" />,
      title: 'Research Methods',
      items: ['Database Navigation', 'Source Evaluation', 'Citation Management']
    },
    {
      icon: <PenTool className="w-6 h-6 text-primary-600" />,
      title: 'Analysis Techniques',
      items: ['Critical Reading', 'Thematic Analysis', 'Comparative Review']
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      title: 'Writing Guidelines',
      items: ['Structure Formation', 'Argument Development', 'Synthesis Methods']
    },
    {
      icon: <Library className="w-6 h-6 text-primary-600" />,
      title: 'Academic Standards',
      items: ['Citation Styles', 'Academic Integrity', 'Peer Review Process']
    }
  ];

  return (
    <ResourceLayout
      title="Literature Reviews & Analysis"
      description="Expert assistance with literary analysis, book reviews, and critical essays."
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
            {/* Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Helpful Guides</h3>
              <div className="space-y-4">
                {guides.map((guide, index) => (
                  <Link
                    key={index}
                    to={guide.path}
                    className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-150"
                  >
                    <h4 className="font-medium text-gray-900">{guide.title}</h4>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Literature Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance with your literature reviews and analysis.
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

        {/* Resources Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default LiteratureReviewsPage;