import React from 'react';
import { CreditCard, Smartphone, Mail, Heart, Lock, Shield } from 'lucide-react';
import { StripeCheckout } from './StripeCheckout';
import usePaymentSettings from '../hooks/usePaymentSettings';
import DonationButton from './DonationButton';

interface PaymentProcessorProps {
  method: 'stripe' | 'cashapp' | 'zelle';
  amount: number;
  orderId: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export const PaymentProcessor: React.FC<PaymentProcessorProps> = ({
  method,
  amount,
  orderId,
  onSuccess,
  onCancel
}) => {
  const { settings } = usePaymentSettings();
  const discountedAmount = amount * 0.9; // 10% off

  const renderSecurityBadges = () => (
    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
      <div className="flex items-center">
        <Lock className="h-4 w-4 mr-1" />
        <span>256-bit encryption</span>
      </div>
      <div className="flex items-center">
        <Shield className="h-4 w-4 mr-1" />
        <span>Secure payment</span>
      </div>
    </div>
  );

  if (method === 'stripe') {
    return (
      <div className="space-y-6">
        <StripeCheckout price={amount} onSuccess={onSuccess} onCancel={onCancel} />
        {renderSecurityBadges()}
        <div className="text-center">
          <DonationButton className="mx-auto" />
          <p className="text-sm text-gray-500 mt-2">
            Support our "No One Left Behind" charity initiative
          </p>
        </div>
      </div>
    );
  }

  if (method === 'cashapp') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Smartphone className="h-6 w-6 text-green-500 mr-2" />
          <h3 className="text-lg font-bold">Cash App Payment</h3>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-green-800 font-medium mb-2">Send payment to:</p>
          <div className="bg-white p-3 rounded border border-green-200 text-lg font-mono">
            $BSWCASHPAY
          </div>
          <div className="mt-2 bg-white p-3 rounded border border-green-200">
            <p className="font-medium text-gray-700">Order ID (include in payment note):</p>
            <p className="font-mono text-lg">{orderId}</p>
          </div>
          <div className="mt-2 text-green-600">
            <p className="font-medium">Special Offer:</p>
            <p>10% off + 6-hour faster turnaround!</p>
            <p className="text-sm mt-1">Original price: ${amount.toFixed(2)}</p>
            <p className="font-bold">You pay: ${discountedAmount.toFixed(2)}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-blue-800 font-medium mb-2">Payment Steps:</p>
            <ol className="list-decimal list-inside space-y-2 text-blue-700">
              <li>Open your Cash App</li>
              <li>Send ${discountedAmount.toFixed(2)} to $BSWCASHPAY</li>
              <li>Include Order ID: {orderId} in the payment note</li>
              <li>Click "Payment Sent" below once complete</li>
            </ol>
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
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Payment Sent
            </button>
          </div>
        </div>

        {renderSecurityBadges()}

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <DonationButton />
          <p className="text-sm text-gray-500 mt-2">
            Support our "No One Left Behind" charity initiative
          </p>
        </div>
      </div>
    );
  }

  if (method === 'zelle') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Mail className="h-6 w-6 text-blue-500 mr-2" />
          <h3 className="text-lg font-bold">Zelle Payment</h3>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-blue-800 font-medium mb-2">Send payment to:</p>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-medium">Email:</p>
            <p className="font-mono text-sm break-all">BrilliantStrategicWisdom@gmail.com</p>
          </div>
          <div className="mt-2 bg-white p-3 rounded border border-blue-200">
            <p className="font-medium">Order ID (include in payment note):</p>
            <p className="font-mono text-lg">{orderId}</p>
          </div>
          <div className="mt-2 text-blue-600">
            <p className="font-medium">Special Offer:</p>
            <p>10% off + 6-hour faster turnaround!</p>
            <p className="text-sm mt-1">Original price: ${amount.toFixed(2)}</p>
            <p className="font-bold">You pay: ${discountedAmount.toFixed(2)}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-blue-800 font-medium mb-2">Payment Steps:</p>
            <ol className="list-decimal list-inside space-y-2 text-blue-700">
              <li>Open your banking app or Zelle app</li>
              <li>Send ${discountedAmount.toFixed(2)} using email above</li>
              <li>Include Order ID: {orderId} in the payment note</li>
              <li>Click "Payment Sent" below once complete</li>
            </ol>
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
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Payment Sent
            </button>
          </div>
        </div>

        {renderSecurityBadges()}

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <DonationButton />
          <p className="text-sm text-gray-500 mt-2">
            Support our "No One Left Behind" charity initiative
          </p>
        </div>
      </div>
    );
  }

  return null;
};