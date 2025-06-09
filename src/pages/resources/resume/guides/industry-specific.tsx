import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const IndustrySpecificGuide: React.FC = () => {
  const topics = [
    {
      title: 'Industry Analysis',
      content: `
        Understanding Industry Requirements:

        1. Sector Research
        - Key Components
          * Industry trends
          * Market demands
          * Required skills
          * Certification needs
          * Technical requirements
          * Industry standards
          * Career paths
          * Growth opportunities

        2. Company Research
        - Organization Analysis
          * Company values
          * Corporate culture
          * Work environment
          * Team structures
          * Project types
          * Technology stack
          * Industry position
          * Growth trajectory

        3. Role Analysis
        - Position Requirements
          * Job responsibilities
          * Required experience
          * Technical skills
          * Soft skills
          * Leadership needs
          * Project scope
          * Performance metrics
          * Success factors

        [Detailed industry insights...]
      `,
      items: [
        'Market Research',
        'Company Analysis',
        'Role Requirements',
        'Industry Standards',
        'Growth Trajectories'
      ]
    },
    {
      title: 'Resume Customization',
      content: `
        Industry-Specific Adaptations:

        1. Content Focus
        - Key Elements
          * Industry terminology
          * Technical expertise
          * Relevant projects
          * Specific achievements
          * Tools and technologies
          * Industry certifications
          * Professional affiliations
          * Specialized training

        2. Format Selection
        - Industry Standards
          * Document structure
          * Section priorities
          * Length requirements
          * Design elements
          * Visual hierarchy
          * Professional style
          * Branding approach
          * Portfolio inclusion

        3. Language Optimization
        - Communication Strategy
          * Industry jargon
          * Technical terms
          * Achievement metrics
          * Project impacts
          * Team contributions
          * Leadership roles
          * Client interactions
          * Innovation highlights

        [Complete customization guide...]
      `,
      items: [
        'Content Adaptation',
        'Format Selection',
        'Language Usage',
        'Achievement Focus',
        'Portfolio Integration'
      ]
    },
    {
      title: 'Industry Best Practices',
      content: `
        Sector-Specific Strategies:

        1. Professional Standards
        - Industry Requirements
          * Document formatting
          * Content presentation
          * Skills highlighting
          * Experience focus
          * Achievement metrics
          * Project showcasing
          * Technical expertise
          * Industry alignment

        2. Competitive Edge
        - Standing Out
          * Unique value proposition
          * Industry innovations
          * Project successes
          * Leadership examples
          * Problem-solving
          * Industry impact
          * Professional growth
          * Market awareness

        [Comprehensive best practices...]
      `,
      items: [
        'Professional Standards',
        'Competitive Positioning',
        'Value Proposition',
        'Industry Alignment',
        'Success Metrics'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Industry-Specific Resume Guide"
      description="Learn how to tailor your resume for specific industries and maximize your impact in your target sector."
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
                Need Industry-Specific Guidance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help tailoring your resume for your target industry.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default IndustrySpecificGuide;
