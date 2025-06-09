import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Shield } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const BusinessContractsPage: React.FC = () => {
  const services = [
    {
      id: 'contract-drafting',
      title: 'Contract Drafting',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Expert drafting of comprehensive business contracts tailored to your specific needs and industry requirements.'
    },
    {
      id: 'contract-review',
      title: 'Contract Review & Analysis',
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      description: 'Thorough review and analysis of existing contracts to identify risks, opportunities, and necessary modifications.'
    }
  ];

  const topics = [
    {
      title: 'Essential Contract Components',
      content: `
        Every business contract requires careful attention to these critical elements:

        1. Core Agreement Terms
        - Parties and Definitions
          * Legal entity identification
          * Key term definitions
          * Role specifications
          * Authority verification
          * Contact information
          * Relationship structure

        2. Scope of Agreement
        - Service/Product Details
          * Deliverables specification
          * Performance standards
          * Quality requirements
          * Timeline commitments
          * Acceptance criteria
          * Change management
          * Project milestones
          * Service levels

        3. Financial Terms
        - Payment Structure
          * Pricing mechanisms
          * Payment schedules
          * Invoice procedures
          * Late payment terms
          * Currency specifications
          * Tax considerations
          * Expense policies
          * Budget constraints

        4. Risk Management
        - Protection Measures
          * Liability limitations
          * Insurance requirements
          * Indemnification clauses
          * Force majeure provisions
          * Warranty terms
          * Confidentiality obligations
          * IP protection
          * Data security

        [Detailed examination of each component continues...]
      `,
      items: [
        'Core Agreement Terms',
        'Scope Definition',
        'Financial Structure',
        'Risk Management',
        'Compliance Requirements'
      ]
    },
    {
      title: 'Contract Types & Applications',
      content: `
        Common business contract types and their specific requirements:

        1. Service Agreements
        - Key Elements
          * Service definitions
          * Performance metrics
          * Response times
          * Support levels
          * Escalation procedures
          * Maintenance terms
          * Upgrade provisions
          * Service credits

        2. Supply Agreements
        - Essential Components
          * Product specifications
          * Delivery terms
          * Quality standards
          * Inventory requirements
          * Return policies
          * Warranty provisions
          * Price adjustments
          * Volume commitments

        3. Partnership Agreements
        - Critical Aspects
          * Profit sharing
          * Decision rights
          * Resource allocation
          * Exit strategies
          * Non-compete terms
          * Intellectual property
          * Dispute resolution
          * Territory rights

        [Extensive coverage of contract types continues...]
      `,
      items: [
        'Service Agreements',
        'Supply Contracts',
        'Partnership Agreements',
        'Licensing Deals',
        'Employment Contracts'
      ]
    },
    {
      title: 'Best Practices & Strategy',
      content: `
        Implement these best practices for effective contract management:

        1. Negotiation Strategy
        - Key Considerations
          * Leverage points
          * Deal breakers
          * Alternative options
          * Market standards
          * Competitive analysis
          * Risk tolerance
          * Timeline pressure
          * Relationship value

        2. Implementation Planning
        - Critical Steps
          * Stakeholder alignment
          * Resource allocation
          * Timeline development
          * Training requirements
          * System integration
          * Monitoring procedures
          * Performance tracking
          * Review schedules

        3. Risk Mitigation
        - Protection Measures
          * Insurance coverage
          * Security deposits
          * Performance bonds
          * Escrow arrangements
          * Step-in rights
          * Audit provisions
          * Termination options
          * Dispute procedures

        [Continued strategic guidance...]
      `,
      items: [
        'Negotiation Strategy',
        'Implementation Planning',
        'Risk Mitigation',
        'Compliance Monitoring',
        'Performance Management'
      ]
    }
  ];

  const relatedGuides = [
    {
      title: 'Contract Terms & Conditions Guide',
      description: 'Master the essential elements of business contracts',
      path: '../guides/contract-terms',
    },
    {
      title: 'Risk Assessment Framework',
      description: 'Learn to identify and mitigate contract risks',
      path: '../guides/risk-assessment',
    },
  ];

  return (
    <ResourceLayout
      title="Business Contracts"
      description="Comprehensive resources for drafting and reviewing business contracts. Learn best practices for creating effective business agreements that protect your interests."
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
                Need Professional Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your business contract needs.
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

export default BusinessContractsPage;