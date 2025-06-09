import React, { useState } from 'react';
import { DollarSign, Save } from 'lucide-react';
import usePaymentSettings from '../hooks/usePaymentSettings';

const AdminPaymentSettings: React.FC = () => {
  const { settings, updateSettings } = usePaymentSettings();
  const [formData, setFormData] = useState({
    cashAppUsername: settings.cashAppUsername || '',
    zelleEmail: settings.zelleEmail || '',
    zellePhone: settings.zellePhone || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Payment Settings</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cash App Username
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              value={formData.cashAppUsername}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                cashAppUsername: e.target.value
              }))}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="YourCashAppName"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zelle Email
          </label>
          <input
            type="email"
            value={formData.zelleEmail}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              zelleEmail: e.target.value
            }))}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zelle Phone Number
          </label>
          <input
            type="tel"
            value={formData.zellePhone}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              zellePhone: e.target.value
            }))}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="(123) 456-7890"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Save className="h-5 w-5 mr-2" />
          Save Payment Settings
        </button>
      </form>
    </div>
  );
};

export default AdminPaymentSettings;