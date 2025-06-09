import React from 'react';
import AdminNav from '../components/AdminNav';
import AdminPaymentSettings from '../components/AdminPaymentSettings';

const AdminSettings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <AdminPaymentSettings />
          
          {/* Add more settings sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;