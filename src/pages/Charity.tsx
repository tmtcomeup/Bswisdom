import React from 'react';
import { Heart, Users, ArrowRight, FileText } from 'lucide-react';

const Charity: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">No One Left Behind</h1>
            <p className="text-xl max-w-2xl">
              Help us empower those in need with access to professional services and support
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tax Deduction Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 mb-16 text-white">
          <div className="flex items-start space-x-6">
            <FileText className="h-12 w-12 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">100% Tax-Deductible Donations</h2>
              <p className="text-lg text-blue-100 mb-4">
                Every donation to BSwisdom.org is fully tax-deductible. You'll receive an immediate,
                IRS-compliant receipt for your tax records.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  <span>Instant tax receipt generation</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  <span>Download or email receipt options</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  <span>IRS-compliant documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day, we help one person who cannot afford our services, with the goal of expanding our reach as our community grows.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">365</h3>
            <p className="text-gray-600">People helped annually through our program</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Of donations go directly to helping those in need</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Growing</h3>
            <p className="text-gray-600">Impact as our community expands</p>
          </div>
        </div>

        {/* Donation CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-16">
          <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Make a Difference Today</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your donation helps us provide services to those who need them most. 
            Our donation system is currently being configured. Please check back soon.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
            <Heart className="h-5 w-5 mr-2" />
            Donate Now (Coming Soon)
          </button>
        </div>

        {/* Help Request Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Our Help?</h2>
            <p className="text-gray-600">
              Share your story with us. Every day, we select one person who cannot afford our services
              to receive complimentary assistance.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Story
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Charity;