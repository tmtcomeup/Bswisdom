import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Wrench } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const ServiceAgreementsPage: React.FC = () => {
  const services = [
    {
      id: 'professional-services',
      title: 'Professional Service Agreements',
      icon: <Wrench className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive drafting and review of professional service contracts and contractor agreements.'
    },
    {
      id: 'contract-review',
      title: 'Agreement Review & Analysis',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Detailed review of service agreements to ensure protection of rights and obligations.'
    }
  ];

  const topics = [
    {
      title: 'Service Agreement Essentials',
      content: `
        Professional service agreements must include these critical components:

        1. Scope of Services
        - Service Definition
          * Detailed service descriptions
          * Deliverables specification
          * Performance standards
          * Quality metrics
          * Timeline requirements
          * Resource allocation
          * Project milestones
          * Change management procedures

        2. Terms and Conditions
        - Contractual Framework
          * Agreement duration
          * Renewal terms
          * Termination conditions
          * Notice requirements
          * Force majeure provisions
          * Dispute resolution
          * Governing law
          * Venue selection

        3. Financial Terms
        - Compensation Structure
          * Fee schedules
          * Payment terms
          * Expense policies
          * Invoice procedures
          * Late payment penalties
          * Currency specifications
          * Tax implications
          * Budget constraints

        4. Performance Standards
        - Quality Assurance
          * Service level agreements
          * Performance metrics
          * Quality control measures
          * Review procedures
          * Acceptance criteria
          * Remediation process
          * Reporting requirements
          * Continuous improvement

        [Detailed examination continues with extensive coverage...]
      `,
      items: [
        'Scope Definition',
        'Terms and Conditions',
        'Financial Structure',
        'Performance Standards',
        'Quality Assurance'
      ]
    },
    {
      title: 'Risk Management & Compliance',
      content: `
        Essential risk management considerations include:

        1. Liability Protection
        - Risk Allocation
          * Limitation of liability
          * Indemnification clauses
          * Insurance requirements
          * Warranty provisions
          * Disclaimer statements
          * Hold harmless agreements
          * Force majeure terms
          * Third-party claims

        2. Intellectual Property
        - IP Protection
          * Ownership rights
          * Usage licenses
          * Work product rights
          * Pre-existing IP
          * Third-party rights
          * Confidentiality terms
          * Data protection
          * Security requirements

        3. Regulatory Compliance
        - Legal Requirements
          * Industry regulations
          * Professional standards
          * Licensing requirements
          * Data privacy laws
          * Employment laws
          * Insurance mandates
          * Reporting obligations
          * Record-keeping

        [Comprehensive coverage of risk management continues...]
      `,
      items: [
        'Liability Protection',
        'IP Rights Management',
        'Regulatory Compliance',
        'Risk Assessment',
        'Insurance Requirements'
      ]
    },
    {
      title: 'Implementation & Management',
      content: `
        Effective agreement management requires:

        1. Contract Administration
        - Management Procedures
          * Implementation planning
          * Performance monitoring
          * Change management
          * Documentation control
          * Communication protocols
          * Escalation procedures
          * Review schedules
          * Renewal management

        2. Relationship Management
        - Stakeholder Relations
          * Communication plans
          * Progress reporting
          * Issue resolution
          * Performance reviews
          * Relationship building
          * Team coordination
          * Knowledge transfer
          * Continuous improvement

        [Additional implementation details...]
      `,
      items: [
        'Contract Administration',
        'Performance Monitoring',
        'Change Management',
        'Documentation Control',
        'Relationship Management'
      ]
    }
  ];

  const relatedGuides = [
    {
      title: 'Essential Contract Clauses',
      description: 'Key provisions for service agreements',
      path: '../guides/essential-clauses',
    },
    {
      title: 'Contract Boilerplate Guide',
      description: 'Understanding standard provisions',
      path: '../guides/contract-boilerplate',
    },
  ];

  return (
    <ResourceLayout
      title="Service Agreement Review & Drafting"
      description="Comprehensive guidance for creating and reviewing service agreements that protect your interests and set clear expectations."
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
                Need Agreement Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your service agreements.
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

export default ServiceAgreementsPage;