import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Code2, Cpu, GitBranch, Binary } from 'lucide-react';

const AlgorithmDesign: React.FC = () => {
  const sections = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Algorithm Components',
      topics: [
        'Data Structure Selection',
        'Signal Processing Logic',
        'Order Management',
        'Position Sizing Rules',
        'Risk Management Integration'
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Performance Optimization',
      topics: [
        'Computational Efficiency',
        'Memory Management',
        'Data Processing Pipeline',
        'Latency Reduction',
        'Resource Utilization'
      ]
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Algorithm Workflow',
      topics: [
        'Entry/Exit Conditions',
        'Decision Tree Logic',
        'State Management',
        'Error Handling',
        'Event Processing'
      ]
    },
    {
      icon: <Binary className="w-6 h-6" />,
      title: 'Data Integration',
      topics: [
        'Market Data Feeds',
        'Historical Data Analysis',
        'Real-time Processing',
        'Data Validation',
        'Feed Handler Design'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Algorithm Design"
      description="Design principles and best practices for trading algorithms"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Algorithm Design</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to designing robust and efficient trading algorithms.
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

export default AlgorithmDesign;