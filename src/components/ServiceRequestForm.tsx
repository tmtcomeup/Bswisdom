import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { Service } from '../types/service';
import { sendNotificationEmails } from '../utils/emailUtils';

interface ServiceRequestFormProps {
  service: Service;
  onCancel: () => void;
}

const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({ service, onCancel }) => {
  const [requirements, setRequirements] = useState('');
  const [email, setEmail] = useState('');
  const [rushDelivery, setRushDelivery] = useState(false);
  const { addItem } = useCartContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendNotificationEmails({
        type: 'Service Request',
        userEmail: email,
        content: {
          'Service': service.title,
          'Requirements': requirements,
          'Rush Delivery': rushDelivery ? 'Yes' : 'No',
          'Price': rushDelivery && service.rush ? 
            service.price + service.rush.fee! : 
            service.price
        }
      });
      
      addItem({
        serviceId: service.id,
        title: service.title,
        price: rushDelivery && service.rush ? service.price + service.rush.fee! : service.price,
        requirements,
        rushDelivery
      });

      navigate('/cart');
    } catch (error) {
      console.error('Error submitting service request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label 
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label 
          htmlFor="requirements"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Project Requirements
        </label>
        <textarea
          id="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={6}
          placeholder="Please describe your requirements in detail"
          required
        />
      </div>

      {service.rush?.available && (
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rushDelivery"
            checked={rushDelivery}
            onChange={(e) => setRushDelivery(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="rushDelivery" className="ml-2 block text-sm text-gray-900">
            Rush Delivery ({service.rush.timeframe}) - Additional ${service.rush.fee?.toFixed(2)}
          </label>
        </div>
      )}

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        By proceeding, you agree to our{' '}
        <a href="/terms" className="text-blue-600 hover:underline">
          Terms & Conditions
        </a>
      </p>
    </form>
  );
};

export default ServiceRequestForm;