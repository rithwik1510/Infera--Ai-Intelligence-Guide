
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { login as apiLogin, register as apiRegister, getMe } from '@/lib/auth';
import type { AuthUser } from '@/lib/auth';

// Define the shape of the context
interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('authToken');
      if (storedToken) {
        try {
          const profile = await getMe(storedToken);
          setUser(profile);
          setToken(storedToken);
        } catch {
          // Token is invalid, clear it
          localStorage.removeItem('authToken');
          router.push('/auth/login');
        }
      }
      setIsLoading(false);
    };
    initializeAuth();
  }, [router]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { accessToken } = await apiLogin(email, password);
      localStorage.setItem('authToken', accessToken);
      const profile = await getMe(accessToken);
      setToken(accessToken);
      setUser(profile);
      router.push('/dashboard'); // Redirect to dashboard on successful login
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An error occurred during login.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await apiRegister(email, password);
      // Redirect to login page after successful registration
      router.push('/auth/login?registered=true');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An error occurred during registration.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
    router.push('/auth/login');
  };

  const value = { user, token, login, register, logout, isLoading, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Create a custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

