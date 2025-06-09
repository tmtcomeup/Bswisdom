import React from 'react';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const ReferralDashboard: React.FC = () => {
  // Mock data for demonstration
  const stats = [
    { label: 'Total Earnings', value: '$0.00', icon: <DollarSign className="h-6 w-6 text-green-600" /> },
    { label: 'Referrals', value: '0', icon: <Users className="h-6 w-6 text-blue-600" /> },
    { label: 'Conversions', value: '0', icon: <ShoppingCart className="h-6 w-6 text-purple-600" /> },
    { label: 'Conversion Rate', value: '0%', icon: <TrendingUp className="h-6 w-6 text-orange-600" /> },
  ];

  // Mock referral history
  const referralHistory = [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Affiliate Dashboard</h3>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              {stat.icon}
              <span className="text-sm text-gray-500 ml-2">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Referral History */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Recent Referrals</h4>
        
        {referralHistory.length > 0 ? (
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referral</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {referralHistory.map((referral, index) => (
                  <tr key={index}>
                    {/* Referral data would go here */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No referrals yet. Start sharing your affiliate link to earn commissions!</p>
          </div>
        )}
      </div>
      
      {/* Payout Information */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Payout Information</h4>
        <p className="text-gray-600 mb-4">
          Commissions are paid monthly for all earnings over $50. Please add your payment details in your account settings.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Update Payment Details
        </button>
      </div>
    </div>
  );
};

export default ReferralDashboard;