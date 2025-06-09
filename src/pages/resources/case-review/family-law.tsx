import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen, Search, Users } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const FamilyLawReviewPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 'divorce-analysis',
      title: 'Divorce Case Analysis',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive analysis of divorce cases including asset division, support calculations, and custody matters.',
    },
    {
      id: 'custody-evaluation',
      title: 'Custody Evaluation Review',
      icon: <Search className="w-6 h-6 text-primary-600" />,
      description: 'Expert review of custody evaluations and parenting time arrangements.',
    }
  ];

  const topics = [
    {
      title: 'Divorce Case Components',
      content: `
        Comprehensive divorce case analysis requires examination of multiple factors:

        1. Property Division Analysis
        - Marital vs. Separate Property
          * Asset classification
          * Acquisition timing
          * Commingling issues
          * Business interests
          * Retirement accounts
          * Real estate holdings
          * Investment portfolios
          * Debt allocation
        
        2. Support Calculations
        - Alimony Considerations
          * Duration of marriage
          * Income disparity
          * Standard of living
          * Earning capacity
          * Educational needs
          * Health factors
          * Tax implications
        
        3. Child Custody Evaluation
        - Best Interests Analysis
          * Physical custody options
          * Legal custody arrangements
          * Parenting time schedules
          * Educational decisions
          * Healthcare responsibilities
          * Religious considerations
          * Travel restrictions

        4. Financial Documentation
        - Required Disclosures
          * Income verification
          * Asset documentation
          * Expense statements
          * Tax returns
          * Business records
          * Banking statements
          * Investment accounts
          * Retirement benefits

        [Detailed analysis of each component continues...]
      `,
      items: [
        'Property Division',
        'Support Calculations',
        'Custody Arrangements',
        'Financial Disclosures',
        'Jurisdictional Issues',
      ],
    },
    {
      title: 'Strategic Planning',
      content: `
        Effective family law strategy requires careful consideration of:

        1. Settlement Options
        - Alternative Dispute Resolution
          * Mediation benefits
          * Collaborative divorce
          * Arbitration possibilities
          * Settlement conferences
          * Negotiation strategies
          * Cost-benefit analysis
        
        2. Litigation Preparation
        - Court Requirements
          * Procedural compliance
          * Evidence gathering
          * Expert witnesses
          * Guardian ad litem
          * Custody evaluators
          * Financial experts
        
        3. Post-Judgment Planning
        - Implementation Strategies
          * Property transfer timing
          * Support payment systems
          * Custody transitions
          * Insurance coverage
          * Modification triggers
          * Enforcement options

        [Comprehensive strategic planning details...]
      `,
      items: [
        'Settlement Approaches',
        'Litigation Strategy',
        'Evidence Gathering',
        'Expert Coordination',
        'Implementation Planning',
      ],
    },
    {
      title: 'Documentation Requirements',
      content: `
        Thorough documentation is critical in family law cases:

        1. Financial Records
        - Required Documents
          * Income statements
          * Tax returns
          * Bank statements
          * Credit card records
          * Investment accounts
          * Retirement benefits
          * Insurance policies
          * Property valuations
        
        2. Custody Documentation
        - Essential Records
          * Parenting journals
          * School records
          * Medical history
          * Extracurricular activities
          * Communication logs
          * Visitation schedules
          * Support payments
          * Expense sharing
        
        3. Legal Filings
        - Court Documents
          * Pleadings
          * Financial affidavits
          * Parenting plans
          * Settlement agreements
          * Court orders
          * Modification requests
          * Enforcement actions
          * Appeals documentation

        [Additional documentation requirements...]
      `,
      items: [
        'Financial Records',
        'Custody Documentation',
        'Legal Filings',
        'Communication Logs',
        'Support Records',
      ],
    },
  ];

  const relatedGuides = [
    {
      title: 'Divorce Navigation Guide',
      description: 'Understanding family law proceedings',
      path: '../guides/navigating-divorce',
    },
    {
      title: 'Child Custody Guide',
      description: 'Best practices for custody cases',
      path: '../guides/child-custody',
    },
  ];

  return (
    <ResourceLayout
      title="Family Law Case Review"
      description="Comprehensive analysis of family law matters including custody, support, and property division issues."
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
                Need Family Law Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your family law case.
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

export default FamilyLawReviewPage;