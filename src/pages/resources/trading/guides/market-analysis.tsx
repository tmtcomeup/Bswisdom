import React from 'react';
import { LineChart, BarChart2, TrendingUp } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const MarketAnalysisGuide: React.FC = () => {
  const topics = [
    {
      title: 'Technical Analysis',
      content: `
        Market technical analysis methods:

        1. Chart Analysis
        - Analysis Techniques
          * Price action
          * Support/resistance
          * Trend analysis
          * Chart patterns
          * Volume analysis
          * Momentum studies
          * Moving averages
          * Breakout patterns

        2. Technical Indicators
        - Popular Indicators
          * RSI (Relative Strength Index)
          * MACD (Moving Average Convergence Divergence)
          * Bollinger Bands
          * Stochastic Oscillator
          * Average Directional Index (ADX)
          * On-Balance Volume (OBV)
          * Rate of Change (ROC)
          * Fibonacci tools

        3. Market Structure
        - Structure Analysis
          * Price levels
          * Market cycles
          * Time frames
          * Trend strength
          * Volatility patterns
          * Market phases
          * Range analysis
          * Market breadth
      `,
      items: [
        'Chart Pattern Analysis',
        'Technical Indicators',
        'Market Structure',
        'Volume Analysis',
        'Price Action Trading'
      ]
    },
    {
      title: 'Market Dynamics',
      content: `
        Market behavior analysis:

        1. Market Behavior
        - Analysis Methods
          * Order flow analysis
          * Market sentiment
          * Market depth
          * Liquidity analysis
          * Market profile
          * Trading volume
          * Price discovery
          * Auction theory

        2. Market Forces
        - Key Factors
          * Supply and demand
          * Price momentum
          * Market regimes
          * News impact
          * Sector rotation
          * Market correlation
          * Volatility regimes
          * Market microstructure

        3. Market Conditions
        - Market States
          * Trend identification
          * Range conditions
          * Breakout scenarios
          * Market reversals
          * Volatility states
          * Market extremes
          * Sentiment shifts
          * Market efficiency
      `,
      items: [
        'Market Behavior Analysis',
        'Order Flow Analysis',
        'Market Microstructure',
        'Market Sentiment',
        'Market Conditions'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <LineChart className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Market Analysis Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to analyzing markets using technical and behavioral analysis methods.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12">
          {topics.map((topic, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3">
                {index === 0 ? <BarChart2 className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
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

export default MarketAnalysisGuide;
