import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Layout } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';
import { Guide } from '../../../../types/content';

const PlatformSelectionGuide: React.FC = () => {
  const topics = [
    {
      title: 'Platform Types',
      content: `
        Website platform comparison:

        1. CMS Platforms
        - Content Management
          * WordPress
          * Drupal
          * Joomla
          * MODX
          * ExpressionEngine
          * Craft CMS
          * Ghost
          * Strapi

        2. Website Builders
        - Visual Builders
          * Wix
          * Squarespace
          * Webflow
          * Weebly
          * Shopify
          * BigCommerce
          * Elementor
          * Divi Builder

        3. Custom Development
        - Framework Options
          * React
          * Angular
          * Vue.js
          * Next.js
          * Gatsby
          * Laravel
          * Django
          * Ruby on Rails

        [Extended platform comparison...]
      `,
      items: [
        'CMS Options',
        'Website Builders',
        'Development Frameworks',
        'Enterprise Solutions',
        'E-commerce Platforms'
      ]
    },
    {
      title: 'Selection Criteria',
      content: `
        Platform evaluation factors:

        1. Technical Requirements
        - Assessment Criteria
          * Hosting needs
          * Performance requirements
          * Scalability options
          * Security features
          * Integration capabilities
          * Mobile support
          * SEO capabilities
          * Maintenance needs

        2. Business Factors
        - Business Considerations
          * Budget constraints
          * Timeline requirements
          * Team expertise
          * Growth plans
          * Feature needs
          * Support requirements
          * Training needs
          * Total cost of ownership

        [Detailed selection guidelines...]
      `,
      items: [
        'Technical Requirements',
        'Business Needs',
        'Cost Analysis',
        'Support Options',
        'Future Growth'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Layout className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Platform Selection Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to selecting the right platform for your website development needs.
          </p>
        </div>

        {/* Main content grid */}
        {/* ... standard layout structure ... */}
      </div>
    </ResourceLayout>
  );
};

export default PlatformSelectionGuide;
