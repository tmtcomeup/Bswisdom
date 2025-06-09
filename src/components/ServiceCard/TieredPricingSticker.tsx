import React from 'react';
import { Flame } from 'lucide-react';
import type { Service } from '../../types/service';

interface TieredPricingStickerProps {
  specialOffer: NonNullable<Service['specialOffer']>;
}

export const TieredPricingSticker: React.FC<TieredPricingStickerProps> = ({ specialOffer }) => {
  if (specialOffer.type !== 'tiered') return null;

  const [firstTier, secondTier, finalTier] = specialOffer.tiers;

  return (
    <div className="absolute top-0 right-0 z-10">
      <div className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white px-4 py-2 rounded-bl-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center">
          <div className="mr-2 relative">
            <Flame className="h-6 w-6 text-yellow-300 animate-pulse" />
            <Flame className="h-4 w-4 text-orange-400 absolute -top-1 -right-1 animate-pulse delay-100" />
          </div>
          <div className="text-sm">
            <div className="font-bold mb-1">🔥 Limited Time Pricing!</div>
            <div className="space-y-1">
              <div className="flex items-center text-xs">
                <span className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-[10px] mr-1">1</span>
                First {(firstTier.limit! / 1000).toFixed(0)}K: ${firstTier.price.toFixed(2)}
              </div>
              <div className="flex items-center text-xs">
                <span className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] mr-1">2</span>
                Next {((secondTier.limit! - firstTier.limit!) / 1000).toFixed(0)}K: ${secondTier.price.toFixed(2)}
              </div>
              <div className="flex items-center text-xs">
                <span className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center text-[10px] mr-1">3</span>
                Then: ${finalTier.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};