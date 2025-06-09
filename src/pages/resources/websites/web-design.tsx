import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Palette } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

const WebDesignPage: React.FC = () => {
  const services = [
    {
      id: 'design-principles',
      title: 'Design Principles',
      icon: <Palette className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive guidance for effective website design.'
    },
    {
      id: 'user-experience',
      title: 'User Experience',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'UX/UI design principles and best practices.'
    }
  ];

  const topics = [
    {
      title: 'Design Fundamentals',
      content: `
        Core web design principles:

        1. Visual Design
        - Design Elements
          * Color theory
          * Typography
          * Layout principles
          * Visual hierarchy
          * Space utilization
          * Image selection
          * Design patterns
          * Brand consistency

        2. User Interface
        - UI Components
          * Navigation design
          * Button styles
          * Form elements
          * Content blocks
          * Interactive elements
          * Mobile interface
          * Responsive design
          * Accessibility

        3. User Experience
        - UX Principles
          * Information architecture
          * User flow
          * Content strategy
          * Interaction design
          * Usability
          * Navigation paths
          * Page hierarchy
          * Call-to-actions

        [Extended design principles...]
      `,
      items: [
        'Visual Design',
        'UI Elements',
        'UX Principles',
        'Layout Design',
        'Responsive Design'
      ]
    },
    {
      title: 'Design Implementation',
      content: `
        Website design process:

        1. Design Process
        - Implementation Steps
          * Requirements gathering
          * Wireframing
          * Mockup creation
          * Prototype development
          * Design system
          * Component library
          * Style guides
          * Design testing

        2. Design Tools
        - Software Solutions
          * Design software
          * Prototyping tools
          * Collaboration platforms
          * Version control
          * Asset management
          * Code generators
          * Testing tools
          * Documentation

        [Detailed implementation guide...]
      `,
      items: [
        'Design Process',
        'Tool Selection',
        'Implementation',
        'Testing',
        'Documentation'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Palette className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Web Design</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive resources for creating visually appealing and user-friendly websites.
          </p>
        </div>

        {/* Main content grid */}
        {/* ... standard layout structure ... */}
      </div>
    </ResourceLayout>
  );
};

export default WebDesignPage;
