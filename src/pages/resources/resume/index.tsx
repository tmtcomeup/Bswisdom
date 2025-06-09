import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Layout, Search, CheckCircle, Edit3, Star } from 'lucide-react';

const ResumeIndex: React.FC = () => {
  const services = [
    {
      id: 'resume-writing',
      title: 'Resume Writing',
      icon: <Edit3 className="w-6 h-6 text-primary-600" />,
      description: 'Professional resume writing services tailored to your industry.',
    },
    {
      id: 'resume-templates',
      title: 'Resume Templates',
      icon: <Layout className="w-6 h-6 text-primary-600" />,
      description: 'Modern, ATS-friendly templates for various professions.',
    },
    {
      id: 'resume-review',
      title: 'Resume Review',
      icon: <CheckCircle className="w-6 h-6 text-primary-600" />,
      description: 'Expert review and optimization of your existing resume.',
    },
    {
      id: 'ats-optimization',
      title: 'ATS Optimization',
      icon: <Search className="w-6 h-6 text-primary-600" />,
      description: 'Optimize your resume for Applicant Tracking Systems.',
    },
  ];

  const guides = [
    {
      id: 'resume-formatting',
      title: 'Resume Formatting Guide',
      description: 'Best practices for professional resume formatting and layout.',
    },
    {
      id: 'keyword-optimization',
      title: 'Keyword Optimization',
      description: 'How to optimize your resume with relevant keywords.',
    },
    {
      id: 'cover-letter-writing',
      title: 'Cover Letter Writing',
      description: 'Craft compelling cover letters that get noticed.',
    },
    {
      id: 'industry-specific-tips',
      title: 'Industry-Specific Tips',
      description: 'Tailored advice for different industries and career levels.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">Resume Resources</h1>
        </div>
        <p className="text-lg text-gray-600">
          Professional resume writing and optimization resources to help you land your dream job.
        </p>
      </div>

      <div className="space-y-12 mt-8">
        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.id}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Guides Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                to={`guides/${guide.id}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600">
                    {guide.description}
                  </p>
                  <div className="text-primary-600 font-medium">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create a Winning Resume?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our resume experts are here to help you create a professional resume that stands out to employers and gets results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeIndex;