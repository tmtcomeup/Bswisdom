import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <div className="text-sm text-gray-600">Total Orders</div>
              <div className="text-2xl font-bold">123</div>
            </div>
            <div className="border p-4 rounded">
              <div className="text-sm text-gray-600">Revenue</div>
              <div className="text-2xl font-bold">$12,345</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;