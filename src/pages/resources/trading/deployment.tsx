import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Server, Shield, Settings, Network } from 'lucide-react';

const Deployment: React.FC = () => {
  const sections = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure Setup',
      topics: [
        'Server Configuration',
        'Network Architecture',
        'Load Balancing',
        'Failover Systems',
        'Monitoring Setup'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Measures',
      topics: [
        'Access Controls',
        'Data Encryption',
        'Secure Communication',
        'Compliance Standards',
        'Vulnerability Testing'
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'System Configuration',
      topics: [
        'Environment Setup',
        'Parameter Tuning',
        'Logging Systems',
        'Backup Procedures',
        'Recovery Protocols'
      ]
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Integration',
      topics: [
        'API Connections',
        'Data Feed Setup',
        'Broker Integration',
        'Monitoring Tools',
        'Alert Systems'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Deployment"
      description="Guidelines for deploying trading systems to production"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Deployment</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to deploying and maintaining trading systems in production environments.
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

export default Deployment;