import React, { createContext, useContext, useState } from 'react';
import { CartContextType, CartItem } from '../types/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, 'cartItemId'>) => {
    setItems(currentItems => [
      ...currentItems,
      { ...item, cartItemId: crypto.randomUUID() }
    ]);
  };

  const removeItem = (cartItemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.cartItemId !== cartItemId));
  };

  const updateRequirements = (cartItemId: string, requirements: string) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.cartItemId === cartItemId ? { ...item, requirements } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ items, total, addItem, removeItem, updateRequirements, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};