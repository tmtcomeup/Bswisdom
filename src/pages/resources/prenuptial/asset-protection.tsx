import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, BookOpen, Lock } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const AssetProtectionPage: React.FC = () => {
  const services = [
    {
      id: 'prenup-drafting',
      title: 'Prenuptial Agreement Drafting',
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      description: 'Expert drafting of comprehensive prenuptial agreements focused on asset protection and wealth preservation.'
    },
    {
      id: 'asset-analysis',
      title: 'Asset Analysis & Planning',
      icon: <Lock className="w-6 h-6 text-primary-600" />,
      description: 'Detailed analysis of assets and strategic planning for effective protection in prenuptial agreements.'
    }
  ];

  const topics = [
    {
      title: 'Asset Classification & Protection',
      content: `
        Understanding and protecting different types of assets:

        1. Property Categories
        - Asset Types
          * Real estate holdings
          * Business interests
          * Investment portfolios
          * Retirement accounts
          * Trust beneficiary rights
          * Intellectual property
          * Inherited assets
          * Future acquisitions

        2. Protection Strategies
        - Safeguard Methods
          * Separate property designation
          * Asset segregation
          * Business succession planning
          * Trust arrangements
          * Property title structuring
          * Investment protection
          * Income segregation
          * Growth allocation

        3. Documentation Requirements
        - Essential Records
          * Asset inventories
          * Valuation reports
          * Ownership documentation
          * Financial statements
          * Tax returns
          * Trust documents
          * Business records
          * Account statements

        [Comprehensive asset protection details...]
      `,
      items: [
        'Property Classification',
        'Protection Methods',
        'Documentation Needs',
        'Valuation Approaches',
        'Growth Considerations'
      ]
    },
    {
      title: 'Legal Considerations',
      content: `
        Essential legal aspects of asset protection in prenuptial agreements:

        1. Enforceability Requirements
        - Legal Standards
          * Full disclosure
          * Independent counsel
          * Voluntary execution
          * Reasonable terms
          * Timing requirements
          * Financial disclosure
          * Procedural fairness
          * Substantive fairness

        2. State Law Compliance
        - Jurisdictional Issues
          * Property laws
          * Community property
          * Equitable distribution
          * Enforcement standards
          * Recording requirements
          * Notice provisions
          * Amendment procedures
          * Termination rights

        [Detailed legal framework discussion...]
      `,
      items: [
        'Legal Requirements',
        'State Compliance',
        'Enforcement Issues',
        'Disclosure Rules',
        'Fairness Standards'
      ]
    },
    {
      title: 'Implementation & Maintenance',
      content: `
        Effective implementation and ongoing maintenance strategies:

        1. Agreement Execution
        - Process Requirements
          * Timing considerations
          * Signing procedures
          * Witness requirements
          * Notarization needs
          * Document storage
          * Copy distribution
          * Recording steps
          * Update procedures

        2. Asset Management
        - Ongoing Maintenance
          * Account segregation
          * Property titling
          * Record keeping
          * Asset tracking
          * Value updates
          * Amendment process
          * Review schedule
          * Compliance monitoring

        [Extended implementation guidance...]
      `,
      items: [
        'Execution Process',
        'Asset Management',
        'Record Keeping',
        'Regular Reviews',
        'Update Procedures'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Asset Protection in Prenuptial Agreements"
      description="Comprehensive guidance for protecting assets through effective prenuptial agreement planning and implementation."
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
            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Our Services
              </h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 bg-gray-50 rounded-md"
                  >
                    <div className="flex items-start space-x-3">
                      {service.icon}
                      <div>
                        <h3 className="font-medium text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Prenuptial Agreement Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your prenuptial agreement planning.
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

export default AssetProtectionPage;