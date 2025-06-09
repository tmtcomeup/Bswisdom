import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Book, GraduationCap, Scale, Briefcase, Globe, FileText, BookOpen, FileCode, PenTool, Presentation, Laptop, BarChart } from 'lucide-react';

const ResourcesMenu: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const resourceCategories = [
    {
      id: 'academic',
      title: 'Academic Resources',
      icon: <GraduationCap className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Research Papers', path: '/resources/academic/research-papers' },
        { name: 'Thesis Writing', path: '/resources/academic/thesis-writing' },
        { name: 'Dissertation Support', path: '/resources/academic/dissertation-support' },
        { name: 'Literature Reviews', path: '/resources/academic/literature-reviews' },
        { name: 'Creative Writing', path: '/resources/academic/creative-writing' },
        { name: 'Editing & Proofreading', path: '/resources/academic/editing-proofreading' },
        { name: 'Script Writing', path: '/resources/academic/script-writing' },
      ],
    },
    {
      id: 'website',
      title: 'Website Resources',
      icon: <Globe className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Web Design', path: '/resources/website/web-design' },
        { name: 'Development', path: '/resources/website/development' },
        { name: 'E-commerce', path: '/resources/website/ecommerce' },
        { name: 'Maintenance', path: '/resources/website/maintenance' },
      ],
    },
    {
      id: 'legal',
      title: 'Legal Resources',
      icon: <Scale className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Contracts', path: '/resources/legal/contracts' },
        { name: 'Civil Law', path: '/resources/legal/civil-law' },
        { name: 'Criminal Law', path: '/resources/legal/criminal-law' },
        { name: 'Legal Research', path: '/resources/legal/legal-research' },
      ],
    },
    {
      id: 'business-plans',
      title: 'Business Resources',
      icon: <Briefcase className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Startup Plans', path: '/resources/business-plans/startup-plans' },
        { name: 'Nonprofit Grants', path: '/resources/business-plans/nonprofit-grants' },
        { name: 'Government Contracts', path: '/resources/business-plans/government-contracts' },
        { name: 'Investment Proposals', path: '/resources/business-plans/investment-proposals' },
        { name: 'Market Analysis', path: '/resources/business-plans/market-analysis' },
        { name: 'Financial Projections', path: '/resources/business-plans/financial-projections' },
        { name: 'Grant Writing', path: '/resources/business-plans/grant-writing' },
      ],
    },
    {
      id: 'case-review',
      title: 'Case Review',
      icon: <FileText className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Criminal Analysis', path: '/resources/case-review/criminal-analysis' },
        { name: 'Civil Review', path: '/resources/case-review/civil-review' },
        { name: 'Family Law', path: '/resources/case-review/family-law' },
        { name: 'Corporate Review', path: '/resources/case-review/corporate-review' },
      ],
    },
    {
      id: 'contracts',
      title: 'Contracts',
      icon: <FileCode className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Business Contracts', path: '/resources/contracts/business-contracts' },
        { name: 'Employment Contracts', path: '/resources/contracts/employment-contracts' },
        { name: 'Service Agreements', path: '/resources/contracts/service-agreements' },
        { name: 'Partnership Agreements', path: '/resources/contracts/partnership-agreements' },
        { name: 'Licensing Agreements', path: '/resources/contracts/licensing-agreements' },
      ],
    },
    {
      id: 'homework',
      title: 'Homework Help',
      icon: <BookOpen className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Math & Sciences', path: '/resources/homework/math-sciences' },
        { name: 'Literature Reviews', path: '/resources/homework/literature-reviews' },
        { name: 'Social Sciences', path: '/resources/homework/social-sciences' },
        { name: 'Language Learning', path: '/resources/homework/language-learning' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume Services',
      icon: <FileText className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Resume Writing', path: '/resources/resume/writing' },
        { name: 'Resume Templates', path: '/resources/resume/templates' },
        { name: 'Job Targeting', path: '/resources/resume/targeting' },
        { name: 'Resume Review', path: '/resources/resume/review' },
      ],
    },
    {
      id: 'professional',
      title: 'Professional Development',
      icon: <Briefcase className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Career Development', path: '/resources/professional/career-development' },
        { name: 'Skills Assessment', path: '/resources/professional/skills' },
        { name: 'Goal Setting', path: '/resources/professional/goals' },
        { name: 'Networking', path: '/resources/professional/networking' },
      ],
    },
    {
      id: 'courses',
      title: 'Course Creation',
      icon: <Presentation className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Course Planning', path: '/resources/courses/course-planning' },
        { name: 'Content Creation', path: '/resources/courses/content-creation' },
        { name: 'Assessment Design', path: '/resources/courses/assessment-design' },
        { name: 'Platform Setup', path: '/resources/courses/platform-setup' },
      ],
    },
    {
      id: 'ebook',
      title: 'E-book Writing',
      icon: <PenTool className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Fiction Writing', path: '/resources/ebook/fiction-writing' },
        { name: 'Non-fiction Writing', path: '/resources/ebook/nonfiction-writing' },
        { name: 'E-book Formatting', path: '/resources/ebook/ebook-formatting' },
        { name: 'Self-Publishing', path: '/resources/ebook/self-publishing' },
        { name: 'Book Marketing', path: '/resources/ebook/book-marketing' },
      ],
    },
    {
      id: 'trading',
      title: 'Trading Algorithms',
      icon: <BarChart className="w-5 h-5 text-primary-600" />,
      links: [
        { name: 'Trading Fundamentals', path: '/resources/trading/fundamentals' },
        { name: 'Technical Analysis', path: '/resources/trading/technical-analysis' },
        { name: 'Trading Strategies', path: '/resources/trading/strategies' },
        { name: 'Risk Management', path: '/resources/trading/risk-management' },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryId);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-200">
        <Book className="w-6 h-6 text-primary-600" />
        <h2 className="text-lg font-semibold text-gray-900">Resource Categories</h2>
      </div>
      
      <div className="space-y-2">
        {resourceCategories.map((category) => (
          <div key={category.id} className="border-b border-gray-100 pb-2 last:border-0">
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex items-center justify-between w-full py-2 px-1 hover:bg-gray-50 rounded-md"
            >
              <div className="flex items-center">
                {category.icon}
                <span className="ml-2 text-gray-700">{category.title}</span>
              </div>
              {openCategory === category.id ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {openCategory === category.id && (
              <div className="pl-7 mt-1 space-y-1">
                {category.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="flex items-center py-1 px-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded"
                  >
                    <ChevronRight className="w-3 h-3 mr-2" />
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={`/resources/${category.id}`}
                  className="flex items-center py-1 px-2 text-sm font-medium text-primary-600 hover:text-primary-800"
                >
                  View all {category.title.toLowerCase()}...
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-2 border-t border-gray-200">
        <Link
          to="/resources"
          className="flex items-center justify-center py-2 px-4 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-md font-medium"
        >
          <Book className="w-4 h-4 mr-2" />
          Browse All Resources
        </Link>
      </div>
    </div>
  );
};

export default ResourcesMenu;