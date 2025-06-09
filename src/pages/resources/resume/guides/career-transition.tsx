import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const CareerTransitionGuide: React.FC = () => {
  const topics = [
    {
      title: 'Assessment & Planning',
      content: `
        Planning Your Career Transition:

        1. Self-Assessment
        - Personal Analysis
          * Skills inventory
          * Professional interests
          * Core values
          * Work preferences
          * Strengths assessment
          * Career goals
          * Transferable skills
          * Growth opportunities

        2. Market Research
        - Industry Analysis
          * Target sectors
          * Growth trends
          * Required qualifications
          * Salary expectations
          * Entry barriers
          * Industry culture
          * Key players
          * Market demands

        3. Gap Analysis
        - Skill Requirements
          * Technical skills
          * Soft skills
          * Industry knowledge
          * Certifications
          * Experience level
          * Educational needs
          * Professional network
          * Industry exposure

        [Detailed assessment guidelines...]
      `,
      items: [
        'Skills Evaluation',
        'Market Research',
        'Gap Analysis',
        'Goal Setting',
        'Timeline Planning'
      ]
    },
    {
      title: 'Resume Transformation',
      content: `
        Adapting Your Resume:

        1. Content Restructuring
        - Strategic Presentation
          * Skills highlighting
          * Experience reframing
          * Achievement focus
          * Industry alignment
          * Value proposition
          * Career narrative
          * Keywords optimization
          * Competency showcase

        2. Format Adaptation
        - Document Structure
          * Summary positioning
          * Skills presentation
          * Experience layout
          * Education placement
          * Achievements display
          * Projects highlight
          * Certifications section
          * Additional information

        3. Language Optimization
        - Communication Strategy
          * Industry terminology
          * Action verbs
          * Achievement metrics
          * Technical language
          * Soft skills description
          * Leadership examples
          * Project outcomes
          * Impact statements

        [Complete transformation guide...]
      `,
      items: [
        'Content Strategy',
        'Format Adaptation',
        'Language Refinement',
        'Skills Translation',
        'Achievement Focus'
      ]
    },
    {
      title: 'Implementation Strategy',
      content: `
        Executing Your Transition:

        1. Networking Strategy
        - Connection Building
          * Industry contacts
          * Professional groups
          * Online presence
          * Event participation
          * Informational interviews
          * Mentor relationships
          * Alumni networks
          * Social media

        2. Application Process
        - Job Search
          * Target companies
          * Position research
          * Application tracking
          * Follow-up system
          * Interview preparation
          * Company research
          * Culture fit
          * Salary negotiation

        [Comprehensive strategy details...]
      `,
      items: [
        'Networking Plan',
        'Application Strategy',
        'Interview Preparation',
        'Timeline Management',
        'Progress Tracking'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Career Transition Guide"
      description="Comprehensive guide for successfully navigating career transitions and positioning yourself for new opportunities."
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
                Ready to Make Your Career Move?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance on your career transition journey.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default CareerTransitionGuide;
