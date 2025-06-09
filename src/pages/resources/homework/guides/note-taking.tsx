import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { PenLine, ListChecks, FileText, Layout, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const NoteTaking: React.FC = () => {
  const techniques = [
    {
      icon: <PenLine className="w-6 h-6" />,
      title: 'Cornell Method',
      description: 'Divide your page into sections for questions, notes, and summary to improve organization and retention'
    },
    {
      icon: <ListChecks className="w-6 h-6" />,
      title: 'Outline Method',
      description: 'Structure information hierarchically with main topics, subtopics, and supporting details'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Mind Mapping',
      description: 'Create visual representations of concepts and their relationships using branching diagrams'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Digital Note-Taking',
      description: 'Utilize digital tools and apps for searchable, organized, and easily shareable notes'
    }
  ];

  const methodGuides = [
    {
      title: 'Cornell Method Steps',
      steps: [
        'Divide page into three sections',
        'Take notes in main section',
        'Write questions in left column',
        'Create summary at bottom'
      ]
    },
    {
      title: 'Outline Method Steps',
      steps: [
        'Start with main topics',
        'Add subtopics with indentation',
        'Include supporting details',
        'Use consistent formatting'
      ]
    },
    {
      title: 'Mind Mapping Steps',
      steps: [
        'Write central topic in middle',
        'Draw branches for main ideas',
        'Add sub-branches for details',
        'Use colors and symbols'
      ]
    },
    {
      title: 'Digital Note-Taking Tips',
      steps: [
        'Choose appropriate apps',
        'Create folder structure',
        'Use tags and categories',
        'Back up regularly'
      ]
    }
  ];

  const toolsAndResources = [
    {
      title: 'Physical Tools',
      items: [
        'Notebooks with different sections',
        'Colored pens and highlighters',
        'Post-it notes and flags',
        'Ruler for neat lines'
      ]
    },
    {
      title: 'Digital Tools',
      items: [
        'Note-taking apps (Evernote, OneNote)',
        'Mind mapping software',
        'Cloud storage services',
        'Tablet with stylus'
      ]
    }
  ];

  const bestPractices = [
    'Review notes within 24 hours',
    'Use abbreviations consistently',
    'Focus on key concepts',
    'Include examples and diagrams',
    'Keep notes organized by date'
  ];

  return (
    <ResourceLayout
      title="Note-Taking Guide"
      description="Master effective note-taking techniques for better learning"
    >
      <div className="space-y-12">
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Note-Taking Guide</h1>
          <p className="text-lg text-gray-600">
            Master effective note-taking techniques to enhance your learning and retention.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Core Techniques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techniques.map((technique, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    {technique.icon}
                    <h2 className="text-xl font-semibold">{technique.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{technique.description}</p>
                </div>
              ))}
            </div>

            {/* Method Implementation */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Implementation Steps</h2>
              {methodGuides.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                  <ul className="space-y-3">
                    {method.steps.map((step, stepIndex) => (
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
            {/* Best Practices */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices</h3>
              <ul className="space-y-3">
                {bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="space-y-4">
                <Link
                  to="/resources/homework/guides/study-techniques"
                  className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-150"
                >
                  <h4 className="font-medium text-gray-900">Study Techniques</h4>
                  <p className="text-sm text-gray-600">Effective study methods and strategies</p>
                </Link>
                <Link
                  to="/resources/homework/guides/time-management"
                  className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-150"
                >
                  <h4 className="font-medium text-gray-900">Time Management</h4>
                  <p className="text-sm text-gray-600">Optimize your study schedule</p>
                </Link>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help with Note-Taking?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance to improve your note-taking skills.
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

export default NoteTaking;
