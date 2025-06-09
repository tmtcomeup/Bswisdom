import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Award } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

interface RelatedGuide extends Guide {
  description: string;
}

const ProfessionalResumesPage: React.FC = () => {
  const services = [
    {
      id: 'resume-writing',
      title: 'Resume Writing',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Professional resume writing and optimization services for career advancement.'
    },
    {
      id: 'resume-review',
      title: 'Resume Review & Analysis',
      icon: <Award className="w-6 h-6 text-primary-600" />,
      description: 'Expert review and enhancement of existing resumes for maximum impact.'
    }
  ];

  const topics = [
    {
      title: 'Resume Structure & Content',
      content: `
        Essential elements of a professional resume:

        1. Content Organization
        - Key Sections
          * Professional summary
          * Work experience
          * Skills and expertise
          * Educational background
          * Professional certifications
          * Technical competencies
          * Achievements
          * Professional affiliations

        2. Achievement Presentation
        - Impact Statements
          * Quantifiable results
          * Project outcomes
          * Leadership initiatives
          * Innovation examples
          * Performance metrics
          * Recognition earned
          * Revenue impact
          * Team accomplishments

        3. Skills Integration
        - Competency Highlights
          * Technical skills
          * Soft skills
          * Industry knowledge
          * Software proficiency
          * Language abilities
          * Leadership capabilities
          * Project management
          * Problem-solving

        [Detailed content guidelines...]
      `,
      items: [
        'Content Structure',
        'Achievement Focus',
        'Skills Integration',
        'Professional Format',
        'Impact Statements'
      ]
    },
    {
      title: 'ATS Optimization',
      content: `
        Strategies for ATS compatibility:

        1. Keyword Integration
        - Strategic Placement
          * Industry terms
          * Job requirements
          * Technical skills
          * Role-specific language
          * Action verbs
          * Certification names
          * Software proficiency
          * Industry standards

        2. Format Optimization
        - Technical Requirements
          * Clean formatting
          * Standard fonts
          * Clear headings
          * Proper spacing
          * File compatibility
          * Section clarity
          * Consistent styling
          * Document parsing

        [Comprehensive ATS guidelines...]
      `,
      items: [
        'Keyword Strategy',
        'Format Requirements',
        'Parsing Optimization',
        'File Standards',
        'Testing Methods'
      ]
    },
    {
      title: 'Professional Presentation',
      content: `
        Creating visually appealing and professional resumes:

        1. Visual Design
        - Layout Elements
          * Clean structure
          * White space usage
          * Section hierarchy
          * Consistent formatting
          * Font selection
          * Bullet styling
          * Margin balance
          * Visual flow

        2. Content Refinement
        - Writing Style
          * Clear language
          * Action verbs
          * Concise statements
          * Professional tone
          * Consistent tense
          * Achievement focus
          * Relevant details
          * Error-free content

        [Extended presentation guidelines...]
      `,
      items: [
        'Visual Design',
        'Content Quality',
        'Format Consistency',
        'Professional Style',
        'Error Prevention'
      ]
    }
  ];

  const relatedGuides = [
    {
      title: 'Industry-Specific Tips',
      description: 'Customize your resume for your industry',
      path: '../guides/industry-tips',
    },
    {
      title: 'ATS Optimization Guide',
      description: 'Make your resume ATS-friendly',
      path: '../guides/ats-optimization',
    },
  ];

  return (
    <ResourceLayout
      title="Professional Resume Writing"
      description="Expert guidance for creating powerful, ATS-optimized resumes that showcase your professional value and achievements."
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
            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Guides
              </h2>
              <div className="space-y-4">
                {relatedGuides.map((guide, index) => (
                  <Link
                    key={index}
                    to={guide.path}
                    className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="font-medium text-primary-600 mb-1">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Professional Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your professional resume.
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

export default ProfessionalResumesPage;