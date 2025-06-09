export type PaymentMethod = 'stripe' | 'cashapp' | 'zelle';

export interface PaymentDetails {
  method: PaymentMethod;
  rushDelivery: boolean;
}

export interface PaymentSettings {
  cashAppUsername: string;
  zelleEmail: string;
  zellePhone: string;
  stripePublicKey: string;
}

export interface PaymentFormData {
  name: string;
  email: string;
  amount: number;
  method: PaymentMethod;
}