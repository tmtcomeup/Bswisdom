import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, Download } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const FinancialProjectionsGuide: React.FC = () => {
  const topics = [
    {
      title: 'Financial Modeling Fundamentals',
      content: `
        Essential components of financial projections:

        1. Revenue Forecasting
        - Revenue Streams
          * Sales projections
          * Pricing strategy
          * Market penetration
          * Growth assumptions
          * Seasonality factors
          * Customer acquisition
          * Retention rates
          * Recurring revenue

        2. Cost Structure Analysis
        - Cost Categories
          * Fixed costs
          * Variable costs
          * Operating expenses
          * Cost of goods sold
          * Overhead allocation
          * Labor costs
          * Marketing expenses
          * Technology costs

        3. Capital Requirements
        - Funding Needs
          * Startup costs
          * Working capital
          * Equipment purchases
          * Inventory investment
          * Marketing budget
          * Staff hiring
          * Technology infrastructure
          * Reserve requirements

        [Extended financial modeling details...]
      `,
      items: [
        'Revenue Modeling',
        'Cost Analysis',
        'Capital Planning',
        'Cash Flow',
        'Break-even Analysis'
      ]
    },
    {
      title: 'Financial Metrics & KPIs',
      content: `
        Key performance indicators and financial metrics:

        1. Profitability Metrics
        - Performance Measures
          * Gross margin
          * Operating margin
          * EBITDA
          * Net profit margin
          * Return on investment
          * Return on equity
          * Return on assets
          * Unit economics

        2. Growth Metrics
        - Growth Indicators
          * Revenue growth rate
          * Customer growth
          * Market share gains
          * Expansion metrics
          * Scaling factors
          * Productivity ratios
          * Efficiency measures
          * Capacity utilization

        3. Operational Metrics
        - Business Performance
          * Customer acquisition cost
          * Lifetime value
          * Churn rate
          * Average order value
          * Inventory turnover
          * Accounts receivable
          * Operating cycle
          * Cash conversion

        [Detailed metrics analysis...]
      `,
      items: [
        'Profitability Metrics',
        'Growth Indicators',
        'Operational KPIs',
        'Financial Ratios',
        'Performance Benchmarks'
      ]
    },
    {
      title: 'Projection Methodologies',
      content: `
        Financial forecasting approaches and techniques:

        1. Forecasting Methods
        - Projection Techniques
          * Bottom-up modeling
          * Top-down analysis
          * Scenario planning
          * Sensitivity analysis
          * Comparative methods
          * Industry benchmarks
          * Historical trends
          * Market-based

        2. Risk Assessment
        - Risk Factors
          * Market risks
          * Competitive threats
          * Economic factors
          * Regulatory changes
          * Technology shifts
          * Customer behavior
          * Cost variations
          * Funding risks

        [Comprehensive methodology coverage...]
      `,
      items: [
        'Forecasting Methods',
        'Risk Analysis',
        'Scenario Planning',
        'Validation Techniques',
        'Update Procedures'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Financial Projections Guide"
      description="Comprehensive guide to creating accurate and compelling financial projections for business plans and investment proposals."
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
                <div className="prose max-w-none mb-6">
                  {section.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>
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
            {/* Quick Tools */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Financial Tools
              </h3>
              <div className="space-y-4">
                <Link
                  to="/tools/financial-calculator"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <Calculator className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Financial Calculator</p>
                    <p className="text-sm text-gray-600">Calculate key metrics and ratios</p>
                  </div>
                </Link>
                <Link
                  to="/tools/templates"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 text-primary-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Templates</p>
                    <p className="text-sm text-gray-600">Download financial templates</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Expert Help */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Financial Planning Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert assistance with your financial projections from our experienced analysts.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/services/financial-projections"
                  className="block text-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md shadow-sm text-primary-600 bg-white hover:bg-primary-50"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default FinancialProjectionsGuide;