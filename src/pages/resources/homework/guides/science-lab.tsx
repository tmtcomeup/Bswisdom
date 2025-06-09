import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  ArrowRight, 
  ShieldAlert, 
  Microscope, 
  ClipboardCheck 
} from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const labSafetyGuidelines = [
  {
    title: 'Personal Protective Equipment',
    description: 'Always wear appropriate safety goggles, lab coat, and gloves',
  },
  {
    title: 'Chemical Handling',
    description: 'Read labels carefully and follow proper storage/disposal procedures',
  },
  {
    title: 'Emergency Procedures',
    description: 'Know locations of safety equipment and emergency exits',
  },
  {
    title: 'Workspace Management',
    description: 'Keep work area clean and organized to prevent accidents',
  },
];

const experimentTips = [
  {
    title: 'Pre-Lab Preparation',
    description: 'Review experiment procedures and safety protocols beforehand',
  },
  {
    title: 'Data Collection',
    description: 'Record observations and measurements accurately and thoroughly',
  },
  {
    title: 'Error Analysis',
    description: 'Document potential sources of error and their impact',
  },
  {
    title: 'Lab Report Writing',
    description: 'Follow proper format and include all required sections',
  },
];

const helpfulResources = [
  {
    name: 'Lab Report Template',
    description: 'Standard format for writing scientific lab reports',
    link: '/resources/homework/templates/lab-report',
  },
  {
    name: 'Safety Guidelines',
    description: 'Comprehensive laboratory safety procedures',
    link: '/resources/homework/guides/lab-safety',
  },
  {
    name: 'Data Analysis Tools',
    description: 'Statistical analysis and graphing resources',
    link: '/resources/homework/tools/data-analysis',
  },
  {
    name: 'Scientific Writing Guide',
    description: 'Tips for writing clear, concise lab reports',
    link: '/resources/homework/guides/scientific-writing',
  },
];

const ScienceLabGuide: React.FC = () => {
  const topics = [
    {
      title: 'Lab Safety',
      icon: ShieldAlert,
      items: [
        'Personal Protective Equipment',
        'Chemical Safety',
        'Equipment Handling',
        'Emergency Procedures',
        'Waste Disposal',
      ],
    },
    {
      title: 'Experimental Methods',
      icon: Microscope,
      items: [
        'Observation Techniques',
        'Data Collection',
        'Measurement Accuracy',
        'Variable Control',
        'Result Documentation',
      ],
    },
    {
      title: 'Report Writing',
      icon: ClipboardCheck,
      items: [
        'Abstract Writing',
        'Methods Section',
        'Results Presentation',
        'Discussion Analysis',
        'Conclusion Format',
      ],
    },
  ];

  return (
    <ResourceLayout
      title="Science Lab Guide"
      description="Master laboratory skills and scientific report writing"
      icon={FlaskConical}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Topics */}
          {topics.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-4">
                <section.icon className="w-6 h-6 mr-2 text-primary-600" />
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

          {/* Lab Safety Guidelines */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Lab Safety Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {labSafetyGuidelines.map((guideline, index) => (
                <div key={index} className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {guideline.title}
                  </h3>
                  <p className="text-sm text-gray-600">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiment Tips */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Experiment Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experimentTips.map((tip, index) => (
                <div key={index} className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
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
                  <p className="text-sm text-gray-600 mb-2">
                    {resource.description}
                  </p>
                  <Link
                    to={resource.link}
                    className="text-primary-600 hover:text-primary-800 text-sm flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary-50 rounded-lg p-6">
            <FlaskConical className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Lab Help?
            </h3>
            <p className="text-gray-600 mb-4">
              Get expert guidance with your lab work and reports.
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
    </ResourceLayout>
  );
};

export default ScienceLabGuide;
