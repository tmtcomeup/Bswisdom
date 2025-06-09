import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Settings, LogOut } from 'lucide-react';
import useAuth from '../hooks/useAuth';

const AdminNav: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const navItems = [
    {
      label: 'Dashboard',
      path: '/admin/dashboard',
      icon: LayoutDashboard
    },
    {
      label: 'Services',
      path: '/admin/services',
      icon: Package
    },
    {
      label: 'Orders',
      path: '/admin/orders',
      icon: ShoppingCart
    },
    {
      label: 'Settings',
      path: '/admin/settings',
      icon: Settings
    }
  ];

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          <div className="flex items-center">
            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;