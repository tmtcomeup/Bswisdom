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
    description: 'Navigate the civil appeals process effectively',
    path: '/resources/legal/guides/civil-appeals',
  },
  {
    id: 'summary-judgment',
    title: 'Summary Judgment Guide',
    description: 'Master summary judgment motion practice',
    path: '/resources/legal/guides/summary-judgment',
  },
];

const CivilMotionsPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 'dispositive-motions',
      title: 'Dispositive Motions',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Expert assistance with summary judgment and dismissal motions.',
    },
    {
      id: 'discovery-motions',
      title: 'Discovery Motions',
      icon: <Scale className="w-6 h-6 text-primary-600" />,
      description: 'Strategic motions to compel discovery and protective orders.',
    }
  ];

  const topics = [
    {
      title: 'Common Civil Motions',
      items: [
        'Motion for Summary Judgment',
        'Motion to Dismiss',
        'Motion to Compel',
        'Motion for Default Judgment',
        'Motion for Preliminary Injunction',
      ],
    },
    {
      title: 'Motion Requirements',
      items: [
        'Statement of Facts',
        'Legal Standards',
        'Supporting Evidence',
        'Certificate of Conference',
        'Proposed Order',
      ],
    },
    {
      title: 'Strategic Considerations',
      items: [
        'Timing Strategy',
        'Burden of Proof',
        'Standard of Review',
        'Local Rules Compliance',
        'Cost-Benefit Analysis',
      ],
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Civil Motions</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Professional assistance with civil motion practice, from dispositive motions to discovery disputes. 
            Our experienced writers help craft persuasive arguments grounded in civil procedure and case law.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                
                {/* Detailed Content */}
                {section.title === 'Common Civil Motions' && (
                    <div>
                        <p>Civil motions are formal requests made to the court during a civil case, asking the judge to make a specific ruling or order. These motions can be filed by either the plaintiff or the defendant and are crucial for shaping the course of litigation. Here's a breakdown of common types:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Motion for Summary Judgment:</strong> This motion argues that there are no genuine disputes of material fact and that the moving party is entitled to judgment as a matter of law.  It essentially asks the court to decide the case (or a portion of it) without a full trial.</li>
                            <li><strong>Motion to Dismiss:</strong> This motion argues that the plaintiff's complaint fails to state a claim upon which relief can be granted, even if all the allegations are true.  It challenges the legal sufficiency of the lawsuit.</li>
                            <li><strong>Motion for Default Judgment:</strong> This motion is filed when a defendant fails to respond to the plaintiff's complaint within the required time.  It asks the court to enter a judgment in favor of the plaintiff due to the defendant's default.</li>
                            <li><strong>Motion for Preliminary Injunction:</strong> This motion requests the court to issue a temporary order requiring a party to do something or refrain from doing something while the case is pending.  It's used to prevent irreparable harm before a final decision is reached.</li>
                            <li><strong>Motion to Compel Discovery:</strong> This motion is filed when one party believes the other party is not cooperating with the discovery process (the exchange of information and evidence).  It asks the court to order the non-cooperative party to provide the requested information.</li>
                        </ul>
                        <p>The specific types of motions available and their requirements vary depending on the jurisdiction and the specific rules of civil procedure.</p>
                    </div>
                )}

                {section.title === 'Motion Requirements' && (
                    <div>
                        <p>A well-drafted civil motion typically includes the following components:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Legal Standards:</strong>  Clearly state the legal standard that governs the motion.  This involves citing relevant statutes, case law, and court rules.</li>
                            <li><strong>Statement of Facts:</strong>  Provide a concise and accurate summary of the relevant facts, supported by evidence.  Avoid including irrelevant or inflammatory information.</li>
                            <li><strong>Supporting Evidence:</strong>  Include all necessary evidence to support your motion, such as affidavits, declarations, documents, and exhibits.  Ensure that the evidence is admissible under the rules of evidence.</li>
                            <li><strong>Legal Arguments:</strong>  Present your legal arguments clearly and persuasively, explaining why the court should grant your motion based on the applicable law and the facts of the case.</li>
                            <li><strong>Prayer for Relief:</strong>  Specifically state the relief you are requesting from the court.  Be precise and unambiguous.</li>
                        </ul>
                        <p>Each component plays a crucial role in the overall effectiveness of the motion.</p>
                    </div>
                )}

                {section.title === 'Strategic Considerations' && (
                    <div>
                        <p>To maximize your chances of success, follow these best practices when drafting and filing civil motions:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Research and Preparation:</strong> Thoroughly research the applicable law and gather all necessary evidence before drafting your motion.</li>
                            <li><strong>Writing Techniques:</strong>  Use clear, concise, and persuasive language.  Organize your arguments logically and use headings and subheadings to improve readability.</li>
                            <li><strong>Citation Methods:</strong>  Cite all legal authorities accurately and consistently, using the proper citation format (e.g., Bluebook or ALWD).</li>
                            <li><strong>Document Organization:</strong>  Present your motion in a well-organized and professional manner.  Include a table of contents and table of authorities for longer motions.</li>
                            <li><strong>Filing Procedures:</strong>  Comply with all applicable rules of procedure, including deadlines, service requirements, and filing fees.</li>
                        </ul>
                        <p>Careful attention to detail and adherence to best practices can significantly increase the likelihood of a favorable outcome.</p>
                    </div>
                )}

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
                Need Professional Civil Motion Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your civil motion needs.
              </p>
              <Link
                to="/contact"
                className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
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

export default CivilMotionsPage;