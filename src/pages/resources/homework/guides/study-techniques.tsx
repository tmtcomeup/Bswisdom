import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { Book, Brain, Clock, Target, ArrowRight, CheckCircle, BookOpen } from 'lucide-react';

const StudyTechniques: React.FC = () => {
  const techniques = [
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Active Recall',
      description: 'Test yourself on material you\'ve learned to strengthen memory retention',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Spaced Repetition',
      description: 'Review material at increasing intervals for optimal learning'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Pomodoro Technique',
      description: '25-minute focused study sessions with short breaks'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Mind Mapping',
      description: 'Create visual connections between related concepts'
    }
  ];

  const implementationSteps = [
    {
      title: 'Active Recall',
      steps: [
        'Create flashcards or question sets',
        'Test yourself without referring to notes',
        'Review missed items more frequently',
        'Explain concepts to others'
      ]
    },
    {
      title: 'Spaced Repetition',
      steps: [
        'Schedule review intervals (1, 3, 7 days)',
        'Use spaced repetition apps',
        'Track progress and adjust intervals',
        'Combine with active recall'
      ]
    },
    {
      title: 'Pomodoro Technique',
      steps: [
        'Set a timer for 25 minutes',
        'Work with full focus',
        'Take a 5-minute break',
        'Long break after 4 sessions'
      ]
    },
    {
      title: 'Mind Mapping',
      steps: [
        'Start with central concept',
        'Add main branches for key topics',
        'Include relevant details',
        'Use colors and symbols'
      ]
    }
  ];

  const additionalTips = [
    'Create a dedicated study space',
    'Use multiple learning methods',
    'Take effective notes',
    'Stay organized and consistent',
    'Get adequate sleep and exercise'
  ];

  const studyResources = [
    {
      title: 'Study Tools',
      items: [
        'Flashcard apps (Anki, Quizlet)',
        'Mind mapping software (MindMeister, XMind)',
        'Focus timers (Focus@Will, Brain.fm)',
        'Note-taking apps (Notion, OneNote)'
      ]
    },
    {
      title: 'Support Materials',
      items: [
        'Practice question banks',
        'Subject-specific study guides',
        'Educational video platforms',
        'Online learning communities'
      ]
    }
  ];

  const relatedGuides = [
    {
      path: '/resources/homework/guides/time-management',
      title: 'Time Management',
      description: 'Optimize your study schedule and productivity'
    },
    {
      path: '/resources/homework/guides/note-taking',
      title: 'Note-Taking Methods',
      description: 'Master effective note-taking techniques'
    },
    {
      path: '/resources/homework/guides/exam-strategies',
      title: 'Exam Strategies',
      description: 'Prepare effectively for tests and assessments'
    },
    {
      path: '/resources/homework/guides/research-methods',
      title: 'Research Methods',
      description: 'Learn efficient research and study techniques'
    }
  ];

  return (
    <ResourceLayout
      title="Study Techniques Guide"
      description="Effective study methods for academic success"
    >
      <div className="space-y-12">
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Study Techniques Guide</h1>
          <p className="text-lg text-gray-600">
            Master proven study methods to enhance your learning and academic performance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Techniques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techniques.map((technique, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    {technique.icon}
                    <h2 className="text-xl font-semibold">{technique.title}</h2>
                  </div>
                  <p className="text-gray-600">{technique.description}</p>
                </div>
              ))}
            </div>

            {/* Implementation Steps */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Implementation Guide</h2>
              {implementationSteps.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Study Resources */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Study Resources</h2>
              {studyResources.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
              <ul className="space-y-3">
                {additionalTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Study Resources</h3>
              <div className="space-y-4">
                {relatedGuides.map((guide, index) => (
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
                Need Study Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalized guidance to improve your study techniques and academic performance.
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

export default StudyTechniques;
