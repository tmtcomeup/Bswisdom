import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    // Check URL first for admin path
    const isAdminPath = window.location.pathname.startsWith('/admin');
    const stored = localStorage.getItem('auth');
    const storedAuth = stored ? JSON.parse(stored) : null;
    
    // If we're on admin path and have stored credentials, validate them
    if (isAdminPath && storedAuth?.user?.email === import.meta.env.VITE_ADMIN_EMAIL) {
      return storedAuth;
    }
    
    return { isAuthenticated: false, user: null };
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(authState));
  }, [authState]);

  const login = async (email: string, password: string) => {
    if (email === import.meta.env.VITE_ADMIN_EMAIL && 
        password === import.meta.env.VITE_ADMIN_PASSWORD) {
      const authData = { isAuthenticated: true, user: { email } };
      setAuthState(authData);
      localStorage.setItem('auth', JSON.stringify(authData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    localStorage.removeItem('auth');
    window.location.href = '/admin';
  };

  return {
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
    login,
    logout
  };
};

export default useAuth;