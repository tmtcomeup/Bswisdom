import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Download, CheckCircle2, Calendar } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const GrantWritingGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Finding Grant Opportunities',
      items: [
        'Research Methods',
        'Funding Databases',
        'Eligibility Criteria',
        'Grant Types',
        'Funding Cycles',
      ],
    },
    {
      title: 'Writing a Strong Proposal',
      items: [
        'Project Description',
        'Goals & Objectives',
        'Implementation Plan',
        'Impact Measurement',
        'Sustainability Plan',
      ],
    },
    {
      title: 'Budgeting',
      items: [
        'Budget Development',
        'Cost Categories',
        'Matching Funds',
        'In-Kind Contributions',
        'Administrative Costs',
      ],
    },
    {
      title: 'Reporting & Follow-up',
      items: [
        'Grant Management',
        'Progress Reports',
        'Financial Reports',
        'Outcome Tracking',
        'Future Applications',
      ],
    },
  ];

  const practicalTips = [
    'Read guidelines carefully',
    'Start early',
    'Document everything',
    'Follow formatting rules',
    'Get peer reviews',
  ];

  return (
    <ResourceLayout
      title="The Ultimate Guide to Grant Writing"
      description="A comprehensive guide to securing funding for your non-profit through effective grant writing."
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
            {/* Grant Tools */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Grant Writing Tools
              </h3>
              <div className="space-y-4">
                <Link
                  to="/tools/grant-checklist"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Proposal Checklist</p>
                    <p className="text-sm text-gray-600">Complete review checklist</p>
                  </div>
                </Link>
                <Link
                  to="/tools/grant-templates"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Grant Templates</p>
                    <p className="text-sm text-gray-600">Download proposal templates</p>
                  </div>
                </Link>
                <Link
                  to="/tools/grant-calendar"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Grant Calendar</p>
                    <p className="text-sm text-gray-600">Track deadlines and cycles</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Grant Writing Tips
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

            {/* Resource Downloads */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Free Resources
              </h3>
              <div className="space-y-4">
                <Link
                  to="/downloads/grant-budget-template"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <FileText className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Budget Template</p>
                    <p className="text-sm text-gray-600">Excel format</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Expert Help */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Grant Writing Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance with your grant proposals from our experienced writers.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/services/grant-writing"
                  className="block text-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md shadow-sm text-primary-600 bg-white hover:bg-primary-50"
                >
                  View Writing Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default GrantWritingGuidePage;