import React from 'react';
import { Shield, AlertTriangle, BarChart2 } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const RiskManagementGuide: React.FC = () => {
  const topics = [
    {
      title: 'Risk Assessment',
      content: `
        Trading risk assessment framework:

        1. Position Risk
        - Risk Factors
          * Position sizing
          * Market exposure
          * Leverage levels
          * Concentration risk
          * Correlation risk
          * Sector exposure
          * Currency risk
          * Liquidity risk

        2. Market Risk
        - Risk Measures
          * Volatility analysis
          * Value at Risk (VaR)
          * Expected shortfall
          * Beta exposure
          * Stress testing
          * Scenario analysis
          * Gap risk
          * Tail risk

        3. Portfolio Risk
        - Risk Controls
          * Diversification metrics
          * Asset allocation
          * Risk budgeting
          * Portfolio hedging
          * Rebalancing rules
          * Risk decomposition
          * Factor exposure
          * Drawdown control
      `,
      items: [
        'Position Risk Management',
        'Market Risk Analysis',
        'Portfolio Risk Controls',
        'Risk Metrics Calculation',
        'Exposure Management'
      ]
    },
    {
      title: 'Risk Control Systems',
      content: `
        Trading system risk controls:

        1. Pre-Trade Controls
        - Control Measures
          * Order limits
          * Position limits
          * Exposure checks
          * Margin requirements
          * Credit limits
          * Trading restrictions
          * Price validation
          * Risk limit checks

        2. Real-time Monitoring
        - Monitoring Systems
          * Position tracking
          * Risk aggregation
          * Limit monitoring
          * Alert generation
          * Market data checks
          * Execution tracking
          * Performance metrics
          * System health

        3. Post-Trade Analysis
        - Analysis Tools
          * Risk reporting
          * Performance analysis
          * Limit breaches
          * Trading errors
          * Settlement risk
          * Counterparty risk
          * Operational risk
          * Compliance checks
      `,
      items: [
        'Pre-Trade Risk Controls',
        'Real-time Risk Monitoring',
        'Post-Trade Analysis',
        'Risk Reporting',
        'Compliance Management'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Shield className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Risk Management Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to managing and controlling trading risks effectively.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12">
          {topics.map((topic, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3">
                {index === 0 ? <AlertTriangle className="w-6 h-6" /> : <BarChart2 className="w-6 h-6" />}
                <h2 className="text-2xl font-semibold text-gray-900">{topic.title}</h2>
              </div>
              <div className="ml-9">
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-600 font-sans">{topic.content}</pre>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Key Concepts:</h3>
                  <ul className="space-y-2">
                    {topic.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default RiskManagementGuide;
