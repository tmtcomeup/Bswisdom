import React from 'react';
import { Share2, DollarSign, Users, Award } from 'lucide-react';
import ReferralDashboard from '../components/ReferralDashboard';
import { ReferralStats } from '../types/referral';

const Referral: React.FC = () => {
  // Mock data - In production, this would come from an API
  const referralStats: ReferralStats = {
    totalEarnings: 1250.00,
    pendingEarnings: 299.99,
    totalReferrals: 15,
    activeReferrals: 3
  };

  const referralCode = "USER123"; // In production, this would be unique per user

  const handleShare = async () => {
    const referralUrl = `${window.location.origin}?ref=${referralCode}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join BSwisdom',
          text: 'Get professional services at great prices!',
          url: referralUrl
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(referralUrl);
      alert('Referral link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Referral Program</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Earn $100 for legal motion referrals and $4.99 for other services
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Referral Code</h2>
          <div className="flex items-center justify-center space-x-4">
            <code className="px-6 py-3 bg-gray-100 rounded-lg text-lg font-mono">
              {referralCode}
            </code>
            <button
              onClick={handleShare}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Earnings</h3>
            <p className="text-2xl font-bold text-blue-600">${referralStats.totalEarnings.toFixed(2)}</p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Active Referrals</h3>
            <p className="text-2xl font-bold text-green-600">{referralStats.activeReferrals}</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Referrals</h3>
            <p className="text-2xl font-bold text-purple-600">{referralStats.totalReferrals}</p>
          </div>
        </div>
      </div>

      <ReferralDashboard stats={referralStats} />

      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Share Your Code</h3>
            <p className="text-blue-100">Share your unique referral code with friends and colleagues</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">They Make a Purchase</h3>
            <p className="text-blue-100">When they use your code to make a purchase</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">You Earn Rewards</h3>
            <p className="text-blue-100">Earn up to $100 per referral depending on the service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;