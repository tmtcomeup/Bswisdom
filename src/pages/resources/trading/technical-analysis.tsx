import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { LineChart, BarChart2, Activity, TrendingUp } from 'lucide-react';

const TechnicalAnalysis: React.FC = () => {
  const sections = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Chart Patterns',
      topics: [
        'Support and Resistance',
        'Trend Lines',
        'Chart Formations',
        'Price Patterns'
      ]
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Technical Indicators',
      topics: [
        'Moving Averages',
        'Momentum Indicators',
        'Volume Analysis',
        'Oscillators'
      ]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Analysis Tools',
      topics: [
        'Fibonacci Tools',
        'Elliott Wave Theory',
        'Candlestick Analysis',
        'Market Profile'
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Trading Strategies',
      topics: [
        'Trend Following',
        'Breakout Trading',
        'Range Trading',
        'Momentum Trading'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Technical Analysis"
      description="Advanced technical analysis techniques and tools"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Technical Analysis</h1>
          <p className="text-xl text-gray-600">
            Advanced technical analysis techniques and tools to enhance your trading strategies.
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

export default TechnicalAnalysis;