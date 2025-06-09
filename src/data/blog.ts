import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'legal-motion-writing-guide',
    title: 'The Complete Guide to Legal Motion Writing: Everything You Need to Know',
    slug: 'complete-guide-legal-motion-writing',
    author: {
      name: 'Y.Wise Creator',
      avatar: '/company-logo.png'
    },
    date: '2024-03-15',
    category: 'Legal',
    tags: ['Legal Writing', 'Motion Writing', 'Court Procedures', 'Legal Tips'],
    excerpt: 'Master the art of legal motion writing with our comprehensive guide. Learn structure, formatting, and persuasive techniques that win cases.',
    content: `
      <h2>Understanding Legal Motions</h2>
      <p>A legal motion is a formal request to a judge for a specific action or decision. Whether you're seeking summary judgment, dismissal, or any other court action, the quality of your motion can significantly impact your case's outcome.</p>

      <h2>Key Components of a Legal Motion</h2>
      <ul>
        <li>Caption and title</li>
        <li>Introduction and background</li>
        <li>Statement of facts</li>
        <li>Legal argument</li>
        <li>Conclusion and prayer for relief</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>Many self-represented litigants make critical errors in their motions. Here are the top mistakes to avoid...</p>

      <h2>Tips for Persuasive Writing</h2>
      <p>The most effective legal motions combine clear writing with persuasive argumentation...</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
    readTime: 15,
    socialShares: 342
  },
  {
    id: 'business-plan-essentials',
    title: 'How to Write a Business Plan That Gets Funded: A Step-by-Step Guide',
    slug: 'business-plan-writing-guide',
    author: {
      name: 'Y.Wise Creator',
      avatar: '/company-logo.png'
    },
    date: '2024-03-12',
    category: 'Business',
    tags: ['Business Plan', 'Entrepreneurship', 'Funding', 'Startup'],
    excerpt: 'Learn how to create a compelling business plan that attracts investors and sets your venture up for success.',
    content: `
      <h2>Why Your Business Plan Matters</h2>
      <p>A well-crafted business plan is more than just a document – it's your roadmap to success and your ticket to funding...</p>

      <h2>Essential Components</h2>
      <ul>
        <li>Executive Summary</li>
        <li>Market Analysis</li>
        <li>Financial Projections</li>
        <li>Marketing Strategy</li>
        <li>Operations Plan</li>
      </ul>

      <h2>Financial Projections That Work</h2>
      <p>Learn how to create realistic financial projections that investors trust...</p>

      <h2>Market Analysis Techniques</h2>
      <p>Discover the most effective methods for analyzing your market and competition...</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    readTime: 12,
    socialShares: 256
  }
];