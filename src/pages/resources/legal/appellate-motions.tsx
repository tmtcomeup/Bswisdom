import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

const relatedGuides: Guide[] = [
  {
    id: 'civil-appeals',
    title: 'Civil Appeals Guide',
    description: 'Master appellate motion strategies',
    path: '/resources/legal/guides/civil-appeals',
  },
  {
    id: 'federal-court',
    title: 'Federal Court Guide',
    description: 'Navigate federal appellate procedures',
    path: '/resources/legal/guides/federal-court',
  },
];

const AppellateMotionsPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 'appeal-briefs',
      title: 'Appeal Briefs',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive appellate brief writing services for all levels of appeals.',
    },
    {
      id: 'post-conviction',
      title: 'Post-Conviction Motions',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Expert assistance with post-conviction relief and habeas corpus petitions.',
    }
  ];

  const topics = [
    {
      title: 'Types of Appellate Motions',
      content: `
        Appellate motions serve various crucial functions in the appeals process. Here's a comprehensive overview:

        1. Motion for Extension of Time
        - Purpose: Requests additional time to file briefs or other documents
        - Requirements: Must show good cause for the extension
        - Strategic considerations: Balance need for time with court's efficiency concerns
        - Common scenarios: Complex cases, multiple parties, voluminous records

        2. Motion for Stay Pending Appeal
        - Prevents enforcement of lower court judgment during appeal
        - Must demonstrate:
          * Likelihood of success on appeal
          * Irreparable harm without stay
          * No substantial harm to other parties
          * Public interest considerations
        - Requires careful analysis of equitable factors
        
        3. Motion for Reconsideration
        - Used to ask court to reconsider ruling
        - Limited to specific grounds:
          * Clear error of law
          * New controlling authority
          * Previously unavailable evidence
        - Must be filed within strict timeframes

        4. Emergency Motions
        - Reserved for truly urgent matters
        - Requires immediate attention from the court
        - Higher standard for granting relief
        - Examples include:
          * Stay of imminent deportation
          * Prevention of irreparable harm
          * Time-sensitive constitutional issues

        [continued content with detailed explanations of each motion type...]
      `,
      items: [
        'Motion for Extension of Time',
        'Motion for Stay Pending Appeal',
        'Motion for Reconsideration',
        'Emergency Motions',
        'Extraordinary Writs',
      ],
    },
    {
      title: 'Procedural Requirements',
      content: `
        Success in appellate motion practice requires strict adherence to procedural rules:

        1. Filing Requirements
        - Proper format and styling
        - Page/word limitations
        - Required sections:
          * Title page
          * Table of contents
          * Table of authorities
          * Statement of relief sought
          * Supporting arguments
          * Conclusion
        
        2. Service Requirements
        - Electronic filing procedures
        - Service on all parties
        - Proof of service documentation
        - Timing considerations

        3. Supporting Documentation
        - Required appendices
        - Record excerpts
        - Affidavits and declarations
        - Relevant orders and opinions

        4. Technical Compliance
        - Font and margin requirements
        - Citation formats
        - Signature blocks
        - Certificate of compliance
        
        [continued content with detailed explanations of procedures...]
      `,
      items: [
        'Filing Requirements',
        'Service Requirements',
        'Supporting Documentation',
        'Technical Compliance',
        'Timing Considerations',
      ],
    },
    {
      title: 'Writing Effective Motions',
      content: `
        Crafting persuasive appellate motions requires attention to several key elements:

        1. Legal Analysis
        - Clear statement of applicable standard
        - Thorough research of controlling authority
        - Analysis of:
          * Statutory interpretation
          * Case law application
          * Policy considerations
        - Counter-arguments anticipation

        2. Factual Presentation
        - Accurate record citations
        - Chronological organization
        - Relevant background
        - Procedural history
        
        3. Argument Structure
        - Clear thesis statement
        - Logical progression
        - Supporting authority
        - Policy considerations
        
        4. Writing Style
        - Clear and concise language
        - Professional tone
        - Active voice
        - Proper formatting

        [continued content with detailed writing guidelines...]
      `,
      items: [
        'Legal Analysis',
        'Factual Presentation',
        'Argument Structure',
        'Writing Style',
        'Persuasive Techniques',
      ],
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header section */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Appellate Motions</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Master the art of appellate motion practice with our comprehensive guide. 
            Learn about different types of appellate motions, procedural requirements, 
            and effective writing strategies for successful appeals.
          </p>
        </div>

        {/* Main content sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            {/* Related Guides */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Guides
              </h2>
              <div className="space-y-4">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.id}
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
                Need Appellate Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your appellate motions.
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

export default AppellateMotionsPage;