import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, ArrowRight, BookOpen, Target, Tool } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const helpfulResources = [
  {
    name: 'Duolingo',
    description: 'Interactive language learning platform',
    link: 'https://www.duolingo.com',
  },
  {
    name: 'iTalki',
    description: 'Platform for finding native language tutors',
    link: 'https://www.italki.com',
  },
  {
    name: 'Anki',
    description: 'Spaced repetition flashcard system',
    link: 'https://apps.ankiweb.net',
  },
  {
    name: 'Memrise',
    description: 'Vocabulary learning with mnemonics',
    link: 'https://www.memrise.com',
  },
];

const progressTracking = [
  {
    title: 'Set SMART Goals',
    description: 'Define Specific, Measurable, Achievable, Relevant, and Time-bound language learning goals',
  },
  {
    title: 'Track Daily Practice',
    description: 'Log your study time and activities to maintain consistency',
  },
  {
    title: 'Regular Assessments',
    description: 'Take periodic tests to measure your progress in different language skills',
  },
  {
    title: 'Milestone Tracking',
    description: 'Document achievements like completing courses or reaching fluency levels',
  },
];

const LanguageLearningGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Core Language Skills',
      items: [
        'Reading Comprehension',
        'Writing Practice',
        'Speaking Skills',
        'Listening Exercises',
        'Grammar Foundations',
      ],
    },
    {
      title: 'Learning Strategies',
      items: [
        'Immersion Techniques',
        'Vocabulary Building',
        'Pattern Recognition',
        'Memory Techniques',
        'Practice Methods',
      ],
    },
    {
      title: 'Study Resources',
      items: [
        'Language Apps',
        'Online Courses',
        'Practice Materials',
        'Audio Resources',
        'Study Groups',
      ],
    },
    {
      title: 'Common Challenges',
      items: [
        'Pronunciation Issues',
        'Grammar Confusion',
        'Vocabulary Retention',
        'Speaking Anxiety',
        'Cultural Context',
      ],
    },
  ];

  const practicalTips = [
    'Practice daily, even if briefly',
    'Use multiple learning methods',
    'Engage with native content',
    'Find language partners',
    'Track your progress',
  ];

  return (
    <ResourceLayout
      title="Language Learning Guide"
      description="Comprehensive strategies and techniques for effective language learning."
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

            {/* Progress Tracking Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Progress Tracking
              </h2>
              <ul className="space-y-3">
                {progressTracking.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                    to="/resources/homework/guides/study-techniques"
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    Study Techniques Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources/homework/guides/note-taking"
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    Note-Taking Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources/homework/guides/time-management"
                    className="text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    Time Management Guide
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
                    <p className="text-sm text-gray-600">
                      {resource.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Learning Tips
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

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Language Learning Help?
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

export default LanguageLearningGuidePage;
