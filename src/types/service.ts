export interface Service {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
  featured?: boolean;
  turnaround: string;
  rush?: {
    available: boolean;
    fee?: number;
    timeframe?: string;
  };
  specialOffer?: {
    type: 'tiered';
    tiers: {
      limit?: number;
      price: number;
      label: string;
    }[];
  };
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}