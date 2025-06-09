import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { Target, Clock, CheckSquare, Brain, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const ExamStrategies: React.FC = () => {
  const strategies = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Pre-Exam Preparation',
      tips: [
        'Create a study schedule',
        'Review past exams',
        'Identify key topics',
        'Practice problem-solving'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Management During Exam',
      tips: [
        'Read instructions carefully',
        'Allocate time per section',
        'Leave time for review',
        'Prioritize questions'
      ]
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Answer Strategies',
      tips: [
        'Outline essays before writing',
        'Show all work in calculations',
        'Use process of elimination',
        'Double-check answers'
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Mental Preparation',
      tips: [
        'Practice relaxation techniques',
        'Get adequate rest',
        'Stay positive',
        'Maintain focus'
      ]
    }
  ];

  const examTypes = [
    {
      title: 'Multiple Choice Questions',
      techniques: [
        'Read all options carefully before choosing',
        'Eliminate obviously wrong answers first',
        'Look for keywords in the question',
        'Consider "all of the above" and "none of the above" options carefully',
        'Make educated guesses when unsure'
      ]
    },
    {
      title: 'Essay Questions',
      techniques: [
        'Read the prompt carefully and understand what is being asked',
        'Create a brief outline before writing',
        'Start with a clear thesis statement',
        'Use specific examples to support your points',
        'Leave time to proofread and edit'
      ]
    },
    {
      title: 'Short Answer Questions',
      techniques: [
        'Be concise but complete in your answers',
        'Address all parts of the question',
        'Use key terminology when appropriate',
        'Provide examples when helpful',
        'Stay within any word limits given'
      ]
    }
  ];

  const lastMinutePrep = [
    {
      title: 'Night Before',
      items: [
        'Review key concepts and formulas',
        'Organize materials for the exam',
        'Get a good night\'s sleep',
        'Avoid cramming new material'
      ]
    },
    {
      title: 'Day of Exam',
      items: [
        'Eat a healthy breakfast',
        'Arrive early to avoid stress',
        'Bring all necessary materials',
        'Do a quick warm-up review'
      ]
    }
  ];

  const commonMistakes = [
    'Not reading instructions carefully',
    'Spending too much time on difficult questions',
    'Forgetting to review answers',
    'Not managing time effectively',
    'Getting anxious and losing focus'
  ];

  const examResources = [
    {
      title: 'Study Materials',
      items: [
        'Practice exams and tests',
        'Study guides and summaries',
        'Flashcards for key terms',
        'Review sessions with peers'
      ]
    },
    {
      title: 'Tools & Apps',
      items: [
        'Timer apps for practice',
        'Study schedule planners',
        'Note-taking applications',
        'Online practice platforms'
      ]
    }
  ];

  const relatedGuides = [
    {
      title: 'Study Techniques',
      description: 'Effective methods for retaining information',
      path: '/resources/homework/guides/study-techniques'
    },
    {
      title: 'Time Management',
      description: 'Strategies for managing study and exam time',
      path: '/resources/homework/guides/time-management'
    },
    {
      title: 'Memory Techniques',
      description: 'Methods to improve memory and recall',
      path: '/resources/homework/guides/memory-techniques'
    }
  ];

  return (
    <ResourceLayout
      title="Exam Strategies Guide"
      description="Master proven strategies for exam preparation and success"
    >
      <div className="space-y-12">
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Exam Strategies Guide</h1>
          <p className="text-lg text-gray-600">
            Learn effective techniques for exam preparation and performance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Core Strategies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    {strategy.icon}
                    <h2 className="text-xl font-semibold">{strategy.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {strategy.tips.map((tip, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Question Type Strategies */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Question Type Strategies</h2>
              {examTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.techniques.map((technique, techIndex) => (
                      <li key={techIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                        <span className="text-gray-600">{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Last-Minute Preparation */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Last-Minute Preparation</h2>
              {lastMinutePrep.map((prep, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{prep.title}</h3>
                  <ul className="space-y-3">
                    {prep.items.map((item, itemIndex) => (
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
            {/* Common Mistakes to Avoid */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Mistakes to Avoid</h3>
              <ul className="space-y-3">
                {commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Resources */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Helpful Resources</h3>
              {examResources.map((section, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-gray-900 mb-2">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                        <ArrowRight className="w-4 h-4 text-primary-600 mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Study Guides</h3>
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
                Need Exam Preparation Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance to improve your exam performance and reduce test anxiety.
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

export default ExamStrategies;
