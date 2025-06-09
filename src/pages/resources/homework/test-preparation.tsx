import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { GraduationCap, Timer, CheckCircle, Brain, FileText } from 'lucide-react';

const TestPreparation: React.FC = () => {
  const topics = [
    {
      title: 'Standardized Tests',
      icon: <GraduationCap className="w-6 h-6" />,
      subjects: ['SAT Preparation', 'ACT Study Guide', 'GRE Resources', 'GMAT Practice']
    },
    {
      title: 'Time Management',
      icon: <Timer className="w-6 h-6" />,
      subjects: ['Test Pacing', 'Section Timing', 'Practice Schedules', 'Time-Saving Tips']
    },
    {
      title: 'Test Strategies',
      icon: <CheckCircle className="w-6 h-6" />,
      subjects: ['Question Analysis', 'Answer Elimination', 'Score Maximization', 'Test Format Tips']
    },
    {
      title: 'Subject Reviews',
      icon: <Brain className="w-6 h-6" />,
      subjects: ['Math Review', 'Reading Comprehension', 'Writing Skills', 'Subject Tests']
    }
  ];

  const guides = [
    {
      title: 'Exam Strategies',
      description: 'Master test-taking techniques',
      path: '/guides/exam-strategies'
    },
    {
      title: 'Study Techniques',
      description: 'Effective study methods',
      path: '/guides/study-techniques'
    },
    {
      title: 'Time Management',
      description: 'Optimize your study schedule',
      path: '/guides/time-management'
    }
  ];

  const practicalTips = [
    'Start preparation early',
    'Take practice tests',
    'Review past mistakes',
    'Focus on weak areas',
    'Stay calm and confident'
  ];

  return (
    <ResourceLayout
      title="Test Preparation Resources"
      description="Comprehensive guides and strategies for test preparation"
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
              <FileText className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Test Prep Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance for your test preparation.
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

export default TestPreparation;
