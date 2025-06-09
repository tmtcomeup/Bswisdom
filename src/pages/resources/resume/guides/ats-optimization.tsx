import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Search } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const ATSOptimizationGuide: React.FC = () => {
  const topics = [
    {
      title: 'ATS Fundamentals',
      content: `
        Understanding Applicant Tracking Systems:

        1. ATS Functionality
        - System Basics
          * Parsing algorithms
          * Keyword matching
          * Resume scoring
          * Ranking systems
          * Filter criteria
          * Database storage
          * Search capabilities
          * Candidate tracking

        2. Common ATS Platforms
        - Popular Systems
          * Workday
          * Taleo
          * iCIMS
          * Greenhouse
          * Jobvite
          * Lever
          * SAP SuccessFactors
          * BambooHR

        3. Processing Methods
        - System Operations
          * Text extraction
          * Format conversion
          * Data categorization
          * Field mapping
          * Information indexing
          * Profile creation
          * Search indexing
          * Match scoring

        [Extended ATS overview...]
      `,
      items: [
        'ATS Basics',
        'System Types',
        'Processing Methods',
        'Scoring Criteria',
        'Database Functions'
      ]
    },
    {
      title: 'Optimization Techniques',
      content: `
        Strategies for ATS compatibility:

        1. Keyword Optimization
        - Strategic Placement
          * Job description analysis
          * Industry terminology
          * Technical skills
          * Required qualifications
          * Soft skills
          * Certifications
          * Tools and software
          * Achievement metrics

        2. Format Requirements
        - Document Structure
          * Clean formatting
          * Standard fonts
          * Simple layouts
          * Clear sections
          * Proper headings
          * Consistent spacing
          * File types
          * Character usage

        3. Content Organization
        - Section Structure
          * Contact information
          * Professional summary
          * Work experience
          * Education
          * Skills section
          * Certifications
          * Achievements
          * Additional information

        [Detailed optimization strategies...]
      `,
      items: [
        'Keyword Strategy',
        'Format Guidelines',
        'Content Structure',
        'Section Organization',
        'Testing Methods'
      ]
    },
    {
      title: 'Testing & Verification',
      content: `
        Ensuring ATS compatibility:

        1. Testing Methods
        - Verification Steps
          * Parser testing
          * Format checking
          * Keyword validation
          * Layout verification
          * Content extraction
          * Field mapping
          * Data accuracy
          * System compatibility

        2. Common Issues
        - Problem Areas
          * Complex formatting
          * Graphics usage
          * Tables and columns
          * Header/footer text
          * Special characters
          * PDF conversion
          * Font problems
          * Layout issues

        [Comprehensive testing guidelines...]
      `,
      items: [
        'Testing Procedures',
        'Issue Resolution',
        'Verification Steps',
        'Quality Control',
        'System Checks'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="ATS Optimization Guide"
      description="Comprehensive guide to optimizing your resume for Applicant Tracking Systems and maximizing visibility with employers."
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
                <div className="prose max-w-none mb-6">
                  {section.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>
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
            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need ATS Optimization Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help optimizing your resume for ATS.
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

export default ATSOptimizationGuide;