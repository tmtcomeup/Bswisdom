export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  // Content Management
  pages: `${API_BASE_URL}/pages`,
  services: `${API_BASE_URL}/services`,
  blog: `${API_BASE_URL}/blog`,
  
  // User Management
  users: `${API_BASE_URL}/users`,
  orders: `${API_BASE_URL}/orders`,
  payments: `${API_BASE_URL}/payments`,
  
  // Analytics
  analytics: `${API_BASE_URL}/analytics`,
  
  // Settings
  settings: `${API_BASE_URL}/settings`,
  
  // Authentication
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    refresh: `${API_BASE_URL}/auth/refresh`,
    logout: `${API_BASE_URL}/auth/logout`,
  }
};