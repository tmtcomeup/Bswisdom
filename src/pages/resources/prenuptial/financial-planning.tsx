import React from 'react';
import ResourceLayout from '@/components/ResourceLayout';
import { Calculator, BarChart, Wallet, Shield } from 'lucide-react';

const PrenuptialFinancialPlanning: React.FC = () => {
  const sections = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Asset Assessment',
      topics: [
        'Current Asset Inventory',
        'Future Income Projections',
        'Property Valuation',
        'Investment Portfolio Review'
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Financial Strategy',
      topics: [
        'Wealth Management Goals',
        'Risk Assessment',
        'Tax Planning',
        'Retirement Considerations'
      ]
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: 'Debt Management',
      topics: [
        'Current Liabilities',
        'Credit Assessment',
        'Debt Resolution Plans',
        'Joint Financial Obligations'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Protection Measures',
      topics: [
        'Business Interest Protection',
        'Estate Planning Integration',
        'Insurance Considerations',
        'Investment Safeguards'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Prenuptial Financial Planning"
      description="Comprehensive financial planning guidance for prenuptial agreements"
    >
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold mb-4">Financial Planning for Prenuptial Agreements</h1>
          <p className="text-xl text-gray-600">
            Strategic financial planning guidance to help secure your future through comprehensive prenuptial arrangements.
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

export default PrenuptialFinancialPlanning;
