import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, BookOpen } from 'lucide-react';
import ResourceLayout from '../../../../components/ResourceLayout';

interface Guide {
  title: string;
  description: string;
  path: string;
}

const CivilAppealsGuidePage: React.FC = () => {
  const topics = [
    {
      title: 'Standards of Review',
      items: [
        'De Novo Review',
        'Abuse of Discretion',
        'Clear Error',
        'Substantial Evidence',
        'Mixed Questions of Law/Fact',
      ],
    },
    {
      title: 'Identifying Appealable Issues',
      items: [
        'Final Judgments',
        'Interlocutory Orders',
        'Post-Trial Rulings',
        'Jurisdictional Questions',
        'Preservation of Error',
      ],
    },
    {
      title: 'Drafting Persuasive Briefs',
      items: [
        'Issue Framing',
        'Statement of Facts',
        'Legal Arguments',
        'Citation Format',
        'Reply Strategy',
      ],
    },
    {
      title: 'Oral Argument Tips',
      items: [
        'Preparation Techniques',
        'Opening Statement',
        'Answering Questions',
        'Time Management',
        'Rebuttal Points',
      ],
    },
  ];

  const strategicConsiderations = [
    'Research applicable standard of review thoroughly',
    'Focus on strongest appealable issues',
    'Build compelling narrative in fact section',
    'Address opposing arguments preemptively',
    'Consider policy implications',
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Scale className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Winning Strategies for Civil Appeals</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Master the art of civil appeals with comprehensive guidance on standards of review, issue identification, brief writing, and oral advocacy.
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
                {/* Detailed Content */}
                {section.title === 'Standards of Review' && (
                  <div>
                    <p>Standards of review are the legal yardsticks appellate courts use to assess lower court decisions. Understanding these standards is paramount because they dictate how much deference the appellate court will give to the lower court's ruling. The primary standards in civil appeals include:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>De Novo Review:</strong> This standard applies to questions of law. The appellate court reviews the legal issue "anew," meaning it gives no deference to the lower court's legal conclusions and makes its own independent determination. Examples of issues reviewed de novo include interpretations of statutes, contracts, and constitutional provisions.</li>
                      <li><strong>Abuse of Discretion:</strong> This standard applies to discretionary decisions made by the trial court, such as evidentiary rulings, decisions regarding discovery disputes, and scheduling matters. The appellate court will only reverse if the lower court's decision was clearly unreasonable, arbitrary, or capricious, meaning it fell outside the bounds of sound judgment.</li>
                      <li><strong>Clear Error:</strong> This standard, sometimes also referred to as "clearly erroneous" or "manifest error," applies to findings of fact made by a trial judge (in non-jury trials). The appellate court will overturn factual findings only if it is left with the definite and firm conviction that a mistake has been committed by the trial court, even when giving deference to the trial court's factual findings.</li>
                      <li><strong>Substantial Evidence:</strong> This standard is used in some jurisdictions for reviewing factual findings made by administrative agencies or juries. It requires that there be enough evidence in the record that a reasonable person could reach the same conclusion as the fact-finder.</li>
                      <li><strong>Mixed Questions of Law and Fact:</strong> These involve applying legal standards to a specific set of facts. The standard of review for mixed questions can vary depending on whether the legal or factual aspects predominate.</li>
                    </ul>
                    <p>The standard of review is not just a technicality; it fundamentally shapes the arguments you must make on appeal.  For example, if the standard is de novo, you can argue legal issues afresh. However, under the more deferential abuse of discretion or clear error standards, the challenge is much higher, requiring you to demonstrate that the lower court's decision was demonstrably wrong under the applicable deferential standard.</p>
                  </div>
                )}

                {section.title === 'Identifying Appealable Issues' && (
                  <div>
                    <p>Not every unfavorable ruling in a lower court is grounds for a successful appeal. Identifying strong appealable issues is crucial for a viable appeal. Key considerations include:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Final Judgments:</strong>  Generally, appeals are only allowed from "final judgments" that resolve all issues in the case. Interlocutory or non-final orders are typically not immediately appealable, with some exceptions.</li>
                      <li><strong>Interlocutory Orders:</strong>  Certain interlocutory orders (orders issued during the course of litigation but before final judgment) are appealable as a matter of right or by permission of the appellate court. Examples include orders granting or denying injunctions or orders certified for interlocutory appeal by the trial court.</li>
                      <li><strong>Post-Trial Rulings:</strong>  Orders issued after a trial, such as rulings on motions for new trial or motions to alter or amend a judgment, are typically appealable.</li>
                      <li><strong>Jurisdictional Questions:</strong>  Challenges to the lower court's jurisdiction are always appealable. If the lower court lacked jurisdiction over the parties or the subject matter, the appellate court can reverse the judgment.</li>
                      <li><strong>Preservation of Error:</strong>  To be appealable, an error must generally have been properly "preserved" in the lower court. This usually means that a timely objection must have been made to the error at the trial level. Failure to preserve error can waive the right to raise the issue on appeal.</li>
                    </ul>
                    <p>A careful review of the record and the law is essential to identify strong, appealable issues that warrant appellate review.</p>
                  </div>
                )}

                {section.title === 'Drafting Persuasive Briefs' && (
                  <div>
                    <p>The appellate brief is the cornerstone of your presentation to the appellate court. A persuasive brief is clear, concise, and compelling. Key elements of effective brief writing include:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Issue Framing:</strong> Frame the legal issues clearly and persuasively in the "Questions Presented" section of your brief.  These questions should be concise, focused, and framed to highlight the errors you are challenging.</li>
                      <li><strong>Statement of Facts:</strong>  Present a compelling and accurate statement of the relevant facts, drawing directly from the appellate record.  The fact section should tell a persuasive story that supports your client's case.</li>
                      <li><strong>Legal Arguments:</strong>  Develop well-reasoned legal arguments that apply the relevant law to the facts of your case.  Organize your arguments logically, using headings and subheadings.  Support your arguments with citations to relevant legal authorities.</li>
                      <li><strong>Citation Format:</strong>  Ensure that all citations to legal authorities and the record conform to the court's citation rules (e.g., Bluebook or ALWD).  Accurate citations are essential for credibility.</li>
                      <li><strong>Reply Strategy:</strong>  Anticipate your opponent's arguments and address them preemptively in your opening brief.  In your reply brief, focus on rebutting your opponent's arguments and reinforcing your key points.</li>
                    </ul>
                    <p>Effective brief writing is a skill that requires practice, attention to detail, and a deep understanding of legal argumentation.</p>
                  </div>
                )}

                 {section.title === 'Oral Argument Tips' && (
                    <div>
                        <p>Oral argument provides an opportunity to directly address the appellate court and answer the judges' questions. Effective oral advocacy requires preparation and skill:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Preparation Techniques:</strong>  Thoroughly prepare for oral argument by mastering the record, key cases, and the legal issues.  Conduct moot courts (practice arguments) to refine your presentation and anticipate questions.</li>
                            <li><strong>Opening Statement:</strong>  Start with a clear and concise opening statement that frames the key issues and tells the court what you want them to do.</li>
                            <li><strong>Answering Questions:</strong>  Be prepared to answer questions directly and candidly.  Listen carefully to the judges' questions and address them specifically and thoughtfully. It is okay to concede points that are weak and focus on your strengths.</li>
                            <li><strong>Time Management:</strong>  Appellate arguments are strictly timed.  Budget your time effectively to ensure you address all key issues within the allotted time.  Be prepared to be cut off by the court if you exceed your time.</li>
                            <li><strong>Rebuttal Points:</strong>  Incorporate rebuttal arguments into your presentation, anticipating and addressing your opponent's likely points. Rebuttal time is precious – use it to reinforce your strongest arguments and directly counter the most critical points raised by your opponent.</li>
                        </ul>
                        <p>Oral argument is a dynamic and challenging aspect of appellate practice, demanding poise, preparation, and the ability to think quickly on your feet.</p>
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
            {/* Strategic Considerations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Strategic Considerations
              </h2>
              <ul className="space-y-3">
                {strategicConsiderations.map((strategy, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-primary-50 rounded-xl p-6">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Appellate Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert help with your civil appeal.
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

export default CivilAppealsGuidePage;