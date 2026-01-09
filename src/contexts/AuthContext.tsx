import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/api';

type User = {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: { name?: string; password?: string }) => Promise<void>;
  uploadProfilePicture: (file: File) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await authService.getCurrentUser();
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to load user', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    await authService.login({ email, password });
    const userData = await authService.getCurrentUser();
    setUser(userData);
  };

  const register = async (name: string, email: string, password: string) => {
    await authService.register({ name, email, password });
    await login(email, password);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateProfile = async (data: { name?: string; password?: string }) => {
    if (!user) return;
    const updatedUser = await authService.updateProfile(data);
    setUser({ ...user, ...updatedUser });
  };

  const uploadProfilePicture = async (file: File) => {
    if (!user) return;
    const updatedUser = await authService.uploadProfilePicture(file);
    setUser({ ...user, ...updatedUser });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        updateProfile,
        uploadProfilePicture,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
