export interface EmailNotification {
  type: 'Order Confirmation' | 'Help Request' | 'Contact Form' | 'Donation Receipt';
  userEmail: string;
  content: Record<string, string | number>;
}