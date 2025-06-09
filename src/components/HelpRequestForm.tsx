import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';

const HelpRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    story: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate API call
      console.log('Help request submitted:', formData);
      alert('Thank you for sharing your story. We review all requests and will contact you if selected.');
      setFormData({ name: '', email: '', phone: '', story: '' });
    } catch (error) {
      console.error('Error submitting help request:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="text-center mb-8">
        <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Our Help?</h2>
        <p className="text-gray-600">
          Share your story with us. Every day, we select one person who cannot afford our services
          to receive complimentary assistance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Story
          </label>
          <p className="text-sm text-gray-500 mb-2">
            Briefly tell us why you need assistance. A simple sentence is enough - we just want to understand your situation.
          </p>
          <textarea
            value={formData.story}
            onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          <Send className="h-5 w-5 mr-2" />
          Submit Request
        </button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-4">
        Your information will be kept confidential and only used to contact you if selected.
      </p>
    </div>
  );
};

export default HelpRequestForm;