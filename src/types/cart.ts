export interface CartItem {
  cartItemId: string;
  serviceId: string;
  title: string;
  price: number;
  requirements: string;
  rushDelivery?: boolean;
}

export interface CartContextType {
  items: CartItem[];
  total: number;
  addItem: (item: Omit<CartItem, 'cartItemId'>) => void;
  removeItem: (cartItemId: string) => void;
  updateRequirements: (cartItemId: string, requirements: string) => void;
  clearCart: () => void;
}