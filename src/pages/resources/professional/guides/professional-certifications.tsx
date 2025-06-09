import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const ProfessionalCertificationsGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Business Certifications',
      items: [
        'Project Management (PMP)',
        'Business Analysis (CBAP)',
        'Six Sigma Certifications',
        'Agile Certifications',
        'Risk Management (RMP)',
      ],
    },
    {
      title: 'Technology Certifications',
      items: [
        'Cloud Computing (AWS/Azure)',
        'Cybersecurity (CISSP)',
        'IT Service (ITIL)',
        'Network Security (CCNA)',
        'Software Development',
      ],
    },
    {
      title: 'Professional Development',
      items: [
        'Human Resources (PHR)',
        'Financial Planning (CFP)',
        'Supply Chain (CSCP)',
        'Quality Management',
        'Leadership Development',
      ],
    },
    {
      title: 'Industry-Specific',
      items: [
        'Healthcare Management',
        'Marketing (Digital)',
        'Data Analytics',
        'Environmental Management',
        'Construction Management',
      ],
    },
  ];

  const certificationTips = [
    'Research certification requirements',
    'Create a study schedule',
    'Join study groups',
    'Practice with sample tests',
    'Maintain certification credits',
  ];

  return (
    <ResourceLayout
      title="Professional Certifications Guide"
      description="Comprehensive guide to professional certifications and credentials."
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
            {topics.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certification Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Certification Tips
              </h2>
              <ul className="space-y-3">
                {certificationTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <Award className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Get Certified?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance on choosing and preparing for certifications.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default ProfessionalCertificationsGuidePage;
