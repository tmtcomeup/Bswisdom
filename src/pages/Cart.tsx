import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { ShoppingCart, Clock, CreditCard, Zap, Smartphone, Mail } from 'lucide-react';
import { PaymentProcessor } from '../components/PaymentProcessor';
import { generateOrderId } from '../utils/orderUtils';

export const Cart: React.FC = () => {
  const { items, total, removeItem } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cashapp' | 'zelle' | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [orderId] = useState(() => generateOrderId());
  const discountedTotal = total * 0.9; // 10% off

  const handlePaymentSuccess = () => {
    alert('Payment recorded! We will process your order shortly.');
  };

  if (!items.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
        <Link
          to="/services"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Browse Services
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.cartItemId}
              className="bg-white rounded-lg shadow-md p-6 mb-4"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeItem(item.cartItemId)}
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
              
              <div className="bg-gray-50 rounded p-4 mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Project Requirements:</h4>
                <p className="text-gray-600">{item.requirements}</p>
              </div>

              {item.rushDelivery && (
                <div className="flex items-center text-green-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Rush Delivery Selected</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between mb-2">
                <span>Order ID:</span>
                <span className="font-mono">{orderId}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {!showPayment ? (
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-medium text-green-900">Special Offer!</h4>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-4">
                    <p className="text-green-700 font-medium">Save 10% + Get 6-Hour Faster Delivery</p>
                    <p className="text-sm text-gray-600 mt-1">When paying with Cash App or Zelle:</p>
                    <div className="mt-2">
                      <p className="text-gray-600">Original total: ${total.toFixed(2)}</p>
                      <p className="text-green-700 font-bold">You pay: ${discountedTotal.toFixed(2)}</p>
                    </div>
                  </div>

                  <h3 className="font-medium text-gray-900 mb-4">Select Payment Method</h3>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => setPaymentMethod('cashapp')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border ${
                        paymentMethod === 'cashapp'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-500'
                      }`}
                    >
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 mr-2" />
                        <span>Cash App</span>
                      </div>
                      <span className="text-green-700">${discountedTotal.toFixed(2)}</span>
                    </button>
                    
                    <button
                      onClick={() => setPaymentMethod('zelle')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border ${
                        paymentMethod === 'zelle'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-500'
                      }`}
                    >
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2" />
                        <span>Zelle</span>
                      </div>
                      <span className="text-green-700">${discountedTotal.toFixed(2)}</span>
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-5 w-5 text-gray-600 mr-2" />
                    <h4 className="font-medium text-gray-900">Card Payment</h4>
                  </div>
                  
                  <button
                    onClick={() => setPaymentMethod('stripe')}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border ${
                      paymentMethod === 'stripe'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-500'
                    }`}
                  >
                    <span>Credit/Debit Card</span>
                    <span>${total.toFixed(2)}</span>
                  </button>
                </div>

                <button
                  onClick={() => paymentMethod && setShowPayment(true)}
                  disabled={!paymentMethod}
                  className={`w-full py-3 px-4 rounded-lg font-bold ${
                    paymentMethod
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Proceed to Payment
                </button>
              </div>
            ) : (
              <PaymentProcessor
                method={paymentMethod!}
                amount={total}
                orderId={orderId}
                onSuccess={handlePaymentSuccess}
                onCancel={() => setShowPayment(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;