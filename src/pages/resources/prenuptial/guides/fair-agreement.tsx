import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

const FairAgreementGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Pre-Negotiation Steps',
      items: [
        'Financial Disclosure',
        'Identifying Goals',
        'Understanding Rights',
        'Legal Consultation',
        'Timeline Planning',
      ],
    },
    {
      title: 'Negotiation Process',
      items: [
        'Open Communication',
        'Fair Consideration',
        'Mutual Understanding',
        'Issue Resolution',
        'Professional Mediation',
      ],
    },
    {
      title: 'Avoiding Coercion',
      items: [
        'Adequate Time',
        'Independent Counsel',
        'Voluntary Participation',
        'Fair Terms',
        'Documentation',
      ],
    },
    {
      title: 'Ensuring Enforceability',
      items: [
        'Legal Requirements',
        'Full Disclosure',
        'Proper Execution',
        'Fair Process',
        'Clear Terms',
      ],
    },
  ];

  const practicalTips = [
    'Start discussions early',
    'Be transparent about assets',
    'Listen to concerns',
    'Document everything',
    'Seek legal guidance',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Handshake className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Negotiating a Fair Prenuptial Agreement</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            A step-by-step guide to negotiating fair and enforceable prenuptial agreements that protect both parties.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics */}
          <div className="lg:col-span-2 space-y-8">
            {topics.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                 {/* Placeholder Content - Replace with actual content */}
                 <p>This section will contain detailed information about {section.title}.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                 <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                 <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                 <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.</p>
                 <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                 {/* End Placeholder Content */}
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
            {/* Practical Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Negotiation Tips
              </h2>
              <ul className="space-y-3">
                {practicalTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Negotiation Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert guidance for your prenuptial agreement.
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

export default FairAgreementGuidePage;