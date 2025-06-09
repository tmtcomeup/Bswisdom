import React from 'react';
import { CreditCard } from 'lucide-react';

interface StripeCheckoutProps {
  price: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export const StripeCheckout: React.FC<StripeCheckoutProps> = ({
  price,
  onSuccess,
  onCancel
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <CreditCard className="h-6 w-6 text-blue-500 mr-2" />
        <h3 className="text-lg font-bold">Credit/Debit Card Payment</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="4242 4242 4242 4242"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiration
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="123"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between text-lg font-medium">
          <span>Total:</span>
          <span>${price.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={onSuccess}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};