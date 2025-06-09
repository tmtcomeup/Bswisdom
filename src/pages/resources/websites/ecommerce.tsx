import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, ShoppingCart } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import { Guide } from '../../../types/content';

const EcommercePage: React.FC = () => {
  const services = [
    {
      id: 'store-setup',
      title: 'Online Store Setup',
      icon: <ShoppingCart className="w-6 h-6 text-primary-600" />,
      description: 'Complete guidance for e-commerce store development.'
    },
    {
      id: 'store-management',
      title: 'Store Management',
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      description: 'E-commerce operations and management solutions.'
    }
  ];

  const topics = [
    {
      title: 'Store Development',
      content: `
        E-commerce platform implementation:

        1. Platform Selection
        - E-commerce Solutions
          * Platform comparison
          * Feature requirements
          * Scalability needs
          * Integration capabilities
          * Cost analysis
          * Technical requirements
          * Support options
          * Security features

        2. Store Setup
        - Implementation Steps
          * Domain setup
          * SSL installation
          * Payment gateway
          * Product catalog
          * Category structure
          * User accounts
          * Shopping cart
          * Checkout process

        3. Store Features
        - Core Functions
          * Product management
          * Inventory control
          * Order processing
          * Customer accounts
          * Search functionality
          * Filters/sorting
          * Reviews/ratings
          * Wish lists

        [Extended setup guidelines...]
      `,
      items: [
        'Platform Selection',
        'Store Setup',
        'Core Features',
        'Payment Systems',
        'Security Measures'
      ]
    },
    {
      title: 'Store Operations',
      content: `
        E-commerce management:

        1. Order Management
        - Processing Systems
          * Order workflow
          * Payment processing
          * Shipping integration
          * Inventory updates
          * Customer communication
          * Return handling
          * Refund processing
          * Order tracking

        2. Store Optimization
        - Performance Tools
          * Analytics setup
          * Conversion tracking
          * Performance monitoring
          * SEO optimization
          * Mobile optimization
          * Load speed
          * User experience
          * A/B testing

        [Detailed operations guide...]
      `,
      items: [
        'Order Processing',
        'Store Management',
        'Analytics',
        'Optimization',
        'Customer Service'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <ShoppingCart className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">E-commerce Development</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive resources for developing and managing successful online stores.
          </p>
        </div>

        {/* Main content grid */}
        {/* ... standard layout structure ... */}
      </div>
    </ResourceLayout>
  );
};

export default EcommercePage;
