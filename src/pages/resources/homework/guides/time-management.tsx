import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { Clock, Calendar, CheckSquare, BarChart, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const TimeManagement: React.FC = () => {
  const strategies = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Planning & Scheduling',
      description: 'Create weekly and monthly study schedules to organize your time effectively',
      tips: ['Use digital calendars', 'Set recurring study blocks', 'Include buffer time']
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Task Prioritization',
      description: 'Identify and focus on high-priority assignments and studying',
      tips: ['Use importance/urgency matrix', 'Break down large tasks', 'Set deadlines']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Blocking',
      description: 'Allocate specific time blocks for different subjects and activities',
      tips: ['Focus on one subject at a time', 'Include breaks', 'Minimize distractions']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Progress Tracking',
      description: 'Monitor and adjust your time management strategies',
      tips: ['Track study hours', 'Review productivity', 'Adjust as needed']
    }
  ];

  const implementationGuide = [
    {
      title: 'Daily Planning',
      steps: [
        'Review your schedule first thing in the morning',
        'Identify top 3 priorities for the day',
        'Schedule breaks between study sessions',
        'Review and adjust plan as needed'
      ]
    },
    {
      title: 'Weekly Organization',
      steps: [
        'Plan your week every Sunday evening',
        'Block time for regular activities',
        'Allocate study time for each subject',
        'Include time for review and revision'
      ]
    },
    {
      title: 'Monthly Overview',
      steps: [
        'Mark important dates and deadlines',
        'Schedule time for long-term projects',
        'Plan for exam preparation',
        'Review and adjust study goals'
      ]
    }
  ];

  const toolsAndResources = [
    {
      title: 'Digital Tools',
      items: [
        'Calendar apps (Google Calendar, iCal)',
        'Task management apps (Todoist, Trello)',
        'Time tracking apps (RescueTime, Toggl)',
        'Focus apps (Forest, Freedom)'
      ]
    },
    {
      title: 'Physical Tools',
      items: [
        'Paper planner or agenda',
        'Wall calendar for overview',
        'Timer for study sessions',
        'Notebook for task lists'
      ]
    }
  ];

  const quickTips = [
    'Start with the most challenging tasks',
    'Use the 2-minute rule for small tasks',
    'Avoid multitasking',
    'Take regular breaks',
    'Review and adjust your system regularly'
  ];

  const relatedGuides = [
    {
      path: '/resources/homework/guides/study-techniques',
      title: 'Study Techniques',
      description: 'Complement your time management with effective study methods'
    },
    {
      path: '/resources/homework/guides/exam-strategies',
      title: 'Exam Strategies',
      description: 'Learn how to allocate time during test preparation'
    },
    {
      path: '/resources/homework/guides/note-taking',
      title: 'Note-Taking Methods',
      description: 'Efficient note-taking to maximize study time'
    }
  ];

  return (
    <ResourceLayout
      title="Time Management Guide"
      description="Effective time management strategies for students"
    >
      <div className="space-y-12">
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Time Management Guide</h1>
          <p className="text-lg text-gray-600">
            Master effective time management strategies to boost your productivity and academic success.
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
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
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

            {/* Implementation Guide */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Implementation Steps</h2>
              {implementationGuide.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tools & Resources */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Tools & Resources</h2>
              {toolsAndResources.map((section, index) => (
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
                {quickTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
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
                Need Help with Time Management?
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalized guidance to improve your study schedule and productivity.
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

export default TimeManagement;
