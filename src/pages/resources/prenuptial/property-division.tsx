import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen, SplitSquareHorizontal } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const PropertyDivisionPage: React.FC = () => {
  const services = [
    {
      id: 'property-analysis',
      title: 'Property Analysis',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive analysis of property interests and division strategies in prenuptial agreements.'
    },
    {
      id: 'division-planning',
      title: 'Division Planning',
      icon: <SplitSquareHorizontal className="w-6 h-6 text-primary-600" />,
      description: 'Strategic planning for equitable property division and asset allocation in prenuptial agreements.'
    }
  ];

  const topics = [
    {
      title: 'Property Classification',
      content: `
        Understanding different types of property in marriage:

        1. Separate Property Analysis
        - Pre-Marriage Assets
          * Individual holdings
          * Inherited property
          * Family gifts
          * Business interests
          * Investment accounts
          * Retirement benefits
          * Personal collections
          * Professional practices

        2. Marital Property Considerations
        - Joint Assets
          * Income during marriage
          * Joint purchases
          * Retirement contributions
          * Business growth
          * Investment returns
          * Real estate appreciation
          * Debt obligations
          * Shared accounts

        3. Mixed Property Issues
        - Commingled Assets
          * Property improvements
          * Debt paydowns
          * Business investments
          * Account transfers
          * Joint contributions
          * Property refinancing
          * Asset conversions
          * Growth allocation

        [Detailed property classification continues...]
      `,
      items: [
        'Separate Property',
        'Marital Property',
        'Commingled Assets',
        'Growth Attribution',
        'Debt Classification'
      ]
    },
    {
      title: 'Division Methodologies',
      content: `
        Strategic approaches to property division:

        1. Division Methods
        - Allocation Strategies
          * Equal division
          * Equitable distribution
          * Asset offsetting
          * Buyout arrangements
          * Deferred distribution
          * Staged transfers
          * Contingent rights
          * Future interests

        2. Special Considerations
        - Complex Assets
          * Business valuations
          * Professional practices
          * Intellectual property
          * Stock options
          * Restricted securities
          * Real estate holdings
          * Pension rights
          * Trust interests

        [Extended division methodology details...]
      `,
      items: [
        'Division Methods',
        'Asset Valuation',
        'Distribution Timing',
        'Tax Implications',
        'Implementation Steps'
      ]
    },
    {
      title: 'Agreement Terms',
      content: `
        Essential agreement provisions for property division:

        1. Basic Terms
        - Core Provisions
          * Property schedules
          * Division formulas
          * Valuation methods
          * Transfer procedures
          * Timing requirements
          * Tax allocations
          * Documentation needs
          * Amendment process

        2. Special Provisions
        - Specific Situations
          * Business continuation
          * Professional practice
          * Investment management
          * Property management
          * Debt allocation
          * Future acquisitions
          * Inheritance treatment
          * Gift handling

        [Comprehensive terms coverage...]
      `,
      items: [
        'Basic Terms',
        'Special Provisions',
        'Implementation Steps',
        'Documentation Requirements',
        'Review Procedures'
      ]
    }
  ];

  const relatedGuides = [
    {
      title: 'Fair Agreement Guide',
      description: 'Negotiating equitable property division',
      path: '../guides/fair-agreement',
    },
    {
      title: 'Estate Planning Guide',
      description: 'Integrating property division with estate plans',
      path: '../guides/estate-planning',
    },
  ];

  return (
    <ResourceLayout
      title="Property Division in Prenuptial Agreements"
      description="Expert guidance on structuring property division provisions in prenuptial agreements to ensure fair and effective asset allocation."
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
                    <h3 className="font-medium text-primary-600 mb-1">{guide.title}</h3>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Property Division Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your property division planning.
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

export default PropertyDivisionPage;