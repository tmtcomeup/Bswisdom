import React from 'react';
import { Network, Code2, Database } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const ApiIntegrationGuide: React.FC = () => {
  const topics = [
    {
      title: 'API Integration',
      content: `
        Trading API integration guide:

        1. Market Data APIs
        - Integration Components
          * Price data feeds
          * Historical data access
          * Real-time streaming
          * Level 2 market data
          * Order book data
          * Trade execution APIs
          * WebSocket feeds
          * REST endpoints

        2. Data Processing
        - Processing Methods
          * Data normalization
          * Error handling
          * Rate limiting
          * Data validation
          * Format conversion
          * Data persistence
          * Caching strategies
          * Event processing

        3. Connection Management
        - Management Systems
          * Connection pooling
          * Authentication
          * Session handling
          * Failover systems
          * Load balancing
          * Request queuing
          * Error recovery
          * Health monitoring
      `,
      items: [
        'Market Data Integration',
        'API Authentication',
        'Data Processing',
        'Error Handling',
        'Connection Management'
      ]
    },
    {
      title: 'System Architecture',
      content: `
        Integration architecture design:

        1. System Components
        - Core Elements
          * Data receivers
          * Message handlers
          * Order routers
          * Execution engine
          * Data storage
          * Event processors
          * Monitoring systems
          * Logging services

        2. Integration Patterns
        - Design Patterns
          * Publisher/Subscriber
          * Request/Response
          * Event-driven
          * Message queuing
          * Circuit breaker
          * Retry patterns
          * Throttling
          * Load balancing

        3. Performance Optimization
        - Optimization Areas
          * Latency reduction
          * Throughput scaling
          * Memory management
          * Network optimization
          * Data compression
          * Cache utilization
          * Resource allocation
          * System tuning
      `,
      items: [
        'System Architecture',
        'Integration Patterns',
        'Performance Tuning',
        'System Scaling',
        'Resource Management'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Network className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">API Integration Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to integrating trading systems with market data and execution APIs.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12">
          {topics.map((topic, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3">
                {index === 0 ? <Code2 className="w-6 h-6" /> : <Database className="w-6 h-6" />}
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

export default ApiIntegrationGuide;
