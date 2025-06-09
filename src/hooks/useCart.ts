import { useState, useEffect } from 'react';
import { CartItem } from '../types/cart';

const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'cartItemId'>) => {
    const cartItemId = `${item.serviceId}-${Date.now()}`;
    setItems(prev => Array.isArray(prev) ? [...prev, { ...item, cartItemId }] : [{ ...item, cartItemId }]);
  };

  const removeItem = (cartItemId: string) => {
    setItems(prev => Array.isArray(prev) ? prev.filter(item => item.cartItemId !== cartItemId) : []);
  };

  const updateRequirements = (cartItemId: string, requirements: string) => {
    setItems(prev => 
      Array.isArray(prev) 
        ? prev.map(item => item.cartItemId === cartItemId ? { ...item, requirements } : item)
        : []
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = Array.isArray(items) ? items.reduce((sum, item) => sum + (item.price || 0), 0) : 0;

  return {
    items: Array.isArray(items) ? items : [],
    total,
    addItem,
    removeItem,
    updateRequirements,
    clearCart,
  };
};

export default useCart;