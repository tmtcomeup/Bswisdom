import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Shield } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';
import { Guide } from '../../../../types/content';

const EssentialClausesGuide: React.FC = () => {
  const topics = [
    {
      title: 'Core Contract Terms',
      content: `
        Essential contract terms that every agreement should include:

        1. Parties and Definitions
        - Proper Party Identification
          * Legal entity names
          * Business addresses
          * Registration numbers
          * Authorized representatives
          * Key term definitions
          * Role descriptions
          * Relationship structure
          * Authority verification

        2. Agreement Scope
        - Clear Scope Definition
          * Subject matter
          * Products/services covered
          * Territory limitations
          * Term duration
          * Renewal conditions
          * Exclusivity provisions
          * Performance metrics
          * Deliverables specification

        3. Consideration
        - Financial Terms
          * Payment amounts
          * Payment schedule
          * Currency specifications
          * Payment methods
          * Late payment terms
          * Interest charges
          * Price adjustments
          * Additional costs

        [Extended discussion of core terms continues...]
      `,
      items: [
        'Party Identification',
        'Scope Definition',
        'Consideration',
        'Term and Termination',
        'Performance Standards'
      ]
    },
    {
      title: 'Risk Management Clauses',
      content: `
        Critical provisions for managing contractual risks:

        1. Representations & Warranties
        - Essential Guarantees
          * Authority to contract
          * Compliance with laws
          * No conflicts
          * IP ownership/rights
          * Service standards
          * Product quality
          * Performance capability
          * Regulatory compliance

        2. Indemnification
        - Risk Allocation
          * Scope of indemnity
          * Covered losses
          * Defense obligations
          * Notice requirements
          * Settlement rights
          * Cooperation duties
          * Insurance requirements
          * Survival provisions

        3. Limitation of Liability
        - Liability Management
          * Damage caps
          * Excluded damages
          * Force majeure
          * Mitigation duties
          * Insurance coordination
          * Carve-outs
          * Time limitations
          * Claims procedures

        [Detailed risk management discussion continues...]
      `,
      items: [
        'Representations',
        'Warranties',
        'Indemnification',
        'Liability Limits',
        'Insurance Requirements'
      ]
    },
    {
      title: 'Operational Provisions',
      content: `
        Key operational terms for contract management:

        1. Notice Requirements
        - Communication Protocols
          * Required notifications
          * Delivery methods
          * Time requirements
          * Contact information
          * Receipt confirmation
          * Language requirements
          * Electronic notices
          * Emergency contacts

        2. Dispute Resolution
        - Conflict Management
          * Governing law
          * Jurisdiction
          * Mediation requirements
          * Arbitration provisions
          * Venue selection
          * Cost allocation
          * Time limitations
          * Remedies

        [Additional operational details...]
      `,
      items: [
        'Notice Procedures',
        'Dispute Resolution',
        'Amendment Process',
        'Assignment Rights',
        'Severability'
      ]
    }
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Essential Contract Clauses Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to understanding and implementing essential contract clauses that protect your interests and ensure enforceability.
          </p>
        </div>

        {/* Main content grid */}
        {/* ... standard layout structure ... */}
      </div>
    </ResourceLayout>
  );
};

export default EssentialClausesGuide;