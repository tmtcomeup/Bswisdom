import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { Globe2, Users, ScrollText, Building, BookOpen } from 'lucide-react';

const SocialStudies: React.FC = () => {
  const topics = [
    {
      title: 'World History',
      icon: <Globe2 className="w-6 h-6" />,
      subjects: ['Ancient Civilizations', 'Modern History', 'World Wars', 'Cultural Studies']
    },
    {
      title: 'Social Sciences',
      icon: <Users className="w-6 h-6" />,
      subjects: ['Sociology', 'Psychology', 'Anthropology', 'Economics']
    },
    {
      title: 'Government',
      icon: <ScrollText className="w-6 h-6" />,
      subjects: ['Political Systems', 'Civics', 'Constitutional Law', 'Public Policy']
    },
    {
      title: 'Geography',
      icon: <Building className="w-6 h-6" />,
      subjects: ['Physical Geography', 'Human Geography', 'Demographics', 'Environmental Studies']
    }
  ];

  const guides = [
    {
      title: 'Research Methods',
      description: 'Master social science research techniques',
      path: '/guides/research-methods'
    },
    {
      title: 'Study Techniques',
      description: 'Effective methods for studying history',
      path: '/guides/study-techniques'
    }
  ];

  return (
    <ResourceLayout
      title="Social Studies Resources"
      description="Comprehensive resources for social studies and history"
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

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help with Social Studies?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance with your social studies assignments.
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

export default SocialStudies;
