import React from 'react';
import { Clock, Zap } from 'lucide-react';
import type { Service } from '../../types/service';

interface DeliveryInfoProps {
  turnaround: string;
  rush: Service['rush'];
}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({ turnaround, rush }) => {
  return (
    <div className="space-y-3 mb-4">
      <div className="flex items-center text-sm text-gray-600">
        <Clock className="h-4 w-4 mr-2" />
        <span>Standard Delivery: {turnaround}</span>
      </div>
      {rush && (
        <div className="flex items-center text-sm text-green-600">
          <Zap className="h-4 w-4 mr-2" />
          <span>Rush Delivery Available: {rush.timeframe} (+${rush.fee})</span>
        </div>
      )}
    </div>
  );
};