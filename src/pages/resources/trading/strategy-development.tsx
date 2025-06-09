import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { BrainCircuit, Target, Workflow, Infinity as InfinityIcon } from 'lucide-react';

const StrategyDevelopment: React.FC = () => {
  const sections = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: 'Strategy Design',
      topics: [
        'Market Research',
        'Strategy Conceptualization',
        'Trading Rules Definition',
        'Signal Generation',
        'Risk Parameters'
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Implementation Plan',
      topics: [
        'Algorithm Selection',
        'Technical Requirements',
        'Data Management',
        'Performance Metrics',
        'Execution Framework'
      ]
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Strategy Components',
      topics: [
        'Entry/Exit Rules',
        'Position Sizing',
        'Risk Management',
        'Market Timing',
        'Portfolio Management'
      ]
    },
    {
      icon: <InfinityIcon className="w-6 h-6" />,
      title: 'Continuous Improvement',
      topics: [
        'Performance Analysis',
        'Strategy Refinement',
        'Market Adaptation',
        'Parameter Optimization',
        'Risk Adjustment'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Strategy Development"
      description="Comprehensive approach to developing trading strategies"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Strategy Development</h1>
          <p className="text-xl text-gray-600">
            Guide to developing, implementing, and refining systematic trading strategies.
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

export default StrategyDevelopment;