import React from 'react';
import { Link } from 'react-router-dom';
import ResourceLayout from '@/components/ResourceLayout';
import { 
  Calculator, 
  AtomIcon, 
  Beaker, 
  Binary,
  Target,
  AlertCircle,
  Settings
} from 'lucide-react';

const MathSciences: React.FC = () => {
  const topics = [
    {
      title: 'Mathematics',
      icon: <Calculator className="w-6 h-6" />,
      subjects: [
        'Algebra & Trigonometry',
        'Calculus & Analysis',
        'Statistics & Probability',
        'Geometry & Topology',
        'Linear Algebra',
        'Number Theory'
      ]
    },
    {
      title: 'Physics',
      icon: <AtomIcon className="w-6 h-6" />,
      subjects: [
        'Classical Mechanics',
        'Thermodynamics',
        'Electromagnetics',
        'Quantum Physics',
        'Optics',
        'Nuclear Physics'
      ]
    },
    {
      title: 'Chemistry',
      icon: <Beaker className="w-6 h-6" />,
      subjects: [
        'Organic Chemistry',
        'Inorganic Chemistry',
        'Physical Chemistry',
        'Analytical Chemistry',
        'Biochemistry',
        'Chemical Kinetics'
      ]
    },
    {
      title: 'Computer Science',
      icon: <Binary className="w-6 h-6" />,
      subjects: [
        'Programming & Coding',
        'Data Structures',
        'Algorithms',
        'Database Systems',
        'Software Engineering',
        'Computer Architecture'
      ]
    }
  ];

  const guides = [
    {
      title: 'Math Problem Solving',
      description: 'Step-by-step problem-solving techniques',
      path: '/guides/math-problem-solving'
    },
    {
      title: 'Science Lab Guide',
      description: 'Best practices for lab work',
      path: '/guides/science-lab'
    },
    {
      title: 'Study Methods',
      description: 'Effective study strategies',
      path: '/guides/study-techniques'
    }
  ];

  const practicalTips = [
    'Practice problems regularly',
    'Show all your work clearly',
    'Use visualization techniques',
    'Understand core concepts',
    'Review fundamentals often',
    'Create concept maps',
    'Work through examples',
    'Check answers systematically'
  ];

  const studyResources = [
    {
      title: 'Online Tools',
      items: [
        'Wolfram Alpha (Mathematical Tools)',
        'Khan Academy (Video Tutorials)',
        'MIT OpenCourseWare',
        'Physics Simulations',
        'Chemistry Modeling Software'
      ]
    },
    {
      title: 'Practice Resources',
      items: [
        'Interactive Problem Sets',
        'Virtual Lab Simulations',
        'Past Exam Questions',
        'STEM Project Ideas',
        'Scientific Calculators'
      ]
    }
  ];

  const commonChallenges = [
    {
      title: 'Learning Obstacles',
      icon: <AlertCircle className="w-6 h-6 text-primary-600" />,
      items: [
        'Abstract Concept Visualization',
        'Complex Problem-Solving',
        'Formula Memorization',
        'Lab Report Writing',
        'Time Management in Exams'
      ]
    },    {
      title: 'Key Skills',
      icon: <Settings className="w-6 h-6 text-primary-600" />,
      items: [
        'Mathematical Reasoning',
        'Scientific Method Application',
        'Data Analysis',
        'Technical Writing',
        'Laboratory Techniques'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Math & Sciences Resources"
      description="Comprehensive resources for mathematics and sciences"
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
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

            {/* Common Challenges Section */}
            <div className="space-y-6">
              {commonChallenges.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {section.icon}
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Study Resources Section */}
            <div className="space-y-6">
              {studyResources.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Helpful Guides</h3>
              <div className="space-y-3">
                {guides.map((guide, index) => (
                  <Link
                    key={index}
                    to={guide.path}
                    className="block p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">{guide.title}</h4>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Tips</h3>
              <ul className="space-y-2">
                {practicalTips.map((tip, index) => (
                  <li key={index} className="text-gray-600 flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/resources/homework/help"
                  className="block w-full bg-primary-600 text-white p-3 rounded-lg text-center hover:bg-primary-700 transition-colors"
                >
                  Get Help Now
                </Link>
                <Link
                  to="/resources/homework/tutoring"
                  className="block w-full border border-primary-600 text-primary-600 p-3 rounded-lg text-center hover:bg-primary-50 transition-colors"
                >
                  Find a Tutor
                </Link>
                <Link
                  to="/resources/homework/practice"
                  className="block w-full border border-gray-300 text-gray-700 p-3 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  Practice Problems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default MathSciences;