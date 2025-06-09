import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, GraduationCap, PenTool, Search, Link as LinkIcon, Book, Sparkles, CheckCircle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';

const ResearchPapersPage: React.FC = () => {
  const services = [
    {
      id: 'research-writing',
      title: 'Research Paper Development',
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />,
      description: 'Comprehensive guidance for academic research paper writing, from initial concept to final draft.'
    },
    {
      id: 'methodology-support',
      title: 'Research Methodology',
      icon: <Search className="w-6 h-6 text-primary-600" />,
      description: 'Expert support for research design, methodology selection, and data analysis approaches.'
    },
    {
      id: 'writing-editing',
      title: 'Writing & Editing',
      icon: <PenTool className="w-6 h-6 text-primary-600" />,
      description: 'Professional writing assistance and detailed editorial review for academic papers.'
    },
    {
      id: 'literature-review',
      title: 'Literature Review',
      icon: <Book className="w-6 h-6 text-primary-600" />,
      description: 'Systematic literature review support, source evaluation, and synthesis guidance.'
    }
  ];

  const topics = [
    {
      title: 'Planning & Organization',
      icon: <FileText className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Strategic research paper planning and organization:',
      items: [
        'Topic Selection & Refinement',
        'Research Question Development',
        'Timeline & Milestone Planning',
        'Resource Identification',
        'Project Management Tools',
        'Scope Definition',
        'Research Objectives Setting',
        'Preliminary Research Plan'
      ]
    },
    {
      title: 'Research Methodology',
      icon: <Search className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Comprehensive research methodology framework:',
      items: [
        'Research Design Selection',
        'Data Collection Methods',
        'Analysis Techniques',
        'Quality Assurance Protocols',
        'Ethical Considerations',
        'Sampling Strategies',
        'Validity & Reliability',
        'Research Limitations'
      ]
    },
    {
      title: 'Writing & Structure',
      icon: <PenTool className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Academic writing and paper structure:',
      items: [
        'Introduction & Background',
        'Literature Review Development',
        'Methodology Description',
        'Results Presentation',
        'Discussion & Conclusions',
        'Abstract Writing',
        'Keywords Selection',
        'Paper Formatting'
      ]
    },
    {
      title: 'Citations & Resources',
      icon: <LinkIcon className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Citation management and resource utilization:',
      items: [
        'Citation Style Guidelines',
        'Reference Management',
        'Source Evaluation',
        'Bibliography Organization',
        'Academic Databases',
        'Citation Software Tools',
        'Digital Library Access',
        'Resource Documentation'
      ]
    },
    {
      title: 'Research Tools',
      icon: <Sparkles className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Essential tools and software for research:',
      items: [
        'Statistical Analysis Software',
        'Reference Management Tools',
        'Data Visualization Tools',
        'Survey Platforms',
        'Qualitative Analysis Software',
        'Research Databases',
        'Writing Assistance Tools',
        'Collaboration Platforms'
      ]
    },
    {
      title: 'Quality & Review',
      icon: <CheckCircle className="w-6 h-6 text-primary-600 mb-4" />,
      content: 'Quality assurance and review process:',
      items: [
        'Peer Review Guidelines',
        'Self-Review Checklist',
        'Quality Assessment Criteria',
        'Formatting Verification',
        'Plagiarism Prevention',
        'Technical Review Process',
        'Editorial Standards',
        'Final Submission Prep'
      ]
    }
  ];

  const researchGuides = [
    {
      title: 'Research Process Guide',
      path: '/resources/academic/guides/research-methodology',
      description: 'Comprehensive guide to research methodology and process'
    },
    {
      title: 'Citation Styles',
      path: '/resources/academic/guides/citation-styles',
      description: 'Detailed guide to different citation styles and formats'
    },
    {
      title: 'Writing Standards',
      path: '/resources/academic/guides/writing-standards',
      description: 'Academic writing standards and best practices'
    },
    {
      title: 'Peer Review',
      path: '/resources/academic/guides/peer-review',
      description: 'Guidelines for peer review process and feedback'
    }
  ];

  return (
    <ResourceLayout
      title="Academic Research Papers"
      description="Comprehensive guidance for writing and developing academic research papers that meet scholarly standards."
    >
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Research Paper Development</h1>
          <p className="text-xl text-gray-600">
            Expert guidance and resources for creating high-quality academic research papers, from initial concept to final publication.
          </p>
        </div>

        {/* Services Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/resources/academic/${service.id}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Topics Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research Paper Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-4">{section.content}</p>
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
        </div>

        {/* Related Guides */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchGuides.map((guide, index) => (
              <Link
                key={index}
                to={guide.path}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600">
                      {guide.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help with Your Research Paper?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our academic experts are ready to assist you with your research paper development.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Get Expert Help
            </Link>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default ResearchPapersPage;