import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Shield, Search, Gavel } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const CriminalAnalysisPage: React.FC = () => {
  const sections = [
    {
      title: 'Evidence Analysis',
      icon: <Search className="w-6 h-6 text-primary-600" />,
      items: [
        'Physical Evidence Review',
        'Forensic Analysis',
        'Chain of Custody Check',
        'Scientific Testing Review',
        'Documentation Assessment'
      ]
    },
    {
      title: 'Defense Strategy',
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      items: [
        'Defense Theory Development',
        'Evidence Challenge Plan',
        'Constitutional Issues',
        'Plea Negotiation Strategy',
        'Trial Preparation Plan'
      ]
    },
    {
      title: 'Procedural Review',
      icon: <Gavel className="w-6 h-6 text-primary-600" />,
      items: [
        'Arrest Procedure Analysis',
        'Search & Seizure Review',
        'Miranda Rights Compliance',
        'Due Process Evaluation',
        'Procedural Timeline Check'
      ]
    },
    {
      title: 'Case Documentation',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      items: [
        'Evidence Documentation',
        'Witness Statement Analysis',
        'Expert Opinion Review',
        'Investigation Reports',
        'Legal Research Records'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Criminal Case Analysis"
      description="Expert criminal case analysis services providing comprehensive evaluation of evidence, procedural issues, and strategic considerations for effective defense planning."
    >
      <div className="space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-900 ml-3">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-lg p-6 mt-8">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Expert Criminal Case Analysis?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Get comprehensive support for your criminal case review from our experienced defense team.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default CriminalAnalysisPage;