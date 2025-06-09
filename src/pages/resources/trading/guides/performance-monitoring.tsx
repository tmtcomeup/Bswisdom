import React from 'react';
import { Activity, BarChart2, LineChart } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const PerformanceMonitoringGuide: React.FC = () => {
  const topics = [
    {
      title: 'Performance Metrics',
      content: `
        Key trading performance metrics:

        1. Return Metrics
        - Measurement Methods
          * Total return
          * Risk-adjusted return
          * Sharpe ratio
          * Sortino ratio
          * Maximum drawdown
          * Recovery factor
          * Win rate
          * Profit factor

        2. Risk Metrics
        - Risk Assessment
          * Value at Risk (VaR)
          * Expected Shortfall
          * Position sizing
          * Market exposure
          * Beta calculation
          * Volatility measures
          * Correlation analysis
          * Stress testing

        3. Portfolio Analytics
        - Portfolio Measures
          * Portfolio allocation
          * Sector exposure
          * Asset correlation
          * Diversification ratio
          * Risk contribution
          * Performance attribution
          * Factor analysis
          * Style analysis
      `,
      items: [
        'Return Calculation',
        'Risk Assessment',
        'Portfolio Analysis',
        'Performance Attribution',
        'Risk-Adjusted Metrics'
      ]
    },
    {
      title: 'Monitoring Systems',
      content: `
        Trading system monitoring:

        1. Real-time Monitoring
        - System Components
          * Position tracking
          * P&L monitoring
          * Risk limits
          * Execution quality
          * Order flow
          * Market data quality
          * System health
          * Alert mechanisms

        2. Historical Analysis
        - Analysis Tools
          * Performance reports
          * Trade journals
          * Strategy backtests
          * Market impact
          * Transaction costs
          * Slippage analysis
          * Execution analysis
          * Behavioral patterns

        3. System Diagnostics
        - Diagnostic Measures
          * Latency analysis
          * System capacity
          * Error rates
          * Recovery times
          * Data integrity
          * Processing efficiency
          * Resource usage
          * Operational risks
      `,
      items: [
        'Real-time Monitoring',
        'Historical Analysis',
        'System Diagnostics',
        'Alert Configuration',
        'Performance Reports'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Activity className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Performance Monitoring Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to monitoring, analyzing, and optimizing trading system performance.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12">
          {topics.map((topic, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3">
                {index === 0 ? <BarChart2 className="w-6 h-6" /> : <LineChart className="w-6 h-6" />}
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

export default PerformanceMonitoringGuide;
