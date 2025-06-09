import React from 'react';
import { DollarSign } from 'lucide-react';

interface DonationFormProps {
  onClose?: () => void;
}

const DonationForm: React.FC<DonationFormProps> = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Donations Coming Soon
      </h2>
      <p className="text-gray-600 text-center">
        Our donation system is currently being configured. Please check back later.
      </p>
      <div className="flex justify-center mt-4">
        <DollarSign className="h-8 w-8 text-blue-500" />
      </div>
    </div>
  );
};

export default DonationForm;