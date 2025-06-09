import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface RelatedGuide extends Guide {
  description: string;
}

const CreativeWritingPage: React.FC = () => {
  const topics = [
    {
      title: 'Writing Types',
      items: [
        'Short Stories',
        'Poetry & Verse',
        'Creative Essays',
        'Personal Narratives',
        'Literary Fiction',
      ],
    },
    {
      title: 'Writing Elements',
      items: [
        'Character Development',
        'Plot Structure',
        'Setting Description',
        'Dialogue Crafting',
        'Theme Development',
      ],
    },
    {
      title: 'Literary Techniques',
      items: [
        'Metaphor & Symbolism',
        'Point of View',
        'Voice & Style',
        'Pacing & Flow',
        'Imagery Creation',
      ],
    },
  ];

  const relatedGuides = [
    {
      title: 'Story Crafting Guide',
      description: 'Master creative writing techniques',
      path: '../guides/story-crafting',
    },
    {
      title: 'Literary Style Guide',
      description: 'Develop your unique voice',
      path: '../guides/literary-style',
    },
  ];

  return (
    <ResourceLayout
      title="Creative Writing Services"
      description="Expert creative writing assistance for stories, poetry, essays, and other literary works."
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
                Need Writing Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your creative writing project.
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

export default CreativeWritingPage;