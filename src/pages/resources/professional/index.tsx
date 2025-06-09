import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Award, Target, MessageSquare, BarChart3 } from 'lucide-react';

const ProfessionalIndex: React.FC = () => {
  const services = [
    {
      id: 'career-coaching',
      title: 'Career Coaching',
      icon: <Target className="w-6 h-6 text-primary-600" />,
      description: 'Personalized guidance for career advancement and goal achievement.',
    },
    {
      id: 'leadership-development',
      title: 'Leadership Development',
      icon: <Users className="w-6 h-6 text-primary-600" />,
      description: 'Build essential leadership skills and management capabilities.',
    },
    {
      id: 'skill-assessment',
      title: 'Skill Assessment',
      icon: <BarChart3 className="w-6 h-6 text-primary-600" />,
      description: 'Evaluate your professional skills and identify growth opportunities.',
    },
    {
      id: 'networking-strategies',
      title: 'Networking Strategies',
      icon: <MessageSquare className="w-6 h-6 text-primary-600" />,
      description: 'Master professional networking and relationship building techniques.',
    },
  ];

  const guides = [
    {
      id: 'career-planning',
      title: 'Career Planning Guide',
      description: 'Create a strategic roadmap for your professional future.',
    },
    {
      id: 'interview-preparation',
      title: 'Interview Preparation',
      description: 'Master the art of job interviews and salary negotiations.',
    },
    {
      id: 'professional-branding',
      title: 'Professional Branding',
      description: 'Build a strong personal brand and online presence.',
    },
    {
      id: 'workplace-communication',
      title: 'Workplace Communication',
      description: 'Enhance your communication skills in professional settings.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-8 h-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">Professional Development</h1>
        </div>
        <p className="text-lg text-gray-600">
          Comprehensive resources for career advancement and professional growth.
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
            <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our professional development experts are here to help you achieve your career goals and unlock your full potential.
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

export default ProfessionalIndex;