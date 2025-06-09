import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface DonationButtonProps {
  className?: string;
  text?: string;
}

const DonationButton: React.FC<DonationButtonProps> = ({ 
  className = "bg-red-600 hover:bg-red-700",
  text = "Donate Now"
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`flex items-center px-4 py-2 text-white font-medium rounded-md shadow-sm transition duration-200 ${className}`}
      >
        <Heart className="h-5 w-5 mr-2" />
        {text}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6">
              <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  Donations Coming Soon
                </h2>
                <p className="text-gray-600 text-center">
                  Our donation system is currently being configured. Please check back later.
                </p>
                <div className="flex justify-center mt-4">
                  <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationButton;