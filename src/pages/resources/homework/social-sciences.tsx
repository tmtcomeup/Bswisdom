import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { Globe, Users, Scale, BookOpen } from 'lucide-react';

const SocialSciences: React.FC = () => {
  const subjects = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Geography & History',
      topics: ['World History', 'Cultural Geography', 'Historical Analysis', 'Map Studies']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Sociology & Psychology',
      topics: ['Social Theory', 'Human Behavior', 'Research Methods', 'Case Studies']
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Political Science',
      topics: ['Government Systems', 'International Relations', 'Public Policy', 'Civic Education']
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Economics',
      topics: ['Microeconomics', 'Macroeconomics', 'Economic Theory', 'Market Analysis']
    }
  ];

  const guides = [
    {
      title: 'Research Methods',
      description: 'Learn social science research techniques',
      path: '/guides/research-methods'
    },
    {
      title: 'Study Techniques',
      description: 'Methods for social sciences study',
      path: '/guides/study-techniques'
    },
    {
      title: 'Analysis Guide',
      description: 'Master data analysis methods',
      path: '/guides/analysis-methods'
    }
  ];

  const practicalTips = [
    'Focus on current events',
    'Practice data analysis',
    'Study societal patterns',
    'Compare different theories',
    'Use case studies'
  ];

  return (
    <ResourceLayout
      title="Social Sciences Resources"
      description="Comprehensive resources for social sciences studies"
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    {subject.icon}
                    <h2 className="text-xl font-semibold">{subject.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {topic}
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
                Need Social Sciences Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance with your social science studies.
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

export default SocialSciences;