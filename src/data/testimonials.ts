import { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    serviceId: 'legal-motion',
    clientName: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    rating: 5,
    content: 'The legal motion writing service was exceptional. The document was professionally written and helped me win my case.',
    date: '2024-03-15',
    verified: true
  },
  {
    id: '2',
    serviceId: 'contract-review',
    clientName: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    rating: 5,
    content: 'Thorough contract review that caught several important issues. Highly recommended!',
    date: '2024-03-10',
    verified: true
  },
  {
    id: '3',
    serviceId: 'business-plan',
    clientName: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    rating: 5,
    content: 'The business plan was comprehensive and well-researched. It helped me secure funding for my startup.',
    date: '2024-03-05',
    verified: true
  }
];