import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, BookOpen, MessageCircle, Globe } from 'lucide-react';
import ResourceLayout from '@/components/ResourceLayout';

const LanguageLearning: React.FC = () => {
  const sections = [
    {
      title: 'Language Skills',
      icon: <Languages className="w-6 h-6 text-primary-600" />,
      content: [
        'Reading Comprehension',
        'Writing Skills',
        'Speaking Practice',
        'Listening Exercises',
        'Grammar Fundamentals'
      ]
    },
    {
      title: 'Study Materials',
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      content: [
        'Course Textbooks',
        'Online Resources',
        'Practice Exercises',
        'Audio/Video Materials',
        'Study Apps'
      ]
    },
    {
      title: 'Conversation Practice',
      icon: <MessageCircle className="w-6 h-6 text-primary-600" />,
      content: [
        'Language Exchange',
        'Speaking Groups',
        'Tutoring Sessions',
        'Interactive Practice',
        'Role-playing Exercises'
      ]
    },
    {
      title: 'Cultural Context',
      icon: <Globe className="w-6 h-6 text-primary-600" />,
      content: [
        'Cultural Studies',
        'Regional Variations',
        'Idioms & Expressions',
        'Media & Literature',
        'Cultural Events'
      ]
    }
  ];

  const guides = [
    {
      id: 'language-learning',
      title: 'Language Learning Guide',
      description: 'Master strategies for effective language acquisition',
      path: 'guides/language-learning'
    },
    {
      id: 'study-techniques',
      title: 'Study Techniques',
      description: 'Effective methods for language study and practice',
      path: 'guides/study-techniques'
    }
  ];

  return (
    <ResourceLayout
      title="Language Learning Resources"
      description="Comprehensive resources for learning and mastering new languages"
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      {item}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Guides</h3>
              <div className="space-y-4">
                {guides.map((guide) => (
                  <Link
                    key={guide.id}
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
              <Languages className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Master a New Language?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance with your language learning journey.
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

export default LanguageLearning;