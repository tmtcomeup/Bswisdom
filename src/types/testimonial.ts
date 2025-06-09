export interface Testimonial {
  id: string;
  serviceId: string;
  clientName: string;
  avatar?: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}