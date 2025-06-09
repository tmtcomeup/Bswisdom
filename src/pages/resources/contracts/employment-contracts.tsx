import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Users } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const EmploymentContractsPage: React.FC = () => {
  const services = [
    {
      id: 'contract-drafting',
      title: 'Employment Agreement Drafting',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Expert drafting of employment agreements tailored to your industry and position requirements.'
    },
    {
      id: 'policy-development',
      title: 'Policy Development',
      icon: <Users className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive development of employment policies and handbooks.'
    }
  ];

  const topics = [
    {
      title: 'Essential Contract Elements',
      content: `
        Comprehensive employment agreements must address these key areas:

        1. Terms of Employment
        - Position Details
          * Job title and description
          * Reporting relationships
          * Work location
          * Start date
          * Employment status
          * Probationary period
          * Performance expectations
          * Work schedule

        2. Compensation Structure
        - Financial Terms
          * Base salary
          * Bonus arrangements
          * Commission structures
          * Equity compensation
          * Benefits package
          * Expense reimbursement
          * Salary review process
          * Overtime policies

        3. Employee Rights & Obligations
        - Core Responsibilities
          * Work duties
          * Performance standards
          * Confidentiality requirements
          * Non-compete provisions
          * Non-solicitation terms
          * Intellectual property rights
          * Outside activities
          * Professional development

        4. Employer Commitments
        - Company Obligations
          * Training provisions
          * Equipment/resources
          * Safe work environment
          * Equal opportunity
          * Anti-harassment policies
          * Grievance procedures
          * Career advancement
          * Professional support

        [Detailed examination continues with extensive coverage of each element...]
      `,
      items: [
        'Terms of Employment',
        'Compensation Structure',
        'Employee Obligations',
        'Employer Commitments',
        'Policy Integration'
      ]
    },
    {
      title: 'Compliance & Protection',
      content: `
        Essential compliance and protection measures include:

        1. Legal Compliance
        - Regulatory Requirements
          * Labor law compliance
          * Minimum wage standards
          * Working hour regulations
          * Leave entitlements
          * Benefits requirements
          * Equal opportunity laws
          * Privacy regulations
          * Immigration compliance

        2. Protective Provisions
        - Risk Management
          * Confidentiality clauses
          * IP protection
          * Non-compete terms
          * Data protection
          * Trade secrets
          * Client relationships
          * Company property
          * Post-employment obligations

        [Extensive coverage of compliance requirements continues...]
      `,
      items: [
        'Legal Compliance',
        'Protective Measures',
        'Risk Management',
        'Dispute Resolution',
        'Term Modifications'
      ]
    },
    // ... additional topics ...
  ];

  const relatedGuides = [
    {
      title: 'Employment Contract Guide',
      description: 'Understanding key terms and negotiations',
      path: '../guides/employment-contract',
    },
    {
      title: 'IP Protection Guide',
      description: 'Protecting intellectual property rights',
      path: '../guides/ip-protection',
    },
  ];

  return (
    <ResourceLayout
      title="Employment Contract Review & Drafting"
      description="Comprehensive guidance for reviewing and drafting employment agreements that protect both employer and employee interests."
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
            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Guides
              </h2>
              <div className="space-y-4">
                {relatedGuides.map((guide, index) => (
                  <Link
                    key={index}
                    to={guide.path}
                    className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="font-medium text-primary-600 mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Contract Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your employment contracts.
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

export default EmploymentContractsPage;