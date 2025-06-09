import React from 'react';

interface ServiceFeaturesProps {
  features: string[];
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <h4 className="font-medium text-gray-900 mb-2">Perfect For:</h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};