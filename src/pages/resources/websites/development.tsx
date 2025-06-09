import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Code } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Code className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive web development guidance and resources.'
    },
    {
      id: 'technical-implementation',
      title: 'Technical Implementation',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'Technical solutions and development best practices.'
    }
  ];

  const topics = [
    {
      title: 'Development Fundamentals',
      content: `
        Core web development concepts:

        1. Front-End Development
        - Core Technologies
          * HTML5 structure
          * CSS3 styling
          * JavaScript/ES6+
          * Responsive design
          * UI frameworks
          * State management
          * Component design
          * Performance optimization

        2. Back-End Development
        - Server Technologies
          * Server architecture
          * Database design
          * API development
          * Authentication
          * Security measures
          * Data handling
          * Performance tuning
          * Scalability planning

        3. Development Tools
        - Essential Tools
          * Version control
          * Build systems
          * Testing frameworks
          * Debugging tools
          * Code editors
          * Package managers
          * Development servers
          * Deployment tools

        [Extended development principles...]
      `,
      items: [
        'Front-End Dev',
        'Back-End Dev',
        'Development Tools',
        'Best Practices',
        'Performance'
      ]
    },
    {
      title: 'Technical Implementation',
      content: `
        Implementation strategies:

        1. Architecture Planning
        - System Design
          * Platform selection
          * Technology stack
          * Database design
          * API structure
          * Security planning
          * Scalability design
          * Integration points
          * Deployment strategy

        2. Development Process
        - Implementation Steps
          * Code organization
          * Version control
          * Testing strategy
          * Documentation
          * Code review
          * Quality assurance
          * Performance testing
          * Deployment process

        [Detailed implementation guide...]
      `,
      items: [
        'Architecture',
        'Development Process',
        'Testing Strategy',
        'Deployment',
        'Maintenance'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Code className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Web Development</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive resources for website development and technical implementation.
          </p>
        </div>

        {/* Main content grid */}
        {/* ... standard layout structure ... */}
      </div>
    </ResourceLayout>
  );
};

export default WebDevelopmentPage;
