import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { BookOpen, Languages, PenTool, MessageCircle } from 'lucide-react';

const LanguagesLiterature: React.FC = () => {
  const topics = [
    {
      title: 'Literature Analysis',
      icon: <BookOpen className="w-6 h-6" />,
      subjects: ['Classic Literature', 'Contemporary Fiction', 'Poetry Analysis', 'Drama & Theatre']
    },
    {
      title: 'Language Studies',
      icon: <Languages className="w-6 h-6" />,
      subjects: ['Grammar & Syntax', 'Vocabulary Building', 'Language Structure', 'Linguistics']
    },
    {
      title: 'Writing Skills',
      icon: <PenTool className="w-6 h-6" />,
      subjects: ['Essay Writing', 'Creative Writing', 'Academic Writing', 'Research Papers']
    },
    {
      title: 'Communication',
      icon: <MessageCircle className="w-6 h-6" />,
      subjects: ['Public Speaking', 'Rhetoric', 'Debate Skills', 'Critical Analysis']
    }
  ];

  const guides = [
    {
      title: 'Literary Analysis',
      description: 'Techniques for analyzing literature',
      path: '/guides/literary-analysis'
    },
    {
      title: 'Language Learning',
      description: 'Strategies for language mastery',
      path: '/guides/language-learning'
    },
    {
      title: 'Writing Guide',
      description: 'Improve your writing skills',
      path: '/guides/writing-guide'
    }
  ];

  const practicalTips = [
    'Read extensively across genres',
    'Practice active reading techniques',
    'Keep a vocabulary journal',
    'Write summaries and analyses',
    'Join discussion groups'
  ];

  return (
    <ResourceLayout
      title="Languages & Literature Resources"
      description="Essential resources for language arts and literature studies"
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    {topic.icon}
                    <h2 className="text-xl font-semibold">{topic.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {topic.subjects.map((subject, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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

            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
              <ul className="space-y-2">
                {practicalTips.map((tip, index) => (
                  <li key={index} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Language Arts Support?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with literature analysis and language studies.
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

export default LanguagesLiterature;
