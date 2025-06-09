import React from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Scale, Briefcase, Globe, GraduationCap, BookOpen, FileCode, PenTool, Presentation, BarChart } from 'lucide-react';
import ResourceLayout from '../../components/ResourceLayout';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      id: 'academic',
      title: 'Academic Resources',
      icon: <GraduationCap className="w-12 h-12 text-primary-600" />,
      description: 'Research papers, thesis writing, and academic support.',
      links: [
        { name: 'Research Papers', path: '/resources/academic/research-papers' },
        { name: 'Thesis Writing', path: '/resources/academic/thesis-writing' },
        { name: 'Literature Reviews', path: '/resources/academic/literature-reviews' },
      ],
    },
    {
      id: 'website',
      title: 'Website Resources',
      icon: <Globe className="w-12 h-12 text-primary-600" />,
      description: 'Website design, development, and maintenance.',
      links: [
        { name: 'Web Design', path: '/resources/website/web-design' },
        { name: 'Development', path: '/resources/website/development' },
        { name: 'Maintenance', path: '/resources/website/maintenance' },
      ],
    },
    {
      id: 'legal',
      title: 'Legal Resources',
      icon: <Scale className="w-12 h-12 text-primary-600" />,
      description: 'Legal documents, contracts, and case reviews.',
      links: [
        { name: 'Contracts', path: '/resources/legal/contracts' },
        { name: 'Civil Law', path: '/resources/legal/civil-law' },
        { name: 'Criminal Law', path: '/resources/legal/criminal-law' },
      ],
    },
    {
      id: 'business-plans',
      title: 'Business Resources',
      icon: <Briefcase className="w-12 h-12 text-primary-600" />,
      description: 'Business plans, market analysis, and financial projections.',
      links: [
        { name: 'Market Analysis', path: '/resources/business-plans/market-analysis' },
        { name: 'Financial Projections', path: '/resources/business-plans/financial-projections' },
      ],
    },
    {
      id: 'case-review',
      title: 'Case Review Resources',
      icon: <FileText className="w-12 h-12 text-primary-600" />,
      description: 'Criminal, civil, and corporate case analysis.',
      links: [],
    },
    {
      id: 'contracts',
      title: 'Contract Resources',
      icon: <FileCode className="w-12 h-12 text-primary-600" />,
      description: 'Business, employment, and partnership agreements.',
      links: [],
    },
    {
      id: 'homework',
      title: 'Homework Resources',
      icon: <BookOpen className="w-12 h-12 text-primary-600" />,
      description: 'Math, science, literature, and language learning support.',
      links: [],
    },
    {
      id: 'resume',
      title: 'Resume Resources',
      icon: <FileText className="w-12 h-12 text-primary-600" />,
      description: 'Professional resume writing and career development.',
      links: [],
    },
    {
      id: 'professional',
      title: 'Professional Resources',
      icon: <Briefcase className="w-12 h-12 text-primary-600" />,
      description: 'Career development, skills assessment, and networking.',
      links: [],
    },
    {
      id: 'courses',
      title: 'Course Resources',
      icon: <Presentation className="w-12 h-12 text-primary-600" />,
      description: 'Course planning, content creation, and assessment design.',
      links: [],
    },
    {
      id: 'ebook',
      title: 'E-book Resources',
      icon: <PenTool className="w-12 h-12 text-primary-600" />,
      description: 'Fiction writing, non-fiction writing, and e-book formatting.',
      links: [],
    },
    {
      id: 'trading',
      title: 'Trading Resources',
      icon: <BarChart className="w-12 h-12 text-primary-600" />,
      description: 'Trading fundamentals, technical analysis, and risk management.',
      links: [],
    },
  ];

  return (
    <ResourceLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Book className="w-10 h-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our comprehensive collection of resources and services designed to help you succeed.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="flex items-center text-primary-600 hover:text-primary-800"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <Link
                  to={`/resources/${category.id}`}
                  className="text-primary-600 font-medium hover:text-primary-800 flex items-center"
                >
                  View All {category.title}
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default ResourcesPage;