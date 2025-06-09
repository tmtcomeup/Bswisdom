import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

interface Guide {
  title: string;
  description: string;
  path: string;
}

const MotionToSuppressGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Types of Evidence',
      items: [
        'Physical Evidence',
        'Witness Statements',
        'Electronic Evidence',
        'Documentary Evidence',
        'Derivative Evidence',
      ],
    },
    {
      title: 'Grounds for Suppression',
      items: [
        'Fourth Amendment Violations',
        'Miranda Violations',
        'Chain of Custody Issues',
        'Fruit of Poisonous Tree',
        'Statutory Violations',
      ],
    },
    {
      title: 'Procedural Requirements',
      items: [
        'Filing Deadlines',
        'Required Elements',
        'Supporting Documentation',
        'Hearing Preparation',
        'Preservation of Error',
      ],
    },
    {
      title: 'Case Law Examples',
      items: [
        'Supreme Court Precedents',
        'Circuit Court Decisions',
        'State Court Cases',
        'Recent Developments',
        'Key Holdings',
      ],
    },
  ];

  const practicalTips = [
    'Document all circumstances surrounding evidence collection',
    'Research applicable jurisdiction-specific standards',
    'Identify all potential constitutional violations',
    'Prepare detailed timeline of events',
    'Gather supporting affidavits and documentation',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Motion to Suppress Evidence: A Practical Guide</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive guide to understanding types of evidence, grounds for suppression, and crafting effective motions to suppress.
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
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {section.title === 'Types of Evidence' && (
                  <div>
                    <p>Criminal motions are formal requests made to the court during a criminal case. They can be filed by either the prosecution or the defense and aim to influence the proceedings, evidence, or outcome of the case. Here's a breakdown of common types:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Physical Evidence:</strong> Tangible items such as weapons, drugs, fingerprints, DNA samples, clothing, and documents. Suppression might be sought if physical evidence was seized during an illegal search.</li>
                      <li><strong>Witness Statements:</strong> Testimony from witnesses, including victims, bystanders, and law enforcement officers. Motions to suppress might target statements obtained in violation of Miranda rights or through coercive interrogation tactics.</li>
                      <li><strong>Electronic Evidence:</strong> Data stored or transmitted electronically, including emails, text messages, social media posts, browsing history, and location data. Suppression may be appropriate if electronic evidence was obtained without a valid warrant or through unlawful hacking.</li>
                      <li><strong>Documentary Evidence:</strong> Written or printed materials such as contracts, letters, ledgers, and medical records. Motions to suppress could challenge the admissibility of documents obtained through subpoena violations or without proper authentication.</li>
                      <li><strong>Derivative Evidence:</strong> Evidence that is discovered as a result of illegally obtained evidence. Under the "fruit of the poisonous tree" doctrine, derivative evidence may also be suppressed if it is too closely linked to the initial illegality.</li>
                    </ul>
                    <p>Each type of evidence has its own unique characteristics and legal considerations for suppression.</p>
                  </div>
                )}

                {section.title === 'Grounds for Suppression' && (
                  <div>
                    <p>A motion to suppress evidence must be based on valid legal grounds. Common grounds for suppression include:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Fourth Amendment Violations:</strong> The Fourth Amendment protects against unreasonable searches and seizures. Motions to suppress often argue that a search was conducted without a warrant, without probable cause, or exceeded the scope of a warrant.</li>
                      <li><strong>Miranda Violations:</strong> The Fifth Amendment requires that suspects be informed of their Miranda rights (right to remain silent, right to an attorney) before custodial interrogation. Statements obtained in violation of Miranda can be suppressed.</li>
                      <li><strong>Chain of Custody Issues:</strong> For physical evidence to be admissible, the prosecution must establish a proper chain of custody, showing that the evidence was properly handled and preserved. If the chain of custody is broken, the evidence may be suppressed.</li>
                      <li><strong>Fruit of the Poisonous Tree:</strong> This doctrine allows for the suppression of evidence that is derived from illegally obtained evidence. If the initial evidence was illegally obtained, any evidence that flows from it may also be inadmissible.</li>
                      <li><strong>Statutory Violations:</strong> Evidence may be suppressed if it was obtained in violation of specific statutes, such as wiretapping laws or regulations governing administrative searches.</li>
                    </ul>
                    <p>Successfully arguing for suppression requires demonstrating a clear violation of constitutional rights, procedural rules, or statutes.</p>
                  </div>
                )}

                {section.title === 'Procedural Requirements' && (
                  <div>
                    <p>Filing a motion to suppress evidence involves specific procedural steps that must be followed:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Filing Deadlines:</strong> Motions to suppress must be filed within specific timeframes, which vary by jurisdiction. Failure to meet deadlines can result in the motion being denied as untimely.</li>
                      <li><strong>Required Elements:</strong> Motions must contain specific elements, including a clear statement of the grounds for suppression, a detailed description of the evidence to be suppressed, and legal arguments supported by citations to relevant authorities.</li>
                      <li><strong>Supporting Documentation:</strong> Motions should be accompanied by supporting documentation, such as affidavits, police reports, search warrants, and transcripts of hearings or interrogations.</li>
                      <li><strong>Hearing Preparation:</strong> If the court grants a hearing on the motion, be prepared to present evidence and witnesses to support your claims. This may involve subpoenaing witnesses and preparing exhibits.</li>
                      <li><strong>Preservation of Error:</strong> To preserve the issue for appeal, it is crucial to make a clear record in the lower court, including objecting to the admission of evidence and renewing objections as necessary.</li>
                    </ul>
                    <p>Adhering to these procedural requirements is essential to ensure that the motion is properly considered by the court.</p>
                  </div>
                )}

                {section.title === 'Case Law Examples' && (
                  <div>
                    <p>Understanding case law is crucial for crafting effective motions to suppress. Here are examples of key areas:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Supreme Court Precedents:</strong> Landmark Supreme Court cases like <em>Mapp v. Ohio</em> (exclusionary rule), <em>Miranda v. Arizona</em> (Miranda rights), and <em>Terry v. Ohio</em> (stop and frisk) establish fundamental principles of suppression law.</li>
                      <li><strong>Circuit Court Decisions:</strong> Federal Circuit Courts of Appeals have issued numerous decisions applying suppression law to specific factual scenarios. Researching decisions from the relevant circuit is essential in federal cases.</li>
                      <li><strong>State Court Cases:</strong> State courts also interpret and apply suppression law, often providing additional protections under state constitutions. State case law is particularly important in state court criminal cases.</li>
                      <li><strong>Recent Developments:</strong> Suppression law is constantly evolving, particularly in areas like electronic surveillance and digital evidence. Staying updated on recent case law developments is crucial.</li>
                      <li><strong>Key Holdings:</strong> Focus on understanding the key holdings and legal reasoning in relevant cases. Motions to suppress should analogize favorably to cases where suppression was granted and distinguish cases where it was denied.</li>
                    </ul>
                    <p>Thorough case law research is essential for developing strong and persuasive motions to suppress.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Guides
              </h2>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: 'Evidence Handling Guide',
                    description: 'Learn proper evidence handling procedures',
                    path: '../guides/evidence-handling'
                  },
                  {
                    id: 2,
                    title: 'Constitutional Rights Guide',
                    description: 'Understanding constitutional protections',
                    path: '../guides/constitutional-rights'
                  }
                ].map((guide: Guide & { id: number }) => (
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
            <div className="bg-primary-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Professional Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your criminal motion writing needs.
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

export default MotionToSuppressGuidePage;