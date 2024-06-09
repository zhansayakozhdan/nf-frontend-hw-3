'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { IUser } from '../types/types';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
  user: IUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
        if (token) {
          try {
            const response = await axios.get('https://dummyjson.com/auth/check', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
  
            if (response.status === 200) {
              setIsAuthenticated(true);
              fetchUser(token);
            }
          } catch (e) {
            console.error('Ошибка при проверке авторизации:', e);
            setIsAuthenticated(false);
          }
        }
      };
  
      checkAuth();
  }, [token]);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        router.push('/posts');
      }
    } catch (error) {
      console.error('Failed to login:', error);
      setIsAuthenticated(false);
    }
  };

  const fetchUser = async (token: string) => {
    try {
      const response = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (e) {
      console.error('Ошибка при получении данных пользователя:', e);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token, user }}>
      {children}
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
