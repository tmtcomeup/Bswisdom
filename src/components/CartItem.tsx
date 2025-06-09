import React from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types/cart';

interface CartItemProps {
  item: CartItemType;
  onRemove: (cartItemId: string) => void;
  onUpdateRequirements: (cartItemId: string, requirements: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateRequirements }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
          <p className="text-lg font-bold text-blue-600">${item.price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => onRemove(item.cartItemId)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Requirements:
        </label>
        <textarea
          value={item.requirements}
          onChange={(e) => onUpdateRequirements(item.cartItemId, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          placeholder="Please describe your requirements in detail..."
        />
      </div>
    </div>
  );
};

export default CartItem;