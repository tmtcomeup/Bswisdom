import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface RelatedGuide extends Guide {
  description: string;
}

const SkillsAssessmentPage: React.FC = () => {
  const topics = [
    {
      title: 'Assessment Methods',
      items: [
        'Self-Assessment Tools',
        'Professional Evaluations',
        '360-Degree Feedback',
        'Skills Inventories',
        'Performance Reviews',
      ],
    },
    {
      title: 'Skill Development',
      items: [
        'Training Programs',
        'Online Courses',
        'Workshops & Seminars',
        'Mentorship Opportunities',
        'Self-Directed Learning',
      ],
    },
    {
      title: 'Key Skill Areas',
      items: [
        'Communication Skills',
        'Leadership Skills',
        'Technical Skills',
        'Problem-Solving Skills',
        'Interpersonal Skills',
      ],
    },
  ];

  const relatedGuides = [
    {
      title: 'Skills Development Guide',
      description: 'Enhance your professional capabilities',
      path: '../guides/skills-development',
    },
    {
      title: 'Career Planning Guide',
      description: 'Identify and develop key skills',
      path: '../guides/career-planning',
    },
  ];

  return (
    <ResourceLayout
      title="Skills Assessment and Development"
      description="Identify your strengths and weaknesses, and develop essential skills for career advancement."
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
                Need Skills Assessment?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help identifying and developing your skills.
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

export default SkillsAssessmentPage;