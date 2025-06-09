import React, { useState } from 'react';
import { CreditCard, Zap, Smartphone, Mail } from 'lucide-react';

interface PaymentOptionsProps {
  price: number;
  onPaymentSelect: (method: string) => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ price, onPaymentSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const discountedPrice = price * 0.9; // 10% off

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onPaymentSelect(method);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">Select Payment Method</h3>

      <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
        <div className="flex items-center mb-2">
          <Zap className="h-5 w-5 text-green-600 mr-2" />
          <h4 className="font-medium text-green-900">Instant Payment Methods</h4>
        </div>
        <div className="bg-white/50 rounded-lg p-3 mb-4">
          <p className="text-green-700 font-medium">Special Offer!</p>
          <p className="text-green-600">Get 10% off + 6-hour faster turnaround with Cash App or Zelle</p>
          <div className="mt-2 text-sm">
            <p className="text-gray-600">Original price: ${price.toFixed(2)}</p>
            <p className="text-green-700 font-bold">You pay: ${discountedPrice.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <button
            onClick={() => handleMethodSelect('cashapp')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border ${
              selectedMethod === 'cashapp'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-green-500'
            }`}
          >
            <div className="flex items-center">
              <Smartphone className="h-5 w-5 mr-2" />
              <span>Cash App</span>
            </div>
            <span>${discountedPrice.toFixed(2)}</span>
          </button>

          <button
            onClick={() => handleMethodSelect('zelle')}
            className={`w-full flex items-center justify-between p-3 rounded-lg border ${
              selectedMethod === 'zelle'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-green-500'
            }`}
          >
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>Zelle</span>
            </div>
            <span>${discountedPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <CreditCard className="h-5 w-5 text-gray-600 mr-2" />
          <h4 className="font-medium text-gray-900">Card Payment</h4>
        </div>
        
        <button
          onClick={() => handleMethodSelect('card')}
          className={`w-full flex items-center justify-between p-3 rounded-lg border ${
            selectedMethod === 'card'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-500'
          }`}
        >
          <span>Credit/Debit Card</span>
          <span>${price.toFixed(2)}</span>
        </button>
        <p className="text-sm text-gray-500 mt-2">Processed securely via Stripe</p>
      </div>

      {selectedMethod && (
        <button
          onClick={() => onPaymentSelect(selectedMethod)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Continue to Payment
        </button>
      )}
    </div>
  );
};