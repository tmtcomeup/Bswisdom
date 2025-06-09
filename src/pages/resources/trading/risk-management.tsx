import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Shield, DollarSign, Activity, AlertTriangle } from 'lucide-react';

const RiskManagement: React.FC = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Control',
      topics: [
        'Position Sizing',
        'Stop Loss Management',
        'Risk-Reward Ratios',
        'Portfolio Allocation'
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Capital Management',
      topics: [
        'Account Sizing',
        'Drawdown Control',
        'Leverage Management',
        'Profit Taking'
      ]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Performance Tracking',
      topics: [
        'Trade Journal',
        'Performance Metrics',
        'Equity Curve Analysis',
        'Win Rate Monitoring'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Risk Assessment',
      topics: [
        'Market Risk',
        'Volatility Analysis',
        'Correlation Risk',
        'Systemic Risk'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Risk Management"
      description="Essential risk management principles and strategies"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Risk Management Guide</h1>
          <p className="text-xl text-gray-600">
            Master essential risk management principles to protect your trading capital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.topics.map((topic, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default RiskManagement;
