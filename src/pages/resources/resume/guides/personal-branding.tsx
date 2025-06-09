import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const PersonalBrandingGuide: React.FC = () => {
  const topics = [
    {
      title: 'Brand Development',
      content: `
        Creating Your Personal Brand:

        1. Brand Foundation
        - Core Elements
          * Professional identity
          * Value proposition
          * Target audience
          * Career goals
          * Professional story
          * Core values
          * Industry niche
          * Unique strengths

        2. Brand Positioning
        - Market Differentiation
          * Competitive analysis
          * Industry positioning
          * Professional narrative
          * Expertise highlight
          * Thought leadership
          * Specialization focus
          * Market relevance
          * Career trajectory

        3. Brand Elements
        - Key Components
          * Professional image
          * Communication style
          * Online presence
          * Portfolio design
          * Visual identity
          * Brand voice
          * Content strategy
          * Network building

        [Detailed branding strategy...]
      `,
      items: [
        'Brand Foundation',
        'Market Positioning',
        'Identity Development',
        'Value Proposition',
        'Target Audience'
      ]
    },
    {
      title: 'Brand Communication',
      content: `
        Expressing Your Brand:

        1. Content Strategy
        - Communication Plan
          * Message development
          * Content themes
          * Professional tone
          * Industry insights
          * Thought leadership
          * Success stories
          * Expert perspectives
          * Engagement approach

        2. Platform Optimization
        - Channel Management
          * LinkedIn profile
          * Professional website
          * Portfolio showcase
          * Industry forums
          * Professional blogs
          * Speaking engagements
          * Publications
          * Network events

        3. Engagement Tactics
        - Connection Building
          * Network development
          * Community participation
          * Content sharing
          * Industry discussions
          * Collaborative projects
          * Mentorship roles
          * Knowledge sharing
          * Professional events

        [Complete communication guide...]
      `,
      items: [
        'Message Development',
        'Platform Strategy',
        'Content Creation',
        'Network Building',
        'Engagement Planning'
      ]
    },
    {
      title: 'Brand Management',
      content: `
        Maintaining Your Brand:

        1. Brand Consistency
        - Quality Control
          * Message alignment
          * Visual consistency
          * Professional standards
          * Content quality
          * Brand voice
          * Value delivery
          * Reputation management
          * Growth strategy

        2. Brand Evolution
        - Growth Management
          * Career progression
          * Skills development
          * Industry trends
          * Market adaptation
          * Professional growth
          * Network expansion
          * Influence building
          * Expertise deepening

        [Comprehensive management strategy...]
      `,
      items: [
        'Brand Consistency',
        'Quality Control',
        'Growth Strategy',
        'Reputation Management',
        'Brand Evolution'
      ]
    }
  ];

  return (
    <ResourceLayout
      title="Personal Branding Guide"
      description="Master the art of building and maintaining a strong professional personal brand."
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
                Elevate Your Personal Brand
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance on building a powerful professional brand.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default PersonalBrandingGuide;
