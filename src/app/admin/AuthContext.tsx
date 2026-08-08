import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { loginApi, logoutApi, silentRefresh, setAccessToken } from './api';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Attempt silent refresh on mount
  useEffect(() => {
    let cancelled = false;
    silentRefresh().then((success) => {
      if (!cancelled) {
        setIsAuthenticated(success);
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Auto-refresh token every 14 minutes (token expires in 15 min)
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(async () => {
      const success = await silentRefresh();
      if (!success) {
        setIsAuthenticated(false);
      }
    }, 14 * 60 * 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const login = useCallback(async (username: string, password: string) => {
    await loginApi(username, password);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(async () => {
    await logoutApi();
    setAccessToken(null);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
