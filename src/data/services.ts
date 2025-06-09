import { ServiceCategory } from '../types/service';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Professional legal document preparation and assistance',
    services: [
      {
        id: 'legal-motion',
        title: 'Legal Motion Writing',
        price: 299.99,
        description: 'Professional legal motion writing assistance for self-represented litigants',
        imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80',
        category: 'legal',
        featured: true,
        features: [
          'Legal defense in criminal cases',
          'Civil lawsuit proceedings',
          'Court appeals and motions',
          'Legal document preparation',
          'Expert review by legal professionals',
          'Comprehensive research included',
          'Formatted according to court requirements',
          'Zero AI detection guaranteed'
        ],
        turnaround: '3-7 days',
        rush: {
          available: true,
          fee: 99.99,
          timeframe: '24-48 hours'
        }
      },
      {
        id: 'case-review',
        title: 'Case Review & Analysis',
        price: 9.99,
        description: 'Get expert analysis of your legal case to determine if our Legal Motion Writing service is right for you. More affordable than any lawyer consultation!',
        imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
        category: 'legal',
        features: [
          'Professional case evaluation',
          'Expert legal guidance',
          'Detailed recommendations',
          'Fraction of lawyer consultation cost',
          'Criminal case assessment',
          'Civil case review',
          'Child custody case analysis',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-48 hours',
        rush: {
          available: true,
          fee: 4.99,
          timeframe: '12 hours'
        }
      },
      {
        id: 'contract-review',
        title: 'Contract Review & Drafting',
        price: 199.99,
        description: 'Professional contract review, drafting, and negotiation assistance',
        imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
        category: 'legal',
        features: [
          'Business contracts',
          'Employment agreements',
          'Service agreements',
          'Partnership contracts',
          'Legal compliance review',
          'Risk assessment',
          'Negotiation support',
          'Zero AI detection guaranteed'
        ],
        turnaround: '3-7 days',
        rush: {
          available: true,
          fee: 99.99,
          timeframe: '24-48 hours'
        }
      },
      {
        id: 'prenup-agreement',
        title: 'Prenuptial Agreement',
        price: 199.99,
        description: 'Professional prenuptial agreement drafting and review',
        imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80',
        category: 'legal',
        features: [
          'Asset protection',
          'Property division',
          'Debt allocation',
          'Spousal support terms',
          'Inheritance rights',
          'Business interests',
          'Future earnings',
          'Zero AI detection guaranteed'
        ],
        turnaround: '3-7 days',
        rush: {
          available: true,
          fee: 99.99,
          timeframe: '24-48 hours'
        }
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Services',
    description: 'Professional business document preparation and planning',
    services: [
      {
        id: 'business-plan',
        title: 'Business Plan & Grant Writing',
        price: 29.99,
        description: 'Comprehensive business plan development and grant writing services',
        imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
        category: 'business',
        features: [
          'Startup ventures',
          'Small businesses',
          'Non-profit organizations',
          'Grant applications',
          'Market analysis',
          'Financial projections',
          'Implementation strategy',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      },
      {
        id: 'resume-cover',
        title: 'Resume & Cover Letter',
        price: 29.99,
        description: 'Professional resume and cover letter writing services',
        imageUrl: 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&q=80',
        category: 'business',
        features: [
          'ATS-optimized resumes',
          'Custom cover letters',
          'LinkedIn profiles',
          'Professional bios',
          'Industry targeting',
          'Keyword optimization',
          'Achievement highlighting',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      }
    ]
  },
  {
    id: 'content',
    name: 'Content Creation',
    description: 'Professional content writing and development services',
    services: [
      {
        id: 'academic-writing',
        title: 'Academic Writing & Support',
        price: 29.99,
        description: 'Expert academic writing and creative content development',
        imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80',
        category: 'content',
        features: [
          'Research papers & essays',
          'Movie script writing',
          'TV series scripts',
          'Podcast scripts',
          'Play writing',
          'Video content scripts',
          'Creative writing',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      },
      {
        id: 'homework-guidance',
        title: 'Homework & Test Guidance',
        price: 29.99,
        description: 'Comprehensive academic support for homework and test preparation',
        imageUrl: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80',
        category: 'content',
        features: [
          'Homework assistance',
          'Test preparation',
          'Study guides',
          'Practice questions',
          'Subject explanations',
          'Learning strategies',
          'Performance tips',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      },
      {
        id: 'ebook-creation',
        title: 'Complete eBook Creation',
        price: 29.99,
        description: 'Professional eBook writing, design, and publishing assistance',
        imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80',
        category: 'content',
        features: [
          'Non-fiction books',
          'Fiction novels',
          'Self-help guides',
          'Technical manuals',
          'Cover design',
          'Interior formatting',
          'Publishing setup',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      },
      {
        id: 'course-development',
        title: 'Online Course Development',
        price: 29.99,
        description: 'Complete online course development and creation services',
        imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80',
        category: 'content',
        features: [
          'Course structuring',
          'Content planning',
          'Learning materials',
          'Assessment design',
          'Resource creation',
          'Platform setup',
          'Marketing materials',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      }
    ]
  },
  {
    id: 'development',
    name: 'Professional Development',
    description: 'Career and personal development services',
    services: [
      {
        id: 'professional-development',
        title: 'Professional Development Plans',
        price: 29.99,
        description: 'Comprehensive career advancement and professional growth strategies',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
        category: 'development',
        features: [
          'Career advancement strategies',
          'Company advancement plans',
          'Leadership development',
          'Skills assessment & planning',
          'Professional goal setting',
          'Performance optimization',
          'Industry-specific guidance',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      }
    ]
  },
  {
    id: 'tools',
    name: 'Digital Tools',
    description: 'Professional digital tools and templates',
    services: [
      {
        id: 'digital-tools',
        title: 'Digital Tools & Templates',
        price: 29.99,
        description: 'Professional digital tools, templates, and resources for business and personal use',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        category: 'tools',
        features: [
          'Business templates',
          'Project management tools',
          'Financial spreadsheets',
          'Marketing templates',
          'Process automation',
          'Workflow optimization',
          'Custom tool development',
          'Zero AI detection guaranteed'
        ],
        turnaround: '24-72 hours',
        rush: {
          available: true,
          fee: 14.99,
          timeframe: '12 hours'
        }
      }
    ]
  },
  {
    id: 'website',
    name: 'Website Creation',
    description: 'Professional website design and development',
    services: [
      {
        id: 'website-creation',
        title: 'Website Creation',
        price: 399.99,
        description: 'Professional website design and development with unlimited pages',
        imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
        category: 'website',
        featured: true,
        specialOffer: {
          type: 'tiered',
          tiers: [
            {
              limit: 100000,
              price: 399.99,
              label: 'First 100,000 clients'
            },
            {
              limit: 200000,
              price: 699.99,
              label: 'Next 100,000 clients'
            },
            {
              price: 999.99,
              label: 'Regular price'
            }
          ]
        },
        features: [
          'Business websites',
          'E-commerce stores',
          'Portfolio sites',
          'Landing pages',
          'Custom design',
          'Mobile responsive',
          'SEO optimization',
          'Zero AI detection guaranteed'
        ],
        turnaround: '3-7 days',
        rush: {
          available: true,
          fee: 199.99,
          timeframe: '24-48 hours'
        }
      }
    ]
  }
];