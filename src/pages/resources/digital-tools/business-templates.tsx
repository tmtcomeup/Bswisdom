import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const BusinessTemplatesPage: React.FC = () => {

  const topics = [
    {
      title: 'Business Documents',
      content: `
        Essential business document templates:

        1. Administrative Templates
        - Business Documents
          * Policy documents
          * Procedure manuals
          * Employee handbooks
          * Meeting minutes
          * Status reports
          * Action plans
          * Progress reports
          * Process documentation

        2. Financial Templates
        - Financial Documents
          * Budget templates
          * Expense reports
          * Invoice formats
          * Purchase orders
          * Financial statements
          * Cost analysis
          * ROI calculations
          * Forecast models

        3. Project Templates
        - Project Documents
          * Project plans
          * Status reports
          * Risk registers
          * Change requests
          * Resource plans
          * Timeline templates
          * Budget trackers
          * Review forms

        [Extended template collection...]
      `,
      items: [
        'Administrative Forms',
        'Financial Documents',
        'Project Templates',
        'Process Forms',
        'Report Formats'
      ]
    },
    {
      title: 'Process Workflows',
      content: `
        Workflow documentation templates:

        1. Process Documentation
        - Workflow Templates
          * Process maps
          * Flow charts
          * Standard procedures
          * Work instructions
          * Quality controls
          * Compliance checks
          * Review processes
          * Approval flows

        2. System Documentation
        - Technical Templates
          * System documentation
          * User guides
          * Training materials
          * Reference guides
          * Support documents
          * Maintenance logs
          * Update procedures
          * Backup protocols

        [Detailed workflow templates...]
      `,
      items: [
        'Process Maps',
        'Documentation',
        'Work Instructions',
        'System Guides',
        'Support Materials'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Business Templates</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive collection of professional business templates and document formats.
          </p>
        </div>

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
            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Template Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance with business document templates and formats.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
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

export default BusinessTemplatesPage;
