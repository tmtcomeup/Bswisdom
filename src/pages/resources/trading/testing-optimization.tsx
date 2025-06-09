import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { TestTube2, Activity, LineChart, BarChart2 } from 'lucide-react';

const TestingOptimization: React.FC = () => {
  const sections = [
    {
      icon: <TestTube2 className="w-6 h-6" />,
      title: 'Testing Framework',
      topics: [
        'Unit Testing Strategy',
        'Integration Testing',
        'System Testing',
        'Performance Testing',
        'Edge Case Scenarios'
      ]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Performance Analysis',
      topics: [
        'Execution Speed',
        'Resource Utilization',
        'Memory Profiling',
        'Network Latency',
        'System Bottlenecks'
      ]
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Strategy Validation',
      topics: [
        'Backtesting Framework',
        'Forward Testing',
        'Paper Trading',
        'Market Simulation',
        'Risk Metrics'
      ]
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Optimization Methods',
      topics: [
        'Parameter Optimization',
        'Performance Metrics',
        'Machine Learning Tools',
        'Statistical Analysis',
        'Genetic Algorithms'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Testing & Optimization"
      description="Testing methodologies and optimization techniques for trading systems"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Testing & Optimization</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to testing, validating, and optimizing trading strategies and systems.
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

export default TestingOptimization;