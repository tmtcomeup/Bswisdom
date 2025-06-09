import { useState, useEffect } from 'react';
import { PaymentSettings } from '../types/payment';

const defaultSettings: PaymentSettings = {
  cashAppUsername: '$BSWCASHPAY',
  zelleEmail: 'BrilliantStrategicWisdom@gmail.com',
  zellePhone: '',
  stripePublicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || ''
};

const usePaymentSettings = () => {
  const [settings, setSettings] = useState<PaymentSettings>(() => {
    try {
      const stored = localStorage.getItem('paymentSettings');
      return stored ? JSON.parse(stored) : defaultSettings;
    } catch (error) {
      console.error('Error loading payment settings:', error);
      return defaultSettings;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('paymentSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving payment settings:', error);
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<PaymentSettings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }));
  };

  return {
    settings,
    updateSettings
  };
};

export default usePaymentSettings;