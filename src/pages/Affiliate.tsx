import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, BarChart, ArrowRight, Award, Gift } from 'lucide-react';
import AffiliateTools from '../components/AffiliateTools';
import ReferralDashboard from '../components/ReferralDashboard';

const Affiliate: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Affiliate Program</h1>
            <p className="text-xl max-w-2xl">
              Earn generous commissions by referring clients to our professional services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Commission Structure */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-6">
            <DollarSign className="h-12 w-12 text-green-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry-Leading Commission Structure</h2>
              <p className="text-gray-600 mb-6">
                Our affiliate program offers some of the highest commission rates in the industry, with a tiered structure that rewards your success.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Standard</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">15%</p>
                  <p className="text-gray-600 text-sm">On all referred sales</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Premium</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">20%</p>
                  <p className="text-gray-600 text-sm">After $5,000 in referred sales</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-semibold">Elite</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">25%</p>
                  <p className="text-gray-600 text-sm">After $10,000 in referred sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Sign Up</h3>
              <p className="text-gray-600">
                Complete our simple registration process to join our affiliate program.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Share</h3>
              <p className="text-gray-600">
                Use your unique referral link or custom marketing materials to promote our services.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Earn</h3>
              <p className="text-gray-600">
                Receive commissions for every referred client who purchases our services.
              </p>
            </div>
          </div>
        </div>

        {/* Affiliate Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Affiliate Tools</h2>
          <AffiliateTools />
        </div>

        {/* Referral Dashboard */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Dashboard</h2>
          <ReferralDashboard />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our affiliate program today and start earning generous commissions by referring clients to our professional services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;