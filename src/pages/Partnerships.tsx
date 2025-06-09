import React from 'react';
import { Handshake, Users, Award, ArrowRight } from 'lucide-react';
import PartnershipForm from '../components/PartnershipForm';

const Partnerships: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Join Our Expert Network</h1>
            <p className="text-xl max-w-2xl">
              Partner with us to deliver exceptional professional services and grow your career
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Partner With Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Partner With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expand Your Reach</h3>
              <p className="text-gray-600">
                Access our growing client base and increase your professional visibility.
              </p>
              <ul className="mt-4 space-y-2">
                {['Global client exposure', 'Marketing support', 'Client matching'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Compensation</h3>
              <p className="text-gray-600">
                Earn industry-leading rates for your expertise and professional services.
              </p>
              <ul className="mt-4 space-y-2">
                {['Transparent payment structure', 'On-time payments', 'Performance bonuses'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Handshake className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Collaboration</h3>
              <p className="text-gray-600">
                Work on projects that match your expertise and availability.
              </p>
              <ul className="mt-4 space-y-2">
                {['Choose your workload', 'Remote collaboration', 'Project selection'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Academic Writing', 'Legal Services', 'Business Planning',
              'Website Development', 'Content Creation', 'Financial Analysis',
              'Technical Writing', 'Research & Analysis', 'Case Review',
              'Contract Drafting', 'Editing & Proofreading', 'Course Development'
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                <p className="font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Partnership Process</h2>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-blue-200 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'Apply', description: 'Submit your application with your expertise and experience.' },
                { title: 'Interview', description: 'Discuss your skills and how you can contribute to our network.' },
                { title: 'Onboarding', description: 'Complete our onboarding process and training materials.' },
                { title: 'Collaborate', description: 'Start working on projects that match your expertise.' },
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 relative z-10">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Apply to Join Our Network</h2>
          <PartnershipForm />
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'What qualifications do I need to join?',
                answer: 'We look for professionals with relevant degrees, certifications, or demonstrated expertise in their field. Typically, we require at least 3-5 years of professional experience.'
              },
              {
                question: 'How much work can I expect?',
                answer: 'The workload varies based on your availability, expertise, and client demand. You can set your own availability and accept only the projects that interest you.'
              },
              {
                question: 'How does payment work?',
                answer: 'We offer competitive rates based on project complexity and your expertise level. Payments are processed bi-weekly for all completed and approved work.'
              },
              {
                question: 'Can I work remotely?',
                answer: 'Yes, our expert network is fully remote. You can collaborate from anywhere in the world as long as you have reliable internet access.'
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;